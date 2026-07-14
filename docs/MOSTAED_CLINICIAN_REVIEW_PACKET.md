# 🩺 مستعد — حزمة مراجعة طبية (Clinician Review Packet)
## Mostaed First-Aid Platform — L4 & L5 Card Review

> **دي بوابة رقم ١ قبل إطلاق مستعد للناس.** كل كارت من مستوى ٤ و ٥ (طوارئ / إصابات خطيرة / صحة نفسية حرجة) لازم يمرّ على طبيب مصري مرخّص قبل النشر.
> **This is the #1 gate before Mostaed ships.** Every Level-4 and Level-5 card must be signed off by a licensed Egyptian clinician before public release.

**Generated:** 2026-07-11  |  **Cards in this packet:** 24 (L4/L5)  |  **Source file:** `DESIGN CAMPAIGN/08_NEXT_PROJECT_MOSTAED/app/scenarios.js`

---

## ⚠️ اقرأ الأول — ماذا تُثبِت "المصدرية" (Grounding) وماذا لا تُثبِت

> **الربط بالمصدر (grounding) يُثبِت فقط أن النص العربي مطابق لما هو مكتوب في مصدر MedlinePlus / NHS / CDC — أي أمانة الترجمة والنقل.**
> **هو لا يُثبِت الصحة الطبية ولا الملاءمة لمصر.** المصادر بريطانية/أمريكية، وقد تحتوي على أدوية أو أرقام أو خطوات غير متاحة أو غير مناسبة محليًا.
>
> **Grounding proves Arabic↔source fidelity ONLY (that the Arabic faithfully renders a MedlinePlus/NHS/CDC line). It does NOT prove clinical correctness or appropriateness for Egypt.** The sources are UK/US; a step may reference a drug, dose, number, or procedure that is unavailable or unsafe in the Egyptian context. That judgment is what we need YOU for.

### للطبيب المُراجِع — ما الذي تتحقق منه في كل خطوة (What to check)

1. **صحة النصيحة طبيًا** — هل الخطوة صحيحة إكلينيكيًا وحديثة؟ (Is the advice clinically correct and current?)
2. **الملاءمة لمصر** — هل الأدوية / الأدوات المذكورة متاحة في مصر؟ هل في خطوة أمريكية/بريطانية بحتة لا تنفع محليًا أو خطرة؟ (Egypt-appropriate? Drugs & tools available here? Any US/UK-specific or locally-unsafe step?)
3. **أرقام الطوارئ** — هل الأرقام صحيحة لمصر؟ المتوقّع: **الإسعاف ١٢٣**، **الشرطة ١٢٢**، **المطافي/الحريق ١٨٠**، **الطوارئ الموحّد ١١٢**، **الخط الساخن للسموم/مكافحة الإدمان ١٦٣٢٨**. صحّح أي رقم غلط. (Are the hotlines correct for Egypt? Fix any wrong number.)
4. **الأمان** — هل في خطوة ممكن تأذي المريض لو اتّبعها مواطن عادي بدون تدريب؟ (Any step that could harm if followed by an untrained layperson?)
5. **الاكتمال** — هل ناقص علامة خطر (red flag) أو "متى تتصل بالإسعاف" مهم؟ (Missing red flag or escalation trigger?)

**لكل كارت:** علّم على واحدة من — ☐ **موافقة كما هي** · ☐ **موافقة مع تعديلات** (اكتبها في خانة الملاحظات) · ☐ **رفض** (اكتب السبب). ثم وقّع.
**For each card:** tick one — ☐ Approve as-is · ☐ Approve with edits (write them) · ☐ Reject (write why). Then sign.

---

## 📋 جدول ملخّص — Summary & Sign-off Tracker

| # | Card ID | العنوان (Title AR) | Title (EN) | Level | Domain | #Do | #Dont | #RedFlags | Hotlines | Sign-off |
|---|---------|--------------------|-----------|:-----:|--------|:---:|:-----:|:---------:|----------|:--------:|
| 1 | `friend-suicidal` | صاحبك بيقول إنه عايز يموت | A friend says they want to die | **L5** | الصحة النفسية | 5 | 3 | 2 | 16328 / 123 | ☐ |
| 2 | `choking-adult` | شخص بيختنق (بالغ) | Someone is choking (adult) | **L5** | طوارئ | 5 | 3 | 3 | 123 / 112 | ☐ |
| 3 | `severe-bleeding` | نزيف شديد | Severe (life-threatening) bleeding | **L5** | طوارئ | 5 | 4 | 2 | 123 / 112 | ☐ |
| 4 | `house-fire` | حريق في البيت | A fire starts at home | **L5** | طوارئ | 6 | 3 | 2 | 180 / 112 | ☐ |
| 5 | `collapse-cpr` | شخص وقع فاقد الوعي (إنعاش قلبي) | Someone collapses / CPR | **L5** | طوارئ | 6 | 3 | 2 | 123 / 112 | ☐ |
| 6 | `drowning` | إنقاذ غريق | Drowning rescue | **L5** | طوارئ | 6 | 4 | 3 | 123 / 180 | ☐ |
| 7 | `heart-attack` | أعراض جلطة قلبية (نوبة قلبية) | Heart attack signs | **L5** | طوارئ | 5 | 3 | 3 | 123 / 112 | ☐ |
| 8 | `stroke-fast` | أعراض سكتة دماغية (اختبار FAST) | Stroke — act FAST | **L5** | طوارئ | 6 | 3 | 4 | 123 / 112 | ☐ |
| 9 | `anaphylaxis` | رد فعل تحسّسي شديد (حساسية مفرطة) | Anaphylaxis | **L5** | طوارئ | 6 | 3 | 3 | 123 / 112 | ☐ |
| 10 | `infant-choking` | رضيع بيختنق (أقل من سنة) | Infant choking (under 1) | **L5** | طوارئ | 6 | 3 | 3 | 123 / 112 | ☐ |
| 11 | `car-accident` | حادثة عربية (مكان الحادث) | Car accident scene | **L5** | طوارئ | 7 | 4 | 3 | 123 / 122 / 180 | ☐ |
| 12 | `skull-fracture` | كسر في الجمجمة | Skull fracture | **L5** | طوارئ | 5 | 2 | 3 | 123 / 112 | ☐ |
| 13 | `unconsciousness` | فقدان الوعي — إسعافات أولية | Unconsciousness - first aid | **L5** | طوارئ | 8 | 4 | 5 | 123 / 112 | ☐ |
| 14 | `dislocation` | خلع في المفصل | Dislocation | **L4** | إصابات | 6 | 5 | 5 | 123 / 112 | ☐ |
| 15 | `genital-injury` | إصابة في الأعضاء التناسلية | Genital injury | **L4** | إصابات | 5 | 2 | 5 | 123 / 112 | ☐ |
| 16 | `burn` | حرق (حرارة أو سوائل مغلية) | Burn / scald | **L4** | طوارئ | 5 | 5 | 3 | 123 / 112 | ☐ |
| 17 | `seizure` | نوبة صرع (تشنّج) | Seizure | **L4** | طوارئ | 9 | 4 | 3 | 123 / 112 | ☐ |
| 18 | `electric-shock` | صعق كهربائي | Electric shock | **L4** | طوارئ | 7 | 5 | 4 | 123 / 180 | ☐ |
| 19 | `poisoning` | تسمّم — حد بلع مادة أو دوا | Poisoning (swallowed) | **L4** | طوارئ | 5 | 3 | 3 | 123 / 112 | ☐ |
| 20 | `heat-stroke` | إجهاد حراري وضربة شمس | Heat exhaustion & heat stroke | **L4** | طوارئ | 5 | 5 | 3 | 123 / 112 | ☐ |
| 21 | `head-injury` | إصابة في الراس | Head injury | **L4** | طوارئ | 5 | 6 | 5 | 123 / 112 | ☐ |
| 22 | `shock` | صدمة (هبوط حاد في الدورة الدموية) | Shock | **L4** | طوارئ | 8 | 3 | 1 | 123 / 112 | ☐ |
| 23 | `chemical-burn` | حرق كيماوي | Chemical burn or reaction | **L4** | طوارئ | 7 | 4 | 3 | 123 / 112 | ☐ |
| 24 | `breathing-difficulty` | صعوبة في التنفّس | Breathing difficulties - first aid | **L4** | طوارئ | 5 | 4 | 5 | 123 / 112 | ☐ |

**إجمالي عدد الكروت L4/L5: 24** — كلها لازم تتوقّع قبل الإطلاق. (All 24 must be signed before launch.)

---

# 🗂️ مراجعة الكروت — Card-by-Card Review



## 1. `friend-suicidal` — صاحبك بيقول إنه عايز يموت
### A friend says they want to die · **Level 5** · الصحة النفسية

**اللقطة (Snapshot AR):** حد قريب بيلمّح أو بيقول صراحة إنه مش عايز يعيش. لحظة فارقة — وجودك بيفرق.

**Snapshot (EN):** Someone hints at or says they don't want to live. Your presence matters.

#### 🚩 علامات الخطر (Red Flags) — 2

- 1. كلام زي «ريّحت» أو «هختفي» أو «الدنيا أحسن من غيري»
- 2. بيوزّع أغراضه، بينعزل، تغيّر مفاجئ للهدوء بعد ضيق

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اسأله مباشرة: هو بيفكّر يقتل نفسه؟ | *—* | MedlinePlus — Suicide<br>https://medlineplus.gov/suicide.html |
| 2 | خلّيه في أمان: اعرف لو عنده خطة، وبعّد عنه أي حاجة ممكن يستخدمها عشان يأذي نفسه. | *—* | MedlinePlus — Suicide<br>https://medlineplus.gov/suicide.html |
| 3 | كون موجود معاه. اسمعه بتركيز، واعرف هو بيفكّر في إيه وحاسس بإيه. | *—* | MedlinePlus — Suicide<br>https://medlineplus.gov/suicide.html |
| 4 | ساعده يوصل لمصادر مساعدة تقدر تسانده. | *—* | MedlinePlus — Suicide<br>https://medlineplus.gov/suicide.html |
| 5 | فضل على تواصل معاه. إن إنك تفضل قريب منه بعد الأزمة بيفرق فعلًا. | *—* | MedlinePlus — Suicide<br>https://medlineplus.gov/suicide.html |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتوعدش إنك تكتم السر لو حياته في خطر. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 2 | ماتقولش «ده كلام فارغ» أو «فكّر في اللي عندك». | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 3 | ماتدخلش في جدال إنه غلط إنه حاسس كده. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الخط الساخن للصحة النفسية (مصر) | **16328** | الأمانة العامة للصحة النفسية — دعم مجاني وسرّي ٢٤ ساعة. | ☐ صح ☐ غلط |
| الإسعاف (خطر حالّ على الحياة) | **123** | لو في محاولة أذى فعلية أو خطر فوري. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Suicide** — https://medlineplus.gov/suicide.html  
  _A · INGESTED · public domain (U.S. NLM) · machine — the five actions (ask · keep safe · be there · connect · stay connected) extracted from these bytes_
