# مستعد / EAL — EVERYTHING WE LEARNED
### The complete record of every mistake to never repeat, and everything that went great to double down on.

Read this before building anything. It is the accumulated scar tissue and muscle memory of this project.
Every item below is a **real event** — something that actually happened, not a hypothetical. The rules in
`HANDOFF_FOR_NEW_AGENT.md` exist because of the mistakes in Part A. Nothing here is skippable.

Last updated: 2026-07-11.

---

# PART A — MISTAKES. NEVER REPEAT THESE.

## A1. Fabrication & provenance (the cardinal sin — this is why the whole methodology exists)

1. **Cards were written from model recall, then a `sources[]` array was appended afterward.** The citation
   *decorated* the content instead of *producing* it. Fluent, plausible, unverifiable — the most dangerous
   possible failure mode for medical content. **Fix/law:** content is EXTRACTED from a fetched+hashed
   document first; the Arabic is a translation of a specific source line; the citation is the origin, not a
   costume. Every step is `{t, en, src}`.

2. **It was not theoretical — it put lethal advice in a shipped card.** A level-4 **poisoning** card told
   Egyptians to give a poisoning victim **water or milk**. The fetched NHS poisoning page says *"do not give
   the person anything to eat or drink."* We shipped the opposite of the source. **Lesson:** if you can't
   point to the exact source line, the line does not go in.

3. **Model-recall doses masquerading as citations:** heart-attack aspirin *«١٦٢–٣٢٥ مجم»* (a US/AHA dose)
   was attributed to an NHS page that actually says **300 mg**. CPR *«٥ سم على الأقل»* (AHA phrasing) when
   NHS says **5–6 cm**. Anaphylaxis invented *"hold the injector 3 seconds"* when NHS says *follow the
   injector's own printed instructions*. **Lesson:** never carry a number/dose/depth/time that isn't in the
   exact `en` line you're translating.

4. **Unsourced specifics invented in this very session:** the panic-attack card had a *"4/6 breathing
   ratio"*, a *"5-4-3 senses grounding"* technique, and a *"attack peaks in 5–30 minutes"* duration — none
   in any source. The fainting card said *"10–20 minutes"* (source: 10–15), *"شوية"* (softener not in
   source), and *"on her LEFT side"* (NHS says only "on their side"). **Fix:** every one was replaced with
   the source's actual wording or deleted. **Lesson:** plausible ≠ sourced. The nicer and more specific it
   sounds, the more suspicious you should be.

## A2. Extractor bugs (the source was right; our reading of it was wrong)

5. **`container.textContent` welded sibling `<li>`s together** with no separator → *"…drowsy or
   dizzysomeone fainted…"*, then a blind `.slice(0,500)` chopped it mid-word. A translator agent caught the
   garbage in the Arabic. **Fix:** read list items individually; never slice mid-word.

6. **MedlinePlus prints the *prohibited action* under a "DO NOT" heading without the words "do not".** So a
   standalone extracted line read *"Give an unconscious person anything by mouth."* — instructing the lethal
   act. **Fix:** restore the negation at extraction. **But** the naive fix (blindly prepend "Do not ")
   **inverted a life-saving instruction:** drowning's *"If you can reach the person… do so"* became *"Do not
   … reach the person"*, and an electrical-injury line got double-negated. **Real fix:** if the sentence
   already negates anywhere, leave it; if it opens with a conditional (`if/after/once/when…`), quarantine it
   for a human — don't mangle it.

7. **The heading lies.** Under *"When to Contact a Medical Professional"*, MedlinePlus sometimes lists ER
   **treatments** (activated charcoal, IV fluids) — not red flags. Mapping by heading put hospital
   treatments into the red-flag slot. **Fix:** for that section keep the prose AND the criteria bullets,
   minus a treatment denylist. (This exact bug also *dropped* the fainting card's real emergency criteria —
   chest pain, "does not become alert" — because the old code took paragraphs OR the list, never both.)

