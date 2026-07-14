# متزن — Product Requirements Document (PRD)
### محو الأمية النفسية · Psychological Literacy Platform
**رحلتك إلى اتزانك النفسي تبدأ بخطوة ونَفَس عميق**

---

| Field | Value |
|---|---|
| Product | **متزن** (Motazen — "the balanced one") |
| Parent | Egyptian Awareness Library (المكتبة المصرية للوعي) |
| Sibling platforms | موثوق (verification) · مستعد (MOSTAʿED — preparedness) |
| Document type | Product Requirements Document — Foundational Spec |
| Version | v1.0 — Foundational |
| Status | Draft for team review |
| Scope of this doc | The *what* and the *why*, the epistemic contract, the curriculum spine, the content supply chain, the product surfaces, and the design system. Engineering implementation specs are downstream. |

> **How to read this document.** This is not a feature list. متزن is a *literacy* platform, which means the product **is the content**, and the content is only as good as its epistemic discipline. So this PRD front-loads the epistemic contract before any UI. If you disagree with Sections 5–7, nothing after them matters. Start there.

---

## 0. The inherited lesson (why this PRD looks different)

The single most important architectural decision in متزن is a lesson carried over from the موثوق build: **AI is an *assembler* of grounded content, not a *factory* that generates it.** A mental-health platform that lets a language model invent reassuring-sounding claims is not a literacy tool — it is a misinformation vector with a calming color palette. Every system in this document exists to enforce that one principle.

متزن also inherits the موثوق/BRAINS DNA of treating content as something that must survive a review gauntlet before it reaches a human. Mental health is simply the highest-stakes possible domain for that discipline, because the audience is often distressed, the claims are often contested even among experts, and the cost of a confident falsehood is measured in people's lives.

---

## 1. Executive summary