- **الأمانة العامة للصحة النفسية (مصر) — 16328** — https://mentalhealth.mohp.gov.eg/mental/web/en  
  _A · EGYPT — hotline verified · the Ministry's own portal displays «Hot line 16328»_
- **988 Suicide & Crisis Lifeline — Help Someone Else** — https://988lifeline.org/help-someone-else/  
  _C · CITE-ONLY · copyrighted; US-only number — model guidance, never the actionable line for Egypt_
- **NHS — Help for suicidal thoughts** — https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/  
  _C · CITE-ONLY_

#### ✍️ قرار الطبيب (Clinician Decision) — `friend-suicidal`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 2. `choking-adult` — شخص بيختنق (بالغ)
### Someone is choking (adult) · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** ماسك زوره، مش قادر يتكلم ولا يسعل ولا يتنفس، ولونه بيزرقّ. كل ثانية بتفرق.

**Snapshot (EN):** Can't speak, cough, or breathe; turning blue. Seconds count.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. إيده على زوره
- 2. صوت صفير عالي أو مفيش صوت خالص
- 3. الشفايف والوش بيزرقّوا

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | قف وراه. لو طفل، ممكن تحتاج تركع. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 2 | لُفّ ذراع واحدة حواليه عشان تسند جسمه من فوق، وميّله لقدّام لحد ما صدره يبقى موازي للأرض تقريبًا. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 3 | بكعب إيدك التانية اضربه ضربة قوية بين لوحي الكتف، وشوف الحاجة طلعت ولا لأ. كمّل لحد ما تبقى ٥ ضربات. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 4 | لو ماطلعتش: قف وراه ولُفّ دراعاتك حوالين وسطه، واعمل قبضة وحُط ناحية الإبهام فوق سُرّته بشوية وتحت عظمة الصدر. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 5 | امسك قبضتك بإيدك التانية بقوة، واشدّ شدّة سريعة لجوّه ولفوق. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتتدخّلش لو بيسعل بقوة، أو بيقدر يتكلّم، أو بيتنفّس كويس — سيبه يكحّ، بس فضل جنبه. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 2 | ماتفتحش بقّه بالعافية عشان تمسك الحاجة وتشدّها وهو واعي — اعمل ضرب ظهر وضغطات بطن. | *—* | MedlinePlus — Choking: adult or child over 1 year<br>https://medlineplus.gov/ency/article/000049.htm |
| 3 | ماتسيبهوش لوحده تجري تجيب حاجة. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | قول: «حالة اختناق، الشخص مش بيتنفّس»، وبعدها العنوان بالظبط. | ☐ صح ☐ غلط |
| الطوارئ الموحّد | **112** | لو مش متأكد بأي رقم، اتصل بـ 112 وهيوصّلك. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Choking: adult or child over 1 year** — https://medlineplus.gov/ency/article/000049.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **American Red Cross — Adult & Child Choking** — https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `choking-adult`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 3. `severe-bleeding` — نزيف شديد
### Severe (life-threatening) bleeding · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** دم بيندفع أو بيغزر بغزارة ومش بيقف — خطر على الحياة خلال دقائق.

**Snapshot (EN):** Blood spurting/flowing and not stopping — life-threatening in minutes.

#### 🚩 علامات الخطر (Red Flags) — 2

- 1. الدم بينزل بسرعة وبيبلّل الهدوم/الأرض
- 2. الشخص شاحب، بيرتجف، أو بيفقد التركيز

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | نيّمه على ضهره — ده بيقلّل فرصة إنه يغمى عليه لأنه بيزوّد وصول الدم للمخ. لو تقدر، ارفع مكان النزيف. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 2 | شيل أي تراب أو حاجات سايبة شايفها في الجرح. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 3 | اضغط بالظبط على الجرح بشاش معقّم أو قماشة نضيفة، أو حتى قطعة هدوم لو مفيش. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 4 | فضل ضاغط لحد ما الدم يقف. أول ما يقف، لُفّ الرباط على الجرح كويس بشريط لاصق. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 5 | لو الدم كمّل ونشّ من القماشة، ماتشيلهاش — حُطّ واحدة تانية فوقها. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتشيلش حاجة مغروسة في الجسم زي سكينة أو عود — شيلها ممكن يأذي أكتر ويزوّد النزيف. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 2 | ماتبصّش على الجرح كل شوية تشوف الدم وقف ولا لأ — كل ما تسيبه في حاله، كل ما تقدر توقّف النزيف. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 3 | ماتنكّشش في الجرح وماتشدّش أي حاجة مغروسة فيه — ده بيزوّد النزيف والأذى. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |
| 4 | ماتشيلش الرباط لو اتشبع دم — حُطّ واحد جديد فوقه. | *—* | MedlinePlus — Bleeding<br>https://medlineplus.gov/ency/article/000045.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «نزيف شديد مش بيقف»، مكان الإصابة، والعنوان. | ☐ صح ☐ غلط |
| الموحّد | **112** | لو مش متأكد. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Bleeding** — https://medlineplus.gov/ency/article/000045.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **American Red Cross — Bleeding (Life-Threatening External)** — https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `severe-bleeding`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 4. `house-fire` — حريق في البيت
### A fire starts at home · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** دخان أو نار بتنتشر — القرار الوحيد الصح: اخرج فورًا، ومتدخلش تاني.

**Snapshot (EN):** Smoke or flames spreading — the only right move: get out, and never go back in.

#### 🚩 علامات الخطر (Red Flags) — 2

- 1. ريحة دخان أو صفّارة إنذار الدخان
- 2. باب سخن لما تلمسه — نار ورا الباب

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | انزل على الأرض وازحف واطي تحت الدخان لحد المخرج — الدخان التقيل والغازات السامّة بتتجمّع فوق ناحية السقف. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |
| 2 | قبل ما تفتح أي باب، المس الأكرة والباب. لو أي حاجة فيهم سخنة، أو في دخان طالع من حوالين الباب، سيبه مقفول. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |
| 3 | لو هتفتح باب، افتحه بالراحة، وكون مستعد تقفله بسرعة لو لقيت دخان تقيل أو نار. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |
| 4 | لو ماقدرتش توصل لحد محتاج مساعدة: اخرج من البيت وكلّم المطافي، وقولّهم مكانه بالظبط. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |
| 5 | لو ماقدرتش تخرج: اقفل الباب، وسدّ الفتحات والشقوق حواليه بقماش أو شريط لاصق عشان الدخان مايدخلش، وكلّم المطافي. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |
| 6 | لو في حيوانات محبوسة جوّه، قول لرجال المطافي فورًا. | *—* | Ready.gov (FEMA) — Home Fires<br>https://www.ready.gov/home-fires |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماترجعش تاني عشان أي حاجة — النار بتتضاعف في ثواني. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 2 | ماتستخدمش الأسانسير. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 3 | ماتختبيش تحت السرير أو في الدولاب. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| المطافي / الحماية المدنية | **180** | «حريق»، العنوان بالظبط، والدور، وهل في حد محتجز. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل سريع. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **Ready.gov (FEMA) — Home Fires** — https://www.ready.gov/home-fires  
  _A · INGESTED · public domain (FEMA) · machine — every do step extracted from these bytes_
- **American Red Cross — If a Fire Starts** — https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_
- **NFPA — Escape Planning** — https://www.nfpa.org/education-and-research/home-fire-safety/escape-planning  
  _C · CITE-ONLY_

#### ✍️ قرار الطبيب (Clinician Decision) — `house-fire`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 5. `collapse-cpr` — شخص وقع فاقد الوعي (إنعاش قلبي)
### Someone collapses / CPR · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** واحد وقع، مش بيرد ومش بيتنفّس طبيعي. المخ محتاج دم خلال دقايق — الضغط على الصدر بينقذ.

#### 🚩 علامات الخطر (Red Flags) — 2

- 1. مش بيرد لما تنده أو تخبط على كتفه
- 2. مفيش نفس، أو نفس متقطّع زي الشخير

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | أول حاجة: اتأكد إنك انت والمصاب مش في أي خطر. لو في خطر، أمّن المكان الأول. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 2 | لو فاقد الوعي ومش بيتنفّس طبيعي: كلّم الإسعاف ١٢٣ وابدأ الإنعاش على طول. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 3 | سيب التليفون على السبيكر — موظّف الإسعاف هيديك تعليمات إنقاذ الحياة وانت بتضغط. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 4 | اركع جنبه، وحُط كعب إيدك في نص الصدر، والإيد التانية فوقها، وشبّك صوابعك. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 5 | خلّي كتافك فوق إيديك مباشرة، واضغط لتحت بتقل جسمك (مش بذراعك بس) من ٥ لـ ٦ سم. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 6 | كرّر الضغطات بمعدّل من ١٠٠ لـ ١٢٠ ضغطة في الدقيقة، لحد ما الإسعاف يوصل أو تعجز تكمّل. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتسيبش صدره مضغوط — بعد كل ضغطة سيبه يرجع لوضعه الطبيعي وإيدك فاضلة مكانها. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 2 | ماتضغطش بذراعك لوحدها — من غير تقل جسمك مش هتوصل لعمق ٥ سم. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |
| 3 | ماتبطّلش ضغط عشان تجري تدوّر على حاجة — الإسعاف على السبيكر بيوجّهك وانت بتضغط. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «شخص فاقد الوعي مش بيتنفّس» + العنوان بالظبط. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل سريع. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **NHS — CPR** — https://www.nhs.uk/tests-and-treatments/first-aid/cpr/  
  _A · INGESTED · OGL v3 · machine — fetched, hashed, every step extracted from these bytes_
