/* مستعد · Readiness Cards.
 *
 * PROVENANCE STATUS (2026-07-10) — stated honestly, because the previous header was false.
 * It claimed "every field REAL + sourced … ingested from authorities". Nothing had been ingested;
 * the cards were written from model recall and citations were appended afterward. That error put
 * wrong advice into a level-4 poisoning card (it told people to give a poisoning victim milk;
 * NHS says give nothing). See 09_METHODOLOGY/EGY_LIBRARY_RETROSPECTIVE.md.
 *
 * A step is GROUNDED only when it is {t, src} and `src` resolves in SOURCES below to a document
 * this project actually fetched and hashed (corpus/manifest.json). A bare string is UNGROUNDED and
 * renders with a ⚠ marker. `pipeline/validate-cards.mjs` exits 1 on ungrounded level>=4 steps.
 *
 * AI's only jobs here: translate the fetched English into Egyptian Arabic, and restructure. It is
 * never the origin of a fact.
 *
 * Egypt hotlines (verified): 112 unified · 122 police · 123 ambulance · 180 fire · 126 tourist police · 16328 mental-health.
 * There is NO verified national poison-control line — route to 123 and take the container.
 */

/* Every srcId here maps to a document in corpus/manifest.json with a matching sha256. */
window.SOURCES = {
  "nhs:cpr": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/", label: "NHS — CPR",
    sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:heart-attack": { url: "https://www.nhs.uk/conditions/heart-attack/", label: "NHS — Heart attack",
    sha256: "f8a7bfb168", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:anaphylaxis": { url: "https://www.nhs.uk/conditions/anaphylaxis/", label: "NHS — Anaphylaxis",
    sha256: "8cc8e0f7f6", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:poisoning": { url: "https://www.nhs.uk/conditions/poisoning/", label: "NHS — Poisoning",
    sha256: "8292bd5634", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:heat": { url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/", label: "NHS — Heat exhaustion & heatstroke",
    sha256: "ea3662537f", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:fainting": { url: "https://www.nhs.uk/symptoms/fainting/", label: "NHS — Fainting",
    sha256: "6b9d8b5071", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:child-choking": { url: "https://www.nhs.uk/baby/first-aid-and-safety/first-aid/how-to-stop-a-child-from-choking/",
    label: "NHS — How to stop a child from choking", sha256: "474415a468", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:after-accident": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/",
    label: "NHS — After an accident", sha256: "36e83fbdbf", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:epilepsy": { url: "https://www.nhs.uk/conditions/epilepsy/", label: "NHS — Epilepsy (seizures)",
    sha256: "1855df6cd1", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:burns": { url: "https://www.nhs.uk/conditions/burns-and-scalds/", label: "NHS — Burns and scalds",
    sha256: "b9a8fe816d", retrieved: "2026-07-09", licence: "OGL v3 · © Crown copyright", tag: "NHS" },
  "nhs:recovery-position": { url: "https://www.nhs.uk/tests-and-treatments/first-aid/recovery-position/",
    label: "NHS — The recovery position", sha256: "a017fa3292", retrieved: "2026-07-09",
    licence: "OGL v3 · © Crown copyright", tag: "NHS" },

  /* MedlinePlus Encyclopedia — U.S. National Library of Medicine, PUBLIC DOMAIN.
     Attribution required: "Information from MedlinePlus.gov". No logo; no implied endorsement.
     These are the only ingested documents covering four level-5 cards NHS has no page for. */
  "mlp:choking-adult": { url: "https://medlineplus.gov/ency/article/000049.htm",
    label: "MedlinePlus — Choking: adult or child over 1 year", sha256: "319bba7b55", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:choking-infant": { url: "https://medlineplus.gov/ency/article/000048.htm",
    label: "MedlinePlus — Choking: infant under 1 year", sha256: "a7c34e47b5", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:drowning": { url: "https://medlineplus.gov/ency/article/000046.htm",
    label: "MedlinePlus — Non-fatal drowning", sha256: "de62c2aa81", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:electrical-injury": { url: "https://medlineplus.gov/ency/article/000053.htm",
    label: "MedlinePlus — Electrical injury", sha256: "0e362fd364", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
  "mlp:bleeding": { url: "https://medlineplus.gov/ency/article/000045.htm",
    label: "MedlinePlus — Bleeding", sha256: "5a2a6134fb", retrieved: "2026-07-10",
    licence: "public domain · U.S. National Library of Medicine", tag: "MedlinePlus" },
};

