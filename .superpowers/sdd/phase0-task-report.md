# Task 1 report — Phase 0 retroactive safety audit and coverage baseline

Date: 2026-08-02

Branch: `implementation/plan1-phase0`
Scope: Phase 0 only. Phase 1 was not started.

## Outcome

The deterministic audit tool, tests, documentation, source corpus, three safety-audit reports, four coverage matrices, machine summary, and human checkpoint were produced. The production gate result is **BLOCKED**. This is a substantive safety result: no automated keyword or quantity match was allowed to certify a semantic PASS.

## TDD evidence

### RED

The controller supplied and ran the complete test-first suite before implementation:

```text
node --test tools/phase0-audit.test.mjs
10 tests; 1 pass; 9 fail
```

The failures were the expected feature-missing failures against the 19-byte `export default {};` stub: the required exported functions did not exist.

### GREEN

After minimal implementation and correction of one initial syntax defect plus one contact-path extraction defect, the unchanged suite passed:

```text
node --test tools/phase0-audit.test.mjs
10 tests; 10 pass; 0 fail; exit 0
```

Covered behavior: sandboxed VM loading for `SCENARIOS`, `CLAIMS`, and `CARDS`; malformed/duplicate/missing-source rejection; Western and Arabic-Indic quantities, percentages, ratios, and number words; recursive stable-path contact extraction; exact-number provenance; scenario-shape classification; deterministic CSV escaping/sort; fail-closed gate evaluation; and save-only-on-success corpus behavior.

## Commands and exact results

```text
node --test tools/phase0-audit.test.mjs
→ 10 pass, 0 fail, exit 0

node tools/phase0-audit.mjs
→ "Phase 0 gate: BLOCKED", exit 1 (expected fail-closed production result)

git diff --check
→ no output, exit 0

node --check tools/phase0-audit.mjs
→ no output, exit 0

independent corpus/hash/count verification
→ 88 saved corpus hashes checked; all matched; exit 0
```

## Canonical-input integrity

All four canonical data files remained byte-for-byte and count-for-count unchanged:

| Input | Before | After | SHA256 before/after |
|---|---:|---:|---|
| `mostaed/scenarios.js` | 119 | 119 | `b6ccfa5c4df2767dad72430c7f9b0f3668242c4dd054b477caf4054a9a9913ca` |
| `motazen/claims.js` | 130 | 130 | `0785c79746b050b3412b7fb38ab52c19748919d360e834ade3e12e620eba5822` |
| `aman/threats.js` | 10 | 10 | `49e0d976e71fba3c4c090acf5b58156a982cdfa2a17b7c8cd07f73b310177444` |
| `hoqoqi/rights.js` | 15 | 15 | `8f1ed58a2e8c596a093213b1b70ba91efb7ae5eea8cb2616ed23ff53f583f4be` |

## Source acquisition

- Unique URLs requested: 92
- Successful captures: 88
- Blocked probes: 4
- Every successful capture passed HTTP 200, decoded length >1200, and not-found-marker checks.
- Exact response bytes were saved with SHA256, final URL, and retrieval timestamp in `corpus/index.json`.
- A failed network refresh preserves an already successful local capture; a 404 never qualifies as source-found.
- Corpus verification recomputed and matched all 88 hashes.

Blocked URLs in the final production run:

- `https://consumer.ftc.gov/consumer-alerts/2024/10/report-fraud-ftc-what-older-adults-need-know` — fetch failed.
- `https://consumer.ftc.gov/articles/family-emergency-scams` — HTTP 404.
- `https://consumer.ftc.gov/articles/how-protect-kids-online` — HTTP 404.
- `https://consumer.ftc.gov/articles/what-do-data-breach` — HTTP 404.

## Audit findings

### Mostaed dropped exceptions

- Observed qualifying inventory: 14 current L4/L5 cards referencing A.D.A.M./Ebix MedlinePlus `/ency/` pages. This is the live canonical result; the plan's `~33` was an older estimate.
- Verdicts: 0 PASS, 0 FAIL, 14 BLOCKED.
- All 14 source pages were captured, but the repository contains no durable human full-context comparison proving every `do`/`dont` line carries every safety exception. The tool lists the complete card lines, fetched/hash status, and automatically surfaced qualifier context, then blocks rather than awarding a heuristic PASS.