- **NHS — After an accident** — https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/  
  _A · INGESTED · OGL v3 · machine — grounds the scene-safety step_
- **American Red Cross — Hands-Only CPR** — https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `collapse-cpr`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 6. `drowning` — إنقاذ غريق
### Drowning rescue · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** حد بيغرق — والغرق بيبقى صامت وسريع. القاعدة اللي بتنقذ الاتنين: «مدّ أو ارمي، وماتنزلش».

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. راس بتطلع وتنزل وفمه عند سطح الميّه
- 2. مفيش صوت استغاثة — الغرق الحقيقي صامت
- 3. بيبص لفوق وبيحاول يعوم من غير تقدّم

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | لو تقدر توصله بدراعك أو بحاجة طويلة، اعمل كده. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 2 | مدّله عصاية طويلة أو فرع شجرة، أو ارميله حبل مربوط في حاجة بتعوم. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 3 | لو انت متدرّب على الإنقاذ، انزل فورًا — بس بشرط تكون متأكد إنك مش هتتأذى. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 4 | أول ما يطلع: اسعف أي إصابات خطيرة تانية، وخلّيه هادي وثابت مكانه، ودوّر على مساعدة طبية فورًا. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 5 | شيل عنه الهدوم المبلولة الساقعة وغطّيه بحاجة دافية لو ينفع. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 6 | ممكن يكحّ ويتعبه النفس أول ما يرجع يتنفّس — فضل جنبه وطمّنه لحد ما المساعدة توصل. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحطّش نفسك في خطر. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 2 | ماتنزلش الميّه ولا تمشي على تلج إلا لو متأكد تمامًا إنه أمان. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 3 | ماتحاولش تنقذه سباحة بنفسك إلا لو متدرّب على الإنقاذ المائي وتقدر تعمل كده من غير ما تعرّض نفسك للخطر. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |
| 4 | ماتنزلش في ميّه هايجة أو مضطربة ممكن تأذيك. | *—* | MedlinePlus — Non-fatal drowning<br>https://medlineplus.gov/ency/article/000046.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «حالة غرق»، المكان بالظبط، وهل الشخص طلع وبيتنفّس ولا لأ. | ☐ صح ☐ غلط |
| الحماية المدنية/النجدة | **180** | لو محتاج إنقاذ نهري/بحري. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Non-fatal drowning** — https://medlineplus.gov/ency/article/000046.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **American Red Cross — Water Safety (Reach or Throw, Don't Go)** — https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `drowning`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 7. `heart-attack` — أعراض جلطة قلبية (نوبة قلبية)
### Heart attack signs · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** ألم أو ضغط في نص الصدر بيستمر أو بيروح ويرجع، وممكن ينتشر للدراع/الفك/الظهر مع عرق ولهفة. عند الستات ممكن يبان ضيق نفس ودوخة من غير ألم صدر واضح.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. ضغط/عصر في الصدر أكتر من بضع دقايق
- 2. ألم بينتشر للدراع الشمال أو الفك
- 3. عرق بارد وغثيان وضيق نفس مفاجئ

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | كلّم الإسعاف ١٢٣ فورًا لو في ألم في الصدر زي الضغط أو العصر، أو بينتشر للدراع أو الرقبة أو الفك. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 2 | خليه يقعد ويرتاح، ويبطّل أي مجهود. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 3 | لو معاكم أسبرين ٣٠٠ مجم، خليه ياخده — إلا لو عنده حساسية من الأسبرين. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 4 | لو معاه دوا الذبحة الموصوف له، ساعده ياخده. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 5 | لو فقد الوعي وبطّل يتنفّس طبيعي: كلّم الإسعاف وابدأ إنعاش على طول. | *—* | NHS — CPR<br>https://www.nhs.uk/tests-and-treatments/first-aid/cpr/ |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتديش أسبرين لحد عنده حساسية من الأسبرين. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 2 | ماتستناش الألم يروح لوحده — الاتصال بيتم فورًا. | *—* | NHS — Heart attack<br>https://www.nhs.uk/conditions/heart-attack/ |
| 3 | ماتسوقش بيه العربية بدل الإسعاف — الإسعاف بيبدأ علاج في الطريق. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «أعراض جلطة قلبية» + السن + العنوان. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **NHS — Heart attack** — https://www.nhs.uk/conditions/heart-attack/  
  _A · INGESTED · OGL v3 · machine — 'While you're waiting for medical help': sit down and rest, take aspirin 300mg, take angina medication_
- **NHS — CPR** — https://www.nhs.uk/tests-and-treatments/first-aid/cpr/  
  _A · INGESTED · OGL v3 · machine — grounds the deterioration step_
- **American Heart Association — Warning Signs** — https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack  
  _C · CITE-ONLY · NOT machine-fetched_
- **American Red Cross — Heart Attack** — https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `heart-attack`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 8. `stroke-fast` — أعراض سكتة دماغية (اختبار FAST)
### Stroke — act FAST · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** نص الوش واقع، أو دراع مش قادر يرفعها، أو كلام متلخبط — دي سكتة دماغية. الوقت = مخ، وكل دقيقة بتفرق.

#### 🚩 علامات الخطر (Red Flags) — 4

- 1. ابتسامة مايلة/نص وش واقع
- 2. ضعف مفاجئ في دراع أو رجل (غالبًا ناحية واحدة)
- 3. كلام متلعثم أو مش مفهوم
- 4. دوخة/عدم اتزان أو صداع شديد مفاجئ

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | B — التوازن: اسأله هو حاسس بدوخة أو إنه فاقد توازنه؟ | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |
| 2 | E — العين: اسأله عنده مشكلة في الرؤية؟ | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |
| 3 | F — الوش: قوله يبتسم. نص الوش واقع؟ | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |
| 4 | A — الدراع: قوله يرفع دراعيه الاتنين. في دراع بينزل لوحده؟ | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |
| 5 | S — الكلام: قوله يكرّر جملة بسيطة. الكلام متلعثم أو غريب؟ | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |
| 6 | T — الوقت: لو شفت أي علامة من دول، كلّم الطوارئ فورًا. | *—* | CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)<br>https://www.cdc.gov/stroke/signs-symptoms |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتستناش تشوف هيتحسّن. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 2 | ماتديهوش أكل ولا شرب — ممكن يشرق. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 3 | ماتسوقش بيه بنفسك — الإسعاف بيبدأ العلاج ويجهّز فريق السكتة. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «اشتباه سكتة دماغية» + وقت بداية الأعراض + العنوان. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **CDC — Signs and Symptoms of Stroke (B.E. F.A.S.T.)** — https://www.cdc.gov/stroke/signs-symptoms  
  _A · INGESTED · public domain (U.S. CDC) · machine — the six B.E.F.A.S.T. checks extracted from these bytes_
- **CDC — Stroke Signs and Symptoms (legacy path)** — https://www.cdc.gov/stroke/signs-symptoms/index.html  
  _A · جهة صحية رسمية_
- **Stroke Association (UK) — FAST** — https://www.stroke.org.uk/stroke/symptoms  
  _A_

#### ✍️ قرار الطبيب (Clinician Decision) — `stroke-fast`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 9. `anaphylaxis` — رد فعل تحسّسي شديد (حساسية مفرطة)
### Anaphylaxis · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** رد فعل تحسّسي بيهدّد الحياة وبيحصل بسرعة — تورّم وطفح وصعوبة تنفّس بعد أكل/دوا/لسعة. الأدرينالين بينقذ.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. صعوبة تنفّس أو صفير
- 2. تورّم وش/شفايف/لسان/زور
- 3. طفح جلدي منتشر، دوخة أو إغماء بعد التعرّض لمسبب

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | لو معاه حاقن أدرينالين (زي EpiPen): استخدمه فورًا — التعليمات مكتوبة على جنب الحاقن نفسه. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 2 | استخدم الحاقن حتى لو الأعراض لسه بسيطة. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 3 | كلّم الإسعاف ١٢٣ وقول إنها «حساسية مفرطة / أنافيلاكسيس». | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 4 | نيّمه وارفع رجليه. لو بيتعب في نفسه: ارفع كتافه أو قعّده بالراحة. لو حامل: على جنبها الشمال. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 5 | لو اتلسع من حشرة والإبرة لسه في الجلد، حاول تشيلها. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 6 | لو ماتحسّنش خلال ٥ دقايق ومعاك حاقن تاني: استخدمه. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتأخّرش الأدرينالين استنّاء الأعراض «تهدأ» — يتاخد حتى لو بسيطة. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 2 | ماتخليهوش يقف أو يمشي خالص — حتى لو حسّ إنه بقى أحسن. | *—* | NHS — Anaphylaxis<br>https://www.nhs.uk/conditions/anaphylaxis/ |
| 3 | ماتسيبهوش لوحده. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «حساسية مفرطة» + المسبب لو معروف + العنوان. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **NHS — Anaphylaxis** — https://www.nhs.uk/conditions/anaphylaxis/  
  _A · INGESTED · OGL v3 · machine — 'What to do if you have anaphylaxis' extracted from these bytes_
