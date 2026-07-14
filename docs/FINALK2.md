# 🏛️ EAL — CONCRETE FUNCTIONAL PLAN

> **Philosophy:** *"The Tool Layer gives you weapons. The Human Awareness Layer makes YOU the weapon."*
>
> **Rule:** Every item below maps to a **real file path**. No theory. No generic. BUILD THIS.

---

## ⚖️ STRICT ARCHITECTURAL RULES (INVIOLABLE)

> [!CAUTION]
> These rules are LAWS. Breaking ANY of them weakens the platform. Every developer, every AI agent, every code review MUST enforce these.

### Rule 1: HUB-AND-SPOKE — NEVER MIX, ALWAYS CONNECT
```
Angry Debunkers = THE BRAIN (1,797 lines — DO NOT BLOAT)
Islamic Tools   = SPECIALIZED ORGANS (each does ONE thing perfectly)
Scientific Tools = SPECIALIZED ORGANS (each does ONE thing perfectly)
API Layer        = THE NERVOUS SYSTEM (shared Gemini rotator, shared evidence APIs)
```
- ❌ **NEVER** add a new feature INSIDE angry-debunkers. It stays at ~1,800 lines.
- ✅ **ALWAYS** build new features as separate pages that DEEP-LINK to/from angry-debunkers
- ✅ When angry-debunkers detects `is_religious_claim: true` → show button to Islamic tool pre-loaded with the claim
- ✅ When angry-debunkers detects `is_medical_claim: true` → show button to Drug Checker pre-loaded
- ✅ Deep links use URL params: `?claim=...&source=angry-debunkers`
- ✅ Every tool has "Return to Analysis" button bringing enriched data back

### Rule 2: GUIDELINES ARE HARD-CODED — NOT SUGGESTIONS

Every AI output on this platform MUST pass through guidelines validation. These are not "nice to have" — they are the CONSTITUTION.

**Scientific Guidelines (compiled into `src/lib/debunking/guidelines.ts`):**

| Guideline | What It Enforces | Kill Protocol If Violated |
|-----------|-----------------|-------------------------|
| **PRISMA** | Every systematic review must follow Preferred Reporting Items. Non-PRISMA study cited alone → flagged "Empirically Unsound" | `SYSTEM_FAIL_NO_PRISMA` |
| **CONSORT** | Every medical trial must show patient flow, drop-outs, blinding. Hidden data → fraud exposed | `SYSTEM_FAIL_CONSORT_VIOLATION` |
| **COPE** | Every paper checked for conflict of interest. Corporate-funded paper without disclosure → flagged | `SYSTEM_FAIL_UNDISCLOSED_COI` |
| **FAIR Data** | All data must be Findable, Accessible, Interoperable, Reusable. Black-box claims → rejected | `SYSTEM_FAIL_UNFAIR_DATA` |
| **Statistical Power** | Any study with power < 0.80 or N < 30 → flagged "Statistically Underpowered" | `SYSTEM_FAIL_LOW_POWER` |
| **p-value Integrity** | Clusters of p-values near 0.05 → flagged "Possible p-hacking" | `SYSTEM_FAIL_P_HACKING` |

**Islamic Guidelines (compiled into same `src/lib/debunking/guidelines.ts`):**

| Guideline | What It Enforces | Kill Protocol If Violated |
|-----------|-----------------|-------------------------|
| **Amman Message (2004)** | Defines valid Muslim identity, outlaws arbitrary Takfir. Any Takfir attempt → BLOCKED | `SYSTEM_FAIL_TAKFIR` |
| **Makkah Declaration (2019)** | Religious diversity, dialogue mandate. Exclusivist rhetoric → flagged | `SYSTEM_FAIL_EXCLUSIVISM` |
| **IIFA Resolutions** | OIC scholarly council rulings on modern issues. Intersection of science + Islam → pull IIFA first | `SYSTEM_FAIL_NO_IIFA` |
| **AAOIFI Standards** | Islamic finance rules. Any financial ruling → checked against AAOIFI. Zero Riba, zero Gharar | `SYSTEM_FAIL_RIBA` |
| **Wathiqat Al-Azhar** | Al-Azhar methodology: civic state, minority rights, scientific freedom. Platform aligned to this | `SYSTEM_FAIL_AZHAR_DEVIATION` |
| **Usul al-Fiqh** | Rules of General/Specific, Nasikh/Mansukh. Abrogated verse cited as current law → BLOCKED | `SYSTEM_FAIL_ABROGATED_CITATION` |
| **Maqasid al-Shariah** | 5 objectives: Religion, Life, Intellect, Lineage, Property. Any ruling destroying these → BLOCKED | `SYSTEM_FAIL_MAQASID_VIOLATION` |

**AI Ethics Guidelines:**

| Guideline | What It Enforces |
|-----------|------------------|
| **IEEE AI Ethics** | Algorithmic transparency — AI never answers without citing exact steps. No dopamine hijacking loops. |
| **No Concordism** | AI NEVER forces science to "prove" Quran or Quran to "validate" science. Side-by-side ONLY. | 

### Rule 3: EVERY PAGE MUST CONNECT TO ≥2 EXISTING SYSTEMS
- No orphan features. Every new page calls ≥2 existing APIs or links to ≥2 existing pages.
- Before building, answer: "Does this strengthen Scientific?" + "Does this strengthen Islamic?" + "Does this Connect?"
- If answer to ALL 3 is "no" → don't build it.

### Rule 4: EVERY AI OUTPUT MUST SHOW ITS WORK
- Scientific output → must show: sample size (N), p-value, funding source, PRISMA compliance
- Islamic output → must show: Isnad chain, hadith grade, Madhhab context, Asbab al-Nuzul if Quran
- Both → must show: fallacies checked, confidence score, conflict-of-interest scan

### Rule 5: FALLACY DETECTION IS MANDATORY ON ALL OUTPUTS
- Every God-System output runs through fallacy detection BEFORE reaching user
- Both scientific AND Islamic fallacies checked (see full list below)
- If fallacy detected → output flagged with fallacy name + explanation

### Rule 6: COGNITIVE EFFECTS ARE ACTIVE DEFENSE, NOT PASSIVE EDUCATION
- Cognitive biases aren't just listed — they're DETECTED in real-time
- When user shows confirmation bias in their query → Socratic Parser intervenes
- When manipulator uses anchoring in their claim → system exposes the technique

### Rule 7: EXISTING WORKING PAGES ARE SACRED
- The 36 functional systems listed below are NEVER downgraded
- New features ADD to them, never REPLACE functionality
- If a modification risks breaking existing code → build as new file instead

---

## ✅ WHAT WORKS RIGHT NOW (Don't Touch — 36 Functional Systems)

### Scientific — Working (18/22 items)

| File | Lines | What It Does | Rating |
|------|-------|-------------|--------|
| [angry-debunkers/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/angry-debunkers/page.tsx) | 1,797 | War room: text/URL/PDF input → God-System 7-layer pipeline → truth sandwich + AI chat follow-up | ✅ 10/10 |
| [api/defense/angry-debunkers/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/angry-debunkers/route.ts) | — | 2-phase God-System: preflight + Gemini rotator → structured Zod output, religion-aware | ✅ 10/10 |
| [api/search/evidence/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/search/evidence/route.ts) | — | Calls 5 APIs in parallel: OpenAlex + Semantic Scholar + EuropePMC + DOAJ + Crossref | ✅ 10/10 |
| [api/search/semantic-scholar/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/search/semantic-scholar/route.ts) | — | Direct call to `api.semanticscholar.org`, caches 30min | ✅ |
| [api/search/openalex/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/search/openalex/route.ts) | — | Direct call to `api.openalex.org/works` | ✅ |
| [api/search/ncbi/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/search/ncbi/route.ts) | — | 2-step PubMed: esearch → esummary | ✅ |
| [api/science/protocol/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/science/protocol/route.ts) | 478 | Real decision-tree evaluation, Egyptian-specific outcomes | ✅ 9/10 |
| [chatbot/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/chatbot/page.tsx) | 618 | 5 modes, session persistence, streaming | ✅ |
| [deepreal/game/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/deepreal/game/page.tsx) | 451 | 6 game modes, score tracking | ✅ |
| [osint-investigator/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/osint-investigator/page.tsx) | 306 | Streaming NDJSON OSINT terminal | ✅ |
| [six-layers/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/six-layers/page.tsx) | — | 3D scrollytelling, 50+ case studies, 6 deception layers | ✅ |
| [live-deception/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/live-deception/page.tsx) | 280 | Interactive deception simulator with rabbit-hole escalation | ✅ |
| [fight-back/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/fight-back/page.tsx) | 180 | Searchable/filterable negative science defense arsenal | ✅ |
| [comb-tracker/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/comb-tracker/page.tsx) | 221 | COM-B behavioral change tracker, real progress data | ✅ |
| [dashboard/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/dashboard/page.tsx) | 785 | Main user dashboard | ✅ |
| [assessment/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/assessment/page.tsx) | 701 | Assessment engine | ✅ |
| [misinfo-atlas/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/misinfo-atlas/page.tsx) | 774 | Misinformation atlas | ✅ |
| [ux-science/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/ux-science/page.tsx) | 180 | 30 behavioral hooks catalog | ✅ |