8. **`FIELD_OF` didn't map "Home Care" → do.** MedlinePlus uses "First Aid" on emergency articles but
   "Home Care" on non-emergency ones (fainting). The procedure was silently dropped. **Fix:** map both.

9. **NHS markup is `nhsuk-card--care--emergency`, not `nhsuk-care-card`;** stroke has a single `<h2>`;
   heat-exhaustion has no tick/cross lists; the choking page is all `<h3>`. **Lesson:** extractors must be
   structure-agnostic (anchor lists to the nearest preceding heading), never assume one template.

10. **NHS tick-lists labelled "Do" are often *prevention* advice**, not the emergency procedure. Mapping
    source-`dos` → card-`do` mechanically would have put *"eat a balanced diet"* into a heart-attack card.
    The real procedure lives in named sections ("While you're waiting for medical help", "Hands-only CPR").

## A3. Source discovery & ingestion (a source is only "dead" when you've proven it)

11. **`redcross.org` returns 403 to any script** → every Red Cross citation is machine-unverifiable and the
    text is copyrighted → demote to **cite-only**, never ingest.

12. **CDC is the inverse of everyone else: 200 to a *plain bot* user-agent, 403 to a *browser* UA.** An
    earlier "CDC is blocked" verdict came from testing ONE browser UA. Later "CDC is reachable" came from
    following redirects. **Lesson: probe ≥2 user-agents AND follow redirects before declaring a host dead.**
    One UA test would have cost 3 cards.

13. **MedlinePlus/PubMed reported `fetch failed` under 3-way concurrency but returned 200 on isolated
    retry.** **Lesson:** a single unretried request may never declare a source dead. Retry with backoff.

14. **Guessed URLs are worthless:** `/conditions/drowning/` 404s; `electricshock.html` 404s (the real page
    is `electricalinjuries.html`). **Lesson:** never guess a slug — resolve every term through the search
    API (wsearch), require the resolved slug to share a token with the term.

15. **The slug guard cuts both ways:** wsearch rank-0 can return the WRONG topic (search "wounds" → returns
    *shoulder* injuries), so a token-overlap guard is required — but that guard **false-rejects legitimate
    synonyms** (grief→bereavement, nosebleed→noseinjuries, sunburn→sunexposure, allergic reaction→allergy).
    **Fix:** keep an explicit SYNONYM map alongside the guard. Don't loosen the guard.

16. **NHS serves `/x/` and `/x/treatment/` as the same bytes** (identical sha256) → citing both is
    double-counting one source. Dedupe by sha256.

17. **We silently violated NLM's rate limit.** Policy is ≤85 requests/min/IP; an ingester sleeping 350 ms
    was doing ~171/min. **Fix:** token bucket at 60/min + identify via `tool=` & `email=` params + cache
    12–24h. **Also mandatory:** MedlinePlus attribution ("Information from MedlinePlus.gov"), no logo, no
    implied endorsement. Same for NHS (OGL v3) and CDC ("Content source: CDC").

## A4. Geography & localization (grounded ≠ appropriate for Egypt)

18. **Foreign emergency numbers leak through prose.** Sources say "call 911 / 999 / go to A&E / Poison Help
    1-800-222-1222 / call 988". A *faithful* translation therefore tells an Egyptian to dial a number that
    doesn't exist. A translator agent caught this — it became **Gate 6**. 35 of 505 lines were quarantined.
    **Rule:** translate the action, DROP the foreign number, put Egypt's verified numbers only in
    `whoToCall`. **Never auto-swap 911→123 inside a cited claim — that's a factual edit; a human does it.**

19. **US-specific content is grounded but wrong for the reader.** The **snake-bite** card faithfully
    translated MedlinePlus but named North-American pit vipers (rattlesnake/copperhead/cottonmouth) and tied
    heart-level positioning to US antivenom taxonomy. **We DEFERRED it** rather than ship US rattlesnake
    advice to Egyptians. Same reasoning defers marine-sting/scorpion-fish cards. **Lesson:** grounding is
    necessary, not sufficient — geography is a second gate. Defer until a WHO/Egypt source exists.

