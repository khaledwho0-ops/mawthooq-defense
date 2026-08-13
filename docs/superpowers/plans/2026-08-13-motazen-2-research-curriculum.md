# Motazen 2.0 Research and Curriculum Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend the existing Motazen project into an Arabic-first, evidence-traceable human-capability curriculum system without deleting, replacing, or falsely validating any existing work.

**Architecture:** Keep the current static Motazen experience intact while building a versioned `docs/MOTAZEN_HANDOFF` content system beside it. Treat sources, claims, concepts, patterns, tracks, and days as separate registries joined by stable IDs; generate no production UI integration until the first track passes its research, safety, pilot, duplication, and professional-review gates.

**Tech Stack:** Markdown and UTF-8 JSON/CSV for editorial artifacts; Node.js ESM and `node:test` for validation; existing static HTML/CSS/JavaScript only when the content handoff is approved for implementation.

## Global Constraints

- Preserve every existing Motazen file and all uncommitted user work; no restart, deletion, silent replacement, or destructive Git operation.
- Every final published role track has exactly 100 complete, substantive, role-specific days.
- Shared evidence may be reused; final curricula may not be copy-pasted or superficially renamed across roles.
- Motazen does not diagnose, treat, promise cure, replace professional or emergency care, or advise medication changes.
- Important claims require traceable sources, limitations, counterevidence, population and cultural context, and explicit evidence strength.
- Never invent sources, citations, quotations, statistics, professional consensus, expert sign-off, or content-review status.
- Arabic is first-class: Modern Standard Arabic for core content, Egyptian Arabic where explanation helps, with RTL and terminology review.
- Every full day uses the complete 44-field schema, including full, standard, minimum, low-energy, failure-response, safety, help-threshold, and evidence fields.
- No shame, streak resets, leaderboards, emotional-data advertising, hidden AI processing, or public social comparison.
- Target WCAG 2.2 AA, keyboard and screen-reader access, reduced motion, non-color meaning, zoom, low-literacy support, low bandwidth, and offline-safe content.
- First execution order is Parts A through R; Days 21–100 are written only after the 20-day pilot passes the defined quality gates.
- Professionally reviewed status remains unavailable until identifiable qualified humans review and sign off.

---

### Task 1: Preserve and fingerprint the current project

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/00_CURRENT_STATE/README.md`
- Create: `docs/MOTAZEN_HANDOFF/00_CURRENT_STATE/file-manifest.json`
- Create: `tools/motazen2/snapshot-current-state.mjs`
- Test: `tools/motazen2/snapshot-current-state.test.mjs`

**Interfaces:**
- Consumes: the existing `motazen/` directory and Git metadata without modifying either.
- Produces: `snapshotCurrentState(rootDir): Promise<CurrentStateManifest>` and a recorded baseline of paths, sizes, SHA-256 hashes, branch, commit, and dirty-state warnings.

- [ ] **Step 1: Write the failing manifest test**

```js
test('snapshot records every Motazen file without editing it', async () => {
  const before = await hashTree(motazenDir);
  const manifest = await snapshotCurrentState(repoRoot);
  assert.deepEqual(manifest.motazenFiles.map(({ path }) => path), Object.keys(before));
  assert.deepEqual(await hashTree(motazenDir), before);
});
```

- [ ] **Step 2: Run the test and confirm the missing-module failure**

Run: `node --test tools/motazen2/snapshot-current-state.test.mjs`

Expected: FAIL because `snapshot-current-state.mjs` does not exist.

- [ ] **Step 3: Implement the read-only snapshot and write its checked-in outputs**

```js
export async function snapshotCurrentState(repoRoot) {
  return { schemaVersion: 1, capturedAt: new Date().toISOString(), repoRoot, motazenFiles: await fingerprintMotazen(repoRoot) };
}
```

- [ ] **Step 4: Run the test and compare `git status --short` before and after**

Expected: PASS; only the four planned Task 1 artifacts are newly changed.

- [ ] **Step 5: Commit only Task 1 after explicit user authorization to commit**

### Task 2: Build the atomic requirement ledger and coverage validator

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/atomic-requirements.csv`
- Create: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/coverage-map.md`
- Create: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/source-spec.sha256`
- Create: `tools/motazen2/validate-requirements.mjs`
- Test: `tools/motazen2/validate-requirements.test.mjs`

**Interfaces:**
- Consumes: all 150 numbered specification sections and their nested obligations.
- Produces: stable `MOT-NNNN` IDs with `priority`, `source_section`, `requirement`, `verification`, `artifact`, and `status`; `validateRequirementLedger(csv): ValidationReport`.

