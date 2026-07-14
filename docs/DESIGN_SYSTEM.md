# EAL DESIGN SYSTEM — the complete visual language
### System-design types · every colour variation · typography · textures · background layers · animations

All values below are **extracted from the actual source files** (not invented — same One Law that governs
content governs this doc). **THREE DISTINCT visual languages** live in the EAL family — each strong in its
own right, deliberately NOT copy-paste of each other. Do not mix them:

- **موثوق (Mawthooq)** = "**قاعة الحق · The Hall of Truth**" — **dark, ornate, GOLD**, a winged-sun guardian,
  **21 themeable palettes** + particles. The dramatic *verification hall*. Cinzel + Reem Kufi.
- **مستعد (Mostaed)** = "**Compass / Readiness**" — **dark, urgent, GREEN/TEAL**, a rotating compass, a
  severity spine (L1 teal → L5 red). The *emergency* surface. System + Noto fonts.
- **متزن (Motazen)** = "**النَّفَس والورق · Breath & Paper**" — **LIGHT, calm, PAPER + deep SAGE**, a
  breathing orb, italic-serif quotes, paper grain. The *reflective book*. IBM Plex Sans Arabic + Plex Serif.

**The distinctness matrix (so no two feel the same):**
| | موثوق | مستعد | متزن |
|---|---|---|---|
| Weight | dark, ornate | dark, urgent | **light, calm** |
| Accent | gold `#E8B23A` | emergency-teal `#37c9a8` | **deep sage `#2F7D6B`** |
| Motif | winged-sun guardian | rotating compass | **breathing orb / wave** |
| Texture | papyrus noise | radial vignette | **paper grain** |
| Motion | theme cross-fade | pulse/spin | **breath-paced (10s)** |
| Type | Cinzel + Reem Kufi | system + Noto | **IBM Plex Sans Arabic + Serif** |
| Feel | a truth *hall* | an *emergency* | a trustworthy *book* |

Sources of truth: موثوق `…\src\components\welcome\identity.ts` + `theme-provider.tsx` + `globals.css`;
مستعد `08_NEXT_PROJECT_MOSTAED\app\index.html`; **متزن `MOTAZEN\index.html`** (`<style>` block).

**THE CARDINAL UI RULE:** every surface is driven by CSS tokens, never hardcoded colours. In موثوق the
token names are **`--bg-*` / `--text-*` / `--border-*` / `--accent-*`** (NOT `--bg` / `--fg` / `--accent` —
using the wrong names silently renders unstyled). Every new/edited page MUST support all themes via tokens
and be verified on one light + one dark theme.

═══════════════════════════════════════════════════════════════════════════════════════════════════════
# PART 1 — مستعد (the app the new agent works in)
═══════════════════════════════════════════════════════════════════════════════════════════════════════

## 1.1 System-design type
Single-file static app, **RTL** (`<html dir="rtl">`), mobile-first, dark-default with an automatic light
mode via `prefers-color-scheme`. Identity motif = a **compass** (readiness/orientation), not the Hall gold.
Layout tokens: `--content max-width 1200px` (`.wrap`), fluid padding `clamp(14px,4vw,36px)`.

## 1.2 Colour variations (exact tokens, dark = default)
| Token | Dark (default) | Light (`prefers-color-scheme: light`) | Role |
|---|---|---|---|
| `--ink` | `#0d1411` | `#f3f1ea` | page base |
| `--ink2` | `#101b16` | `#efece2` | deep surface / card bottom |
| `--surface` | `#16221c` | `#fbfaf5` | raised surface |
| `--surface2` | `#1c2b24` | `#f4f1e8` | raised surface 2 |
| `--line` | `rgba(160,200,180,.16)` | `rgba(30,60,45,.14)` | hairline borders |
| `--text` | `#EAF1EC` | `#16221c` | primary text |
| `--muted` | `#9EB2A7` | `#5a6b61` | secondary text |
| `--dim` | `#75897e` | `#7d8e83` | tertiary/labels |
| `--safe` | `#2FB39A` | (same) | brand teal |
| `--safe-2` | `#37c9a8` | (same) | brand teal bright (links, CTAs) |
| `--gold` | `#C9A24B` | (same) | eyebrow/accent gold |
| `--sand` | `#d9cbb0` | (same) | warm highlight text |
| `--danger` | `#E0544E` | (same) | danger / "don't" |
| `--shadow` | `0 24px 60px -30px rgba(0,0,0,.75)` | `0 24px 55px -32px rgba(30,50,40,.4)` | card elevation |