20. **US institution categories confuse the reader.** cuts-wounds said *"go to the emergency room or urgent
    care center"* — "urgent care center" isn't an Egyptian category. **Fix:** dropped it; "قسم الطوارئ"
    already covers it. Watch for US drug brands too (Vaseline→"منتجات زيتية", Tylenol→"باراسيتامول").

21. **Thin sources make weak cards — defer, don't pad.** The **swallowed-object** MedlinePlus article is
    almost all symptoms + "see a doctor" with no real first-aid procedure → a 1-step card. We DEFERRED it.
    **Lesson:** the answer to a thin source is a better source or a deferral, never invention.

22. **The human's own brief can be out of date — verify, don't just obey.** The content brief said *"there
    is no broadly publicised national mental-health helpline in Egypt; never fabricate a number."* The
    Egyptian MoHP portal displays **16328** verbatim (SIS corroborates: 8,808 calls Q1 2026). **We verified
    and kept 16328, cited the ministry.** But we did NOT hardcode the brief's other numbers
    (128/121/129/125/137) — unverified. **Lesson:** verify claims from every direction, including your own
    instructions. Egypt's verified set: 123 ambulance · 122 police · 180 fire · 112 unified · 126 tourist ·
    16328 mental-health · (NO verified national poison line → route to 123).

## A5. AI-generation gates (why the Green Card exists — structure ≠ quality)

23. **A record passed BOTH gates while being empty.** It carried `say_to_self_ar: «أحتاج إلى البقاء
    هادئًا»` — literally the "stay calm" filler the rules forbid — plus formal MSA and «الكائن» (organism)
    mistranslating "object". **Citations perfect, advice worthless.** **Fix:** added FILLER + MSA-tell
    checks; retro-rejected the passed records. **Lesson: structure ≠ quality.** A card can be fully
    grounded and still be bad. Judge craft on concreteness, register, and safety too.

24. **The adversarial verifier (THE DEVIL) catches what regex can't:** it flagged a burns card whose `why`
    claimed an infection risk the cited source never states (semantic overreach, invisible to a parser); and
    it caught the extractor inversion bug in the wild ("source advises to give food… record's opposite…").
    **Lesson:** always run an independent adversarial pass in addition to the deterministic gate. They catch
    different failure classes.

25. **Over-strict gates are also a bug.** `ver_v1` quarantined `body_language`/`tone_of_voice` as
    "unsupported factual claim" — but those are 🟩 **craft**, which AI may write without a citation. A gate
    that rejects everything is a wall, not a gate. **Fix:** teach the 🟦fact/🟩craft/⛔liability boundary.
    (This session: the wave gate also over-matched — it flagged "911" inside the `en` *citation* as a
    foreign-number leak, and listed Egypt's own "112" as foreign, and rejected legitimate bare-string
    `dont`s. All fixed. **Lesson:** when your gate fails a thing you know is correct, fix the gate, don't
    corrupt the data to satisfy it.)

26. **Refusal is a feature.** GATE 1 refused to generate a card when only 1 source existed (needs ≥2). Good.
    A gate that always says yes isn't protecting anything.

27. **Provider/infra traps in generation:** reasoning model `zai-glm-4.7` returns **empty content** unless
    `max_tokens` is generous (reasoning eats the budget) — don't log it as "non-JSON". Running two loops in
    parallel **exhausted Groq's tokens/min quota** → 429 for the session (honour Retry-After; have a
    fallback provider). Gemini's OpenAI-compat endpoint **rejects `seed`** (omit it there). In REPAIR mode
    the generator **drops `[source_id]` brackets** while fixing wording → restate every invariant each
    attempt. **Never collapse generator and verifier onto the same model family** (the Devil can't grade its
    own homework).

## A6. Measurement & honesty (don't claim wins you didn't verify)

