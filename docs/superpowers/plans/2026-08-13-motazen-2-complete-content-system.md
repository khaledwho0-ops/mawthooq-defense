# Motazen 2.0 Complete Content System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce the complete research-backed, Arabic-first Motazen handoff required by the 6,325-line specification, beginning with one genuinely complete 100-day `إنسان متزن` track and preserving the existing product code.

**Architecture:** The source specification, atomic requirements, evidence, claims, ontologies, safety rules, curriculum architecture, daily lessons, reviews, and implementation handoff remain separate, machine-checkable artifacts under `docs/MOTAZEN_HANDOFF`. Curriculum days reference stable claim, concept, pattern, skill, exercise, mission, and source IDs; the existing `motazen/` application remains untouched until content and product specifications are ready for implementation.

**Tech Stack:** UTF-8 Markdown, JSON, CSV, Node.js built-in test runner, PowerShell verification, existing static Motazen HTML/CSS/JavaScript only at the final authorized integration stage.

## Global Constraints

- Preserve the existing Motazen project; do not rebuild from scratch or delete pre-existing work.
- Every final track claimed complete contains exactly 100 full, substantive, role-specific days.
- Track #1 is `TRACK-HUMAN-001 — إنسان متزن`.
- Every full day implements all 44 daily fields, with explicit non-applicability reasons only where a field is genuinely irrelevant.
- Every day has Full, Standard, and Minimum modes; minimum is approximately 3–5 minutes and is valid completion.
- Every day includes a non-shaming failure response and does not require perfection.
- Major claims map to registered sources and show evidence strength, limitations, counterevidence, population, and Egyptian applicability.
- No diagnosis, therapy impersonation, emergency-care replacement, invented evidence, pseudoscience, toxic positivity, unsafe confrontation, gender stereotyping, shame, addictive streaks, or fake scores.
- Egyptian examples do not assume privacy, money, therapy access, transport, family support, gender norms, or one homogeneous culture.
- Human professional review status stays `PENDING` until attributable qualified reviewers assess a pinned content version.
- AI critical-lens reports are never represented as professional approval.
- Help-resource numbers remain unpublished until direct owner confirmation and lawful safe access verification.
- Product edits begin only after the content and implementation handoff are internally complete and verified.

---

## File Structure

- `docs/MOTAZEN_HANDOFF/00_CURRENT_STATE/`: immutable product baseline and project identity.
- `01_PRODUCT_CONSTITUTION/` through `27_BUILD_ORDER/`: one responsibility per numbered handoff area from the specification.
- `13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/`: canonical 100-day outline, coverage matrix, dependency graph, and spaced-review plan.
- `14_DAILY_LESSONS/TRACK-HUMAN-001/`: one JSON file per full day plus track manifest; never one giant unreviewable file.
- `24_TESTS/`: human-readable acceptance matrices and test evidence.
- `tools/motazen2/`: structural and cross-reference validators using only Node.js built-ins.
- `docs/superpowers/plans/`: execution plan and progress evidence; not product-facing content.

### Task 1: Rebaseline the Specification and Completion Evidence

