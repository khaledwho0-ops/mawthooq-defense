# Pilot revision log

## Gate

The twenty draft lessons exist and pass automated structural/evidence checks. Four AI-assisted internal critical reviews are complete. This does not satisfy independent human professional review. Publication and Days 21–100 finalization remain held until internal actions are resolved and human-only decisions are documented.

## Revision cycle 1 — opened 2026-08-13

Planned internal actions, in order:

1. Add high-risk-day safety invariants to automated validation.
2. Add a day presentation contract with one primary practice, progressive disclosure, stop/skip/help precedence, and optional tomorrow cues.
3. Draft privacy and journal architecture, including AI-processing controls.
4. Draft offline, low-bandwidth, accessibility, Arabic RTL, and no-storage routes.
5. Create the Arabic terminology and sensitive-language testing registry.
6. Re-run all pilot checks and update each finding to `RESOLVED_INTERNAL` only when direct evidence exists.

### Completed in cycle 1

- Added `15_DATA_MODEL/day-presentation-contract.json` and automated validation.
- Assigned exactly one primary practice to every pilot day without altering the 44-field content contract.
- Grouped all 44 fields into progressive-disclosure layers with safety first.
- Made stop, skip, human help, privacy, and mode switching available before and during practice.
- Made help independent of completion, storage, AI, and gamification.
- Made tomorrow cues disabled by default, non-notifying, and excluded from streak/progress logic.
- Made unknown cause valid and causal inference prohibited for physical-foundation presentation.

Closed internally: `PILOT-CLIN-003`, `PILOT-CLIN-004`, `PILOT-CURR-001`, `PILOT-CURR-003`, `PILOT-CURR-004`, `PILOT-PROD-004`, and `PILOT-PROD-005`. Their final wording and usability still require the human roles named in the action register.

- Added `21_PRIVACY/privacy-architecture.md` and a machine-readable data-control registry covering no-save completion, local/cloud separation, granular consent, AI per-use payload preview, no advertising or diagnosis, retention, export, deletion, shared devices, analytics boundaries, security, and acceptance tests.

Closed internally: `PILOT-PROD-001`. Implementation, privacy/legal review, security testing, and user verification remain required.

- Added `20_ACCESSIBILITY/accessibility-rtl-offline-system.md` and machine-readable invariants covering semantic RTL, mixed-direction strings, progressive disclosure, keyboard/switch/screen-reader access, voice and transcript, icon-plus-text, supported reading, low bandwidth, atomic offline updates, stale help, cache separation, sync conflicts, and failure recovery.

Closed internally: `PILOT-EGY-004`, `PILOT-PROD-002`, and `PILOT-PROD-003`. Accessibility conformance, disabled and low-literacy user testing, field-network testing, security, and privacy review remain required.

- Added `19_ARABIC/terminology-registry.json` with twenty sensitive concepts, formal Arabic, Egyptian explanations, exclusions, stigmatizing wording to avoid, and explicit pending states.
- Added a participant test packet covering explain-back, misinterpretation, power, danger, diagnosis, health, low literacy, assistive technology, and shared-device risk.

This supports but does not close `PILOT-EGY-001`, which correctly remains `HOLD_EXTERNAL` until real language review and participant testing occur.

External holds are not resolvable by AI drafting: professional clinical/public-health review, participant comprehension and language testing, Egyptian power/safety scenario review, service-owner verification, privacy/legal review, accessibility audit, and disabled/low-literacy user testing remain `HOLD_EXTERNAL`.