28. **We over-claimed a performance win and had to retract it publicly.** For موثوق we claimed −28/−59/−71%
    TBT; a proper interleaved same-minute A/B against the pre-optimization deployment showed the homepage
    was actually slightly **worse** (SSR hydrates ~1900 nodes). **Retracted in the audit doc and memory.**
    The CLS 0.343→0 win was the one that was definitively true. **Lesson:** measure with interleaved A/B
    against a real baseline, kill orphaned Chrome processes first (18 of them once skewed a run), prefer
    deterministic metrics (bytes, CLS, node counts) over noisy ones (TBT on a dev machine). Report only what
    you verified. A retraction is cheaper than a lie.

29. **UI over-claimed provenance.** The footer said *«٥ بطاقات موثّقة»* while 18 cards existed and only 4
    were grounded. **Lesson:** the UI must never claim more certainty than the data has. 31
    `videosCommunities` links shipped as "verified" with zero ⚠ while 3 CDC links 403'd → every unverifiable
    link must render a ⚠ chip.

## A7. Process, durability & tooling

30. **مستعد was living ONLY in the OS temp directory** (`AppData\Local\Temp\…\scratchpad\mostaed`) — not in
    the project, not in git. **One cache-clear from total loss.** Rescued to the repo. (This session, wave
    outputs were again built in temp and had to be copied into `app/pipeline/waves/` for safety.)
    **Lesson: anything in `scratchpad/` is temporary. Move deliverables into the repo the moment they
    matter. Write-first, checkpoint often, one durable unit per sub-agent** — a limit-kill once lost ~40 min
    and 0 files because nothing was persisted.

31. **A workflow crashed because args arrived as a string, not an array** (`pipeline() expects an array`).
    **Fix:** `Array.isArray(args) ? args : JSON.parse(args)`. **Lesson:** validate the shape of inputs at
    the boundary.

32. **A verification bundler matched cards↔sources by `srcId` and got only 1 english line** (cards use a
    friendly `mlp:choking-adult`, fact files use `mlp:ency-000049`). **Fix:** match by **URL**, not srcId.

33. **`waitUntil:"networkidle"` hangs forever on Google Fonts** in headless Playwright. Use
    `domcontentloaded` or abort external routes. **In-browser preview screenshots time out** in this
    environment entirely — verify مستعد by parsing `scenarios.js` in Node + the validator, not screenshots.

34. **The renderer had no try/catch / optional chaining** → one malformed card crashes the whole grid.
    **Lesson:** the renderer must survive a bad card (render a ⚠, not a white screen).

35. **A facet was split three ways** (`parent` / `آباء` / `أمهات` as separate audiences) → normalize to a
    canonical key set. Inconsistent taxonomy silently fragments filtering.

36. **We misread a human request once** — built an abstract "action hub" when the ask was a *real* checklist
    with real links and real how-to. **Lesson:** when the human says "real", they mean concrete, specific,
    clickable — not a framework. Re-read the request; build the literal thing.

## A8. موثوق (the shipped Next.js platform) — perf & product (relevant if you touch it)

37. **Android lag was main-thread JS, not network** (TTFB 316 ms, cache HIT). The homepage wasn't SSR'd
    (0px→18227px after hydration) → CLS 0.343 + LCP. **Fix direction:** static/SSR the shell, defer
    heavy JS to idle, a "Perf Mode" (`data-perf="lite"`) that turns off animation for weak devices with an
    auto-recommend, while strong PC users keep the full experience. **Lesson:** profile before optimizing;
    the bottleneck is rarely where you assume.

38. **Never ship a fake trust badge.** A proposed IFCN badge was dropped because it wasn't real. Trust
    claims must be earned and true.

---

# PART B — WHAT WENT GREAT. DOUBLE DOWN ON THESE.

## B1. The provenance architecture — this is the product's moat
- **Extract-not-recall + `{t, en, src}` + a validator that exits 1.** Went from *1/18 grounded* to
  *28/28, 0 hard failures*. Every claim is machine-traceable to a hashed document. This is what makes an
  Arabic first-aid platform defensible in a graduation defense (and in real life). Keep it absolute.
- **Per-step provenance, not per-card.** A card-level citation does not license every line beneath it.
  Level ≥4 → every `do` step must be grounded (hard). This granularity is what caught the fabricated doses.

