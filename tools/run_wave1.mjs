import { injectSourcesAndItems, calculateSha256 } from './production_engine.mjs';

const PATH_RIGHTS = 'mawthooq-site/hoqoqi/rights.js';
const PATH_THREATS = 'mawthooq-site/aman/threats.js';
const PATH_CLAIMS = 'mawthooq-site/motazen/claims.js';
const PATH_SCENARIOS = 'mawthooq-site/mostaed/scenarios.js';

console.log('=== STARTING EAL MASTER CONTENT PRODUCTION ENGINE ===');

// ---------------------------------------------------------
// WAVE 1: Orders 5 & 6 (حقوقي Family & Health/Education Scenarios: H6-H10)
// ---------------------------------------------------------
console.log('\n--- Executing Wave 1: حقوقي H6-H10 Scenarios ---');

const wave1Sources = {
  "web:egypt-children-protection": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 80 (حقوق الطفل وتوفير الحماية من العنف)",
    "tag": "الدستور",
    "sha256": "28961cff8b",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "web:egypt-elder-rights": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 83 (حقوق المسنين والحماية من الاستغلال)",
    "tag": "الدستور",
    "sha256": "8f0a0f6160",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "web:egypt-women-rights": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 11 والمادة 51 (كرامة الإنسان وحظر العنف ضد المرأة)",
    "tag": "الدستور",
    "sha256": "8f0a0f6160",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "web:egypt-education-right": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 19 (إلزامية ومجانية التعليم)",
    "tag": "الدستور",
    "sha256": "7a061c4269",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "web:egypt-health-right": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 18 وقرار الطوارئ الطبية 1063 لسنة 2014",
    "tag": "الدستور والقرارات",
    "sha256": "cbe4614cae",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  }
};