متزن teaches ordinary Arabic-speaking people **how to think about mental health** — not what to think, and never what to do about a specific diagnosis. It is built on the academic construct of **mental health literacy (MHL)**, first named by Jorm and colleagues in 1997 and defined as "knowledge and beliefs about mental disorders which aid their recognition, management or prevention," later broadened to include *positive* mental health, self-help knowledge, and help-seeking (Jorm 1997; Kutcher, Wei & Coniglio 2016). Critically, MHL is a **measurable** construct with validated instruments (e.g., the Mental Health Literacy Scale, O'Connor & Casey 2015), which means متزن can define a *clear end state* and test whether it reaches it.

The platform delivers this through a deliberately **narrow set of surfaces**: verified content, shown through **cards, games, and real-live scenarios**, reinforced by **daily exercises**, with a tightly-scoped **chatbot** as a guide — *and nothing more*. Scope discipline is a feature, not a limitation.

What makes متزن different from a wellness app is that it applies **negative science** as a first-class citizen: it teaches the replication crisis, the collapse of the "chemical imbalance" story, and the fact that most of the psychology being taught worldwide was built on a 12%-of-humanity sample that does not include Egyptians. متزن does not sell certainty. It teaches people to hold contested evidence like adults.

---

## 2. The problem

### 2.1 The burden is real and it is not shrinking
Mental disorders sit among the **top ten causes of disease burden worldwide**, and the Global Burden of Disease Study 2019 found **no reduction in that burden since 1990** despite decades of research and intervention (GBD 2019 Mental Disorders Collaborators, *Lancet Psychiatry* 2022). By 2019 roughly **970 million people** were living with a mental disorder, with depressive and anxiety disorders as the largest contributors, and **low- and middle-income countries disproportionately affected** (IHME/GBD 2019). A separate re-estimation argues the true burden may be closer to **16% of global DALYs** — roughly three times conventional figures — with an economic cost near **USD 5 trillion** (Arias et al., *eClinicalMedicine* 2022).

### 2.2 The treatment gap is a literacy gap first
In many countries the **treatment gap exceeds 70%** (PAHO/WHO). People do not seek help they cannot recognize they need, for conditions they have no accurate words for, mediated by stigma that itself is partly manufactured by *bad* explanations. This is precisely the gap MHL research targets: literacy is associated with **reduced stigma** and **increased help-seeking intention** (multiple reviews summarized in Springer, *Middle East Current Psychiatry* 2021).

### 2.3 The information environment is polluted
This is موثوق's home turf, imported into mental health. The public square is full of credentialed-sounding figures selling supplements, "detoxes," pop-neuroscience, and one-line explanations of the mind. A mental-health-literate person needs the same defensive toolkit متزن's sibling platforms already teach — applied to claims about the self.

### 2.4 The science itself is contested — and pretending otherwise is the trap
Here is the uncomfortable core of the problem. If متزن teaches mental health as settled fact, it will teach falsehoods, because large parts of the field are openly unsettled:
- **The replication crisis.** The Open Science Collaboration (2015) attempted to replicate 100 published psychology studies; **97% of the originals reported significant effects, but only ~36% of replications did**, and where effects did replicate they were roughly **half the original size**. (The "crisis" framing is itself contested — see §6.4 — which is exactly the point.)
- **The chemical-imbalance story collapsed in public.** Moncrieff et al.'s 2022 umbrella review (*Molecular Psychiatry*) concluded there is **no consistent evidence** that depression is caused by low serotonin. It was downloaded over a million times — and then rebutted by 36 experts who called it methodologically flawed. The *honest* teaching is not "antidepressants are fake"; it is "here is how a real scientific controversy looks from the inside."
- **The WEIRD problem.** Henrich, Heine & Norenzayan (2010) showed that behavioral science overwhelmingly samples **Western, Educated, Industrialized, Rich, Democratic** populations — about **12% of humanity supplying over 90% of research subjects** — and that these subjects are frequent *outliers*, not a human baseline. **Arab populations are specifically, grossly underrepresented.** So a platform importing Western psychology to Egyptians must flag, structurally, *where the evidence has and has not been tested on people like its users.*

**The problem متزن solves, stated precisely:** Arabic-speaking people lack a trustworthy, culturally-situated, epistemically-honest way to build a working mental model of the mind — one that neither over-promises certainty nor dissolves into "nobody really knows."

---

## 3. Vision, mission, name, tagline

**Name.** متزن / *Motazen* — "the balanced/poised one," from اتزان (equilibrium, poise). The name is a claim about the *goal state*, not a promise of a cure.

**Tagline.** رحلتك إلى اتزانك النفسي تبدأ بخطوة ونَفَس عميق — "Your journey to psychological balance begins with a step and a deep breath." A journey (not a destination), a single step (low barrier), and a breath (the body is in this too — see the mind–body section).

**Mission.** To raise the psychological literacy of Arabic speakers — their ability to *recognize, understand, contextualize, and respond to* mental states in themselves and others — using content that is verified, cited, culturally situated, and honest about uncertainty.

**Vision.** A generation of Arabic speakers who can read their own inner weather, tell distress from disorder, spot a psychological con, know when and where to seek help, and hold the genuine open questions of the field without either panic or false certainty.

**What "balance" means here — and what it does not.** متزن deliberately rejects the "peak wellness" definition of mental health. Philosophers have warned that defining mental health as *total* well-being across all of life is not just impossible but **dangerous** — it medicalizes ordinary unhappiness and smuggles contested value judgments in under a scientific costume (see the "Mental Health Without Well-being" critique, *PMC* 2021). متزن teaches the WHO framing — mental health as *more than* the absence of disorder, a state that lets a person cope with normal stress, realize their abilities, and contribute (WHO) — while explicitly teaching *the critique of that framing too.*

---

## 4. Positioning & scope — what متزن is, and emphatically is not

The "nothing more" in the brief is a design constraint we will defend against feature creep.

**متزن IS:**
- A psychological-literacy curriculum, sequenced from below-zero to a defined end state.
- A verified content library, surfaced through cards, games, and live scenarios.
- A daily-exercise habit layer for evidence-based skills.
- A scoped guide-chatbot that navigates *the library*, not the user's psyche.

**متزن IS NOT (hard non-goals):**
- ❌ **Not a diagnostic tool.** It never tells a user they "have" anything. MHL includes *recognition*, but recognition-literacy ("these are the features of X") is categorically different from diagnosis ("you have X").
- ❌ **Not therapy or a therapist.** No treatment, no clinical relationship.
- ❌ **Not a crisis service.** It must *detect* crisis and *route* to real human help — see §14 — but it is not the safety net itself.
- ❌ **Not a symptom-checker** that maps inputs to conditions.
- ❌ **Not a medication advisor.** It can teach *how a class of drugs is understood to work and where the evidence is contested* (this is literacy); it never advises an individual to start, stop, or change anything. (Note the Moncrieff case's own explicit warning: never stop antidepressants suddenly.)
- ❌ **Not a supplement/"natural remedy" storefront** — the opposite; it inoculates against that market.
- ❌ **Not a social network, journal-with-feed, mood-tracking-forever, gamified-streak-casino,** or any of the standard wellness-app accretions.

**Relationship to siblings.** موثوق provides the verification methodology and misinformation-defense patterns. مستعد provides the content-acquisition-engine pattern (ingest → normalize → gap-fill) and the source-catalog discipline. متزن is where those meet the human interior.

---

## 5. Core methodology — the "Content First" doctrine

The build order is non-negotiable and is the answer to "you skipped too much detail": **content integrity is engineered before any surface is designed.**

```
   VERIFIED CONTENT  →  MULTI-MODAL SURFACING  →  DAILY PRACTICE  →  GUIDED NAVIGATION
   (the library)        (cards/games/scenarios)   (exercises)        (chatbot)
        ▲
        │  everything downstream can only ever display what survives this gate
   ┌────┴─────────────────────────────────────────────┐
   │  SOURCE CATALOG → ACQUISITION → VERIFICATION       │
   │  → CLAIM CLASSIFICATION → LOCALIZATION → REVIEW     │
   └────────────────────────────────────────────────────┘
```

**The rule that governs every module:** *No surface may assert anything the library cannot cite.* A card, a game answer, a scenario outcome, a chatbot reply — each is a **view onto a verified claim object**, never free-form generation. If the library does not contain it, the product does not say it. This is the موثوق lesson made structural.

**Claim object (atomic unit of the library).** Every teachable statement is stored as a structured object:

| Field | Purpose |
|---|---|
| `claim_ar` / `claim_en` | The statement, bilingual |
| `status` | `established` · `contested` · `debunked` · `unknown` (see §6.3) |
| `evidence_tier` | Source strength (see §6.2) |
| `sources[]` | Real citations w/ DOI/URL, incl. dissenting sources for `contested` |
| `weird_flag` | Has this been tested on non-WEIRD / Arab populations? `yes` / `no` / `unknown` |
| `cultural_note_ar` | Localization / religious-epistemology note where relevant |
| `uncertainty_note` | What we *don't* know about this claim |
| `crisis_sensitive` | Triggers safety handling if surfaced |
| `last_reviewed` | Recency stamp |

Surfaces render from these fields. A `contested` claim *cannot* be shown as a fact — the UI is structurally forbidden from hiding the `status`.

---

## 6. The epistemic foundation (the heart of متزن)

This section is the product's soul. If متزن gets this right and the UI is mediocre, it still works. If it gets a beautiful UI and this wrong, it is harmful.

### 6.1 The evidence standard
متزن prefers evidence in roughly this descending order, and **shows the user which tier a claim rests on:**
1. Systematic reviews & meta-analyses (esp. Cochrane), and large syntheses (GBD/IHME).
2. Consensus bodies with transparent methodology (WHO, APA, NICE, Royal College of Psychiatrists).
3. Well-powered, pre-registered primary studies (post-2015 replication-reform era weighted higher).
4. Older/single primary studies — *always* flagged as weak, especially pre-registration-era social psychology.
5. Expert opinion / clinical consensus where empirical evidence is thin — *labeled as such.*

### 6.2 Evidence tiers (inherited Firewall pattern)
A simplified, user-facing tier badge on every claim: **🟢 Strong** (multiple high-quality syntheses agree) · **🟡 Mixed/Contested** (credible sources disagree) · **🟠 Weak/Emerging** (limited or old evidence) · **🔴 Debunked** (evidence is against it) · **⚪ Unknown** (genuinely open). The badge is never optional.

### 6.3 Claim classification — the four states
Every claim object carries exactly one status:
- **`established`** — robustly supported (e.g., *mental disorders are a leading cause of global disability* — GBD 2019).
- **`contested`** — credible experts genuinely disagree (e.g., *the serotonin theory of depression* — Moncrieff 2022 vs. the 36-expert rebuttal). Shown with **both sides**, by design.
- **`debunked`** — the evidence is against it (e.g., *"depression is simply a chemical imbalance you can correct with a pill"* as a complete causal story).
- **`unknown`** — the field does not know (e.g., *the precise mechanism by which effective antidepressants relieve symptoms* — there is "no other accepted pharmacological mechanism," per the same reviews, which is a striking admission).

### 6.4 The Negative Science protocol (متزن's signature)
This is what K means by "negative science applied." متزن does not only teach what is known; it teaches **how knowledge fails, and how to live with that.** Recurring, first-class content types:

- **"ما لا نعرفه" cards (What we don't know).** For every domain, an explicit card enumerating the open questions. Absence of a "what we don't know" card is a content bug.
- **Replication literacy.** A core module teaches the 2015 result plainly — *and then* teaches the meta-critique that the "36% crisis" figure pools incomparable studies and may itself be an over-read (a genuine 2020s counter-argument). This recursive skepticism — being skeptical *even of the skeptics* — is the graduate-level skill متزن exists to build.
- **The WEIRD caveat, made structural.** The `weird_flag` field surfaces as a visible tag: *"This finding was mostly studied on Western populations and has not been well tested on people in our region."* This is honesty *and* a differentiator no Western wellness app offers.
- **The stigma paradox.** متزن teaches a counterintuitive, evidence-backed finding: framing mental illness *purely* as a "brain disease / chemical imbalance" — the framing many anti-stigma campaigns pushed — has been found in systematic reviews to *increase* certain kinds of stigma and perceived dangerousness/unpredictability, because it makes the person seem less in control (as reviewed in the mind–brain-problem literature, *PMC* 2019). So even the "kind" simplification can backfire. This is the platform teaching nuance over slogans.
- **Falsifiability drills.** In games/scenarios, users practice asking of any claim: *What would prove this wrong? Who disagrees, and why? What population was it tested on?*

### 6.5 Citation & sourcing standard
- Every claim object stores **real, resolvable sources** (DOI/URL). No source, no claim, no exception.
- `contested` claims **must** store at least one high-quality dissenting source.
- Sources carry a `last_reviewed` date; the science moves, and stale certainty is a failure mode.
- **Anti-fabrication rule (the موثوق firewall):** the assembly layer (human or AI) may *rephrase* and *sequence* sourced claims for a given surface; it may **never** introduce a claim, statistic, or citation not already in the library. Fabricated or "recalled" citations are treated as a critical content defect, not a style issue.

---

## 7. The curriculum — clear start, long road, clear end

The brief asks for "a clear point start and a clear point end and a clear road map." Here it is. The spine is a **descending-then-ascending journey**: we go *below* zero to lay foundations most platforms skip, then climb to a defined, *measurable* literate end state.

### PHASE −1 · "ما تحت الصفر" (Below Zero) — Foundations of the foundations
*The primer nobody teaches. The user cannot understand mental health until they've questioned what the words even mean.* This phase is pure epistemic and conceptual grounding, delivered gently.

The brief's own seed questions, expanded into the below-zero syllabus:

1. **ما هي الصحة النفسية أصلًا؟ (What even *is* mental health?)** Is it the absence of illness, or something more? Teach the WHO framing (more than absence of disorder) *and* its critique (the "peak wellness" ideal as medicalizing and value-laden). End state: the user holds a *working, humble* definition, not a slogan.

2. **هل يوجد شيء اسمه "نفسي" منفصل عن "الجسدي"؟ (Is there such a thing as "mental" that is separate from "physical"?)** The genuine, unresolved mind–body problem. Introduce, at a lay level: monism/physicalism, dualism, and non-reductive materialism ("there is no mind without brain and no brain without mind" — they are functionally interdependent, per *PMC* 2020). Touch the "hard problem" of consciousness (Chalmers, Nagel: knowing everything about a bat's brain still doesn't tell you *what it is like* to be one). **The honest answer to the user's question is: this is genuinely open, and here is the map of the positions.** The tagline's "deep breath" lands here: the body is in the mind's business.

3. **وهل هو بنفس أهمية الجسدي؟ (Is it as important as physical health?)** Answer with the burden data (top-ten cause, ~970M people, treatment gap >70%) — *and* with the harder point that the "mental vs physical" split is partly an artifact of dualist habits of thought, and that the WHO's own position is "no health without mental health."

4. **ليه الموضوع محتاج علم أصلًا؟ (Why does this even need science — can't I just trust my intuition / an authority figure?)** Introduces the whole reason متزن exists: intuition and charisma are exactly how psychological misinformation spreads. Bridges to موثوق.

5. **إزاي بنعرف إن حاجة "صح" في علم النفس؟ (How do we even know something is "true" in psychology?)** Evidence, replication, the difference between "a study found" and "we know." Introduces the replication crisis at a lay level, and the WEIRD problem — *the science you're about to learn was mostly not tested on people like you.* This reframes everything downstream as provisional and situated. This is the single most important below-zero lesson.

6. **الفرق بين: طبيعي / ضيق / اضطراب (Normal vs. distress vs. disorder.)** Sadness is not depression; anxiety is not an anxiety disorder. Where are the (fuzzy, contested) lines, and why does drawing them badly cause harm in both directions (over-medicalizing the normal; dismissing the serious)?

7. **مين بيقرر إيه اللي يتعدّ "اضطراب"؟ (Who decides what counts as a disorder?)** A gentle, honest look at how diagnostic categories are made, revised, and debated — not to induce cynicism, but to build appropriate, non-paralyzing skepticism.

*Below-Zero exit criterion:* the user can say, in their own words, *"Mental health is more than the absence of illness; the mind and body are deeply linked and the deeper question is genuinely open; it matters at least as much as physical health; and the science about it is real but provisional and mostly untested on my region."*

### PHASE 0 · Literacy Core — the map of the territory
Vocabulary and the conceptual map. The biopsychosocial frame (Engel 1977) as the working model — *taught as a useful model, not a proven truth.* Positive mental health vs. mental illness as two axes, not one. The basic geography before touring any specific region.

### PHASE 1 · The Domains — content-first tours
Each major domain (mood; anxiety & fear; stress & the body; sleep; trauma; attention; the psychotic spectrum; etc.) taught in the same disciplined shape: *What it feels like from the inside → what's established → what's contested → what we don't know → what the WEIRD/regional caveat is → normal-vs-disorder line → where the misinformation clusters.* Every domain gets a "ما لا نعرفه" card.

### PHASE 2 · Skills & Self-Management — the daily layer
Evidence-based, self-administrable skills, taught as skills-with-evidence-labels (e.g., structured problem-solving, behavioral activation, sleep hygiene, cognitive-restructuring basics, breathing/arousal down-regulation). **Every skill carries its evidence tier and its "this is self-help literacy, not treatment" boundary.** Feeds the daily-exercise surface. Skills whose evidence is weak or WEIRD-only are labeled, not hidden.

### PHASE 3 · Navigation — literacy into the world
Help-seeking literacy (when, where, how, in *our* health system) · evaluating claims (the موثوق toolkit turned on psych claims: the fake-expert pattern, the supplement con, pop-neuroscience) · talking to family/others · **cultural and religious integration** handled with respect and precision (Islamic epistemology and lived practice are part of this audience's meaning-making; متزن neither flattens faith into "coping mechanism" nor lets it override care-seeking — it holds both honestly).

### PHASE 4 · "الاتزان" — the defined END STATE
The clear endpoint. A literate user, defined by **measurable competencies** mapped to MHL instruments:
- Can *recognize* features of common conditions (without self-diagnosing).
- Knows *risk/protective factors* and basic causes at the biopsychosocial level.
- Knows *effective self-help* and its limits.
- Has *help-seeking efficacy* — knows how to get real help and is willing to.
- Holds *reduced stigma* and accurate beliefs.
- Can *evaluate a psychological claim* — source, evidence tier, population, dissent.
- Can *sit with uncertainty* — the graduate skill.

*This end state is testable* (pre/post, MHLS-style — see §12). That is what makes متزن a literacy platform and not a vibes platform.

---

## 8. Product surfaces — cards, games, scenarios, exercises (and nothing more)

All four surfaces are **views onto claim objects.** None generates content.

### 8.1 Content cards (البطاقات)
The atomic teaching unit. One card = one claim (or one tight cluster), always carrying its **status badge**, its **evidence tier**, and — where relevant — its **"what we don't know"** flip-side and **WEIRD tag.** Card types: *concept, myth-vs-fact, "ما لا نعرفه," case-in-brief, self-check.* Design constraint: a card may never show a `contested` claim without its badge and dissent. Cards are shareable (single-image export) — this is how متزن travels through Arab social feeds *as a vaccine against the bad cards already circulating there.*

### 8.2 Games (الألعاب)
Games exist to build **judgment**, not to gamify streaks. Approved game patterns, each tied to a literacy competency:
- **Myth / Fact / "It's Complicated"** — three-way sort (the middle bucket is the point; it teaches `contested`).
- **Spot the Con** — a claim + a "source"; identify the fake-expert / supplement / pop-neuro pattern (موثوق mechanics).
- **Normal / Distress / Disorder** — sort vignettes onto the fuzzy spectrum; the game *rewards recognizing ambiguity.*
- **What Would Prove This Wrong?** — falsifiability drill.
- **Which population was this tested on?** — WEIRD-awareness game.
No leaderboards-as-casino, no loss-of-progress punishment, no dark patterns. Games are checks-for-understanding with dignity.

### 8.3 Real-live scenarios (سيناريوهات واقعية)
Branching, realistic situations in an Egyptian/Arab register (a friend's late-night message; a relative dismissing "نفسية"; a slick Instagram "healing coach"; a family pressure moment). The user practices *recognition, response, and boundary-holding.* Scenarios end not in a score but in a **debrief card** showing the evidence behind each branch. The serotonin controversy becomes a scenario: *a friend read that "antidepressants are a lie" — what's actually true, and what's the safe thing to say?* (including: never advise stopping meds suddenly).

### 8.4 Daily exercises (تمارين يومية)
The habit layer for Phase-2 skills. **Design constraints to avoid harm:** no forced streaks that punish; no perpetual mood-logging that can worsen rumination; each exercise labeled with its evidence tier and its self-help boundary; a gentle, breath-anchored tone true to the tagline. Exercises are *practice reps of literate skills*, not a treatment protocol.

*(That is the entire surface set. "نُثينج مور." Anything proposed beyond these four must justify itself against the non-goals in §4.)*

---

## 9. The chatbot — scoped to the bone

The chatbot is the highest-risk surface and therefore the most constrained. It is a **librarian, not a therapist.**

- **Grounding:** it answers **only** from the verified library (RAG over claim objects). It does not free-generate psychological claims. Assembler, not factory.
- **Behavior:** helps users *find, navigate, and understand* content; explains a card in other words; points to the relevant scenario or exercise; surfaces the status badge and dissent.
- **Hard refusals:** no diagnosis, no treatment advice, no medication guidance for the individual, no "what disorder do I have," no crisis counseling *in place of* routing.
- **Uncertainty by default:** when a topic is `contested` or `unknown`, the bot *says so* and shows both sides. It never resolves a real controversy to soothe.
- **Safety routing:** on any signal of crisis/self-harm/harm-to-others, it drops the literacy role and routes to real human help and regional resources (see §14). This path is non-bypassable and tested adversarially (the BRAINS red-team pattern).
- **Tone:** warm, plain Arabic, non-clinical, never falsely reassuring, never cold. It can say "I don't know, and here's who does."

---

## 10. Design system — typography, color, texture, tone

The design must *feel* like اتزان: calm, grounded, honest, not saccharine. It is Arabic-first.

### 10.1 Typography
- **Arabic (primary):** a warm, highly legible modern Arabic face with a humanist feel — candidates to evaluate: **IBM Plex Sans Arabic**, **Cairo**, **Rubik**, or **Noto Naskh Arabic** for long-form reading. Priority: readability at small sizes on cheap phones, generous line-height for Arabic diacritics, and a voice that is *serious but kind* (not corporate, not childish).
- **Latin (secondary, for EN + citations):** a matching humanist sans (IBM Plex Sans pairs natively with Plex Sans Arabic — a strong default for a bilingual product).
- **Hierarchy:** large calm headlines; comfortable body; a distinct, quieter style for **citations and status badges** so evidence is always visibly present but never shouting.
- **RTL-first** layout; LTR islands for citations/latin terms handled cleanly.

### 10.2 Color
Anchored in the *balance/breath* metaphor, avoiding both clinical-cold and wellness-pastel clichés.
- **Base:** deep, restful ground (ink/charcoal or deep teal-green — اتزان, groundedness) with generous calm neutrals (warm off-white "paper").
- **Accent:** a single **breath**-toned accent (a soft, oxygenated teal/green or a calm sky tone) used sparingly for focus and progress.
- **Semantic evidence palette (fixed, non-decorative):** 🟢 green (`established`) · 🟡 amber (`contested`) · 🟠 muted orange (`weak/emerging`) · 🔴 restrained red (`debunked`) · ⚪ neutral grey (`unknown`). These are *functional* colors and must stay consistent everywhere and meet WCAG AA contrast.
- Accessibility: never rely on color alone for status — always pair with icon + label (color-blind and low-vision users).

### 10.3 Texture & feel
- **Paper, breath, and quiet.** Subtle grain/paper texture to feel like a trustworthy book, not a slick SaaS. Soft, physical card edges. Generous whitespace = room to breathe (literal design of the tagline).
- **Motion:** slow, breath-paced transitions (nothing frantic; the app itself should down-regulate arousal). Optional breath-paced micro-interactions on the exercise surface.
- **Imagery:** restrained, human, regionally authentic. No stock "woman-on-a-cliff-at-sunrise" wellness clichés. Illustration over photography where possible, to avoid mis-modeling distress.

### 10.4 Tone of voice
Plain, warm, adult Egyptian/MSA-blend Arabic. Never condescending, never clinical-cold, never falsely cheerful. متزن speaks like a well-read, honest friend who respects your intelligence and won't lie to make you feel better.

---

## 11. Sources & content acquisition (the "deep search, find all content" engine)

Reusing the مستعد **Content Acquisition Engine** pattern (ingest → normalize → gap-fill) and the **Mega Source Catalog** discipline.

### 11.1 Tiered source catalog (starting spine — expand exhaustively during build)
- **Tier A — syntheses & consensus:** WHO (mental health; GBD themes), IHME/GBD studies, Cochrane systematic reviews, APA, NICE guidelines, Royal College of Psychiatrists.
- **Tier B — primary literature:** *Lancet Psychiatry*, *Molecular Psychiatry*, *British Journal of Psychiatry*, *World Psychiatry*, pre-registered trials, replication-project outputs (Center for Open Science).
- **Tier C — literacy-specific:** Jorm's MHL corpus, MHLS validation (O'Connor & Casey 2015), Kutcher/Wei school-based MHL work.
- **Tier D — critical/negative-science:** replication-crisis literature, Moncrieff and its rebuttals, Henrich et al. (WEIRD), the philosophy-of-psychiatry critiques (mind–body, "mental health without well-being").
- **Regional layer:** *Middle East Current Psychiatry* and Arab-world epidemiology/stigma studies — *actively sought* to populate `weird_flag` and cultural notes with real regional evidence, not assumptions.

### 11.2 Acquisition pipeline
`Discover (deep search per domain) → Ingest → Normalize into claim objects → Verify against Tier hierarchy → Classify status → Gap-fill (find dissent for every contested claim; find the "what we don't know") → WEIRD-flag → Localize + cultural note → Human expert review → Publish`

### 11.3 Localization & review
Arabic content is **authored/adapted**, not machine-translated raw. Every claim object passes a **human review gate** — ideally including an Arabic-speaking mental-health professional — before publish, with special scrutiny on crisis-sensitive and contested claims. This is where the موثوق Firewall tiers live in متزن.

### 11.4 The gap-fill mandate
The engine's job is not to find *some* content but to **find all content needed** for a domain to be taught honestly — which explicitly includes finding the *counter-evidence* and the *open questions*. A domain is not "done" until its dissent and its "ما لا نعرفه" card exist.

---

## 12. Measurement — proving literacy actually rose

Because MHL is measurable, متزن holds itself to outcome metrics, not vanity metrics.

- **Primary:** change in mental-health-literacy score (adapt/validate an Arabic MHLS-style instrument) — pre-baseline vs. post-phase.
- **Recognition accuracy:** can users correctly identify features (vignette tasks) without over-diagnosing?
- **Help-seeking efficacy & intention:** validated sub-scales.
- **Stigma reduction:** validated stigma sub-scales.
- **Epistemic competency (متزن-specific):** can the user correctly classify a novel claim as established/contested/debunked/unknown, and identify a WEIRD caveat? This is the platform's signature metric and likely needs a bespoke, validated instrument.
- **Guardrail metrics:** *no rise* in health anxiety / over-medicalization; crisis-routing precision & recall; zero tolerance for surfaced fabricated citations.

Explicitly **de-prioritized** as success signals: raw time-in-app, streak length, session count. متزن is not trying to maximize engagement; it is trying to make itself *decreasingly necessary.*

---

## 13. Roadmap (phased build)

- **M0 — Epistemic infrastructure first.** Claim-object schema, status/tier system, source catalog spine, review gate, anti-fabrication controls. *(No user-facing feature ships before this exists.)*
- **M1 — Below Zero + Literacy Core, cards-only.** The Phase-−1 and Phase-0 content library rendered as cards. This alone is a shippable, defensible MVP.
- **M2 — Games + Scenarios** over the Phase-−1/0 library (Myth/Fact/Complicated, Spot the Con, Normal/Distress/Disorder).
- **M3 — First Domains (Phase 1)** — begin with the highest-burden domains (depression, anxiety, stress/sleep), each with full negative-science treatment.
- **M4 — Daily exercises (Phase 2)** with harm-avoidance constraints.
- **M5 — Scoped chatbot** (library-grounded, safety-routed) — *last*, because it is highest-risk.
- **M6 — Navigation (Phase 3) + measurement instrument + regional-evidence layer.**
- **Ongoing — review cycles** (recency stamps; contested claims re-checked as the field moves).

---

## 14. Risks, ethics & guardrails

- **Crisis & self-harm.** Non-bypassable detection → route to real human help and current regional resources. متزن does **not** display or describe methods, does not counsel in place of humans, and is adversarially red-teamed (BRAINS pattern) on this path. Crisis handling is a launch blocker, not a fast-follow.
- **Over-medicalization / iatrogenic harm.** Teaching about disorders can induce health anxiety and self-diagnosis. Mitigations: the normal/distress/disorder spine, the explicit non-diagnosis stance, and guardrail metrics that watch for rising anxiety.
- **The "wellness ideal" trap.** Actively avoided per the "mental health without well-being" critique — متزن does not sell a totalizing happiness standard.
- **False certainty.** The entire epistemic protocol (§6) is the mitigation. The failure mode is a soothing lie.
- **Cultural & religious respect.** Islamic epistemology and faith practice are treated as real, load-bearing parts of the audience's meaning-making — neither reduced to "coping" nor allowed to override help-seeking. Handled with a named, careful editorial policy (to be drafted with regional experts).
- **Fabrication.** Treated as a critical defect at every layer, human and AI. The library is the only source of truth a surface may speak from.
- **Not a substitute.** متزن must be clear, in-product, that it complements — never replaces — professional care and human connection.

---

## 15. Open decisions (need K's call)

1. **Platform target for MVP** — web-first (shareable cards travel best) vs. mobile-first? (Recommendation: responsive web for M1, given the "single shareable page" ecosystem goal.)
2. **Arabic register** — Egyptian colloquial, MSA, or a deliberate blend per surface? (Recommendation: warm MSA for content cards, lighter Egyptian for scenarios/chatbot.)
3. **Expert review model** — do we have an Arabic-speaking clinician review partner for the review gate at M0? This is the highest-leverage hire/partnership.
4. **MHLS licensing/adaptation** — build a bespoke Arabic literacy instrument or adapt an existing validated one?
5. **Scope of the "religious integration" editorial policy** — who authors it, and against what boundaries?
6. **Which domains ship in M3**, and in what order (by regional burden data)?

---

## Appendix A — Verified source list (real, resolvable)

*Definitions & mental-health-literacy construct*
- WHO — *Mental health: strengthening our response / GHO themes.* who.int
- PAHO/WHO — *Mental Health* (treatment gap >70%). paho.org
- Jorm, Korten, Jacomb et al. (1997) — *"Mental health literacy."* British Journal of Psychiatry. (Cambridge Core)
- Kutcher, Wei & Coniglio (2016) — *Mental Health Literacy.* Canadian Journal of Psychiatry / SAGE. doi:10.1177/0706743715616609
- O'Connor & Casey (2015) — Mental Health Literacy Scale (MHLS). (referenced in concept-analysis literature)
- *Global research activity on mental health literacy* (2021) — Middle East Current Psychiatry. doi:10.1186/s43045-021-00125-5

*Burden & importance*
- GBD 2019 Mental Disorders Collaborators (2022) — *Lancet Psychiatry.* (top-ten burden; no decline since 1990) PMC8776563
- Arias et al. (2022) — *Quantifying the global burden of mental disorders and their economic value.* eClinicalMedicine (≈16% of DALYs; ~USD 5T).

*Mind–body / the "below zero" question*
- Engel (1977) — the biopsychosocial model (foundational, widely reviewed).
- *Mind-Brain Dualism in Psychiatry: Ethical Implications* — PMC7063027 ("no mind without brain and no brain without mind").
- *The presentation of the mind-brain problem in leading psychiatry journals* — PMC6899399 (biogenetic framing & stigma).
- *Is mind–body dualism compatible with modern psychiatry?* — BJPsych Advances (2022). doi:10.1192/bja.2021.20
- *Mental Health Without Well-being* — PMC8643588 (critique of the wellness ideal).

*Negative science*
- Open Science Collaboration (2015) — *Estimating the reproducibility of psychological science.* Science. (100 studies; ~36% replicated)
- Moncrieff, Cooper, Stockmann, Amendola, Hengartner, Horowitz (2022) — *The serotonin theory of depression: a systematic umbrella review.* Molecular Psychiatry. doi:10.1038/s41380-022-01661-0
- Jauhar et al. / 36-author Comment (2023) — rebuttal to Moncrieff, Molecular Psychiatry (via King's College London news).
- Henrich, Heine & Norenzayan (2010) — *"The weirdest people in the world?"* Behavioral and Brain Sciences 33(2–3):61–83. (WEIRD; ~12% of humanity, >90% of subjects)

> **Sourcing note (honesty clause):** Every citation above was retrieved and verified during the drafting of this PRD. Claims made in the curriculum body that are *not* yet backed by a retrieved source (e.g., specific efficacy figures for individual self-help skills in Phase 2) are intentionally **not** stated as fact in this document and are marked in the build plan as "to be sourced during content production" — consistent with the anti-fabrication rule (§6.5). This document practices the discipline it prescribes.

---

*End of متزن PRD v1.0 (Foundational). This is a living document; the science it rests on has recency stamps for a reason.*
