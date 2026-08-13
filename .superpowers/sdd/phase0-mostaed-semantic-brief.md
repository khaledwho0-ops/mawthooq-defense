# Task 2: Phase 0 Mostaed dropped-exception semantic review

## Goal

Resolve the 14 `BLOCKED` Mostaed A.D.A.M./Ebix L4/L5 dropped-exception audit records required by `implementation_plan1.md` Phase 0.1. Review each card against the complete fetched source context, create durable line-by-line evidence, and make only source-grounded surgical safety corrections when necessary. Do not start Phase 1 or author new cards.

## Binding rules

- Read `docs/SECOND_BRAIN.md` §§2.4, 2.4b, 2.8, and 2.11d.
- Read `C:\Users\pc\Desktop\EGY\implementation_plan1.md` Phase 0.1 and Addendum C.
- Fetch before judging; the existing saved corpus is evidence only after its SHA256 matches `corpus/index.json` and the source record.
- Check omissions, not only inventions. Carry every `usually`, `except`, `unless`, conditional, age/weight boundary, and escalation condition.
- Review the full card; never slice it.
- One card at a time; persist each completed review before moving to the next.
- A heuristic match cannot award PASS.
- Preserve the canonical card count. Any safety fix must be a surgical, source-grounded addition or correction with provenance; never regenerate `mostaed/scenarios.js`.
- Do not make a licensing claim beyond the source metadata already recorded.

## Scope

Review exactly these current qualifying cards, plus fail if the canonical scope changes and any qualifying card is omitted:

1. `choking-adult`
2. `drowning`
3. `burn`
4. `electric-shock`
5. `infant-choking`
6. `heat-stroke`
7. `head-injury`
8. `shock`
9. `chemical-burn`
10. `breathing-difficulty`
11. `dislocation`
12. `genital-injury`
13. `skull-fracture`
14. `unconsciousness`

## Durable review artifact

Create `docs/audits/phase0-2026-08-02/semantic-reviews/mostaed-dropped-exceptions.json`.

For each card record:

- `card_id`, title, level, canonical card SHA or full-card digest
- every referenced A.D.A.M. source ID, URL, saved corpus filename, SHA256, retrieval date, and final URL
- every actionable `do` and `dont` field path and full card text
- for each actionable line: cited source ID, exact supporting source excerpt with surrounding context, any qualifier/exception in that context, whether the card carries it, and verdict `PASS` or `FAIL`
- a separate source-wide qualifier/exception inventory and disposition, so an omitted clause cannot disappear merely because no card line pointed to it
- overall verdict, reviewer note, and any remediation commit/change

The record is complete only when every current `do`/`dont` path is represented exactly once, every cited source capture/hash resolves, all source-wide safety qualifiers have a disposition, and all line verdicts pass.

## Audit integration and tests

Update `tools/phase0-audit.mjs` to consume this manifest and award a Mostaed `PASS` only when:

- the manifest covers the exact live qualifying inventory
- full-card and source hashes still match current bytes
- every current actionable field path/text/source is covered exactly once
- every line and source-wide qualifier disposition is `PASS`
- no manifest record is stale, incomplete, duplicated, or references inaccessible evidence

Otherwise it must emit `FAIL` for a proven content defect or `BLOCKED` for missing/stale/incomplete review evidence.

Add strict RED→GREEN tests to `tools/phase0-audit.test.mjs` for manifest coverage, stale card/source hashes, missing paths, duplicate paths, unresolved qualifiers, and successful complete semantic review.

## Remediation

If a card fails:

1. Record the failure before editing.
2. Add or correct only the minimum source-grounded safety wording in `mostaed/scenarios.js`, retaining `{t, src}` provenance.
3. Preserve all 119 card IDs/count.
4. Re-review the complete amended card and update the semantic record with before/after and exact source excerpt.
5. Run the project’s applicable validator if present; never suppress a failure.

## Verification

Run and record:

```powershell
node --test tools/phase0-audit.test.mjs
node tools/phase0-audit.mjs
git diff --check
```

Also recompute every manifest/corpus/card hash, verify the Mostaed count remains 119, and confirm no other canonical project file changed. Update `PHASE0_CHECKPOINT.md`, `phase0-summary.json`, `mostaed-dropped-exceptions.md`, and the single authoritative task report. The overall Phase 0 gate may remain `BLOCKED` because Motazen work is separate; the Mostaed dropped-exception sub-gate must be clean before this task is complete.

Commit the task. Do not begin Motazen remediation or Phase 1.

