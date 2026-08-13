# Task 1: Phase 0 retroactive safety audit and coverage baseline

## Goal

Implement and run the hard Phase 0 gate from `C:\Users\pc\Desktop\EGY\implementation_plan1.md` against the canonical deployed data in this repository. Do not author new cards or claims. Produce durable, reproducible audit evidence and coverage matrices for all four EAL products.

## Binding source documents

Read these before implementation:

- `C:\Users\pc\Desktop\EGY\implementation_plan1.md`, Part 4 and Addendum C
- `C:\Users\pc\Desktop\EGY\mawthooq-site\docs\SECOND_BRAIN.md`, especially §§2.4b, 2.6b, 2.10b, 2.11b–d
- `C:\Users\pc\Desktop\EGY\mawthooq-site\docs\PRD_SCENARIO_ENGINE.md`, §§4–6
- `C:\Users\pc\Desktop\EGY\Motazen_PRD_v1.md`, §§5–7
- `C:\Users\pc\Desktop\EGY\MOSTAED_مستعد\MOSTAED_PROJECT_PLAN.md`, §§2, 4–5

## Canonical inputs

- `mostaed/scenarios.js`: `window.SCENARIOS`, currently 119 cards
- `motazen/claims.js`: `window.CLAIMS`, currently 130 claims
- `aman/threats.js`: `window.CARDS`, currently 10 cards
- `hoqoqi/rights.js`: `window.CARDS`, currently 15 cards

Preserve these counts. This task is audit/reporting only; do not edit or regenerate any canonical data file.

## Required implementation

Create a deterministic Node audit tool and tests:

- Create `tools/phase0-audit.mjs`
- Create `tools/phase0-audit.test.mjs` using `node:test` and real temporary fixtures
- No third-party dependencies
- The tool must load each JavaScript data file in a sandboxed VM context, never by textual regex parsing of object structure
- The tool must fail closed: malformed data, missing referenced sources, duplicate IDs, or an incomplete required audit record produces a non-zero exit
- Add a documented command to `tools/README.md`

The tool must generate these durable outputs beneath `docs/audits/phase0-2026-08-02/`:

1. `mostaed-dropped-exceptions.md`
   - Inventory every Mostaed L4/L5 card whose referenced source URL is an A.D.A.M./Ebix MedlinePlus `/ency/` page.
   - For each card, list ID, title, level, source IDs/URLs, fetch/hash status, source qualifiers/exceptions found, the card text checked, and verdict `PASS`, `FAIL`, or `BLOCKED`.
   - A `PASS` requires the fetched source bytes to be stored locally, SHA256 recorded, every actionable `do`/`dont` line compared against the full relevant source context, and every safety qualifier/exception carried. Heuristic keyword matching alone cannot award PASS.
   - Any inaccessible source is `BLOCKED`, never PASS.

2. `motazen-statistics-scope.md`
   - Inventory all 130 claims and identify every claim containing a number, percentage, ratio, prevalence, burden, sample-size, date used as evidence, or other statistical quantity in Arabic or English.
   - For every statistical claim, list the exact quantity/scope in the claim, all cited source IDs/URLs, fetch/hash status, supporting source excerpt with surrounding qualifiers, and verdict `PASS`, `FAIL`, or `BLOCKED`.
   - A `PASS` requires exact agreement on population, outcome, geography, time period, relationship type, units, rounding, and qualifiers. An inaccessible or ambiguous source is `BLOCKED`.

3. `contacts-provenance.md`
   - Inventory every phone/contact number rendered by Aman and Hoqoqi, including nested contact fields and numbers embedded in actionable text.
   - Each number must be tied to its own issuing-authority source record, not merely the card primary source.
   - List card ID, field path, number, authority, source ID/URL, fetch/hash status, excerpt containing the exact number, and verdict.
   - A true-but-unsourced number is `FAIL`; an inaccessible source is `BLOCKED`.

4. `coverage-mostaed.csv` and `coverage-mostaed.md`
   - Complete domain × L1–L5 matrix, with count and card IDs in every cell.

5. `coverage-motazen.csv` and `coverage-motazen.md`
   - Complete domain × `established|contested|debunked|unknown` matrix, with count and claim IDs in every cell.

6. `coverage-aman.csv` and `coverage-aman.md`
   - The PRD’s exact A1–A24 scenario inventory, with scenario title and one of `built`, `source-found`, `no-source`, or `not-built-unprobed`.
   - Existing topic cards do not count as built unless they already use the required scenario shape (`first_60_seconds`, `the_clock`, `the_criminal_lens`, `myths_that_kill`, `الدليل`).
   - Source-found/no-source status must be supported by a probed URL result (`200`, body >1200 characters, and not a not-found page); do not copy stale July labels as August facts.

7. `coverage-hoqoqi.csv` and `coverage-hoqoqi.md`
   - The PRD’s exact H1–H22 scenario inventory with the same status vocabulary and evidence rule.
   - Existing topic cards do not count as built unless they already use the required rights-scenario shape and clearly distinguish principle from procedure.

8. `phase0-summary.json` and `PHASE0_CHECKPOINT.md`
   - Machine-readable totals plus a human checkpoint.
   - State input counts before/after, source fetch totals, PASS/FAIL/BLOCKED totals for each audit, matrix totals, exact commands run, and whether the Phase 0 gate is `CLEAR` or `BLOCKED`.
   - The gate is `CLEAR` only with zero FAIL and zero BLOCKED records across all three audits and all four matrices successfully generated. Otherwise state exact blockers and explicitly say Phase 1 was not started.

9. `corpus/`
   - Store every successfully fetched source document used to award an audit PASS or source-found matrix status.
   - Use stable filenames, record SHA256 and retrieval date, and never overwrite a previously successful capture with a failed/error response.

## Source acquisition rules

- Probe before saving: HTTP 200, decoded text length >1200, and no “page not found” marker near the top.
- Fetch before judging. Never use model memory.
- Record redirect/final URL and retrieval timestamp.
- Hash the exact saved bytes with SHA256.
- Prefer the existing source URLs in `window.SOURCES`; for PRD inventory probes use official/primary sources only.
- Do not invent, normalize, substitute, or localize a phone number.
- If network access is denied, request the necessary approval. If a source remains inaccessible, record `BLOCKED` honestly.

## TDD and verification

Follow strict red-green TDD for the audit tool. Tests must cover at least:

- VM loading of each supported global array name
- statistics detection for Western and Arabic-Indic digits, percentages, ratios, and number words used quantitatively
- recursive contact-number extraction with stable field paths
- source-provenance matching that rejects a number absent from the cited issuing-authority source
- status classification that cannot call a topic card a scenario card
- CSV escaping and deterministic sort order
- fail-closed exit behavior when an audit record is `FAIL` or `BLOCKED`
- save-only-on-success behavior for corpus files

Run:

```powershell
node --test tools/phase0-audit.test.mjs
node tools/phase0-audit.mjs
git diff --check
```

The production run may exit non-zero when the evidence gate is blocked; that is expected and must be reported accurately. The test suite itself must pass with pristine output.

## Scope constraints

- Additive only.
- Do not modify `mostaed/scenarios.js`, `motazen/claims.js`, `aman/threats.js`, or `hoqoqi/rights.js`.
- Do not author Phase 1 content.
- Do not claim a semantic audit PASS from regex/keyword heuristics.
- Do not delete or weaken existing validation.
- Commit the completed audit implementation and generated evidence on the current branch.