- **American Red Cross — Anaphylaxis** — https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `anaphylaxis`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 10. `infant-choking` — رضيع بيختنق (أقل من سنة)
### Infant choking (under 1) · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** رضيع مش قادر يعيّط ولا يسعل ولا يتنفّس ولونه بيزرقّ. الرضيع بيتعالج غير الكبار: ضرب ظهر + ضغطات صدر — مفيش ضغط بطن أبدًا.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. مفيش صوت عياط ولا سعال
- 2. صوت صفير ضعيف أو مفيش صوت
- 3. الشفايف والوش بيزرقّوا وبيتلبّط بإيديه

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | نيّمه على بطنه على ساعدك، وسند ساعدك على فخذك أو حِضنك، وامسك صدره في إيدك وفكّه بصوابعك، وخلّي راسه مايلة لتحت أوطى من مستوى جسمه. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 2 | اديله لحد ٥ ضربات سريعة وقوية بين لوحي كتفه براحة إيدك التانية. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 3 | اقلبه على ضهره، وسنده على فخذك أو حِضنك، وسند راسه. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 4 | حُط كعب إيد واحدة في نص عظمة الصدر تحت الحلمتين بشوية، واعمل لحد ٥ ضغطات صدر لتحت. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 5 | لو شايف الحاجة اللي قافلة مجرى الهوا، حاول تطلّعها بصباعك — بس بشرط تكون شايفها. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 6 | كمّل ٥ ضرب ظهر وبعدها ٥ ضغطات صدر لحد ما الحاجة تطلع أو الرضيع يغيب عن الوعي. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتعملش إسعاف اختناق لو الرضيع بيسعل بقوة، أو عياطه قوي، أو بيتنفّس كفاية. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 2 | ماتحاولش تمسك الحاجة وتشدّها وهو صاحي وواعي. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |
| 3 | ماتعملش ضرب ظهر وضغطات صدر لو الرضيع بطّل يتنفّس لسبب تاني، زي الربو أو عدوى أو تورّم. | *—* | MedlinePlus — Choking: infant under 1 year<br>https://medlineplus.gov/ency/article/000048.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «رضيع بيختنق ومش بيتنفّس» + العنوان. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل سريع. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Choking: infant under 1 year** — https://medlineplus.gov/ency/article/000048.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — back blows + CHEST thrusts (never abdominal) extracted from these bytes_
- **American Red Cross — Infant Choking** — https://www.redcross.org/take-a-class/resources/learn-first-aid/infant-choking  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `infant-choking`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 11. `car-accident` — حادثة عربية (مكان الحادث)
### Car accident scene · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** حادثة قدّامك أو انت طرف فيها. الترتيب اللي بينقذ: أمّن المكان ← كلّم النجدة ← اسعف. سلامتك الأول، عشان ماتبقاش ضحية تانية.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. تسريب بنزين أو دخان
- 2. عربيات لسه جاية بسرعة على مكان الحادث
- 3. مصاب مش بيرد أو مش بيتنفّس، أو نزيف غزير

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 7 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | أول حاجة: اتأكد إنك انت والمصاب مش في أي خطر. لو في خطر، أمّن المكان الأول. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 2 | لمّا يبقى آمن، اكشف على المصاب، وكلّم الإسعاف لو محتاج. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 3 | لو باين إنه مش واعي: نده عليه بصوت عالي واسأله هو كويس ويقدر يفتح عينيه؟ | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 4 | لو ردّ عليك، سيبه في وضعه لحد ما المساعدة توصل، وفضل تراقب تنفّسه ونبضه ودرجة استجابته. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 5 | لو مفيش رد: سيبه في وضعه وافتح مجرى الهوا. لو ماينفعش في وضعه، نيّمه بالراحة على ضهره وبعدين افتح المجرى. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 6 | عشان تفتح مجرى الهوا: حُط إيد على جبهته وميّل راسه لورا بالراحة، وارفع طرف الدقن بصباعين. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 7 | اكشف على التنفّس: بُصّ على صدره طالع ونازل، واسمع عند بقّه ومناخيره، وحُسّ نَفَسه على خدّك لمدة ١٠ ثواني. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتضغطش على أرضية البق — ده بيدفع اللسان لفوق ويسدّ مجرى الهوا. | *—* | NHS — After an accident<br>https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/ |
| 2 | ماتقفش في مسار العربيات. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 3 | ماتشيلش خوذة راكب الموتوسيكل إلا لو مش بيتنفّس. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |
| 4 | ماتديش المصاب أكل ولا شرب. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «حادثة طريق» + عدد المصابين + المكان بدقّة. | ☐ صح ☐ غلط |
| النجدة / الشرطة | **122** | لتأمين الطريق وعمل المحضر. | ☐ صح ☐ غلط |
| الحماية المدنية | **180** | لو في حريق أو حد محتجز جوّه العربية. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **NHS — After an incident (first aid)** — https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/  
  _A · INGESTED · OGL v3 · © Crown copyright · machine — scene safety, ABC checks and airway-opening extracted from these bytes (they live in paragraphs, not lists)_
- **American Red Cross — First Aid Steps (Check · Call · Care)** — https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_
- **St John Ambulance — How to manage a traffic accident** — https://www.sja.org.uk/first-aid-advice/traffic-collision/  
  _C · CITE-ONLY_

#### ✍️ قرار الطبيب (Clinician Decision) — `car-accident`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 12. `skull-fracture` — كسر في الجمجمة
### Skull fracture · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** إصابة في الراس ممكن يبقى معاها كسر في الجمجمة. لو النفس أو الدورة الدموية فيهم مشكلة، أو الشخص فاقد الوعي، اطلب مساعدة طبية فورًا.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. فيه مشكلة في النفس أو الدورة الدموية.
- 2. فيه سائل شفاف نازل من المناخير أو الودان.
- 3. الشخص فاقد الوعي، أو بيتشنّج، أو عنده إصابات متعددة، أو باين عليه أي ضيق، أو مش قادر يفكّر بوضوح.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | افحص مجرى الهوا والنفس والدورة الدموية. لو ضروري، ابدأ تنفّس إنقاذي وإنعاش قلبي رئوي. | Check the airways, breathing, and circulation. If necessary, begin rescue breathing and CPR. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |
| 2 | لو لازم تحرّكه، ثبّت راسه ورقبته. حُط إيديك على الناحيتين من راسه وتحت كتافه، وماتخلّيش راسه تنحني لقدّام أو لورا، ولا تلف أو تدور. | If the person must be moved, take care to stabilize the head and neck. Place your hands on both sides of the head and under the shoulders. Do not allow the head to bend forward or backward, or to twist or turn. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |
| 3 | لو فيه نزيف، اضغط بقوة بقماشة نضيفة على مساحة واسعة عشان تقلّل فقدان الدم، بس ماتضغطش مباشرة على مكان شاكك إنه كسر في الجمجمة. | If there is bleeding, apply firm pressure with a clean cloth over a broad area to control blood loss, but do not apply pressure directly onto a suspected skull fracture. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |
| 4 | لو الدم شرّب القماشة، ماتشيلهاش. حُط قماش أكتر فوقها وكمّل ضغط. | If blood soaks through, do not remove the original cloth. Instead, apply more cloths on top, and continue to apply pressure. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |
| 5 | لو بيرجّع، ثبّت راسه ورقبته ولفّه بالراحة على جنبه عشان مايشرقش في الترجيع. | If the person is vomiting, stabilize the head and neck, and carefully turn the victim to the side to prevent choking on vomit. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |

#### ⛔ ماتعملش (DON'T) — 2 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحرّكوش إلا لو ضروري جدًا؛ إصابات الراس ممكن يبقى معاها إصابات في العمود الفقري. | Do not move the person unless absolutely necessary. Head injuries may be associated with spinal injuries. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |
| 2 | ماتشيلش أي جسم بارز. | Do not remove protruding objects. | MedlinePlus — Skull fracture<br>https://medlineplus.gov/ency/article/000060.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | إصابة في الراس واحتمال كسر في الجمجمة؛ اشرح حالة النفس والوعي وأي نزيف. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Skull fracture** — https://medlineplus.gov/ency/article/000060.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `skull-fracture`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 13. `unconsciousness` — فقدان الوعي — إسعافات أولية
### Unconsciousness - first aid · **Level 5** · طوارئ

**اللقطة (Snapshot AR):** قدامك شخص فاقد الوعي ومش بيرد. دورك تتابع تنفّسه ونبضه، تأمّن مجرى الهوا، وتطلب المساعدة الطبية.

#### 🚩 علامات الخطر (Red Flags) — 5

- 1. مش بيرجع لوعيه بسرعة، خلال دقيقة.
- 2. وقع أو اتصاب، خصوصًا لو بينزف.
- 3. مش بيتنفّس.
- 4. حاسس بألم أو ضغط أو عدم راحة في الصدر، أو ضربات قلبه قوية أو مش منتظمة.
- 5. مش قادر يتكلم، أو عنده مشكلة في النظر، أو مش قادر يحرّك دراعاته ورجليه.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 8 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | راجع مجرى الهوا والتنفس والنبض بشكل متكرر. لو محتاج، ابدأ الإنعاش القلبي الرئوي. | Check the person's airway, breathing, and pulse frequently. If necessary, begin CPR. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 2 | لو بيتنفّس ونايم على ضهره، وإنت مش شاكك في إصابة في العمود الفقري، لفّه بحذر ناحيتك على جنبه. اثني الرجل اللي فوق بحيث الفخذ والركبة يبقوا بزاوية قائمة. ميّل راسه لورا بالراحة عشان مجرى الهوا يفضل مفتوح. لو التنفس أو النبض وقف في أي وقت، رجّعه على ضهره وابدأ الإنعاش القلبي الرئوي. | If the person is breathing and lying on their back, and you do not think there is a spinal injury, carefully roll the person toward you onto their side. Bend the top leg so both hip and knee are at right angles. Gently tilt their head back to keep the airway open. If breathing or pulse stops at any time, roll the person onto their back and begin CPR. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 3 | لو شاكك في إصابة في العمود الفقري، سيبه مكان ما لقيته طول ما التنفس مستمر. لو رجّع، لف جسمه كله مرة واحدة على جنبه. اسند رقبته وضهره عشان الراس والجسم يفضلوا في نفس الوضع وإنت بتلفّه. | If you think there is a spinal injury, leave the person where you found them (as long as breathing continues). If the person vomits, roll the entire body at one time to their side. Support their neck and back to keep the head and body in the same position while you roll. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 4 | دفّيه لحد ما المساعدة الطبية توصل. | Keep the person warm until medical help arrives. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 5 | لو شايفه بيُغمى عليه، حاول تمنعه من الوقوع. مدّده على الأرض وارفع رجليه حوالي ١٢ بوصة، يعني ٣٠ سنتيمتر. | If you see a person fainting, try to prevent a fall. Lay the person flat on the floor and raise their feet about 12 inches (30 centimeters). | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 6 | لو غالبًا الإغماء سببه انخفاض سكر الدم، ادّيه حاجة مسكّرة ياكلها أو يشربها بس بعد ما يفوق. | If fainting is likely due to low blood sugar, give the person something sweet to eat or drink only when they become conscious. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 7 | لو شايف حاجة سايبة سادة مجرى الهوا، حاول تشيلها. لو الحاجة محشورة في زوره، ماتحاولش تمسكها؛ ده ممكن يزقّها لجوه مجرى الهوا أكتر. | If you see something blocking the airway and it is loose, try to remove it. If the object is lodged in the person's throat, do not try to grasp it. This can push the object farther into the airway. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 8 | كمّل الإنعاش القلبي الرئوي، وفضّل راجع إذا الحاجة اتحركت من مكانها، لحد ما المساعدة الطبية توصل. | Continue CPR and keep checking to see if the object is dislodged until medical help arrives. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتديش الشخص الفاقد الوعي أي أكل أو شرب. | Do not give an unconscious person any food or drink. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 2 | ماتسيبوش لوحده. | Do not leave the person alone. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 3 | ماتحطّش مخدة تحت راس الشخص الفاقد الوعي. | Do not place a pillow under the head of an unconscious person. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |
| 4 | ماتضربوش على وشه وماترشش مية على وشه عشان تحاول تفوّقه. | Do not slap an unconscious person's face or splash water on their face to try to revive them. | MedlinePlus — Unconsciousness - first aid<br>https://medlineplus.gov/ency/article/000022.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | شخص فاقد الوعي، واذكر إذا كان بيتنفّس أو مصاب أو بينزف. | ☐ صح ☐ غلط |
| الطوارئ الموحّدة | **112** | بديل لو محتاج طوارئ موحّدة. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Unconsciousness - first aid** — https://medlineplus.gov/ency/article/000022.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `unconsciousness`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 14. `dislocation` — خلع في المفصل
### Dislocation · **Level 4** · إصابات