## B2. Token economics that make scale affordable
- **Documents never enter model context — only the extracted field + its quote.** Ingesting 500 scenarios
  costs roughly what 5 cost. This is the answer to "the content will blow the budget." Keep the corpus on
  disk; feed agents only their own extracted lines.
- **Bulk O(1) ingestion:** one request pulls the whole MedlinePlus topic corpus (date-stamped XML). Cheap.

## B3. The sub-agent pattern (this session's biggest win for scaling)
- **One isolated builder sub-agent per card, given ONLY its own source bundle.** This enforces GATE 1
  (grounding isolation) *by construction* — an agent that can't see the web or other cards physically cannot
  cross-contaminate. Run them **in parallel** (6 at a time), then converge. Waves 1–3 built 16 cards this
  way; every one passed the deterministic gate and the adversarial verifier with **zero fabrication-class
  defects**. This is the engine — use it hard.

## B4. Two independent checks, because they catch different things
- **Deterministic gate** (mechanical: every `en` verbatim-in-source, Egypt-only numbers, no foreign number
  in `t`, required fields) — catches structural/leak errors instantly and for free.
- **Adversarial verifier** (a fresh agent judging `t`↔`en` meaning: DRIFT/INVERTED/INVENTED/FOREIGN/GEO) —
  catches semantic drift a regex can't. Across three waves it returned 83/83 and 64/64 faithful. Always run
  both; never trust one alone.

## B5. Deferral discipline — quality over count
- Deferring snake-bite (US species) and swallowed-object (thin source) *raised* trust. Shipping 5 excellent
  cards beats 6 with one that gives Egyptians rattlesnake advice. **A deferral with a reason is a success,
  not a gap.** This is the single most important cultural habit to keep.

## B6. Incremental, idempotent tooling
- The ingester **reuses already-fetched docs** (same id + file on disk) so existing sha256s never drift —
  new sources can be added without invalidating a single existing citation. The assembler **refuses
  duplicates and re-parses** to confirm the file still loads. Build every pipeline script this way:
  re-runnable, non-destructive, self-verifying.

## B7. Honesty as a feature, visible in the artifact
- ⚠ markers on unsourced `dont` steps and unverifiable links; a retracted performance claim in the audit
  doc; a footer count that matches reality; `status: "…pending_review"`, never `"verified"`. The product
  tells the truth about its own certainty. This *is* the brand (موثوق = "trustworthy"). Never let the UI
  over-claim.

## B8. Egyptian localization done right
- Gate 6 (foreign numbers out of reader text), verified hotlines (16328 confirmed against the ministry),
  masri register that reads like a person talking, US brands/institutions generalized. The content feels
  local because it *is* localized, not machine-translated.

## B9. The conformance/verification harnesses
- The Green Card **conformance harness** injects a deliberate violation of each rule and asserts the gate
  bites, plus a clean record that must pass and a `⚠VERIFY` record that must not be flagged (15/15 + 3/3).
  The **Firewall Protocol** (separate empirical/religious/emotional claims, harm gate, calibrated verdict
  that is never 100%) passes 21/21 on prod. **Lesson:** test your gates the way you test code — with
  fixtures that must pass AND fixtures that must fail. A gate you haven't tried to fool is untested.

## B10. The wave workflow, end to end (the repeatable win)
`inventory candidates → (ingest new sources if needed) → per-card bundles → parallel isolated builders →
deterministic gate → assemble → validator → adversarial verify → fix/defer → report`. It scaled the catalog
18→28 in one session with zero fabrication and full auditability. It is preserved and reusable in
`app/pipeline/waves/`. This is how you keep growing مستعد — run it again, and again.

---

## THE ONE-SENTENCE VERSION
**Extract, never recall; ground every claim to a hashed source with `{t,en,src}`; localize for Egypt (Gate
6); run the deterministic gate AND an adversarial verifier; defer anything thin or foreign instead of
inventing; keep every tool idempotent and every deliverable in the repo; tell the truth about your own
certainty — and inside those rails, build fast, in parallel, at full power.**