### Severity scale (the level-1→5 spine — used on card left-borders, badges, filters)
`--l1 #2CA58D` (teal) · `--l2 #4BA36A` (green) · `--l3 #E0A83E` (amber) · `--l4 #E07B39` (orange) ·
`--l5 #E0544E` (red). A card's accent = `--lv` set to its level colour; badges use
`color-mix(in srgb, var(--lv) 22%, transparent)`; the L5 filter chip uses a gradient `#ef6b66→--l5`.

## 1.3 Typography
- **Family:** `'Segoe UI', system-ui, 'Noto Naskh Arabic', 'Tahoma', sans-serif` · `line-height:1.7` ·
  `-webkit-font-smoothing:antialiased`.
- **Numbers / hotlines:** `ui-monospace, Consolas, monospace` with `direction:ltr` (so ١٢٣ dials render LTR).
- **Scale (fluid):** h1 `clamp(2.6rem,9vw,5rem)` weight 900 · h2 `clamp(1.6rem,4.6vw,2.5rem)` w800 ·
  card h3 `1.18rem` w800 · body ~`1rem`/`.92rem` · eyebrow `.72rem` `letter-spacing:.24em` uppercase gold ·
  group label `.74rem` `letter-spacing:.16em` uppercase gold.
- Gradient text: h1 & brand use `linear-gradient(180deg,#eafff8,var(--safe-2) 50%,#1c7d6c)` clipped to text.

## 1.4 Textures & background layers
- **Body base layer:** `radial-gradient(130% 70% at 50% -8%, #14231c, var(--ink) 60%)` (a green vignette
  glowing from top-centre); light mode swaps to `#e7ece3→--ink`.
- **Cards / drill / mode-b:** `linear-gradient(180deg, var(--surface), var(--ink2))` — subtle top-lit panel.
- **Glass header:** `backdrop-filter: blur(12px)` + `background: color-mix(in srgb, var(--ink) 80%, transparent)`.
- **Accent surfaces:** everywhere via `color-mix(in srgb, var(--x) 12–22%, transparent)` (danger flags,
  safe icon tiles, gold "soon" pills) — translucent tints, never flat fills.
- **Modal scrim:** `rgba(4,10,8,.72)` + `backdrop-filter: blur(4px)`.
- **Left accent rails:** cards & sheets use `border-inline-start: 4–5px solid var(--lv)` (severity colour).

## 1.5 Animations (all respect `prefers-reduced-motion`)
| Name | Where | Definition |
|---|---|---|
| `spin` | hero compass SVG | `@keyframes spin{to{transform:rotate(360deg)}}` · `40s linear infinite` + teal drop-shadow glow |
| `pulse` | live "لو حصل دلوقتي" dot | `@keyframes pulse{50%{opacity:.4}}` · `1.4s infinite` + danger glow |
| row reveal | drill do/don't lines | `opacity:0;translateY(6px)` → `.show{opacity:1;transform:none}` `transition:.5s` |
| card hover | grid cards | `transform:translateY(-3px)` + border tightens to `color-mix(--lv 60%)` + `--shadow`, `transition:.18s` |
| chip/cta hover | filters, CTA | `filter:brightness(1.06)`, border→`--safe`, `transition:.15s` |
| `@media (prefers-reduced-motion:reduce)` | compass | `animation:none` — always provide this fallback |

