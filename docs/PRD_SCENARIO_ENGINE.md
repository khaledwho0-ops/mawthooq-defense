# PRD — حقوقي & أمان · THE SCENARIO ENGINE
### From topic cards to the 1am moment
**Version 1.0 · 16 July 2026 · Author: Claude, for Khaled Sayed**
**Status: APPROVED SPEC — ready to execute. Supersedes the topic-card approach for both platforms.**

---

# 0. THE VERDICT ON WHAT WE BUILT

K., 16 Jul: *"THE AGENT DOING IS STILL SCRATCHING ONLY THE SURFACE NOT DIGGING DEEP INTO THOSE SCIENCE THEY HAVE A GOLD MINE CAN USE."*

He is right, and the diagnosis is sharper than "not deep enough."

| | |
|---|---|
| **What I built** | A **topic index**: "Phishing" · "Strong passwords" · "Equality (Art 53)" |
| **What he asked for** | A **scenario engine**: «أمي وأخويا اتأخروا وموبايلهم مقفول» · «والدي في دولة تانية وفقدت الاتصال بيه» |

**The difference is not depth. It is shape.**

- A **topic card** answers a question nobody is asking at the moment they need it. Nobody at 1am thinks *"I would like to read about telecommunications fraud."*
- A **scenario card** answers the question they ARE asking: **"أعمل إيه دلوقتي؟"**

**مستعد already proved this.** Its cards are moments — «لسعة عقرب», «نزيف شديد», «حد بيغرق». That is exactly why مستعد feels like a product and أمان feels like a pamphlet. **We had the answer in our own house and did not carry it across.**

> **THE CORE INSIGHT OF THIS PRD:**
> **A card is not a subject. A card is a moment when a human being is frightened and does not know what to do.**
> Title every card as the sentence the user would actually say out loud.

---

# 1. WHY THE SCENARIO SHAPE IS THE WHOLE PRODUCT

K.'s two examples are not random. Look at what each one demands:

### «أمي وأخويا اتأخروا وموبايلهم مقفول»
| Lens | What it contributes |
|---|---|
| 🔒 **Cybersecurity** | Find-my-device, last known location, shared location, is the phone off or out of battery |
| 🕵️ **Criminology** | The **golden hours** · base rates (the overwhelming majority come home) · **the 24-hour myth** |
| ⚖️ **Law** | Your right to file a report **now** |
| ❤️ **Human** | You are not overreacting. Panic is not a plan. Here is the order of operations. |

### «والدي في دولة تانية وفقدت الاتصال بيه»
| Lens | What it contributes |
|---|---|
| 🔒 **Cyber** | Timezone/roaming/battery — check the boring explanations first |
| 🕵️ **Criminology** | **Virtual kidnapping** — a documented crime type. If a call comes saying *"we have your father, pay now"* **while you cannot reach him**, that call is *usually a scam exploiting the silence you are already in*. |
| ⚖️ **Law/Consular** | An embassy can perform a **welfare check** on a citizen abroad |
| ❤️ **Human** | The silence itself is the criminal's product. Do not let it buy your judgment. |

**Neither of these is expressible as a topic card.** «SIM swap» cannot hold them. This is why the platform felt hollow: *the shape could not carry the value.*

> **This is the gold mine K. means.** Not more facts — **the intersection**. أمان's differentiator was never "cyber facts + crime facts side by side." It is that **a real moment demands both at once, and nobody else assembles them into one card in Egyptian Arabic.**

---

# 2. THE SCENARIO CARD — the new shape

Every scenario card MUST answer, in this order:

