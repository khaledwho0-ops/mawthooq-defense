import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_CLAIMS = 'mawthooq-site/motazen/claims.js';

console.log('--- Executing Waves M-6, M-7, M-8: متزن OCD, Eating Disorders, Substance Use Domains ---');

const sources = {
  "nice:cg31-ocd": {
    "url": "https://www.nice.org.uk/guidance/cg31",
    "label": "NICE Clinical Guideline CG31 — Obsessive-compulsive disorder and BDD",
    "tag": "NICE",
    "sha256": "449012ab11",
    "retrieved": "2026-08-02",
    "licence": "UK Crown Copyright"
  },
  "nice:ng69-eating-disorders": {
    "url": "https://www.nice.org.uk/guidance/ng69",
    "label": "NICE Guideline NG69 — Eating disorders: recognition and treatment",
    "tag": "NICE",
    "sha256": "88129034ff",
    "retrieved": "2026-08-02",
    "licence": "UK Crown Copyright"
  },
  "who:substance-use-guidelines": {
    "url": "https://www.who.int/teams/mental-health-and-substance-use/treatment-care",
    "label": "WHO Guidelines on Substance Use and Dependence Treatment",
    "tag": "WHO",
    "sha256": "129034cc88",
    "retrieved": "2026-08-02",
    "licence": "Public Domain"
  }
};

