# HANDOFF — مستعد / موثوق / EAL — read this before you touch anything

You are joining a live project with **zero prior context**. This file gives you the bare minimum to work
safely without breaking things or violating the one rule that matters. Read it fully, then read the
routing table (section 10) for your specific task. **Do not write code or content until you have.**

Author of this handoff: the previous agent, who built the current state. Date: 2026-07-11.

---

## 0. THE THREE RULES YOU MUST NEVER BREAK

1. **THE ONE LAW — no unsourced claims.** Every medical/factual instruction in a مستعد card
   (`do`, `dont`, `redFlags`) must be a faithful translation of a line that exists in a document this
   project actually **fetched and hashed** (the corpus). You may NEVER write first-aid content from your
   own knowledge/model recall. If there is no source line, there is no claim. Details in §5.

2. **Edit the LIVE copy only.** The real project is
   `C:\Users\pc\Desktop\EGY\DESIGN CAMPAIGN\08_NEXT_PROJECT_MOSTAED\app\`.
   There is a second copy on disk outside the `EGY` folder that is a **read-only file-drop** — never edit it.

3. **Never fabricate, echo, or commit secrets; never claim done without running the check.** If a task
   says "it works", you must have run `node pipeline/validate-cards.mjs` (or the relevant command) and seen
   it pass. Evidence before assertions. Production deploys require the human's explicit go-ahead.

If you ever feel tempted to "just write a sensible first-aid step" because the source is thin — STOP.
That temptation is the exact failure this project was rebuilt to prevent. Defer the card instead (§9).

---

## 1. WHERE YOU ARE (project map)

- **Working dir the human opens:** `C:\Users\pc\Desktop\EGY`
- **مستعد (Mostaed) — the active product, what you'll mostly work on:**
  `C:\Users\pc\Desktop\EGY\DESIGN CAMPAIGN\08_NEXT_PROJECT_MOSTAED\app\`
  - A **static web app**: `index.html` + `scenarios.js` (the data) + a corpus + a Node pipeline. No build step.
  - `index.html` loads `scenarios.js` via `<script src>` — it defines `window.SOURCES` and `window.SCENARIOS`.
- **موثوق (Mawthooq) — the already-shipped platform** (a Next.js 15.5 / React 19 / TS / Tailwind v4 app,
  deployed at egy2.vercel.app): `C:\Users\pc\Desktop\EGY\New folder (20)\egyptian-awareness-library\`.
  Only touch this if your task explicitly names موثوق.
- **EAL** = Egyptian Awareness Library = the mother methodology. موثوق is the shipped platform; مستعد is
  the next product (personal-preparedness / first-aid cards). The graduation defense (for موثوق) is
  **Tue 14 Jul 2026** — treat موثوق changes as deadline-critical and conservative.

---

## 2. THE MISSION (مستعد, in one paragraph)

مستعد is an **Egyptian, Arabic-first, zero-fabrication first-aid & preparedness platform**. Each "card" is
one emergency scenario (choking, burns, fainting…) written in Egyptian colloquial Arabic (masri). The whole
point that makes it defensible: **every actionable line is provably extracted from an authoritative public
source** (MedlinePlus / NHS / CDC / Ready.gov), not invented by an AI. That provenance is the product.

---

## 3. THE STACK / TOOLS

- **مستعد:** plain HTML/CSS/JS + a **Node (ESM `.mjs`)** pipeline. Run scripts with `node pipeline/<x>.mjs`
  from the `app/` dir. No framework, no bundler.
- **Platform:** Windows. Shell is **PowerShell** (a Bash tool also exists — use POSIX there). Paths have
  spaces ("DESIGN CAMPAIGN") — quote them.
- **موثوق:** Next.js 15.5, React 19, TypeScript, Tailwind v4, Vercel.

---

## 4. DEEPER DOCTRINE (read these — they are authoritative, this file only summarizes)

- **The build doctrine (BINDING):** `DESIGN CAMPAIGN\09_METHODOLOGY\EGY_LIBRARY_RETROSPECTIVE.md`
  (also packaged as an auto-loading skill named **`egy-library-retrospective`** — if you are a Claude Code
  session it triggers on words like "مستعد / scenario card / ingest / One Law"; invoke it).
- **Lessons learned:** `DESIGN CAMPAIGN\09_METHODOLOGY\LESSONS_LEARNED.md`
- **The governing standard / constitution:** in موثوق repo at `HI CLAUDE\00_THE_SCIENTIFIC_STANDARD.md`
  (one law = no unsourced claims) and the philosophy `00_PHILOSOPHY_MANHAJ_AL_TATHABBUT.md` (منهج التثبّت —
  operational definitions + falsification tests + stress-test everything).
- **Plans / status:** `08_NEXT_PROJECT_MOSTAED\MOSTAED_PHASE_PLAN.md`, `MOSTAED_150_ROADMAP.md`,
  `MOSTAED_STATUS_CHECKLIST.md`, `SOURCES_LICENSE_REGISTER.md`, `MOSTAED_DATA_SOURCES_VERIFIED.md`.
- **The previous agent's memory** (rich running context, if you can read it):
  `C:\Users\pc\.claude\projects\C--Users-pc-Desktop-EGY\memory\` — start at `MEMORY.md` (an index), then
  `mostaed-provenance-pipeline.md` (the single most important file for مستعد content work).

---

## 5. THE ONE LAW, CONCRETELY (how content is grounded)

A card's `do` / `dont` / `redFlags` are arrays of **step objects**:
```js
{ t: "<Egyptian-Arabic instruction the reader sees>",
  en: "<the EXACT English source line it was translated from, copied verbatim>",
  src: "<a srcId that resolves in window.SOURCES>" }