## 1.6 Component vocabulary (class → purpose)
`header.bar` glass nav · `.hero` + `.compass` (rotating SVG) · `.drill` (live do/don't demo card,
danger-tinted header, monospace tag) · `.cta` gradient button · `.ribbon .chip` stat pills · `.filters
.fchip` (pill toggles, `.on` = teal gradient, `.lv` = severity colour) · `.grid .card` (auto-fill
`minmax(290px,1fr)`, left severity rail, `.lv-badge`, `.dom-badge`) · `.ov`/`.sheet` detail modal
(sticky head, `.x` close, `.grp` section labels, `.fld` fields, `.two` two-col, `.call` hotline rows) ·
**`.cite`** provenance marker — `.cite a` = verified (solid teal box, links to source) vs **`.cite.unv`** =
unverified (dashed amber box, ⚠, `cursor:help`) · `.src` source-card · `.modeb .day` streak tracker
(`.done` teal, `.today` gradient).

═══════════════════════════════════════════════════════════════════════════════════════════════════════
# PART 2 — موثوق (the shipped platform — "Hall of Truth")
═══════════════════════════════════════════════════════════════════════════════════════════════════════

## 2.1 System-design type & brand myth
Next.js 15 / React 19 / Tailwind v4, **21 art-directed themes** + `system`, RTL+LTR bilingual. The brand
soul (`identity.ts`) fuses three Egyptian truth-myths: **Horus** (winged sun/falcon = guardian & true-sight),
**Ma'at** (feather + golden scales = every claim is weighed), **Thoth** (ibis scribe/papyrus/glyphs = the
recording texture). **Gold + the guardian stay constant across all 21 themes; only page surfaces reskin.**

## 2.2 The Hall "flag" colours (constant in every theme — from `identity.ts`)
| Token | Hex | Role |
|---|---|---|
| `gold` | `#E8B23A` | the through-line (reads on both papyrus & night) |
| `goldBright` | `#F7DB93` | highlight |
| `goldDeep` | `#B67B1E` | shadow gold |
| `goldInk` | `#6E4A12` | text-on-gold |
| `lapis` | `#1B3A6B` | night-sky blue |
| `lapisDeep` | `#0B1B3A` | deeper lapis |
| `night` | `#080B16` | darkest ground |
| `turquoise` | `#2BB3A3` | supporting jewel |
| `carnelian` | `#C0432E` | supporting jewel (alert/red) |
| `papyrus` | `#F3E9D2` | day surface |
| `papyrusDeep` | `#E4D3AC` | day surface shadow |
| `ink` | `#17130B` | text on papyrus |

Also exposed as CSS token `--hv-gold: #E8B23A` (so scenes stop using hardcoded `#d9b24c` fallbacks).

## 2.3 The 21 themes (from `theme-provider.tsx`; `bloodline` is the default)
`bloodline` (default — dramatic red-violet awareness) · `dark` (Dark Luxury) · `light` (Light Academic) ·
`terracotta` (Terracotta Sunset, light) · `amethyst` (Amethyst Geode) · `olive-meadow` · `pearl-slate` ·
`core-wine` · `blush-energy` (light) · `steel-azure` · `crimson-violet` · `deep-mocha` · `espresso-peony` ·
`raspberry-space` · `icy-gunmetal` · `lilac-cream` (light) · **`orchid-noir`** (jet-black + orchid bloom +
turquoise pop — the "dyslove" palette) · `adrenaline-rush` · `eden-royale` (emerald + crimson) ·
`solar-power` (light, molten gold) · `plum-noir`. Each is tagged `scheme: "dark" | "light"`.
Sample real values: light `:root` `--bg-primary #FAFAF7` / `--text-primary #111`; `dark` `--bg-primary
#0D0D1A` / `#F1F1EE`; `terracotta` `#ffefe3` / `#4E2C23`; `steel-azure` `#081124`; `olive-meadow` `#0A1D14`.

## 2.3b — FULL palettes of 5 signature themes (exact, from `globals.css`)
Each theme overrides the same token names. Only the distinctive tokens are shown; anything not listed
inherits the `:root` default (§2.4). This is the pattern to copy when authoring a new theme.