- [ ] **Step 1: Write tests that reject duplicate IDs, empty verification rules, unknown priorities, skipped source sections, and summaries that combine independently testable requirements**
- [ ] **Step 2: Run the test and verify it fails because the validator is absent**
- [ ] **Step 3: Implement strict CSV parsing and validation with errors that name the exact row and field**
- [ ] **Step 4: Transcribe the complete specification into atomic rows without deleting repeated-but-binding constraints**
- [ ] **Step 5: Run the validator and manually audit every specification section against `coverage-map.md`**

Expected: PASS, all sections 1–150 represented, zero duplicate IDs, zero blank verification rules.

### Task 3: Write Parts A–F as canonical product foundations

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/01_PRODUCT_CONSTITUTION/constitution.md`
- Create: `docs/MOTAZEN_HANDOFF/02_PRD/PRD-v2.md`
- Create: `docs/MOTAZEN_HANDOFF/04_TRACK_UNIVERSE/tracks.json`
- Create: `docs/MOTAZEN_HANDOFF/04_TRACK_UNIVERSE/priority-matrix.csv`
- Create: `docs/MOTAZEN_HANDOFF/08_CONCEPT_ONTOLOGY/human-capabilities.json`
- Create: `docs/MOTAZEN_HANDOFF/09_SKILL_ONTOLOGY/skills.json`
- Create: `docs/MOTAZEN_HANDOFF/10_PATTERN_ONTOLOGY/patterns.json`
- Test: `tools/motazen2/foundations.test.mjs`

**Interfaces:**
- Consumes: Tasks 1–2 and the existing `docs/Motazen_PRD_v1.md` as preserved prior work.
- Produces: Parts A–F; stable `TRACK-*`, `CAP-*`, `SKILL-*`, and `PAT-*` IDs; an explicit `100` required days for every planned track.

- [ ] **Step 1: Write schema tests for unique IDs, required Arabic names, track day count, ontology references, and priority scoring**
- [ ] **Step 2: Run tests and confirm failure on missing artifacts**
- [ ] **Step 3: Write the constitution and v2 PRD as extensions that cite preserved v1 decisions and explicitly resolve conflicts**
- [ ] **Step 4: Write the complete track universe and score priority using need, reach, evidence availability, risk, distinctiveness, Egypt relevance, and implementation readiness**
- [ ] **Step 5: Write capability, skill, and bad-pattern ontologies with triggers, short-term rewards, costs, protective factors, contraindications, change pathways, relapse plans, and role relevance**
- [ ] **Step 6: Run tests and inspect all Arabic files for UTF-8/RTL corruption**

### Task 4: Conduct Parts G–M research for Track 1, “إنسان متزن”

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/05_ROLE_RESEARCH/TRACK-HUMAN-001/question-tree.md`
- Create: `docs/MOTAZEN_HANDOFF/05_ROLE_RESEARCH/TRACK-HUMAN-001/search-log.csv`
- Create: `docs/MOTAZEN_HANDOFF/05_ROLE_RESEARCH/TRACK-HUMAN-001/egypt-mena-plan.md`
- Create: `docs/MOTAZEN_HANDOFF/05_ROLE_RESEARCH/TRACK-HUMAN-001/research-gate.md`
- Create: `docs/MOTAZEN_HANDOFF/06_SOURCE_LIBRARY/sources.json`
- Create: `docs/MOTAZEN_HANDOFF/07_CLAIM_LIBRARY/claims.json`
- Create: `docs/MOTAZEN_HANDOFF/22_SAFETY/professional-boundaries.md`
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/expert-lens-reports.md`
- Test: `tools/motazen2/evidence.test.mjs`

**Interfaces:**
- Consumes: primary professional guidance, systematic reviews, role-specific research, Egypt/MENA research, intervention evidence, limitations, adverse effects, and counterevidence.
- Produces: Parts G–M; `SRC-*` and `CLM-*` records; four independent AI-assisted review lenses clearly marked as not professional sign-off.

- [ ] **Step 1: Write evidence tests that reject missing URLs/DOIs, unverified quotations, unsupported claim links, invalid evidence levels, and false professional-review states**
- [ ] **Step 2: Generate bilingual search queries for every first-track domain, including contradiction, adverse-effect, cultural-limit, Egypt, MENA, and Arabic passes**
- [ ] **Step 3: Collect the minimum source mix, then continue until every curriculum domain reaches documented saturation rather than stopping at the quota**
- [ ] **Step 4: Record findings, populations, methods, limitations, cultural transfer limits, dates checked, and archived/canonical links**
- [ ] **Step 5: Build the claim-evidence graph and downgrade or exclude claims whose wording exceeds their evidence**
- [ ] **Step 6: Write clinical/public-health, behavioral-science, curriculum, and Egypt/culture review-lens reports with objections, vetoes, safety risks, omissions, and definition of done**
- [ ] **Step 7: Run the research completion gate; critical weak or missing areas return to Step 2**

### Task 5: Design Part N, the complete Track 1 curriculum architecture

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001.json`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001.md`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001-dependencies.json`
- Test: `tools/motazen2/curriculum-outline.test.mjs`

