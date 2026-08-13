# Cross-track knowledge reuse and sequencing

Status: design complete; implementation and human curriculum review pending.

Reusable knowledge is a versioned concept, claim, source, safety boundary, or practice family. A daily lesson is never copied wholesale into another role track. Transformation must name the target role, power position, life stage, Egyptian context, prerequisites, inaccessible assumptions, and new harms.

## Sequencing gates

1. Safety and non-clinical boundaries precede optimization.
2. Definitions precede application; application precedes conflict or high-power transfer.
3. A prerequisite must refer only to an earlier day in the same track or to a stable shared foundation explicitly surfaced to the learner.
4. Review uses retrieval plus a new case, not duplicate prose.
5. High-risk transfer requires a role-specific power and access review.
6. A missing prerequisite yields an optional bridge, never a forced restart.

## Reuse record

Each reuse record requires `sourceObjectId`, `sourceVersion`, `targetTrackId`, `targetDayId`, `retainedClaims`, `changedContext`, `powerChanges`, `languageChanges`, `safetyChanges`, `newEvidence`, `reviewers`, and `decision`. Verbatim reuse is permitted only for stable safety language and source metadata, with a reason. Examples, missions, relationship practice, and help routes must be regenerated and reviewed for the target role.

## Change impact

A source correction traverses source → claim → capability → day → track → display copy. Safety changes block affected content until reviewed. Cosmetic language changes do not silently expand a claim. Retired material remains auditable and is not shown to new users.

## Acceptance checks

- No target lesson can cite a capability without satisfying its earlier prerequisite.
- No role adaptation can preserve an unsafe power assumption.
- No cross-track copy may retain identifiable examples or user data.
- Review days must add a new case and spaced retrieval.
- Reuse decisions remain `PENDING` until attributable human review.