### 🧠 Cognitive / Philosophy / Effects — Working

| File | Lines | What It Does | Rating |
|------|-------|-------------|--------|
| [bias-fingerprint/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/bias-fingerprint/page.tsx) | 381 | Interactive cognitive bias assessment — detects user's own biases | ✅ |
| [reaction-test/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/reaction-test/page.tsx) | 404 | Speed-based cognitive reaction testing with scoring | ✅ |
| [philosophy/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/philosophy/page.tsx) | 210 | Platform philosophy and methodology explanation | ✅ |
| [self-test-protocol/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/self-test-protocol/page.tsx) | 386 | Self-assessment protocol for critical thinking | ✅ |
| [defense-qa/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/defense-qa/page.tsx) | 259 | Defense Q&A knowledge base | ✅ |
| [inoculation-passport/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/inoculation-passport/page.tsx) | 293 | Inoculation theory passport with progress tracking | ✅ |
| [src/data/research/cognitive-knowledge.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/data/research/cognitive-knowledge.ts) | — | 687 combinatorial entries: 30 foundations × 10 lenses | ✅ DATA |

> **Status:** These pages exist but are NOT connected to the Scientific or Islamic analysis pipelines. They are standalone. Phase 6B will wire them into both pillars.


### Islamic — Working (9/16 items)

| File | Lines | What It Does | Rating |
|------|-------|-------------|--------|
| [religion-hub/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/page.tsx) | 126 | Landing with 9 nav links, bilingual | ✅ |
| [religion-hub/tools/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/page.tsx) | 405 | 5 tool cards with Islamic geometric patterns | ✅ |
| [religion-hub/tools/hadith-check/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/hadith-check/page.tsx) | 505 | Full hadith checker → AI Gemini rotator with Zod schema | ✅ 9/10 |
| [api/islamic/quran/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/islamic/quran/route.ts) | — | Live AlQuran.cloud API: search/ayah/surah modes | ✅ |
| [api/defense/hadith-check/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/hadith-check/route.ts) | — | AI Muhaddith persona, structured output, isnad analysis | ✅ |
| [api/defense/religion-hub/analyze/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/religion-hub/analyze/route.ts) | — | Gemini analysis with shock-level + grounding truth | ✅ |
| [religion-hub/exercise/[day]/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/exercise/%5Bday%5D/page.tsx) | — | 14-day exercise program with scoring | ✅ |

---

## ❌ WHAT'S BROKEN/MISSING — EXACT FILE MAP

### 🔬 SCIENTIFIC PLATFORM — 15 Missing Pieces

| # | What's Missing | File to Create/Fix | API to Connect | Connects To |
|---|---------------|-------------------|----------------|-------------|
| S1 | **arXiv Search** | `src/app/api/search/arxiv/route.ts` | `export.arxiv.org/api/query` (FREE, no key) | evidence route, science page |
| S2 | **CORE Search** | `src/app/api/search/core/route.ts` | `api.core.ac.uk/v3/` (FREE) | evidence route |
| S3 | **openFDA Drug Safety** | `src/app/api/medical/openfda/route.ts` | `api.fda.gov/drug/event.json` (FREE, no key) | Medical Life engine |
| S4 | **DailyMed Drug Labels** | `src/app/api/medical/dailymed/route.ts` | `dailymed.nlm.nih.gov/dailymed/services/v2/` (FREE, no key) | Medical Life engine |
| S5 | **RxNorm Drug Names** | `src/app/api/medical/rxnorm/route.ts` | `rxnav.nlm.nih.gov/REST/` (FREE, no key) | Drug checker page |
| S6 | **WHO Health Data** | `src/app/api/medical/who/route.ts` | `ghoapi.azureedge.net/api/` (FREE, no key) | Health debunking |
| S7 | **Forensics FIX** | Fix `src/lib/ai/forensic-service.ts` | Replace Docker fallback with client-side Canvas ELA + EXIF.js | deepreal-upload page |
| S8 | **Evidence Search PAGE** | Upgrade `src/app/evidence/page.tsx` (currently 22 lines!) | Already uses `/api/search/evidence` | **THE flagship scientific search UI** |
| S9 | **Paper Auditor** | `src/app/paper-auditor/page.tsx` | Paste DOI → calls Crossref + Semantic Scholar → PRISMA/CONSORT checklist | fight-back, evidence |
| S10 | **Statistical Power Calculator** | `src/app/stat-power/page.tsx` (or component in paper-auditor) | Client-side math: `1-β` formula | Paper auditor |
| S11 | **Medical Life Engine** | `src/app/medical-life/page.tsx` + `src/data/keyhunter/medical-life-entries.ts` | openFDA + DailyMed + RxNorm + WHO | 4th engine |
| S12 | **BLACKBOX Engine** | `src/app/blackbox/page.tsx` + `src/data/keyhunter/blackbox-entries.ts` | Combinatorial pattern like cognitive-knowledge.ts | 5th engine |
| S13 | **Effect Dashboard FIX** | Fix `src/app/effect-dashboard/page.tsx` | Unlock admin gate (user hardcoded to null) | dashboard |
| S14 | **Evidence Route UPGRADE** | Add arXiv + CORE to `src/app/api/search/evidence/route.ts` | Goes from 5-API to 7-API aggregator | All search pages |
| S15 | **Negative Science DB** | `src/data/research/negative-science-100.ts` | Expand from 20 → 100 structured entries | fight-back page |

### 🕌 ISLAMIC PLATFORM — 17 Missing Pieces

| # | What's Missing | File to Create/Fix | API to Connect | Connects To |
|---|---------------|-------------------|----------------|-------------|
| I1 | **Quran Context Tool** | Build real `src/app/religion-hub/tools/quran-context/page.tsx` (currently STUB, 54 lines) | Existing `/api/islamic/quran` + add Tafsir | religion-hub |
| I2 | **Authority Verifier** | Build real `src/app/religion-hub/tools/authority-verifier/page.tsx` (STUB) | New AI agent via Gemini rotator | religion-hub |
| I3 | **Fatwa Context Tool** | Build real `src/app/religion-hub/tools/fatwa-context/page.tsx` (STUB) | New AI agent via Gemini rotator | religion-hub |
| I4 | **Sectarian Detector** | Build real `src/app/religion-hub/tools/sectarian-detector/page.tsx` (STUB) | New AI agent via Gemini rotator | religion-hub |
| I5 | **Upgrade Hadith API** | Modify `src/app/api/islamic/hadith/route.ts` | Add `cdn.jsdelivr.net/gh/fawazahmed0/hadith-api` (FREE, no key, 17+ books) as Tier 1 | hadith-check tool |
| I6 | **Upgrade Quran API** | Modify `src/app/api/islamic/quran/route.ts` | Add `api.quran.com/api/v4/` alongside AlQuran.cloud (has Tafsir!) | quran-context tool |
| I7 | **Tafsir API Route** | `src/app/api/islamic/tafsir/route.ts` | `api.quran-tafseer.com/` (FREE) — Ibn Kathir, Al-Jalalayn | quran-context tool |
| I8 | **Prayer Times + Qibla** | `src/app/api/islamic/prayer/route.ts` + UI component | `api.aladhan.com/v1` (FREE, no key) | religion-hub landing |
| I9 | **Hijri Calendar** | Component in religion-hub landing | `api.aladhan.com/v1/gToH` (FREE) | religion-hub landing |
| I10 | **Isnad Chain Visualizer** | Component in hadith-check page | D3 DAG visualization of narrator chain | hadith-check tool |
| I11 | **Comparative Fiqh** | `src/app/religion-hub/tools/comparative-fiqh/page.tsx` | AI agent with 4-Madhhab structured output | religion-hub tools |
| I12 | **Maqasid Filter** | Logic layer in God-System prompt | Add to `src/lib/debunking/god-system.ts` system prompt | angry-debunkers |
| I13 | **Nasikh/Mansukh Index** | `src/data/islamic/nasikh-mansukh.ts` | Static data file + UI component | quran-context |
| I14 | **Zakat Calculator** | `src/app/religion-hub/tools/zakat-calculator/page.tsx` | Client-side math (AAOIFI formulas) | religion-hub tools |
| I15 | **Mawarith Calculator** | `src/app/religion-hub/tools/mawarith/page.tsx` | Client-side math (inheritance formulas) | religion-hub tools |
| I16 | **Islamic Finance Check** | `src/app/religion-hub/tools/halal-finance/page.tsx` | AAOIFI compliance checker via AI agent | religion-hub tools |
| I17 | **Quran Full Browser** | `src/app/religion-hub/quran/page.tsx` | Quran.com v4 API — all 114 surahs, word-by-word, audio | religion-hub |

### 🔗 CONNECT — 12 Missing Pieces