**اللقطة (Snapshot AR):** لو مفصل شكله اتغيّر أو شاكك إنه اتخلع، ماتحاولش ترجّعه مكانه. ثبّته زي ما لقيته واتصل بالإسعاف.

#### 🚩 علامات الخطر (Red Flags) — 5

- 1. عضمة طالعة من الجلد.
- 2. خلع أو كسر معروف أو مشتبه فيه.
- 3. المنطقة تحت المفصل المصاب باهتة أو باردة أو معرّقة ولزجة أو مزرقة.
- 4. نزيف شديد.
- 5. علامات عدوى زي سخونة أو احمرار مكان الإصابة، صديد، أو حرارة في الجسم.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اتصل بالطوارئ قبل ما تبدأ تساعد حد ممكن يكون عنده خلع، خصوصًا لو الحادث اللي سبّب الإصابة ممكن يهدد حياته. | Call 911 or the local emergency number before you begin treating someone who may have a dislocation, especially if the accident that caused the injury may be life threatening. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 2 | لو الإصابة خطيرة، اتأكد من مجرى الهوا والتنفس والدورة الدموية. ولو محتاج، ابدأ إنعاش قلبي رئوي أو سيطر على النزيف. | If the person has a serious injury, check their airway, breathing, and circulation. If necessary, begin CPR, or bleeding control. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 3 | لو الجلد مفتوح، امنع العدوى: ماتنفخش على الجرح. اشطف المكان بالراحة بميّه نضيفة عشان تشيل التراب اللي شايفه، بس ماتفركش ولا تنكش فيه. غطّيه بشاش معقم قبل ما تثبّت المفصل، وماتحاولش ترجع العضمة مكانها إلا لو إنت متخصص عظام. | If the skin is broken, take steps to prevent infection. Do not blow on the wound. Rinse the area gently with clean water to remove any dirt you can see, but do not scrub or probe. Cover the area with sterile dressings before immobilizing the injured joint. Do not attempt to put the bone back in place unless you are a bone specialist. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 4 | ثبّت المفصل المصاب بجبيرة أو حمّالة في نفس الوضع اللي لقيته عليه. ماتحرّكش المفصل، وثبّت كمان المنطقة اللي فوق الإصابة واللي تحتها. | Apply a splint or sling to the injured joint in the position in which you found it. Do not move the joint. Also immobilize the area above and below the injured area. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 5 | افحص الدورة الدموية حوالين الإصابة بإنك تضغط جامد على الجلد في المكان المصاب. المفروض يبيضّ وبعد ما تبطل ضغط يرجع لونه خلال ثانيتين تقريبًا. ماتعملش الخطوة دي لو الجلد مفتوح عشان تقلل خطر العدوى. | Check blood circulation around the injury by pressing firmly on the skin in the affected area. It should turn white, then regain color within a couple of seconds after you stop pressing on it. To reduce the risk for developing infection, do not do this step if the skin is broken. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 6 | حط كمادات تلج عشان تخفف الوجع والتورم، بس ماتحطش التلج على الجلد مباشرة؛ لفّه في قماشة نضيفة. | Apply ice packs to ease pain and swelling, but do not put ice directly on the skin. Wrap the ice in a clean cloth. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |

#### ⛔ ماتعملش (DON'T) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحرّكش الشخص لو شاكك إن راسه أو ضهره أو رجله اتصابت. خليه هادي وثابت. | Do not move the person if you think that their head, back, or leg has been injured. Keep the person calm and still. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 2 | ماتحرّكش الشخص إلا بعد ما الإصابة تتثبّت بالكامل. | Do not move the person unless the injury has been completely immobilized. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 3 | ماتحاولش تفرد عضمة أو مفصل شكله متغيّر، ولا تحاول تغيّر وضعه. | Do not attempt to straighten a misshapen bone or joint or try to change its position. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 4 | ماتختبرش العضمة أو المفصل اللي شكله متغيّر عشان تشوف فقد وظيفته ولا لأ. | Do not test a misshapen bone or joint for loss of function. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |
| 5 | ماتديش الشخص أي حاجة عن طريق البق. | Do not give the person anything by mouth. | MedlinePlus — Dislocation<br>https://medlineplus.gov/ency/article/000014.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | قول إن فيه خلع أو كسر مشتبه فيه، ووصف مكان الإصابة وأي نزيف أو تغيّر لون تحت المفصل. | ☐ صح ☐ غلط |
| الطوارئ الموحّدة | **112** | بديل لو محتاج طوارئ. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Dislocation** — https://medlineplus.gov/ency/article/000014.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `dislocation`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 15. `genital-injury` — إصابة في الأعضاء التناسلية
### Genital injury · **Level 4** · إصابات

**اللقطة (Snapshot AR):** لو حصلت إصابة في الأعضاء التناسلية، غطّي المكان وحافظ على خصوصية المصاب، وسيطر على النزيف بضغط مباشر بقطعة قماش نضيفة أو غيار معقّم.

#### 🚩 علامات الخطر (Red Flags) — 5

- 1. تورّم أو كدمات كتير
- 2. دم في البول
- 3. صعوبة في التبوّل
- 4. وجع أو نزيف أو تورّم
- 5. فيه قلق إن يكون حصل اعتداء جنسي

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | هَدّي المصاب، وراعي خصوصيته، وغطّي المكان المصاب وإنت بتعمل الإسعافات الأولية. | Keep the person calm. Be sensitive to privacy. Cover the injured area while giving first aid. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |
| 2 | سيطر على النزيف بضغط مباشر، وحط قطعة قماش نضيفة أو غيار معقّم على أي جرح مفتوح. لو فيه نزيف شديد من المهبل، حط شاش معقّم أو قماش نضيف على المكان، إلا لو شاكك إن فيه جسم غريب. | Control bleeding by using direct pressure. Place a clean cloth or sterile dressing on any open wounds. If the vagina is bleeding severely, put sterile gauze or clean cloths on the area, unless a foreign body is suspected. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |
| 3 | حط كمّادات باردة عشان تساعد تقلّل التورّم. | Apply cold compresses to help reduce swelling. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |
| 4 | لو الخصيتين اتصابوا، اسندهم بحمّالة معمولة من فوط، وحطهم على قماشة مبطّنة زي الحفاضة. | If the testicles have been injured, support them with a sling made from towels. Place them on a padded cloth, such as a diaper. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |
| 5 | لو فيه جسم عالق في فتحة في الجسم أو في جرح، سيبه مكانه واطلب مساعدة طبية؛ إخراجه ممكن يسبّب ضرر أكتر. | If there is an object stuck in a body opening or wound, leave it alone and seek medical attention. Taking it out may cause more damage. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |

#### ⛔ ماتعملش (DON'T) — 2 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحاولش تشيل جسم عالق بنفسك؛ اطلب مساعدة طبية فورًا. | DO NOT try to remove an object by yourself. Seek medical help right away. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |
| 2 | ماتقولش توقّعاتك عن الإصابة حصلت إزاي. لو شاكك إنها نتيجة اعتداء أو إساءة، ماتخليش المصاب يغيّر هدومه أو ياخد حمّام، واطلب مساعدة طبية فورًا. | Never volunteer your thoughts on how you think the injury happened. If you think the injury was the result of assault or abuse, DO NOT let the person change clothes or take a bath or shower. Seek medical help right away. | MedlinePlus — Genital injury<br>https://medlineplus.gov/ency/article/000044.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | فيه إصابة في الأعضاء التناسلية وعايز مساعدة طبية فورًا. | ☐ صح ☐ غلط |
| الطوارئ الموحّدة | **112** | بديل لو محتاج توصل للطوارئ. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Genital injury** — https://medlineplus.gov/ency/article/000044.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `genital-injury`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 16. `burn` — حرق (حرارة أو سوائل مغلية)
### Burn / scald · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** جلد اتحرق من نار أو ميّه/زيت سخن. التبريد بميّه جارية بسرعة بيقلّل الضرر والألم بشكل كبير.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. احمرار وألم وفقاقيع
- 2. حرق كبير أو عميق
- 3. حرق في الوش/اليد/المفصل/الأعضاء الحساسة، أو عند طفل/كبير سن = خطر أعلى

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | سيّب ميّه ساقعة تجري على مكان الحرق، أو انقعه في ميّه ساقعة — مش ميّه بتلج. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 2 | هدّي الشخص وطمّنه. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 3 | بعد ما تغسله أو تنقعه، غطّي الحرق بشاش معقّم ناشف أو قماشة نضيفة. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 4 | احمي الحرق من أي ضغط أو احتكاك. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 5 | لو الهدوم بتولّع: لُفّ الشخص في حاجة تخينة زي بطانية أو معطف صوف أو سجادة عشان تطفّي النار. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |

#### ⛔ ماتعملش (DON'T) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتشيلش الهدوم المحروقة اللي لازقة في الجلد. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 2 | ماتحطّش زيت ولا زبدة ولا تلج ولا أدوية ولا كريم ولا أي وصفة بيتية على حرق شديد. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 3 | ماتتنفّسش ولا تنفخ ولا تكحّ على الحرق. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 4 | ماتعبثش بالفقاقيع ولا بالجلد الميّت. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |
| 5 | ماتديش الشخص أي حاجة بالبق لو الحرق شديد. | *—* | MedlinePlus — Burns<br>https://medlineplus.gov/ency/article/000030.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | لو حرق كبير/عميق، أو في الوش/الأعضاء الحساسة. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Burns** — https://medlineplus.gov/ency/article/000030.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **NHS — Burns and scalds: Treatment** — https://www.nhs.uk/conditions/burns-and-scalds/treatment/  
  _B · corroborating · ingested, but its tick-lists are prevention advice, not the procedure_
- **British Red Cross — Burns** — https://www.redcross.org.uk/first-aid/learn-first-aid/burns  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted_

#### ✍️ قرار الطبيب (Clinician Decision) — `burn`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 17. `seizure` — نوبة صرع (تشنّج)
### Seizure · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد بيرتجف/يتشنّج فجأة وممكن يقع ويفقد الوعي. أغلب النوبات بتقف لوحدها خلال دقايق — دورك تأمّنه.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. تصلّب وارتجاف مفاجئ
- 2. فقدان وعي أو تحديق/شرود
- 3. ريالة، وأحيانًا تبوّل لا إرادي

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 9 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | افضل مع الشخص. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 2 | لو باين إنه هيقع، نزّله على الأرض بالراحة. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 3 | شيل أي حاجة قريبة منه ممكن تأذيه، وفضّي المكان حواليه. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 4 | لفّه بالراحة على جنبه وبقّه ناحية الأرض — ده بيخلّي مجرى الهوا مفتوح. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 5 | حُط حاجة طرية ومسطّحة تحت راسه، زي جاكت. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 6 | شيل نضّارته، وفكّ أي حاجة حوالين رقبته ممكن تعوّق التنفّس. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 7 | احسب وقت النوبة عشان تعرف لو عدّت ٥ دقايق. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 8 | شوف لو لابس إسورة طبية فيها معلومات عن حالته وأدويته. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 9 | لمّا النوبة تخلص، ساعده يقعد في مكان آمن يرتاح فيه، ولمّا يبقى واعي طمّنه واحكيله اللي حصل. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتمسكوش بالعافية وماتوقّفش حركته — ممكن تأذيه وتأذي نفسك. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 2 | ماتحطّش أي حاجة في بقّه — ممكن تكسر سنانه أو فكّه. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 3 | ماتديش نفس صناعي أثناء النوبة — الناس عادةً بترجع تتنفّس لوحدها بعدها. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |
| 4 | ماتديهوش ميّه ولا أكل لحد ما يبقى واعي تمامًا — ممكن يشرق. | *—* | CDC — First Aid for Seizures<br>https://www.cdc.gov/epilepsy/first-aid-for-seizures |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | لو النوبة عدّت ٥ دقايق، أو أول نوبة في حياته، أو اتأذى، أو نوبة ورا نوبة، أو مش بيفوق. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **CDC — First Aid for Seizures** — https://www.cdc.gov/epilepsy/first-aid-for-seizures  
  _A · INGESTED · public domain (U.S. CDC) · machine — every do/dont step extracted from these bytes_
- **NHS —Seizure first aid** — https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/  
  _A_

#### ✍️ قرار الطبيب (Clinician Decision) — `seizure`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 18. `electric-shock` — صعق كهربائي
### Electric shock · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد اتصعق بالكهربا وممكن يكون لسه ملامس المصدر. سلامتك الأول — ماتلمسوش قبل ما تفصل الكهربا.

#### 🚩 علامات الخطر (Red Flags) — 4

- 1. ملامس سلك/جهاز كهربائي
- 2. تشنّج أو فقدان وعي
- 3. حرق في مكان دخول/خروج التيار
- 4. مش بيتنفّس

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 7 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | لو تقدر تعمل كده بأمان، اقفل التيار: اشلح الفيشة، أو اقفل القاطع، أو اطفي المفتاح الرئيسي. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 2 | لو مش قادر تقفل التيار: استخدم حاجة ماتوصّلش كهربا — مقشة، كرسي، سجادة، أو دعّاسة كاوتش — عشان تبعّد الشخص عن المصدر. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 3 | أول ما يبعد عن مصدر الكهربا، اكشف على مجرى الهوا والتنفّس والنبض. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 4 | لو فاقد الوعي ومش حاسس بنبض، ابدأ إنعاش (CPR). | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 5 | لو عنده حرق: شيل الهدوم اللي بتطلع بسهولة، واغسل مكان الحرق بميّه ساقعة جارية. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 6 | لو باين عليه إغماء أو شحوب أو علامات صدمة: نيّمه وراسه أوطى شوية من جسمه. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 7 | افضل مع الشخص لحد ما المساعدة الطبية توصل. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |

#### ⛔ ماتعملش (DON'T) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتقربش أقل من ٦ متر من حد بيتصعق بكهربا ضغط عالي. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 2 | ماتلمسش الشخص بإيدك العريانة وهو لسه ملامس مصدر الكهربا. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 3 | ماتحطّش تلج ولا زبدة ولا مراهم ولا قطن ولا بلاستر على الحرق. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 4 | ماتشيلش الجلد الميّت وماتفقّعش الفقاقيع لو اتحرق. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |
| 5 | بعد ما تقفل التيار، ماتحرّكش الشخص إلا لو في خطر مستمر زي حريق. | *—* | MedlinePlus — Electrical injury<br>https://medlineplus.gov/ency/article/000053.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «صعق كهربائي» + حالة الوعي والتنفّس. | ☐ صح ☐ غلط |
| المطافي/الحماية المدنية | **180** | لو في حريق أو كهربا ضغط عالي. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Electrical injury** — https://medlineplus.gov/ency/article/000053.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **NHS — First aid (electric shock)** — https://www.nhs.uk/tests-and-treatments/first-aid/  
  _C · CITE-ONLY · hub page; no procedure extracted from it_
- **American Red Cross — Shock** — https://www.redcross.org/take-a-class/resources/learn-first-aid/shock  
  _A_

#### ✍️ قرار الطبيب (Clinician Decision) — `electric-shock`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 19. `poisoning` — تسمّم — حد بلع مادة أو دوا
### Poisoning (swallowed) · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد (غالبًا طفل) بلع مادة كيماوية أو دوا. أخطر غلط شائع وأشهره: إنك تخليه يرجّع.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. علبة أو زجاجة مفتوحة جنبه
- 2. ريحة غريبة من بقّه أو حروق حوالين الشفايف
- 3. قيء أو لعاب زايد، دوخة، أو تشنّج

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | كلّم الإسعاف ١٢٣ أو روح الطوارئ فورًا لو حد بلع أو لمس أو استنشق مادة ضارّة. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 2 | لو فاقد الوعي ومش بيتنفّس: ابدأ إنعاش (CPR) على طول. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 3 | لو فاقد الوعي بس بيتنفّس: حُطّه في وضع الإفاقة على جنبه، وفضل تراقب تنفّسه. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 4 | لو صاحي: فضل تتكلّم معاه عشان تتأكد إنه ما غابش عن الوعي. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 5 | دوّر على سبب التسمّم — علبة، شريط دوا، عبوة — وخُدها معاك للمستشفى. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحاولش تخليه يرجّع أبدًا — ممكن يشرق ويبطّل تنفّس. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 2 | ماتديهوش أي حاجة ياكلها أو يشربها — لا ميّه ولا لبن. | *—* | NHS — Poisoning<br>https://www.nhs.uk/conditions/poisoning/ |
| 3 | ماتديش أي «ترياق شعبي»، وماتستناش الأعراض تظهر. | *—* | — بدون مصدر مربوط —<br>⚠️ NO source tag on this step — clinician must verify independently |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «حالة تسمّم» + اسم المادة والكمية ووقت البلع. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل سريع. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **NHS — Poisoning** — https://www.nhs.uk/conditions/poisoning/  
  _A · INGESTED · OGL v3 · machine — fetched, hashed, fields extracted from these bytes_
- **Poison Control (NCPC) — First aid for poisonings** — https://www.poison.org/first-aid-for-poisonings  
  _A · CITE-ONLY · human — not machine-fetched_
- **American Red Cross — Poison Exposure** — https://www.redcross.org/take-a-class/resources/learn-first-aid/poison-exposure  
  _C · CITE-ONLY · NOT machine-verified — redcross.org returns 403 to scripts; copyrighted, cite not copy_

#### ✍️ قرار الطبيب (Clinician Decision) — `poisoning`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 20. `heat-stroke` — إجهاد حراري وضربة شمس
### Heat exhaustion & heat stroke · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** الفرق بينهم حياة أو موت: إجهاد حراري (عرق غزير، جلد بارد شاحب) بيتحسّن بالتبريد خلال نص ساعة. ضربة شمس (جلد سخن، تشوّش، إغماء) = طوارئ فورية.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. تشوّش أو كلام مش مفهوم
- 2. جلد سخن وأحمر (ناشف أو رطب)
- 3. إغماء أو قيء متكرّر مع حرارة عالية جدًا

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | نيّمه في مكان بارد، وارفع رجليه حوالي ٣٠ سنتيمتر. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 2 | حُط على جلده قماش مبلول ساقع (أو ميّه ساقعة على طول)، واستخدم مروحة عشان تنزّل حرارة جسمه. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 3 | لو واعي، ادّيله مشروب يرشف منه بالراحة — زي مشروب رياضي، أو ميّه بشوية ملح. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 4 | لو عنده تقلّصات عضلية: ادّيله المشروبات دي، ودلّك العضلة برفق بس بثبات لحد ما التقلّص يروح. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 5 | لو ظهرت عليه علامات صدمة (شفايف وأظافر بتزرقّ، ووعي بيقلّ) أو بدأ يتشنّج: دي طوارئ. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |

#### ⛔ ماتعملش (DON'T) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتديهوش أدوية الحرارة زي الأسبرين أو الباراسيتامول. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 2 | ماتديهوش أقراص ملح. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 3 | ماتديهوش مشروبات فيها كحول أو كافيين — بتصعّب على جسمه إنه يتحكّم في حرارته. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 4 | ماتمسحش جلده بالكحول. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |
| 5 | ماتديهوش أي حاجة بالبق — ولا حتى مشروب بملح — لو بيرجّع أو فاقد الوعي. | *—* | MedlinePlus — Heat emergencies<br>https://medlineplus.gov/ency/article/000056.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | «اشتباه ضربة شمس — تشوّش وجلد سخن» + المكان. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل سريع. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Heat emergencies** — https://medlineplus.gov/ency/article/000056.htm  
  _A · INGESTED · public domain (U.S. NLM) · machine — every do/dont step extracted from these bytes_