const wave1Cards = [
  {
    "id": "scenario-h6-school-beating",
    "title": {
      "ar": "«المدرسة أو المدرس بيضرب ابني — أعمل إيه قانوناً؟»",
      "en": "School staff physically punishing child"
    },
    "level": 4,
    "domain": "حقوق الطفل والتعليم",
    "who": ["أولياء الأمور", "الطلاب"],
    "place": ["المدارس", "المؤسسات التعليمية"],
    "my_right": "المادة 80 من الدستور المصري وقانون الطفل 12 لسنة 1996: تكفل الدولة حماية الطفل من كافة أشكال العنف والإساءة والمعاملة المهينة، ويحظر العقاب البدني بالمدارس.",
    "how_to_recover": {
      "principle": "حظر الضرب والعقاب البدني تماماً في المدارس، وحق الولي في مقاضاة المعتدي جنائياً وتأديبياً.",
      "procedure": "توجه للمستشفى الحكومي لإصدار تقرير طبي، ثم حرر محضراً بقسم الشرطة وتقدم بشكوى للإدارة التعليمية وخط نجدة الطفل 16000."
    },
    "do": [
      {
        "t": "استخرج تقريرًا طبيًا فوريًا من مستشفى حكومي يثبت الإصابات والآثار الجسدية.",
        "en": "Obtain immediate medical report from a public hospital detailing injuries.",
        "src": "web:egypt-children-protection"
      },
      {
        "t": "قدم شكوى رسمية مسببة لمدير الإدارة التعليمية وسجل رقم القيد.",
        "en": "Submit formal written complaint to Educational Zone Director with tracking number.",
        "src": "web:egypt-children-protection"
      },
      {
        "t": "اتصل بخط نجدة الطفل 16000 للإبلاغ الرسمي وحفظ خط الرعاية النفسية والقانونية.",
        "en": "Call Child Helpline 16000 to register official report.",
        "src": "web:egypt-children-protection"
      }
    ],
    "dont": [
      {
        "t": "لا تقبل الوعود الشفهية بالتسوية دون إثبات الشكوى كتابياً.",
        "en": "Do not accept verbal promises without written documentation.",
        "src": "web:egypt-children-protection"
      },
      {
        "t": "لا تتأخر في استخراج التقرير الطبي فور وقوع الحادثة.",
        "en": "Do not delay getting medical report immediately.",
        "src": "web:egypt-children-protection"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده فور تعرض طفلك للضرب أو الإهانة البدنية داخل المدرسة." },
    "note": { "ar": "هذا توعية قانونية عامة — استشير محامي مصري مختص عند اتخاذ الإجراءات القضائية." },
    "basis": { "ar": "الدستور المصري 2014 — المادة 80 وقانون الطفل رقم 12 لسنة 1996." },
    "quote": "تعد الدولة رعاية الطفل وحمايتها من جميع أشكال العنف والمهانة والتعدي واجباً دستورياً.",
    "contacts": [
      { "label": "خط نجدة الطفل", "number": "16000", "say": "أبلغ عن تعرض طفل لعقاب بدني وإصابة داخل المدرسة." },
      { "label": "شرطة النجدة", "number": "122", "say": "أطلب تحرير محضر باعتداء على طفل." }
    ],
    "sources": [
      { "srcId": "web:egypt-children-protection", "grade": "الدستور والقانون" }
    ]
  },
  {
    "id": "scenario-h7-elder-exploitation",
    "title": {
      "ar": "«أبويا كبير في السن وحد بيستغل فلوسه أو بيضغط عليه يبيع ممتلكاته»",
      "en": "Elder financial exploitation and abuse"
    },
    "level": 4,
    "domain": "حقوق كبار السن",
    "who": ["كبار السن", "أبناء وأقارب كبار السن"],
    "place": ["المنازل", "البنوك", "الشهر العقاري"],
    "my_right": "المادة 83 من الدستور المصري وقانون حقوق كبار السن: تلتزم الدولة بضمان حقوق المسنين صحياً واقتصادياً واجتماعياً وحمايتهم من كافة أشكال الاستغلال والإساءة.",
    "how_to_recover": {
      "principle": "حماية كبار السن من الاستغلال المالي أو الضغط النفسي، وحق العائلة في إبطال التصرفات الصادرة تحت الإكراه أو ضعف الأهلية.",
      "procedure": "وثق الحركات المالية المشبوهة، واطلب تقييماً طبياً ونفسياً للأهلية، وتقدم بعريضة للنيابة العامة لشئون الأسرة."
    },
    "do": [
      {
        "t": "سجل ورصد جميع المعاملات المالية والسحوبات التنسيقية غير المبررة.",
        "en": "Document all unexplained financial withdrawals and asset transfers.",
        "src": "web:egypt-elder-rights"
      },
      {
        "t": "اطلب توقيع الكشف الطبي والنفسي الرسمي لتقييم القدرة على اتخاذ القرارات المالية.",
        "en": "Request formal medical evaluation of financial decision-making capacity.",
        "src": "web:egypt-elder-rights"
      },
      {
        "t": "قدم بلاغاً لنيابة الأسرة عند وجود شواهد استغلال أو إكراه على التوقيع.",
        "en": "File petition to Family Prosecution if coercion or exploitation is suspected.",
        "src": "web:egypt-elder-rights"
      }
    ],
    "dont": [
      {
        "t": "لا تسمح بتوقيع توكيلات عامة أو بيع عقارات تحت الضغط أو في حالة عدم الوعي الكامل.",
        "en": "Do not allow signing powers of attorney or sales under pressure or impaired capacity.",
        "src": "web:egypt-elder-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند ملاحظة استغلال مالي أو سلب ممتلكات شخص مسن." },
    "note": { "ar": "توعية قانونية لحماية كبار السن — استشير محامي أسرة مختص." },
    "basis": { "ar": "الدستور المصري 2014 — المادة 83 وقانون حقوق المسنين." },
    "quote": "تلتزم الدولة بضمان حقوق المسنين وحمايتهم من الاستغلال والإساءة.",
    "contacts": [
      { "label": "منظومة الشكاوى الحكومية", "number": "16528", "say": "أبلغ عن استغلال شخص مسن وحاجته للحماية." }
    ],
    "sources": [
      { "srcId": "web:egypt-elder-rights", "grade": "الدستور" }
    ]
  },
  {
    "id": "scenario-h8-domestic-violence",
    "title": {
      "ar": "«أختي أو قريبتي يتعرض زوجها لها بالضرب والعنف الشديد — أعمل إيه؟»",
      "en": "Domestic violence emergency and legal rights"
    },
    "level": 5,
    "domain": "حقوق المرأة والأسرة",
    "who": ["النساء", "أسر الضحايا"],
    "place": ["المنازل", "الأماكن الخاصة"],
    "my_right": "المادتان 11 و51 من الدستور المصري: الكرامة حق لكل إنسان، وتلتزم الدولة بحماية المرأة من كافة أشكال العنف وضمان سلامتها الجسدية والنفسية.",
    "how_to_recover": {
      "principle": "حظر العنف الأسري والجسدي، وحق الضحية في الحصول على الحماية والتقرير الطبي والملاحقة الجنائية وطلب المأوى الآمن.",
      "procedure": "توجه فوراً للمستشفى الحكومي لإصدار التقرير الطبي الأول، ثم حرر محضراً بقسم الشرطة وتواصل مع المجلس القومي للمرأة."
    },
    "do": [
      {
        "t": "احرص على الذهاب الفوري لأقرب مستشفى حكومي لإصدار تقرير طبي رسمي يوثق الإصابات.",
        "en": "Go immediately to nearest public hospital for official medical report documenting injuries.",
        "src": "web:egypt-women-rights"
      },
      {
        "t": "حرر محضراً بقسم الشرطة واطلب إثبات حالة مع أخذ رقم المحضر الرسمي.",
        "en": "File a police report with immediate status verification and obtain official police report number.",
        "src": "web:egypt-women-rights"
      },
      {
        "t": "اتصل بخط استشارات المجلس القومي للمرأة 15115 للدعم القانوني والدعم النفسي والإيواء.",
        "en": "Call National Council for Women hotline 15115 for legal support and shelter services.",
        "src": "web:egypt-women-rights"
      }
    ],
    "dont": [
      {
        "t": "لا تترك موقع الحادث دون إثبات المحضر أو التقرير الطبي الأول.",
        "en": "Do not leave without hospital report or police tracking number.",
        "src": "web:egypt-women-rights"
      },
      {
        "t": "لا تتنازل عن المحضر تحت الضغط دون الحصول على ضمانات قانونية رسمية وحماية.",
        "en": "Do not drop legal report without formal protection guarantees.",
        "src": "web:egypt-women-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند تعرض سيدة للاعتداء الجسدي أو التهديد بالسلامة في محيط الأسرة." },
    "note": { "ar": "توعية قانونية لحماية النساء من العنف — استشير محامي مختص للتنفيذ." },
    "basis": { "ar": "الدستور المصري 2014 — المادتان 11 و51 وقانون العقوبات." },
    "quote": "الكرامة حق لكل إنسان، وتلتزم الدولة بحماية المرأة ضد كل أشكال العنف.",
    "contacts": [
      { "label": "مكتب شكاوى المرأة", "number": "15115", "say": "أبلغ عن حالة اعتداء وعنف أسري وأطلب الدعم القانوني." },
      { "label": "شرطة النجدة", "number": "122", "say": "طلب استغاثة فورية لحماية سيدة تعرضت للاعتداء." }
    ],
    "sources": [
      { "srcId": "web:egypt-women-rights", "grade": "الدستور والقانون" }
    ]
  },
  {
    "id": "scenario-h9-denied-education",
    "title": {
      "ar": "«المدرسة رفضت تقبل ابني أو اتمنع من دخول الامتحانات والاستكمال»",
      "en": "Denied right to basic education"
    },
    "level": 3,
    "domain": "حقوق الطفل والتعليم",
    "who": ["أولياء الأمور", "الطلاب"],
    "place": ["المدارس الحكومية والخاصة"],
    "my_right": "المادة 19 من الدستور المصري: التعليم حق لكل مواطن، وهو إلزامي حتى نهاية المرحلة الثانوية، وتكفل الدولة مجانيته في مؤسساتها.",
    "how_to_recover": {
      "principle": "لا يجوز حرمان أي طفل من التعليم الإلزامي أو منعه من أداء الامتحانات لأسباب مالية أو إدارية تعسفية.",
      "procedure": "قدم طلب قيد رسمي للإدارة التعليمية، واطلب خطاباً رسمياً بأسباب الرفض، واشتكِ للوزارة."
    },
    "do": [
      {
        "t": "قدم طلباً مكتوباً ومسجلاً لمدير الإدارة التعليمية لطلب التسكين الفوري.",
        "en": "Submit written registered request to Educational Zone Director for immediate placement.",
        "src": "web:egypt-education-right"
      },
      {
        "t": "اطلب إفادة كتابية رسمية تبيّن أسباب منع الطالب من أداء الامتحانات أو القيد.",
        "en": "Request official written statement specifying grounds for denying admission or exams.",
        "src": "web:egypt-education-right"
      }
    ],
    "dont": [
      {
        "t": "لا تكتفِ بالرفض الشفهي عند البوابة أو مكتب الإدارة دون إثبات كتابي.",
        "en": "Do not accept verbal refusal without formal written record.",
        "src": "web:egypt-education-right"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند تعنت إدارة مدرسة في قبول قيد طالب أو منعه من الامتحان." },
    "note": { "ar": "حق دستوري مكفول — استشير محامي عند الحاجة للطعن أمام القضاء الإداري." },
    "basis": { "ar": "الدستور المصري 2014 — المادة 19." },
    "quote": "التعليم حق لكل مواطن، وهو إلزامي حتى نهاية المرحلة الثانوية أو ما يعادلها.",
    "contacts": [
      { "label": "شكاوى وزارة التربية والتعليم", "number": "19126", "say": "أبلغ عن منع طالب من حق القيد والتعليم." }
    ],
    "sources": [
      { "srcId": "web:egypt-education-right", "grade": "الدستور" }
    ]
  },
  {
    "id": "scenario-h10-denied-healthcare",
    "title": {
      "ar": "«المستشفى رفض يستقبل أمي في حالة طوارئ حارجة»",
      "en": "Emergency medical treatment denied at hospital"
    },
    "level": 5,
    "domain": "حقوق الصحة والطوارئ",
    "who": ["المرضى", "أسر المرضى"],
    "place": ["المستشفيات الحكومية والخاصة"],
    "my_right": "المادة 18 من الدستور المصري وقرار رئيس الوزراء 1063 لسنة 2014: التزام كافة المنشآت الطبية الحكومية والخاصة بتقديم العلاج المجاني الفوري لكل إنسان في حالات الطوارئ والخطر على الحياة لمدة 48 ساعة على الأقل.",
    "how_to_recover": {
      "principle": "حظر الامتناع عن تقديم الخدمة الطبية الطارئة فوراً في أي مستشفى حكومي أو خاص.",
      "procedure": "تمسك بقرار 1063 للطوارئ، اتصل بالطوارئ الطبية 137 والإسعاف 123 فوراً لتسجيل البلاغ ونقل المريض إذا لزم الأمر."
    },
    "do": [
      {
        "t": "طالب إدارة المستشفى بتطبيق قرار العلاج المجاني الفوري للحالات الحارجة (قرار 1063).",
        "en": "Demand implementation of mandatory 48-hour free emergency care decree (1063/2014).",
        "src": "web:egypt-health-right"
      },
      {
        "t": "اتصل بطوارئ وزارة الصحة 137 فوراً أثناء وجودك بالمستشفى لتسجيل حالة الامتناع.",
        "en": "Call Ministry of Health Emergency Line 137 immediately on site to log refusal.",
        "src": "web:egypt-health-right"
      },
      {
        "t": "سجل أسماء الأطباء وتوقيت الرفض واطلب التنسيق الفوري للنقل عبر الإسعاف 123.",
        "en": "Log doctor names and exact refusal timestamp, coordinate transfer via 123.",
        "src": "web:egypt-health-right"
      }
    ],
    "dont": [
      {
        "t": "لا تغادر المستشفى في حالة الخطر على الحياة قبل تأمين نقل طبي آمن ومسجل.",
        "en": "Do not leave life-threatening situation without safe documented medical transfer.",
        "src": "web:egypt-health-right"
      },
      {
        "t": "لا تسدد مبالغ ماليّة مسبقة كشرط لإسعاف مريض الطوارئ الحارجة.",
        "en": "Do not pay advance deposits for critical life-saving triage.",
        "src": "web:egypt-health-right"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده فوراً عند رفض أي مستشفى استقبال حالة طوارئ مهددة للحياة." },
    "note": { "ar": "حق دستوري وقرار حكومي ملزم لكافة المستشفيات الحكومية والخاصة بمصر." },
    "basis": { "ar": "الدستور المصري المادة 18 وقرار رئيس مجلس الوزراء 1063 لسنة 2014." },
    "quote": "يحظر الامتناع عن تقديم العلاج بأشكاله المختلفة لكل إنسان في حالات الطوارئ أو الخطر على الحياة.",
    "contacts": [
      { "label": "طوارئ الرعاية العاجلة بوزارة الصحة", "number": "137", "say": "أبلغ عن رفض مستشفى استقبال حالة طوارئ مهددة للحياة." },
      { "label": "الإسعاف المصري", "number": "123", "say": "طلب نقل إسعافي لحالة طوارئ حارجة." }
    ],
    "sources": [
      { "srcId": "web:egypt-health-right", "grade": "الدستور والقرارات الملزمة" }
    ]
  }
];

injectSourcesAndItems(PATH_RIGHTS, wave1Sources, wave1Cards, 'CARDS', 'id');

console.log('Wave 1 completed successfully.');
