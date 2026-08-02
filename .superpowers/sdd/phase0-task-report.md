# Phase 0 safety-baseline implementation report

Audit date: 2026-08-02

Branch: `implementation/plan1-phase0`

Scope: Phase 0 only. Phase 1 was not started.

This report is the single authoritative account of the final regenerated Phase 0 evidence. Earlier interim totals were superseded and have been removed.

## Outcome

The Phase 0 gate is **BLOCKED**, as required by the fail-closed policy. Evidence was regenerated under `docs/audits/phase0-2026-08-02` without modifying canonical product data.

## TDD record

The remaining-review wave began with focused failing tests:

```text
node --test --test-name-pattern="classifies plural|preserves exact|independent broad" tools/phase0-audit.test.mjs
3 tests; 0 pass; 3 fail; exit 1
```

The failures demonstrated missing plural/magnitude classification, incomplete quantity-and-scope preservation, and the absence of an independent broad completeness scanner.

A second focused RED established the sentence-level scope requirement:

```text
node --test --test-name-pattern="reports sentence-level|preserves exact" tools/phase0-audit.test.mjs
2 tests; 0 pass; 2 fail; exit 1
```

Final GREEN:

```text
node --test tools/phase0-audit.test.mjs
20 tests; 20 pass; 0 fail; exit 0
```

## Implemented safeguards

- Quantitative-language detection covers plural magnitudes and counted concepts in English and Arabic, including `millions`/`ملايين`, `five disorders`/`خمسة اضطرابات`, dual Arabic review wording, and `two independent meta-analytic reviews`.
- `nav-stigma-barrier`, `anx-subtypes`, and `bz5-stigma-paradox` are included in the statistical audit.
- Detected audit scope is preserved as complete sentence-level claim-language snippets. This retains comparators, plus signs, units, and original Arabic surfaces, including `أكتر من ١١٦ ألف مشارك`, `116,000+ participants`, and `نص` in context.
- Every one of the 130 Motazen claims has an explicit `statistical` or `not-statistical` decision record.
- Completeness is independently checked by a separately implemented broad quantitative-language scan. Every broad candidate must be marked statistical; missing, duplicate, or undecided decision records block the gate.
- Source captures require substantive content, scenario source-found classifications require scenario-specific semantic evidence, corpus index output is URL-sorted, and prior-capture errors fail closed except for absent files.

## Authoritative final totals

- Source URLs: 100 requested; 42 substantive captures counted; 58 BLOCKED.
- Mostaed: 14 audited; 0 PASS / 0 FAIL / 14 BLOCKED.
- Motazen: 130 claims inventoried; 130 explicit decisions; 46 broad quantitative candidates; 47 statistical claims; 0 PASS / 0 FAIL / 47 BLOCKED.
- Contacts: 1 audited; 1 PASS / 0 FAIL / 0 BLOCKED.
- Mostaed matrix: 40 cells covering all 119 cards.
- Motazen matrix: 52 cells covering 124 of 130 claims; six canonical statuses remain outside the required vocabulary.
- Aman: 24 rows; 0 built / 15 source-found / 8 no-source / 1 not-built-unprobed.
- Hoqoqi: 22 rows; 0 built / 20 source-found / 2 no-source / 0 not-built-unprobed.
- Generated audit directory: 105 files / 8,042,810 bytes.
- Corpus directory: 92 files / 7,810,494 bytes. The index is deterministically URL-sorted.

## Canonical input integrity

| Product | Count before/after | SHA256 before/after | Unchanged |
| --- | ---: | --- | --- |
| Mostaed | 119 / 119 | `b6ccfa5c4df2767dad72430c7f9b0f3668242c4dd054b477caf4054a9a9913ca` | yes |
| Motazen | 130 / 130 | `0785c79746b050b3412b7fb38ab52c19748919d360e834ade3e12e620eba5822` | yes |
| Aman | 10 / 10 | `49e0d976e71fba3c4c090acf5b58156a982cdfa2a17b7c8cd07f73b310177444` | yes |
| Hoqoqi | 15 / 15 | `8f1ed58a2e8c596a093213b1b70ba91efb7ae5eea8cb2616ed23ff53f583f4be` | yes |

## Verification commands

```text
node --test tools/phase0-audit.test.mjs  -> exit 0, 20/20
node tools/phase0-audit.mjs              -> exit 1, gate BLOCKED (expected)
git diff --check                         -> exit 0
```

## Remaining blockers

- Fourteen Mostaed records still require recorded full-context human semantic review.
- Forty-seven Motazen statistical records still require exact semantic scope review; inaccessible cited sources block most of them.
- Six Motazen claims are absent from the required matrix because their canonical statuses are outside `established|contested|debunked|unknown`: `addiction-is-illness`, `adult-adhd`, `loneliness-health`, `postpartum-depression`, `psychosis-recovery`, and `seasonal-affective`.
- Fifty-eight source responses are blocked as inaccessible or non-substantive.

No canonical content was edited, and Phase 1 was not started.