```
- `src` must be a key in `window.SOURCES` (top of `scenarios.js`). Each `SOURCES` entry has a `url` +
  `sha256` (first 10 chars) that must match a document in the corpus manifests
  (`corpus/manifest.json` = NHS, `corpus/manifest-mlp.json` = MedlinePlus, `corpus/manifest-extra.json` = CDC/Ready.gov/NHS-extra).
- `en` MUST literally appear in that source document. This is machine-checked (see §8 gate).
- **You translate; you do not author.** Never add a number/dose/time/depth/measurement that is not in the
  exact `en` line. Never invert a prohibition into an instruction. Never invent a step.
- **`dont` steps MAY be a bare string** (no `{t,en,src}`) when the source states no prohibition — that's an
  honest "unsourced" line and renders with a ⚠ marker. That is allowed. `do` and `redFlags` may NOT be bare
  strings — they must be grounded.
- **The 🟦fact / 🟩craft / ⛔liability boundary:** the *narrative* fields (snapshot, whenWhy, how,
  othersPOV, say, bodyLanguage, rights, drill, after) are **craft** — you may compose them in masri, judged
  on safety/consistency/concreteness, NOT on citation. But they must never contradict or exceed the grounded
  steps (no new medical fact hiding in prose). Filler like a standalone "ابقى هادئ / stay calm" is banned.

### Gate 6 — GEOGRAPHY (critical)
Sources are US/UK. They say "call 911 / 999 / go to A&E / Poison Help 1-800-222-1222 / call 988". A faithful
translation would tell an Egyptian to dial a number that doesn't exist. **Rule:** translate the *action*
("call the ambulance"), **drop the foreign number**, and put Egypt's verified numbers ONLY in `whoToCall`.
The foreign number legitimately stays inside the `en` citation (that's the source) but must NEVER appear in
the reader-facing `t`. Also watch for US-only content: **snakebite and marine-sting cards were DEFERRED**
because MedlinePlus names US species/antivenom — do NOT ship US wildlife/antivenom/institution specifics to
Egyptians even when grounded; defer until a WHO/Egypt source exists.

### Gate 3 — FENCED SLOTS (never fabricate)
`whoToCall` (Egypt numbers only), `whatToBuy` (no prices, no brand names, no shop links),
`videosCommunities` (only real source URLs — invent none), prices, stats. AI may not author these.

### Egypt verified hotlines (the ONLY numbers allowed)
`123` ambulance · `122` police · `180` fire · `112` unified emergency · `126` tourist police ·
`16328` mental-health. **There is NO verified national poison line → route poisoning to 123.**
Do NOT introduce other numbers (128/121/129/125/137… are unverified — don't use them).

---

## 6. THE CARD SCHEMA (fields, in order)

`id, title{ar,en}, level(1-5), who[], place[], domain, snapshot{ar,en}, redFlags[], do[], dont[],
whenWhy{ar,en}, how{ar,en}, whoToCall[{label,number,say}], whatToBuy[{item,why}], tech[], writeDown[],
videosCommunities[{label,url}], othersPOV{ar,en}, say{toOthers[],toSelf[]}, bodyLanguage{ar,en},
rights{ar,en}, variations[], prevention[], drill{ar,en}, after{ar,en}, sources[{label,url,srcId,sha256,grade}]`

A complete real example lives at `app/pipeline/waves/wave1/_TEMPLATE.json` (the `seizure` card). Copy its
shape and register exactly. `level` = severity 1 (minor) → 5 (life-or-death). Numbers are written in
Arabic-Indic digits (٠١٢٣٤٥٦٧٨٩) to match existing cards.

---

## 7. THE VALIDATOR (your ground truth)

`cd app && node pipeline/validate-cards.mjs` — parses `scenarios.js`, checks every `SOURCES` entry resolves
to a hashed corpus doc, checks every grounded step's `src` is declared in the card's own `sources[]`
(no orphan cites), and **exits 1** on any hard failure. Hard failures: a missing required field, a
`level>=4` card with an ungrounded `do` step, a sha mismatch. Ungrounded `dont` steps are a **soft warning**
(they render ⚠) — that's fine and honest. **Current state: 74/74 grounded, 0 hard failures, 11 inherited soft warnings.**
Run this after ANY edit to `scenarios.js`. If it exits 1, you broke something — fix before moving on.

---

## 8. HOW TO ADD MORE CARDS — the "wave" workflow (this is the repeatable engine)

The previous agent built cards in waves of ~6, one isolated sub-agent per card. Everything is preserved in
`app/pipeline/waves/` (wave1, wave2, wave3). To run a new wave:

1. **Inventory candidates:** list MedlinePlus articles that carry a real first-aid procedure and aren't
   already a card:
   ```
   cd app && node -e 'const fs=require("fs");const w={};new Function("window",fs.readFileSync("scenarios.js","utf8"))(w);
   const used=new Set();for(const c of w.SCENARIOS)for(const s of(c.sources||[]))if(w.SOURCES[s.srcId])used.add(w.SOURCES[s.srcId].url);
   for(const f of fs.readdirSync("corpus/facts-mlp")){if(!f.endsWith(".json"))continue;const d=JSON.parse(fs.readFileSync("corpus/facts-mlp/"+f,"utf8"));const fl=d.fields||{};
   if((fl.do||[]).length>=3 && !used.has(d.url))console.log(f, d.title, "do="+(fl.do||[]).length,"dont="+(fl.dont||[]).length);}'
   ```
2. **Need a new source?** Add the search term to `TERMS` in `pipeline/ingest-medlineplus.mjs` and run it
   (incremental, wsearch-resolved, never guess slugs). Then `node pipeline/extract-mlp.mjs` to produce fact
   files. Corpus is currently **139 MedlinePlus articles**.
3. **Write per-card bundles** (`<id>.json` with `source_do/source_dont/source_redFlags`, `srcId`, `url`,
   `sha256`) — see how `waves/wave3` did it. Register each new source in `scenarios.js` `window.SOURCES`.
4. **Spawn one builder sub-agent per card**, each given ONLY `_RULES.md`, `_TEMPLATE.json`, and its own
   bundle (this enforces isolation — an agent that can't see other cards/the web can't cross-contaminate).
   `_RULES.md` (in each wave folder) is the exact builder contract — reuse it verbatim.
5. **GATE (deterministic, mandatory):** `node waves/<wave>/gate.mjs` — checks every step's `en` is verbatim
   in that card's source, Egypt-only numbers, no foreign number in `t`, required fields present. Exit 1 = fix.
6. **ASSEMBLE:** `node waves/<wave>/assemble.mjs` — splices passing cards into `scenarios.js` before the
   `window.SCENARIOS` closing `];`. It refuses duplicates and re-parses to confirm.
7. **VALIDATE:** `node pipeline/validate-cards.mjs` → expect N/N grounded, 0 hard failures.
8. **ADVERSARIALLY VERIFY:** spawn one verifier sub-agent that reads the new `out-*.json` and, for each
   step, judges whether the Arabic `t` faithfully conveys its own `en` (verdicts: GROUNDED / DRIFT /
   INVERTED / INVENTED / FOREIGN_NUMBER / GEO_ISSUE). Fix anything non-GROUNDED. (Waves 1–3 came back clean.)

**Quality > count.** If a source is too thin to make a useful card, or is US-parochial, DEFER it and say so.

---

## 9. EXACT CURRENT STATE (2026-07-14)

- **`scenarios.js`: 74 grounded cards; validator 74/74 grounded, 0 hard failures, 11 inherited warnings.**
- Cards: choking-adult, severe-bleeding, house-fire, friend-suicidal, panic-attack, collapse-cpr, drowning, burn, heart-attack, stroke-fast, seizure, anaphylaxis, electric-shock, infant-choking, car-accident, poisoning, heat-stroke, fainting, head-injury, cuts-wounds, broken-bone, insect-bites, eye-injury, shock, chemical-burn, hypothermia, breathing-difficulty, bleeding-gums, sunburn, allergic-reaction, sprains, fever, nosebleed, knocked-tooth, dislocation, genital-injury, ear-emergencies, frostbite, skull-fracture, nose-fracture, unconsciousness, landslide, low-blood-sugar, diarrhoea-vomiting, chickenpox, asthma-attack, febrile-seizure, bronchiolitis, bronchitis, whooping-cough, impetigo, ringworm, threadworms, conjunctivitis, bedbugs, fungal-nail-infection.
- **WAVE 4 CLOSED:** six cards assembled after strict cardinality/shape gate and an independent adversarial pass: dislocation, genital-injury, ear-emergencies, frostbite, skull-fracture, nose-fracture. Final adversarial result: 78/78 GROUNDED; 0 DRIFT/INVERTED/INVENTED/FOREIGN_NUMBER/GEO_ISSUE. Evidence: `app/pipeline/waves/wave4/score-report.md`.
- **WAVE 5 CLOSED:** `unconsciousness` assembled at 100/100 after gate and independent adversarial review (17/17 GROUNDED; all prohibited verdicts 0). Five candidates were deferred before generation for source insufficiency: spinal-injury, traumatic-amputation, tick-removal, neck-pain, foot-pain. Evidence: `app/pipeline/waves/wave5/score-report.md`.
- **WAVE 6 CLOSED:** `landslide` assembled at 100/100 from Ready.gov after gate and independent adversarial review (12/12 GROUNDED; all prohibited verdicts 0). Five Ready.gov candidates were deferred for source-array insufficiency. The extra extractor was regression-fixed so one document timeout no longer kills the batch. Evidence: `app/pipeline/waves/wave6/score-report.md`.
- **WAVE 7 CLOSED:** `low-blood-sugar` assembled at 100/100 from NHS after gate and independent adversarial review (16/16 GROUNDED; all prohibited verdicts 0). Five candidates were deferred before generation for source insufficiency: asthma-attack, animal-human-bites, febrile-seizure, croup, nausea. Evidence: `app/pipeline/waves/wave7/score-report.md`.
- **WAVE 8 CLOSED:** `diarrhoea-vomiting` and `chickenpox` assembled at 100/100 after targeted adversarial fixes and re-audit (30/30 GROUNDED; all prohibited verdicts and craft findings 0). Four candidates were deferred: bronchiolitis and dehydration for do-cardinality, migraine for dont-cardinality, food-poisoning as a procedural duplicate. Evidence: `app/pipeline/waves/wave8/score-report.md`.
- **Scale governance:** future waves follow `app/pipeline/CONTENT_SCALE_ROADMAP.md`; complete one coherent track before opening another.
- **WAVE 9 / TRACK B PASS 1 CLOSED:** `asthma-attack` assembled at 100/100 after gate and independent adversarial review (12/12 GROUNDED; all prohibited verdicts and craft blockers 0). Evidence: `app/pipeline/waves/wave9/score-report.md`.
- **WAVE 10 CLOSED:** `febrile-seizure`, `bronchiolitis`, `bronchitis`, and `whooping-cough` assembled at 100/100 after gate, validator, independent adversarial review, and localhost verification. Evidence: `app/pipeline/waves/wave10/score-report.md`.
- **WAVE 11 CLOSED:** `impetigo`, `ringworm`, `threadworms`, `conjunctivitis`, `bedbugs`, and `fungal-nail-infection` assembled at 100/100; gate HARD PROBLEMS: 0; validator 56/56 grounded; adversarial 77/77 GROUNDED with every prohibited verdict and craft blocker 0; localhost visible count 56 / footer ٥٦ / browser errors 0. Evidence: `app/pipeline/waves/wave11/RESUME_CHECKPOINT.md`.
- **WAVE 12 CLOSED:** `nausea`, `scabies`, `mouth-ulcers`, `piles-haemorrhoids`, `warts-verrucas`, and `boils` assembled at 96–100; strengthened nested-shape gate HARD PROBLEMS: 0; validator 62/62 grounded; adversarial 92/92 GROUNDED with DRIFT/INVERTED/INVENTED/FOREIGN/GEO/craft blockers all 0; localhost visible count 62 / footer ٦٢ / browser errors 0. Evidence: `app/pipeline/waves/wave12/RESUME_CHECKPOINT.md`.
- **WAVE 13 CLOSED:** `food-poisoning`, `athletes-foot`, `sore-throat`, `constipation`, `urinary-tract-infection`, and `dry-eyes` assembled at 95–100; strengthened craft-completeness gate HARD PROBLEMS: 0; validator 68/68 grounded; adversarial 88/88 GROUNDED with DRIFT/INVERTED/INVENTED/FOREIGN/GEO/craft blockers all 0; localhost visible count 68 / footer ٦٨ / browser errors 0. `indigestion` and `back-pain` were deferred for source cardinality. Evidence: `app/pipeline/waves/wave13/RESUME_CHECKPOINT.md`.
- **WAVE 14 CLOSED:** `common-cold`, `headaches`, `toothache`, `bloating`, `labyrinthitis`, and `dental-abscess` assembled at 95–100; root-shape-hardened gate HARD PROBLEMS: 0; validator 74/74 grounded; adversarial 85/85 GROUNDED with every prohibited verdict, craft blocker, and shape blocker 0; localhost visible count 74 / footer ٧٤ / browser errors 0. Evidence: `app/pipeline/waves/wave14/RESUME_CHECKPOINT.md`.
- **Concurrent-state note:** `nosebleed` and `knocked-tooth` are present after another worker changed `scenarios.js`. The strict Wave 3 audit had deferred them for insufficient grounded cardinality, so they are not counted as Wave 3 SHIP and need a separate strict re-audit.
- **Still deferred:** `snake-bite` (US pit-viper/antivenom specific) and `swallowed-object` (thin procedure).
- **The HARD gate before ANY public launch:** a **licensed Egyptian clinician must review every L4–L5 card.** Grounding proves Arabic↔source fidelity only, NOT that the medicine is right for Egypt. This is not yours (or the AI's) to waive.

---

## 10. ROUTING TABLE — read these for YOUR task

| If your task is… | Read first |
|---|---|
| Build/edit مستعد cards, run a wave | this file §5–§9 + `app/pipeline/waves/wave1/_RULES.md` + `_TEMPLATE.json` + `EGY_LIBRARY_RETROSPECTIVE.md` |
| **Run the content loop (add cards on repeat, scored)** | **`MOSTAED_CONTENT_LOOP_PROMPT.md`** — the full ADD→TEST→SCORE→FIX→DONE→REPEAT loop, positive+negative layers, the register/shape contract, and the 0–100 scoring rubric |
| Fix the ingest/extract pipeline | `app/pipeline/{ingest-medlineplus,extract-mlp,validate-cards}.mjs` + `mostaed-provenance-pipeline.md` (memory) |
| Anything on موثوق (the Next app) | `New folder (20)\egyptian-awareness-library\` + its `CLAUDE.md` + memory `eal-*` files |
| UI / theme / design / build a feature | **`DESIGN_SYSTEM.md`** (same folder — the complete visual language: every colour token, typography, textures, background layers, animations, for BOTH مستعد and موثوق). Every page must support all themes via CSS tokens `--bg-*/--text-*/--border-*/--accent-*` (NOT `--bg/--fg`). Verify on one light + one dark theme. |
| Data-source licensing | `SOURCES_LICENSE_REGISTER.md` (non-commercial/academic; wikiHow banned; Red Cross cite-only) |

---

## 11. TRAPS THE PREVIOUS AGENT HIT (so you don't)

- **The extractor "heading lies":** MedlinePlus puts the real procedure under "First Aid" OR "Home Care";
  its "When to Contact" section sometimes lists ER *treatments*, not red flags. Extractors are already
  patched for this — re-run `extract-mlp.mjs`, don't hand-edit fact files.
- **Never blindly prepend "Do not" to a DO-NOT line** — it once inverted "reach the person" (drowning) into
  "do not reach". The extractor guards against this now; keep the guard.
- **CDC needs a plain BOT user-agent (403s to a browser UA)** — the inverse of most hosts. Probe ≥2 UAs
  before declaring a source dead.
- **In-browser preview screenshots time out in this environment** — verify مستعد by parsing `scenarios.js`
  in Node and running the validator, not by screenshotting. (To view it, serve `app/` over http and open in
  a real browser; `file://` is blocked.)