- **CDC — Heat-related illnesses (first aid)** — https://www.cdc.gov/niosh/heat-stress/about/illnesses.html  
  _B · corroborating (reachable, not ingested)_
- **NHS — Heat exhaustion and heatstroke** — https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/  
  _A_
- **American Red Cross — Heat Stroke** — https://www.redcross.org/take-a-class/resources/learn-first-aid/heat-stroke  
  _A_

#### ✍️ قرار الطبيب (Clinician Decision) — `heat-stroke`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 21. `head-injury` — إصابة في الراس
### Head injury · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد خبط راسه أو وقع على راسه. أغلب الخبطات بسيطة، بس الراس والرقبة حسّاسين — أمّنه، ثبّت راسه، راقبه كويس، وأي علامة خطر كلّم الإسعاف على طول.

#### 🚩 علامات الخطر (Red Flags) — 5

- 1. المصاب بطّل يتنفّس.
- 2. نزيف شديد في الراس أو الوش.
- 3. المصاب مشوّش أو تعبان أو مش واعي.
- 4. بيترجّع أكتر من مرة.
- 5. حدقتين العين (السواد اللي في نص العين) مش متساويين في الحجم.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اطمّن على مجرى الهوا والتنفّس والدورة الدموية عند المصاب. ولو محتاج، ابدأ تنفّس صناعي وإنعاش قلبي (CPR). | Check the person's airway, breathing, and circulation. If necessary, begin rescue breathing and CPR. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 2 | لو نفَسه ونبضه طبيعيين بس مش واعي، اعتبر إن فيه إصابة في العمود الفقري. ثبّت الراس والرقبة بإنك تحط إيديك على جنبي راسه، وخليها في خط واحد مع الظهر ومتسيبهاش تتحرك، واستنى الإسعاف. | If the person's breathing and heart rate are normal, but the person is unconscious, treat as if there is a spinal injury. Stabilize the head and neck by placing your hands on both sides of the person's head. Keep the head in line with the spine and prevent movement. Wait for medical help. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 3 | وقّف أي نزيف بإنك تضغط بقوة بقماشة نضيفة على الجرح، إلا لو شاكك إن فيه كسر في الجمجمة. ولو الإصابة خطيرة، خلي بالك ماتحرّكش راسه. ولو الدم نشّ في القماشة، ماتشيلهاش — حط قماشة تانية فوق الأولى. | Stop any bleeding by firmly pressing a clean cloth on the wound, unless you suspect a skull fracture. If the injury is serious, be careful not to move the person's head. If blood soaks through the cloth, do not remove it. Place another cloth over the first one. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 4 | لو شاكك إن فيه كسر في الجمجمة، ماتضغطش على مكان النزيف على طول، وماتشيلش أي حاجة واقعة جوه الجرح. غطّي الجرح بشاش معقّم. | If you suspect a skull fracture, do not apply direct pressure to the bleeding site, and do not remove any debris from the wound. Cover the wound with sterile gauze dressing. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 5 | حط كمّادات تلج على الأماكن المتورّمة (لفّ التلج في فوطة عشان ماياخدش على الجلد على طول). | Apply ice packs to swollen areas (cover ice in a towel so it does not directly touch the skin). | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |

#### ⛔ ماتعملش (DON'T) — 6 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحرّكش المصاب إلا للضرورة القصوى. | Do not move the person unless absolutely necessary. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 2 | ماتشيلش أي حاجة غارزة أو نافرة من الجرح. | Do not remove any object sticking out of a wound. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 3 | ماتهزّش المصاب لو باين عليه إنه مش مركّز أو سرحان. | Do not shake the person if they seem dazed. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 4 | ماتشيلش الخوذة لو شاكك إن الإصابة في الراس خطيرة. | Do not remove a helmet if you suspect a serious head injury. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 5 | ماتغسلش جرح الراس لو كان عميق أو بينزف كتير. | Do not wash a head wound that is deep or bleeding a lot. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |
| 6 | ماتشيلش طفل وقع ولسّه عليه أي علامة إصابة في الراس. | Do not pick up a fallen child with any sign of head injury. | MedlinePlus — Head injury<br>https://medlineplus.gov/ency/article/000028.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | حصلت إصابة في الراس، والمصاب [مش واعي / بينزف بشدة / بيترجّع / بطّل يتنفّس]، وعايزين إسعاف بسرعة. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل لو الإسعاف مارّدش. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Head injury** — https://medlineplus.gov/ency/article/000028.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `head-injury`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 22. `shock` — صدمة (هبوط حاد في الدورة الدموية)
### Shock · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** الصدمة حالة طارئة وخطيرة لازم تتصرّف فيها بسرعة. أهم حاجة: اطلب إسعاف على طول، أمّن تنفّسه، دفّيه، ونيّمه في وضع الصدمة لحد ما المساعدة توصل.

#### 🚩 علامات الخطر (Red Flags) — 1

- 1. اتصل بالإسعاف في أي وقت تظهر فيه أعراض صدمة على الشخص، وافضل معاه واتبع خطوات الإسعاف لحد ما تيجي المساعدة الطبية.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 8 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اتصل بالإسعاف على طول عشان تجيب مساعدة طبية فورية. | Call 911 or the local emergency number for immediate medical help. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 2 | اكشف على مجرى هوا الشخص وتنفّسه والدورة الدموية. ولو لزم الأمر، ابدأ تنفّس صناعي وإنعاش قلبي رئوي (CPR). | Check the person's airway, breathing, and circulation. If necessary, begin rescue breathing and CPR. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 3 | حتى لو الشخص بيتنفّس لوحده، فضّل تتابع معدّل تنفّسه كل ٥ دقايق على الأقل لحد ما تيجي المساعدة. | Even if the person is able to breathe on their own, continue to check rate of breathing at least every 5 minutes until help arrives. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 4 | لو الشخص واعي ومفيش عنده إصابة في الراس أو الرجل أو الرقبة أو العمود الفقري، حطّه في وضع الصدمة: نيّمه على ضهره وارفع رجليه حوالي ٣٠ سم. ماترفعش راسه. ولو رفع رجليه هيوجّعه أو يضرّه، سيبه نايم على مسطّح. | If the person is conscious and does not have an injury to the head, leg, neck, or spine, place the person in the shock position. Lay the person on their back and elevate their legs about 12 inches (30 centimeters). Do not elevate their head. If raising the legs will cause pain or potential harm, leave the person lying flat. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 5 | قدّم الإسعافات المناسبة لأي جروح أو إصابات أو أمراض. | Give appropriate first aid for any wounds, injuries, or illnesses. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 6 | دفّي الشخص وخلّيه مرتاح، وفكّ أي هدوم ضيّقة. | Keep the person warm and comfortable. Loosen tight clothing. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 7 | لو مش شاكّ في إصابة بالعمود الفقري، لُفّ الشخص أو راسه على جنب عشان تمنع الشرقة. | Turn the person or their head to one side to prevent choking if you do not suspect an injury to the spine. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 8 | لو فيه شكّ في إصابة بالعمود الفقري، لفّه بطريقة «اللفّة الواحدة» بدل كده: خلّي راسه ورقبته وضهره على خط واحد، ولفّ الجسم والراس كوحدة واحدة. | If a spinal injury is suspected, "log roll" the person instead. To do this, keep the person's head, neck, and back in line, and roll the body and head as a unit. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |

#### ⛔ ماتعملش (DON'T) — 3 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتديش الشخص أي حاجة بقّه، لا أكل ولا شرب. | Do not give the person anything by mouth, including anything to eat or drink. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 2 | ماتحرّكش الشخص لو عنده إصابة معروفة أو مشكوك فيها في العمود الفقري. | Do not move the person with a known or suspected spinal injury. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |
| 3 | ماتستنّاش أعراض الصدمة الخفيفة تبقى أوحش قبل ما تطلب المساعدة الطبية الطارئة. | Do not wait for milder shock symptoms to worsen before calling for emergency medical help. | MedlinePlus — Shock<br>https://medlineplus.gov/ency/article/000039.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | فيه حد ظهرت عليه أعراض صدمة ومحتاج إسعاف فورًا — قولّهم المكان بالظبط وحالة تنفّسه. | ☐ صح ☐ غلط |
| الطوارئ الموحّدة | **112** | بديل لو الإسعاف مش بيردّ. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Shock** — https://medlineplus.gov/ency/article/000039.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `shock`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 23. `chemical-burn` — حرق كيماوي
### Chemical burn or reaction · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد اتعرّض لمادة كيماوية بتحرق الجلد أو العين. دورك: تأمّن نفسك الأول، تبعّد مصدر الكيماوي، وتغسل المكان بميّه جارية باردة زي ما الخطوات بتقول.

#### 🚩 علامات الخطر (Red Flags) — 3

