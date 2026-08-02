# Phase 0 checkpoint — 2026-08-02

**Gate: BLOCKED. Phase 1 was not started.**

## Canonical input integrity

| product | before | after | sha256_before | sha256_after | unchanged |
|---|---|---|---|---|---|
| mostaed | 119 | 119 | b6ccfa5c4df2767dad72430c7f9b0f3668242c4dd054b477caf4054a9a9913ca | b6ccfa5c4df2767dad72430c7f9b0f3668242c4dd054b477caf4054a9a9913ca | true |
| motazen | 130 | 130 | 0785c79746b050b3412b7fb38ab52c19748919d360e834ade3e12e620eba5822 | 0785c79746b050b3412b7fb38ab52c19748919d360e834ade3e12e620eba5822 | true |
| aman | 10 | 10 | 49e0d976e71fba3c4c090acf5b58156a982cdfa2a17b7c8cd07f73b310177444 | 49e0d976e71fba3c4c090acf5b58156a982cdfa2a17b7c8cd07f73b310177444 | true |
| hoqoqi | 15 | 15 | 8f1ed58a2e8c596a093213b1b70ba91efb7ae5eea8cb2616ed23ff53f583f4be | 8f1ed58a2e8c596a093213b1b70ba91efb7ae5eea8cb2616ed23ff53f583f4be | true |

## Evidence totals

- Source fetches: 93 requested; 39 saved; 54 blocked.
- Mostaed: 14 audited; {"PASS":0,"FAIL":0,"BLOCKED":14}.
- Motazen: all 130 inventoried; 41 statistical; {"PASS":0,"FAIL":0,"BLOCKED":41}.
- Contacts: 1 inventoried; {"PASS":1,"FAIL":0,"BLOCKED":0}.
- Matrices: Mostaed 40 cells/119 cards; Motazen 52 cells/124 classified claims plus 6 invalid-status claims; Aman 24 rows; Hoqoqi 22 rows.

## Commands

- `node --test tools/phase0-audit.test.mjs`
- `node tools/phase0-audit.mjs`
- `git diff --check`

## Exact blockers

- choking-adult: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- drowning: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- burn: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- electric-shock: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- infant-choking: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- heat-stroke: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- head-injury: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- shock: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- chemical-burn: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- breathing-difficulty: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- dislocation: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- genital-injury: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- skull-fracture: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- unconsciousness: BLOCKED — Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.
- mood-recurrence: BLOCKED — At least one cited source was inaccessible.
- mood-antidepressants: BLOCKED — At least one cited source was inaccessible.
- mood-efficacy-contested: BLOCKED — At least one cited source was inaccessible.
- mood-regional: BLOCKED — At least one cited source was inaccessible.
- anx-benzo-caution: BLOCKED — At least one cited source was inaccessible.
- anx-help-exists: BLOCKED — At least one cited source was inaccessible.
- anx-how-strong-contested: BLOCKED — At least one cited source was inaccessible.
- anx-why-unknown: BLOCKED — At least one cited source was inaccessible.
- sleep-disruptors-caffeine-shift: BLOCKED — At least one cited source was inaccessible.
- sleep-melatonin-overuse: BLOCKED — At least one cited source was inaccessible.
- sleep-insomnia-features: BLOCKED — At least one cited source was inaccessible.
- sleep-eight-hours-contested: BLOCKED — At least one cited source was inaccessible.
- sleep-normal-vs-disorder: BLOCKED — At least one cited source was inaccessible.
- trauma-features-clusters: BLOCKED — At least one cited source was inaccessible.
- trauma-most-recover: BLOCKED — At least one cited source was inaccessible.
- adhd-real-valid: BLOCKED — At least one cited source was inaccessible.
- adhd-normal-vs-disorder: BLOCKED — At least one cited source was inaccessible.
- p0-languishing: BLOCKED — At least one cited source was inaccessible.
- p0-attend-positive: BLOCKED — At least one cited source was inaccessible.
- p0-bps-frame: BLOCKED — At least one cited source was inaccessible.
- p0-bps-contested: BLOCKED — At least one cited source was inaccessible.
- skill-breathing: BLOCKED — At least one cited source was inaccessible.
- bz2-serotonin-simple-story-debunked: BLOCKED — At least one cited source was inaccessible.
- bz2-serotonin-role-contested: BLOCKED — At least one cited source was inaccessible.
- bz3-top-ten-burden: BLOCKED — At least one cited source was inaccessible.
- bz3-treatment-gap: BLOCKED — Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.
- bz3-true-magnitude-contested: BLOCKED — At least one cited source was inaccessible.
- bz4-illusory-truth: BLOCKED — At least one cited source was inaccessible.
- bz4-anecdote-not-evidence: BLOCKED — At least one cited source was inaccessible.
- bz4-confirmation-bias-search: BLOCKED — At least one cited source was inaccessible.
- bz4-actuarial-vs-clinical: BLOCKED — At least one cited source was inaccessible.
- bz4-dunning-kruger: BLOCKED — At least one cited source was inaccessible.
- bz5-study-vs-know: BLOCKED — At least one cited source was inaccessible.
- bz5-replication-crisis: BLOCKED — At least one cited source was inaccessible.
- bz5-crisis-overstated: BLOCKED — At least one cited source was inaccessible.
- bz6-overmedicalizing-grief-contested: BLOCKED — At least one cited source was inaccessible.
- bz6-definition-of-disorder-unsettled: BLOCKED — At least one cited source was inaccessible.
- bz7-categories-are-human-decisions: BLOCKED — At least one cited source was inaccessible.
- burnout-is-real: BLOCKED — Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.
- grief-vs-depression: BLOCKED — Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.
- postpartum-depression: BLOCKED — Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.
- Motazen matrix postpartum-depression: FAIL — status "pending_clinician_review" is outside established|contested|debunked|unknown.
- Motazen matrix addiction-is-illness: FAIL — status "grounded" is outside established|contested|debunked|unknown.
- Motazen matrix seasonal-affective: FAIL — status "verified" is outside established|contested|debunked|unknown.
- Motazen matrix psychosis-recovery: FAIL — status "grounded" is outside established|contested|debunked|unknown.
- Motazen matrix adult-adhd: FAIL — status "needs_review" is outside established|contested|debunked|unknown.
- Motazen matrix loneliness-health: FAIL — status "needs_review" is outside established|contested|debunked|unknown.
- Inventory completeness: FAIL — Motazen claims represented in matrix missing: addiction-is-illness, adult-adhd, loneliness-health, postpartum-depression, psychosis-recovery, seasonal-affective

The hard gate is fail-closed. No heuristic keyword or quantity match was treated as a semantic PASS, and Phase 1 was not started.