**Interfaces:**
- Consumes: approved Track 1 research gate, claims, capabilities, skills, patterns, and safety rules.
- Produces: exactly 100 proposed days, each with title, objective, domain, placement rationale, prerequisites, review links, and evidence dependencies.

- [ ] **Step 1: Write tests for exactly 100 unique ordered days, valid prerequisites, no cycles, domain coverage, spaced retrieval, increasing complexity, and role specificity**
- [ ] **Step 2: Run tests and confirm failure on missing outline**
- [ ] **Step 3: Write the 100-day sequence across foundations, awareness, regulation, behavior, relationships, health routines, digital life, decisions, resilience, meaning, integration, and help-seeking**
- [ ] **Step 4: Add intentional spaced reviews that deepen prior skills and label every dependency**
- [ ] **Step 5: Run structural tests and perform a human-readable sequencing audit**

### Task 6: Perform Part O duplication and coverage audit

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/24_TESTS/TRACK-HUMAN-001-coverage.csv`
- Create: `docs/MOTAZEN_HANDOFF/24_TESTS/TRACK-HUMAN-001-duplication.md`
- Create: `tools/motazen2/audit-outline.mjs`
- Test: `tools/motazen2/audit-outline.test.mjs`

**Interfaces:**
- Consumes: Track 1 outline and ontologies.
- Produces: auditable missing-domain, overrepresentation, accidental repetition, prerequisite, and filler reports.

- [ ] **Step 1: Write fixtures proving exact duplicate, near-duplicate, and legitimate spaced-review cases are distinguished**
- [ ] **Step 2: Implement deterministic structural comparison; use semantic similarity only as a flagged manual-review aid**
- [ ] **Step 3: Review every flag and revise the outline rather than suppressing unexplained warnings**
- [ ] **Step 4: Re-run until no critical gap or accidental duplicate remains**

### Task 7: Write Part P, the first 20 full Track 1 days

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/days-001-020.json`
- Create: `docs/MOTAZEN_HANDOFF/11_EXERCISE_LIBRARY/exercises.json`
- Create: `docs/MOTAZEN_HANDOFF/12_COMMUNICATION_SCRIPTS/scripts.json`
- Create: `tools/motazen2/validate-days.mjs`
- Test: `tools/motazen2/validate-days.test.mjs`

**Interfaces:**
- Consumes: approved outline, claims, sources, patterns, exercises, safety thresholds, and Arabic terminology.
- Produces: 20 substantive days satisfying all 44 fields and linked to real evidence IDs.

- [ ] **Step 1: Write tests that enumerate all 44 required fields and reject empty, generic, unsourced, unsafe, non-Arabic, or repeated lessons**
- [ ] **Step 2: Write Days 1–20 one at a time, checking source wording and counterevidence before each day is accepted**
- [ ] **Step 3: Give every day full, standard, minimum, low-energy, failure-response, no-purchase, privacy, safety, and help-threshold paths**
- [ ] **Step 4: Run schema, evidence-link, duplication, Arabic, and negative-rule tests**