| # | Field | Purpose | Rule |
|---|---|---|---|
| 1 | `title` | **The sentence the user would say out loud.** | Not a topic. «أمي اتأخرت وموبايلها مقفول» — never «الأشخاص المفقودون» |
| 2 | `first_60_seconds` | What to do **right now**, before thinking | ≤5 steps. Ordered. This is the card's spine. |
| 3 | `the_clock` | **Why time matters here** | Golden hours, evidence decay, statute windows. If time doesn't matter, say that too — it calms people. |
| 4 | `most_likely_truth` | **Calibrated base rate** | «الغالبية العظمى من الحالات دي بتنتهي بسلام» — *reduce panic without dismissing*. Must be sourced. NEVER 100%. |
| 5 | `the_criminal_lens` 🕵️ | **If this IS a crime — how does it work?** | The mechanism, the script, why it targets you now. **This field is أمان's soul.** |
| 6 | `myths_that_kill` | The false belief that costs time/life | e.g. the **24-hour wait myth**. Each myth must be refuted **by a source**. |
| 7 | `do` / `dont` | Grounded steps | Every step `{t, src}`. Every qualifier carried (see Omission Rule). |
| 8 | `escalation_ladder` | **When worry becomes a report** | The concrete trigger to escalate. People freeze because they don't know when they're "allowed" to act. |
| 9 | `who_to_call` | Real contacts | **Number ONLY with its own source** (see 2.6b). Otherwise label + guidance. |
| 10 | `your_right` ⚖️ | The legal hook | Constitution article + الدليل + honest framing (principle ≠ procedure) |
| 11 | `الدليل` | basis + verbatim quote | Per source. Non-negotiable. |
| 12 | `note` | Jurisdiction + not-advice | Plainly. Never present a foreign route as Egyptian. |

**A scenario card is multi-source by nature.** One page will not ground it. This is *expected* — use `extra_sources`. Each field cites the source that actually carries it.

---

# 3. THE SCIENCES WE ARE NOT USING — the actual gold mine

We used cybersecurity as *tips*. We used criminology as *nothing*. Both are real sciences with real, fetchable frameworks:

### Criminology frameworks that turn a card from advice into understanding
| Framework | What it lets a card say |
|---|---|
| **Routine Activity Theory** | A crime needs three things at once: a motivated offender, a suitable target, and **no capable guardian**. *You cannot remove the offender — you can stop being the easy target and you can add a guardian.* This reframes every "how do I protect myself" answer. |
| **Crime scripts** | Every crime has a **script** — the offender's own step-by-step. If you know step 2, you can break the chain before step 5. (This is exactly what our SIM-swap card does — and why it's our best card.) |
| **Victim selection** | Offenders **choose**. Understanding selection turns fatalism ("bad luck") into agency. |
| **The golden hours** | Why the first hours in a disappearance decide the outcome. |
| **Situational crime prevention** | Change the situation, not the person. |
| **Base rates** | Most frightening moments end fine. Saying so — with a source — is itself life-saving, because panic causes bad decisions. |

### Cybersecurity concepts that belong inside scenarios, not as tips
Attack chains · account-recovery cascades (one email owns everything) · device-location tooling · the OTP as the weakest link · stalkerware · data-broker exposure.

> **The rule:** a card must explain **the mechanism**, not the moral. "Be careful online" is a moral. "He takes your number so the bank's code arrives on his phone" is a mechanism. **Mechanisms are actionable. Morals are not.**

---

# 4. THE SCENARIO INVENTORY

## 4.1 أمان — 24 scenarios (cyber × criminology)

### 🚨 Tier 1 — someone I love may be in danger *(build first — highest value)*
1. **«أمي وأخويا اتأخروا وموبايلهم مقفول»** ← K.'s example. Golden hours + 24h myth + find-my + when to report.
2. **«والدي في دولة تانية وفقدت الاتصال بيه»** ← K.'s example. Consular welfare check + **virtual kidnapping** + boring-explanations-first.
3. **«جالي تليفون إن ابني/أخويا اتخطف وعايزين فدية دلوقتي»** ← **Virtual kidnapping.** A documented crime. The urgency IS the weapon. *This card can prevent a family being robbed in a panic.*
4. **«بنتي بتتكلم مع حد على النت ومش عارفة مين»** ← Grooming: the script (contact → trust → isolation → secrecy → escalation). Knowing step 2 breaks it.
5. **«حد بيهددني ينشر صوري»** ← Sextortion. **Not your fault. Panic is the product. Don't pay.**
6. **«حاسس إن حد بيتابعني من موبايلي»** ← Stalkerware. Often someone known. Safety-planning before removal (removal can escalate danger).