**Files:**
- Modify: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/source-spec.sha256`
- Create: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/spec-provenance.json`
- Create: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/completion-audit.json`
- Test: `tools/motazen2/spec-provenance.test.mjs`

**Interfaces:**
- Consumes: the attached 90,018-byte, 6,325-line specification.
- Produces: immutable provenance and a requirement/deliverable status source used by every later completion claim.

- [ ] Record both attachment paths, byte count, line count, SHA-256, read date, project root, branch, and product path.
- [ ] Verify the two attachment hashes are identical and the checked-in hash matches them.
- [ ] Inventory all 27 required handoff directories and all 100 named final deliverables as `MISSING`, `PARTIAL`, `BLOCKED_EXTERNAL`, or `VERIFIED` with evidence paths.
- [ ] Add tests that reject a changed spec hash, absent attachment, missing deliverable ID, duplicate deliverable ID, or unsupported `COMPLETE` state.
- [ ] Run `node --test tools/motazen2/*.test.mjs`; expect all tests to pass.

### Task 2: Expand the Atomic Requirement Ledger Without Compression

**Files:**
- Modify: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/atomic-requirements.csv`
- Modify: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/coverage-map.md`
- Test: `tools/motazen2/requirements.test.mjs`

**Interfaces:**
- Consumes: all 150 numbered sections, their bullets, schemas, negative rules, gates, and deliverables.
- Produces: atomic IDs with one independently verifiable obligation per row.

- [ ] Split compound section summaries into separate `MUST`, `SHOULD`, `COULD`, and `MUST NOT` rows while retaining source-section references.
- [ ] Preserve all 90 absolute negative rules as separate testable requirements.
- [ ] Preserve every daily-field, screen-field, ontology, workflow, gate, and named deliverable requirement separately.
- [ ] Replace planned evidence paths with exact future or existing artifact paths and verification methods.
- [ ] Test unique IDs, complete section coverage, controlled statuses, nonempty verification, and no broad row that masks multiple independently failing obligations.

### Task 3: Complete Parts A–M as Real Foundations

**Files:**
- Create missing directories/files in `02_PRD`, `09_SKILL_ONTOLOGY`, `11_EXERCISE_LIBRARY`, `12_COMMUNICATION_SCRIPTS`, `15_DATA_MODEL`, `19_ARABIC`, `20_ACCESSIBILITY`, `21_PRIVACY`, `23_EVALUATION`, `24_TESTS`, and `26_KNOWN_LIMITATIONS`.
- Modify existing research, claims, patterns, safety, and gate artifacts when evidence or schemas require correction.
- Test: add focused validators under `tools/motazen2/` for every structured library.

**Interfaces:**
- Consumes: 91 current sources, 60 calibrated claims, 44 capabilities, 61 patterns, and 15 practice safety families.
- Produces: complete reusable research/content primitives required to write days without generic filler.

- [ ] Write a full PRD containing users, jobs, non-goals, flows, success metrics, harm metrics, constraints, and release gates.
- [ ] Build distinct skill, emotional-literacy, communication, relationship, family, education, workplace, and role/life-stage ontologies with stable IDs.
- [ ] Expand every pattern from taxonomy-only form into the full 21-field pattern model with linked claims, interventions, relapse handling, and safety limits.
- [ ] Build substantive exercise, behavior-experiment, real-world mission, communication-script, journal-prompt, myth, terminology, and resource libraries.
- [ ] Complete help-seeking, crisis, low-energy, missed-day, non-shaming progress, privacy, AI-consent, accessibility, low-bandwidth, and offline specifications.
- [ ] Keep every scientific claim traceable and every external-review dependency explicit.

### Task 4: Produce Part N — The Real 100-Day Architecture for `إنسان متزن`

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/outline.json`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/coverage-matrix.csv`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/dependency-graph.json`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/spaced-review-plan.json`
- Test: `tools/motazen2/track-outline.test.mjs`

**Interfaces:**
- Consumes: capability, skill, pattern, claim, exercise, safety, and research artifacts.
- Produces: exactly 100 distinct proposed days, each with title, objective, domain, placement rationale, prerequisites, and evidence/safety links.

- [ ] Define ten progressive phases with explicit entry/exit learning outcomes and justified weights.
- [ ] Write all 100 day records with real Arabic titles and specific measurable objectives.
- [ ] Give every day a placement rationale and validated prerequisite IDs.
- [ ] Assign capability, skill, pattern, claim, practice, and safety references without inventing IDs.
- [ ] Schedule retrieval, integration, and stress-test returns that add complexity rather than repeat wording.
- [ ] Test exact day numbering, uniqueness, references, dependency acyclicity, phase coverage, and required role-specific foundation domains.

### Task 5: Produce Part O — Duplication, Coverage, and Sequence Audit

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/part-o-audit.md`
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/audit-findings.json`
- Test: extend `tools/motazen2/track-outline.test.mjs`

**Interfaces:**
- Consumes: the complete 100-day outline and all research coverage ledgers.
- Produces: dispositions for missing, overrepresented, duplicated, unsupported, unsafe, or misordered content.

- [ ] Quantify day allocation by domain, capability, pattern, practice type, and phase.
- [ ] Detect exact and semantic near-duplicates; distinguish deliberate spaced return by added complexity.
- [ ] Audit prerequisites, difficulty progression, low-energy feasibility, Egyptian-context distribution, and safety-sensitive clusters.
- [ ] Correct the outline until no unresolved high-severity internal design finding remains.
- [ ] Preserve external human-review findings as open rather than silently passing them.

### Task 6: Write Part P — First 20 Full Pilot Days

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/day-001.json` through `day-020.json`
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/manifest.json`
- Test: `tools/motazen2/daily-lessons.test.mjs`

**Interfaces:**
- Consumes: approved-internally outline records and all linked content primitives.
- Produces: 20 substantive Arabic-first lessons implementing the complete 44-field schema.

- [ ] Write one day at a time with definitions, non-examples, role relevance, evidence, limits, Egyptian example, 3–8 self-checks, three action levels, experiment, mission, environment change, failure handling, reflection, adaptation, safety, help threshold, and linked sources.
- [ ] Use Modern Standard Arabic as canonical text and Egyptian simplification only where it improves comprehension without changing meaning.
- [ ] Ensure every activity is free or genuinely optional, reversible, nonmanipulative, and safe under stated conditions.
- [ ] Validate all IDs, exact 44-field presence, substantive minimum lengths, Arabic content, evidence strength vocabulary, and absence of prohibited claims.
- [ ] Render representative lessons for human reading and correct robotic or repetitive prose before review.

### Task 7: Execute Part Q — Four Independent Pilot Reviews

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/TRACK-HUMAN-001/PILOT-20/` with four version-pinned review reports.
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/TRACK-HUMAN-001/PILOT-20/objection-register.json`
- Test: `tools/motazen2/pilot-review.test.mjs`

**Interfaces:**
- Consumes: an immutable hash manifest of days 1–20.
- Produces: four independent AI critical-lens reviews at the required depth plus a separate attributable-human-review queue.

- [ ] Produce each required Top 20/Top 10/Top 5 review section against actual pilot text, not generic future warnings.
- [ ] Pin every objection to day, field, quoted short excerpt, claim/source, severity, and required disposition.
- [ ] Keep AI review and professional human review as separate statuses.
- [ ] Reject the pilot internally while any critical or high objection is unresolved.

### Task 8: Execute Part R — Revise and Re-verify Days 1–20

**Files:**
- Modify: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/day-001.json` through `day-020.json`
- Create: `docs/MOTAZEN_HANDOFF/25_RED_TEAM/TRACK-HUMAN-001/PILOT-20/revision-log.json`
- Test: all pilot and curriculum validators.

**Interfaces:**
- Consumes: every pilot objection.
- Produces: corrected pilot days and one evidence-backed disposition per objection.

- [ ] Resolve each internal content, evidence, sequence, language, accessibility, privacy, and safety objection.
- [ ] Mark external professional-review objections `OPEN_EXTERNAL`; never self-approve them.
- [ ] Re-run full structural, duplicate, prohibited-language, reference, and safety tests.
- [ ] Record immutable before/after hashes and changed fields.

### Task 9: Write Part S — Full Days 21–100

**Files:**
- Create: `docs/MOTAZEN_HANDOFF/14_DAILY_LESSONS/TRACK-HUMAN-001/day-021.json` through `day-100.json`
- Modify: track lesson manifest and version history.
- Test: complete curriculum suite.

**Interfaces:**
- Consumes: revised pilot patterns and the audited outline.
- Produces: exactly 100 complete days for Track #1.

- [ ] Write in ten-day reviewable batches while maintaining cross-day dependencies and spaced returns.
- [ ] Run tests after every day and semantic audits after every batch.
- [ ] Preserve real differences in examples, actions, experiments, missions, patterns, and adaptations.
- [ ] Ensure every important claim is sourced and every safety-sensitive action has a stop/alternative rule.
- [ ] Complete the track manifest only when all 100 files pass.

### Task 10: Complete the Product/Data/Screen Handoff

**Files:**
- Complete: `15_DATA_MODEL` through `24_TESTS` and `27_BUILD_ORDER`.
- Create: 50 screen specifications under `17_SCREEN_SPECS` and supporting `16_INFORMATION_ARCHITECTURE` and `18_DESIGN_SYSTEM` artifacts.

**Interfaces:**
- Consumes: proven content model and 100-day track.
- Produces: implementation-ready schemas, flows, screens, privacy/safety logic, and acceptance criteria without requiring a coding agent to invent psychology content.

- [ ] Specify every named entity and claim-evidence relation with validation and version rules.
- [ ] Specify all 50 screens using every required screen field, including states, RTL, accessibility, privacy, mobile, desktop, and acceptance criteria.
- [ ] Specify search, bad-pattern routing, unknown-problem routing, crisis precedence, journal controls, personalization, cross-track credit, missed days, notifications, offline, and low bandwidth.
- [ ] Build a dependency-ordered implementation sequence that preserves the current Motazen application.

### Task 11: Evaluate, Red-Team, and Version Track #1

**Files:**
- Complete: `23_EVALUATION`, `24_TESTS`, `25_RED_TEAM`, `26_KNOWN_LIMITATIONS`.
- Create: `docs/MOTAZEN_HANDOFF/13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/version-history.json`

**Interfaces:**
- Consumes: all 100 days and the full handoff.
- Produces: evidence for comprehension, recall, implementation, negative effects, dropout, duplication, safety, cultural, accessibility, privacy, and research-quality readiness.

- [ ] Run the exact per-track completion gate without treating tests as professional sign-off.
- [ ] Run prohibited-claim, source-quality, freshness, duplication, sequence, Arabic terminology, stereotype, affordability, privacy, and accessibility audits.
- [ ] Record all unresolved human testing and professional review as release blockers.
- [ ] Assign `V0.x DRAFT` until human gates pass; assign `V1.0` only after attributable review and user evaluation.

### Task 12: Final Requirement-by-Requirement Audit

**Files:**
- Modify: `docs/MOTAZEN_HANDOFF/03_REQUIREMENTS/completion-audit.json`
- Create: `docs/MOTAZEN_HANDOFF/24_TESTS/final-completeness-audit.md`
- Modify requirement and coverage statuses only where evidence proves them.

**Interfaces:**
- Consumes: every artifact and current product/worktree state.
- Produces: an honest final answer to all 100 named deliverables, 150 numbered sections, each atomic requirement, the track-count audit, and the per-track definition of done.

- [ ] Verify every requirement against direct artifact, test, rendered output, or attributable review evidence.
- [ ] Treat missing or indirect evidence as incomplete.
- [ ] Confirm no existing Motazen file was lost and any eventual integration is backward-safe.
- [ ] Report exact track totals: planned, researched, outlined, pilot-validated, 100/100, expert-reviewed, published, and full daily lessons.
- [ ] Do not claim the whole platform complete while future role tracks or external review obligations remain incomplete.

## Self-Review

- Spec coverage: tasks cover Parts A–S, all 27 handoff areas, 100 named deliverables, 50 screens, 44 daily fields, four reviews, and the exact 100-day invariant.
- Placeholder scan: the plan contains no unspecified implementation placeholders; external human actions have defined forms, evidence, and honest blocking statuses.
- Type consistency: canonical IDs are `TRACK-HUMAN-001`, `CAP-*`, `CLM-*`, `PAT-*`, and `PRACTICE-*`; new libraries will define their IDs before lesson references are accepted.
- Execution choice: inline execution is selected because the user explicitly required uninterrupted completion, and proactive subagent delegation is not authorized in the current environment.