### Task 8: Execute Parts Q–R, pilot review and revision

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/TRACK-HUMAN-001-pilot-review.md`
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/pilot-change-log.md`
- Modify: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/days-001-020.json`
- Test: `tools/motazen2/pilot-gate.test.mjs`

**Interfaces:**
- Consumes: Days 1–20 and the four expert-lens criteria.
- Produces: objection-by-objection disposition, revisions, unresolved risks, and an honest `PASS`, `CONDITIONAL`, or `FAIL` gate that cannot claim professional review.

- [ ] **Step 1: Write gate tests requiring every objection to have a disposition and every accepted correction to link to a changed day/version**
- [ ] **Step 2: Review clarity, evidence, exercise feasibility, adherence burden, safety, cultural relevance, shame, overpathologizing, under-escalation, and accessibility**
- [ ] **Step 3: Revise the pilot and log every material change**
- [ ] **Step 4: Mark professional review as pending unless qualified named reviewers have actually signed off**

### Task 9: Write Part S, Days 21–100, only after pilot quality passes

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/days-021-100.json`
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/version.json`
- Test: `tools/motazen2/track-completion.test.mjs`

**Interfaces:**
- Consumes: a passing pilot gate and revised Days 1–20.
- Produces: one 100-day Track 1 candidate, never labeled published or professionally reviewed without real sign-off.

- [ ] **Step 1: Add a failing gate test that prohibits Days 21–100 when pilot status is not `PASS`**
- [ ] **Step 2: Write Days 21–100 in curriculum order with the same evidence and 44-field discipline**
- [ ] **Step 3: Run the exact track completion checklist: 100/100 days, role specificity, actions, low energy, failure response, evidence, safety, Egypt, stereotypes, duplication, sequencing, spaced review, patterns, boundaries, accessibility, and review state**
- [ ] **Step 4: Record all unresolved unknowns and keep publication blocked until required human review and user evaluation occur**

### Task 10: Produce implementation-ready platform handoff without rewriting the current UI

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/15_DATA_MODEL/schema.md`
- Create: `docs/MOTAZEN_HANDOFF/16_INFORMATION_ARCHITECTURE/information-architecture.md`
- Create: `docs/MOTAZEN_HANDOFF/17_SCREEN_SPECS/screens.json`
- Create: `docs/MOTAZEN_HANDOFF/18_DESIGN_SYSTEM/design-system.md`
- Create: `docs/MOTAZEN_HANDOFF/19_ARABIC/terminology.json`
- Create: `docs/MOTAZEN_HANDOFF/20_ACCESSIBILITY/accessibility.md`
- Create: `docs/MOTAZEN_HANDOFF/21_PRIVACY/privacy.md`
- Create: `docs/MOTAZEN_HANDOFF/23_EVALUATION/evaluation.md`
- Create: `docs/MOTAZEN_HANDOFF/26_KNOWN_LIMITATIONS/limitations.md`
- Create: `docs/MOTAZEN_HANDOFF/27_BUILD_ORDER/build-order.md`
- Test: `tools/motazen2/handoff.test.mjs`

**Interfaces:**
- Consumes: validated content schemas and the existing static-site conventions.
- Produces: all 50 minimum screen specifications with purpose, user, state, content, data, actions, empty/loading/error, low energy, RTL, accessibility, privacy, mobile, desktop, and acceptance criteria; complete privacy, offline, low-bandwidth, evaluation, and implementation rules.

- [ ] **Step 1: Write tests for all required handoff directories, all 50 screens, and every required screen field**
- [ ] **Step 2: Define normalized models for source, claim, concept, skill, pattern, exercise, track, day, review, version, user progress, consent, and content report**
- [ ] **Step 3: Specify calm Arabic-first UX while preserving the current visual identity as the implementation baseline**
- [ ] **Step 4: Specify local-only journal by default, explicit AI consent, export/delete, encryption for cloud data, notification controls, offline freshness warnings, and harm reporting**
- [ ] **Step 5: Write the incremental build order; do not modify `motazen/*.html`, `motazen/claims.js`, or `motazen/style.css` in this research phase**

### Task 11: Run final completeness, code, documentation, test, safety, privacy, and accessibility audits

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/24_TESTS/final-verification.md`
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/final-red-team.md`
- Create: `tools/motazen2/verify-handoff.mjs`
- Test: `tools/motazen2/verify-handoff.test.mjs`

**Interfaces:**
- Consumes: every Motazen 2.0 artifact and validator.
- Produces: track-count audit, 100-deliverable audit, requirement coverage, broken-reference list, stale-source list, and explicit blockers.

- [ ] **Step 1: Write an end-to-end test that fails on missing artifacts, broken IDs, incomplete track counts, false review states, stale source checks, or unmet MUST/MUST NOT requirements**
- [ ] **Step 2: Run all Motazen 2.0 tests plus the repository's existing test suite and record failures without hiding unrelated pre-existing failures**
- [ ] **Step 3: Apply clean-code, documentation, test-quality, evidence, cultural, privacy, accessibility, and clinical-safety review checklists**
- [ ] **Step 4: Re-run the exact commands and capture fresh output in `final-verification.md`**
- [ ] **Step 5: Declare only the artifacts and tracks that actually satisfy their definitions of done; list every remaining blocker plainly**

