# -*- coding: utf-8 -*-
# Safely integrate workflow PASS candidates into the LIVE deployed files.
#   python integrate.py            -> MOCK dry-run (writes copies to scratchpad, validates via node)
#   python integrate.py APPLY      -> read real candidates from scratchpad/pass_cards.json + pass_claims.json,
#                                     append to live scenarios.js / claims.js (+ window.SOURCES), validate via node.
# Git is the safety net: if node-validate or render fails, `git checkout -- <file>` reverts instantly.
import json, re, sys, os, hashlib, subprocess, tempfile

SITE = r"C:\Users\pc\Desktop\EGY\mawthooq-site"
SCEN = os.path.join(SITE, "mostaed", "scenarios.js")
CLAIMS = os.path.join(SITE, "motazen", "claims.js")
PAD = r"C:\Users\pc\AppData\Local\Temp\claude\C--Users-pc-Desktop-EGY\238c38f6-e98e-42ed-9a0a-9c64acef99ad\scratchpad"

def num_only(s): m = re.search(r"\d+", s or "123"); return m.group(0) if m else "123"
def qhash(q): return hashlib.sha256((q or "").encode("utf-8")).hexdigest()[:10]
def srcid(url, cid):
    d = (url or "").lower()
    p = "nhs" if "nhs.uk" in d else "mlp" if "medlineplus" in d else "who" if "who.int" in d else "nature" if "nature" in d else "web"
    return p + ":" + cid
def licence_for(url):
    d = (url or "").lower()
    if "nhs.uk" in d: return "OGL v3 · © Crown copyright"
    # NOT all of MedlinePlus is public domain. The /ency/ medical-encyclopedia pages are
    # A.D.A.M., Inc. (Ebix) content: "© 1997-2026 A.D.A.M. ... Any duplication or distribution
    # ... is strictly prohibited ... You may not ... create derivative works from this content."
    # Only the MedlinePlus health-topic pages are NLM public domain. Labelling A.D.A.M. content
    # "public domain" is an unearned provenance claim — the exact defect this project exists to fight.
    if "medlineplus.gov/ency/" in d: return "© A.D.A.M./Ebix — مقتبس ومنسوب، مش ملكية عامة"
    if "medlineplus" in d or "nih.gov" in d: return "public domain (U.S. NLM)"
    return "quoted, attributed"

def brace_match(s, open_idx, op, cl):
    depth = 0
    for k in range(open_idx, len(s)):
        if s[k] == op: depth += 1
        elif s[k] == cl:
            depth -= 1
            if depth == 0: return k
    return -1

def to_card(c):
    sid = srcid(c.get("source_url"), c["id"])
    def steps(key):
        out = []
        for st in c.get(key, []) or []:
            t = st.get("t_ar") if isinstance(st, dict) else str(st)
            if t: out.append({"t": t, "src": sid})
        return out
    card = {
        "id": c["id"], "title": {"ar": c.get("title_ar", ""), "en": c.get("title_en", "")},
        "level": int(c.get("level", 3)), "who": c.get("who") or ["الكل"], "place": c.get("place") or ["البيت"],
        "domain": c.get("domain", "إسعافات"),
        "snapshot": {"ar": c.get("snapshot_ar", ""), "en": c.get("snapshot_en", "")},
        "redFlags": c.get("redFlags_ar", []), "do": steps("do_steps"), "dont": steps("dont_steps"),
        "whenWhy": {"ar": c.get("verbatim_quote", ""), "en": ""},
        "whoToCall": [{"label": "الإسعاف", "number": num_only(c.get("egyptian_number", "123")), "say": "قول نوع الحالة والعنوان بالظبط."},
                      {"label": "الطوارئ الموحّد", "number": "112", "say": "لو مش متأكد بأي رقم، اتصل بـ 112."}],
    }
    source = {sid: {"url": c.get("source_url", ""), "label": c.get("source_name", "") , "sha256": qhash(c.get("verbatim_quote")),
                    "retrieved": "2026-07-15", "licence": licence_for(c.get("source_url")), "tag": (c.get("source_name") or "").split()[0][:6]}}
    return card, source

def to_claim(c, q):
    sid = srcid(c.get("source_url"), c["id"])
    claim = {"id": c["id"], "question": q, "phase": 1, "domain": c.get("domain", "مزاج"),
        "crisis_sensitive": bool(c.get("crisis_sensitive", False)),
        "claim_ar": c.get("claim_ar", ""), "claim_en": c.get("claim_en", ""),
        "status": c.get("status", "established"), "evidence_tier": c.get("evidence_tier", c.get("status", "established")),
        "weird_flag": "yes" if c.get("weird_flag") else "no",
        "sources": [{"srcId": sid, "quote_en": c.get("verbatim_quote", "")}],
        "cultural_note_ar": c.get("cultural_note_ar", ""), "uncertainty_note_ar": c.get("uncertainty_note_ar", ""),
        "last_reviewed": "2026-07-15"}
    source = {sid: {"tier": c.get("evidence_tier", "A-consensus"), "label": c.get("source_name", ""), "url": c.get("source_url", ""),
                    "sha256": qhash(c.get("verbatim_quote")), "retrieved": "2026-07-15", "licence": "quoted, attributed"}}
    return claim, source