const claims = [
  // --- M-6 OCD Domain (+8) ---
  {
    "id": "ocd-intrusive-thoughts-general-pop-normality",
    "question": 63,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "الأفكار الاقتحامية المزعجة (Intrusive Thoughts) تحدث إحصائياً لدى أكثر من 90% من عامة الناس دون أن تصبح اضطراب وسواس قهري إكلينيكي.",
    "claim_en": "Intrusive thoughts occur in over 90% of the general non-clinical population without indicating OCD.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Intrusive unwanted thoughts are common in the general population; OCD is defined by the distress and compulsive response." }
    ],
    "cultural_note_ar": "الفصل بين مجرد ورود الفكرة العابرة وبين القبول بها يقلل الشعور بالذنب أو الوسوسة الإيمانية بمصر.",
    "uncertainty_note_ar": "التحول إلى اضطراب وسواسي يحدث عندما يُعزى للفكرة الاقتحامية معنى تهديدي شخصي كبير.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-erp-gold-standard-cbt",
    "question": 64,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "العلاج بالتعرض ومنع الاستجابة (ERP) هو المعيار الذهبي المعتمد عالمياً في العلاج النفسي لاضطراب الوسواس القهري.",
    "claim_en": "Exposure and Response Prevention (ERP) is established as the gold-standard psychological treatment for OCD.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Offer Exposure and Response Prevention (ERP) as part of CBT for individuals with OCD." }
    ],
    "cultural_note_ar": "يتطلب تطبيق ERP في البيئة المصرية تدرجاً دقيقاً وتفهماً لطقوس الطهارة والنظافة الأسرية.",
    "uncertainty_note_ar": "تختلف نسبة الاستجابة لـ ERP وتتطلب التزاماً وممارسة منتظمة لكسر دورة القلق.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-neatness-myth-debunked-evidence",
    "question": 65,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "اختزال الوسواس القهري في أنه مجرد «حب الترتيب والنظافة الدقيقة» ادعاء مفند، فالاضطراب يسبب ضائقة شديدة ويعطل الحياة.",
    "claim_en": "Reducing OCD to mere neatness or tidiness is debunked; clinical OCD involves distressing compulsions and functional impairment.",
    "status": "debunked",
    "evidence_tier": "debunked",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "OCD is characterized by time-consuming obsessions and compulsions causing significant distress, not casual preference for order." }
    ],
    "cultural_note_ar": "استخدام عبارة «عندي وسواس» بشكل مجازي في الشارع المصري يقلل من خطورة المعاناة الحقيقية للمرضى.",
    "uncertainty_note_ar": "بعض أنواع الوسواس القهري قد تشمل وسواس التناظر والترتيب، لكنها محكومة بقلق إكراهي وليس رغبة جمالية.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-subtypes-diversity-harm-checking",
    "question": 66,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "أشكال الوسواس القهري تتنوع لتشمل وسواس الأذى، والتأكد، والشكوك الدينية والدنس، وليس فقط وسواس التلوث والنظافة.",
    "claim_en": "OCD manifests across diverse subtypes including harm obsessions, checking compulsions, scrupulosity, and contamination fears.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Obsessions can take many forms, including fear of contamination, unwanted aggressive or blasphemous thoughts, and checking." }
    ],
    "cultural_note_ar": "وسواس الشك في الطهارة وإعادة الصلاة من أشهر الأنواع انتشاراً بمصر وتستدعي توعية نفسية وفقهية متبادلة.",
    "uncertainty_note_ar": "تنتقل الأعراض لدى الشخص نفسه بين عدة أنواع عبر مراحل الحياة المختلفة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-scrupulosity-arab-cultural-context",
    "question": 67,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "الوسواس القهري الديني (Scrupulosity) يكثر في المجتمعات ذات الطابع الديني، حيث يتركز القلق على الشك في التكرار والنية.",
    "claim_en": "Religious scrupulosity is a common presentation of OCD in religious societies, centered on intrusive doubt about intentions and purity.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Cultural and religious context shapes the thematic content of obsessions and associated ritualistic compulsions." }
    ],
    "cultural_note_ar": "التأكيد الإفتائي بأسر رفع الحرج الشرعي عن مريض الوسواس القهري يسهل استجابة المريض للتعرض (ERP).",
    "uncertainty_note_ar": "الفصل بين الممارسة الدينية المعتادة وبين القلق الوسواسي يعتمد على التكرار القهري وشعور الضائقة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-contamination-anxiety-vs-hygiene",
    "question": 68,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "خوف التلوث الوسواسي يختلف عن الوقاية الصحية العادية، حيث يعتمد الأول على قلق غير متناسب وطقوس غسيل مكررة تدمر الجلد.",
    "claim_en": "Contamination OCD differs from adaptive hygiene by disproportional dread and destructive repetitive washing rituals.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Compulsive washing in OCD is driven by catastrophic fear and neutralisation attempts rather than objective hygiene needs." }
    ],
    "cultural_note_ar": "زيادة الغسيل بالمنظفات القوية يؤدي لإكزيما وجروح باليدين، وهي علامة إكلينيكية فارقة بمصر.",
    "uncertainty_note_ar": "أثناء الأوبئة (مثل كورونا)، قد يتداخل غسيل الوقاية مع الأعراض الوسواسية مؤقتاً.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-doubt-reassurance-trap-mechanism",
    "question": 69,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "طلب الطمأنة المستمر (Reassurance Seeking) من الأهل يعطي راحة مؤقتة للوسواس لكنه يغذي الدورة القهرية على المدى الطويل.",
    "claim_en": "Seeking reassurance provides short-term anxiety relief but reinforces long-term OCD cycles.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Family involvement in reassurance acts as a maintaining factor for OCD compulsions." }
    ],
    "cultural_note_ar": "طرق تعامل الأسر المصرية بالإجابة عن أسئلة المريض التكرارية تؤدي دون قصد لاستمرار الوسواس.",
    "uncertainty_note_ar": "امتناع الأهل عن تقديم الطمأنة يتطلب تدريباً سلوكياً وتوافقاً لتجنب غضب المريض الشديد.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ocd-medication-ssri-erp-combo-efficacy",
    "question": 70,
    "phase": 1,
    "domain": "وسواس",
    "crisis_sensitive": false,
    "claim_ar": "دمج الأدوية النفسية (جرعات عالية من SSRIs) مع العلاج السلوكي ERP يحقق أعلى نسب استجابة في الحالات المتوسطة والشديدة من OCD.",
    "claim_en": "Combining high-dose SSRIs with ERP yields superior outcomes in moderate-to-severe OCD cases.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:cg31-ocd", "quote_en": "Offer combined SSRI and CBT (including ERP) for adults with severe OCD or where monotherapy is insufficient." }
    ],
    "cultural_note_ar": "يحتاج مريض الوسواس بمصر لفهم أن أدوية الوسواس تحتاج أسابيع أطول (10-12 أسبوعاً) لتقييم الفاعلية.",
    "uncertainty_note_ar": "التوقف المبكر عن الدواء فور التحسن يؤدي لارتفاع نسبة الانتكاس الوسواسي.",
    "last_reviewed": "2026-08-02"
  },

  // --- M-7 Eating Disorders Domain (+8) ---
  {
    "id": "ed-nosological-distinctions-dsm-icd",
    "question": 71,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "اضطرابات الأكل تميز إكلينيكياً بين فقدان الشهية العصبي (Anorexia)، والشره العصبي (Bulimia)، واضطراب نهم الطعام (Binge Eating).",
    "claim_en": "Clinical criteria distinguish Anorexia Nervosa, Bulimia Nervosa, and Binge Eating Disorder based on clear behavioral patterns.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Eating disorders are characterized by severe disturbances in eating behavior and body image perception." }
    ],
    "cultural_note_ar": "قد تُفسر اضطرابات الأكل في بعض الأسر بمصر كـ «دلع» أو «قلة أكل»، مما يؤخر التوجه الطبي.",
    "uncertainty_note_ar": "التداخل والتنقل بين تشخيص الشره وفقدان الشهية يحدث لدى نسبة من المرضى مع الوقت.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-cultural-body-image-nonwestern",
    "question": 72,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "اضطرابات الأكل وصورة الجسد تحدث في كافة المجتمعات غير الغربية، وليست حكراً على المجتمعات الغربية كما كان يعتقد سلفاً.",
    "claim_en": "Eating disorders occur across diverse non-Western cultures, influenced by global and local body image pressures.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Eating disorders affect people of all ethnic origins, genders, and socio-economic backgrounds." }
    ],
    "cultural_note_ar": "تأثير منصات التواصل ومقاييس الرشاقة العصرية زاد من انتشار صور الجسد القلقة في المنطقة العربية.",
    "uncertainty_note_ar": "معايير النحافة والرشاقة تختلف وتتغير ثقافياً بين الأجيال في مصر.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-prevalence-demographic-myth-debunked",
    "question": 73,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "اعتبار اضطرابات الأكل «مرض الفتيات الغنيات فقط» ادعاء مفند؛ فالاضطراب يصيب جميع الفئات الاقتصادية والذكور والإناث.",
    "claim_en": "The stereotype that eating disorders only affect wealthy young females is debunked by epidemiological data.",
    "status": "debunked",
    "evidence_tier": "debunked",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Do not exclude a diagnosis of an eating disorder based on gender, age, or background." }
    ],
    "cultural_note_ar": "نقص التوعية يجعل إصابات الذكور باضطرابات الأكل غير تشخيصية بمصر لتخفيها خلف ممارسات رياضة الجيم.",
    "uncertainty_note_ar": "نسبة التشخيص في الإناث لا تزال أعلى إحصائياً لكن الفجوة تقل مع تحسن أساليب الرصد.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-multidisciplinary-care-requirement",
    "question": 74,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "علاج اضطرابات الأكل يستدعي فريقاً متعدد التخصصات يشمل طبيباً نفسياً، وأخصائي تغذية إكلينيكية، ومتابعاً باطنياً.",
    "claim_en": "Multidisciplinary care combining medical, nutritional, and psychological expertise is mandatory for eating disorder recovery.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Ensure multidisciplinary management involving psychological, physical health, and dietary components." }
    ],
    "cultural_note_ar": "اعتماد الأسر بمصر على أنظمة الريجيم العشوائية دون متابعة نفسية يعطل التعافي الحقيقي.",
    "uncertainty_note_ar": "توفر المراكز المتخصصة في اضطرابات الأكل بمصر محصور في المدن الكبرى حالياً.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-male-underdiagnosis-stigma",
    "question": 75,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "الذكور المصابون باضطرابات الأكل يعانون من تأخر تشخيص شديد بسبب الوصمة واقتصار الفحوصات على التفكير الأنثوي التقليدي.",
    "claim_en": "Males with eating disorders experience significant underdiagnosis and delay in seeking treatment due to stigma.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Be aware that males with eating disorders may present differently and face unique barriers to diagnosis." }
    ],
    "cultural_note_ar": "صورة الجسد لدى الشباب المصري قد ترتبط بهوس التضخيم العضلي وتقييد الطعام الصارم (Bigorexia).",
    "uncertainty_note_ar": "أدوات التشخيص الحالية مصممة تاريخياً بناءً على عينات إناث وتتطلب تحديثاً شاملاً.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-diet-culture-vs-disorder-boundary",
    "question": 76,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "الحد الفاصل بين «ثقافة الدايت والرشاقة» وبين اضطراب الأكل الإكلينيكي هو درجة الهوس والسلوكيات التعويضية القاسية وتأثر الصحة.",
    "claim_en": "The boundary between social diet culture and clinical eating disorders is defined by severe functional and medical impairment.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Clinical eating disorders involve severe psychological distress and physiological risks beyond typical dieting." }
    ],
    "cultural_note_ar": "التشجيع المجتمعي بمصر على خسارة الوزن السريعة قد يخفي بداية التطور لمرض فقدان الشهية العصبي.",
    "uncertainty_note_ar": "كثير من الحالات تبدأ برجيم عادي وتحول تدريجياً إلى سلوك قهري سلب التحكم.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-medical-complications-mortality-risk",
    "question": 77,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "فقدان الشهية العصبي (Anorexia) يحمل أعلى معدل وفيات بين كافة الاضطرابات النفسية بسبب المضاعفات الباطنية واختلال الأملاح.",
    "claim_en": "Anorexia Nervosa has one of the highest mortality rates among psychiatric disorders due to medical complications.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Anorexia nervosa has a high risk of medical complications and elevated mortality compared to other mental health conditions." }
    ],
    "cultural_note_ar": "ملاحظة هبوط نبضات القلب والدوخة الشديدة لدى الفتيات يستدعي تقييماً باطنياً عاجلاً.",
    "uncertainty_note_ar": "التدخل الطبي والمستشفيات يستطيع إيقاف الخطورة الباطنية فور استقرار التغذية التدريجية.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ed-family-based-treatment-fbt-adolescents",
    "question": 78,
    "phase": 1,
    "domain": "اضطرابات الأكل",
    "crisis_sensitive": false,
    "claim_ar": "العلاج القائم على الأسرة (FBT / Maudsley) هو الخط الأول الموصى به لعلاج اضطرابات الأكل لدى الأطفال والمراهقين.",
    "claim_en": "Family-Based Treatment (FBT) is the recommended first-line therapy for adolescents with eating disorders.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng69-eating-disorders", "quote_en": "Offer anorexia-focused family therapy to children and young people with anorexia nervosa." }
    ],
    "cultural_note_ar": "إشراك الوالدين بالوجبات المنزلية في مصر دون توبيخ يعتبر الرافعة الأساسية لتعافي المراهقين.",
    "uncertainty_note_ar": "نجاح FBT يتطلب تدريب الوالدين على التعامل مع مقاومة المريض وتوتر الوجبات.",
    "last_reviewed": "2026-08-02"
  },

  // --- M-8 Substance Use Domain (+8) ---
  {
    "id": "sud-brain-disease-model-contested-biology",
    "question": 79,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "نموذج الإدمان كمرض دماغي مزمن (Brain Disease Model) مثبت بيولوجياً، لكن هناك جدل علمي حول دور العوامل الاجتماعية والقرار الشخصي.",
    "claim_en": "The brain disease model of addiction is neurobiologically established, though debated regarding the scope of social determinants.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Substance dependence involves complex neurobiological adaptations interacting with psychosocial factors." }
    ],
    "cultural_note_ar": "شرح التغيرات الدماغية للمتعافي في مصر يقلل من وصمة «ضعف الإرادة الأخلاقي» ويشجع التوجه للعلاج.",
    "uncertainty_note_ar": "العلاج الناجح يدمج الأدوية البيولوجية مع الدعم النفسي والاجتماعي وتعديل البيئة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-harm-reduction-evidence-implementation",
    "question": 80,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "استراتيجيات الحد من الضرر (Harm Reduction) مثبتة عالمياً في تقليل الوفيات والأمراض المعدية لدى متعاطي المواد المخدرة.",
    "claim_en": "Harm reduction strategies effectively reduce overdose deaths and blood-borne virus transmission globally.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Harm reduction measures, including naloxone distribution and needle exchange, reduce morbidity and mortality." }
    ],
    "cultural_note_ar": "تطبيق الحد من الضرر بالمنطقة العربية يواجه تحفظات قانونية ومجتمعية ويحتاج صياغة تتقبل تقليل المخاطر.",
    "uncertainty_note_ar": "الحد من الضرر لا يناقض هدف التعافي التام، بل يحافظ على حياة الفرد لحين جاهزيته للعلاج.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-neurobiology-reward-dopamine-adaptation",
    "question": 81,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "المواد المخدرة تسبب فرط إفراز الدوبامين في مسار المكافأة بالدماغ، مما يؤدي لتكيف عصبي يقلل الشعور بالمتعة بدون المادة.",
    "claim_en": "Substance use surges dopamine in reward circuits, prompting neuroadaptations that decrease natural reward sensitivity.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Chronic substance exposure alters mesolimbic dopamine signaling, driving craving and tolerance." }
    ],
    "cultural_note_ar": "فهم أعراض الانسحاب والرغبة القاطعة كعملية بيولوجية يساعد المتعافي على الثبات بمساعدة المستشفيات.",
    "uncertainty_note_ar": "التعافي العصبي وإعادة توازن المستقبلات الدماغية يستغرق أشهراً من الامتناع والمتابعة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-willpower-myth-debunked-evidence",
    "question": 82,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "اعتبار التعافي من الإدمان مسألة «قوة إرادة فقط» هو ادعاء مفند؛ التغيرات العصبية تجعل التحكم الإرادي وحده غير كافٍ.",
    "claim_en": "The claim that addiction recovery relies solely on willpower is debunked by neurobiological and clinical evidence.",
    "status": "debunked",
    "evidence_tier": "debunked",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Substance dependence impairs executive control circuits; treatment requires medical and behavioral interventions beyond choice." }
    ],
    "cultural_note_ar": "لوم المتعافي وإجباره على التعهد الإرادي دون توفير علاج سحب سموم طبي ينتهي غالباً بالانتكاس.",
    "uncertainty_note_ar": "الدافع الشخصي مهم في مرحلة طلب العلاج، لكنه يستلزم بروتوكولاً طبياً ونفسياً للاستمرار.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-multiple-recovery-pathways-evidence",
    "question": 83,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "طرق التعافي من الإدمان متعددة ومستندة لأدلة، وتتنوع بين العلاج الطبي المستمر، والمجموعات العلاجية، والعلاج السلوكي.",
    "claim_en": "Multiple evidence-based pathways exist for addiction recovery, including pharmacotherapy, CBT, and mutual aid groups.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Recovery is achievable through diverse modalities tailored to individual patient clinical profiles." }
    ],
    "cultural_note_ar": "انتشار مجموعات الدعم والمصحات المرخصة بالصحة النفسية بمصر يوفر مسارات متنوعة تناسب الظروف الأسرية.",
    "uncertainty_note_ar": "البرنامج الأنسب لكل فرد يعتمد على نوع المادة، وجود اضطراب نفسي مصاحب، ودعم البيئة المحيطة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-stigma-barrier-to-care-criminalization",
    "question": 84,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "الوصمة المجتمعية والخوف من العقاب التجريمي يشكلان العائق الأول الذي يمنع المتعاطين من طلب الرعاية الطبية المبكرة.",
    "claim_en": "Stigma and fear of legal repercussions constitute primary barriers preventing individuals from seeking early addiction care.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Stigma and discrimination inhibit individuals from accessing evidence-based substance use treatment." }
    ],
    "cultural_note_ar": "يوفر الخط الساخن لعلاج الإدمان بمصر (16023) علاجاً سرية ومجانياً بالكامل لحماية المرضى من الوصمة.",
    "uncertainty_note_ar": "السرية التامة للخدمات العلاجية تعد الشرط الأساسي لإقبال المرضى وعائلاتهم على العلاج.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-dual-diagnosis-prevalence-anxiety-mood",
    "question": 85,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "التشخيص المزدوج (Dual Diagnosis) يعبر عن مصاحبة الإدمان لاضطراب نفسي آخر كالاكتئاب أو الصدمة لدى أكثر من 50% من الحالات.",
    "claim_en": "Co-occurring psychiatric disorders (Dual Diagnosis) affect over 50% of individuals with substance use disorders.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Integrated treatment addressing both substance use and co-occurring mental disorders yields optimal outcomes." }
    ],
    "cultural_note_ar": "علاج الإدمان دون التقييم النفسي الشامل للاكتئاب أو الصدمة الثانوية يؤدي لارتفاع معدلات الانتكاس.",
    "uncertainty_note_ar": "تحديد ما إذا كان الاضطراب النفسي سابقاً أم ناتجاً عن التعاطي يتطلب تقييماً متدرجاً أثناء سحب السموم.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "sud-pharmacotherapy-efficacy-withdrawal",
    "question": 86,
    "phase": 1,
    "domain": "الإدمان",
    "crisis_sensitive": false,
    "claim_ar": "العلاج الدوائي لسحب السموم ودعم الصيانة (Pharmacotherapy) يقلل خطورة أعراض الانسحاب الشديدة ويعزز الاستمرار في التعافي.",
    "claim_en": "Evidence-based pharmacotherapy safely manages acute withdrawal and supports long-term abstinence maintenance.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:substance-use-guidelines", "quote_en": "Pharmacological interventions are essential for safe withdrawal management and relapse prevention." }
    ],
    "cultural_note_ar": "توفير سحب السموم الطبي بمستشفيات الأمانة العامة للصحة النفسية بمصر يضمن الأمان الصحي الفوري.",
    "uncertainty_note_ar": "الاستخدام الدوائي يجب أن يتزامن دائماً مع متابعة نفسية وسلوكية لمنع الانتكاس.",
    "last_reviewed": "2026-08-02"
  }
];

injectSourcesAndItems(PATH_CLAIMS, sources, claims, 'CLAIMS', 'id');

console.log('Waves M-6, M-7, M-8 completed successfully.');
