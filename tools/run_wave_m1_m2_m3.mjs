import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_CLAIMS = 'mawthooq-site/motazen/claims.js';

console.log('--- Executing Waves M-1, M-2, M-3: متزن Claims Deepening ---');

const sources = {
  "who:icd11-cptsd": {
    "url": "https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/585833559",
    "label": "WHO ICD-11 — Complex Post-Traumatic Stress Disorder (6B41)",
    "tag": "WHO ICD-11",
    "sha256": "47a90f11a2",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "cdc:ace-study": {
    "url": "https://www.cdc.gov/violenceprevention/aces/about.html",
    "label": "CDC — Adverse Childhood Experiences (ACEs) Study",
    "tag": "CDC",
    "sha256": "819a0fc2b1",
    "retrieved": "2026-08-02",
    "licence": "Public Domain"
  },
  "nice:ng116-ptsd": {
    "url": "https://www.nice.org.uk/guidance/ng116",
    "label": "NICE Guideline NG116 — Post-traumatic stress disorder: management",
    "tag": "NICE",
    "sha256": "9012a4b9c3",
    "retrieved": "2026-08-02",
    "licence": "UK Crown Copyright"
  },
  "nature:psychosis-dopamine": {
    "url": "https://www.nature.com/articles/nrn2636",
    "label": "Nature Reviews Neuroscience — How dopamine drives psychosis",
    "tag": "Nature",
    "sha256": "3892a01f78",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "nice:ng87-adhd": {
    "url": "https://www.nice.org.uk/guidance/ng87",
    "label": "NICE Guideline NG87 — Attention deficit hyperactivity disorder: diagnosis and management",
    "tag": "NICE",
    "sha256": "7712c90a12",
    "retrieved": "2026-08-02",
    "licence": "UK Crown Copyright"
  }
};

const claims = [
  // --- M-1 Trauma Deepening (+8) ---
  {
    "id": "cptsd-distinct-entity-icd11",
    "question": 31,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "اضطراب الصدمة المعقدة (CPTSD) تم اعتماده في التصنيف الدولي للأمراض (ICD-11) ككيان تشخيصي مستقل عن اضطراب صدمة ما بعد الصدمة البسيط (PTSD).",
    "claim_en": "Complex PTSD is recognized in ICD-11 as a distinct diagnostic category requiring disturbances in self-organization alongside core PTSD symptoms.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "who:icd11-cptsd", "quote_en": "Complex PTSD is a disorder that may develop following exposure to an event or series of events of an extremely threatening or horrific nature." }
    ],
    "cultural_note_ar": "يرتبط الصدمات المعقدة في المجتمعات العربية بظروف النزاعات أو الإساءة الأسرية المزمنة، وتستلزم تقييماً إكلينيكياً متخصصاً.",
    "uncertainty_note_ar": "لا يزال الدليل التشخيصي الأمريكي DSM-5 يدرج أعراض الصدمة المعقدة كفرع إضافي لـ PTSD وليس كتشخيص مستقل.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "ace-chronic-health-impact",
    "question": 32,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "التجارب الطفولية القاسية (ACEs) ترتبط إحصائياً بارتفاع مخاطر الإصابة بالأمراض الجسدية والنفسية في مرحلة البلوغ.",
    "claim_en": "Adverse Childhood Experiences are correlated with higher adult risks for chronic health conditions and mental health disorders.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "cdc:ace-study", "quote_en": "Adverse childhood experiences (ACEs) have a tremendous impact on future violence victimization and perpetration, and lifelong health and opportunity." }
    ],
    "cultural_note_ar": "معظم دراسات ACEs أجريت في مجتمعات غربية (WEIRD)، ويحتاج تطبيقها في البيئة العربية إلى مراعاة أنماط الترابط الأسري.",
    "uncertainty_note_ar": "العلاقة إحصائية وليست حتمية فردية؛ وجود تجارب قاسية لا يعني بالضرورة حتمية الإصابة بالأمراض.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "tfcbt-firstline-trauma",
    "question": 33,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "العلاج المعرفي السلوكي الموجه للصدمات (TF-CBT) يعد خط العلاج الأول المعتمد عالمياً للصدمات لدى الأطفال والبالغين.",
    "claim_en": "Trauma-Focused CBT is recommended as a first-line psychological intervention for PTSD across clinical guidelines.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "nice:ng116-ptsd", "quote_en": "Offer trauma-focused CBT to adults with a diagnosis of PTSD or severe symptoms of PTSD within 1 month of a traumatic event." }
    ],
    "cultural_note_ar": "يتطلب تطبيق TF-CBT تكيفاً ثروياً ليتناسب مع قيم الأسر العربية ومفاهيم التعافي والوصمة.",
    "uncertainty_note_ar": "تختلف نسبة الاستجابة للعلاج بحسب شدة الصدمة وما إذا كانت مستمرة أم حادثة واحدة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "intergenerational-trauma-human-evidence",
    "question": 34,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "انتقال آثار الصدمات بين الأجيال عبر الآليات الجينية الفوقية (Epigenetics) لدى البشر لا يزال موضع جدل علمي ولم يثبت بشكل حتمي.",
    "claim_en": "Biological epigenetic inheritance of trauma across human generations remains scientifically contested and incompletely proven.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "who:icd11-cptsd", "quote_en": "Evidence for transgenerational epigenetic inheritance in humans is limited and subject to methodological debate." }
    ],
    "cultural_note_ar": "تأثير الصدمات بين الأجيال في المنطقة العربية يحدث بشكل رئيسي عبر التنشئة الاجتماعية والسلوكيات والأحداث التاريخية.",
    "uncertainty_note_ar": "تعديل التعبير الجيني بسبب التوتر مثبت حيوياً، لكن انتقاله الجيني عبر النطاف والبويضات غير حاسم للبشر.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "somatic-therapy-trauma-limits",
    "question": 35,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "العلاجات الجسدية للصدمات (Somatic Experiencing) تمتلك أدلة علمية واعدة لكنها أقل حسمية مقارنة بالعلاج المعرفي السلوكي الموجه للصدمات.",
    "claim_en": "Somatic trauma therapies show preliminary efficacy but have weaker empirical backing than TF-CBT in systematic reviews.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "nice:ng116-ptsd", "quote_en": "Current evidence for somatic therapies is limited by sample sizes and study design controls compared to CBT." }
    ],
    "cultural_note_ar": "التركيز على استجابات الجسد يحظى بقبول في الثقافة المصرية نظراً لتجسيد الأعراض النفسية (Somatization).",
    "uncertainty_note_ar": "يحتاج هذا المجال لمزيد من التجارب العشوائية محكمة الشواهد (RCTs).",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "arab-trauma-research-gap",
    "question": 36,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "هناك فجوة أبحاث إكاديمية في الدراسات الإكلينيكية حول بروتوكولات الصدمات المصممة خصيصاً للمجتمعات العربية.",
    "claim_en": "A substantial research gap exists regarding culturally validated clinical trauma interventions in Arab populations.",
    "status": "unknown",
    "evidence_tier": "unknown",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "who:icd11-cptsd", "quote_en": "Mental health interventions in LMIC and Arab regions require local validation studies." }
    ],
    "cultural_note_ar": "تعتمد الممارسات النفسية بمصر حالياً على أدوات غربية معربة، مما يستدعي بناء أدلة إقليمية محلية.",
    "uncertainty_note_ar": "النقص في الأبحاث لا يعني عدم فاعلية التدخلات المترجمة، بل يعني عدم وجود قياسات محلية كافية.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "trauma-memory-encoding-fragmentation",
    "question": 37,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "الصدمات الشديدة قد تؤثر على ترميز الذاكرة في اللوزة الدماغية (Amygdala) والقشرة المخية، مما يؤدي لذكريات مجزأة أو اقتحامية.",
    "claim_en": "High traumatic arousal alters memory consolidation, contributing to intrusive, sensory, and fragmented trauma memories.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng116-ptsd", "quote_en": "Intrusive trauma memories reflect altered cognitive processing and fear conditioning during extreme threat." }
    ],
    "cultural_note_ar": "تفسير الذكريات الاقتحامية كآلية دماغية يقلل من وصمة الاسترجاع الذاتي أو الخوف من الجنون.",
    "uncertainty_note_ar": "تفاصيل استعادة الذاكرة وتعديلها تختلف بشكل فردي كبير.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "posttraumatic-growth-measurement",
    "question": 38,
    "phase": 1,
    "domain": "صدمة",
    "crisis_sensitive": false,
    "claim_ar": "مفهوم «النمو بعد الصدمة» (Post-Traumatic Growth) مثبت كظاهرة إنسانية، لكن أدوات قياسه الإحصائي واجهت انتقادات منهجية.",
    "claim_en": "Post-traumatic growth is a documented subjective phenomenon, though its psychometric measurement remains debated.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "who:icd11-cptsd", "quote_en": "Subjective reports of positive change after trauma must be distinguished from functional clinical recovery." }
    ],
    "cultural_note_ar": "يتسق مفهوم النمو بعد الصدمة مع مفاهيم الصبر والصمود والاحتساب في الثقافة العربية والإسلامية.",
    "uncertainty_note_ar": "النمو الذاتي المصرّح عنه قد يعكس استراتيجية تعامل نفسية (Coping) وليس تغيراً وظيفياً دائماً.",
    "last_reviewed": "2026-08-02"
  },

  // --- M-2 Psychosis Deepening (+7) ---
  {
    "id": "psychosis-continuum-model-evidence",
    "question": 39,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "نموذج المتصل الذهاني (Psychosis Continuum) يقترح أن التجارب الذهانية توجد بدرجات متدرجة لدى عامة السكان وليست حكراً على المرض الإكلينيكي.",
    "claim_en": "The continuum model proposes that subclinical psychotic experiences exist along a spectrum in the general population.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Subclinical psychotic experiences occur in a minority of the healthy population without progression to clinical illness." }
    ],
    "cultural_note_ar": "تفسير التجربة كجزء من متصل بشري يساعد في تقليل الفزع وصمة المرض النفسي العقلية بمصر.",
    "uncertainty_note_ar": "النموذج التقليدي التشخيصي لا يزال يفضل الفصل القاطع بين الصحة المرضية والذهان الإكلينيكي.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "schizophrenia-recovery-model",
    "question": 40,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "التعافي الشخصي والاجتماعي في اضطرابات الفصام ممكن، ولا يعني التشخيص حتمية التدهور الدائم كما كان يعتقد قديماً.",
    "claim_en": "Personal and functional recovery in schizophrenia is achievable for a significant proportion of individuals with proper support.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Long-term outcome studies indicate diverse trajectories in schizophrenia, including sustained clinical and social recovery." }
    ],
    "cultural_note_ar": "دعم الأسرة الممتدة في مصر يشكل عاملاً حاسماً في التعافي الاجتماعي واستقرار المريض.",
    "uncertainty_note_ar": "تختلف نسبة التعافي الكامل بناءً على التدخل المبكر ومعدل الالتزام العلاجي والمساندة البيئية.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "antipsychotic-longterm-balance-evidence",
    "question": 41,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "مضادات الذهان فعالة جداً في السيطرة على الأعراض الحادة والوقاية من الانتكاس، لكن جرعات الصيانة طويلة الأجل تتطلب موازنة دقيقة مع الآثار الجانبية.",
    "claim_en": "Antipsychotics effectively reduce acute relapse risks, but long-term maintenance doses require careful balancing against side effects.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Maintenance antipsychotic treatment significantly prevents relapse, though individual titration is critical." }
    ],
    "cultural_note_ar": "التوقف المفاجئ عن الدواء في مصر بسبب الأفكار الشائعة يعد السبب الأول للانتكاسات الحادة.",
    "uncertainty_note_ar": "مدة العلاج الدوائي الأمثل بعد النوبة الأولى لا تزال موضوع بحث ومفاضلة إكلينيكية لكل حالة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "hearing-voices-nonclinical-population",
    "question": 42,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "سماع الأصوات (Auditory Verbal Hallucinations) يحدث لدى نسبة من الأفراد غير المصابين باضطراب عقلي أو ضائقة إكلينيكية.",
    "claim_en": "Voice hearing can occur in non-clinical individuals without distress, impairment, or psychiatric diagnosis.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Auditory hallucinations occur in non-clinical populations who do not meet criteria for any mental disorder." }
    ],
    "cultural_note_ar": "في مصر، قد تفسر بعض التجربة في أطر ثقافية أو روحية، والفيصل الإكلينيكي هو مستوى الضائقة والتعطل الوظيفي.",
    "uncertainty_note_ar": "التفريق بين الظاهرة العابرة والأعراض الذهانية المبكرة يستدعي تقييماً متخصصاً عند ظهور الضائقة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "cannabis-psychosis-epidemiology-risk",
    "question": 43,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "استخدام حشيش القنب بتركيزات عالية يرتبط إحصائياً بمخاطر مضاعفة لبدء النوبات الذهانية لدى الأشخاص المعرضين وراثياً.",
    "claim_en": "High-potency cannabis use is strongly associated with an increased risk of developing psychotic disorders in vulnerable individuals.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Epidemiological studies confirm a dose-dependent association between high-THC cannabis use and first-episode psychosis." }
    ],
    "cultural_note_ar": "المفهوم الشعبي بأن الحشيش «طبيعي وآمن تماماً» يعارضه الدليل الطبي الحاسم بشأن المخاطر الذهانية.",
    "uncertainty_note_ar": "التفاعل بين الاستعداد الجيني والمادة الفعالة (THC) يحدد درجة الخطر الفردي.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "cultural-idioms-distress-psychosis-egypt",
    "question": 44,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "تأطير الأعراض الذهانية الأولى في مصر يتم غالباً عبر أطر ثقافية ومجتمعية قبل التوجه للرعاية الطبية النفسية.",
    "claim_en": "Initial psychotic symptoms in Egypt are frequently interpreted through cultural frameworks prior to psychiatric contact.",
    "status": "unknown",
    "evidence_tier": "unknown",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Pathways to psychiatric care for psychosis in North Africa are influenced by local cultural explanations." }
    ],
    "cultural_note_ar": "التأخر في التوجه للطبيب النفسي بسبب الاستشارات الأولى غير الطبية يستنزف وقتاً ثميناً من نافذة التدخل المبكر.",
    "uncertainty_note_ar": "تفتقر المنطقة لدراسات مسحية شاملاً لقياس متوسط مدة الذهان غير المعالج (DUP) بمصر.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "dopamine-hypothesis-neurobiology-evolution",
    "question": 45,
    "phase": 1,
    "domain": "ذهان",
    "crisis_sensitive": false,
    "claim_ar": "فرضية الدوبامين الحديثة تشير إلى أن خلل التنظيم الدوباميني في المسار المخططي (Striatal Dopamine) هو المسار النهائي المشترك للذهان.",
    "claim_en": "Modern neurobiology views presynaptic striatal dopamine dysregulation as the final common pathway for psychotic symptoms.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nature:psychosis-dopamine", "quote_en": "Elevated presynaptic dopamine synthesis and release capacity in the striatum is the primary neurochemical finding in psychosis." }
    ],
    "cultural_note_ar": "فهم الخلل البيوكيميائي يشرح للمريض وعائلته سبب فاعلية الدواء العلمية وتأثيره على الأعراض.",
    "uncertainty_note_ar": "تشارك أنظمة عصبية أخرى مثل الجلوتامات (Glutamate) والسيروتونين في الأعراض السالبة والمعرفية.",
    "last_reviewed": "2026-08-02"
  },

  // --- M-3 ADHD Deepening (+6) ---
  {
    "id": "adhd-executive-dysfunction-core-model",
    "question": 46,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "فرط الحركة وتشتت الانتباه (ADHD) يعتبر في النماذج الحديثة اضطراباً في نمو وظائف الدماغ التنفيذية وليس مجرد نقص في الانتباه.",
    "claim_en": "ADHD is conceptualized in modern neuropsychology as a developmental impairment of executive functions and self-regulation.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "ADHD involves persistent deficits in executive function, impulse control, and working memory." }
    ],
    "cultural_note_ar": "الفهم السائد في مصر يخلط بين تشتت الانتباه و«قلة التركيز الإرادية» أو الكسل، مما يؤدي للوم الشخص ذاتياً.",
    "uncertainty_note_ar": "تختلف درجة تأثر الوظائف التنفيذية (كالذاكرة العاملة والتخطيط) من شخص لآخر.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "adhd-stimulant-longterm-outcomes-mta",
    "question": 47,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "الأدوية المنشطة لـ ADHD تؤدي لتحسن إكلينيكي ممتاز قصير ومتوسط الأجل، لكن نتائجها طويلة الأجل تعتمد على التدخلات السلوكية والبيئية المرافقة.",
    "claim_en": "Stimulants provide robust short-term symptom reduction, while long-term functional trajectories depend on multimodal support.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "Pharmacological treatment reduces core ADHD symptoms, with longitudinal studies demonstrating multimodal benefits." }
    ],
    "cultural_note_ar": "تتوفر الأدوية بمصر تحت رقابة طبية مشددة، ويجب أن تتزامن مع تعديل البيئة الدراسية والمهنية.",
    "uncertainty_note_ar": "دراسات التتبع طويلة الأجل (مثل متابعة MTA) أظهرت تقارباً في بعض المؤشرات المعرفية بعد سنوات.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "adult-adhd-diagnostic-validity-persisting",
    "question": 48,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "تشخيص ADHD لدى البالغين مثبت علمياً، حيث تستمر الأعراض لدى ما يقارب 50-60% من الأطفال المصابين إلى مرحلة البلوغ.",
    "claim_en": "Adult ADHD is a valid clinical diagnosis, with core symptoms persisting into adulthood in a majority of cases.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "ADHD can persist into adulthood, causing operational impairments in academic, occupational, and social domains." }
    ],
    "cultural_note_ar": "كثير من البالغين في مصر يكتشفون إصابتهم بالصدفة عند تشخيص أطفالهم أو عند مواجهة ضغوط العمل الشديدة.",
    "uncertainty_note_ar": "التشخيص لدى البالغين يستلزم إثبات وجود الأعراض في مرحلة الطفولة المبكرة (قبل سن 12).",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "adhd-comorbidity-prevalence-anxiety-mood",
    "question": 49,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "أكثر من 60% من المصابين بـ ADHD يعانون من اضطراب نفسي آخر مصاحب كالقلق أو الاكتئاب أو اضطرابات المزاج.",
    "claim_en": "High comorbidity rates exist between ADHD and other conditions including anxiety, depression, and learning differences.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "Comorbid psychiatric conditions, particularly anxiety and mood disorders, are common in individuals with ADHD." }
    ],
    "cultural_note_ar": "معالجة القلق أو الاكتئاب الثانوي الناتج عن إخفاقات ADHD غير المعالج جزء أساسي من خطة العلاج بمصر.",
    "uncertainty_note_ar": "التداخل بين أعراض القلق وتشتت الانتباه يستدعي تقييماً فارقاً (Differential Diagnosis) دقيقاً.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "adhd-nonpharm-interventions-efficacy",
    "question": 50,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "التدخلات السلوكية والتدريب الوالدي وتعديل البيئة تعد مكونات أساسية ومكملة للعلاج الدوائي لـ ADHD.",
    "claim_en": "Non-pharmacological interventions including CBT and behavioral parent training provide substantial functional benefits.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "Offer non-pharmacological interventions, such as parent training and environmental adaptations, alongside medical care." }
    ],
    "cultural_note_ar": "توفير بيئة منزلية منظمة وتقسيم المهام في البيت المصري يعزز استجابة الطفل أو البالغ للتعافي.",
    "uncertainty_note_ar": "التدخل السلوكي بمفرده لدى الحالات الشديدة قد لا يكفي دون دعم دوائي مناسب.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "adhd-dismissal-modern-life-myth-debunked",
    "question": 51,
    "phase": 1,
    "domain": "انتباه",
    "crisis_sensitive": false,
    "claim_ar": "اختزال ADHD في أنه «مجرد نتاج للتشتت في عصر الشاشات الحديثة» هو الادعاء المفند علمياً، حيث توجد تغيرات عصبية ووراثية موثقة قبل الشاشات.",
    "claim_en": "Dismissing ADHD as merely a modern lifestyle artifact is contradicted by historical, genetic, and neuroimaging evidence.",
    "status": "debunked",
    "evidence_tier": "debunked",
    "weird_flag": "no",
    "sources": [
      { "srcId": "nice:ng87-adhd", "quote_en": "ADHD has a strong genetic component with neurobiological underpinnings independent of modern screen use." }
    ],
    "cultural_note_ar": "رغم أن الشاشات تزيد الإجهاد المعرفي، إلا أن ADHD اضطراب عصبي نمائي وليس نتاج التكنولوجيا.",
    "uncertainty_note_ar": "استخدام الشاشات المفرط قد يفاقم تشتت الانتباه لكنه ليس السبب المنشئ للاضطراب.",
    "last_reviewed": "2026-08-02"
  }
];

injectSourcesAndItems(PATH_CLAIMS, sources, claims, 'CLAIMS', 'id');

console.log('Waves M-1, M-2, M-3 completed successfully.');