- 1. صعوبة في التنفّس
- 2. تشنّجات
- 3. فقدان الوعي

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 7 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اتأكد إن كل اللي بينقذوا لابسين وقاية مناسبة — ممكن تشمل واقي للعين ووقاية للجلد. | Make sure that all rescuers have appropriate safety gear, this may include eye protection and skin protection. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 2 | طلّع المصاب من مكان التعرّض، أو اتأكد إن سبب الحرق اتشال. حاول ماتلمسش المادة بنفسك. لو الكيماوي ناشف، انفض الزيادة بره من غير ما يطير في عينيك أو عين المصاب. اخلع أي هدوم أو مجوهرات. | Remove the victim from the area of exposure, or make sure the cause of the burn or exposure has been removed. Try not to come in contact with it yourself. If the chemical is dry, brush off any excess. Avoid brushing it into your eyes or the victim's eyes. Remove any clothing and jewelry. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 3 | اغسل الكيماويات من على سطح الجلد بميّه باردة جارية لمدة ١٥ دقيقة أو أكتر — إلا لو التعرّض كان للجير الناشف (أكسيد الكالسيوم، اللي بيتسمّى كمان «الجير الحي») أو لمعادن زي الصوديوم والبوتاسيوم والمغنيسيوم والفوسفور والليثيوم. | Flush the chemicals off the skin surface using cool running water for 15 minutes or more unless the chemical exposure is to dry lime (calcium oxide, also called 'quick lime') or to elemental metals such as sodium, potassium, magnesium, phosphorous, and lithium. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 4 | عالج الشخص من الصدمة (الهبوط) لو باين عليه إغماء أو شحوب، أو لو تنفّسه سطحي وسريع. | Treat the person for shock if they appear faint, pale, or if there is shallow, rapid breathing. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 5 | حُط كمّادات باردة مبلولة عشان تخفّف الألم. | Apply cool, wet compresses to relieve pain. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 6 | لفّ المكان المحروق بشاش معقّم وناشف (لو متوفّر) أو قماشة نضيفة، واحمي المكان من الضغط والاحتكاك. | Wrap the burned area with a dry sterile dressing (if possible) or clean cloth. Protect the burned area from pressure and friction. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 7 | الحروق الكيماوية البسيطة غالبًا بتطيب من غير علاج إضافي. لكن لو فيه حرق من الدرجة التانية أو التالتة، أو رد فعل في الجسم كله، دوّر على مساعدة طبية فورًا. في الحالات الشديدة، ماتسبش الشخص لوحده وراقبه كويس لأي رد فعل بيأثّر على الجسم كله. | Minor chemical burns will most often heal without further treatment. However, if there is a second or third-degree burn or if there is an overall body reaction, get medical help right away. In severe cases, don't leave the person alone and watch carefully for reactions affecting the entire body. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتحطّش أي وصفة بيتية زي مرهم أو دهان على الحرق الكيماوي. | Do not apply any household remedy such as ointment or salve to a chemical burn. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 2 | ماتخليش الكيماوي يتلوّثك إنت وانت بتسعف. | Do not become contaminated by the chemical as you give first aid. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 3 | ماتفقعش أي فقاعة (بثرة) وماتشيلش الجلد الميت من الحرق. | Do not disturb a blister or remove dead skin from a chemical burn. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |
| 4 | ماتحاولش تعادل أي مادة كيماوية من غير ما تستشير مركز السموم أو دكتور. | Do not try to neutralize any chemical without consulting the poison control center or a health care provider. | MedlinePlus — Chemical burn or reaction<br>https://medlineplus.gov/ency/article/000059.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | لو فيه صعوبة تنفّس أو تشنّجات أو فقدان وعي، أو حرق درجة تانية/تالتة أو رد فعل في الجسم كله. واسألهم كمان إزاي تتصرّف مع نوع الكيماوي ده قبل ما تعادله بأي حاجة. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل لو مقدرتش توصل للإسعاف. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Chemical burn or reaction** — https://medlineplus.gov/ency/article/000059.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `chemical-burn`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## 24. `breathing-difficulty` — صعوبة في التنفّس
### Breathing difficulties - first aid · **Level 4** · طوارئ

**اللقطة (Snapshot AR):** حد بيلاقي صعوبة في التنفّس، بيلهث أو مش قادر ياخد نفسه. دورك تأمّنه، تفكّ عنه الضيّق، تساعده على دواه لو معاه، وتجيب إسعاف بسرعة من غير ما تستنّى.

#### 🚩 علامات الخطر (Red Flags) — 5

- 1. اتصل بالطوارئ لو ظهرت عليك أو على حد تاني أي أعراض صعوبة في التنفّس.
- 2. بيطلع دم مع الكحّة.
- 3. كلّم الدكتور لو طفلك بيكحّ وبيطلّع صوت زي نبح الكلب أو صفير.
- 4. بتلاحظ إن النَّفَس بقى صعب وانت بتعمل حاجات عادية كنت بتعملها من غير تعب، زي طلوع السلّم.
- 5. عندك برد أو عدوى تانية في الجهاز التنفّسي وبتلاقي صعوبة في التنفّس.

*(علامات الخطر مأخوذة من نصّ الكارت وليست مربوطة بمصدر مباشر — تأكّد إنها كافية ودقيقة. Red flags are card-authored, not per-source-tagged — confirm sufficiency.)*

#### ✅ اعمل (DO) — 5 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | اتأكد إن مجرى الهوا مفتوح، وإنه بيتنفّس، وإن نبضه شغّال. ولو محتاج، ابدأ إنعاش قلبي رئوي (CPR). | Check the person's airway, breathing, and pulse. If necessary, begin CPR. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 2 | فكّ أي هدوم ضيّقة عليه. | Loosen any tight clothing. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 3 | ساعده ياخد أي دوا موصوف له (زي بخّاخة الربو، أو النيتروجليسرين، أو أكسجين البيت). | Help the person use any prescribed medicine (such as an asthma inhaler, nitroglycerin, or home oxygen). | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 4 | فضل راقب تنفّسه ونبضه لحد ما المساعدة الطبية توصل. وماتفتكرش إنه بقى أحسن لو بطّلت تسمع أصوات التنفّس الغريبة زي الصفير. | Continue to monitor the person's breathing and pulse until medical help arrives. Do not assume that the person's condition is improving if you can no longer hear abnormal breath sounds, such as wheezing. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 5 | لو فيه جروح مفتوحة في الرقبة أو الصدر، لازم تتقفل على طول، خصوصًا لو طالع منها فقاقيع هوا. اربطها بضمّادة حالًا. | If there are open wounds in the neck or chest, they must be closed immediately, especially if air bubbles appear in the wound. Bandage such wounds at once. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |

#### ⛔ ماتعملش (DON'T) — 4 خطوة

| # | النص العربي (Arabic — what the user sees) | English source line (`en`) | المصدر (Source · URL) |
|:-:|-------------------------------------------|----------------------------|-----------------------|
| 1 | ماتديهوش أكل ولا شرب. | Do not give the person food or drink. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 2 | ماتحركوش لو فيه إصابة في الراس أو الرقبة أو الصدر أو مجرى الهوا، إلا لو مفيش منّه بُد. ولو لازم تحرّكه، احمي رقبته وثبّتها. | Do not move the person if there has been a head, neck, chest or airway injury, unless it is absolutely necessary. Protect and stabilize the neck if the person must be moved. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 3 | ماتحطّش مخدّة تحت راسه — ده ممكن يقفل مجرى الهوا. | Do not place a pillow under the person's head. This can close the airway. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |
| 4 | ماتستنّاش تشوف هيتحسّن ولا لأ قبل ما تجيب مساعدة طبية — دوّر على المساعدة على طول. | Do not wait to see if the person's condition improves before getting medical help. Get help immediately. | MedlinePlus — Breathing difficulties - first aid<br>https://medlineplus.gov/ency/article/000007.htm |

#### ☎️ مين تتصل بيه (Who to call)

| الجهة (Label) | الرقم (Number) | ماذا تقول (What to say) | صحيح لمصر؟ |
|---------------|:--------------:|-------------------------|:----------:|
| الإسعاف | **123** | قوله فيه حد بيلاقي صعوبة شديدة في التنفّس، وقوله مكانك بالظبط. | ☐ صح ☐ غلط |
| الموحّد | **112** | بديل لو الإسعاف مردّش. | ☐ صح ☐ غلط |

#### 📚 مصادر الكارت (Card Sources)

- **MedlinePlus — Breathing difficulties - first aid** — https://medlineplus.gov/ency/article/000007.htm  
  _A · public domain (U.S. NLM)_

#### ✍️ قرار الطبيب (Clinician Decision) — `breathing-difficulty`

> ☐ **موافقة كما هي / Approve as-is**
> ☐ **موافقة مع تعديلات / Approve with edits** — اكتب التعديلات بالظبط:
>
> `________________________________________________________________`
>
> `________________________________________________________________`
>
> ☐ **رفض / Reject** — السبب:
>
> `________________________________________________________________`

**ملاحظات الطبيب (Clinician notes):**

```



```

**الاسم / Name:** ____________________  **رقم النقابة / Syndicate #:** ____________  **التخصص / Specialty:** ____________  **التاريخ / Date:** __________  **التوقيع / Signature:** ____________

---


## ✅ إقرار المراجعة النهائي (Final Reviewer Attestation)

أُقِرّ بأنني طبيب مصري مرخّص، وقد راجعت الكروت الـ 24 أعلاه، وأن قراري مدوّن لكل كارت.
I attest that I am a licensed Egyptian clinician; I have reviewed all 24 cards above and recorded a decision for each.

**الاسم الكامل / Full name:** ____________________________  **رقم نقابة الأطباء / Medical Syndicate #:** ____________________

**التخصص / Specialty:** ____________________  **التوقيع / Signature:** ____________________  **التاريخ / Date:** ____________________

---

### 🔁 إعادة التوليد (Regeneration)

هذه الحزمة مُولّدة آليًا وقابلة لإعادة التوليد. الكروت لا تزال تُضاف، لذا أعد التوليد قبل كل جولة مراجعة.
This packet is auto-generated and regeneratable. Cards are still being added — regenerate before each review round.

- **عدد كروت L4/L5 وقت التوليد / L4-L5 card count at generation:** **24** (من إجمالي 41 كارت / of 41 total scenarios)
- **تاريخ التوليد / Generation date:** 2026-07-11
- **ملف المصدر / Source file:** `C:\Users\pc\Desktop\EGY\DESIGN CAMPAIGN\08_NEXT_PROJECT_MOSTAED\app\scenarios.js`
- **الأمر المستخدم لاستخراج الكروت / Exact node command used to extract the cards (run from `app/`):**

```bash
node -e 'const fs=require("fs");const w={};new Function("window",fs.readFileSync("scenarios.js","utf8"))(w);console.log(JSON.stringify(w.SCENARIOS.filter(c=>c.level>=4).map(c=>({id:c.id,title:c.title,level:c.level,domain:c.domain,snapshot:c.snapshot&&c.snapshot.ar,redFlags:c.redFlags,do:c.do,dont:c.dont,whoToCall:c.whoToCall,sources:c.sources}))))'
```

> (لبناء الحزمة كاملة أعد تشغيل السكربت `gen_packet.js` الذي أنتج هذا الملف — يقرأ `scenarios.js` + سجلّ `SOURCES` ويكتب هذا الـ md.)
> (To rebuild the full packet, re-run the `gen_packet.js` generator that produced this file — it reads `scenarios.js` + the `SOURCES` registry and writes this markdown.)
