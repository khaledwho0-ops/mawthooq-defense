# Clinical and public-health critical review — pilot Days 001–020

**Reviewer type:** internal AI-assisted critical lens, not a clinician and not professional approval.  
**Decision:** `REVISE_INTERNAL / HOLD_PUBLICATION`.

## What was directly checked

All twenty lesson records were checked for scope, diagnostic wording, medical claims, help thresholds, contraindication handling, stop rules, and evidence calibration. Days 12–14 received heightened review because they address sleep and movement. Day 15 was checked for the ADHD boundary. Each lesson keeps `professionalReview: PENDING`.

## Strengths observed

- Every day distinguishes education from diagnosis or treatment and includes an explicit help threshold.
- Sleep duration is presented as population guidance rather than an individual quota; sleep hygiene is not presented as insomnia treatment.
- Movement allows rest and names pain, dizziness, pregnancy, illness, disability, heat, unsafe space, and physical work as adaptation or stop contexts.
- Attention content refuses self-diagnosis from ordinary distraction and points persistent cross-setting impairment toward assessment.
- Tracking is optional and repeatedly stopped for rumination, shame, compulsion, privacy risk, or worsening sleep.

## Blocking findings

1. `PILOT-CLIN-001 — CRITICAL`: urgent-help wording is generic because no Egyptian resource has owner confirmation, access testing, hours, cost, geography, and expiry verification. Generic “local urgent help” must remain; production must not insert an unverified number.
2. `PILOT-CLIN-002 — HIGH`: Days 12–14 need attributable review by an Egyptian clinician or public-health professional before publication, including the sleep red flags, movement stop language, pregnancy/chronic-illness wording, and feasibility of escalation.
3. `PILOT-CLIN-003 — HIGH`: the product UI must make the stop/skip/help route available before and during a practice, not hide it after long educational content.
4. `PILOT-CLIN-004 — MEDIUM`: Day 11’s energy framing is appropriately non-moralizing but may still invite self-attribution across medical, nutritional, sleep, mood, medication, and workload causes. Preserve “unknown cause” prominently and test whether users read the examples as medical advice.

## Required internal revisions

- Add a machine-checkable rule that every `HIGH` or `CRITICAL` day has applicable safety and help objects and no published state.
- Put “unknown / do not infer cause” into the structured safety checklist for physical-foundation days.
- Keep owner verification of local resources as an external release blocker.

## Human review questions

- Are sleep and movement red flags accurate, proportionate, and understandable in Egyptian Arabic?
- Does the generic urgent-help route create enough immediate direction without inventing service availability?
- Could any example delay medical assessment or encourage abrupt caffeine, medication, activity, or sleep changes?

No publication approval is granted.
