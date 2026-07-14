# موثوق — User Onboarding: Zero → Full
### How a user gets an invite code and goes from landing on the site to using everything.

Live site: **https://egy2.vercel.app** · Access model: **invitation-only** (a valid invite code is required to register).

---

## PART A — How users GET an invite code

موثوق is invitation-only. Right now codes are **distributed by the team** (no self-service request form yet).
There are **7 live codes** baked into the site (case-insensitive, unlimited registrations each):

```
MW26-GUARDIAN   MW26-MAAT   MW26-HORUS   MW26-THOTH   MW26-PAPYRUS   MW26-LAPIS   MW26-FALCON
```

**How to hand them out (pick any):**
- Share a code over WhatsApp / email / the defense handout or slide.
- Put one on a **printed card or a QR** at the graduation booth (QR → egy2.vercel.app, code written beneath).
- Give each teammate/examiner a different code so you can tell later who came in through which.

**To rotate or add codes** (no redeploy of logic needed, just a config change):
- Quick: edit `DEFAULT_INVITE_CODES` in `src/lib/auth.ts` and redeploy.
- Cleaner (no source edit): set `EAL_INVITE_CODES` in the Vercel project → Settings → Environment Variables
  (comma-separated, e.g. `EAL_INVITE_CODES=DEFENSE-A,DEFENSE-B`), then redeploy. Env codes are **added** to the
  7 defaults.
- The **admin code** (`ADMIN_REGISTRATION_CODE` env) also works as an invite AND makes that account an admin.

> Optional future upgrade (not built): a "Request access" form where a user submits their email and the team
> emails them a code (the Resend email integration already exists in `src/lib/auth.ts`).

---

## PART B — The user journey, step by step (zero → full)

1. **Land.** User opens **https://egy2.vercel.app**. The hero ("Where every claim is weighed against the
   truth") loads; the whole site is themeable (21 palettes via the theme switcher).
2. **Get a code.** From the team (Part A). Without one they cannot register — that's intended.
3. **Register.** Click **Login** (top-right) → switch to **Register/Create account** →
   fill **name · email · password · Invite code (required)**. The screen tells them: *"موثوق is
   invitation-only — enter the invite code the موثوق team gave you."* Submit.
   - Wrong/empty code → clear message: *"A valid invite code is required to register. موثوق is invitation-only."*
   - The admin code also elevates the account to **admin** (access to `/admin`).
4. **You're in.** A JWT session cookie is set (24h). The navbar shows the account + **My Progress**.
5. **Start using it.** Two front doors:
   - **Start verifying** → the ClaimDebunker / Firewall engines (paste a claim, get a sourced verdict).
   - **The Mind Gym** (`/mind-gym`) → the **Cognition Curriculum** (the core training: spaced retrieval, 8
     mechanics). Pick a day → answer the items → it records your day, accuracy, and calibration.
   - Also: Cognition, Firewall, Religion, Arsenal, The Descent, Scorecard from the navbar.
6. **See progress.** Open **My Progress / `/dashboard`**. It now shows:
   - The 3 awareness engines (DeepReal / Mental Health / Religion Hub) — X/14 each.
   - **The Mind Gym — Cognition** card: **days completed · accuracy · calibration** (pulled from the cognition
     curriculum you actually did). *(This was just added — cognition/mind-gym now count on the dashboard.)*
   - Streak, time, and the report/export center.
7. **Come back.** Progress persists in the browser. (Note: progress is currently **per-browser**, not yet
   synced to the account across devices — see the caveat below.)

---

## PART C — What counts on the dashboard (so nobody is surprised by a zero)

- **Counts now:** the 3 MVP tracks (DeepReal / Mental Health / Religion Hub) AND the **Cognition Curriculum**
  (the Mind Gym core) — the latter shows days/accuracy/calibration.
- **Does NOT roll into the `/42` MVP number:** cognition is shown as its own card (it has its own scale), so
  the `/42` bar stays about the 3 engines only. That's by design — cognition has ~140 days, it would swamp a /42.
- **Test it:** do one **DeepReal** exercise → dashboard `/42` ticks up. Do one **Cognition** day at
  `/mind-gym` → the Mind Gym card's "days completed / accuracy" ticks up.

---

## Known caveat (small, optional fix)
Progress is saved in the **browser's localStorage**, not to the user's account server-side, so it doesn't
follow a login across devices/browsers. The per-user binding code exists (`src/lib/auth/user-progress-binding.ts`)
but isn't wired into the auth flow yet. If cross-device progress matters for the defense, that's a ~small,
contained follow-up (call `bindUserProgress(userId)` on login and `saveCurrentProgress` on
completion/logout).

*(Everything above reflects the live build as of 2026-07-11.)*