### `bloodline` — DEFAULT · "scary, high-drama awareness" (dark, pink-on-oxblood)
```
--bg-primary #12050d · --bg-secondary #1d0a14 · --bg-card rgba(28,9,20,.82) · --bg-elevated #2a0d1d
--text-primary #fff2f5 · --text-secondary #d9b9c6 · --text-muted #b88a97 · --text-caption #a87c8a
--border-primary rgba(255,212,223,.12) · --border-secondary rgba(255,93,149,.28)
--accent-cta #ff5d95 (hover #e34780) · --accent-deepreal #ff7d66 · --accent-mentalhealth #d46aff
--accent-religionhub #ffd2df · --accent-blue #7c5cff · --accent-red #ff5d95
--progress-gradient linear-gradient(90deg,#240A24,#ff5d95 42%,#ff7d66 72%,#d46aff)
--hero-glow radial rgba(255,93,149,.32) · surface-noise = pink grain rgba(255,93,149,.18)  · color-scheme dark
```

### `orchid-noir` — the "dyslove" palette (dark, jet-black + orchid + turquoise)
```
Named seeds: Jet Black #1D1D1D · Orchid #E5BDDF · Wine Ash #32292F · Turquoise #99E1D9
--bg-primary #1d1d1d · --bg-secondary #262024 · --bg-card rgba(50,41,47,.82) · --bg-elevated #32292f
--text-primary #f6eef3 · --text-secondary #d9c7d3 · --text-muted #a998a3 · --text-caption #7f7079
--border-primary rgba(229,189,223,.14) · --border-secondary rgba(153,225,217,.30)  (turquoise edge)
--accent-cta #e5bddf (orchid, hover #d3a3cd) · --accent-deepreal #e79ab5 · --accent-mentalhealth #c9a6e0
--accent-religionhub #99e1d9 (turquoise) · --accent-emerald #99e1d9 · --accent-red #e79ab5
--progress-gradient linear-gradient(90deg,#32292f,#e5bddf 42%,#99e1d9 78%,#c9a6e0)
--hero-glow radial rgba(229,189,223,.28) · color-scheme dark
```

### `solar-power` — light, sunlit warm-gray + molten gold
```
--bg-primary #ECE8E0 · --bg-secondary #F3EFE7 · --bg-card #F8F5EF · --bg-elevated #FCFAF5
--text-primary #1F1B13 · --text-secondary #4D4636 · --text-muted #6F6756 · --text-caption #8B8271
--border-primary rgba(40,32,16,.14) · --border-secondary rgba(40,32,16,.22)
--accent-cta #A9760A (hover #DFA114, glow rgba(244,191,58,.45)) · --accent-deepreal #A9760A
--accent-amber #B5820C · --accent-emerald #2E9E6E · --accent-red #C7362C · --accent-blue #2C6FB0
--progress-gradient linear-gradient(90deg,#6F6756,#F4BF3A 55%,#FFE08A) · --hero-orb-1 gold radial rgba(244,191,58,.5)
overrides shadows to warm brown (e.g. --shadow-md 0 4px 14px rgba(90,70,20,.12)) · color-scheme light
(has a [data-contrast="high"] variant at line 708)
```

### `amethyst` — "Amethyst Geode" (dark, luminous violet + lavender fog)
```
--bg-primary #1d0d2d · --bg-secondary #240A24 · --bg-card rgba(36,10,36,.78) · --bg-elevated #321148
--text-primary #F4F1FF · --text-secondary #D5CCEA · --text-muted #B4A7D6 · --text-caption #8F81B4
--border-primary rgba(230,230,250,.12) · --border-secondary rgba(153,50,204,.24)
--accent-cta #9932CC (hover #7c29a4) · --accent-deepreal #c95dff · --accent-mentalhealth #b17dff
--accent-religionhub #E6E6FA (lavender) · color-scheme dark
```

### `eden-royale` — "deep emerald forest with a crimson strike" (dark)
```
--bg-primary #0A1D14 · --bg-secondary #10291D · --bg-card #10291D · --bg-elevated #173726
--text-primary #F2F0E4 · --text-secondary #C4D1C2 · --text-muted #8FA795 · --text-caption #647A6C
--border-primary rgba(175,220,190,.14) · --border-secondary rgba(175,220,190,.24)
--accent-cta #D62B3C (crimson, hover #EE4353) · --accent-emerald #37B87A · --accent-amber #E8B23A (the Hall gold!)
--progress-gradient linear-gradient(90deg,#274E3B,#D62B3C 60%,#F5A0A8) · color-scheme dark
```

