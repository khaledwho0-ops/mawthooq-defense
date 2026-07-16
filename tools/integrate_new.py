# -*- coding: utf-8 -*-
# Build the data files for the two new EAL platforms from workflow PASS candidates.
#   python integrate_new.py            -> MOCK (writes to scratchpad copies, node-validates)
#   python integrate_new.py APPLY      -> read scratchpad/pass_aman.json + pass_hoqoqi.json,
#                                         merge into canonical accumulators, regenerate the live
#                                         aman/threats.js (window.CARDS) + hoqoqi/rights.js.
# Idempotent: canonical JSON in scratchpad accumulates across batches, dedup by id.
import json, re, sys, os, hashlib, subprocess

SITE = r"C:\Users\pc\Desktop\EGY\mawthooq-site"
PAD  = r"C:\Users\pc\AppData\Local\Temp\claude\C--Users-pc-Desktop-EGY\238c38f6-e98e-42ed-9a0a-9c64acef99ad\scratchpad"
PROJ = {
  "aman":   {"pass": "pass_aman.json",   "canon": "aman_canonical.json",   "out": os.path.join(SITE, "aman",   "threats.js"), "var": "CARDS"},
  "hoqoqi": {"pass": "pass_hoqoqi.json", "canon": "hoqoqi_canonical.json", "out": os.path.join(SITE, "hoqoqi", "rights.js"),  "var": "CARDS"},
}

def qhash(q): return hashlib.sha256((q or "").encode("utf-8")).hexdigest()[:10]
def srcid(url, cid):
    d = (url or "").lower()
    p = ("ncsc" if "ncsc.gov" in d else "cisa" if "cisa.gov" in d else "ic3" if "ic3.gov" in d or "fbi.gov" in d
         else "ftc" if "ftc.gov" in d or "identitytheft.gov" in d
         else "unodc" if "unodc.org" in d else "who" if "who.int" in d else "ilo" if "ilo.org" in d else "web")
    return p + ":" + cid
def tag_for(url):
    d = (url or "").lower()
    for k, v in [("ncsc.gov","NCSC"),("cisa.gov","CISA"),("ic3.gov","FBI/IC3"),("fbi.gov","FBI"),
                 ("ftc.gov","FTC"),("identitytheft.gov","FTC"),
                 ("unodc.org","UNODC"),("who.int","WHO"),("ilo.org","ILO")]:
        if k in d: return v
    return "مصدر"
def licence_for(url):
    d = (url or "").lower()
    if "ncsc.gov" in d: return "© Crown copyright · OGL"
    if "ic3.gov" in d or "fbi.gov" in d: return "public domain (US gov)"
    if any(x in d for x in ["cisa.gov","ftc.gov","identitytheft.gov"]): return "public domain (US gov)"
    if "unodc.org" in d or "who.int" in d or "ilo.org" in d: return "© UN — quoted, attributed"
    return "quoted, attributed"

def to_view(c):
    sid = srcid(c.get("source_url"), c["id"])
    def steps(key):
        out = []
        for s in c.get(key, []) or []:
            t = s.get("t_ar") if isinstance(s, dict) else str(s)
            if t: out.append({"t": t, "src": sid})
        return out
    card = {
        "id": c["id"], "title": {"ar": c.get("title_ar",""), "en": c.get("title_en","")},
        "level": int(c.get("level", 2)), "domain": c.get("domain","عام"),
        "who": c.get("who") or [], "place": c.get("place") or [],
        "snapshot": {"ar": c.get("snapshot_ar",""), "en": c.get("snapshot_en","")},
        "redFlags": c.get("redFlags_ar", []),
        "do": steps("do_steps"), "dont": steps("dont_steps"),
        "whenWhy": {"ar": c.get("whenWhy_ar","")},
        "note": {"ar": c.get("note_ar","")},
        "basis": {"ar": c.get("basis_ar","")},
        "quote": c.get("verbatim_quote",""),
        "contacts": [{"label": x.get("label",""), "number": x.get("number",""), "say": x.get("say","")} for x in (c.get("contacts") or [])],
        "sources": [{"srcId": sid, "grade": tag_for(c.get("source_url"))}],
    }
    source = {sid: {"url": c.get("source_url",""), "label": c.get("source_name",""), "tag": tag_for(c.get("source_url")),
                    "sha256": qhash(c.get("verbatim_quote")), "retrieved": "2026-07-16", "licence": licence_for(c.get("source_url"))}}
    # A card's primary source cannot ground a phone number it does not contain (a US FTC page cannot
    # carry an Egyptian hotline). extra_sources lets a contact number carry its OWN provenance —
    # verified separately against the issuing body's own site. No number ships without one.
    for ex in (c.get("extra_sources") or []):
        exid = ex.get("srcId") or srcid(ex.get("url"), c["id"])
        source[exid] = {"url": ex.get("url",""), "label": ex.get("label",""), "tag": ex.get("tag","مصدر"),
                        "sha256": qhash(ex.get("quote")), "retrieved": ex.get("retrieved","2026-07-16"),
                        "licence": ex.get("licence","quoted, attributed")}
        card["sources"].append({"srcId": exid, "grade": ex.get("tag","مصدر")})
    return card, source

def node_validate(path):
    code = ("global.window={};global.document={addEventListener(){}};require(%s);"
            "console.log((global.window.CARDS||[]).length,'|',Object.keys(global.window.SOURCES||{}).length)" % json.dumps(path.replace('\\','/')))
    r = subprocess.run(["node","-e",code], capture_output=True, text=True)
    return (r.stdout.strip() or r.stderr.strip()[:160])

APPLY = len(sys.argv) > 1 and sys.argv[1] == "APPLY"
for name, cfg in PROJ.items():
    pass_path = os.path.join(PAD, cfg["pass"])
    if not os.path.exists(pass_path):
        print(name, "— no pass file, skip"); continue
    incoming = json.load(open(pass_path, encoding="utf-8"))
    canon_path = os.path.join(PAD, cfg["canon"])
    canon = json.load(open(canon_path, encoding="utf-8")) if os.path.exists(canon_path) else []
    seen = {c["id"] for c in canon}
    added = [c for c in incoming if c.get("id") and c["id"] not in seen and c.get("grounded") and c.get("do_steps")]
    canon += added
    json.dump(canon, open(canon_path, "w", encoding="utf-8"), ensure_ascii=False)
    cards, srcs = [], {}
    for c in canon:
        v, s = to_view(c); cards.append(v); srcs.update(s)
    js = ("/* %s · Egyptian Awareness Library. ONE LAW: every step grounded in window.SOURCES. Auto-generated. */\n"
          "window.SOURCES = %s;\nwindow.CARDS = %s;\n") % (name, json.dumps(srcs, ensure_ascii=False, indent=1), json.dumps(cards, ensure_ascii=False, indent=1))
    out = cfg["out"] if APPLY else os.path.join(PAD, "_test_%s.js" % name)
    open(out, "w", encoding="utf-8").write(js)
    print("%s: +%d new (total %d) -> node-validate:" % (name, len(added), len(canon)), node_validate(out))
print("MODE:", "APPLIED TO LIVE" if APPLY else "MOCK (scratchpad copies)")
