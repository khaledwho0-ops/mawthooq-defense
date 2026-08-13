# Motazen 2.0 privacy architecture

## Status and release gate

This is a design specification, not proof of implementation or legal compliance. Privacy/legal, security, accessibility, and Egyptian user review are pending. Journal, reflection, free-text AI processing, and analytics must remain disabled in production until the controls below are implemented and independently verified.

## Core decisions

1. A person can read, practice, skip, seek help, and complete any day without an account and without saving text.
2. The default is **no storage**. Local saving is a separate opt-in; cloud synchronization and AI processing are separate later opt-ins, never bundled.
3. No advertising, data brokerage, sale, cross-context behavioral profiling, social ranking, streak pressure, or inference of diagnosis, risk score, personality, morality, or “balance score.”
4. Data minimization takes precedence over personalization. If a feature can work without collecting content, it must.
5. Safety access never depends on consent to storage, analytics, AI, account creation, payment, or lesson completion.
6. The product must not promise confidentiality on a shared, monitored, seized, backed-up, employer-managed, or family-controlled device.

## Data zones

### Zone 0 — transient, no storage

Lesson text, unsaved mode choice, temporary form state, and an optional unsaved reflection exist only in active memory and are discarded on close, refresh, explicit clear, inactivity timeout, or crash recovery boundary. No service worker, analytics event, error log, clipboard action, URL, referrer, screenshot, or browser history entry may contain reflection text.

### Zone 1 — local opt-in

The user may save progress state, preferences, or journal entries locally after a plain-language, purpose-specific choice. Each category has its own toggle. Local records use platform-appropriate encryption where available, carry creation and retention metadata, and expose immediate view, export, and delete controls. The interface warns that device owners, backups, malware, workplace administration, or people with device access may still see data.

### Zone 2 — cloud synchronization, separate opt-in

Cloud sync is off by default and cannot be required for core learning. It requires authenticated consent that names data categories, processor, storage region where knowable, retention, deletion delay, breach contact, and cross-border implications. End-to-end encryption must be evaluated; if the service can read journal content, the UI must say so plainly. Sync conflict must never silently overwrite a local entry.

### Zone 3 — AI processing, separate per-use opt-in

No journal or reflection is sent to an AI system by default. A per-use screen shows exactly what text will leave the device, provider/processor, purpose, retention posture, whether humans may review it, and a safer no-send alternative. The user can redact or send selected text only. AI output is not diagnosis, crisis detection, professional advice, or a substitute for a human. The raw prompt and response are not repurposed for advertising, model training, or unrelated product development without a new lawful basis and explicit informed choice.

## Data categories and prohibitions

- **Content delivery:** cache only versioned public lesson assets; never mix journal content into the content cache.
- **Progress:** store day IDs and voluntary state only; no hidden elapsed-time, keystroke, scroll-depth, or failure profile.
- **Preferences:** language, text size, contrast, audio, motion, and privacy mode; do not infer disability.
- **Journal/reflection:** free text is sensitive by default; exclude from telemetry, search indexing, crash reports, URLs, push notifications, and support tickets unless the user deliberately exports it.
- **Help access:** do not log the content of a help decision. Minimal aggregate availability telemetry requires a separate privacy review and must not identify a person or lesson text.
- **Safety:** no automated risk score or covert monitoring. Immediate danger wording routes to humans without pretending the product detected or managed a crisis.
- **Research:** no participation by default. Research requires separate consent, protocol, withdrawal route, minimization, de-identification limits, and ethics/governance review appropriate to the study.

## Consent model

Consent is granular, reversible, and as easy to withdraw as to grant. Refusal never blocks learning or help. Every consent screen states purpose, data, recipient, retention, risk, alternative, and withdrawal effect. Silence, continued browsing, pre-checked boxes, dark patterns, or completion pressure are not consent. A material purpose or processor change requires a new decision; it cannot be buried in terms.

## Retention, export, and deletion

- Transient content: zero intentional retention after the active session boundary.
- Local preferences/progress: until user deletion or a user-chosen reset; expose category-level reset.
- Local journal: user chooses no save, session-only, or retained local entry; default no save.
- Cloud data: each category has a visible retention schedule and last-sync state; deletion propagates to active replicas and receives a completion receipt, with separately disclosed backup expiry.
- Export: human-readable UTF-8 JSON plus accessible text; never require cloud upload to export local data.
- Delete: immediate local deletion, account/category deletion where applicable, clear description of backup and legal-hold exceptions, and no “soft delete” presented as erasure.

## Security and operational controls

Threat modeling must cover shared devices, domestic or workplace surveillance, lost devices, malicious browser extensions, cross-site scripting, logs, backups, support access, insiders, credential stuffing, sync conflict, export leakage, and notification previews. Production requires least privilege, key management, dependency review, secure update path, audit logging that excludes content, incident response, breach communication, access review, restore testing, and deletion testing.

## Shared or monitored device mode

“No-save mode” is available without explanation. It disables local history, journal saving, notification previews, recent-item labels, and sensitive filenames; provides a one-action clear; avoids suspicious cover claims; and warns honestly that the browser, operating system, network, device owner, or monitoring software may still retain traces. The product never instructs a user to take evasive action that could increase danger.

## Analytics boundary

No analytics SDK is permitted until a field-level event inventory is approved. Analytics must be off for free text, safety/help interaction content, journal, search terms that may reveal distress, and unique behavioral fingerprints. Any allowed measurement uses coarse, purpose-limited events, short retention, access control, published definitions, and opt-out where legally and ethically required. Completion, drop-off, or low use is a product signal, not a user risk or worth score.

## Implementation acceptance criteria

- Network inspection proves no data leaves the device in no-save mode.
- Automated tests prove free text cannot enter logs, URLs, caches, analytics, or crash payloads.
- Export and category deletion work offline for local data.
- Cloud deletion and backup-expiry claims are tested and evidenced.
- Consent withdrawal stops future processing without blocking content or help.
- AI send requires a fresh per-use action and preview of the exact payload.
- Keyboard, screen-reader, low-literacy, and shared-device users can find no-save, export, delete, stop, skip, and help.
- Incident exercises cover exposure of journal data and stale or compromised help resources.

Until these criteria and human reviews pass, the design remains `HOLD`.