| # | What's Missing | File to Create | Connects To |
|---|---------------|---------------|-------------|
| C1 | **OTHERS SEARCH (Federated)** | `src/app/others-search/page.tsx` | Calls ALL existing search routes: evidence + semantic-scholar + openalex + ncbi + factcheck + claimbuster + mediawiki + archive + Islamic APIs. ONE UI for everything. **Zero new backend code.** |
| C2 | **KILL LIST** | `src/app/kill-list/page.tsx` + `src/data/research/kill-list.ts` | Each entry links to God-System evidence + KEYHUNTER method that debunked it |
| C3 | **TREND HUNTER** | `src/app/trend-hunter/page.tsx` | Calls Google FactCheck API + existing search routes for trending claims |
| C4 | **Knowledge Graph** | `src/app/knowledge-graph/page.tsx` | D3 force graph of all KEYHUNTER entries, colored by engine |
| C5 | **WhatsApp Analyzer** | `src/app/whatsapp-analyzer/page.tsx` | Paste forwarded text → sentiment engine + fallacy detector + bot pattern detection |
| C6 | **Investigate (Upgrade)** | Upgrade `src/app/osint-investigator/page.tsx` | Already streaming, add EXIF viewer + ELA + WHOIS |
| C7 | **Debunk Game** | `src/app/bad-news/page.tsx` (5 lines → full game) | Upgrade tiny redirect to Egyptian-scenario interactive game |
| C8 | **Prompt Gallery** | Upgrade `src/app/prompt-lab/page.tsx` | Add KEYHUNTER-tagged categorized prompts |
| C9 | **Shows & Films** | `src/app/media-library/page.tsx` | Cross-reference with KEYHUNTER entries per film/show |
| C10 | **Python Scripts** | `src/app/tools-download/page.tsx` | Downloadable Python scripts for offline verification |
| C11 | **Connect (Community)** | `src/app/connect/page.tsx` | XP engine + leaderboard + peer challenge |
| C12 | **PWA Offline** | `public/sw.js` + `next.config.js` PWA config | Cache medical + crisis data for offline |

### 🧠 COVO JUDGMENT ENGINE — How It Maps to Existing Code

> The COVO isn't a separate system. It's an **upgrade to what already exists**.

| COVO Concept | Maps To This Existing File | What Changes |
|-------------|--------------------------|-------------|
| **6-Agent Pipeline** | [api/defense/angry-debunkers/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/angry-debunkers/route.ts) | Already has 2-phase pipeline. Add: Agent-LogicMaster (syllogism check), Agent-FallacyIdentifier (50 rules), Agent-KillSwitch (semantic coverage) as pre/post-processing middleware |
| **Kill-Switch V(r,K)** | [lib/debunking/god-system.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/lib/debunking/god-system.ts) | Add post-generation validation: compare output tokens against source citations. If uncited claims found → strip them |
| **Negative Prompt Layers** | [lib/debunking/god-system.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/lib/debunking/god-system.ts) | Add NEG-01 through NEG-07 to existing system prompt. The God-System already has a massive prompt — extend it |
| **Psychographic Defense** | [api/defense/mental-health/analyze/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/mental-health/analyze/route.ts) + [api/defense/religion-hub/analyze/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/religion-hub/analyze/route.ts) | Add PSY-201 through PSY-205 to these existing analyzers |
| **Adversarial Red-Team** | New: `src/lib/debunking/adversarial-agents.ts` | Post-processing layer that attacks God-System output before sending to user |
| **Socratic Parser** | [chatbot/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/chatbot/page.tsx) + [api/ai/chat/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/ai/chat/route.ts) | Upgrade existing chatbot system prompt to add question-reformation before answering |
| **Judgment Log UI** | [angry-debunkers/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/angry-debunkers/page.tsx) | Add collapsible "Judgment Log" panel showing: sources cited, confidence per claim, fallacies checked, conflict scan result |
| **Guidelines Lock** | `src/lib/debunking/guidelines.ts` (NEW) | PRISMA/CONSORT/COPE checklist + Amman Message/IIFA/AAOIFI rules as TypeScript constants imported by God-System |
| **Gold-Standard Frameworks** | [api/defense/hadith-check/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/defense/hadith-check/route.ts) | Already has Muhaddith persona. Add: mandatory 4-Madhhab comparison, Amman Message compliance check, Maqasid filter |
| **Emotional Trigger Hunter** | [lib/nlp/sentiment-engine.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/lib/nlp/sentiment-engine.ts) | Already has VADER + crisis detection. Add: V_intent = α(Fear) + β(Guilt) + γ(Superiority) + δ(Isolation) scoring |

---

### 🎯 FALLACY DETECTION ENGINE — Applied to BOTH Scientific AND Islamic

> **Rule 5 enforced here.** Every output from God-System, Hadith Check, Quran Context, Fatwa Context, Paper Auditor, Drug Checker — ALL pass through this engine.

**File:** NEW `src/lib/debunking/fallacy-engine.ts` — imported by God-System + all Islamic analyzers + all scientific tools

#### Scientific Fallacies (25 Detection Rules)

