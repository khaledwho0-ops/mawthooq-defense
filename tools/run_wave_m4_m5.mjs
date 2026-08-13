import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_CLAIMS = 'mawthooq-site/motazen/claims.js';

console.log('--- Executing Waves M-4 & M-5: متزن Exercises & Navigation Deepening ---');

const sources = {
  "who:mhgap-v2": {
    "url": "https://www.who.int/publications/i/item/9789241549790",
    "label": "WHO mhGAP Intervention Guide — Version 2.0",
    "tag": "WHO mhGAP",
    "sha256": "901284cc11",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "cochrane:cbt-anxiety": {
    "url": "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD004690.pub2/full",
    "label": "Cochrane Database of Systematic Reviews — CBT for anxiety disorders",
    "tag": "Cochrane",
    "sha256": "449012ab99",
    "retrieved": "2026-08-02",
    "licence": "Cochrane Library"
  },
  "who:mental-health-atlas": {
    "url": "https://www.who.int/publications/i/item/9789240036703",
    "label": "WHO Mental Health Atlas 2020",
    "tag": "WHO",
    "sha256": "129034ff88",
    "retrieved": "2026-08-02",
    "licence": "Public Domain"
  }
};

const claims = [
  // --- M-4 Phase 2 Exercises Deepening (+5) ---
  {
    "id": "sleep-hygiene-cbti-spine-evidence",
    "question": 52,
    "phase": 2,
    "domain": "مهارات",
    "crisis_sensitive": false,
    "claim_ar": "قواعد نظافة النوم (Sleep Hygiene) تعد جزيئية مكملة ضمن بروتوكول العلاج السلوكي المعرفي للأرق (CBT-I)، وليست علاجاً كافياً بمفردها للأرق المزمن.",
    "claim_en": "Sleep hygiene is an essential component of CBT-I, though insufficient as a standalone treatment for chronic insomnia.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "cochrane:cbt-anxiety", "quote_en": "Sleep hygiene education forms part of multicomponent CBT-I interventions for sleep initiation and maintenance." }
    ],
    "cultural_note_ar": "تعديل المواعيد والضوضاء في البيئة المصرية من أهم تحديات تطبيق نظافة النوم عملياً.",
    "uncertainty_note_ar": "الأرق المزمن المستمر لأكثر من 3 أشهر يستلزم تقييماً سلوكياً شاملاً وليس مجرد نصائح عامة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "cognitive-restructuring-selfhelp-limits",
    "question": 53,
    "phase": 2,
    "domain": "مهارات",
    "crisis_sensitive": false,
    "claim_ar": "إعادة الهيكلة المعرفية الذاتية تفيد في خفض القلق الخفيف إلى المتوسط، بينما تتطلب الحالات الشديدة ممارسة موجهة مع معالج متخصص.",
    "claim_en": "Self-guided cognitive restructuring helps manage mild-to-moderate anxiety, whereas severe presentations require therapist-guided delivery.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mhgap-v2", "quote_en": "Cognitive reframing techniques can be taught for self-management of mild emotional distress." }
    ],
    "cultural_note_ar": "التحقق من الأفكار التلقائية يتطلب صياغة تتماشى مع طريقة التفكير واللغة اليومية بمصر.",
    "uncertainty_note_ar": "تغيير الفكر دون تغيير الظروف البيئية الضائقة قد يكون محددو الأثر في بعض السياقات.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "pmr-relaxation-physiological-arousal",
    "question": 54,
    "phase": 2,
    "domain": "مهارات",
    "crisis_sensitive": false,
    "claim_ar": "تمرين الاسترخاء العضلي التصاعدي (PMR) يقلل النشاط الجملوني (Sympathetic Arousal) ويهدئ أعراض التوتر الجسدية المباشرة.",
    "claim_en": "Progressive Muscle Relaxation reduces sympathetic nervous system arousal and somatic anxiety manifestations.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "cochrane:cbt-anxiety", "quote_en": "Relaxation training significantly reduces somatic anxiety symptoms and physiological hyperarousal." }
    ],
    "cultural_note_ar": "ممارسة PMR في مكان هادئ لمدة 10 دقائق يسهل دمجها في الروتين اليومي بالمنازل المصرية.",
    "uncertainty_note_ar": "الاسترخاء العضلي يهدئ الأعراض الجسدية لكنه لا يحل المشكلات المنشئة للتوتر.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "structured-problemsolving-who-mhgap",
    "question": 55,
    "phase": 2,
    "domain": "مهارات",
    "crisis_sensitive": false,
    "claim_ar": "أسلوب حل المشكلات المنهجي (Structured Problem Solving) مهارة مدمجة وموصى بها في دليل منظمة الصحة العالمية لتقليل العجز النفسي.",
    "claim_en": "Structured problem-solving protocol is a key evidence-based intervention in WHO mhGAP guidelines.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mhgap-v2", "quote_en": "Problem-solving counseling helps individuals break down complex stressors into actionable, manageable steps." }
    ],
    "cultural_note_ar": "تقسيم المشكلة الكبيرة لخطوات صغيرة قابلة للتنفيذ يقلل الشعور بالشلل والإنهاك النفسي.",
    "uncertainty_note_ar": "فاعلية حل المشكلات تنخفض عند مواجهة ضغوطات خارجية غير قابلة للتغيير الفردي.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "mindfulness-publication-bias-scrutiny",
    "question": 56,
    "phase": 2,
    "domain": "مهارات",
    "crisis_sensitive": false,
    "claim_ar": "تدريبات اليقظة الذهنية (Mindfulness) أثبتت فاعلية حقيقية، لكن حجم تأثيرها عانى في بعض الأبحاث من انحياز النشر (Publication Bias).",
    "claim_en": "Mindfulness-based interventions demonstrate efficacy, though effect sizes in early studies were inflated by publication bias.",
    "status": "contested",
    "evidence_tier": "contested",
    "weird_flag": "yes",
    "sources": [
      { "srcId": "cochrane:cbt-anxiety", "quote_en": "Mindfulness shows clinical utility, but active-control trials demonstrate comparable rather than superior efficacy to established treatments." }
    ],
    "cultural_note_ar": "تكييف تمارين الحضور الذهني مع التبصُر والسكينة الثقافية يعزز تقبلها في المجتمع المصري.",
    "uncertainty_note_ar": "اليقظة الذهنية ليست مناسبة للجميع؛ قد تزيد القلق لدى بعض حالات الصدمات دون توجيه متخصص.",
    "last_reviewed": "2026-08-02"
  },

  // --- M-5 Phase 3 Navigation Deepening (+6) ---
  {
    "id": "mental-health-gap-egypt-lmic",
    "question": 57,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "فجوة العلاج النفسي (Treatment Gap) تبلغ أكثر من 75% في الدول متوسطة ومُنخفضة الدخل، مما يعني أن معظم من يحتاجون الرعاية لا يتلقونها.",
    "claim_en": "The mental health treatment gap exceeds 75% in low- and middle-income countries due to resource constraints.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mental-health-atlas", "quote_en": "In low and middle-income countries, between 76% and 85% of people with mental disorders receive no treatment." }
    ],
    "cultural_note_ar": "مبادرات الصحة النفسية الحكومية والخطوط الساخنة بمصر تسعى لتقليص هذه الفجوة تدريجياً.",
    "uncertainty_note_ar": "تختلف الفجوة بشكل حاد بين المدن الكبرى والمناطق الريفية والمحافظات الحدوديّة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "psychiatrist-ratio-arab-region",
    "question": 58,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "معدل الأطباء النفسيين والمعالجين بالنسبة للسكان في إقليم شرق المتوسط يعاني من نقص مقارنة بالمعدلات العالمية الموصى بها.",
    "claim_en": "The workforce density of psychiatrists and psychologists per capita in the EMRO region falls below global WHO benchmarks.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mental-health-atlas", "quote_en": "The global median rate of mental health workers is 13 per 100,000 population, with significant regional disparities." }
    ],
    "cultural_note_ar": "يؤدي النقص لقوائم انتظار طويلة بالمستشفيات الحكومية أو الارتفاع النسبي لكلفة العيادات الخاصة.",
    "uncertainty_note_ar": "توسيع تدريب الأطباء الممارسين العموميين عبر برنامج mhGAP يساهم في سد جزء من هذا النقص.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "evidence-based-modalities-avail-egypt",
    "question": 59,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "العلاج المعرفي السلوكي (CBT) والدوائي هما الأكثر توفراً في مصر، بينما تتطلب العلاجات المتخصصة الأخرى بحثاً عن مراكز متخصصة.",
    "claim_en": "CBT and pharmacotherapy are the most widely available evidence-based modalities in Egyptian clinical settings.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "partial",
    "sources": [
      { "srcId": "who:mhgap-v2", "quote_en": "Pharmacotherapy and brief psychological interventions represent the core available clinical modalities in resource-constrained settings." }
    ],
    "cultural_note_ar": "تتوفر مستشفيات الأمانة العامة للصحة النفسية في معظم المحافظات كخدمة أساسية منخفضة التكلفة.",
    "uncertainty_note_ar": "جودة وتوفر العلاجات النفسية غير الدوائية تختلف حسب مؤهلات المعالج والمركز.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "financial-barriers-psychiatric-care",
    "question": 60,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "التكلفة المالية والاستقطاع المباشر من الجيب يشكل العائق المادي الأول أمام استمرارية العلاج النفسي طويل الأمد.",
    "claim_en": "Out-of-pocket expenditure constitutes a major financial barrier to sustained mental health service utilization.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mental-health-atlas", "quote_en": "Lack of financial protection for mental health care leads to high out-of-pocket costs and discontinuation." }
    ],
    "cultural_note_ar": "دمج الصحة النفسية في منظومة التأمين الصحي الشامل بمصر يستهدف إلغاء هذا العائق تدريجياً.",
    "uncertainty_note_ar": "تختلف أسعار الجلسات في القطاع الخاص بشكل واسع دون سقف محدد قانونياً.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "stigma-structural-barrier-help-seeking",
    "question": 61,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "الوصمة المجتمعية الذاتية والهيكلية تشكل العائق غير المادي الأول الذي يؤخر طلب الاستشارة النفسية المبكرة.",
    "claim_en": "Public and internalized stigma represents a primary non-financial structural barrier delaying mental health help-seeking.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mental-health-atlas", "quote_en": "Stigma and discrimination continue to deter individuals from seeking timely mental health support." }
    ],
    "cultural_note_ar": "التوعية الطبية النفسية باللغة المصرية اليومية تسهم مباشرة في تفكيك الوصمة وتطبيع طلب الرعاية.",
    "uncertainty_note_ar": "تراجع الوصمة لوحظ بشكل ملحوظ لدى الفئات الشبابية والجامعية خلال السنوات الأخيرة.",
    "last_reviewed": "2026-08-02"
  },
  {
    "id": "therapist-credential-evaluation-ethics",
    "question": 62,
    "phase": 3,
    "domain": "تنقّل",
    "crisis_sensitive": false,
    "claim_ar": "التحقق من ترخيص المعالج النفسي من وزارة الصحة نقابة الأطباء/المعالجين حق أساسي للمريض للوقاية من الممارسين غير المؤهلين.",
    "claim_en": "Verifying professional licensure and ethical qualifications is a fundamental patient right to guard against unaccredited practitioners.",
    "status": "established",
    "evidence_tier": "established",
    "weird_flag": "no",
    "sources": [
      { "srcId": "who:mhgap-v2", "quote_en": "Patients should be informed of practitioner credentials, scope of practice, and ethical boundaries." }
    ],
    "cultural_note_ar": "يحظر القانون المصري ممارسة العلاج النفسي دون ترخيص رسمي صادرة من وزارة الصحة ورابطة الاخصائيين النفسيين/الأطباء.",
    "uncertainty_note_ar": "انتشار لقب «لايف كوتش» أو «استشاري علاقات» دون ترخيص طبي يطلب حذراً وتدقيقاً من متلقي الخدمة.",
    "last_reviewed": "2026-08-02"
  }
];

injectSourcesAndItems(PATH_CLAIMS, sources, claims, 'CLAIMS', 'id');

console.log('Waves M-4 & M-5 completed successfully.');