### 💸 Tier 2 — my money / my identity is being taken
7. «موبايلي فصل فجأة ومش راجع» ← **SIM swap in progress.** (We have the mechanism — reshape as a moment.)
8. «حد دخل على حسابي البنكي»
9. «اتسرق موبايلي — دلوقتي أعمل إيه بالترتيب» ← account-recovery cascade
10. «حد فتح حساب/قرض باسمي»
11. «حوّلت فلوس لحد اكتشفت إنه نصاب»
12. «شغل أونلاين طلب مني أستلم فلوس وأحوّلها» ← **money mule** — *you become the criminal without knowing*
13. «قالولي استثمار مضمون في الكريبتو»
14. «اشتريت من صفحة ومستلمتش حاجة»

### 🔐 Tier 3 — my accounts / my devices
15. «حسابي اتسرق وبيبعت رسايل لناسي»
16. «جالي كود OTP وأنا مش بسجّل دخول» ← **someone is inside, right now**
17. «الويندوز بتاعي اتقفل وطالبين فدية» ← ransomware
18. «إيميلي ظهر في تسريب بيانات»
19. «موبايل ابني فيه تطبيقات مش عارفها»
20. «فقدت الوصول لإيميلي وكل حساباتي مربوطة بيه»

### 🏠 Tier 4 — my home / my family's perimeter
21. «كاميرا البيت — مين شايفها غيري؟»
22. «الراوتر بتاعي — حد تاني عليه؟»
23. «جدّي بيرد على كل مكالمة وبيصدّق» ← elder targeting (why offenders select them)
24. «ولادي بينشروا كل حاجة — إيه اللي بيبان للمجرم؟» ← target selection through OSINT

## 4.2 حقوقي — 22 scenarios (K.'s full dimension map, as moments)

### ⚖️ Tier 1 — my freedom / my body
1. **«اتقبض على أخويا — أعمل إيه في أول ٢٤ ساعة؟»** ← Art 54 is *procedural*: told the reasons, contact family + lawyer, before the investigating authority within 24h. **Our strongest legal hook.**
2. «البوليس عايز يفتش بيتي» ← Art 58 (homes inviolable, judicial warrant)
3. «حد اعتدى عليّ» ← Art 99: no statute of limitations, NCHR may act
4. «اتحرشوا بيّا في الشارع» ← dignity + reporting
5. «اتعرضت لتعذيب/إساءة في الاحتجاز» ← Art 52

### 👪 Tier 2 — protecting my family *(K.'s dimension 8)*
6. «المدرسة بتضرب ابني» ← Art 80 (child rights)
7. «أبويا كبير وحد بياخد فلوسه» ← elder abuse (WHO) + legal
8. «أختي جوزها بيضربها» ← protection + WHO + help routes
9. «ابني اتمنع من التعليم» ← Art 19
10. «أمي محتاجة علاج ورفضوا» ← Art 18 (health)

### 💼 Tier 3 — my work *(dimension 5)*
11. «مديري بيهددني بالفصل من غير سبب»
12. «مش بياخد أجري» / 13. «شغل خطر من غير أمان» / 14. «بيميّزوا ضدي في الشغل»

### 🏪 Tier 4 — daily life *(dimension 7 — البيت · الشارع · العمل · المتجر · المسجد · المدرسة · الأماكن العامة)*
15. «المحل رفض يرجّع البضاعة المعيبة» ← CPA **19588** (grounded ✅)
16. «اتنصب عليّ» (live) / 17. «صاحب البيت عايز يطردني» / 18. «منعوني من مكان عام»