### Motazen statistics scope

- All 130 claims are explicitly inventoried.
- 39 claims contain detected quantities in their Arabic/English claim text.
- Verdicts: 0 PASS, 0 FAIL, 39 BLOCKED.
- Source excerpts and surrounding context are recorded where accessible. Exact agreement across population, outcome, geography, time, relationship type, units, rounding, and qualifiers still requires recorded semantic review, so automated detection cannot award PASS.

### Contact provenance

- One rendered/actionable contact number was found across Aman and Hoqoqi: Hoqoqi `fraud-victim-steps`, `contacts[2].number`, `19588`.
- Verdicts: 1 PASS, 0 FAIL, 0 BLOCKED.
- The exact number was found in the separately cited Egyptian Consumer Protection Agency source, with the issuing authority, excerpt, capture, final URL, and SHA256 recorded.

## Coverage findings

- Mostaed: 40 domain × L1–L5 cells; counts sum to all 119 cards.
- Motazen: 52 domain × required-status cells; 124 of 130 claims use `established|contested|debunked|unknown`.
- Six Motazen claims make the required matrix incomplete because they use out-of-vocabulary statuses:
  - `postpartum-depression`: `pending_clinician_review`
  - `addiction-is-illness`: `grounded`
  - `seasonal-affective`: `verified`
  - `psychosis-recovery`: `grounded`
  - `adult-adhd`: `needs_review`
  - `loneliness-health`: `needs_review`
- Aman A1–A24: 0 built, 19 source-found, 4 no-source, 1 not-built-unprobed. Existing topic cards do not satisfy the scenario shape.
- Hoqoqi H1–H22: 0 built, 22 source-found, 0 no-source, 0 not-built-unprobed. Existing topic cards do not satisfy the rights-scenario shape or principle/procedure distinction.

## Files added or changed

- `tools/phase0-audit.mjs`
- `tools/phase0-audit.test.mjs`
- `tools/README.md`
- `.superpowers/sdd/phase0-task-report.md`
- `docs/audits/phase0-2026-08-02/mostaed-dropped-exceptions.md`
- `docs/audits/phase0-2026-08-02/motazen-statistics-scope.md`
- `docs/audits/phase0-2026-08-02/contacts-provenance.md`
- `docs/audits/phase0-2026-08-02/coverage-mostaed.csv`
- `docs/audits/phase0-2026-08-02/coverage-mostaed.md`
- `docs/audits/phase0-2026-08-02/coverage-motazen.csv`
- `docs/audits/phase0-2026-08-02/coverage-motazen.md`
- `docs/audits/phase0-2026-08-02/coverage-aman.csv`
- `docs/audits/phase0-2026-08-02/coverage-aman.md`
- `docs/audits/phase0-2026-08-02/coverage-hoqoqi.csv`
- `docs/audits/phase0-2026-08-02/coverage-hoqoqi.md`
- `docs/audits/phase0-2026-08-02/phase0-summary.json`
- `docs/audits/phase0-2026-08-02/PHASE0_CHECKPOINT.md`
- `docs/audits/phase0-2026-08-02/corpus/index.json`
- 88 hashed source captures beneath `docs/audits/phase0-2026-08-02/corpus/`

Generated evidence totals: 102 files, 7,880,915 bytes; corpus: 89 files including the index, 7,683,772 bytes.

## Self-review and concerns

- The audit module uses a VM sandbox and does not parse JavaScript object structure with regex.
- Output order and CSV encoding are deterministic; network evidence and retrieval timestamps necessarily reflect the live run.
- The gate deliberately remains BLOCKED for 53 semantic audit records (14 Mostaed + 39 Motazen) and six invalid Motazen matrix statuses.
- Four scenario source candidates were unavailable in the final probe. They are `no-source`, never PASS/source-found.
- The only contact PASS is exact-number provenance; it does not imply broader legal or content approval of that card.
- Phase 1 was not started and no canonical content was edited.
