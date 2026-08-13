import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const auditPath = join(root, '03_REQUIREMENTS', 'completion-audit.json');
const audit = JSON.parse(await readFile(auditPath, 'utf8'));
const updates = new Map(Object.entries({
  'DEL-004': { status: 'PARTIAL', evidence: ['03_REQUIREMENTS/coverage-map.md','09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-capability-coverage.json','13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/coverage-matrix.csv','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json'], gap: 'Research, outline, and all 100 canonical days are covered for إنسان متزن; production UI and remaining role tracks are not complete.' },
  'DEL-007': { status: 'PARTIAL', evidence: ['04_TRACK_UNIVERSE/role-ontology.json'], gap: 'A ten-role plural optional foundation exists; direct Egyptian role research, duplicate-role adjudication, and human review remain.' },
  'DEL-008': { status: 'PARTIAL', evidence: ['04_TRACK_UNIVERSE/life-stage-ontology.json'], gap: 'A non-linear life-stage and transition foundation exists; age, safeguarding, accessibility, and Egyptian validation remain.' },
  'DEL-010': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Core skill ontology foundation exists with prerequisites and boundaries; full research depth and human review remain.' },
  'DEL-011': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Emotional-literacy foundation exists; full concepts, claims, examples, and clinical/cultural review remain.' },
  'DEL-012': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json','12_COMMUNICATION_SCRIPTS/scripts.json'], gap: 'Communication ontology and fifteen bounded scripts exist; full coverage, role transfer, and human review remain.' },
  'DEL-013': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-098.json'], gap: 'Relationship ontology foundation and final manual exist; a complete relationship track and external safety review remain.' },
  'DEL-014': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Family ontology foundation exists; full family research library and track content remain.' },
  'DEL-015': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Parenting ontology foundation exists; child-development evidence, safeguarding review, and parent tracks remain.' },
  'DEL-016': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Education ontology foundation exists; student/teacher tracks and education-system research remain.' },
  'DEL-017': { status: 'PARTIAL', evidence: ['09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'Workplace ontology foundation exists; sector-specific Egyptian evidence and employee/manager tracks remain.' },
  'DEL-019': { status: 'PARTIAL', evidence: ['18_MYTH_LIBRARY/myths.json'], gap: 'Fifteen sourced calibrated myths exist; broader coverage, Egyptian language testing, and professional review remain.' },
  'DEL-020': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/evidence-hierarchy.json'], gap: 'A complete evidence hierarchy, wording calibration, counterevidence, context, freshness, and publication policy exists; professional ratification remains.' },
  'DEL-021': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/sources.json','06_SOURCE_LIBRARY/freshness-policy.json','06_SOURCE_LIBRARY/research-libraries-index.json'], gap: 'All 91 researched sources now have canonical 100-day usage maps and reproducible filtered indexes; recurring updates and professional review remain.' },
  'DEL-022': { status: 'PARTIAL', evidence: ['07_CLAIM_LIBRARY/claims.json','07_CLAIM_LIBRARY/claim-day-index.json'], gap: 'All 60 calibrated claims now have canonical day links; professional review and correction operations remain.' },
  'DEL-025': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/sources.json','06_SOURCE_LIBRARY/research-libraries-index.json'], gap: 'A generated scientific-evidence library with canonical day links exists; consumer summaries, updates, and implementation remain.' },
  'DEL-026': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/research-libraries-index.json','06_SOURCE_LIBRARY/evidence-hierarchy.json'], gap: 'A generated professional-guideline library and use policy exist; update operations and human review remain.' },
  'DEL-027': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/research-libraries-index.json'], gap: 'A generated systematic-review library with canonical day links exists; domain synthesis narratives and recurring updates remain.' },
  'DEL-028': { status: 'PARTIAL', evidence: ['07_CLAIM_LIBRARY/claims.json','09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-day-evidence-and-counterevidence.json'], gap: 'Every canonical day now exposes claim-level counterevidence, limitations, and Egyptian applicability; human research-quality review remains.' },
  'DEL-029': { status: 'PARTIAL', evidence: ['11_EXERCISE_LIBRARY/exercises.json','22_SAFETY/practice-dose-stop-rules.json','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json'], gap: 'All fifteen practice families have dose, success, stop, alternatives, evidence, privacy, and complete first-track lesson mappings; professional review and other tracks remain.' },
  'DEL-030': { status: 'PARTIAL', evidence: ['11_EXERCISE_LIBRARY/behavioral-experiments.json','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json'], gap: 'All 100 إنسان متزن days have distinct source- and safety-linked experiments; human review and other tracks remain.' },
  'DEL-031': { status: 'PARTIAL', evidence: ['12_REAL_WORLD_MISSIONS/real-world-missions.json','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json'], gap: 'All 100 إنسان متزن days have distinct source-, relationship-, environment-, and safety-linked missions; human review and other tracks remain.' },
  'DEL-032': { status: 'PARTIAL', evidence: ['12_COMMUNICATION_SCRIPTS/scripts.json'], gap: 'Fifteen sourced bounded scripts exist; broader role coverage and Egyptian safety/language review remain.' },
  'DEL-033': { status: 'PARTIAL', evidence: ['13_JOURNAL_PROMPTS/prompts.json'], gap: 'Three optional no-storage prompts exist for each of 100 days; implementation, usability, and privacy review remain.' },
  'DEL-038': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/low-energy-system.json'], gap: 'Reusable non-coercive low-energy logic and acceptance tests exist; implementation and disabled-user review remain.' },
  'DEL-039': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/missed-day-system.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-096.json'], gap: 'Non-punitive return logic exists for four absence windows; implementation and user testing remain.' },
  'DEL-040': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/non-shaming-progress-system.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Multidimensional non-scoring progress rules and a screen contract exist; implementation and harm testing remain.' },
  'DEL-041': { status: 'PARTIAL', evidence: ['13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/outline.json','13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/dependency-graph.json','16_PRODUCT_SYSTEMS/cross-track-reuse.md'], gap: 'A real 100-day sequence and reusable sequencing gates exist; a second full track and human curriculum review are needed to validate reuse.' },
  'DEL-042': { status: 'PARTIAL', evidence: ['13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/dependency-graph.json','16_PRODUCT_SYSTEMS/cross-track-reuse.md'], gap: 'All 100 first-track prerequisites plus change-impact and cross-track dependency rules exist; visualization and multi-track validation remain.' },
  'DEL-043': { status: 'PARTIAL', evidence: ['13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/spaced-review-plan.json','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json'], gap: 'Spaced review and retrieval prompts are implemented across all 100 draft days; learner adaptation, production behavior, and outcome validation remain.' },
  'DEL-044': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/cross-track-reuse.md'], gap: 'Reuse, transformation, safety, and change-impact rules exist; no second full track has tested them.' },
  'DEL-045': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/versioning-and-status.json'], gap: 'Track version states and publication gates exist; registry implementation and migration tests remain.' },
  'DEL-046': { status: 'PARTIAL', evidence: ['15_DATA_MODEL/day-schema.json','15_DATA_MODEL/day-presentation-contract.json','14_DAILY_LESSONS/TRACK-HUMAN-001/expansion-manifest.json','16_PRODUCT_SYSTEMS/versioning-and-status.json'], gap: 'All 100 إنسان متزن days are versioned drafts with exact 44-field records and practice pointers; revision-log implementation and human review remain.' },
  'DEL-047': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/freshness-policy.json','06_SOURCE_LIBRARY/evidence-hierarchy.json','16_PRODUCT_SYSTEMS/versioning-and-status.json'], gap: 'Freshness, correction, retraction, and source-to-UI impact traversal rules exist; operational automation and owners remain.' },
  'DEL-048': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/versioning-and-status.json'], gap: 'Content state transitions and forbidden skips exist; enforcement and accountable approval workflow remain.' },
  'DEL-049': { status: 'PARTIAL', evidence: ['23_EVALUATION/curriculum-evaluation.json'], gap: 'A multi-outcome evaluation design exists; ethics, instruments, sample, pilot, and analysis remain.' },
  'DEL-050': { status: 'PARTIAL', evidence: ['23_EVALUATION/negative-outcome-monitoring.json'], gap: 'Harm signals, severity routes, stop rules, and governance exist; secure operations and staffing remain.' },
  'DEL-051': { status: 'PARTIAL', evidence: ['23_EVALUATION/feedback-system.json'], gap: 'Feedback schema, routing, status, anti-retaliation, and privacy rules exist; implementation and response capacity remain.' },
  'DEL-060': { status: 'PARTIAL', evidence: ['20_SEARCH/search-and-routing.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Ontology-backed Arabic search design and screen contract exist; implementation, relevance evaluation, and misuse testing remain.' },
  'DEL-061': { status: 'PARTIAL', evidence: ['20_SEARCH/search-and-routing.json','10_PATTERN_ONTOLOGY/patterns.json'], gap: 'Non-diagnostic pattern-result contract exists over 61 patterns; query mapping and human safety evaluation remain.' },
  'DEL-062': { status: 'PARTIAL', evidence: ['20_SEARCH/search-and-routing.json'], gap: 'A no-free-text non-diagnostic unknown-mode flow exists; implementation and clinical/cultural usability testing remain.' },
  'DEL-063': { status: 'PARTIAL', evidence: ['24_UI_SPECIFICATIONS/screen-contracts.json','04_TRACK_UNIVERSE/tracks.json'], gap: 'Track Explorer screen contract and data exist; implementation and user validation remain.' },
  'DEL-064': { status: 'PARTIAL', evidence: ['13_TRACK_100_DAY_PLANS/TRACK-HUMAN-001/outline.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'A complete audited 100-day roadmap and screen contract exist for إنسان متزن; implementation and human approval remain.' },
  'DEL-065': { status: 'PARTIAL', evidence: ['15_DATA_MODEL/day-schema.json','15_DATA_MODEL/day-presentation-contract.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Daily lesson data and screen contracts are complete for 100 draft days; production implementation and usability review remain.' },
  'DEL-066': { status: 'PARTIAL', evidence: ['11_EXERCISE_LIBRARY/exercises.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Practice data, dose rules, and screen contract exist; production implementation and safety testing remain.' },
  'DEL-067': { status: 'PARTIAL', evidence: ['13_JOURNAL_PROMPTS/prompts.json','21_PRIVACY/privacy-system.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Private prompt data, privacy architecture, and Journal screen contract exist; implementation and privacy audit remain.' },
  'DEL-068': { status: 'PARTIAL', evidence: ['16_PRODUCT_SYSTEMS/non-shaming-progress-system.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Non-shaming progress data and screen contract exist; implementation and comprehension/harm testing remain.' },
  'DEL-069': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/sources.json','07_CLAIM_LIBRARY/claims.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Claim-source-day data and Evidence screen contract exist; graph implementation and user testing remain.' },
  'DEL-070': { status: 'PARTIAL', evidence: ['06_SOURCE_LIBRARY/sources.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Source data and user-facing screen contract exist; production search, summaries, and review remain.' },
  'DEL-071': { status: 'PARTIAL', evidence: ['18_MYTH_LIBRARY/myths.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Sourced myth data and screen contract exist; broader coverage, implementation, and review remain.' },
  'DEL-072': { status: 'PARTIAL', evidence: ['22_SAFETY/professional-boundaries.md','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Help routing and screen contract exist; local resources, implementation, and operational verification remain.' },
  'DEL-074': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','04_TRACK_UNIVERSE/role-ontology.json'], gap: 'A substantive student-mode transformation contract exists; its researched 100-day tracks, Egyptian fieldwork, safeguarding review, and implementation remain.' },
  'DEL-075': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'A substantive parent/caregiver-mode contract and parenting foundation exist; 100-day tracks, child-development evidence, safeguarding review, and implementation remain.' },
  'DEL-076': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'A substantive teacher-mode contract and education foundation exist; 100-day tracks, Egyptian teacher research, protection review, and implementation remain.' },
  'DEL-077': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'A substantive employee-mode contract and workplace foundation exist; 100-day tracks, sector research, legal review, and implementation remain.' },
  'DEL-078': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'A substantive manager-mode contract exists with power and anti-retaliation rules; its 100-day track, paired worker research, legal review, and implementation remain.' },
  'DEL-079': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','09_SKILL_ONTOLOGY/domain-ontologies.json'], gap: 'A substantive family-mode contract and family ontology foundation exist; full family library, 100-day tracks, cultural/safeguarding review, and implementation remain.' },
  'DEL-080': { status: 'PARTIAL', evidence: ['17_MODES/mode-contracts.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-098.json'], gap: 'A substantive relationship-mode contract and advanced manual exist; a dedicated 100-day track, Egyptian relationship-safety review, and implementation remain.' },
  'DEL-081': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-015.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-029.json'], gap: 'Canonical digital-balance and AI/privacy days are mapped as a module; standalone UI and professional review remain.' },
  'DEL-082': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-011.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-012.json'], gap: 'Canonical sleep days are mapped as a module; it is not treatment and awaits review and implementation.' },
  'DEL-083': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-031.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-090.json'], gap: 'Canonical stress and safety days are mapped as a module; clinical review and implementation remain.' },
  'DEL-084': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-041.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-050.json'], gap: 'Canonical habit and setback days are mapped as a module; implementation and outcome testing remain.' },
  'DEL-085': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','12_COMMUNICATION_SCRIPTS/scripts.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-051.json'], gap: 'Canonical communication curriculum and bounded scripts are mapped; relationship safety review and implementation remain.' },
  'DEL-086': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-081.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-096.json'], gap: 'Canonical error, resilience, safety, and return days are mapped; clinical/cultural review and implementation remain.' },
  'DEL-087': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-071.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-072.json'], gap: 'Canonical money-behavior days are mapped; current Egyptian financial/legal review and implementation remain.' },
  'DEL-088': { status: 'PARTIAL', evidence: ['17_MODULES/module-catalog.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-029.json','14_DAILY_LESSONS/TRACK-HUMAN-001/day-097.json'], gap: 'Canonical AI-literacy and privacy days are mapped; technical implementation and privacy review remain.' },
  'DEL-089': { status: 'PARTIAL', evidence: ['21_PRIVACY/privacy-system.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Privacy architecture and settings screen contract exist; implementation and independent audit remain.' },
  'DEL-090': { status: 'PARTIAL', evidence: ['20_ACCESSIBILITY/accessibility-system.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Accessibility architecture and settings screen contract exist; implementation and disabled-user/AT testing remain.' },
  'DEL-091': { status: 'PARTIAL', evidence: ['23_EVALUATION/feedback-system.json','23_EVALUATION/negative-outcome-monitoring.json','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'Reporting schema, harm triage, and screen contract exist; secure implementation and staffed operations remain.' },
  'DEL-092': { status: 'PARTIAL', evidence: ['27_PUBLIC_DOCUMENTATION/research-methodology.md','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'A user-facing methodology draft and screen contract exist; editorial and professional review remain.' },
  'DEL-093': { status: 'PARTIAL', evidence: ['26_KNOWN_LIMITATIONS/known-limitations.md','24_UI_SPECIFICATIONS/screen-contracts.json'], gap: 'A substantive limitations and publication-gates page exists; it must remain current through implementation and review.' },
  'DEL-094': { status: 'PARTIAL', evidence: ['25_RED_TEAM/TRACK-HUMAN-001/full-track-review.json','25_RED_TEAM/TRACK-HUMAN-001/full-track-review.md','25_RED_TEAM/TRACK-HUMAN-001/expert-1-clinical-public-health.md','25_RED_TEAM/TRACK-HUMAN-001/expert-2-behavioral-curriculum.md','25_RED_TEAM/TRACK-HUMAN-001/expert-3-egyptian-society.md','25_RED_TEAM/TRACK-HUMAN-001/expert-4-product-accessibility.md'], gap: 'A complete internal 100-day four-lens red team exists with explicit external holds; independent attributable review and approvals remain.' },
  'DEL-099': { status: 'PARTIAL', evidence: ['05_ROLE_RESEARCH/TRACK-HUMAN-001/research-saturation-audit.md','06_SOURCE_LIBRARY/evidence-hierarchy.json','09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-day-evidence-and-counterevidence.json','25_RED_TEAM/TRACK-HUMAN-001/full-track-review.json'], gap: 'Research saturation, hierarchy, full day-level evidence/counterevidence, and internal red-team audits exist; independent research-quality review and update operations remain.' },
  'DEL-100': { status: 'PARTIAL', evidence: ['03_REQUIREMENTS/completion-audit.json','26_KNOWN_LIMITATIONS/known-limitations.md','28_FINAL_AUDIT/final-completeness-report.json'], gap: 'A reproducible current-state audit exists; external approvals, remaining role tracks, production implementation, and operational evidence prevent completion.' },
}));

for (const deliverable of audit.deliverables) {
  const update = updates.get(deliverable.id);
  if (update) Object.assign(deliverable, update);
}
audit.asOf = '2026-08-13';
audit.status = 'IN_PROGRESS_NOT_COMPLETE';
audit.auditStage = 'AFTER_TRACK_HUMAN_001_RESEARCHED_DRAFT';
await writeFile(auditPath, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');

const counts = Object.fromEntries([...new Set(audit.deliverables.map(({ status }) => status))].sort().map((status) => [status, audit.deliverables.filter((item) => item.status === status).length]));
const report = {
  schemaVersion: '1.0.0',
  asOf: audit.asOf,
  status: 'NOT_PUBLICATION_READY',
  counts,
  verifiedAssets: {
    humanTrackDays: 100,
    contentFields: 4400,
    behavioralExperiments: 100,
    realWorldMissions: 100,
    journalPrompts: 300,
    sources: 91,
    claims: 60,
    capabilities: 44,
    patterns: 61,
  },
  externalBlocks: audit.deliverables.filter(({ status }) => status === 'BLOCKED_EXTERNAL').map(({ id, name, gap }) => ({ id, name, gap })),
  missingDeliverables: audit.deliverables.filter(({ status }) => status === 'MISSING').map(({ id, name, gap }) => ({ id, name, gap })),
  publicationDecision: 'HOLD_PENDING_PROFESSIONAL_USER_PRIVACY_ACCESSIBILITY_RESOURCE_AND_IMPLEMENTATION_GATES',
  truthStatement: 'A complete 100-day researched draft exists for the first-priority إنسان متزن track. The wider multi-track product and production implementation are not complete, and no external approval is claimed.',
};
const outDir = join(root, '28_FINAL_AUDIT');
await import('node:fs/promises').then(({ mkdir }) => mkdir(outDir, { recursive: true }));
await writeFile(join(outDir, 'final-completeness-report.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