window.SCENARIOS = [
  {
    id: "choking-adult",
    title: { ar: "شخص بيختنق (بالغ)", en: "Someone is choking (adult)" },
    level: 5, who: ["الكل", "مواطن", "آباء وأمهات"], place: ["البيت", "برّه", "مطعم"], domain: "طوارئ",
    snapshot: { ar: "ماسك زوره، مش قادر يتكلم ولا يسعل ولا يتنفس، ولونه بيزرقّ. كل ثانية بتفرق.", en: "Can't speak, cough, or breathe; turning blue. Seconds count." },
    redFlags: ["إيده على زوره", "صوت صفير عالي أو مفيش صوت خالص", "الشفايف والوش بيزرقّوا"],
    do: [
      { t: "قف وراه. لو طفل، ممكن تحتاج تركع.", src: "mlp:choking-adult" },
      { t: "لُفّ ذراع واحدة حواليه عشان تسند جسمه من فوق، وميّله لقدّام لحد ما صدره يبقى موازي للأرض تقريبًا.", src: "mlp:choking-adult" },
      { t: "بكعب إيدك التانية اضربه ضربة قوية بين لوحي الكتف، وشوف الحاجة طلعت ولا لأ. كمّل لحد ما تبقى ٥ ضربات.", src: "mlp:choking-adult" },
      { t: "لو ماطلعتش: قف وراه ولُفّ دراعاتك حوالين وسطه، واعمل قبضة وحُط ناحية الإبهام فوق سُرّته بشوية وتحت عظمة الصدر.", src: "mlp:choking-adult" },
      { t: "امسك قبضتك بإيدك التانية بقوة، واشدّ شدّة سريعة لجوّه ولفوق.", src: "mlp:choking-adult" }
    ],
    dont: [
      { t: "ماتتدخّلش لو بيسعل بقوة، أو بيقدر يتكلّم، أو بيتنفّس كويس — سيبه يكحّ، بس فضل جنبه.", src: "mlp:choking-adult" },
      { t: "ماتفتحش بقّه بالعافية عشان تمسك الحاجة وتشدّها وهو واعي — اعمل ضرب ظهر وضغطات بطن.", src: "mlp:choking-adult" },
      "ماتسيبهوش لوحده تجري تجيب حاجة."
    ],
    whenWhy: { ar: "ضرب الظهر وضغط البطن بيرفعوا ضغط الهوا في الرئة فيقذفوا الجسم برّه؛ ولو فقد الوعي، ضغطات الصدر بتحافظ على وصول الدم والأكسجين للمخ لحد الإسعاف.", en: "" },
    how: { ar: "مثال حيّ: واحد بيتعشّى وفجأة وقف ومسك زوره. تقف جنبه وخلفه، تسنده بإيد، وبكعب الإيد التانية ٥ ضربات حاسمة بين الكتفين — بتعدّها بصوت: واحد… اتنين…", en: "" },
    whoToCall: [
      { label: "الإسعاف", number: "123", say: "قول: «حالة اختناق، الشخص مش بيتنفّس»، وبعدها العنوان بالظبط." },
      { label: "الطوارئ الموحّد", number: "112", say: "لو مش متأكد بأي رقم، اتصل بـ 112 وهيوصّلك." }
    ],
    whatToBuy: [{ item: "كورس إسعافات أولية معتمد", why: "أهم بكتير من أي أداة — بيخليك تتحرك بثقة" }, { item: "بوستر خطوات الاختناق", why: "علّقه في المطبخ" }],
    tech: ["فعّل Emergency SOS في موبايلك دلوقتي (الضغط المتكرر على زر الجانب)", "املأ Medical ID عشان الإسعاف يشوف بياناتك من القفل"],
    writeDown: ["اكتب أرقام الطوارئ على التلاجة", "خزّن رقم قريب تحت اسم «ICE» (في حالة الطوارئ) في الموبايل"],
    videosCommunities: [{ label: "الصليب الأحمر الأمريكي — إسعاف الاختناق", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking" }],
    othersPOV: { ar: "الناس حواليك غالبًا هيتجمّدوا من الصدمة — التجمّد ده طبيعي. عشان كده تعيّن حد بالاسم بدل ما تقول «حد يتصل».", en: "" },
    say: { toOthers: ["«انت اللي لابس أزرق — اتصل بالإسعاف ١٢٣ دلوقتي!»", "«افتحوا مكان، سيبوني أوصل له.»"], toSelf: ["«اهدا. خطوات معروفة. ٥ ضرب، ٥ ضغطات.»", "«أنا أقدر أساعد لحد ما الإسعاف يوصل.»"] },
    bodyLanguage: { ar: "قف ثابت جنبه وخلفه، ركبك مثنية شوية، حركتك حاسمة ومش متردّدة. صوتك واطي وواضح — الهدوء بيعدي للناس.", en: "" },
    rights: { ar: "الإسعاف الطارئ حقّك؛ ومساعدتك بحُسن نيّة في حالة طارئة تصرّف مسؤول — الأولوية إنك تتحرّك.", en: "" },
    variations: ["رضيع: ٥ ضرب ظهر + ٥ ضغطات صدر (مش بطن)، ووشّه لتحت على ساعدك.", "حامل أو شخص بدين جدًا: ضغطات صدر بدل ضغطات البطن.", "لوحدك بتختنق: اضغط بطنك على ظهر كرسي متين."],
    prevention: ["قطّع أكل الأطفال قطع صغيّرة", "ماتتكلمش وانت بتاكل بسرعة", "خلّي بالك من عظم السمك والمكسرات مع الصغار"],
    drill: { ar: "اتفرّج على فيديو الاختناق مرة كل شهر وتخيّل نفسك بتعمل الخطوات — التخيّل بيثبّت رد الفعل.", en: "" },
    after: { ar: "حتى لو الجسم طلع: لو اضطريت تعمل ضغطات بطن، لازم كشف طبي (احتمال إصابة داخلية). وطمّن الشخص، هيكون مرعوب.", en: "" },
    sources: [
      { srcId: "mlp:choking-adult", label: "MedlinePlus — Choking: adult or child over 1 year",
        url: "https://medlineplus.gov/ency/article/000049.htm", grade: "A · INGESTED",
        sha256: "319bba7b55", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Adult & Child Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/adult-child-choking",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "severe-bleeding",
    title: { ar: "نزيف شديد", en: "Severe (life-threatening) bleeding" },
    level: 5, who: ["الكل", "مواطن"], place: ["برّه", "الشغل", "البيت", "الطريق"], domain: "طوارئ",
    snapshot: { ar: "دم بيندفع أو بيغزر بغزارة ومش بيقف — خطر على الحياة خلال دقائق.", en: "Blood spurting/flowing and not stopping — life-threatening in minutes." },
    redFlags: ["الدم بينزل بسرعة وبيبلّل الهدوم/الأرض", "الشخص شاحب، بيرتجف، أو بيفقد التركيز"],
    do: [
      { t: "نيّمه على ضهره — ده بيقلّل فرصة إنه يغمى عليه لأنه بيزوّد وصول الدم للمخ. لو تقدر، ارفع مكان النزيف.", src: "mlp:bleeding" },
      { t: "شيل أي تراب أو حاجات سايبة شايفها في الجرح.", src: "mlp:bleeding" },
      { t: "اضغط بالظبط على الجرح بشاش معقّم أو قماشة نضيفة، أو حتى قطعة هدوم لو مفيش.", src: "mlp:bleeding" },
      { t: "فضل ضاغط لحد ما الدم يقف. أول ما يقف، لُفّ الرباط على الجرح كويس بشريط لاصق.", src: "mlp:bleeding" },
      { t: "لو الدم كمّل ونشّ من القماشة، ماتشيلهاش — حُطّ واحدة تانية فوقها.", src: "mlp:bleeding" }
      // NOTE: «كلّم الإسعاف ١٢٣» was removed from `do`. MedlinePlus says "call 911"; no ingested
      // document says 123. The Egyptian number is a LOCALIZATION decision, not a claim from a source,
      // so it lives in `whoToCall` (below) where it is labelled as such — never inside a cited step.
    ],
    dont: [
      { t: "ماتشيلش حاجة مغروسة في الجسم زي سكينة أو عود — شيلها ممكن يأذي أكتر ويزوّد النزيف.", src: "mlp:bleeding" },
      { t: "ماتبصّش على الجرح كل شوية تشوف الدم وقف ولا لأ — كل ما تسيبه في حاله، كل ما تقدر توقّف النزيف.", src: "mlp:bleeding" },
      { t: "ماتنكّشش في الجرح وماتشدّش أي حاجة مغروسة فيه — ده بيزوّد النزيف والأذى.", src: "mlp:bleeding" },
      { t: "ماتشيلش الرباط لو اتشبع دم — حُطّ واحد جديد فوقه.", src: "mlp:bleeding" }
    ],
    whenWhy: { ar: "الضغط المباشر المستمر بيدّي الجسم فرصة يكوّن جلطة توقّف الدم؛ رفع القماش بيكسر الجلطة ويرجّع النزيف.", en: "" },
    how: { ar: "مثال: جرح عميق في الساعد بينزف بغزارة. تلفّ تيشيرت وتضغط بكفّك بكل تقلك على الجرح، وتفضل ضاغط طول الوقت لحد الإسعاف — مترفعش خالص.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«نزيف شديد مش بيقف»، مكان الإصابة، والعنوان." }, { label: "الموحّد", number: "112", say: "لو مش متأكد." }],
    whatToBuy: [{ item: "شنطة إسعافات فيها شاش وضمادات", why: "الضغط المباشر أهم خطوة" }, { item: "تورنيكيه (رباط ضاغط)", why: "لنزيف الأطراف الخطير — بعد تدريب" }],
    tech: ["Emergency SOS + Medical ID فيه فصيلة دمك وحساسياتك", "شارك موقعك المباشر (Live Location) مع الإسعاف/قريب"],
    writeDown: ["اكتب فصيلة دمك والأمراض المزمنة في Medical ID", "مكان أقرب مستشفى فيها طوارئ"],
    videosCommunities: [{ label: "American Red Cross — Life-Threatening Bleeding", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external" }],
    othersPOV: { ar: "المصاب هيكون خايف وممكن يرفض إنك تضغط عشان بيوجعه — طمّنه إن الوجع ده هو اللي بينقذه.", en: "" },
    say: { toOthers: ["«اضغط هنا بكل قوتك ومترفعش، أنا هكلّم الإسعاف.»"], toSelf: ["«الضغط المستمر بيوقّف الدم. أنا فاضل ثابت.»"] },
    bodyLanguage: { ar: "انزل بتقل جسمك كله على الجرح، إيدك مستقرّة، صوتك ثابت — طمأنينتك بتقلّل صدمة المصاب.", en: "" },
    rights: { ar: "التدخّل لإنقاذ حياة في خطر تصرّف مسؤول؛ الأولوية للحركة السريعة.", en: "" },
    variations: ["طفل: نفس المبدأ بضغط أخف وحسب حجمه.", "جسم غاطس في الجرح (سكينة/زجاج): ماتشيلهوش — اضغط حواليه.", "لوحدك ومصاب: اضغط بكل تقلك واطلب نجدة بصوت عالي."],
    prevention: ["قفازات وأدوات حادّة مأمّنة في الشغل والمطبخ", "اعرف مكان شنطة الإسعافات في البيت والعربية"],
    drill: { ar: "اتمرّن على لفّ ضمادة ضغط على ساعدك مرة، عشان إيدك تعرف الحركة.", en: "" },
    after: { ar: "لازم كشف طبي حتى لو الدم وقف — النزيف الداخلي مايبانش. راقب علامات الصدمة (شحوب، دوخة).", en: "" },
    // The tourniquet steps were removed: the ingested MedlinePlus bleeding article does not contain
    // them. A level-5 instruction that no fetched document supports does not stay in the card.
    sources: [
      { srcId: "mlp:bleeding", label: "MedlinePlus — Bleeding", url: "https://medlineplus.gov/ency/article/000045.htm",
        grade: "A · INGESTED", sha256: "5a2a6134fb", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — every do/dont step extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Bleeding (Life-Threatening External)", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "house-fire",
    title: { ar: "حريق في البيت", en: "A fire starts at home" },
    level: 5, who: ["الكل", "أسرة", "آباء وأمهات"], place: ["البيت", "جوّه"], domain: "طوارئ",
    snapshot: { ar: "دخان أو نار بتنتشر — القرار الوحيد الصح: اخرج فورًا، ومتدخلش تاني.", en: "Smoke or flames spreading — the only right move: get out, and never go back in." },
    redFlags: ["ريحة دخان أو صفّارة إنذار الدخان", "باب سخن لما تلمسه — نار ورا الباب"],
    do: [
      "نادِ «حريق! حريق!» بأعلى صوتك، وطلّع اللي معاك برّه فورًا.",
      "لو في دخان، انزل تحت الدخان وازحف — الهوا النضيف تحت.",
      "قبل ما تفتح أي باب، المسه بضهر إيدك: لو سخن، ماتفتحوش ودوّر على مخرج تاني.",
      "اخرج من البيت واتصل بالمطافي ١٨٠ من برّه — متضيّعش وقت جوّه.",
      "لو المخارج مقفولة بالنار/الدخان: افضل في أوضة والباب مقفول، حُط فوطة مبلولة تحت الباب، افتح الشبّاك ولوّح بقماش/كشّاف عشان يشوفوك."
    ],
    dont: ["ماترجعش تاني عشان أي حاجة (فلوس/موبايل/حيوان) — النار بتتضاعف في ثواني", "ماتفتحش باب سخن", "ماتستخدمش الأسانسير", "ماتختبيش تحت السرير أو في الدولاب"],
    whenWhy: { ar: "الدخان بيقتل أسرع من النار (اختناق)؛ عشان كده الزحف تحته والخروج السريع أهم من إطفاء أي حاجة. الباب المقفول والفوطة المبلولة بيكسبوك دقائق.", en: "" },
    how: { ar: "مثال: صحيت على ريحة دخان بالليل. ماتشغّلش النور، انزل من السرير على الأرض، ازحف للباب، المسه — لو بارد افتحه بحذر واخرج على نقطة التجمّع اللي متفقين عليها.", en: "" },
    whoToCall: [{ label: "المطافي / الحماية المدنية", number: "180", say: "«حريق»، العنوان بالظبط، والدور، وهل في حد محتجز." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كاشف دخان (Smoke detector)", why: "بينبّهك بدري — أهم أداة نجاة في البيت" }, { item: "طفّاية حريق صغيرة + بطانية حريق", why: "لحرائق صغيرة جدًا بس، والأولوية للخروج" }],
    tech: ["ركّب كاشف دخان وجرّب البطارية كل شهر", "Emergency SOS جاهز؛ خزّن ١٨٠ في المفضّلة"],
    writeDown: ["ارسم خطة هروب فيها مخرجين لكل أوضة", "حدّد نقطة تجمّع برّه واتفقوا عليها كعيلة"],
    videosCommunities: [{ label: "American Red Cross — If a Fire Starts", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html" }, { label: "NFPA — Home Fire Escape Plan", url: "https://www.nfpa.org/education-and-research/home-fire-safety/escape-planning" }],
    othersPOV: { ar: "الأطفال بيتخبّوا من الخوف بدل ما يهربوا — نادي عليهم بالاسم وطمّنهم وانت بتطلّعهم.", en: "" },
    say: { toOthers: ["«كلنا برّه دلوقتي — سيبوا كل حاجة!»", "«نتجمّع قدّام البيت عند العمود.»"], toSelf: ["«الخروج أهم من أي حاجة. أنا وعيلتي بس.»"] },
    bodyLanguage: { ar: "اتحرّك واطي وسريع، إمسك إيد اللي معاك، صوتك عالي وحازم عشان يوصل وسط الفوضى والدخان.", en: "" },
    rights: { ar: "الحماية المدنية مسؤولة عن الإنقاذ — بلّغ بدري وطلّع الناس، وسيب الإطفاء للمحترفين.", en: "" },
    variations: ["أدوار عليا: اعرف السلم مسبقًا؛ الأسانسير ممنوع.", "كبار سن/ذوي إعاقة: خطّة خروج خاصة وحد مسؤول عنهم.", "هدومك ولّعت: قف — اقعد — اتقلّب (Stop, Drop, Roll)."],
    prevention: ["ماتسيبش الطبخ على النار من غير رقابة", "شيّك على وصلات الكهربا والغاز", "ماتنمّش والسجاير ولاعة"],
    drill: { ar: "اعملوا بروفة هروب كعيلة مرة كل ٦ شهور بالليل — الأطفال يعرفوا المخرج وهم نعسانين.", en: "" },
    after: { ar: "ماترجعش لحد ما الحماية المدنية تقول البيت آمن؛ الدخان المتبقّي سام. كشف طبي لأي حد استنشق دخان.", en: "" },
    sources: [
      { label: "American Red Cross — If a Fire Starts", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html", grade: "A · مرجع رسمي" },
      { label: "NFPA — Escape Planning", url: "https://www.nfpa.org/education-and-research/home-fire-safety/escape-planning", grade: "A" }
    ]
  },
  {
    id: "friend-suicidal",
    title: { ar: "صاحبك بيقول إنه عايز يموت", en: "A friend says they want to die" },
    level: 5, who: ["الكل", "أصدقاء", "أسرة"], place: ["أي مكان", "أونلاين"], domain: "الصحة النفسية",
    snapshot: { ar: "حد قريب بيلمّح أو بيقول صراحة إنه مش عايز يعيش. لحظة فارقة — وجودك بيفرق.", en: "Someone hints at or says they don't want to live. Your presence matters." },
    redFlags: ["كلام زي «ريّحت» أو «هختفي» أو «الدنيا أحسن من غيري»", "بيوزّع أغراضه، بينعزل، تغيّر مفاجئ للهدوء بعد ضيق"],
    do: [
      "اسأل بصراحة وهدوء: «انت بتفكّر تأذي نفسك أو تنهي حياتك؟» — السؤال ده بيريّح، مش بيزوّد الخطر.",
      "اسمعه من غير ما تقاطع أو تحكم أو تقلّل من اللي بيحسّه.",
      "طمّنه إنه مش لوحده وإنك مهتم، وإن اللي بيحسّه ممكن يتحسّن بمساعدة.",
      "ماتسيبهوش لوحده لو الخطر قريب، وشيل أي وسيلة أذى قريبة منه.",
      "اعرضوا تتصلوا مع بعض بخط المساعدة أو تروحوا لمختص — خطوة واحدة مع بعض."
    ],
    dont: ["ماتقولش «ده كلام فارغ» أو «فكّر في اللي عندك»", "ماتوعدش إنك تكتم السر لو حياته في خطر", "ماتسيبهوش لوحده وانت قلقان عليه", "ماتدخلش في جدال إنه غلط إنه حاسس كده"],
    whenWhy: { ar: "الكلام الصريح عن الانتحار بيفتح باب للراحة والمساعدة — الأسطورة إنه «بيحطّ الفكرة» غلط. الوجود وعدم الحكم بيقلّلوا الخطر ويكسبوا وقت للمساعدة المختصّة.", en: "" },
    how: { ar: "مثال: صاحبك بعتلك «تعبت ومش لاقي معنى». ترد: «أنا سامعك، وشكراً إنك قلتلي. تقصد إنك بتفكّر تأذي نفسك؟ أنا معاك دلوقتي.» — بهدوء، من غير فزع.", en: "" },
    whoToCall: [
      { label: "الخط الساخن للصحة النفسية (مصر)", number: "16328", say: "الأمانة العامة للصحة النفسية — دعم مجاني وسرّي ٢٤ ساعة." },
      { label: "الإسعاف (خطر حالّ على الحياة)", number: "123", say: "لو في محاولة أذى فعلية أو خطر فوري." }
    ],
    whatToBuy: [{ item: "مفيش حاجة تتشترى", why: "الأهم وجودك ووقتك والإصغاء" }],
    tech: ["احفظ ١٦٣٢٨ في موبايله وموبايلك", "شارك موقعك معاه لو محتاج تلحقه"],
    writeDown: ["اكتبوا مع بعض «خطة أمان»: مين يتصل بيه، الأماكن الآمنة، الأسباب اللي تخليه يكمّل", "أرقام الدعم في مكان واضح"],
    videosCommunities: [{ label: "988 Lifeline — Help Someone Else", url: "https://988lifeline.org/help-someone-else/" }, { label: "NHS — Help for suicidal thoughts", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/" }],
    othersPOV: { ar: "هو غالبًا حاسس إنه عبء وإن محدش هيفهمه — لما تسمع من غير حكم، ده بيكسر العزلة دي.", en: "" },
    say: { toOthers: ["«أنا معاك، ومش هسيبك. تعالى نطلب مساعدة مع بعض.»", "«اللي بتحسّه تقيل، بس مش هتفضل كده للأبد.»"], toSelf: ["«مهمّتي إني أسمع وأوصّله لمساعدة، مش إني أحلّ كل حاجة.»", "«الهدوء بتاعي بيطمّنه.»"] },
    bodyLanguage: { ar: "اقعد على نفس مستواه، جسمك مفتوح ومايل ناحيته، تواصل بالعين هادي، سيب سكتات — الصمت المطمئن مسموح.", en: "" },
    rights: { ar: "لو في خطر حالّ على الحياة، طلب المساعدة الطارئة أهم من الخصوصية. الدعم النفسي حقّ.", en: "" },
    variations: ["أونلاين: خُد الكلام بجدّية، حاول توصله بأرقام بلده، وابلّغ منصّة الدعم.", "لو هو رافض المساعدة: فضل موجود، وكرّر عرض المساعدة بلطف.", "لو انت اللي بتحسّ كده: اتصل بـ ١٦٣٢٨ دلوقتي — انت مستاهل مساعدة."],
    prevention: ["اسأل أصحابك «إزيك بجد؟» بانتظام", "اتعلّم علامات الخطر", "قلّل وصمة الكلام عن الصحة النفسية حواليك"],
    drill: { ar: "تخيّل نفسك بتسأل السؤال الصعب بهدوء — التمرين الذهني بيسهّله لو حصل بجد.", en: "" },
    after: { ar: "بعد الأزمة: ساعده يكمّل مع مختص، وفضل على تواصل. اهتمّ بنفسك انت كمان — ده تقيل عليك.", en: "" },
    sources: [
      { label: "988 Suicide & Crisis Lifeline — Help Someone Else", url: "https://988lifeline.org/help-someone-else/", grade: "A · مرجع أزمات رسمي" },
      { label: "NHS — Help for suicidal thoughts", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/help-for-suicidal-thoughts/", grade: "A" },
      { label: "الأمانة العامة للصحة النفسية (مصر) — 16328", url: "https://mentalhealth.mohp.gov.eg/mental/web/en/suicide", grade: "A · جهة رسمية مصرية" }
    ]
  },
  {
    id: "panic-attack",
    title: { ar: "نوبة هلع (بانيك أتاك)", en: "A panic attack" },
    level: 3, who: ["الكل", "طلاب", "موظفين"], place: ["أي مكان", "الشغل", "المواصلات"], domain: "الصحة النفسية",
    snapshot: { ar: "قلب بيدق بسرعة، ضيق نفس، رعشة، وإحساس إن حاجة وحشة هتحصل. مرعب — بس مش خطر، وبيعدّي.", en: "Racing heart, tight breath, terror — frightening but not dangerous, and it passes." },
    redFlags: ["ضربات قلب سريعة فجأة", "إحساس اختناق أو دوخة", "خوف من فقدان السيطرة — بيبدأ ويوصل قمّته في دقايق"],
    do: [
      "افتكر وقول لنفسك: «دي نوبة هلع، مش خطر، وهتعدّي في دقايق.»",
      "بطّئ نفسك: شهيق من مناخيرك من البطن، وزفير أطول من بقّك (مثلاً شهيق ٤، زفير ٦).",
      "ثبّت نفسك بالحواس (تأريض): سمّي ٥ حاجات بتشوفها، ٤ بتلمسها، ٣ بتسمعها.",
      "استنى — النوبة بتوصل قمّتها وبعدين بتهدأ لوحدها خلال ٥ لـ ٣٠ دقيقة.",
      "لو بتتكرّر وبتأثّر على حياتك، كلّم مختص أو خط الدعم."
    ],
    dont: ["ماتحاربش الإحساس أو تتنفّس بسرعة (فرط تنفّس بيزوّده)", "ماتهربش من المكان بشكل دائم — ده بيعلّم المخ إنه خطر", "ماتقولش لنفسك «أنا بتجنّن» — ده تفسير غلط ومخيف"],
    whenWhy: { ar: "الزفير الأطول بينشّط الجهاز العصبي المهدّئ فيبطّئ القلب؛ والتأريض بيرجّع انتباهك للحظة بدل الأفكار المخيفة. معرفتك إنها «مش خطر» بتكسر حلقة الخوف من الخوف.", en: "" },
    how: { ar: "مثال: في المترو حسّيت قلبك بيطير ونفسك بيضيق. تسند على حاجة، تعدّ شهيق ٤ وزفير ٦، وتبص حواليك تسمّي حاجات بتشوفها — لحد ما الموجة تعدّي.", en: "" },
    whoToCall: [{ label: "الخط الساخن للصحة النفسية (مصر)", number: "16328", say: "لو النوبات بتتكرّر أو محتاج دعم — مجاني وسرّي." }],
    whatToBuy: [{ item: "مفيش أداة ضرورية", why: "التنفّس والتأريض ببلاش" }, { item: "بطاقة صغيّرة فيها خطوات التهدئة", why: "تقراها وقت النوبة" }],
    tech: ["تطبيقات تنفّس/تأمل تدّي إيقاع للشهيق والزفير", "سجّل لنفسك رسالة صوتية مطمئنة تسمعها وقت النوبة"],
    writeDown: ["اكتب «دي نوبة هلع وهتعدّي» في ورقة/الموبايل", "دوّن إمتى بتيجي عشان تعرف المحفّزات"],
    videosCommunities: [{ label: "NHS — Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" }, { label: "Mind — Panic attacks", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/panic-attacks/" }],
    othersPOV: { ar: "لو حد قدّامك بيتعرّض لنوبة: اهدا، قوله «أنا معاك، ده هيعدّي»، ونفّس معاه ببطء — ماتزوّدش الزحمة حواليه.", en: "" },
    say: { toOthers: ["(لو بتساعد حد) «أنا معاك، اتنفّس معايا بالراحة، ده هيعدّي.»"], toSelf: ["«دي موجة، وهتنزل. أنا آمن.»", "«جسمي بيبالغ في إنذار — مفيش خطر حقيقي.»"] },
    bodyLanguage: { ar: "نزّل كتافك، رخّي إيديك، ابعد عن الزحمة لو تقدر، ركّز على زفير طويل — الجسم المرتخي بيبعت إشارة أمان للمخ.", en: "" },
    rights: { ar: "لك حقّ تاخد لحظة تهدأ في الشغل/الدراسة؛ الصحة النفسية جزء من صحتك.", en: "" },
    variations: ["أول نوبة في حياتك ومعاها ألم صدر حقيقي/تنميل إيد: اكشف طبي لاستبعاد القلب.", "طالب وقت امتحان: خطوات التنفّس + تأريض قبل ما تدخل.", "بتتكرّر كتير: ده «اضطراب هلع» بيتعالج — كلّم مختص."],
    prevention: ["نوم كفاية وتقليل الكافيين", "تمارين تنفّس بانتظام مش وقت النوبة بس", "تعرّف على محفّزاتك"],
    drill: { ar: "اتمرّن على تنفّس ٤/٦ دقيقة كل يوم وانت مرتاح — عشان جسمك يعرفه وقت الشدّة.", en: "" },
    after: { ar: "بعد ما تهدأ: اشرب ميّه، خُد الأمور ببطء، وماتقسّاش على نفسك. لو بتأثّر على يومك، دوّر على دعم مختص.", en: "" },
    sources: [
      { label: "NHS — Breathing exercises for stress", url: "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/", grade: "A · مرجع صحي رسمي" },
      { label: "Mind — Panic attacks", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/panic-attacks/", grade: "A" }
    ]
  },
  {
    id: "collapse-cpr",
    title: { ar: "شخص وقع فاقد الوعي (إنعاش قلبي)", en: "Someone collapses / CPR" },
    level: 5, who: ["الكل", "مواطن"], place: ["أي مكان", "برّه", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "واحد وقع، مش بيرد ومش بيتنفّس طبيعي. المخ محتاج دم خلال دقايق — الضغط على الصدر بينقذ.", en: "" },
    redFlags: ["مش بيرد لما تنده أو تخبط على كتفه", "مفيش نفس، أو نفس متقطّع زي الشخير"],
    do: [
      { t: "أول حاجة: اتأكد إنك انت والمصاب مش في أي خطر. لو في خطر، أمّن المكان الأول.", src: "nhs:after-accident" },
      { t: "لو فاقد الوعي ومش بيتنفّس طبيعي: كلّم الإسعاف ١٢٣ وابدأ الإنعاش على طول.", src: "nhs:cpr" },
      { t: "سيب التليفون على السبيكر — موظّف الإسعاف هيديك تعليمات إنقاذ الحياة وانت بتضغط.", src: "nhs:cpr" },
      { t: "اركع جنبه، وحُط كعب إيدك في نص الصدر، والإيد التانية فوقها، وشبّك صوابعك.", src: "nhs:cpr" },
      { t: "خلّي كتافك فوق إيديك مباشرة، واضغط لتحت بتقل جسمك (مش بذراعك بس) من ٥ لـ ٦ سم.", src: "nhs:cpr" },
      { t: "كرّر الضغطات بمعدّل من ١٠٠ لـ ١٢٠ ضغطة في الدقيقة، لحد ما الإسعاف يوصل أو تعجز تكمّل.", src: "nhs:cpr" }
    ],
    dont: [
      { t: "ماتسيبش صدره مضغوط — بعد كل ضغطة سيبه يرجع لوضعه الطبيعي وإيدك فاضلة مكانها.", src: "nhs:cpr" },
      { t: "ماتضغطش بذراعك لوحدها — من غير تقل جسمك مش هتوصل لعمق ٥ سم.", src: "nhs:cpr" },
      { t: "ماتبطّلش ضغط عشان تجري تدوّر على حاجة — الإسعاف على السبيكر بيوجّهك وانت بتضغط.", src: "nhs:cpr" }
    ],
    whenWhy: { ar: "الضغط بيحرّك الدم للمخ والقلب لحد ما الإسعاف يوصل. لو الشخص فاقد الوعي ومش بيتنفّس طبيعي، الإنعاش يبدأ فورًا — من غير انتظار.",
      en: "Compressions keep blood moving to the brain and heart until help arrives. If someone is unconscious and not breathing normally, call the ambulance and start CPR straight away." },
    how: { ar: "مثال حيّ: راجل وقع في الشارع ومش بيتنفّس. تتأكد الشارع آمن، تركع جنبه، تكلّم ١٢٣ وتسيب السبيكر شغّال، وتبدأ ضغطات ثابتة من ٥ لـ ٦ سم بإيقاع سريع من غير ما تقف.",
      en: "A man collapses in the street and is not breathing. Check the scene is safe, kneel beside him, call 123 on speakerphone, and begin steady compressions 5–6cm deep at 100–120 a minute without stopping." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«شخص فاقد الوعي مش بيتنفّس» + العنوان بالظبط." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كورس CPR عملي معتمد", why: "إيدك تتعلّم العمق والإيقاع الصح" }, { item: "معرفة أماكن أجهزة AED القريبة", why: "المولات والنوادي بيبقى فيها" }],
    tech: ["فعّل Emergency SOS", "خلي حد يكلّم الإسعاف على السبيكر عشان إيديك تفضل على الصدر"],
    writeDown: ["أرقام الطوارئ في مكان واضح", "أماكن أقرب أجهزة AED حواليك"],
    videosCommunities: [{ label: "American Red Cross — Hands-Only CPR", url: "https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr" }],
    othersPOV: { ar: "الناس هتتفرّج وتتجمّد — عيّن كل واحد بمهمة بالاسم عشان الكل يتحرّك.", en: "" },
    say: { toOthers: ["«انت — كلّم الإسعاف ١٢٣ وحطّه على السبيكر!»", "«انت — اجري هات جهاز AED من الاستقبال!»"], toSelf: ["«اضغط بقوة وبسرعة، وماأوقفش.»"] },
    bodyLanguage: { ar: "اركع جنبه، ذراعك مفرودة عمودية على صدره، تقل جسمك كله على إيدك، وإيقاع ثابت — مش سرعة عصبية.", en: "" },
    rights: { ar: "التدخّل لإنقاذ حياة في خطر تصرّف مسؤول؛ الأولوية للضغط والاتصال السريع.", en: "" },
    variations: [
      { t: "طفل فوق سنة: ٥ نفخات إنقاذ الأول، وبعدين اضغط بكعب إيد واحدة ٥ سم (تلت عمق الصدر) — استعمل إيدين لو ماوصلتش.", src: "nhs:cpr" },
      { t: "رضيع تحت سنة: ٥ نفخات الأول، وبعدين اضغط بصباعين في نص الصدر ٤ سم (تلت عمق الصدر).", src: "nhs:cpr" },
      { t: "لو بتعمل نفس صناعي: ٣٠ ضغطة وبعدها نفختين، وكرّر لحد ما ييجي الإسعاف.", src: "nhs:cpr" },
      { t: "لو متدربتش على النفس الصناعي: ضغطات الصدر لوحدها (Hands-only) بتكفي.", src: "nhs:cpr" }
    ],
    prevention: ["اتعلّم CPR عملي", "اعرف أماكن أجهزة AED في الأماكن اللي بتروحها"],
    drill: { ar: "خُد كورس CPR عملي مرة على الأقل — التمرين على المانيكان بيثبّت العمق والإيقاع في إيدك.", en: "Take a hands-on CPR course at least once; practising on a manikin fixes the depth and rhythm in your hands." },
    after: { ar: "سلّم للإسعاف بمعلومة: الشخص وقع إمتى، وكام دقيقة عملت ضغط. حتى لو رجع يتنفّس لازم مستشفى.", en: "Hand over to the ambulance with facts: when they collapsed, how long you compressed. Even if breathing returns, they need hospital." },
    sources: [
      { srcId: "nhs:cpr", label: "NHS — CPR", url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/",
        grade: "A · INGESTED", sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — fetched, hashed, every step extracted from these bytes" },
      { srcId: "nhs:after-accident", label: "NHS — After an accident", url: "https://www.nhs.uk/tests-and-treatments/first-aid/after-an-accident/",
        grade: "A · INGESTED", sha256: "36e83fbdbf", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — grounds the scene-safety step" },
      { label: "American Red Cross — Hands-Only CPR", url: "https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "drowning",
    title: { ar: "إنقاذ غريق", en: "Drowning rescue" },
    level: 5, who: ["الكل", "آباء وأمهات"], place: ["بحر", "مسبح", "ترعة"], domain: "طوارئ",
    snapshot: { ar: "حد بيغرق — والغرق بيبقى صامت وسريع. القاعدة اللي بتنقذ الاتنين: «مدّ أو ارمي، وماتنزلش».", en: "" },
    redFlags: ["راس بتطلع وتنزل وفمه عند سطح الميّه", "مفيش صوت استغاثة — الغرق الحقيقي صامت", "بيبص لفوق وبيحاول يعوم من غير تقدّم"],
    do: [
      "نادِ على منقذ/نجدة بصوت عالي، وخلي حد يكلّم الإسعاف ١٢٣.",
      "«مدّ أو ارمي، وماتنزلش»: مدّله حاجة يمسكها (غصن/سنارة/فوطة) وانت ثابت على البَر، أو ارميله حاجة بتعوم (عوّامة/طوق بحبل).",
      "اسحبه للبَر من غير ما تنزل الميّه بنفسك.",
      "أول ما يطلع ومش بيتنفّس: ابدأ إنعاش (نفس صناعي + ضغطات لو متدرّب، وإلا ضغطات صدر).",
      "حتى لو رجع يتنفّس: لازم مستشفى — ممكن يكون شرب ميّه ودخلت الرئة."
    ],
    dont: ["ماتنزلش الميّه تنقذه بإيدك لو مش منقذ محترف — الغريق في ذعر بيشدّك تحت معاه", "ماتفترضش إنه بيهزّر أو بيلعب", "ماتضيّعش وقت تدوّر على حاجة بعيدة — استخدم أقرب حاجة"],
    whenWhy: { ar: "معظم اللي بيموتوا وهم بينقذوا كانوا غير مدرّبين ونزلوا الميّه — عشان كده «ماتنزلش». والإنعاش فور الخروج بيحافظ على المخ.", en: "" },
    how: { ar: "مثال حيّ: طفل بيغرق في المسبح. تنبطح على البَر، تمدّ إيده أو فوطة يمسكها وتسحبه، وانت متكئ لورا عشان ماينزلكش — وحد بيكلّم الإسعاف.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حالة غرق»، المكان بالظبط، وهل الشخص طلع وبيتنفّس ولا لأ." }, { label: "الحماية المدنية/النجدة", number: "180", say: "لو محتاج إنقاذ نهري/بحري." }],
    whatToBuy: [{ item: "طوق/عوّامة نجاة بحبل قرب أي مسبح أو شاطئ", why: "أداة الإنقاذ الآمن الأساسية" }, { item: "حبل", why: "للرمي والسحب من بعيد" }],
    tech: ["Emergency SOS", "شارك موقعك المباشر — خصوصًا في مكان مفتوح أو شاطئ"],
    writeDown: ["مكان أدوات الإنقاذ على المسبح/الشاطئ", "أقرب نقطة إسعاف"],
    videosCommunities: [{ label: "American Red Cross — Water Safety", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html" }],
    othersPOV: { ar: "الغريق في ذعر كامل وهيتعلّق بأي حاجة بكل قوته — عشان كده تديله جسم يمسكه، مش إيدك مباشرة.", en: "" },
    say: { toOthers: ["«امسك ده! أنا هشدّك!»", "«انت — كلّم الإسعاف ١٢٣ دلوقتي!»"], toSelf: ["«مدّ أو ارمي — أنا ماأنزلش.»"] },
    bodyLanguage: { ar: "اثبت أو انبطح على البَر، اتكئ لورا وانت بتسحب عشان ماتقعش، صوتك عالي وواضح عشان توجّه الغريق.", en: "" },
    rights: { ar: "الأولوية للإنقاذ الآمن — إنقاذ يحطّك انت في خطر مش بينفع حد.", en: "" },
    variations: ["طفل: راقبه دايمًا عن قرب — الغرق بيحصل في ثواني وفي ميّه ضحلة جدًا.", "لوحدك: اعمل دقيقتين إنقاذ/إنعاش الأول ثم كلّم الإسعاف لو مفيش حد.", "بحر بأمواج/تيّار: بلّغ المنقذ فورًا، ماتنزلش وراه."],
    prevention: ["ماتسبش الأطفال لوحدهم قرب أي ميّه ولو لحظة", "تعليم السباحة", "أطواق نجاة وأسوار للمسابح"],
    drill: { ar: "كل ما تروح مكان فيه ميّه: حدّد فورًا مكان أقرب أداة عوم وأقرب حاجة تمدّها.", en: "" },
    after: { ar: "مستشفى إجباري بعد أي غرق حتى لو الشخص بيتنفّس كويس؛ راقب الكحّة وضيق النفس لعدة ساعات.", en: "" },
    sources: [{ label: "American Red Cross — Water Safety (Reach or Throw, Don't Go)", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/water-safety.html", grade: "A · مرجع سلامة مائية رسمي" }]
  },
  {
    id: "burn",
    title: { ar: "حرق (حرارة أو سوائل مغلية)", en: "Burn / scald" },
    level: 4, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["البيت", "مطبخ"], domain: "طوارئ",
    snapshot: { ar: "جلد اتحرق من نار أو ميّه/زيت سخن. التبريد بميّه جارية بسرعة بيقلّل الضرر والألم بشكل كبير.", en: "" },
    redFlags: ["احمرار وألم وفقاقيع", "حرق كبير أو عميق", "حرق في الوش/اليد/المفصل/الأعضاء الحساسة، أو عند طفل/كبير سن = خطر أعلى"],
    do: [
      "بعّد مصدر الحرارة، واشيل أي غطا/خاتم/جزمة قرب الحرق — بس ماتشيلش حاجة لازقة في الجلد نفسه.",
      "برّد الحرق تحت ميّه جارية فاترة لمدة ٢٠ دقيقة، وبأسرع وقت ممكن (ما تقلّش عن ١٥ دقيقة).",
      "بعد التبريد، غطّي الحرق بكيس بلاستيك نضيف أو «كلينج فيلم» بالطول (مش لفّة ضاغطة).",
      "دفّي باقي الجسم ببطانية عشان الحرارة ما تنزلش، من غير ما تلمس مكان الحرق.",
      "روح المستشفى لو الحرق كبير/عميق، أو في وش/يد/مفصل، أو طفل أو كبير سن."
    ],
    dont: ["ماتحطّش تلج ولا ميّه متلّجة — بيأذي الجلد أكتر", "ماتحطّش زبدة ولا معجون أسنان ولا أي دهان — بيحبس السخونة ويزوّد الضرر", "ماتفقعش الفقاقيع"],
    whenWhy: { ar: "التبريد بيوقف الحرارة من إنها تكمّل تحرق طبقات الجلد، وبيقلّل الألم. التلج بيجمّد الأنسجة، والدهون بتحبس الحرارة جوّه.", en: "" },
    how: { ar: "مثال حيّ: زيت سخن اتكبّ على إيد طفل. تشيله بعيد، تحطّ إيده تحت الحنفية فاتر ٢٠ دقيقة وانت بتطمّنه، وبعدين تغطّيها بكلينج فيلم وتروح الطوارئ.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو حرق كبير/عميق، أو في الوش/الأعضاء الحساسة." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "كلينج فيلم + شنطة إسعافات", why: "تغطية نضيفة ومانعة للعدوى" }, { item: "كاشف دخان وطفّاية", why: "الوقاية من الحريق أصلًا" }],
    tech: ["Emergency SOS", "صوّر الحرق بعد التبريد عشان الدكتور يتابع تطوّره"],
    writeDown: ["أرقام الطوارئ + أقرب مستشفى فيها قسم حروق"],
    videosCommunities: [{ label: "British Red Cross — Burns", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns" }, { label: "NHS — Burns and scalds treatment", url: "https://www.nhs.uk/conditions/burns-and-scalds/treatment/" }],
    othersPOV: { ar: "الطفل هيتخض من الألم وصوت الميّه — طمّنه واشغل انتباهه وانت بتبرّد، عشان يسيبك تكمّل الـ٢٠ دقيقة.", en: "" },
    say: { toOthers: ["«خليها تحت الميّه، أنا هجيب حاجة نضيفة نغطّيها.»"], toSelf: ["«٢٠ دقيقة ميّه فاترة — من غير تلج، من غير زبدة.»"] },
    bodyLanguage: { ar: "هدوء وصوت مطمئن وثابت — الطفل بيقرأ انفعالك، فطمأنينتك بتخليه يتحمّل التبريد.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الحروق الكبيرة محتاجة رعاية متخصّصة في قسم حروق.", en: "" },
    variations: ["حرق كهربائي: اقطع مصدر الكهربا بأمان الأول، ولازم كشف طبي حتى لو باين بسيط.", "حرق كيماوي: اغسل بميّه كتير جارية لفترة أطول، واشيل الهدوم الملوّثة.", "حرق كبير جدًا: كلّم الإسعاف فورًا وبرّد وانت مستني."],
    prevention: ["لفّ مقابض الحلل ناحية جوّه", "ماتشيلش سوائل سخنة فوق راس الأطفال", "اضبط حرارة السخّان", "حاجز على البوتاجاز"],
    drill: { ar: "اعرف مكان أقرب حنفية/دُش في البيت والشغل، عشان توصل للتبريد في ثواني.", en: "" },
    after: { ar: "تابع علامات العدوى (احمرار بيزيد، صديد، سخونية، ألم متزايد)؛ الحرق العميق ممكن يحتاج متابعة ووقاية من التيتانوس.", en: "" },
    sources: [
      { label: "British Red Cross — Burns", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns", grade: "A · مرجع إسعاف رسمي" },
      { label: "NHS — Burns and scalds: Treatment", url: "https://www.nhs.uk/conditions/burns-and-scalds/treatment/", grade: "A" }
    ]
  },
  {
    id: "heart-attack",
    title: { ar: "أعراض جلطة قلبية (نوبة قلبية)", en: "Heart attack signs" },
    level: 5, who: ["الكل", "كبار السن"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "ألم أو ضغط في نص الصدر بيستمر أو بيروح ويرجع، وممكن ينتشر للدراع/الفك/الظهر مع عرق ولهفة. عند الستات ممكن يبان ضيق نفس ودوخة من غير ألم صدر واضح.", en: "" },
    redFlags: ["ضغط/عصر في الصدر أكتر من بضع دقايق", "ألم بينتشر للدراع الشمال أو الفك", "عرق بارد وغثيان وضيق نفس مفاجئ"],
    do: [
      { t: "كلّم الإسعاف ١٢٣ فورًا لو في ألم في الصدر زي الضغط أو العصر، أو بينتشر للدراع أو الرقبة أو الفك.", src: "nhs:heart-attack" },
      { t: "خليه يقعد ويرتاح، ويبطّل أي مجهود.", src: "nhs:heart-attack" },
      { t: "لو معاكم أسبرين ٣٠٠ مجم، خليه ياخده — إلا لو عنده حساسية من الأسبرين.", src: "nhs:heart-attack" },
      { t: "لو معاه دوا الذبحة الموصوف له، ساعده ياخده.", src: "nhs:heart-attack" },
      { t: "لو فقد الوعي وبطّل يتنفّس طبيعي: كلّم الإسعاف وابدأ إنعاش على طول.", src: "nhs:cpr" }
    ],
    dont: [
      { t: "ماتديش أسبرين لحد عنده حساسية من الأسبرين.", src: "nhs:heart-attack" },
      { t: "ماتستناش الألم يروح لوحده — الاتصال بيتم فورًا.", src: "nhs:heart-attack" },
      "ماتسوقش بيه العربية بدل الإسعاف — الإسعاف بيبدأ علاج في الطريق."
    ],
    // NOTE: the previous version said aspirin «١٦٢–٣٢٥ مجم» — that is the American Heart Association
    // dose, attributed to an NHS page that says 300mg. Corrected to the source actually cited.
    // The last `dont` is deliberately left as a bare string: NHS does not state it, so it renders ⚠.
    whenWhy: { ar: "كل دقيقة عضلة قلب بتموت؛ الإسعاف بيبدأ العلاج في الطريق. الأسبرين بيقلّل التجلّط في الشريان المسدود.",
      en: "Heart muscle dies every minute; the ambulance begins treatment on the way. Aspirin reduces clotting in the blocked artery." },
    how: { ar: "مثال حيّ: عمّك مسك صدره وبيعرق والألم نازل في دراعه. تقعّده يرتاح، تكلّم ١٢٣، وتديله أسبرين ٣٠٠ مجم لو مفيش حساسية، وتفضل جنبه تراقبه.",
      en: "Your uncle clutches his chest, sweating, pain spreading down his arm. Sit him down to rest, call 123, give 300mg aspirin if he has no allergy, and stay watching him." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«أعراض جلطة قلبية» + السن + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "أسبرين في شنطة الإسعافات", why: "يتمضغ وقت النوبة (لو مفيش مانع)" }, { item: "جهاز ضغط منزلي", why: "لو في تاريخ قلبي" }],
    tech: ["Medical ID فيه أدويته وأمراضه", "Emergency SOS + شارك موقعك"],
    writeDown: ["أمراضه وأدويته وحساسياته في Medical ID", "أقرب مستشفى فيها قسطرة قلب"],
    videosCommunities: [{ label: "American Red Cross — Heart Attack", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack" }],
    othersPOV: { ar: "ناس كتير بتنكر إنها جلطة وبتستحي تتصل بالإسعاف — طمّنه إن الاتصال أأمن، والإنذار الكاذب أرحم من التأخير.", en: "" },
    say: { toOthers: ["«هكلّم الإسعاف حالًا، انت اقعد وارتاح ومتتحركش.»"], toSelf: ["«بعمل الصح: اتصال، راحة، وأسبرين.»"] },
    bodyLanguage: { ar: "هدوء وثبات، خليه مطمئن وقليل الحركة، صوتك واثق مش مذعور.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الإسعاف أولوية على أي إجراء تاني.", en: "" },
    variations: ["الستات ومرضى السكر: الأعراض ممكن تبان خفيفة أو مختلفة (تعب/ضيق نفس) — خُد أي شك بجدّية.", "لوحدك وبتحسّ بالأعراض: كلّم الإسعاف، افتح باب الشقة، واقعد قريب منه."],
    prevention: ["ضغط/سكر/كوليسترول تحت السيطرة", "بطّل تدخين", "حركة ومتابعة دورية"],
    drill: { ar: "احفظ رقم الإسعاف ومكان الأسبرين، واعرف أعراض الجلطة — خصوصًا المختلفة عند الستات.", en: "" },
    after: { ar: "حتى لو الألم خفّ، لازم مستشفى وتقييم قلب؛ المتابعة والدوا بيمنعوا نوبة تانية.", en: "" },
    sources: [
      { srcId: "nhs:heart-attack", label: "NHS — Heart attack", url: "https://www.nhs.uk/conditions/heart-attack/",
        grade: "A · INGESTED", sha256: "f8a7bfb168", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — 'While you're waiting for medical help': sit down and rest, take aspirin 300mg, take angina medication" },
      { srcId: "nhs:cpr", label: "NHS — CPR", url: "https://www.nhs.uk/tests-and-treatments/first-aid/cpr/",
        grade: "A · INGESTED", sha256: "67f42f0720", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — grounds the deterioration step" },
      { label: "American Heart Association — Warning Signs", url: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack",
        grade: "C · CITE-ONLY", verified: "NOT machine-fetched", note: "AHA's aspirin dose (162–325mg) differs from NHS's 300mg; card follows the ingested NHS source" },
      { label: "American Red Cross — Heart Attack", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heart-attack",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "stroke-fast",
    title: { ar: "أعراض سكتة دماغية (اختبار FAST)", en: "Stroke — act FAST" },
    level: 5, who: ["الكل", "كبار السن"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "نص الوش واقع، أو دراع مش قادر يرفعها، أو كلام متلخبط — دي سكتة دماغية. الوقت = مخ، وكل دقيقة بتفرق.", en: "" },
    redFlags: ["ابتسامة مايلة/نص وش واقع", "ضعف مفاجئ في دراع أو رجل (غالبًا ناحية واحدة)", "كلام متلعثم أو مش مفهوم", "دوخة/عدم اتزان أو صداع شديد مفاجئ"],
    do: ["F الوش: قوله يبتسم — نص الوش واقع؟", "A الدراع: قوله يرفع دراعيه — واحدة بتقع؟", "S الكلام: قوله يكرّر جملة بسيطة — متلعثم؟", "T الوقت: لو أي علامة ظهرت، كلّم الإسعاف ١٢٣ فورًا، وسجّل وقت بداية الأعراض.", "خليه مرتاح على جنبه، ماتديهوش أكل/شرب/دوا، وافضل معاه."],
    dont: ["ماتستناش تشوف هيتحسّن", "ماتسوقش بنفسك للمستشفى — الإسعاف بيبدأ ويجهّز فريق السكتة", "ماتديش أكل/شرب — ممكن يشرق"],
    whenWhy: { ar: "العلاج اللي بيفكّ الجلطة بيشتغل بأعلى فاعلية خلال ~٣ ساعات من أول عرض؛ عشان كده الوقت حرج، وتسجيل بداية الأعراض بيحدّد العلاج.", en: "" },
    how: { ar: "مثال حيّ: خالتك بتتكلم بصعوبة ونص بقّها مايل. تعملي الـFAST بسرعة، تكلّمي ١٢٣ وتقولي «اشتباه سكتة»، وتسجّلي إمتى بدأت.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«اشتباه سكتة دماغية» + وقت بداية الأعراض + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "مفيش — السرعة والاتصال هما الأهم", why: "التشخيص بالـFAST ببلاش" }],
    tech: ["Emergency SOS", "سجّل وقت أول عرض في الموبايل فورًا"],
    writeDown: ["أدويته (خصوصًا مسيّلات الدم) وأمراضه في Medical ID"],
    videosCommunities: [{ label: "CDC — Stroke Signs & Symptoms (FAST)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" }, { label: "Stroke Association — Symptoms", url: "https://www.stroke.org.uk/stroke/symptoms" }],
    othersPOV: { ar: "المصاب ممكن ينكر إنه تعبان أو مش قادر يوصف حالته — انت اللي تقرر بالـFAST وتتصل.", en: "" },
    say: { toOthers: ["«ابتسم لي… ارفع دراعيك… كرّر ورايا.» ثم «هكلّم الإسعاف حالًا.»"], toSelf: ["«FAST: وش، دراع، كلام، وقت — واتصل.»"] },
    bodyLanguage: { ar: "هدوء وطمأنة، خليه ثابت على جنبه، وسجّل الوقت بدقة.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ الإسعاف أولوية.", en: "" },
    variations: ["BE-FAST كمان: فقدان توازن (Balance) أو مشكلة نظر (Eyes) مفاجئة.", "لو الأعراض راحت بسرعة في دقايق: برضه لازم إسعاف — ممكن تكون إنذار بجلطة أكبر."],
    prevention: ["ضغط الدم تحت السيطرة (أهم عامل)", "بطّل تدخين", "متابعة القلب والسكر"],
    drill: { ar: "احفظ FAST — أهم أداة تشخيص سريع بتنقذ مخ. كرّرها لأهلك.", en: "" },
    after: { ar: "مستشفى فورًا؛ التعافي بيعتمد على سرعة العلاج + إعادة تأهيل بعدها.", en: "" },
    sources: [{ label: "CDC — Stroke Signs and Symptoms", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html", grade: "A · جهة صحية رسمية" }, { label: "Stroke Association (UK) — FAST", url: "https://www.stroke.org.uk/stroke/symptoms", grade: "A" }]
  },
  {
    id: "seizure",
    title: { ar: "نوبة صرع (تشنّج)", en: "Seizure" },
    level: 4, who: ["الكل"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "حد بيرتجف/يتشنّج فجأة وممكن يقع ويفقد الوعي. أغلب النوبات بتقف لوحدها خلال دقايق — دورك تأمّنه.", en: "" },
    redFlags: ["تصلّب وارتجاف مفاجئ", "فقدان وعي أو تحديق/شرود", "ريالة، وأحيانًا تبوّل لا إرادي"],
    do: ["ابدأ تحسب وقت النوبة، واهدا.", "بعّد أي حاجة صلبة/خطر حواليه، وحُط حاجة طرية تحت راسه (جاكت).", "ماتمسكهوش وماتقيّدش حركته.", "لمّا يهدأ أو لو مش واعي: لفّه على جنبه (وضع الإفاقة) عشان الريالة تنزل ومايشرقش.", "افضل معاه لحد ما يفوق تمامًا، وطمّنه — هيكون متلخبط."],
    dont: ["ماتحطّش أي حاجة في بقّه — اللسان مش بيتبلع، وممكن يعضّ أو يشرق", "ماتقيّدش حركته أو تضغط عليه", "ماتديهوش أكل/شرب لحد ما يفوق خالص"],
    whenWhy: { ar: "التقييد بيأذيه ويأذيك؛ والحاجة في البق بتسبب كسر أسنان أو اختناق. وضع الجنب بيحمي مجرى الهوا من الريالة.", en: "" },
    how: { ar: "مثال حيّ: زميلك وقع بيتشنّج. تبعّد الكراسي، تحط شنطة تحت راسه، تحسب الوقت، ولمّا يهدأ تلفّه على جنبه وتفضل معاه.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو النوبة عدّت ٥ دقايق، أو أول نوبة في حياته، أو اتأذى، أو نوبة ورا نوبة، أو مش بيفوق." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "مفيش — بعّد الخطر بس", why: "التأمين هو العلاج الأولي" }],
    tech: ["Emergency SOS", "لو تقدر صوّر النوبة — بتساعد الدكتور في التشخيص"],
    writeDown: ["لو معروف عنده صرع: نوع النوبات وأدويته في Medical ID"],
    videosCommunities: [{ label: "CDC — First Aid for Seizures", url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html" }, { label: "NHS — What to do if someone has a seizure", url: "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/" }],
    othersPOV: { ar: "بعد النوبة بيكون مشوّش وخايف ومكسوف — طمّنه بهدوء وماتزنقوش بأسئلة كتير.", en: "" },
    say: { toOthers: ["«ابعدوا الكراسي وافتحوا مكان — مفيش خطر، النوبة هتقف.»"], toSelf: ["«أأمّنه وأحسب الوقت — مش هأمسكه.»"] },
    bodyLanguage: { ar: "هدوء، صوت واطي، ووجود مطمئن بعد ما يفوق.", en: "" },
    rights: { ar: "التأمين والاتصال عند الخطر تصرّف مسؤول.", en: "" },
    variations: ["طفل مع حمّى (تشنّج حراري): نفس التأمين + برّده وكلّم الطوارئ.", "في كرسي متحرك: ثبّت الكرسي وادعم راسه من غير ما تخرجه بالعافية."],
    prevention: ["لو معروف عنده صرع: انتظام الدوا والنوم وتجنّب المحفّزات (سهر/أضواء)"],
    drill: { ar: "احفظ Stay-Safe-Side (اهدا · أمّن · على جنبه) ومتى تتصل بالإسعاف.", en: "" },
    after: { ar: "خليه يرتاح ويفوق بالراحة؛ أول نوبة في الحياة لازم كشف عصبي.", en: "" },
    sources: [{ label: "CDC — First Aid for Seizures", url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html", grade: "A · جهة صحية رسمية" }, { label: "NHS — Seizure first aid", url: "https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/", grade: "A" }]
  },
  {
    id: "anaphylaxis",
    title: { ar: "رد فعل تحسّسي شديد (حساسية مفرطة)", en: "Anaphylaxis" },
    level: 5, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["أي مكان", "مطعم"], domain: "طوارئ",
    snapshot: { ar: "رد فعل تحسّسي بيهدّد الحياة وبيحصل بسرعة — تورّم وطفح وصعوبة تنفّس بعد أكل/دوا/لسعة. الأدرينالين بينقذ.", en: "" },
    redFlags: ["صعوبة تنفّس أو صفير", "تورّم وش/شفايف/لسان/زور", "طفح جلدي منتشر، دوخة أو إغماء بعد التعرّض لمسبب"],
    do: [
      { t: "لو معاه حاقن أدرينالين (زي EpiPen): استخدمه فورًا — التعليمات مكتوبة على جنب الحاقن نفسه.", src: "nhs:anaphylaxis" },
      { t: "استخدم الحاقن حتى لو الأعراض لسه بسيطة.", src: "nhs:anaphylaxis" },
      { t: "كلّم الإسعاف ١٢٣ وقول إنها «حساسية مفرطة / أنافيلاكسيس».", src: "nhs:anaphylaxis" },
      { t: "نيّمه وارفع رجليه. لو بيتعب في نفسه: ارفع كتافه أو قعّده بالراحة. لو حامل: على جنبها الشمال.", src: "nhs:anaphylaxis" },
      { t: "لو اتلسع من حشرة والإبرة لسه في الجلد، حاول تشيلها.", src: "nhs:anaphylaxis" },
      { t: "لو ماتحسّنش خلال ٥ دقايق ومعاك حاقن تاني: استخدمه.", src: "nhs:anaphylaxis" }
    ],
    dont: [
      { t: "ماتأخّرش الأدرينالين استنّاء الأعراض «تهدأ» — يتاخد حتى لو بسيطة.", src: "nhs:anaphylaxis" },
      "ماتخليهوش يقف أو يمشي فجأة.",
      "ماتسيبهوش لوحده."
    ],
    // NOTE: the previous version said «اضغط لحد كليك وثبّت ٣ ثواني». NHS states no hold-time — it says the
    // instructions are printed on the injector, and hold-time differs by brand. Invented detail removed.
    whenWhy: { ar: "الأدرينالين بيفتح المجرى الهوائي ويرفع الضغط، والتأخير بيهدّد الحياة. عشان كده بيتاخد فورًا حتى لو الأعراض بسيطة، والإسعاف بيتكلّم على طول.",
      en: "Adrenaline opens the airway and raises blood pressure; delay is life-threatening. Use it immediately even if symptoms are mild, and call the ambulance straight away." },
    how: { ar: "مثال حيّ: صاحبك أكل مكسرات وبدأ لسانه يتورّم ويصعب عليه النفس. تجيب الحاقن وتتبع التعليمات المكتوبة عليه، تكلّم ١٢٣، وتنيّمه وترفع رجليه.",
      en: "Your friend eats nuts, his tongue swells and breathing becomes hard. Use the auto-injector following the instructions printed on it, call 123, lie him down and raise his legs." },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حساسية مفرطة» + المسبب لو معروف + العنوان." }, { label: "الموحّد", number: "112", say: "بديل." }],
    whatToBuy: [{ item: "حاقن أدرينالين (بوصفة) — يفضل اتنين", why: "لأي حد عنده حساسية شديدة معروفة" }, { item: "كارت/سوار تنبيه طبي", why: "يوضّح الحساسية" }],
    tech: ["Medical ID فيه الحساسيات", "Emergency SOS"],
    writeDown: ["الحساسيات المعروفة في Medical ID وكارت في المحفظة"],
    videosCommunities: [{ label: "NHS — Anaphylaxis", url: "https://www.nhs.uk/conditions/anaphylaxis/" }, { label: "American Red Cross — Allergic Reaction/Anaphylaxis", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis" }],
    othersPOV: { ar: "ممكن يقلّل من خطورة حالته أو يتردّد يستخدم الحاقن — الأدرينالين آمن ولازم يتاخد بسرعة.", en: "" },
    say: { toOthers: ["«معاك EpiPen؟ فين؟ — هستخدمه دلوقتي.»"], toSelf: ["«أدرينالين الأول، بعدين إسعاف، وأنيّمه.»"] },
    bodyLanguage: { ar: "حركة حاسمة وسريعة مع طمأنة — التردّد بيضيّع وقت غالي.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك؛ استخدام الحاقن في الطوارئ تصرّف منقذ.", en: "" },
    variations: ["طفل: حاقن أطفال بجرعة مناسبة.", "لسعة نحل: شيل الإبرة بالكشط جنبيًا (مش بالعصر).", "بيتكرّر: لازم متابعة مناعة/حساسية وحمل حاقن دايمًا."],
    prevention: ["تجنّب المسبب المعروف", "احمل الحاقن دايمًا وتأكد إنه مش منتهي", "بلّغ المطاعم بالحساسية"],
    drill: { ar: "اتمرّن على تعليمات الحاقن (حاقن تدريب) قبل ما تحتاجه — عشان إيدك تعرفه في اللحظة.", en: "" },
    after: { ar: "حتى بعد التحسّن لازم مستشفى — ممكن يرجع رد الفعل تاني بعد ساعات (تفاعل ثنائي الطور).", en: "" },
    sources: [
      { srcId: "nhs:anaphylaxis", label: "NHS — Anaphylaxis", url: "https://www.nhs.uk/conditions/anaphylaxis/",
        grade: "A · INGESTED", sha256: "8cc8e0f7f6", retrieved: "2026-07-09", licence: "OGL v3",
        verified: "machine — 'What to do if you have anaphylaxis' extracted from these bytes" },
      { label: "American Red Cross — Anaphylaxis", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/allergic-reaction-anaphylaxis",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "electric-shock",
    title: { ar: "صعق كهربائي", en: "Electric shock" },
    level: 4, who: ["الكل", "آباء وأمهات", "أطفال"], place: ["البيت", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "حد اتصعق بالكهربا وممكن يكون لسه ملامس المصدر. سلامتك الأول — ماتلمسوش قبل ما تفصل الكهربا.", en: "" },
    redFlags: ["ملامس سلك/جهاز كهربائي", "تشنّج أو فقدان وعي", "حرق في مكان دخول/خروج التيار", "مش بيتنفّس"],
    do: ["افصل الكهربا من المصدر الرئيسي (المفتاح/القاطع) قبل أي حاجة.", "ماتلمسش الشخص لحد ما تتأكد إن الكهربا اتفصلت.", "لو ماقدرتش تفصل: قف على حاجة عازلة ناشفة (خشب/بلاستيك) واستخدم عصاية خشب تبعّد المصدر عنه.", "كلّم الإسعاف ١٢٣.", "لو فاقد وعي وبيتنفّس: وضع الإفاقة على جنبه. لو مش بيتنفّس: ابدأ CPR."],
    dont: ["ماتلمسهوش وهو ملامس الكهربا", "ماتستخدمش حاجة معدن أو مبلولة", "ماتقربش من كهربا ضغط عالي — اتصل بالشركة والطوارئ"],
    whenWhy: { ar: "التيار بيعدّي من المصاب لأي حد يلمسه؛ العزل بيحميك. والصعق ممكن يوقّف القلب والتنفّس فيحتاج CPR.", en: "" },
    how: { ar: "مثال حيّ: طفل مسك سلك مكشوف واتشنّج. تجري تفصل القاطع الأول، وبعدين تقرب منه، تكلّم الإسعاف، وتشوف بيتنفّس ولا لأ.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«صعق كهربائي» + حالة الوعي والتنفّس." }, { label: "المطافي/الحماية المدنية", number: "180", say: "لو في حريق أو كهربا ضغط عالي." }],
    whatToBuy: [{ item: "قاطع تسريب أرضي (RCD/ELCB) في لوحة البيت", why: "بيفصل الكهربا فورًا عند التسريب" }, { item: "أغطية بريزات للأطفال", why: "وقاية" }],
    tech: ["Emergency SOS", "اعرف مكان القاطع الرئيسي واحفظه"],
    writeDown: ["مكان القاطع الرئيسي معروف لكل أهل البيت"],
    videosCommunities: [{ label: "NHS — First aid", url: "https://www.nhs.uk/tests-and-treatments/first-aid/" }, { label: "American Red Cross — Shock", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/shock" }],
    othersPOV: { ar: "الناس بتجري تلمس المصاب بحسن نية — نبّههم بصوت عالي «ماتلمسوش! افصلوا الكهربا الأول».", en: "" },
    say: { toOthers: ["«ماحدش يلمسه! افصلوا الكهربا من القاطع!»"], toSelf: ["«أفصل المصدر الأول، بعدين ألمسه.»"] },
    bodyLanguage: { ar: "قف وفكّر ثانية قبل الاندفاع — سلامتك بتنقذ الاتنين.", en: "" },
    rights: { ar: "الأولوية للتأمين ثم الاتصال؛ إنقاذ يحطّك في خطر مش بينفع.", en: "" },
    variations: ["كهربا ضغط عالي (أعمدة/محوّلات): ابعد ٦ متر على الأقل وكلّم الشركة والطوارئ — ماتحاولش تقرب.", "حرق مصاحب: برّد بميّه بعد فصل الكهربا (زي بطاقة الحرق)."],
    prevention: ["صيانة الأسلاك والوصلات", "أغطية بريزات", "ماتستخدمش أجهزة كهربا وإيدك أو الأرض مبلولة"],
    drill: { ar: "عرّف كل أهل البيت مكان القاطع الرئيسي وإزاي يفصلوه في ثواني.", en: "" },
    after: { ar: "أي صعق مؤثّر لازم كشف طبي — ممكن يأثّر على نظم القلب حتى لو باين بسيط.", en: "" },
    sources: [{ label: "NHS — First aid (electric shock)", url: "https://www.nhs.uk/tests-and-treatments/first-aid/", grade: "A · مرجع صحي رسمي" }, { label: "American Red Cross — Shock", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/shock", grade: "A" }]
  },
  {
    id: "infant-choking",
    title: { ar: "رضيع بيختنق (أقل من سنة)", en: "Infant choking (under 1)" },
    level: 5, who: ["آباء وأمهات", "مقدّم رعاية"], place: ["البيت", "أي مكان"], domain: "طوارئ",
    snapshot: { ar: "رضيع مش قادر يعيّط ولا يسعل ولا يتنفّس ولونه بيزرقّ. الرضيع بيتعالج غير الكبار: ضرب ظهر + ضغطات صدر — مفيش ضغط بطن أبدًا.", en: "" },
    redFlags: ["مفيش صوت عياط ولا سعال", "صوت صفير ضعيف أو مفيش صوت", "الشفايف والوش بيزرقّوا وبيتلبّط بإيديه"],
    do: [
      { t: "نيّمه على بطنه على ساعدك، وسند ساعدك على فخذك أو حِضنك، وامسك صدره في إيدك.", src: "mlp:choking-infant" },
      { t: "اديله لحد ٥ ضربات سريعة وقوية بين لوحي كتفه براحة إيدك التانية.", src: "mlp:choking-infant" },
      { t: "اقلبه على ضهره، وسنده على فخذك أو حِضنك، وسند راسه.", src: "mlp:choking-infant" },
      { t: "حُط كعب إيد واحدة في نص عظمة الصدر تحت الحلمتين بشوية، واعمل لحد ٥ ضغطات صدر لتحت.", src: "mlp:choking-infant" },
      { t: "لو شايف الحاجة اللي قافلة مجرى الهوا، حاول تطلّعها بصباعك — بس بشرط تكون شايفها.", src: "mlp:choking-infant" },
      { t: "كمّل ٥ ضرب ظهر وبعدها ٥ ضغطات صدر لحد ما الحاجة تطلع أو الرضيع يغيب عن الوعي.", src: "mlp:choking-infant" }
    ],
    dont: [
      { t: "ماتعملش إسعاف اختناق لو الرضيع بيسعل بقوة، أو عياطه قوي، أو بيتنفّس كفاية.", src: "mlp:choking-infant" },
      { t: "ماتحاولش تمسك الحاجة وتشدّها وهو صاحي وواعي.", src: "mlp:choking-infant" },
      { t: "ماتعملش ضرب ظهر وضغطات صدر لو الرضيع بطّل يتنفّس لسبب تاني، زي الربو أو عدوى أو تورّم.", src: "mlp:choking-infant" }
    ],
    whenWhy: { ar: "أعضاء الرضيع رقيقة، فضغط البطن خطر عليه. ضرب الظهر وضغط الصدر بيرفعوا ضغط الهوا في الرئة بأمان فيقذفوا الجسم برّه.", en: "" },
    how: { ar: "مثال حيّ: رضيع اتشرق من قطعة أكل. تقعد، تحطّه على ساعدك ووشّه لتحت مسنود على فخذك، ٥ ضربات حاسمة بين كتفيه، وبعدين تقلبه وتعمل ٥ ضغطات بصباعين في نص صدره.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«رضيع بيختنق ومش بيتنفّس» + العنوان." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "كورس إسعافات أولية للأطفال والرضّع", why: "الحركة مختلفة تمامًا عن الكبار" }, { item: "بوستر خطوات إنقاذ الرضيع", why: "علّقه في أوضته" }],
    tech: ["فعّل Emergency SOS", "خلي حد يكلّم الإسعاف على السبيكر عشان إيديك تفضل حرّة"],
    writeDown: ["أرقام الطوارئ على التلاجة", "بيانات الرضيع الطبية وحساسياته"],
    videosCommunities: [{ label: "American Red Cross — Infant Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/infant-choking" }, { label: "British Red Cross — Choking baby", url: "https://www.redcross.org.uk/first-aid/learn-first-aid-for-babies-and-children/choking-baby" }],
    othersPOV: { ar: "الأم أو الأب هيكونوا في ذعر كامل — عيّن حد بالاسم يتصل بالإسعاف وانت بتعمل الخطوات، بدل ما الكل يتفرّج.", en: "" },
    say: { toOthers: ["«انت — كلّم الإسعاف ١٢٣ دلوقتي وحطّه على السبيكر!»"], toSelf: ["«٥ ظهر، ٥ صدر. ماأعملش ضغط بطن.»"] },
    bodyLanguage: { ar: "اقعد وثبّت ساعدك على فخذك، حركتك حاسمة ومحسوبة مش عنيفة، وصوتك واطي وواضح.", en: "" },
    rights: { ar: "الإسعاف الطارئ حقّه؛ ومساعدتك بحُسن نيّة في خطر حالّ تصرّف مسؤول.", en: "" },
    variations: ["طفل أكبر من سنة: ضرب ظهر + ضغطات بطن (زي الكبار بحجم أصغر).", "لو فقد الوعي: ابدأ إنعاش الرضّع (ضغطات صدر) فورًا.", "لوحدك: اعمل الخطوات وكلّم الإسعاف على السبيكر."],
    prevention: ["قطّع أكل الرضيع صغير جدًا", "بعّد الحاجات الصغيّرة: بطاريات، عملات، لعب صغيرة", "ماتسيبهوش ياكل وهو نايم أو بيتحرّك"],
    drill: { ar: "راجع خطوات إنقاذ الرضيع مرة كل شهر وتخيّل نفسك بتعملها — الحركة لازم تبقى في إيدك قبل اللحظة.", en: "" },
    after: { ar: "حتى لو الجسم طلع، اكشف عند دكتور أطفال — الرضيع ممكن يكون اتأذى من الضغطات أو دخل جزء للرئة.", en: "" },
    sources: [
      { srcId: "mlp:choking-infant", label: "MedlinePlus — Choking: infant under 1 year",
        url: "https://medlineplus.gov/ency/article/000048.htm", grade: "A · INGESTED",
        sha256: "a7c34e47b5", retrieved: "2026-07-10", licence: "public domain (U.S. NLM)",
        verified: "machine — back blows + CHEST thrusts (never abdominal) extracted from these bytes",
        attribution: "Information from MedlinePlus.gov" },
      { label: "American Red Cross — Infant Choking", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/infant-choking",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted" }
    ]
  },
  {
    id: "car-accident",
    title: { ar: "حادثة عربية (مكان الحادث)", en: "Car accident scene" },
    level: 5, who: ["سائقين", "مواطن"], place: ["الطريق"], domain: "طوارئ",
    snapshot: { ar: "حادثة قدّامك أو انت طرف فيها. الترتيب اللي بينقذ: أمّن المكان ← كلّم النجدة ← اسعف. سلامتك الأول، عشان ماتبقاش ضحية تانية.", en: "" },
    redFlags: ["تسريب بنزين أو دخان", "عربيات لسه جاية بسرعة على مكان الحادث", "مصاب مش بيرد أو مش بيتنفّس، أو نزيف غزير"],
    do: [
      "رُكن بعيد عن الحادث، شغّل الفلاشر، والبس ستر عاكسة لو معاك — ماتقفش في نص الطريق.",
      "اتأكد المكان آمن (تيّار عربيات، بنزين مسكوب، نار) قبل ما تقرّب.",
      "كلّم الإسعاف ١٢٣ والنجدة ١٢٢ (و١٨٠ لو في حريق أو محتجزين) — قول المكان بدقّة وعدد المصابين.",
      "ماتحرّكش المصاب إلا لو في خطر مباشر — بس فتح مجرى الهوا أهم من الخوف على الرقبة.",
      "اسعف حسب تدريبك: اضغط على النزيف، ولو مش بيتنفّس ابدأ إنعاش."
    ],
    dont: ["ماتقفش في مسار العربيات", "ماتشيلش خوذة راكب الموتوسيكل إلا لو مش بيتنفّس", "ماتديش المصاب أكل ولا شرب", "ماتزنقش المكان بالفضول والتصوير"],
    whenWhy: { ar: "أكبر خطر في الحوادث إنك تتصدم انت كمان — تأمين المكان بيحمي الكل. والاتصال المبكر بيجيب فريق مجهّز بدل مجهودك لوحدك.", en: "" },
    how: { ar: "مثال حيّ: عربية اتقلبت. تركن بعيد بالفلاشر، تتأكد مفيش بنزين مسكوب، تكلّم ١٢٣ و١٢٢ وتقول «طريق كذا، الاتجاه كذا، عربية مقلوبة، مصاب واحد واعي»، وتفضل معاه من غير ما تحرّكه.", en: "" },
    whoToCall: [
      { label: "الإسعاف", number: "123", say: "«حادثة طريق» + عدد المصابين + المكان بدقّة." },
      { label: "النجدة / الشرطة", number: "122", say: "لتأمين الطريق وعمل المحضر." },
      { label: "الحماية المدنية", number: "180", say: "لو في حريق أو حد محتجز جوّه العربية." }
    ],
    whatToBuy: [{ item: "مثلث عاكس + ستر عاكسة في شنطة العربية", why: "بيمنع حادثة تانية عليك" }, { item: "شنطة إسعافات للعربية (شاش وقفازات)", why: "وقف النزيف أهم إسعاف" }],
    tech: ["Emergency SOS + شارك موقعك المباشر", "صوّر المكان بعد ما تأمّنه — للمحضر والتأمين"],
    writeDown: ["رقم بوليصة التأمين ورخصة العربية محفوظين في الموبايل", "أرقام الطوارئ في المفضّلة"],
    videosCommunities: [{ label: "American Red Cross — First Aid Steps (Check, Call, Care)", url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps" }, { label: "St John Ambulance — Traffic collision", url: "https://www.sja.org.uk/first-aid-advice/traffic-collision/" }],
    othersPOV: { ar: "المصاب ممكن يكون في صدمة، ينكر إنه اتأذى ويحاول يقوم ويمشي — طمّنه وخليه ثابت لحد الإسعاف.", en: "" },
    say: { toOthers: ["«ماتحركوش! الإسعاف جاي.»", "«انت اللي بالعربية البيضا — وقّف العربيات من ورا.»"], toSelf: ["«أمّن، اتصل، اسعف — بالترتيب ده.»"] },
    bodyLanguage: { ar: "هدوء وصوت واضح وأوامر قصيرة موجّهة بالاسم أو الوصف — الفوضى بتقلّ أول ما حد ياخد القيادة.", en: "" },
    rights: { ar: "الإبلاغ وعمل محضر حقّك؛ ومساعدة مصاب في خطر حالّ تصرّف مسؤول.", en: "" },
    variations: ["انت الطرف: افضل بالحزام جوّه العربية لو الطريق سريع، لحد ما تتأكد إن النزول آمن.", "موتوسيكل: ماتشيلش الخوذة إلا لو مش بيتنفّس.", "طريق سريع أو نفق: الخطر أعلى — بعّد الناس ورا الحاجز."],
    prevention: ["حزام الأمان دايمًا ولكل الركّاب", "ماتستخدمش الموبايل وانت بتسوق", "صيانة الفرامل والكاوتش"],
    drill: { ar: "افتح شنطة عربيتك النهاردة: المثلث والستر وشنطة الإسعافات موجودين؟", en: "" },
    after: { ar: "اعمل محضر، صوّر، وبلّغ التأمين. واكشف طبي حتى لو حاسس إنك كويس — إصابات كتير بتظهر بعد ساعات.", en: "" },
    sources: [
      { label: "American Red Cross — First Aid Steps (Check · Call · Care)", url: "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps", grade: "A · مرجع طوارئ رسمي" },
      { label: "St John Ambulance — How to manage a traffic accident", url: "https://www.sja.org.uk/first-aid-advice/traffic-collision/", grade: "A" }
    ]
  },
  {
    id: "poisoning",
    title: { ar: "تسمّم — حد بلع مادة أو دوا", en: "Poisoning (swallowed)" },
    level: 4, who: ["آباء وأمهات", "أطفال", "الكل"], place: ["البيت"], domain: "طوارئ",
    snapshot: { ar: "حد (غالبًا طفل) بلع مادة كيماوية أو دوا. أخطر غلط شائع وأشهره: إنك تخليه يرجّع.", en: "" },
    redFlags: ["علبة أو زجاجة مفتوحة جنبه", "ريحة غريبة من بقّه أو حروق حوالين الشفايف", "قيء أو لعاب زايد، دوخة، أو تشنّج"],
    do: [
      { t: "كلّم الإسعاف ١٢٣ أو روح الطوارئ فورًا لو حد بلع أو لمس أو استنشق مادة ضارّة.", src: "nhs:poisoning" },
      { t: "لو فاقد الوعي ومش بيتنفّس: ابدأ إنعاش (CPR) على طول.", src: "nhs:poisoning" },
      { t: "لو فاقد الوعي بس بيتنفّس: حُطّه في وضع الإفاقة على جنبه، وفضل تراقب تنفّسه.", src: "nhs:poisoning" },
      { t: "لو صاحي: فضل تتكلّم معاه عشان تتأكد إنه ما غابش عن الوعي.", src: "nhs:poisoning" },
      { t: "دوّر على سبب التسمّم — علبة، شريط دوا، عبوة — وخُدها معاك للمستشفى.", src: "nhs:poisoning" }
    ],
    dont: [
      { t: "ماتحاولش تخليه يرجّع أبدًا — ممكن يشرق ويبطّل تنفّس.", src: "nhs:poisoning" },
      { t: "ماتديهوش أي حاجة ياكلها أو يشربها — لا ميّه ولا لبن.", src: "nhs:poisoning" },
      "ماتديش أي «ترياق شعبي»، وماتستناش الأعراض تظهر."
    ],
    whenWhy: { ar: "الترجيع ممكن يخنقه ويوقّف نفسه، وبيرجّع المادة الكاوية على المريء تاني. والأكل أو الشرب ممكن يزوّد الأذى أو يعطّل العلاج في المستشفى. المعلومة الدقيقة (المادة/الكمية/الوقت) هي اللي بتحدّد الترياق.", en: "" },
    how: { ar: "مثال حيّ: طفل بلع مبيّض. ماتخليهوش يرجّع، وماتديهوش ميّه ولا لبن، شيل العلبة معاك، وكلّم الإسعاف ١٢٣ أو روح الطوارئ فورًا.", en: "" },
    // AUTHORITY CONFLICT, surfaced rather than hidden. NHS (ingested, sha 8292bd5634) says give
    // NOTHING to eat or drink. Some US poison-centre guidance permits a sip of water/milk for a
    // conscious caustic ingestion. Where authorities disagree on a safety instruction we take the
    // conservative one and say so. The previous version of this card carried the water/milk advice
    // on the model's recollection alone; the ingested primary source overturned it.
    sourceConflict: { ar: "المصادر بتختلف حوالين رشفة ميّه أو لبن. اتّبعنا الأحوط: ماتديش حاجة بالبق، وكلّم الإسعاف.", resolvedTo: "nhs:poisoning" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«حالة تسمّم» + اسم المادة والكمية ووقت البلع." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "قفل لدولاب الأدوية والمنظّفات", why: "أهم وقاية منزلية على الإطلاق" }, { item: "بلاش تنقل منظّفات في زجاجات مياه", why: "من أشهر أسباب التسمّم المنزلي" }],
    tech: ["صوّر العبوة والملصق قبل ما تتحرّك", "Emergency SOS"],
    writeDown: ["اسم المادة، الكمية التقريبية، ووقت البلع — الدكتور هيسأل عليهم", "مكان أقرب مستشفى فيها طوارئ/وحدة سموم"],
    videosCommunities: [{ label: "Poison Control — First aid: Act fast", url: "https://www.poison.org/first-aid-for-poisonings" }, { label: "American Red Cross — Poison Exposure", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/poison-exposure" }],
    othersPOV: { ar: "الطفل هيخاف ويخبّي إنه بلع حاجة عشان مايتعاقبش — طمّنه إنه مش هيتعاقب، عشان يقولك بالظبط بلع إيه.", en: "" },
    say: { toOthers: ["«بلع إيه بالظبط؟ وامتى؟ — مش هزعّق، بس لازم أعرف.»"], toSelf: ["«مارجّعوش. أجيب العبوة وأتصل.»"] },
    bodyLanguage: { ar: "هدوء وسرعة من غير صراخ — الصراخ بيخلي الطفل يخبّي المعلومة اللي بتنقذه.", en: "" },
    rights: { ar: "علاج الطوارئ حقّك، والسؤال عن المادة مش اتّهام.", en: "" },
    variations: ["مادة على الجلد أو العين: اغسل بميّه جارية كتير فورًا.", "استنشاق غاز أو مبيد: طلّعه هوا نضيف فورًا وكلّم الإسعاف.", "بطارية زرار (قرصية): طوارئ فورية — بتحرق المريء خلال ساعات."],
    prevention: ["اقفل المنظّفات والأدوية عالي وبعيد", "ماتنقلش مواد كيماوية في زجاجات مشروبات", "ماتقولش للطفل إن الدوا «حلوى»"],
    drill: { ar: "لفّ على البيت النهاردة: المنظّفات والأدوية في متناول إيد طفل ولا لأ؟", en: "" },
    after: { ar: "تابع في المستشفى حتى لو باين كويس — أعراض بعض السموم بتتأخّر ساعات.", en: "" },
    sources: [
      { srcId: "nhs:poisoning", label: "NHS — Poisoning", url: "https://www.nhs.uk/conditions/poisoning/",
        grade: "A · INGESTED", sha256: "8292bd5634", retrieved: "2026-07-10", licence: "OGL v3",
        verified: "machine — fetched, hashed, fields extracted from these bytes" },
      { label: "Poison Control (NCPC) — First aid for poisonings", url: "https://www.poison.org/first-aid-for-poisonings",
        grade: "A · CITE-ONLY", verified: "human — not machine-fetched", note: "disagrees with NHS on water/milk; see sourceConflict" },
      { label: "American Red Cross — Poison Exposure", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/poison-exposure",
        grade: "C · CITE-ONLY", verified: "NOT machine-verified — redcross.org returns 403 to scripts; copyrighted, cite not copy" }
    ]
  },
  {
    id: "heat-stroke",
    title: { ar: "إجهاد حراري وضربة شمس", en: "Heat exhaustion & heat stroke" },
    level: 4, who: ["الكل", "كبار السن", "أطفال", "موظفين"], place: ["برّه", "الشغل"], domain: "طوارئ",
    snapshot: { ar: "الفرق بينهم حياة أو موت: إجهاد حراري (عرق غزير، جلد بارد شاحب) بيتحسّن بالتبريد خلال نص ساعة. ضربة شمس (جلد سخن، تشوّش، إغماء) = طوارئ فورية.", en: "" },
    redFlags: ["تشوّش أو كلام مش مفهوم", "جلد سخن وأحمر (ناشف أو رطب)", "إغماء أو قيء متكرّر مع حرارة عالية جدًا"],
    do: [
      "طلّعه من الشمس لمكان بارد أو ظل فورًا، وشيل الهدوم الزيادة.",
      "برّده بسرعة: ميّه باردة على الجلد، وكمّادات أو تلج على الرقبة والإبط والفخذ، مع تهوية أو مروحة.",
      "لو واعي وبيبلع: ادّيله ميّه أو محلول معالجة جفاف بالتدريج.",
      "لو ظهرت علامات ضربة شمس (تشوّش أو إغماء أو جلد سخن): كلّم الإسعاف ١٢٣ فورًا واستمرّ في التبريد لحد ما يوصل.",
      "لو ماتحسّنش خلال ٣٠ دقيقة رغم التبريد — اعتبرها طوارئ."
    ],
    dont: ["ماتديش كحول ولا كافيين", "ماتسيب حد (خصوصًا طفل) في عربية مقفولة أبدًا", "ماتكتفيش بشرب الميّه في ضربة الشمس — التبريد السريع هو العلاج"],
    whenWhy: { ar: "في ضربة الشمس نظام تبريد الجسم بيقع، والحرارة بتأذي المخ والأعضاء خلال دقايق — التبريد السريع (والغمر في ميّه باردة لو ممكن) هو اللي بيقلّل الوفاة.", en: "" },
    how: { ar: "مثال حيّ: عامل في الشمس وقع وبقى مشوّش وجلده سخن. تنقله للظل، تشيل هدومه الزيادة، تصبّ عليه ميّه باردة وتحطّ تلج على رقبته وإبطه، وتكلّم ١٢٣ وتفضل تبرّد.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "«اشتباه ضربة شمس — تشوّش وجلد سخن» + المكان." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "زجاجة ميّه + محلول معالجة جفاف", why: "خصوصًا في الصيف والشغل برّه" }, { item: "كاب وملابس فاتحة وواسعة", why: "وقاية أساسية" }],
    tech: ["فعّل تنبيه موجات الحر من تطبيق الطقس", "Emergency SOS"],
    writeDown: ["أوقات ذروة الحر (من ١٢ لـ ٤) — اتجنّبها", "خطة راحة وشرب كل ٢٠ دقيقة لو بتشتغل برّه"],
    videosCommunities: [{ label: "CDC — Heat-related illnesses", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html" }, { label: "NHS — Heat exhaustion and heatstroke", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/" }],
    othersPOV: { ar: "المصاب بيكون مشوّش ومش مدرك خطورة حالته وممكن يرفض المساعدة — قرّر انت وبرّده.", en: "" },
    say: { toOthers: ["«تعالى في الظل — هبرّدك دلوقتي.»", "«انت — هات ميّه وتلج!»"], toSelf: ["«ظل، تبريد سريع، واتصال لو مشوّش.»"] },
    bodyLanguage: { ar: "حركة سريعة وحاسمة، وجُمل قصيرة — تركيزه ضعيف ومش هيستوعب كلام كتير.", en: "" },
    rights: { ar: "الراحة والمياه والظل في الشغل وقت الحر حق أساسي.", en: "" },
    variations: ["الأطفال وكبار السن بيتأثّروا أسرع — راقبهم.", "تشنّج عضلي من الحر: راحة وتبريد وسوائل بأملاح.", "لو معاك بانيو أو حوض: الغمر في ميّه باردة أسرع طريقة تبريد."],
    prevention: ["اشرب قبل ما تعطش", "اتجنّب الشمس وقت الذروة", "استريح في الظل كل فترة"],
    drill: { ar: "قبل أي يوم حر: جهّز ميّه ومحلول جفاف، واعرف أقرب مكان مكيّف أو ظل في طريقك.", en: "" },
    after: { ar: "بعد ضربة الشمس لازم متابعة طبية — ممكن يكون في تأثير على الكلى والقلب. وماترجعش للشمس بدري.", en: "" },
    sources: [
      { label: "CDC — Heat-related illnesses (first aid)", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html", grade: "A · جهة صحية رسمية" },
      { label: "NHS — Heat exhaustion and heatstroke", url: "https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/", grade: "A" },
      { label: "American Red Cross — Heat Stroke", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/heat-stroke", grade: "A" }
    ]
  },
  {
    id: "fainting",
    title: { ar: "إغماء (فقدان وعي قصير)", en: "Fainting" },
    level: 2, who: ["الكل"], place: ["أي مكان"], domain: "طوارئ",
    snapshot: { ar: "حد وقع فجأة وفاق بسرعة. غالبًا بسيط (نقص دم للمخ لحظيًا) — بس لازم تعرف امتى تقلق.", en: "" },
    redFlags: ["شحوب وعرق بارد وطنين قبل الوقوع", "مافاقش خلال دقيقة أو اتنين، أو اتكرّر", "معاه ألم صدر أو ضيق نفس أو ارتباك"],
    do: [
      "نيّمه على ضهره وارفع رجليه شوية (لو حامل فوق ٢٨ أسبوع: نيّمها على جنبها الشمال).",
      "فكّ أي هدوم ضيّقة، وبعّد الزحمة عشان الهوا يدخل.",
      "راقب تنفّسه ووعيه — لو مافاقش خلال دقيقة أو اتنين، اعتبره فاقد وعي وكلّم الإسعاف.",
      "أول ما يفوق، سيبه مستلقي أو قاعد من ١٠ لـ ٢٠ دقيقة — ماتقوّمهوش بسرعة.",
      "لو الإغماء اتكرّر أو معاه ألم صدر أو ضيق نفس: كلّم الإسعاف."
    ],
    dont: ["ماتقعّدهوش بسرعة — هيقع تاني", "ماترشّش ميّه على وشّه وماتصفعوش", "ماتديهوش أكل ولا شرب وهو مش صاحي تمامًا"],
    whenWhy: { ar: "رفع الرجلين بيرجّع الدم للمخ بسرعة فيفوق. والقيام السريع بيرجّع هبوط الدورة الدموية تاني.", en: "" },
    how: { ar: "مثال حيّ: زميلة وقعت في طابور. تنيّمها على ضهرها، ترفع رجليها على شنطة، تفكّ ياقتها وتبعّد الزحمة، وتفضل معاها لحد ما تفوق وتقعد بالراحة.", en: "" },
    whoToCall: [{ label: "الإسعاف", number: "123", say: "لو مافاقش خلال دقيقتين، أو اتكرّر، أو معاه ألم صدر أو ضيق نفس." }, { label: "الموحّد", number: "112", say: "بديل سريع." }],
    whatToBuy: [{ item: "مفيش أداة — التمدّد ورفع الرجلين ببلاش", why: "المعرفة نفسها هي الأداة" }],
    tech: ["املأ Medical ID بأمراضه وأدويته", "Emergency SOS"],
    writeDown: ["لو بيتكرّر: دوّن إمتى بيحصل وقبله إيه (وقوف طويل، حر، جوع، منظر دم)"],
    videosCommunities: [{ label: "American Red Cross — Fainting", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/fainting" }, { label: "NHS — Fainting", url: "https://www.nhs.uk/symptoms/fainting/" }],
    othersPOV: { ar: "الناس هتتجمّع وتزحم عليه — ده بيقلّل الهوا ويحرجه لما يفوق. بعّدهم بلطف.", en: "" },
    say: { toOthers: ["«ابعدوا شوية وسيبوا هوا — هو كويس.»"], toSelf: ["«أنيّمه وأرفع رجليه، وأستنّى دقيقة.»"] },
    bodyLanguage: { ar: "اركع جنبه، صوتك هادي، وماتهزّهوش ولا تصحّيه بعنف.", en: "" },
    rights: { ar: "مساعدة شخص فقد وعيه تصرّف مسؤول، والاتصال بالإسعاف عند الشك مش مبالغة.", en: "" },
    variations: ["حامل: نيّمها على جنبها الشمال.", "كبير سنّ أو مريض قلب: خُد الإغماء بجدّية أكبر واتصل.", "إغماء أثناء مجهود أو مع ألم صدر: طوارئ فورية."],
    prevention: ["ماتقفش طويل من غير حركة", "اشرب كفاية وماتفوّتش الأكل", "أول ما تحسّ بطنين ودوخة: اقعد أو استلقِ فورًا"],
    drill: { ar: "لو حسّيت بعلامات الإغماء: انزل الأرض بنفسك قبل ما تقع — ده بيمنع إصابة الراس.", en: "" },
    after: { ar: "لو أول مرة أو اتكرّر: اكشف لاستبعاد أسباب قلبية أو أنيميا أو هبوط ضغط.", en: "" },
    sources: [
      { label: "American Red Cross — Fainting", url: "https://www.redcross.org/take-a-class/resources/learn-first-aid/fainting", grade: "A · مرجع إسعاف رسمي" },
      { label: "NHS — Fainting", url: "https://www.nhs.uk/symptoms/fainting/", grade: "A" }
    ]
  }
];