### 🌍 Tier 5 — the foundations *(dimensions 1–4)*
19. «إيه حقوقي الأساسية أصلًا؟» ← UDHR (live ✅ — honestly framed)
20. «حقوقي كست» / 21. «حقوقي كراجل» ← equality applies to both; frame as equal protection, not competition
22. «إزاي أعرف حقي حقيقي ولا حد بيضحك عليّا؟» ← **the meta-card: اطلب النص الحرفي.** The One Law, taught to the user.

---

# 5. GROUNDING STRATEGY — how to keep the One Law while going deep

**The danger:** scenario cards are exactly where fabrication is most tempting, because a real moment demands more than one page contains. **This is how we got the reverted UDHR cards** (I demanded procedure from a document with none — SECOND_BRAIN 2.10b Bug 2).

### The discipline
1. **One source per FIELD, not per card.** `first_60_seconds` from the police/authority source; `the_criminal_lens` from the criminology source; `your_right` from the Constitution. Each with its own `src`.
2. **PROBE EVERY URL FIRST.** (2.11b — 10 of 14 past failures were dead URLs; 6 of 13 topics had no live source at all.)
3. **If a field has no source, the field does not exist.** An absent `the_clock` beats an invented one.
4. **Say "we don't know" out loud.** If no Egyptian source exists for a procedure, the card says: *"القانون المصري بيدّيك الحق ده (المادة X)، بس الإجراء التفصيلي محتاج محامي — إحنا مش هنخترعه لك."* **That sentence is a feature.** It is the product's honesty, visible.
5. **Base rates need a source or they don't ship.** «الغالبية بتنتهي بسلام» is a *claim*.
6. **Every rule from SECOND_BRAIN applies**: omission (carry every exception), statistic scoping, number provenance, licence tier, full-card verification.

### ✅ PROBE RESULTS — 16 Jul 2026 (done; do not re-probe these)