def inject(path, array_var, new_objs, new_sources, out_path):
    s = open(path, encoding="utf-8").read()
    existing = set(re.findall(r'id:\s*"([^"]+)"', s)) | set(re.findall(r'"id":\s*"([^"]+)"', s))
    new_objs = [o for o in new_objs if o["id"] not in existing]
    # append objects into the array
    am = s.find("window.%s" % array_var); ob = s.find("[", am); ce = brace_match(s, ob, "[", "]")
    add = ",\n" + ",\n".join(json.dumps(o, ensure_ascii=False, indent=1) for o in new_objs) + "\n" if new_objs else ""
    s = s[:ce] + add + s[ce:]
    # prepend sources into window.SOURCES = { ... }
    if new_sources:
        sm = s.find("window.SOURCES"); ob2 = s.find("{", sm)
        merged = {}
        [merged.update(x) for x in new_sources]
        srcadd = "\n" + ",\n".join('%s: %s' % (json.dumps(k, ensure_ascii=False), json.dumps(v, ensure_ascii=False)) for k, v in merged.items()) + ","
        s = s[:ob2 + 1] + srcadd + s[ob2 + 1:]
    open(out_path, "w", encoding="utf-8").write(s)
    return len(new_objs)

def node_validate(path, var):
    code = "global.window={};global.document={addEventListener(){}};require(%s);console.log((global.window.%s||[]).length,'|',Object.keys(global.window.SOURCES||{}).length)" % (json.dumps(path.replace('\\', '/')), var)
    r = subprocess.run(["node", "-e", code], capture_output=True, text=True)
    return (r.stdout.strip() or r.stderr.strip()[:120])

APPLY = len(sys.argv) > 1 and sys.argv[1] == "APPLY"
if APPLY:
    cards_in = json.load(open(os.path.join(PAD, "pass_cards.json"), encoding="utf-8"))
    claims_in = json.load(open(os.path.join(PAD, "pass_claims.json"), encoding="utf-8"))
else:  # MOCK
    cards_in = [{"id": "nosebleed", "title_ar": "رعاف", "title_en": "Nosebleed", "level": 3, "domain": "إسعافات",
        "snapshot_ar": "دم من الأنف.", "snapshot_en": "Nosebleed.", "redFlags_ar": ["نزيف غزير"],
        "do_steps": [{"t_ar": "اقعد وميّل راسك لقدّام."}, {"t_ar": "اضغط على الجزء اللين من الأنف ١٠–١٥ دقيقة."}],
        "dont_steps": [{"t_ar": "ماتميّلش راسك لورا."}], "source_name": "NHS — Nosebleed", "source_url": "https://www.nhs.uk/conditions/nosebleed/",
        "verbatim_quote": "pinch the soft part of your nose", "egyptian_number": "123", "grounded": True}]
    claims_in = [{"id": "ocd-basics", "domain": "قلق", "claim_ar": "الوسواس القهري مرض قابل للعلاج.", "claim_en": "OCD is treatable.",
        "status": "established", "evidence_tier": "A-consensus", "weird_flag": False, "source_name": "NHS — OCD",
        "source_url": "https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/overview/",
        "verbatim_quote": "OCD is a common mental health condition", "cultural_note_ar": "", "uncertainty_note_ar": "", "grounded": True}]

cards, csrc = [], []
for c in cards_in:
    o, s = to_card(c); cards.append(o); csrc.append(s)
maxq = 0
try:
    txt = open(CLAIMS, encoding="utf-8").read(); maxq = max([int(x) for x in re.findall(r'"question":\s*(\d+)', txt)] or [0])
except: pass
claims, clsrc = [], []
for i, c in enumerate(claims_in):
    o, s = to_claim(c, maxq + i + 1); claims.append(o); clsrc.append(s)

scen_out = SCEN if APPLY else os.path.join(PAD, "_test_scenarios.js")
claim_out = CLAIMS if APPLY else os.path.join(PAD, "_test_claims.js")
if not APPLY: import shutil; shutil.copyfile(SCEN, scen_out); shutil.copyfile(CLAIMS, claim_out); scen_out=os.path.join(PAD,"_test_scenarios.js"); claim_out=os.path.join(PAD,"_test_claims.js")
n1 = inject(SCEN, "SCENARIOS", cards, csrc, scen_out)
n2 = inject(CLAIMS, "CLAIMS", claims, clsrc, claim_out)
print("appended cards:", n1, "| claims:", n2)
print("scenarios node-validate (SCENARIOS | SOURCES):", node_validate(scen_out, "SCENARIOS"))
print("claims    node-validate (CLAIMS | SOURCES):", node_validate(claim_out, "CLAIMS"))
print("MODE:", "APPLIED TO LIVE" if APPLY else "MOCK (copies in scratchpad) — safe")