| # | Fallacy | What It Catches | Example |
|---|---------|----------------|--------|
| F1 | **Post Hoc Ergo Propter Hoc** | "I took vitamin X, then I healed, therefore X cured me" | Correlation ≠ causation |
| F2 | **Cherry-Picking (Texas Sharpshooter)** | Selecting only data that confirms hypothesis, hiding contradicting data | "5 studies say X" (hiding 50 that don't) |
| F3 | **Appeal to Nature** | "Natural = good, synthetic = bad" | "Herbal medicine is better because it's natural" |
| F4 | **Appeal to Authority** | Using PhD/title instead of evidence | "Dr. X on TV said" without peer review |
| F5 | **P-Hacking / Data Dredging** | Running multiple tests until p < 0.05 by chance | p-value clusters near 0.05 |
| F6 | **Survivorship Bias** | Looking only at successes, ignoring failures | "Steve Jobs dropped out and succeeded" |
| F7 | **Ecological Fallacy** | Applying group statistics to individuals | "Country X has high IQ therefore person Y is smart" |
| F8 | **Simpson's Paradox** | Trend in subgroups reverses when combined | Treatment works in men AND women separately but "fails" combined |
| F9 | **Base Rate Neglect** | Ignoring prevalence when evaluating test results | "99% accurate test" on rare disease |
| F10 | **False Equivalence** | Treating two unequal things as equal | "Both sides have a point" (climate deniers vs scientists) |
| F11 | **Nirvana Fallacy** | Rejecting imperfect solution for nonexistent perfect one | "Vaccines aren't 100% effective, so don't take them" |
| F12 | **Correlation Illusion** | Seeing patterns in random data | "Since I started praying, stock market went up" |
| F13 | **Regression to the Mean** | Extreme values naturally regress | "I felt terrible, tried X, now feel normal" (was going to anyway) |
| F14 | **Publication Bias** | Only positive results published | File drawer problem |
| F15 | **Genetic Fallacy** | Judging claim by its origin not content | "That research comes from China so it's fake" |
| F16 | **Appeal to Novelty** | "New = better" without evidence | "Latest supplement breakthrough" |
| F17 | **Sunk Cost Fallacy** | Continuing because of investment, not merit | "I've been taking this for years, can't stop now" |
| F18 | **Dunning-Kruger in Claims** | Low-expertise person makes expert-level claims | Facebook user "debunks" peer-reviewed paper |
| F19 | **Anecdotal Evidence** | Single story overrides statistical data | "My uncle smoked and lived to 90" |
| F20 | **Moving the Goalposts** | Changing criteria when original claim disproven | "OK the earth isn't flat, but the moon landing was fake" |
| F21 | **Slippery Slope** | A leads to Z without proving intermediate steps | "If we allow X, society will collapse" |
| F22 | **Straw Man** | Misrepresenting opponent's position | "Scientists say humans came from monkeys" |
| F23 | **Ad Hominem** | Attacking the person instead of the argument | "He's funded by pharma, so his data is wrong" (without checking data) |
| F24 | **Bandwagon** | "Everyone believes it so it's true" | "Millions use homeopathy" |
| F25 | **False Dilemma** | Presenting only 2 options when more exist | "Either you trust science or you trust God" |

#### Islamic Fallacies (25 Detection Rules)

| # | Fallacy | What It Catches | Example |
|---|---------|----------------|--------|
| IF1 | **Tahrif (Semantic Distortion)** | Twisting Arabic word meaning to change ruling | Redefining "Qiwamah" as tyranny |
| IF2 | **Context Stripping (Asbab al-Nuzul removal)** | Quoting verse without its revelation context | Sword verses without treaty breach context |
| IF3 | **Unauthorized Takfir** | Declaring Muslims as disbelievers without authority | "If you do X, you're no longer Muslim" |
| IF4 | **Madhab Shopping** | Cherry-picking strictest opinion from different schools | Taking harshest view of each topic from different Madhabs |
| IF5 | **Abrogation Fraud (Nasikh/Mansukh)** | Citing abrogated rulings as current law | Using cancelled ruling to justify practice |
| IF6 | **Fabricated Hadith Citation** | Using known fabricated narrations as evidence | Mawdu' hadith presented as Sahih |
| IF7 | **Weak Hadith as Legislation** | Using Da'if hadith for binding rulings | Weak narration used to obligate practice |
| IF8 | **Scholarly Cosplay** | Unqualified person issuing fatwa | YouTuber without Ijazah giving religious rulings |
| IF9 | **Cultural Masking (Urf as Shariah)** | Disguising cultural custom as divine law | "Women can't drive/work" = culture, not Islam |
| IF10 | **Selective Compassion** | Showing mercy in one area while brutal in another | "Islam is peace" while justifying honor killing |
| IF11 | **Historical Anachronism** | Applying past-context ruling to modern situation | 7th-century warfare ruling applied to neighbor |
| IF12 | **Forced Concordism** | Making Quran "predict" modern science | "The Quran described embryology before science" (forced reading) |
| IF13 | **Spiritual Gaslighting** | Using faith to deny medical/psychological needs | "Just pray more" for clinical depression |
| IF14 | **Weaponized Birr al-Walidayn** | Using parental obedience to justify abuse | Parents stealing adult child's salary "because Islam" |
| IF15 | **Emotional Blackmail via Afterlife** | Using hellfire threats to control behavior | "If you don't obey me, you'll go to hell" |
| IF16 | **Ijma Fraud** | Claiming scholarly consensus where none exists | "All scholars agree" when they don't |
| IF17 | **Qiyas Corruption** | Invalid analogical reasoning | False analogy between unrelated cases |
| IF18 | **Maqasid Inversion** | Using objectives of Shariah to justify their opposite | "Preserving religion" used to destroy intellect |
| IF19 | **Takfir by Implication** | Indirect excommunication through loaded questions | "Are you saying you know better than Allah?" |
| IF20 | **Decontextualized Ijma** | Using historical consensus without acknowledging changed conditions | Medieval market ruling applied to modern finance |
| IF21 | **Bid'ah Weaponization** | Labeling any new practice as heresy to maintain control | "Celebrating birthdays is haram" |
| IF22 | **Gender Weaponization** | Using biology + religion to subjugate | Evo-psych + Quran 4:34 = "wife is property" |
| IF23 | **Economic Isolation** | "All banking = Riba" → financial paralysis | Forbidding all modern finance without alternative |
| IF24 | **Sectarian Othering** | "Only our group is saved" | Excluding 90% of Muslims as deviant |
| IF25 | **Authority Transfer** | Sheikh's personal opinion presented as God's command | "The sheikh said" = "God said" |

**Implementation:** `fallacy-engine.ts` exports a `detectFallacies(text: string, domain: 'scientific' | 'islamic' | 'both')` function. Called by God-System post-processing.

---

### 🧪 SCIENTIFIC EFFECTS & COGNITIVE BIASES — Active Detection Layer

> These aren't just educational content. They are **active detection tools** that run on every claim analysis.

**File:** Upgrade existing [cognitive-knowledge.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/data/research/cognitive-knowledge.ts) (687 entries) + NEW `src/lib/cognitive/bias-detector.ts`

#### Cognitive Biases Applied to BOTH Pillars

| # | Bias/Effect | Scientific Application | Islamic Application | Detection Method |
|---|-----------|----------------------|---------------------|------------------|
| E1 | **Confirmation Bias** | User only searches for papers supporting their view | User only quotes verses supporting their position | Track search patterns in session |
| E2 | **Dunning-Kruger Effect** | Non-expert makes expert claims | Unqualified person issues fatwa | Check claim complexity vs user profile |
| E3 | **Anchoring Effect** | First number seen dominates judgment | First hadith heard becomes the "truth" | Detect if first-cited source dominates output |
| E4 | **Availability Heuristic** | Recent news = more important than data | Recent viral sheikh = more authoritative | Compare recency vs evidence weight |
| E5 | **Bandwagon Effect** | "Everyone believes this study" | "All Muslims do X" | Detect popularity claims without evidence |
| E6 | **Authority Bias** | "PhD said it, must be true" | "Sheikh said it, must be true" | Check if authority cited without evidence |
| E7 | **Backfire Effect** | Correcting belief makes it stronger | Correcting religious misunderstanding causes defensiveness | Detect defensive query patterns |
| E8 | **Illusory Correlation** | See patterns in random health data | "I prayed and the rain came" | Statistical independence check |
| E9 | **Framing Effect** | "90% survival" vs "10% death" — same data, different reactions | "Jihad means holy war" vs "Jihad means struggle" — same word, manipulated framing | Detect emotional framing in text |
| E10 | **Sunk Cost** | "I've been doing this treatment for years" | "I've followed this sheikh for 20 years" | Detect investment-based reasoning |
| E11 | **Halo Effect** | Attractive doctor = more trustworthy | Charismatic preacher = more authoritative | Detect charisma-based authority claims |
| E12 | **Normalcy Bias** | "It won't happen to me" — ignoring health risks | "Our community is fine" — ignoring radicalization signs | Detect minimization language |
| E13 | **In-Group Bias** | "Our researchers are better" | "Our Madhab is the only correct one" | Detect tribalistic language patterns |
| E14 | **Peak-End Rule** | Judging study by its conclusion, ignoring methodology | Judging sermon by emotional ending, ignoring content | Detect conclusion-only citing |
| E15 | **Mere Exposure Effect** | Repeated claim feels true | Repeated verse without context feels absolute | Track repetition frequency |

**Interactive Tools (Existing + New):**

| Tool | File | Status | What It Does |
|------|------|--------|-------------|
| Bias Fingerprint | [bias-fingerprint/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/bias-fingerprint/page.tsx) | ✅ EXISTS (381 lines) | Assess user's own biases — NEEDS connection to Islamic + Scientific contexts |
| Reaction Test | [reaction-test/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/reaction-test/page.tsx) | ✅ EXISTS (404 lines) | Speed-based cognitive test — NEEDS Islamic/Scientific test scenarios |
| Cognitive Bias Lab | NEW: `src/app/cognitive-lab/page.tsx` | ❌ BUILD | 15 interactive experiments proving each bias above with BOTH scientific AND Islamic examples |
| Manipulation Technique Cards | NEW: `src/app/manipulation-cards/page.tsx` | ❌ BUILD | 14 Cranky Uncle-style interactive cards showing techniques used in BOTH domains |

---

### 🏛️ PHILOSOPHY TOOLS — Critical Thinking Framework

> Philosophy is NOT a separate section. It is the **operating system** running under every tool.

**Existing:** [philosophy/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/philosophy/page.tsx) (210 lines) — explains the platform's philosophy

**What's MISSING:**

| # | Philosophy Tool | File | Applied To |
|---|----------------|------|------------|
| P1 | **Socratic Method Engine** | Upgrade [api/ai/chat/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/ai/chat/route.ts) | BOTH — Before answering any query, the chatbot asks clarifying questions to fix brittle prompts. "Are you asking about X or Y?" |
| P2 | **Epistemology Dashboard** | NEW: `src/app/epistemology/page.tsx` | BOTH — Interactive page showing: How do we KNOW something? Scientific method vs Islamic Usul vs logical proof. Side-by-side methodology comparison. |
| P3 | **Methodology Transparency** | Add to angry-debunkers output panel | BOTH — Every output shows: (1) How the conclusion was reached, (2) What logic rules were applied, (3) What was checked and passed, (4) What could be wrong |
| P4 | **Epistemic Humility Visualizer** | Component in all output panels | BOTH — Dynamic confidence intervals: "We are 87% confident because..." with visual bar showing uncertainty |
| P5 | **Critical Thinking Ladder** | NEW: `src/app/critical-thinking/page.tsx` | BOTH — Interactive 6-step ladder: Claim → Source → Methodology → Data → Logic → Conclusion. User walks through ANY claim using this framework. |
| P6 | **Debate Simulator** | NEW: `src/app/debate-sim/page.tsx` | BOTH — User presents a claim, AI plays Devil's Advocate using all 50 fallacies. Teaches steel-manning. |
| P7 | **Method Mapper** | Component in evidence + religion pages | BOTH — Visual comparison: Peer Review ↔ Mustalah al-Hadith, Lab Replication ↔ Multiple Isnad Chains, Meta-Analysis ↔ Ijma. Shows the UNIVERSAL language of verification. |
| P8 | **Charisma-Neutral Viewport** | Toggle on all analysis pages | BOTH — Strips video/audio → shows ONLY raw textual logic. Removes emotional manipulation layer. |

---

### 🔬🕌 CROSS-PILLAR INTEGRATION — Everything Applied to BOTH

> This is the CONNECT pillar in action. Scientific tools use Islamic awareness. Islamic tools use scientific methodology.

| # | System | How It Applies to Scientific | How It Applies to Islamic |
|---|--------|-------|--------|
| X1 | **Fallacy Engine** | Detects 25 scientific fallacies in paper claims | Detects 25 Islamic fallacies in religious claims |
| X2 | **Cognitive Bias Detector** | Detects biases in health/science claims | Detects biases in religious interpretations |
| X3 | **Guidelines Lock** | Validates against PRISMA/CONSORT/COPE/FAIR | Validates against Amman Message/IIFA/AAOIFI/Wathiqat |
| X4 | **Emotional Trigger Hunter** | Detects fear-mongering in medical claims | Detects spiritual gaslighting in religious claims |
| X5 | **Authority Deconstruction** | "Dr. X said" → check credentials + methodology | "Sheikh Y said" → check Ijazah + evidence |
| X6 | **Methodology Transparency** | Shows sample size, p-value, funding | Shows Isnad chain, hadith grade, Madhhab context |
| X7 | **Socratic Parser** | Fixes brittle science questions before answering | Fixes emotionally loaded Islamic questions before answering |
| X8 | **Confidence Intervals** | "This study is 83% reliable because N=5000" | "This hadith is 95% authentic: Sahih, multiple chains" |
| X9 | **Philosophy (Method Mapper)** | Peer Review process explained | Mustalah al-Hadith process explained → shown as PARALLEL |
| X10 | **Inoculation** | Prebunking science denial techniques | Prebunking religious manipulation techniques |

---

## 📊 REALITY SCORECARD

### Current: What "Strongest Possible" Looks Like vs What We Have

#### SCIENTIFIC PLATFORM

| Capability | World's Strongest Would Have | EAL Has | Gap |
|-----------|----------------------------|---------|-----|
| Academic paper search | PubMed + Semantic Scholar + OpenAlex + arXiv + CORE + Crossref + EuropePMC | PubMed + Semantic Scholar + OpenAlex + Crossref + EuropePMC (5/7) | arXiv, CORE |
| Drug safety | openFDA + DailyMed + RxNorm | ❌ None | ALL 3 |
| Health data | WHO GHO (1000+ indicators) | ❌ None | WHO |
| Evidence aggregation | Multi-source federated search UI | ✅ API exists (5 APIs!) but UI is 22 lines | UI is a stub |
| Deepfake detection | Real forensic analysis | ⚠️ Simulated fallback mode | Need client-side ELA |
| Methodology audit | PRISMA/CONSORT checker | ❌ None | Paper auditor |
| Media forensics | EXIF + ELA + C2PA + reverse image | ⚠️ All in fallback mode | Client-side tools |
| Decision support | Protocol engine | ✅ 478-line real engine | Done |
| Negative science DB | 100+ structured markers | ⚠️ Only 20 entries | Need 80 more |
| AI-powered analysis | God-System 7-layer pipeline | ✅ Production-grade | Done |
| Games/training | Misinformation games | ✅ 6-mode game arena | Done |

**Scientific Score: 6/11 capabilities fully functional**

#### ISLAMIC PLATFORM

| Capability | World's Strongest Would Have | EAL Has | Gap |
|-----------|----------------------------|---------|-----|
| Quran search | Full Quran + Tafsir + word-by-word | ✅ AlQuran.cloud search (3 modes) but NO Tafsir | Tafsir, Quran.com v4 |
| Hadith search | ALL 17+ books searchable | ⚠️ Only 13 local hadiths without API keys | fawazahmed0 free API |
| Hadith authentication | AI-powered isnad analysis | ✅ Full Gemini-powered checker | Done |
| Quran context tool | Asbab al-Nuzul + Nasikh/Mansukh | ❌ STUB — "Coming Soon" | Build it |
| Scholar verification | Check credentials | ❌ STUB — "Coming Soon" | Build it |
| Fatwa context | Multi-Madhhab comparison | ❌ STUB — "Coming Soon" | Build it |
| Sectarian detection | Detect extremist rhetoric | ❌ STUB — "Coming Soon" | Build it |
| Prayer times + Qibla | AlAdhan integration | ❌ None | Free API available |
| Zakat calculator | AAOIFI-compliant | ❌ None | Client-side math |
| Inheritance calculator | Quranic formula | ❌ None | Client-side math |
| Islamic finance | Halal compliance check | ❌ None | AI agent |
| 14-day exercises | Progressive training | ✅ Full program with scoring | Done |

**Islamic Score: 3/12 capabilities fully functional**

---

## 🗺️ BUILD ORDER — Maximum Impact, Concrete Files

### PHASE 1: UPGRADE EXISTING (Fix what's broken — 1-2 sessions)

| # | Task | Exact File | What Changes | Impact |
|---|------|-----------|-------------|--------|
| 1.1 | **Upgrade Hadith API to FREE 17+ books** | Modify [api/islamic/hadith/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/islamic/hadith/route.ts) | Add fawazahmed0 GitHub CDN as Tier 0 (before existing tiers). URL: `cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@main/editions/`. Free, no key, 17+ books. | 🕌 13 hadiths → ALL major collections |
| 1.2 | **Upgrade Quran API to v4 + Tafsir** | Modify [api/islamic/quran/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/islamic/quran/route.ts) | Add `api.quran.com/api/v4/` alongside AlQuran.cloud. Add tafsir mode using `/resources/tafsirs`. | 🕌 Gets Tafsir capability |
| 1.3 | **Create Tafsir API route** | NEW: `src/app/api/islamic/tafsir/route.ts` | Call `api.quran-tafseer.com/tafseer/` — returns Ibn Kathir, Al-Jalalayn for any verse | 🕌 Tafsir engine online |
| 1.4 | **Create Prayer/Qibla API** | NEW: `src/app/api/islamic/prayer/route.ts` | Call `api.aladhan.com/v1/timings` + `/qibla` — free, no key | 🕌 Prayer times live |
| 1.5 | **Add arXiv to evidence route** | Modify [api/search/evidence/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/search/evidence/route.ts) | Add `export.arxiv.org/api/query` as 6th parallel source | 🔬 Preprint access |
| 1.6 | **Add CORE to evidence route** | Same file | Add `api.core.ac.uk/v3/search/works` as 7th parallel source | 🔬 World's largest OA |
| 1.7 | **Upgrade evidence page from 22 lines** | Rewrite [evidence/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/evidence/page.tsx) | Build proper search UI: input field, source toggles (7 APIs), results with trust badges, citation counts, open-access links, sorting | 🔬🔗 **Flagship scientific search** |

**After Phase 1: Scientific 8/11, Islamic 7/12. Evidence page becomes the platform's crown jewel.**

### PHASE 2: BUILD THE 4 ISLAMIC STUBS (1-2 sessions)

| # | Task | Exact File | What It Does | API |
|---|------|-----------|-------------|-----|
| 2.1 | **Build Quran Context Tool** | Rewrite [tools/quran-context/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/quran-context/page.tsx) from 54-line stub | Input: verse reference → Output: Arabic text + translation + Tafsir (Ibn Kathir + Al-Jalalayn) + Asbab al-Nuzul + Nasikh/Mansukh status | Existing quran API + new tafsir API |
| 2.2 | **Build Authority Verifier** | Rewrite [tools/authority-verifier/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/authority-verifier/page.tsx) | Input: scholar name → Output: qualifications, institution, methodology, known positions, Al-Azhar alignment score | Gemini rotator (existing) |
| 2.3 | **Build Fatwa Context Tool** | Rewrite [tools/fatwa-context/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/fatwa-context/page.tsx) | Input: fatwa text → Output: 4-Madhhab comparison, Maqasid analysis, historical context, IIFA ruling if exists | Gemini rotator (existing) |
| 2.4 | **Build Sectarian Detector** | Rewrite [tools/sectarian-detector/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/religion-hub/tools/sectarian-detector/page.tsx) | Input: text → Output: Takfir detection, Amman Message compliance, extremism indicators, deradicalization resources | Gemini rotator + sentiment engine |

**After Phase 2: Islamic 11/12. All tools functional. Only Zakat/Mawarith/Finance calculators remain.**

### PHASE 3: CONNECT ALL FREE APIs (1-2 sessions)

| # | Task | Exact File | API | Key? |
|---|------|-----------|-----|------|
| 3.1 | **openFDA drug safety** | NEW: `src/app/api/medical/openfda/route.ts` | `api.fda.gov/drug/event.json` | No |
| 3.2 | **DailyMed drug labels** | NEW: `src/app/api/medical/dailymed/route.ts` | `dailymed.nlm.nih.gov/dailymed/services/v2/spls.json` | No |
| 3.3 | **RxNorm drug names** | NEW: `src/app/api/medical/rxnorm/route.ts` | `rxnav.nlm.nih.gov/REST/drugs.json` | No |
| 3.4 | **WHO health data** | NEW: `src/app/api/medical/who/route.ts` | `ghoapi.azureedge.net/api/` | No |
| 3.5 | **Drug Checker page** | NEW: `src/app/drug-checker/page.tsx` | Calls openFDA + DailyMed + RxNorm in parallel | — |
| 3.6 | **Health Data page** | NEW: `src/app/health-data/page.tsx` | WHO GHO indicators by country | — |

**After Phase 3: Scientific 10/11. Medical data fully connected. 4 new API routes. 2 new pages.**

### PHASE 4: OTHERS SEARCH + KILL LIST + TREND HUNTER (1-2 sessions)

| # | Task | Exact File | Connects To |
|---|------|-----------|-------------|
| 4.1 | **OTHERS SEARCH** | NEW: `src/app/others-search/page.tsx` | Calls ALL existing routes in parallel: evidence (7 APIs) + ncbi + factcheck + claimbuster + mediawiki + archive + quran + hadith. **ZERO new backend code.** Toggle sources on/off. |
| 4.2 | **KILL LIST** | NEW: `src/app/kill-list/page.tsx` + `src/data/research/kill-list.ts` | Structured debunked claims: claim text + verdict + evidence sources + KEYHUNTER method used + date killed |
| 4.3 | **TREND HUNTER** | NEW: `src/app/trend-hunter/page.tsx` | Calls factcheck API + existing search for trending claims. Shows what's spreading NOW. |
| 4.4 | **WhatsApp Analyzer** | NEW: `src/app/whatsapp-analyzer/page.tsx` | Paste text → existing sentiment engine + God-System quick mode. Detects forwarded message patterns. |

**After Phase 4: 4 major Omar features built. OTHERS SEARCH is the federated search no Arabic platform has.**

### PHASE 5: MEDICAL LIFE + BLACKBOX ENGINES (2-3 sessions)

| # | Task | Exact File | Data Pattern |
|---|------|-----------|-------------|
| 5.1 | **Medical Life Engine page** | NEW: `src/app/medical-life/page.tsx` | ModuleOperatingShell like deepreal/mental-health |
| 5.2 | **Medical Life data** | NEW: `src/data/keyhunter/medical-life-entries.ts` | Combinatorial: 10 medical foundations × 10 lenses = 100 entries (same pattern as cognitive-knowledge.ts) |
| 5.3 | **Medical Life exercises** | NEW: `src/app/medical-life/exercise/[day]/page.tsx` | 14-day program like religion-hub exercises |
| 5.4 | **BLACKBOX Engine page** | NEW: `src/app/blackbox/page.tsx` | AI transparency visualizer — shows God-System pipeline in real-time |
| 5.5 | **BLACKBOX data** | NEW: `src/data/keyhunter/blackbox-entries.ts` | Combinatorial: 10 categories × 50 templates = 500 scenarios |
| 5.6 | **KEYHUNTER gap fill** | Modify [data/keyhunter/](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/data/keyhunter) files | Add remaining 233 entries to reach 1,150 target |

**After Phase 5: All 5 engines operational. KEYHUNTER at 100%.**

### PHASE 6: COVO JUDGMENT + GUIDELINES + FALLACIES + PHILOSOPHY (2-3 sessions)

> [!IMPORTANT]
> This phase is THE SOUL of the platform. It turns raw tools into an intelligent, self-aware system.

| # | Task | Exact File | What Changes |
|---|------|-----------|-------------|
| 6.1 | **Guidelines Lock (Scientific + Islamic)** | NEW: `src/lib/debunking/guidelines.ts` | Export ALL guidelines as TypeScript constants: PRISMA checklist (27 items), CONSORT checklist (25 items), COPE rules, FAIR principles, Amman Message (3 pillars), IIFA resolutions index, AAOIFI rules, Maqasid al-Shariah (5 objectives), Usul al-Fiqh rules. Imported by God-System + ALL analyzer routes. |
| 6.2 | **Fallacy Engine (50 rules)** | NEW: `src/lib/debunking/fallacy-engine.ts` | `detectFallacies(text, domain)` — 25 scientific + 25 Islamic fallacies. Returns array of detected fallacies with names, explanations, and examples. Called by God-System post-processing AND all Islamic tool routes. |
| 6.3 | **Cognitive Bias Detector** | NEW: `src/lib/cognitive/bias-detector.ts` | `detectBiases(query, response, context)` — 15 cognitive biases detected in real-time. Applied to BOTH scientific AND Islamic outputs. |
| 6.4 | **Negative Prompt Layers** | Modify [god-system.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/lib/debunking/god-system.ts) | Add NEG-01 to NEG-07 + PSY-201 to PSY-205 to system prompt. Import guidelines.ts + fallacy-engine.ts. |
| 6.5 | **Emotional Trigger Hunter** | Modify [sentiment-engine.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/lib/nlp/sentiment-engine.ts) | Add V_intent = α(Fear) + β(Guilt) + γ(Superiority) + δ(Isolation). Applied to BOTH pillars. |
| 6.6 | **Judgment Log UI** | Modify [angry-debunkers/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/angry-debunkers/page.tsx) | Add collapsible panel: sources, confidence per claim, fallacies checked, biases detected, guidelines compliance, conflict scan |
| 6.7 | **Socratic Parser** | Modify [api/ai/chat/route.ts](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/api/ai/chat/route.ts) | Question-reformation before answering. Detects brittle/loaded questions in BOTH scientific AND Islamic domains. |
| 6.8 | **Methodology Transparency** | Add component to angry-debunkers + religion-hub tools + evidence page | Every output shows HOW conclusion was reached: logic applied, what passed, what could be wrong |
| 6.9 | **Epistemic Humility Visualizer** | Shared component: `src/components/shared/confidence-indicator.tsx` | Dynamic confidence bar with percentage + reasoning. Used by ALL analysis pages. |
| 6.10 | **Wire Cognitive Pages to Pillars** | Modify [bias-fingerprint/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/bias-fingerprint/page.tsx) + [reaction-test/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/reaction-test/page.tsx) | Add Islamic AND Scientific scenarios to existing tests. Currently generic — make domain-specific. |

### PHASE 6B: PHILOSOPHY + COGNITIVE INTERACTIVE TOOLS (1-2 sessions)

| # | Task | Exact File | Applies To |
|---|------|-----------|------------|
| 6B.1 | **Cognitive Bias Lab** | NEW: `src/app/cognitive-lab/page.tsx` | BOTH — 15 interactive experiments proving biases with scientific AND Islamic examples |
| 6B.2 | **Manipulation Technique Cards** | NEW: `src/app/manipulation-cards/page.tsx` | BOTH — 14 Cranky Uncle-style cards for BOTH scientific denial AND religious manipulation |
| 6B.3 | **Critical Thinking Ladder** | NEW: `src/app/critical-thinking/page.tsx` | BOTH — 6-step framework: Claim→Source→Methodology→Data→Logic→Conclusion |
| 6B.4 | **Debate Simulator** | NEW: `src/app/debate-sim/page.tsx` | BOTH — User presents claim, AI plays Devil's Advocate using all 50 fallacies |
| 6B.5 | **Epistemology Dashboard** | NEW: `src/app/epistemology/page.tsx` | BOTH — How do we KNOW? Scientific method vs Islamic Usul vs logical proof side-by-side |
| 6B.6 | **Method Mapper** | NEW component: `src/components/shared/method-mapper.tsx` | BOTH — Visual: Peer Review ↔ Mustalah al-Hadith, Lab Replication ↔ Multiple Isnad, Meta-Analysis ↔ Ijma |
| 6B.7 | **Charisma-Neutral Toggle** | Add toggle to angry-debunkers + chatbot + religion tools | BOTH — Strips emotional content, shows ONLY raw logical structure |

### PHASE 7: REMAINING OMAR FEATURES + PREMIUM (2-3 sessions)

| # | Feature | File | Connects To |
|---|---------|------|-------------|
| 7.1 | Islamic Calculators (Zakat + Mawarith) | NEW: `src/app/religion-hub/tools/zakat-calculator/page.tsx` + `mawarith/page.tsx` | Client-side math, AAOIFI formulas |
| 7.2 | Debunk Game upgrade | Rewrite [bad-news/page.tsx](file:///c:/Users/pc/Desktop/EGY/New%20folder%20(20)/egyptian-awareness-library/src/app/bad-news/page.tsx) (5 lines!) | Add Egyptian scenarios, connect to mastery system |
| 7.3 | Media Library | NEW: `src/app/media-library/page.tsx` | Shows/films cross-referenced with KEYHUNTER |
| 7.4 | Python Scripts download | NEW: `src/app/tools-download/page.tsx` | Downloadable verification scripts |
| 7.5 | Connect (Community) | NEW: `src/app/connect/page.tsx` | XP engine + leaderboard |
| 7.6 | Code/Open Source | NEW: `src/app/open-source/page.tsx` | Architecture documentation page |
| 7.7 | PWA Offline | NEW: `public/sw.js` + next config | Cache medical + crisis for offline |
| 7.8 | Women's Shield | NEW: `src/app/womens-shield/page.tsx` | Gender-specific defense |
| 7.9 | Men's Crisis Shield | NEW: `src/app/mens-shield/page.tsx` | Male mental health |
| 7.10 | Knowledge Graph | NEW: `src/app/knowledge-graph/page.tsx` | D3 force graph of KEYHUNTER |

---

## 📈 PROGRESS TRACKER

| Metric | NOW | Ph1 | Ph2 | Ph3 | Ph4 | Ph5 | Ph6 | Ph6B | Ph7 | FINAL |
|--------|-----|-----|-----|-----|-----|-----|-----|------|-----|-------|
| Scientific Score | 6/11 | 8/11 | 8/11 | 10/11 | 10/11 | 11/11 | 11/11 | 11/11 | 11/11 | **11/11** |
| Islamic Score | 3/12 | 7/12 | 11/12 | 11/12 | 11/12 | 11/12 | 11/12 | 11/12 | 12/12 | **12/12** |
| API routes | 45 | 49 | 49 | 53 | 53 | 53 | 53 | 53 | 53 | **53+** |
| Free APIs (no key) | 7 | 13 | 13 | 17 | 17 | 17 | 17 | 17 | 17 | **17+** |
| Pages | 64 | 64 | 64 | 66 | 70 | 74 | 74 | 81 | 91 | **91+** |
| KEYHUNTER entries | 917 | 917 | 917 | 917 | 917 | 1,150 | 1,150 | 1,150 | 1,150 | **1,150+** |
| Engines | 3/5 | 3/5 | 3/5 | 3/5 | 3/5 | 5/5 | 5/5 | 5/5 | 5/5 | **5/5** |
| Islamic tools working | 1/5 | 1/5 | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 7/7+ | **7/7+** |
| Islamic STUBS | 4 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** |
| **Guidelines Lock** | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 | **15/15** | 15/15 | 15/15 | **15/15** |
| **Fallacy Detection** | 0/50 | 0/50 | 0/50 | 0/50 | 0/50 | 0/50 | **50/50** | 50/50 | 50/50 | **50/50** |
| **Cognitive Bias Detector** | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 | **15/15** | 15/15 | 15/15 | **15/15** |
| **Philosophy Tools** | 1/8 | 1/8 | 1/8 | 1/8 | 1/8 | 1/8 | 4/8 | **8/8** | 8/8 | **8/8** |
| **Cross-Pillar Integration** | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 | **7/10** | **10/10** | 10/10 | **10/10** |
| COVO layers | 0 | 0 | 0 | 0 | 0 | 0 | **10+** | 17+ | 17+ | **17+** |
| Omar features | 0/15 | 0/15 | 0/15 | 0/15 | 4/15 | 6/15 | 6/15 | 6/15 | 15/15 | **15/15** |

---

## ✅ VERIFICATION PLAN

| Test | Command/Method | Pass |
|------|---------------|------|
| Build | `npm run build` | 0 errors |
| All Islamic tools work | Visit each tool page, submit test input | No "Coming Soon" |
| Evidence search returns from 7 APIs | Search "climate change" → check source badges | 7 different source labels |
| Hadith search returns 17+ books | Search common hadith → check book diversity | Results from Bukhari, Muslim, Tirmidhi, etc. |
| Drug checker works | Search "aspirin" → openFDA + DailyMed results | Drug info displayed |
| OTHERS SEARCH works | Search "vaccines" → results from all sources | 10+ sources in one UI |
| Offline medical works | Disable network → open medical page | Crisis data loads |
| Arabic RTL | Check all pages | No breaks |
| Deploy | Git push → Vercel auto-deploy | Live URL works |

---

## 🚨 DEVELOPER CONSTITUTION — STRICT ENFORCEMENT FOR ALL BUILDERS

> [!CAUTION]
> **This section is for ANY AI model or developer building features for this platform.**
> Breaking these rules = the feature is REJECTED. No exceptions.

### PHILOSOPHY ALIGNMENT — Every Feature Must Answer These

Before writing ANY code, the builder MUST answer:

1. **"Does this give the user a WEAPON against misinformation?"** → If no, don't build it.
2. **"Does this make the user SMARTER, not just entertained?"** → If no, redesign it.
3. **"Can this feature be exploited to SPREAD misinformation?"** → If yes, add kill-switch.
4. **"Does this connect to ≥2 existing systems?"** → If no, it's orphaned — redesign.
5. **"Is the output transparent — can the user see HOW the conclusion was reached?"** → If no, add methodology panel.

---

### ❌ NEGATIVE PROMPTS — WHAT YOU MUST NEVER DO

#### NEVER DO — Code Quality

```
❌ NEVER create a page.tsx that is just a component wrapper with no logic
❌ NEVER create a page that says "Coming Soon" or "Under Construction"
❌ NEVER use placeholder data when a free API exists
❌ NEVER hardcode more than 5 example items — use API calls for real data
❌ NEVER create a UI without a corresponding API route that fetches REAL data
❌ NEVER use console.log as the only error handling — use try/catch + ERR helpers
❌ NEVER skip the `withSearchCache` wrapper on API routes — ALL routes must cache
❌ NEVER skip bilingual support — every user-visible string needs English AND Arabic
❌ NEVER create a form without loading state, error state, and empty state
❌ NEVER ignore the existing NormalizedAPIResponse type — ALL search results use it
❌ NEVER add a new npm dependency without explicit justification
❌ NEVER modify angry-debunkers/page.tsx to add new features (Hub-and-Spoke Rule 1)
```

#### NEVER DO — Scientific Integrity

```
❌ NEVER display a scientific claim without its source
❌ NEVER show a study without sample size (N) when available
❌ NEVER show a p-value without context (what test, what N)
❌ NEVER present a single study as "proof" — always say "evidence suggests"
❌ NEVER use the word "proves" for any scientific finding
❌ NEVER display drug information without a medical disclaimer
❌ NEVER let AI generate medical advice — only verified API data
❌ NEVER skip the PRISMA/CONSORT guideline check on paper analysis
❌ NEVER show "Trust Score: 100%" — maximum is 95% with explanation
```

#### NEVER DO — Islamic Integrity

```
❌ NEVER display a hadith without its grade (Sahih/Hasan/Da'if/Mawdu')
❌ NEVER display a Quran verse without surah name + ayah number
❌ NEVER issue a fatwa or religious ruling — always say "consult qualified scholars"
❌ NEVER present one Madhhab's opinion as THE Islamic position
❌ NEVER force science to "prove" Quran (No Concordism — Rule 2)
❌ NEVER force Quran to "validate" science (No Concordism — Rule 2)
❌ NEVER allow Takfir in any form — Amman Message enforced
❌ NEVER present cultural customs as Islamic law
❌ NEVER skip the Arabic text when showing Quran — always show Arabic + translation
❌ NEVER let AI generate Islamic rulings — only reference established scholarly opinions
```

#### NEVER DO — Architecture

```
❌ NEVER create a page with fewer than 100 lines — if it's that short, it's a stub
❌ NEVER create an API route that returns mock/simulated data when a free API exists
❌ NEVER duplicate existing API logic — import and reuse existing route functions
❌ NEVER skip error boundaries — every page must handle API failures gracefully
❌ NEVER create a standalone feature — it MUST link to ≥2 existing pages
❌ NEVER skip the disclaimer — medical pages need medical disclaimers, Islamic pages need "consult scholars" disclaimers
```

---

### ✅ MANDATORY PATTERNS — Copy These Exactly

#### Pattern 1: API Route Template (ALL new routes MUST follow this)

```typescript
// TEMPLATE: src/app/api/{domain}/{name}/route.ts
import { NextResponse } from "next/server";
import { ERR } from "@/lib/api/api-error";
import { withSearchCache } from "@/lib/api/search-cache";

// 1. Define the REAL external API URL — NO mocks
const EXTERNAL_API_URL = "https://real-api.example.com/v1/endpoint";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  // 2. Input validation — ALWAYS
  if (!query) {
    return ERR.missingQuery();
  }

  try {
    // 3. Cache — ALWAYS wrap with withSearchCache
    const results = await withSearchCache(
      `domain:name:${query.toLowerCase()}`,
      1000 * 60 * 30, // 30 min cache minimum
      async () => {
        // 4. REAL API call — NEVER simulated
        const res = await fetch(`${EXTERNAL_API_URL}?q=${encodeURIComponent(query)}`, {
          headers: { "User-Agent": "EgyptianAwarenessLibrary/1.0" },
          next: { revalidate: 1800 },
        });

        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        // 5. Transform to NormalizedAPIResponse — ALWAYS use the standard type
        return data.results.map(transformToNormalizedResponse);
      }
    );

    // 6. Return with metadata — ALWAYS include disclaimer
    return NextResponse.json({
      results,
      source: "api-name",
      disclaimer: "Appropriate disclaimer for this domain.",
    });
  } catch (error) {
    // 7. Error handling — ALWAYS use ERR helpers
    console.error("[Route Name Error]", error);
    return ERR.fetchFailed("Route description");
  }
}
```

#### Pattern 2: Page Template (ALL new pages MUST follow this)

```tsx
// EVERY page must have:
// 1. A "use client" directive if it has ANY interactivity
// 2. At least ONE API call to a REAL backend route
// 3. Loading state (spinner or skeleton)
// 4. Error state (message + retry button)
// 5. Empty state (when no results)
// 6. Bilingual support (EN + AR)
// 7. Responsive layout
// 8. Connection to ≥2 existing systems (links or API calls)
// 9. Disclaimer appropriate to domain
// 10. Minimum 150+ lines of REAL logic

"use client";
import { useState } from "react";

export default function FeaturePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/domain/route?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setResults(data.results);
    } catch (err) {
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // MUST render: loading state, error state, empty state, results
  // MUST include: disclaimer, bilingual labels, links to related pages
}
```

---

### 📋 PER-TASK STRICT REQUIREMENTS

#### Task 1.1: Upgrade Hadith API (fawazahmed0)

**File:** `src/app/api/islamic/hadith/route.ts`
**Action:** ADD a new `fetchFawazahmed0Provider()` function as Tier 0 (BEFORE existing tiers)

**MUST DO:**
- Call `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json` to get edition list
- Search across ALL editions (bukhari, muslim, tirmidhi, abudawud, ibnmajah, nasai, malik, etc.)
- Return results in the existing `HadithSearchResult` interface — DO NOT change the interface
- Add this as the FIRST provider tried in the GET handler (before `fetchConfiguredSunnahProvider`)
- Keep ALL existing code unchanged — only ADD the new function and the call
- Cache results for 1 hour using existing `withSearchCache`
- Include hadith grade when available from the API

**MUST NOT:**
- ❌ Delete the existing 13 local hadiths — they stay as final fallback
- ❌ Delete `fetchConfiguredSunnahProvider` or `fetchHadithApiProvider` — they stay
- ❌ Change the `HadithSearchResult` interface
- ❌ Change the response format — same JSON structure
- ❌ Return simulated or hardcoded data from the new function

**TEST:** Search "mercy" → must return results from multiple books (Bukhari, Muslim, Tirmidhi, Abu Dawud, Ibn Majah, Malik, Nasai)

---

#### Task 1.2: Upgrade Quran API (Quran.com v4)

**File:** `src/app/api/islamic/quran/route.ts`
**Action:** ADD a new "tafsir" mode alongside existing search/ayah/surah modes

**MUST DO:**
- Add `type === "tafsir"` case in the switch statement
- Call `https://api.quran.com/api/v4/quran/tafsirs/{tafsir_id}?verse_key={surah:ayah}` for tafsir text
- Support tafsir IDs: `ibn-kathir` (16) and `al-jalalayn` (2)
- Return tafsir text + Arabic Quran text + English translation
- Keep ALL existing code unchanged — only ADD the new case

**MUST NOT:**
- ❌ Delete the existing AlQuran.cloud integration — it stays as primary for search/ayah/surah
- ❌ Change the response format for existing modes
- ❌ Remove the existing disclaimer
- ❌ Return hardcoded tafsir text

**TEST:** `?type=tafsir&q=2:255` → must return Ayatul Kursi with Ibn Kathir tafsir

---

#### Task 1.3: Create Tafsir API Route

**File:** NEW `src/app/api/islamic/tafsir/route.ts`
**Action:** Create new route calling the Quran Tafseer API

**MUST DO:**
- Call `https://api.quran-tafseer.com/tafseer/{tafsir_id}/{surah}/{ayah}` (FREE, no key)
- Support tafsir IDs: 1 (Ibn Kathir), 2 (Al-Jalalayn), 3 (Al-Tabari), 4 (Al-Qurtubi)
- Accept query params: `surah` (number), `ayah` (number), `tafsir` (id, default 1)
- Return: tafsir text (Arabic), tafsir name, surah number, ayah number
- Use `withSearchCache` with 24-hour cache (tafsir text doesn't change)
- Use `ERR.missingQuery()` for missing params
- Add disclaimer: "Tafsir text provided for educational reference. Consult qualified scholars for religious guidance."

**MUST NOT:**
- ❌ Return simulated tafsir text
- ❌ Use Gemini/AI to generate tafsir — use ONLY the API
- ❌ Skip error handling
- ❌ Skip caching

**TEST:** `?surah=1&ayah=1&tafsir=1` → must return Ibn Kathir's tafsir for Surah Al-Fatiha verse 1

---

#### Task 1.4: Create Prayer/Qibla API Route

**File:** NEW `src/app/api/islamic/prayer/route.ts`
**Action:** Create new route calling AlAdhan API

**MUST DO:**
- Call `https://api.aladhan.com/v1/timings/{date}?latitude={lat}&longitude={lon}&method=5` (Egyptian General Authority of Survey method for Egypt)
- Also support Qibla: `https://api.aladhan.com/v1/qibla/{lat}/{lon}`
- Accept query params: `lat`, `lon`, `date` (optional, defaults to today), `type` (timings|qibla)
- Return: all 5 prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) + sunrise + Qibla direction
- Use `withSearchCache` with 1-hour cache
- Default to Cairo coordinates (30.0444, 31.2357) if no lat/lon provided
- Add Hijri date from the API response

**MUST NOT:**
- ❌ Calculate prayer times manually — use the API
- ❌ Return hardcoded prayer times
- ❌ Skip the Hijri date
- ❌ Skip error handling

**TEST:** `?lat=30.0444&lon=31.2357` → must return today's 5 prayer times for Cairo + Qibla direction

---

#### Task 1.5: Add arXiv to Evidence Route

**File:** `src/app/api/search/evidence/route.ts`
**Action:** ADD a new `fetchArxiv()` function alongside existing 5 fetchers

**MUST DO:**
- Call `https://export.arxiv.org/api/query?search_query=all:{query}&max_results=6` (FREE, no key)
- Parse the Atom XML response (use regex or DOMParser — no new dependencies)
- Transform each result to `NormalizedAPIResponse` with: title, authors, published date, abstract as summary, link to PDF
- Set `trustBand: "B"` (preprints not peer-reviewed), `sourceType: "journal"`, `accessTier: "free"`, `openAccess: true`
- Add `"arxiv"` to tags
- Add `fetchArxiv(query).catch(() => [])` to the existing `Promise.all` array
- Include in the merged results

**MUST NOT:**
- ❌ Delete or modify any existing fetcher function (fetchOpenAlex, fetchSemanticScholar, etc.)
- ❌ Change the existing sorting/scoring logic
- ❌ Return simulated arXiv results
- ❌ Add new npm dependencies for XML parsing — use built-in methods
- ❌ Change the response format

**TEST:** Search "quantum computing" → results must include at least 1 arXiv paper with `arxiv.org` in URL

---

#### Task 1.6: Add CORE to Evidence Route

**File:** `src/app/api/search/evidence/route.ts` (same file as 1.5)
**Action:** ADD a new `fetchCore()` function

**MUST DO:**
- Call `https://api.core.ac.uk/v3/search/works?q={query}&limit=6` (FREE, no key needed for basic search)
- Transform results to `NormalizedAPIResponse`
- Set `trustBand: "A"` or `"B"` based on whether full text is available
- Set `accessTier: "free"`, `openAccess: true` (CORE is open-access aggregator)
- Add to the `Promise.all` array alongside arXiv and existing fetchers
- Include in merged results

**MUST NOT:**
- ❌ Delete or modify any existing fetcher function
- ❌ Return simulated CORE results

**TEST:** Search "climate change" → results must include CORE source

---

#### Task 1.7: Rebuild Evidence Page

**File:** `src/app/evidence/page.tsx`
**Action:** REWRITE from 22 lines to full flagship scientific search UI (300+ lines minimum)

**MUST DO:**
- `"use client"` — interactive page
- Search input field with submit button
- Source toggle checkboxes: OpenAlex ✅, Semantic Scholar ✅, EuropePMC ✅, DOAJ ✅, Crossref ✅, arXiv ✅, CORE ✅
- Call `/api/search/evidence?q={query}` on submit
- Display results as cards with: title, authors, journal, year, citation count, trust badge (A/B/C with color), open-access badge, link to full text
- Loading skeleton while fetching
- Error state with retry button
- Empty state: "No results found. Try different search terms."
- Source filter: show/hide results by source tag
- Sort options: by relevance (default), by citations, by year
- Bilingual header (English + Arabic)
- Link to angry-debunkers: "Analyze a specific claim →"
- Link to fight-back: "Defense arsenal →"
- Disclaimer: "Evidence aggregation for educational and verification purposes. Not medical or legal advice."
- Responsive: works on mobile

**MUST NOT:**
- ❌ Be fewer than 300 lines of real code
- ❌ Use the `EvidenceCommandBoard` component as the entire page — build new UI
- ❌ Show results without trust badges
- ❌ Skip loading/error/empty states
- ❌ Skip source toggles
- ❌ Skip bilingual support
- ❌ Display results without author and year information

**TEST:** Search "vaccines" → must show results from 7 different API sources with color-coded trust badges, open-access indicators, and working links

---

### 🧪 FUNCTIONAL TESTING GATES — Feature Is NOT Done Until ALL Pass

Every feature must pass ALL gates before it's considered complete:

| Gate | What It Checks | How To Test |
|------|---------------|-------------|
| **G1: Build Gate** | `npm run build` passes with 0 errors | Run the command |
| **G2: API Gate** | The API route returns REAL data from REAL external APIs | Call the route with test params → check response has real data |
| **G3: UI Gate** | The page renders all 4 states: default, loading, results, error | Test each state manually |
| **G4: Integration Gate** | The page links to ≥2 existing pages AND calls ≥1 existing API route | Check links and network requests |
| **G5: Bilingual Gate** | Arabic text displays correctly with RTL | Check in browser |
| **G6: Disclaimer Gate** | Appropriate disclaimer is visible | Visual check |
| **G7: No Regression Gate** | Existing features still work after the change | Test angry-debunkers, hadith-check, evidence search |

### 🔒 ENFORCEMENT PROTOCOL

If a builder produces code that violates ANY rule above:

1. **IDENTIFY** the violation (which ❌ rule was broken)
2. **FIX** the specific violation — do not rewrite the whole feature
3. **VERIFY** the fix passes all 7 gates
4. **DOCUMENT** what was fixed and why in a comment

> **The platform's credibility depends on EVERY feature being genuinely functional.**
> A beautiful UI that shows fake data is WORSE than no feature at all.
> A "Coming Soon" page is a lie to the user.
> A simulated API response is intellectual fraud.
> 
> **Build it real, or don't build it.**

