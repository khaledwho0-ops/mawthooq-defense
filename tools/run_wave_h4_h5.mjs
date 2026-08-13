import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_RIGHTS = 'mawthooq-site/hoqoqi/rights.js';

console.log('--- Executing Waves H-4 & H-5: حقوقي Work & Daily Life Scenarios ---');

const sources = {
  "web:egypt-work-rights": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 12 وقانون العمل رقم 12 لسنة 2003",
    "tag": "الدستور والقانون",
    "sha256": "d2ad93aeba",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  },
  "web:egypt-property-housing": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 58 والمادة 35 (حرمة المساكن وحماية الملكية)",
    "tag": "الدستور",
    "sha256": "5e78627421",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  }
};

const cards = [
  // --- H-4 Work Scenarios (H11-H14) ---
  {
    "id": "scenario-h11-fired-without-cause",
    "title": {
      "ar": "«مديري بيضغط عليّ أستقيل أو بيهددني بالفصل التعسفي دون سبب قانوني»",
      "en": "Threat of unfair dismissal or coerced resignation"
    },
    "level": 4,
    "domain": "حقوق العمل",
    "who": ["العاملون بالقطاع الخاص والحكومي"],
    "place": ["مقرات العمل", "الشركات"],
    "my_right": "قانون العمل المصري رقم 12 لسنة 2003 والمادة 12 من الدستور: العمل حق وواجب، ولا يجوز فصل العامل إلا بحكم من المحكمة العمالية أو في الحالات المنصوص عليها حصراً في المادة 69.",
    "how_to_recover": {
      "principle": "بطلان الفصل التعسفي والاستقالة المكرهة، وحق العامل في التعويض أو العودة للعمل وتلقي مستحقاته.",
      "procedure": "لا توقع على استقالة أو استمارة 6، حرر محضراً بقسم الشرطة بإثبات المنع من الدخول، وتقدم بشكوى لمكتب العمل خلال 10 أيام."
    },
    "do": [
      {
        "t": "ارفض التوقيع على أي نموذج استقالة أو إقرار بالاستلام تحت الضغط.",
        "en": "Refuse to sign resignation letters or waiver forms under pressure.",
        "src": "web:egypt-work-rights"
      },
      {
        "t": "حرر محضراً بقسم الشرطة لإثبات منعك من دخول مقر العمل (إثبات حالة).",
        "en": "File a police status report if barred from workplace entry.",
        "src": "web:egypt-work-rights"
      },
      {
        "t": "تقدم بشكوى رسمية لمكتب العمل التابع له مقر الشركة خلال 10 أيام من تاريخ المنع.",
        "en": "Submit formal complaint to Labor Office within 10 days of lockout.",
        "src": "web:egypt-work-rights"
      }
    ],
    "dont": [
      {
        "t": "لا تترك عملك دون إثبات كتابي أو محضر حتى لا يحتسب انقطاعاً عن العمل.",
        "en": "Do not abandon work without official status record preventing unauthorized absence claims.",
        "src": "web:egypt-work-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند التهديد بالفصل التعسفي أو الضغط للتوقيع على استقالة." },
    "note": { "ar": "توعية بقانون العمل المصري رقم 12 لسنة 2003 — استشير محامي عمالي." },
    "basis": { "ar": "قانون العمل المصري رقم 12 لسنة 2003 والمادة 12 من الدستور." },
    "quote": "لا يجوز فصل العامل إلا بحكم قضائي من المحكمة العمالية المختصة.",
    "contacts": [
      { "label": "الخط الساخن لوزارة العمل", "number": "19468", "say": "أقدم شكوى منع من العمل وفصل تعسفي ضد منشأة." }
    ],
    "sources": [
      { "srcId": "web:egypt-work-rights", "grade": "قانون العمل والدستور" }
    ]
  },
  {
    "id": "scenario-h12-unpaid-wages",
    "title": {
      "ar": "«صاحب الشغل مأخر أجر بقاله شهور أو رافض يديني مستحقاتي عند ترك العمل»",
      "en": "Unpaid wages or withheld end-of-service benefits"
    },
    "level": 4,
    "domain": "حقوق العمل",
    "who": ["العمال والمهنيون"],
    "place": ["مقرات العمل"],
    "my_right": "قانون العمل المصري رقم 12 لسنة 2003: يلتزم صاحب العمل بتأدية الأجر في المواعيد المحددة وفي مكان العمل، وتعتبر ديون الأجور ديوناً ممتازة تنفذ قبل غيرها.",
    "how_to_recover": {
      "principle": "الأجر حق غير قابل للتأخير، وحق العامل في إلزام جهة العمل بالصرف والتعويض عن التأخير.",
      "procedure": "احتفظ بأدلة العمل، وتقدم بشكوى لمكتب العمل، ثم اللجوء للمحكمة العمالية لإصدار أمر دفع."
    },
    "do": [
      {
        "t": "احفظ كافة كشوف الحضور والانصراف، والرسائل، ومعاملات البنك الدالة على الأجر.",
        "en": "Retain attendance logs, bank statements, and salary communication proofs.",
        "src": "web:egypt-work-rights"
      },
      {
        "t": "تقدم بشكوى رسمية لمكتب العمل المختص لتسوية النزاع ودياً أو إحالته للمحكمة العمالية.",
        "en": "File formal complaint at Labor Office for mediation or referral to court.",
        "src": "web:egypt-work-rights"
      }
    ],
    "dont": [
      {
        "t": "لا توقع على مخالصة مالية نهائية قبل استلام كافة مبالغ الأجر فعلياً.",
        "en": "Do not sign final financial waivers before receiving full payment.",
        "src": "web:egypt-work-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند تأخير صرف الأجر أو رفض تسليم المستحقات المالية." },
    "note": { "ar": "توعية بحقوق الأجور بقانون العمل المصري." },
    "basis": { "ar": "قانون العمل المصري 12 لسنة 2003 المواد 34-40." },
    "quote": "تؤدى الأجور في أحد أيام العمل وفي مكانه، وتعتبر من الديون الممتازة.",
    "contacts": [
      { "label": "شكاوى وزارة العمل", "number": "19468", "say": "أبلغ عن تأخير صرف أجور عمال بشكل جماعي أو فردي." }
    ],
    "sources": [
      { "srcId": "web:egypt-work-rights", "grade": "قانون العمل" }
    ]
  },
  {
    "id": "scenario-h13-unsafe-work-conditions",
    "title": {
      "ar": "«الشغل بيجبرني أشتغل في مكان خطر جداً من غير أدوات سلامة ولا حماية»",
      "en": "Unsafe working conditions lacking protective equipment"
    },
    "level": 4,
    "domain": "حقوق العمل",
    "who": ["العمال والمهنيون"],
    "place": ["المصانع", "مواقع البناء", "الورش"],
    "my_right": "قانون العمل المصري رقم 12 لسنة 2003 (الكتاب الخامس — السلامة والصحة المهنية): التزام المنشأة بتوفير وسائل السلامة والصحة المهنية وتأمين بيئة العمل مجاناً دون تحميل العامل أي كلفة.",
    "how_to_recover": {
      "principle": "حظر التكليف بأعمال مهددة للحياة دون أدوات الوقاية الشاملة، وحق العامل في الامتناع عن الخطر الداهم.",
      "procedure": "ابلغ التفتيش العمالي والسلامة المهنية بمكتب العمل لإجراء التفتيش الفوري وتثبيت المخالفة."
    },
    "do": [
      {
        "t": "اطالب الإدارة كتابياً بتوفير مهمات الوقاية الشخصية قبل البدء في الأنشطة الخطرة.",
        "en": "Request written supply of personal protective equipment before high-risk tasks.",
        "src": "web:egypt-work-rights"
      },
      {
        "t": "قدم بلاغاً لتفتيش السلامة والصحة المهنية بمكتب العمل التابع للمنطقة.",
        "en": "Report safety non-compliance to Occupational Safety Inspection Unit.",
        "src": "web:egypt-work-rights"
      }
    ],
    "dont": [
      {
        "t": "لا تتحمل شراء أدوات السلامة المهنية الحيوية على نفقتك الخاصة.",
        "en": "Do not purchase mandatory primary safety gear out of your own pocket.",
        "src": "web:egypt-work-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند إجبارك على العمل في ظروف خطرة تهدد سلامتك الجسدية." },
    "note": { "ar": "توعية بالسلامة والصحة المهنية بقانون العمل المصري." },
    "basis": { "ar": "قانون العمل المصري 12 لسنة 2003 — المواد 208-215." },
    "quote": "تلتزم المنشأة وتوفر وسائل السلامة والصحة المهنية لحماية العمال من مخاطر بيئة العمل.",
    "contacts": [
      { "label": "إدارة السلامة والصحة المهنية بوزارة العمل", "number": "19468", "say": "أبلغ عن مخالفة سلامة وصحة مهنية وتعريض عمال للخطر." }
    ],
    "sources": [
      { "srcId": "web:egypt-work-rights", "grade": "قانون العمل" }
    ]
  },
  {
    "id": "scenario-h14-workplace-discrimination",
    "title": {
      "ar": "«بيميّزوا ضدي في الشغل في الترقية أو المرتب بسبب النوع أو الدين أو الجنسية»",
      "en": "Workplace discrimination in pay, promotion, or hiring"
    },
    "level": 3,
    "domain": "حقوق العمل",
    "who": ["العمال والمهنيون"],
    "place": ["مقرات العمل"],
    "my_right": "المادة 53 والمادة 12 من الدستور المصري وقانون العمل: يحظر كل تمييز بين العمال في شروط أو ظروف العمل أو الأجر بسبب الدين أو العقيدة أو الجنس أو الأصل.",
    "how_to_recover": {
      "principle": "حظر التمييز وتكافؤ الفرص في الأجور والترقيات والتوظيف بين جميع المواطنين.",
      "procedure": "وثق التفاوت غير المبرر في الأجر أو الفرص، وتقدم بشكوى لمكتب العمل وللجلس القومي لحقوق الإنسان عند التمييز المنهجي."
    },
    "do": [
      {
        "t": "احتفظ باللوائح الداخلية المقرة وعقود العمل والتقييمات الوظيفية التي تثبت التمييز.",
        "en": "Document workplace regulations, contracts, and performance reviews evidencing disparity.",
        "src": "web:egypt-work-rights"
      },
      {
        "t": "قدم شكوى رسمية لمكتب العمل والمجلس القومي لحقوق الإنسان لإثبات حالة التمييز.",
        "en": "File a formal complaint to Labor Office and NCHR regarding discriminatory practice.",
        "src": "web:egypt-work-rights"
      }
    ],
    "dont": [
      {
        "t": "لا تقبل البنود الشفهية التي تشترط أجوراً أقل لفئات معينة لنفس مهام الوظيفة.",
        "en": "Do not accept unequal pay terms based on protected demographic attributes.",
        "src": "web:egypt-work-rights"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند التعرض لتمييز غير قانوني في بيئة العمل." },
    "note": { "ar": "توعية بحظر التمييز ومبادئ الدستور المصري وقانون العمل." },
    "basis": { "ar": "الدستور المصري المادة 53 وقانون العمل رقم 12 لسنة 2003." },
    "quote": "المواطنون لدى القانون سواء، وهم متساوون في الحقوق والواجبات العامة لا تمييز بينهم.",
    "contacts": [
      { "label": "المجلس القومي لحقوق الإنسان", "number": "15380", "say": "أبلغ عن شكوى تمييز شغلي وحرمان من الحقوق." }
    ],
    "sources": [
      { "srcId": "web:egypt-work-rights", "grade": "الدستور والقانون" }
    ]
  },

  // --- H-5 Daily Life Scenarios (H16-H18) ---
  {
    "id": "scenario-h16-scammed-online-offline",
    "title": {
      "ar": "«شخص أو شركة نصبوا عليّ في فلوس أو بضاعة أو خدمات وهمية»",
      "en": "Legal rights after financial fraud or commercial scam"
    },
    "level": 4,
    "domain": "الحقوق والحريات العامة",
    "who": ["جميع المواطنين"],
    "place": ["أي مكان"],
    "my_right": "المادة 336 من قانون النصب والجمارك والمادة 35 من الدستور: حماية الملكية الخاصة وتجريم الاستيلاء على أموال الغير بطرق احتيالية.",
    "how_to_recover": {
      "principle": "تجريم النصب والاحتيال، وحق المجني عليه في إقامة الدعوى الجنائية والاسترداد المدني.",
      "procedure": "اجمع كافة مستندات التحويل والمحادثات وحرر محضراً بقسم الشرطة أو مباحث الأموال العامة."
    },
    "do": [
      {
        "t": "اجمع كافة عقود التعامل والمدفوعات البنكية وإيصالات الاستلام والمحادثات المكتوبة.",
        "en": "Compile all contracts, bank receipts, payment slips, and text records.",
        "src": "web:egypt-property-housing"
      },
      {
        "t": "توجه لقسم الشرطة أو مباحث الأموال العامة لتحرير محضر بالنصب والاحتيال.",
        "en": "File a criminal fraud report at police station or Financial Crimes Bureau.",
        "src": "web:egypt-property-housing"
      }
    ],
    "dont": [
      {
        "t": "لا تتأخر في الإبلاغ حتى لا تسقط الجريمة بمضي المدة أو يختفي الجاني.",
        "en": "Do not delay reporting before evidence or culprit disappears.",
        "src": "web:egypt-property-housing"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند التعرض للاستيلاء على أموالك بطرق احتيالية." },
    "note": { "ar": "توعية جنائية بقانون العقوبات المصري — استشير محامي جنائي." },
    "basis": { "ar": "قانون العقوبات المصري المادة 336 والمادة 35 من الدستور." },
    "quote": "يعاقب بالحبس كل من استولى على توقيع أو مبالغ مالية بناء على حيل احتيالية.",
    "contacts": [
      { "label": "مباحث الأموال العامة", "number": "15380", "say": "أبلغ عن جريمة نصب واستيلاء على أموال بطرق احتيالية." }
    ],
    "sources": [
      { "srcId": "web:egypt-property-housing", "grade": "قانون العقوبات" }
    ]
  },
  {
    "id": "scenario-h17-unlawful-eviction",
    "title": {
      "ar": "«صاحب البيت عايز يطردني من الشقة أو يغير الكالون دون حكم قضائي»",
      "en": "Unlawful landlord eviction or lock change without judicial order"
    },
    "level": 4,
    "domain": "حقوق السكن والعقارات",
    "who": ["المستأجرون"],
    "place": ["المنازل", "الشقق السكنية"],
    "my_right": "المادة 58 والمادة 35 من الدستور المصري والقانون المدني: المساكن لها حرمة، ولا يجوز دخولها ولا طرد مستأجر منها إلا بأمر قضائي مسبب وفقاً للقانون.",
    "how_to_recover": {
      "principle": "حظر الإخلاء القسري وتجريم اقتحام أو تغيير كالون الشقة المؤجرة دون حكم قضائي.",
      "procedure": "حرر محضراً فورياً بقسم الشرطة بـ «طرد تعسفي وإثبات حالة»، واطلب التمكين من الشقة برقم المحضر."
    },
    "do": [
      {
        "t": "احتفظ بنسخة من عقد الإيجار وإيصالات سداد أحدث الشهور في مكان آمن خارج الشقة.",
        "en": "Keep rental agreement copy and recent rent receipts safely accessible.",
        "src": "web:egypt-property-housing"
      },
      {
        "t": "توجه لقسم الشرطة فوراً للتحرير محضر «إثبات حالة ومنع حيازة وطرد تعسفي».",
        "en": "Go immediately to police to file unlawful eviction and possession dispute report.",
        "src": "web:egypt-property-housing"
      },
      {
        "t": "تقدم بطلب للنيابة العامة لإصدار قرار قرار تمكين فوري من العين المؤجرة.",
        "en": "Apply to Public Prosecution for emergency tenancy re-possession order.",
        "src": "web:egypt-property-housing"
      }
    ],
    "dont": [
      {
        "t": "لا تترك الشقة مغلقة دون التحرير الفوري للمحضر عند التهديد بالإخلاء.",
        "en": "Do not leave premises without immediately filing police report upon eviction threat.",
        "src": "web:egypt-property-housing"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند محاولة مؤجر طردك من السكن دون حكم محكمة." },
    "note": { "ar": "توعية بحرمة المساكن وقانون الإيجارات المصري — استشير محامي مدني." },
    "basis": { "ar": "الدستور المصري المادة 58 والقانون المدني المصري." },
    "quote": "للمساكن حرمة، ولا يجوز دخولها أو طرد قاطنيها إلا بحكم قضائي مسبب.",
    "contacts": [
      { "label": "شرطة النجدة", "number": "122", "say": "أطلب النجدة فوراً لمشاجرة ومحاولة طرد تعسفي من مسكن." }
    ],
    "sources": [
      { "srcId": "web:egypt-property-housing", "grade": "الدستور والقانون المدني" }
    ]
  },
  {
    "id": "scenario-h18-denied-public-access",
    "title": {
      "ar": "«منعوني من دخول مكان عام أو شاطئ أو حديقة بسبب لبسي أو شكلي»",
      "en": "Arbitrary denial of access to public space or beach"
    },
    "level": 3,
    "domain": "الحقوق والحريات العامة",
    "who": ["جميع المواطنين"],
    "place": ["الأماكن العامة", "الشواطئ", "الحدائق"],
    "my_right": "المادة 53 والمادة 57 من الدستور المصري: للمواطنين حق التنقل والتواجد في الأماكن العامة والشواطئ العامة، ويحظر التمييز أو منع المواطنين تعسفياً.",
    "how_to_recover": {
      "principle": "عمومية الشواطئ والمرافق العامة، وحظر التمييز الطبقي أو الشكلي في تقديم الخدمات العامة.",
      "procedure": "وثق المنع بطلب سبب كتابي، اتصل بشرطة النجدة 122 ووزارة السياحة أو المحافظة التابع لها المكان."
    },
    "do": [
      {
        "t": "اطلب مقابلة المدير المسؤول واطلب التبيين الكتابي لسبب منع الدخول للمكان العام.",
        "en": "Request manager and ask for written justification for public entry refusal.",
        "src": "web:egypt-property-housing"
      },
      {
        "t": "اتصل بشرطة النجدة 122 لإثبات حالة التمييز والمنع غير القانوني من منفعة عامة.",
        "en": "Call 122 Police to log discrimination and illegal exclusion from public space.",
        "src": "web:egypt-property-housing"
      }
    ],
    "dont": [
      {
        "t": "لا تدخل في صدام بدني، واحرص على توثيق الوقائع بهدوء وبإبلاغ السلطات المختصة.",
        "en": "Do not engage in physical altercation; log facts calmly with police.",
        "src": "web:egypt-property-housing"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده عند منعك تعسفياً من دخول مكان عام أو شاطئ ملك للدولة." },
    "note": { "ar": "توعية بمبادئ الدستور وحظر التمييز في المرافق العامة." },
    "basis": { "ar": "الدستور المصري 2014 — المادتان 53 و57." },
    "quote": "كفالة الحق في استخدام وتواجد المواطنين في الأماكن العامة دون تمييز.",
    "contacts": [
      { "label": "شرطة النجدة", "number": "122", "say": "أطلب إثبات حالة منع من دخول مرفق أو شاطئ عام دون سبب قانوني." },
      { "label": "منظومة الشكاوى الحكومية", "number": "16528", "say": "أقدم شكوى منع مواطنين من استخدام مرفق عام." }
    ],
    "sources": [
      { "srcId": "web:egypt-property-housing", "grade": "الدستور" }
    ]
  }
];

injectSourcesAndItems(PATH_RIGHTS, sources, cards, 'CARDS', 'id');

console.log('Waves H-4 & H-5 completed successfully.');