- **`mx-auto` centering has been flaky in موثوق — use flex centering.** Dev server on موثوق: use its
  `launch.json` (there's a Windows 8.3-short-path fix noted in memory).
- **Anything you build in the OS temp `scratchpad/` is temporary** — one cache-clear from loss. Move
  deliverables into the repo the moment they matter. (That is why `waves/` was copied into the repo.)

---

## 12. SECURITY (non-negotiable)

Never echo, log, or write secrets into files/commands. You cannot set Vercel env vars, log into accounts,
change security settings, or run OAuth — ask the human to do those. If you see a pasted DB password, API
key, or token, treat it as sensitive and tell the human to rotate it; do not reuse it. Production deploys
only on the human's explicit instruction.

---

## 13. HOW TO REPORT BACK

State plainly what you ran and what it output. If the validator failed, say so with the output. If you
deferred a card, say why. Never say "done" without having run the check that proves it. When in doubt about
a medical translation, translate more literally and flag it — do not smooth it into something the source
didn't say.

---

## 14. OPERATING ENVELOPE — WORK AT FULL POWER, INSIDE THESE BOUNDS

You are expected to operate at your **full capability**, not to tiptoe. The rules above are not a leash —
they are the thing that makes fast, ambitious output *trustworthy* here. Move fast in the green zone; only
the red zone requires stopping. Do not ask permission for green-zone work — just do it and report results.

### GREEN ZONE — do freely, autonomously, ambitiously (no need to ask)
- Read anything; run any read-only command; inventory, analyze, measure.
- Run and **improve** the pipeline (`ingest-*`, `extract-*`, `validate-cards`, wave `gate`/`assemble`). Make
  scripts better — more robust, more idempotent, better guards. Write new tooling under `app/pipeline/`.
- **Ingest new PUBLIC-DOMAIN sources** (MedlinePlus / CDC / Ready.gov) via the wsearch-resolved ingester
  (never guess a slug). Extract, then build cards from them.
- **Run waves in parallel** — spawn many isolated builder sub-agents at once, then gate → assemble →
  validate → adversarially verify. Scale the catalog aggressively; that is the goal.
- Propose AND pursue improvements the human didn't ask for **if they're reversible and keep the gates green**:
  more cards, better extraction, richer craft fields, bilingual `en`, dedup, etc.
- **BUILD FEATURES for مستعد, not just cards.** The app (`index.html` + `scenarios.js`) is yours to extend:
  search/filter (by scenario, severity, who, place), an offline/PWA mode, a "nearest hospital / call 123"
  quick-action bar, category navigation, a print/share-a-card view, an emergency "panic button" that jumps
  to the most-likely cards, per-card bilingual toggle, a step-by-step "guided mode" for a live emergency,
  accessibility (RTL, large-text, high-contrast), speed. **Constraints for features:** keep every page
  theme-token-driven (`--bg-*/--text-*/--border-*/--accent-*`, never hardcoded colors), keep it fast on a
  low-end Android (the platform's #1 complaint was lag — main-thread JS, not network), degrade gracefully
  offline, and NEVER let a feature edit or invent card medical content — features present the grounded data,
  they don't author it. Run the validator after any change that touches `scenarios.js`.
  **Before styling anything, read `DESIGN_SYSTEM.md` (same folder as this file)** — it has every real colour
  token, the severity scale, typography, textures, background layers, and animations for both apps. Match the
  existing language; never hardcode a colour.
- Think several steps ahead. Batch independent work. Use sub-agents liberally. Don't wait for hand-holding.

**Before you start, read `MOSTAED_LESSONS_MISTAKES_AND_WINS.md` (same folder as this file).** It is the
complete record of every mistake this project already made (so you don't repeat them) and everything that
worked (so you double down on it). It is not optional — most of the traps below are landmines someone
already stepped on.

### YELLOW ZONE — do it, but keep it reversible and verify after
- **Editing `scenarios.js`:** prefer the pipeline (`assemble.mjs`) or surgical, grounded edits. After ANY
  edit, run `node pipeline/validate-cards.mjs` and confirm exit 0 before moving on. If it exits 1, stop and
  fix — never stack more changes on a red validator.
- **Big automated edits / refactors:** first copy the file you're about to rewrite (e.g.
  `cp scenarios.js scenarios.bak.js`) or rely on git if present. Keep every change reversible.
- **Shared pipeline scripts:** make changes incremental/idempotent so existing corpus `sha256`s never drift
  (re-fetching a doc that changed upstream would invalidate every citation to it).

### RED ZONE — STOP. Never do these autonomously; ask the human.
- Writing any `do`/`dont`/`redFlags` medical content from your own knowledge instead of a source line.
- Letting a foreign emergency number (911/999/A&E/988) reach the reader-facing Arabic.
- Shipping US-specific species / drugs / institutions to Egyptians — **defer the card instead.**
- Editing the read-only copy outside `\EGY\`; deleting/overwriting corpus manifests or bulk data w/o backup.
- Marking any L4–L5 card "ready for the public" — the clinician-review gate is not yours to waive.
- Production deploy / Vercel / any outward push; touching secrets, accounts, security settings, OAuth.
- Mass hand-editing medical text in `scenarios.js` by hand (use the sourced pipeline).

### "Don't break everything" reflexes
Validate after every change · one unit of work per sub-agent · verify before you assemble · keep sha256s
stable · back up before a big rewrite · a red validator halts all forward motion until it's green again.
Within those reflexes: be bold, be fast, be thorough. Ambition and safety are not in tension here — the
gates are what let you be ambitious without being dangerous.