**Pattern to author a new theme:** add the value to the `Theme` union + `THEME_OPTIONS` (with `scheme`) in
`theme-provider.tsx`, then add a `[data-theme="your-name"] { … }` block in `globals.css` overriding the
token set above (bg/text/border/accent/cta + optionally progress-gradient/hero-glow/surface-noise/shadows +
`color-scheme`). Never add a theme that only overrides *some* text colours — unstyled tokens fall back to
`:root` (light) and will be unreadable on a dark canvas.

## 2.4 The token vocabulary (from `globals.css :root`) — use these names, never hardcode
- **Backgrounds (60/30/10 rule):** `--bg-primary`, `--bg-page`, `--bg-secondary`, `--bg-card`,
  `--bg-sidebar`, `--bg-elevated`.
- **Text:** `--text-primary`, `--text-secondary`, `--text-muted`, `--text-caption`, `--text-inverse`.
- **Borders:** `--border-primary`, `--border-secondary`, `--border-subtle`.
- **Per-engine accents:** DeepReal amber `--accent-deepreal #F59E0B` · Mental-Health emerald
  `--accent-mentalhealth #10B981` · Religion-Hub violet `--accent-religionhub #8B5CF6` (+ each has
  `-hover`, `-glow`, `-surface`). Palette accents: `--accent-amber/emerald/indigo/purple #9932CC/blue/red`.
- **Primary CTA:** electric blue `--accent-cta #0066FF` (+ `-hover #0052CC`, `-glow`).
- **Status:** `--color-success #10B981` · `--color-warning #F59E0B` · `--color-danger #EF4444` ·
  `--color-info #3B82F6` · `--accent-success #3f9d6b`.
- **Glassmorphism:** `--glass-bg rgba(255,255,255,.72)` · `--glass-border` · `--glass-blur 12px` ·
  `--glass-shadow 0 8px 32px rgba(0,0,0,.06)`.
- **Shadows:** `--shadow-sm/md/lg/xl` + `--shadow-card-hover`.
- **Spacing:** `--space-xs 4 · sm 8 · md 16 · lg 24 · xl 32 · 2xl 48 · 3xl 64 · 4xl 80 · 5xl 120`.
- **Radius:** `--radius-sm 6 · md 10 · lg 16 · xl 24 · full 9999`.
- **Layout:** `--sidebar-width 260 · --navbar-height 64 · --content-max-width 1200`.
- **Z-index scale:** `base 1 · dropdown 100 · sticky 200 · overlay 500 · modal 1000 · toast 1500 · progress 9999`.

## 2.5 Typography (Hall)
- **Display/brand (per memory):** **Cinzel** (Latin display) + **Reem Kufi** (Arabic display) carry the
  "Hall" engraving feel on hero/brand marks.
- **Token font stacks (`globals.css`):** heading-EN `--font-heading-en 'Space Grotesk'` · body-EN
  `--font-body-en 'Hanken Grotesk'` · heading-AR & body-AR `--font-heading-ar/--font-body-ar 'Readex Pro',
  'Noto Kufi/Naskh Arabic'` · accent `--font-accent 'Inter','Satoshi'`.
- **Type scale:** `--font-display clamp(56,8vw,96) · h1 clamp(40,5vw,64) · h2 clamp(28,3.5vw,44) ·
  h3 clamp(22,2.5vw,28) · h4 20 · body 17 · small 14 · caption 12` (px).

## 2.6 Textures & background layers (Hall)
- **`--surface-noise`** = `radial-gradient(circle at top, rgba(255,255,255,.8), transparent 38%) ,
  linear-gradient(180deg, rgba(255,255,255,.15), transparent 30%)` — the papyrus/paper grain overlay.