| Need | Status | URL |
|---|---|---|
| **The 24-hour myth** 🏆 | ✅ **LIVE — the single most valuable line we have found** | `https://www.gov.uk/report-missing-person` — literal text: **"You do not have to wait 24 hours before contacting the police."** Also carries: contact anyone who may know their whereabouts · *"if you're **still concerned**"* (carry that hedge) · what police may ask |
| **Crime triangle / routine activity** 🕵️ | ✅ LIVE | `https://popcenter.asu.edu/content/problem-analysis-triangle-0` · `https://www.ojp.gov/ncjrs/virtual-library/abstracts/social-change-and-crime-rate-trends-routine-activity-approach` |
| Elder abuse | ✅ LIVE | `https://www.who.int/news-room/fact-sheets/detail/abuse-of-older-people` |
| Phone monitoring / stalkerware | ✅ LIVE | `https://consumer.ftc.gov/articles/how-protect-your-phone-hackers` |
| Sextortion | ✅ LIVE | `https://www.ncsc.gov.uk/guidance/sextortion-scams-how-to-protect-yourself` |
| SIM swap | ✅ LIVE (shipped) | `https://www.ic3.gov/PSA/2022/PSA220208` |
| **Virtual kidnapping** | 🚫 **NO LIVE SOURCE** — `fbi.gov` blocks agents; the IC3 PSAs on it are gone. **Try `consumer.ftc.gov/articles/family-emergency-scams` (same crime, FTC's name for it) — untested.** Do NOT write this card from memory. |
| **Consular / relative abroad** | 🚫 **NO LIVE SOURCE** — gov.uk + travel.state.gov both blocked. K.'s «والدي في دولة تانية» **cannot be grounded yet.** Needs an Egyptian MFA source or another fetchable consular authority. |
| **Money mule** | 🚫 NO LIVE SOURCE — Europol, Action Fraud, FBI, and the OJP abstract all fail. |

> **Honest consequence:** of K.'s two flagship examples, **«أمي وأخويا اتأخروا» is fully groundable and is the reference card. «والدي في دولة تانية» is NOT** — the consular half has no fetchable authority. It stays unbuilt until one is found. **We do not write it from memory. That is the whole discipline.**

### Source shortlist to probe (per scenario, before writing)
- **Missing persons / golden hours** → national police or Interpol guidance; **the 24-hour myth** must be refuted from an official page
- **Virtual kidnapping** → FBI/IC3 (`ic3.gov` is fetchable ✅ — proven)
- **Grooming / child safety** → UNICEF, NCSC
- **Sextortion** → NCSC ✅ live
- **Money mule** → *(Europol + Action Fraud BLOCK agents — find another authority or drop it)*
- **Elder abuse** → WHO ✅ live
- **Rights** → Egyptian Constitution 2014 ✅ (binding + contains procedure)
- **Consumer** → CPA `cpa.gov.eg` ✅ (grounded, 19588 verified)
- **Criminology theory** → UNODC ✅ live; university/OER pages for Routine Activity Theory

---

# 6. THE ROADMAP — clear start, clear steps, clear end

### ▶️ START (do this first, in this exact order)

**STEP 0 — Read the constraints** *(30 min, no agents)*
Read `SECOND_BRAIN.md` §2.10b (the three harness bugs), §2.4b (run rules backwards), §2.11b (probe first). **Skipping this costs a wave.**

**STEP 1 — RETROACTIVE SAFETY AUDIT** ⚠️ **BEFORE ANY NEW CONTENT**
> *A dangerous card already live beats a missing card that isn't. We found an L5 bleeding card telling people to press on an injured eye — live the whole time.*
- Audit all **33 A.D.A.M.-derived L4/L5 مستعد cards** for **dropped exceptions**
- Audit all **130 متزن claims** for **statistic scoping**
- **Gate: no new content until this is clean.**

**STEP 2 — Probe the source map** *(1 hour, no agents — cheap, saves waves)*
Probe every URL for Tier-1 scenarios. Assert `200 + >1200 chars + not "page not found"`. Record dead ends. **Drop any scenario with no live source — do not send an agent to guess.**

**STEP 3 — Build ONE scenario end-to-end** — «أمي وأخويا اتأخروا وموبايلهم مقفول»
The reference implementation. Do not scale until this one card is: grounded · adversarially verified · rendered · reviewed by K.
**Gate: K. reads it and says "this is the product."** If he doesn't, the shape is wrong and scaling would multiply the error.

### 🔁 PHASES

| Phase | Scope | Gate |
|---|---|---|
| **P0 · Foundation** | Retroactive audit + probe map + 1 reference card | K. approves the reference card |
| **P1 · The 6 that matter** | أمان Tier 1 (the family-in-danger six) | 6 live, verified, `is_deep` enforced |
| **P2 · Freedom & family** | حقوقي Tiers 1–2 (10) | Art 54/58/80/99 as *moments* |
| **P3 · Money & identity** | أمان Tier 2 (8) | money-mule + virtual-kidnapping grounded |
| **P4 · Work & daily life** | حقوقي Tiers 3–4 (8) | CPA route live |
| **P5 · Accounts, devices, home** | أمان Tiers 3–4 (10) | — |
| **P6 · Foundations + meta** | حقوقي Tier 5 (4) | incl. «اطلب النص الحرفي» |
| **P7 · The viewer** | Scenario shape in the UI: `first_60_seconds` huge at the top; `the_clock` as a live element; `myths_that_kill` in red | Renders on a phone at 1am |
| **P8 · Human gates** | **Clinician** (مستعد L4/L5) · **Lawyer** (حقوقي) · resolve the **A.D.A.M. licence** decision | Signed off |

**Sequencing rule:** *value-first, not source-first.* Pick the scenario because it matters, then hunt the source. **Letting source-convenience pick topics is exactly how we shipped "use three random words."**

### 🏁 THE END — Definition of Done

**أمان is done when:**
- 24 scenarios live, each with `first_60_seconds` + `the_criminal_lens` + الدليل
- Every card passes `is_deep` (mechanism, not moral)
- Zero ungrounded numbers · zero dropped qualifiers · every jurisdiction named
- **The 1am test:** a frightened person opens it on a phone and knows what to do in 10 seconds

**حقوقي is done when:**
- 22 scenarios live, each with: **ما هو حقي · الدليل (article + verbatim) · كيف أسترده · أفعل · لا أفعل · من أكلم** (K.'s exact spec)
- Every card states honestly whether the source gives a *principle* or a *procedure*
- A lawyer has signed off
- **The test:** a person whose brother was just arrested knows the 24-hour rule and their right to a lawyer — before they call anyone

**The whole thing is done when:** *a stranger in the worst hour of their life opens a card and it is true, complete, sourced, and useful — and if we can't be all four, it says so.*

---

# 7. HOW TO RUN IT

```js
// The proven pattern (tools/workflow-*.js). Constants = the methodology compressed.
// EVERY ONE encodes a scar. Reuse verbatim.
SAFE + ONELAW + DEEP + OMISSION + STAT + NUMSAFE + CONCISE + AR + HARM
  → produce (schema)
  → adversarial verify — FULL card, never sliced   // Bug 1 killed 3 waves
  → is_deep gate: hygiene restated = FAIL          // caught the shallow cards
  → PASS-only → integrate_new.py APPLY → git push → CONFIRM LIVE
```

**Hard-won rules that must survive into every wave:**
1. **Never slice the card** you ask a verifier to certify.
2. **Never demand a field the source cannot fill** — you commission the fabrication.
3. **Probe URLs first.**
4. **Verify what the user SEES**, not the data structure (I fixed `window.SOURCES` and missed the rendered `grade` twice).
5. **Run every new rule backwards** over what's live.
6. **A low pass rate is health**, not failure. 8/10 after fixing the harness; 0/30 before.

---

## APPENDIX — the reference card, sketched
**«أمي وأخويا اتأخروا وموبايلهم مقفول»**

| Field | Content (to be GROUNDED — this is a sketch, not licence to write it from memory) |
|---|---|
| **first_60_seconds** | اتصل مرتين · ابعت رسالة مكتوبة · شوف آخر مكان على find-my لو مفعّل · كلّم آخر حد شافهم · اسأل المكان اللي كانوا رايحينه |
| **the_clock** | الساعات الأولى هي الأهم — الأدلة والذاكرة والكاميرات كلها بتقلّ بمرور الوقت |
| **most_likely_truth** | الغالبية العظمى بترجع بسلام. الخوف ده طبيعي — بس القرار المتسرّع بيأذي |
| **myths_that_kill** | 🔴 **«لازم تستنى ٢٤ ساعة قبل ما تبلّغ»** — ده غلط. لازم يتنفى من مصدر رسمي. الأسطورة دي بتكلّف ساعات لا تُعوَّض |
| **the_criminal_lens** | لو جالك تليفون بيقول «معانا ماما وادفع دلوقتي» وانت مش قادر توصلها — **الصمت ده هو بضاعتهم**. الاستعجال نفسه هو السلاح |
| **escalation_ladder** | قلق → اتصالات → آخر مكان → لو فيه علامة خطر (مرض، تهديد، طفل، سن كبير) **بلّغ فورًا مستنّاش** |
| **your_right** | حقك تبلّغ — والاعتداء على الحريات جريمة لا تسقط بالتقادم (م٩٩) |

**Every row above needs a real source before a single word ships. That is the job.**

---

*الدليل قبل التصديق — evidence before belief.*
*A card is not a subject. A card is a moment.*
