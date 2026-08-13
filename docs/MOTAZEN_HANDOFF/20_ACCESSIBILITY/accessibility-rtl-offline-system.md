# Arabic RTL, accessibility, low-bandwidth, and offline system

## Status

Draft system specification. It is not an accessibility conformance claim and has not been implemented or tested with assistive-technology, low-literacy, disabled, rural, low-bandwidth, or shared-device users. WCAG-level decisions must be verified against the applicable current standard and human testing before release.

## One content model, multiple access routes

Every lesson uses the same source record and safety meaning. Access routes may change presentation but cannot remove contraindications, help thresholds, evidence limits, or the right to skip.

- **Structured text:** semantic Arabic headings, short paragraphs, lists, and expandable detail.
- **Supported reading:** optional line highlighting, plain explanation, term definitions, examples, and one-step-at-a-time view.
- **Audio:** human-reviewed Arabic narration with synchronized text, speed controls, pause/resume, transcript, and no autoplay.
- **Icons:** icons support text but never replace safety, help, consent, or mode labels; every icon has an accessible name and culturally tested meaning.
- **No-storage route:** all routes work without saving progress, answers, audio position, or journal content.
- **Print/export route:** accessible, privacy-scoped export omits user content unless deliberately selected.

## Arabic and RTL rules

The document root uses Arabic language and RTL direction. Components use logical properties rather than hard-coded left/right. Numbers, citations, source IDs, URLs, dates, Latin abbreviations, equations, and mixed-direction strings are isolated with Unicode-safe direction handling; no manual character reversal. Focus order follows semantic reading order, not visual CSS order. Icons indicating next/back are mirrored only when their meaning is directional; media controls, clocks, checkmarks, and brand marks are not mirrored automatically.

Arabic shaping, diacritics, ligatures, punctuation, parentheses, truncation, line breaking, text selection, copy/paste, search, and screen-reader pronunciation are tested on supported browsers and operating systems. User text may contain Arabic, Egyptian Arabic, English, Arabizi, emoji, and mixed numerals without corrupting storage or display.

## Navigation and progressive disclosure

The predictable order is: skip link; page title and objective; stop/skip/help/privacy/mode controls; core explanation; one primary practice; completion/failure response; optional examples, alternatives, reflection, evidence, and tomorrow content. Headings form a valid hierarchy. Expanders are real buttons with name, state, and controlled-region relationship; opening does not move focus unexpectedly. Closing returns focus predictably. The browser back action never deletes unsaved text without warning, and the person can continue without writing.

## Keyboard, switch, pointer, and focus

All functions work with keyboard and switch access, with visible focus, no keyboard traps, logical order, generous targets, and no drag-only interaction. Time limits are absent by default; optional practice timers can be extended, paused, or disabled and never control completion. Modal dialogs are minimized; when necessary they name themselves, contain focus, expose escape/close, and restore focus.

## Visual and cognitive access

Text reflows at zoom and large text without horizontal reading scroll. Contrast, focus indicators, link distinction, error states, charts, and disabled states require measured verification. Color never carries meaning alone. Motion is optional and respects reduced-motion preference; there is no parallax, flashing, confetti, streak animation, countdown pressure, or auto-advancing content. Plain-language summaries do not replace evidence limits. One action is emphasized at a time, and minimum mode is not visually inferior.

## Screen readers and speech

Landmarks, headings, lists, buttons, links, form labels, descriptions, errors, status updates, and progress are semantic. Live regions are rare and polite; safety messages are not repeatedly announced. Source IDs receive human-readable titles. Tables have headers and a linear alternative. Audio controls expose state and duration. Speech-input users can activate controls by visible label. No control relies on hover, icon shape, or spatial direction alone.

## Low literacy and supported-reading rules

The default visible layer uses one concept, one example, and one primary action. Difficult terms link to a terminology card with MSA, optional Egyptian explanation, non-stigmatizing alternatives, and “not the same as” boundaries. A listen option and transcript are adjacent. Questions can be answered by selecting, speaking locally without saving, using an icon-plus-text choice, or not answering. Reading level is tested with real users; automated readability is only a flag.

## Low-bandwidth budgets

Core text and safety/help content must work without images, custom fonts, audio, analytics, or JavaScript beyond the minimum enhancement. The first lesson view prioritizes semantic HTML and a small critical stylesheet. Media is opt-in, compressed, size-labeled, cancellable, and never preloaded on metered mode. No decorative video or image blocks completion. Font fallbacks preserve Arabic shaping. Build budgets and field tests define the final byte thresholds; no unmeasured “lightweight” claim is allowed.

## Offline content behavior

- Cache versioned public lesson content, schema, terminology, and the last verified help-resource metadata separately from private data.
- Show offline, content-version, and help-freshness status in text—not color alone.
- A cached lesson remains readable and completable without storage; unsaved answers remain in memory only.
- Evidence and source links unavailable offline display title, citation, and “open when connected,” not a blank or false error.
- Updates are atomic: never mix schema and content versions. Failed update keeps the last complete compatible bundle.
- The user can inspect storage size and delete public cache separately from local personal data.

## Stale help and urgent safety offline

Help access never waits for synchronization. Generic immediate-safety guidance remains bundled and clearly says the product cannot confirm current service availability. Named local services are displayed only when owner-verified and unexpired. Offline or expired entries are visibly marked `UNVERIFIED / DO NOT RELY ON AS SOLE ROUTE` or hidden according to the clinical policy; a stale number is never silently shown as current. The route encourages a nearby trusted human or locally available emergency/service channel without inventing availability.

## Personal data and sync conflict

No-save is the default offline mode. Local opt-in data is separated from the public cache. Cloud sync remains off until explicit consent and connection. On conflict, neither copy is overwritten: show accessible timestamps, devices if safely knowable, a plain comparison, keep-both/export/delete choices, and a no-sync exit. Journal content is never merged by an algorithm. Deletion queues are visible and retry safely; the UI does not claim cloud deletion while offline.

## Failure and recovery

Every error states what happened, what was preserved, what was not sent, and safe next actions. A failed save never marks content saved. A failed delete never claims deletion. A failed media download does not block text. A broken component exposes a plain-text fallback. Crash recovery does not persist sensitive free text unless the user had opted into that storage category.

## Verification matrix

Required environments include current and lower-capability Android devices, supported iOS, desktop browsers, keyboard-only, common Arabic-capable screen readers, large text/zoom, high contrast, reduced motion, slow and intermittent networks, offline restart, shared device/no-save, mixed-direction input, and interrupted update/sync/delete. Tests include disabled users and people with varied literacy; automated checks supplement but do not replace them.

Release remains `HOLD` until implementation, current-standard review, security/privacy review, professional safety review, and human usability evidence are complete.