- **`--hero-glow`** `radial-gradient(circle, rgba(139,92,246,.15) 0%, transparent 70%)` +
  **`--hero-orb-1`** amber orb + **`--hero-orb-2`** emerald orb — floating light blooms behind heroes.
- **`--progress-gradient`** `linear-gradient(90deg,#667eea,#f64f59)` — scroll progress bar.
- **HallDust** (`src/components/…HallDust.tsx`) — a canvas particle "gold dust" layer; **frozen in Light
  mode** and under Perf Mode for performance.
- Glassmorphism panels (blur + translucent) per `--glass-*`.

## 2.7 Animations & motion engine (Hall)
- **Library:** `framer-motion` (+ recharts/d3/three.js for data & 3D scenes).
- **Transition tokens:** `--transition-fast 150ms ease · base 300ms ease · smooth 600ms
  cubic-bezier(.4,0,.2,1) · spring 500ms cubic-bezier(.34,1.56,.64,1)`.
- **Theme auto-cycle engine** (`theme-provider.tsx`): Fisher-Yates shuffle queue (every theme seen once
  before reshuffle), **8 s per theme**, **Visibility-API aware** (pauses when tab hidden → saves
  battery/CPU), and a **1.5 s cross-fade** (`.theme-crossfade` class) so switches feel gentle.
- **Theme application:** `data-theme="<name>"` on `<html>` + `color-scheme` + `.dark` class ONLY for the
  generic `dark` theme (named dark themes must NOT get `.dark` or its selector overrides their vars).
- **Contrast mode:** `data-contrast="normal|high"` (accessibility). Persisted `localStorage: eal-theme`,
  `eal-contrast`.

## 2.8 PERF MODE — the "strong PC = full, weak Android = lite" system (critical, per the Android-lag fix)
- `data-perf="lite|full"` on `<html>` + `localStorage["eal-perf"]`, mirrored like the theme system.
- `[data-perf="lite"]` block in `globals.css` disables heavy animation/canvas; auto-recommends lite when
  the device feels laggy, while strong devices keep the full living experience. `HallDust` and other
  canvas/particle layers freeze under lite. Deferred shell (ExploreHub/chatbot) loads on idle.
- The #1 platform complaint was **Android lag = main-thread JS, not network** — keep new features cheap on
  the main thread and honour Perf Mode.

═══════════════════════════════════════════════════════════════════════════════════════════════════════
# PART 3 — RULES when you build or restyle UI (both apps)
═══════════════════════════════════════════════════════════════════════════════════════════════════════

1. **Token-only colour.** Never hardcode a hex in a component. مستعد → the `--ink/--surface/--safe/--lv`
   family; موثوق → the `--bg-*/--text-*/--border-*/--accent-*` family. A hardcoded colour breaks theming
   and fails on half the palettes.
2. **Support light AND dark.** Test on at least one light theme (e.g. مستعد light mode; موثوق `light` /
   `terracotta` / `solar-power`) and one dark (default). Text contrast must hold in both.
3. **RTL-safe.** Use logical properties (`margin-inline`, `border-inline-start`, `inset-inline-start`),
   never `left/right`. Numbers/phones render `direction:ltr`.
4. **Motion is optional.** Every animation needs a `prefers-reduced-motion` fallback (مستعد) or must honour
   Perf Mode (موثوق). Weak Android first.
5. **Severity colour is semantic in مستعد** — L1 teal → L5 red. Don't repaint it arbitrarily.
6. **Provenance is visual:** verified = solid teal cite chip that links to the source; unverified = dashed
   amber ⚠. The UI must never make an unsourced line look sourced.
7. **Centre with flex, not `mx-auto`** (mx-auto has been flaky in موثوق).
8. **Gold + guardian are the fixed brand flag in موثوق** — reskin surfaces freely, but don't recolour the
   gold or drop the Horus/Ma'at guardian; that's the through-line that makes 21 themes still read as موثوق.

*(Every value here was read from the live files on 2026-07-11: مستعد `index.html`, موثوق `identity.ts`,
`theme-provider.tsx`, `globals.css`. If you change a token, update this file.)*
