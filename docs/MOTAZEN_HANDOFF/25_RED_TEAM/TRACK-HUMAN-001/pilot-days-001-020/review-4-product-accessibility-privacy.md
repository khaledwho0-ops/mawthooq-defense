# Product, accessibility, privacy, and safety-operations review — pilot Days 001–020

**Reviewer type:** internal AI-assisted critical lens, not an accessibility conformance audit, privacy counsel opinion, or product approval.  
**Decision:** `REVISE_INTERNAL / IMPLEMENTATION_HOLD`.

## What was directly checked

The 44-field records, three modes, nested applicability objects, journal prompts, environment changes, safety/help text, and local product-preservation baseline were reviewed. This review concerns the content model; the existing `motazen/` prototype was deliberately not rewritten during the foundation stage.

## Strengths observed

- Safety, professional-help, relationship, and deep-dive fields remain explicit even when not applicable.
- Lessons repeatedly offer no-storage and low-privacy alternatives and prohibit covert monitoring.
- Full, standard, and minimum modes support variable energy. Examples include screen readers, shared devices, disability, and essential notifications.
- Automated tests prove exact schema, registered references, distinct core content, truthful pilot status, and preservation of existing product files.

## Blocking findings

1. `PILOT-PROD-001 — CRITICAL`: no production privacy architecture yet governs local/cloud journal storage, encryption, retention, export, deletion, consent, AI processing, analytics, or incident response. Journal-like fields must not ship before this exists.
2. `PILOT-PROD-002 — HIGH`: forty-four fields cannot be rendered as one long page. A keyboard- and screen-reader-safe progressive disclosure model, focus order, headings, skip links, text resizing, reduced motion, contrast, and error recovery require specification and testing.
3. `PILOT-PROD-003 — HIGH`: offline and low-bandwidth behavior is undefined, especially for stale help information, partially cached lessons, saved reflections, sync conflicts, and safe deletion.
4. `PILOT-PROD-004 — HIGH`: the safety route must be reachable without completing or saving a lesson and must never be gamified, rate-limited behind progress, or dependent on AI conversation.
5. `PILOT-PROD-005 — MEDIUM`: the schema lacks a single explicit `primaryPracticeField` pointer, leaving the UI at risk of presenting multiple activities as mandatory.

## Required internal revisions

- Add a day-presentation schema with a primary practice pointer and progressive-disclosure groups.
- Draft privacy, offline, low-bandwidth, Arabic RTL, accessibility, and safety-route specifications before editing production screens.
- Add automated checks that no lesson storage or analytics is implied without an explicit lawful purpose, consent boundary, retention rule, and deletion route.

## Human review questions

- Can keyboard, screen-reader, low-vision, cognitive-access, and low-literacy users reach objective, primary practice, stop, skip, and help in a predictable order?
- What data, if any, is necessary to save locally, and how can the user complete a day without saving it?
- What happens when the device is offline and a help resource is stale or unverified?

No accessibility, privacy, product, or implementation approval is granted.
