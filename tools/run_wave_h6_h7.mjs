import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_RIGHTS = 'mawthooq-site/hoqoqi/rights.js';

console.log('--- Executing Waves H-6 & H-7: حقوقي Foundations & Meta-Card H19-H22 ---');

const sources = {
  "web:egypt-constitution-equality": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — المادة 53 والمادة 92 (المساواة وحماية الحقوق والحريات من الانتقاص)",
    "tag": "الدستور",
    "sha256": "4232769e07",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  }
};

const cards = [
  {
    "id": "scenario-h19-universal-basic-rights",
    "title": {
      "ar": "«إيه هي حقوقي الأساسية الدستورية كمواطن مصري من غير تعقيد؟»",
      "en": "Fundamental constitutional rights for Egyptian citizens"
    },
    "level": 3,
    "domain": "الحقوق والحريات العامة",
    "who": ["جميع المواطنين"],
    "place": ["مصر"],
    "my_right": "باب الحقوق والحريات بالدستور المصري 2014: الكرامة الإنسانية، المساواة أمام القانون، حرمة الحياة الخاصة، السلامة الجسدية، وحرية التنقل والسكن.",
    "how_to_recover": {
      "principle": "الحقوق الدستورية مكفولة ومباشرة، ولا يجوز لأي قانون أو لائحة أن تمس أصل الحق أو تفرغه من مضمونه (المادة 92).",
      "procedure": "عند انتهاك أي حق دستوري، يحق للمواطن اللجوء للقضاء المصري والمجلس القومي لحقوق الإنسان."
    },
    "do": [
      {
        "t": "تمسك بطلب النص الحرفي للقانون عند أي إجراء ينطوي على قيود على حريتك.",
        "en": "Demand exact legal text references whenever facing restrictions.",
        "src": "web:egypt-constitution-equality"
      },
      {
        "t": "اللم بالنصوص الدستورية الأساسية التي تكفل حق الدفاع وحرمة المسكن والمساواة.",
        "en": "Understand basic constitutional provisions securing defense and privacy.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "dont": [
      {
        "t": "لا تسلم بتنازل عن حقك الدستوري المباشر تحت ادعاءات لائحية مخالفة للقانون.",
        "en": "Do not waive constitutional rights based on unconstitutional sub-regulations.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده لتعرف الحد الأدنى الدستوري لحقوقك كمواطن." },
    "note": { "ar": "توعية مبسطة بالباب الثاني والثالث من الدستور المصري 2014." },
    "basis": { "ar": "الدستور المصري 2014 — المواد 51-93." },
    "quote": "الحرية الشخصية حق طبيعي، وهي مصونة لا تمس، ولا يجوز تقييدها إلا بأمر قضائي.",
    "contacts": [
      { "label": "المجلس القومي لحقوق الإنسان", "number": "15380", "say": "استفسار وبلاغ عن انتهاك حق دستوري مكفول." }
    ],
    "sources": [
      { "srcId": "web:egypt-constitution-equality", "grade": "الدستور" }
    ]
  },
  {
    "id": "scenario-h20-womens-legal-rights",
    "title": {
      "ar": "«إيه هي الحقوق الدستورية والتمكين القانوني الخاط بالمرأة في مصر؟»",
      "en": "Women's constitutional rights and equal protection"
    },
    "level": 3,
    "domain": "حقوق المرأة والأسرة",
    "who": ["النساء"],
    "place": ["جميع مؤسسات الدولة والعمل والمجتمع"],
    "my_right": "المادة 11 من الدستور المصري: تكفل الدولة تحقيق المساواة بين المرأة والرجل في جميع الحقوق المدنية والسياسية والاقتصادية والاجتماعية والثقافية، وتلتزم بحمايتها ضد كافة أشكال العنف.",
    "how_to_recover": {
      "principle": "كفالة التمكين والمساواة والحماية من التمييز والعنف، وحق المرأة في تقلد الوظائف العامة والقضاء دون تمييز.",
      "procedure": "اللجوء لمكتب شكاوى المرأة بالمجلس القومي للمرأة، وإقامة الدعاوى القضائية عند الحرمان التمييزي."
    },
    "do": [
      {
        "t": "استفيدي من خدمات الدعم القانوني والاستشاري التي يقدمها المجلس القومي للمرأة.",
        "en": "Access legal and counseling support services from National Council for Women.",
        "src": "web:egypt-constitution-equality"
      },
      {
        "t": "أبلغي فوراً عن أي انتهاك يتعلق بالتمييز أو العنف في العمل أو الأماكن العامة.",
        "en": "Report immediately any discriminatory violation or harassment.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "dont": [
      {
        "t": "لا تقبلي التمييز في الأجر أو الفرص الوظيفية بدعوى الأعراف أو القرارات الإدارية.",
        "en": "Do not accept wage or promotion discrimination based on gender.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده لمعرفة التمكين الدستوري والحماية القانونية للمرأة." },
    "note": { "ar": "توعية بالمادة 11 من الدستور المصري 2014 ومكافحة التمييز." },
    "basis": { "ar": "الدستور المصري 2014 — المادة 11." },
    "quote": "تلتزم الدولة باتخاذ التدابير الكفيلة بضمان تمثيل المرأة تمثيلاً مناسباً وحمايتها من العنف.",
    "contacts": [
      { "label": "مكتب شكاوى المجلس القومي للمرأة", "number": "15115", "say": "طلب دعم قانوني لشكوى تمييز أو انتهاك حق امرأة." }
    ],
    "sources": [
      { "srcId": "web:egypt-constitution-equality", "grade": "الدستور" }
    ]
  },
  {
    "id": "scenario-h21-mens-equal-rights",
    "title": {
      "ar": "«إيه مفهوم المساواة القانونية والحماية المتكافئة أمام القانون لجميع المواطنين؟»",
      "en": "Equal protection of law and non-discrimination principle"
    },
    "level": 3,
    "domain": "الحقوق والحريات العامة",
    "who": ["جميع المواطنين"],
    "place": ["المحاكم والمؤسسات"],
    "my_right": "المادة 53 والمادة 96 من الدستور المصري: المواطنون لدى القانون سواء، وهم متساوون في الحقوق والحريات والواجبات العامة، والمجرم متهم حتى تثبت إدانته في محاكمة قانونية عادلة.",
    "how_to_recover": {
      "principle": "الحماية المتكافئة أمام القضاء وحظر التمييز أو المحاكمة الاستثنائية لجميع المواطنين على حد سواء.",
      "procedure": "التمسك بحق الدفاع والمساواة الإجرائية أمام كافة الهيئات القضائية والإدارية."
    },
    "do": [
      {
        "t": "تمسك بالمعاملة القانونية المتكافئة وضمانات المحاكمة العادلة وحق الاستعانة بمحامٍ.",
        "en": "Insist on equal treatment, fair trial guarantees, and legal counsel access.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "dont": [
      {
        "t": "لا تقبل أي معاملة تفضيلية أو تمييزية تحرمك من الحماية القانونية المتكافئة.",
        "en": "Do not accept arbitrary treatment violating equal protection principles.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده لتعرف مبدأ المساواة وحظر التمييز الدستوري." },
    "note": { "ar": "توعية بمبدأ المساواة والمادة 53 من الدستور المصري." },
    "basis": { "ar": "الدستور المصري 2014 — المادتان 53 و96." },
    "quote": "المواطنون لدى القانون سواء، المتهم بريء حتى تثبت إدانته في محاكمة قانونية مكفول فيها حق الدفاع.",
    "contacts": [
      { "label": "المجلس القومي لحقوق الإنسان", "number": "15380", "say": "أبلغ عن مخالفة ضمانات المساواة وحق الدفاع." }
    ],
    "sources": [
      { "srcId": "web:egypt-constitution-equality", "grade": "الدستور" }
    ]
  },
  {
    "id": "scenario-h22-verify-legal-right-meta",
    "title": {
      "ar": "«إزاي أتأكد إن الكلام القانوني اللي بيتقالي حقيقي ومستند لنص مش افتكاسة؟»",
      "en": "Meta-card: How to verify if a legal right claim is authentic (The One-Law)"
    },
    "level": 2,
    "domain": "الحقوق والحريات العامة",
    "who": ["جميع المواطنين"],
    "place": ["أي مكان"],
    "my_right": "قانون الإثبات والشفافية القانونية: لا جريمة ولا عقوبة ولا سلب لحق إلا بناءً على قانون مكتوب ومشور بالجريدة الرسمية (المادة 95 من الدستور).",
    "how_to_recover": {
      "principle": "«اطلب النص الحرفي ورقم المادة والقانون» — القاعدة الذهبية لحماية نفسك من الادعاءات والشائعات القانونية.",
      "procedure": "اطلب دائماً اسم القانون ورقم المادة، وراجع الجريدة الرسمية أو بوابة التشريعات الحكومية أو استشر محامياً مقيداً."
    },
    "do": [
      {
        "t": "اطلب دائماً رقم القانون ورقم المادة ونصها الحرفي عندما يخبرك أحد بحق أو التزام.",
        "en": "Always ask for the exact law number, article number, and verbatim text.",
        "src": "web:egypt-constitution-equality"
      },
      {
        "t": "راجع التشريعات من البوابة الرسمية للحكومة المصرية أو الجريدة الرسمية.",
        "en": "Verify legal text against official government gazette or legislation portals.",
        "src": "web:egypt-constitution-equality"
      },
      {
        "t": "استشر محامياً مقيداً بنقابة المحامين عند اتخاذ أي إجراء قضائي أو توقيع عقود.",
        "en": "Consult a licensed Egyptian attorney before signing binding documents.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "dont": [
      {
        "t": "لا تصدق الادعاءات القانونية المرسلة عبر منصات التواصل دون سند من مادة قانونية موثقة.",
        "en": "Do not accept legal claims shared on social media without verbatim article citations.",
        "src": "web:egypt-constitution-equality"
      }
    ],
    "whenWhy": { "ar": "افتح الكارت ده كلما شككت في صحة نصيحة قانونية أو ادعاء بحق أو التزام." },
    "note": { "ar": "الكارت الذهبي لمشروع حقوقي — القانون الواحد: الدليل قبل التصديق." },
    "basis": { "ar": "الدستور المصري المادة 95 ومبادئ النشر في الجريدة الرسمية." },
    "quote": "لا جريمة ولا عقوبة إلا بناء على قانون، ولا توقع عقوبة إلا بحكم قضائي.",
    "contacts": [
      { "label": "نقابة المحامين المصرية (استعلام القيد)", "number": "15380", "say": "استعلام عن قيد محامي والتأكد من الترخيص." }
    ],
    "sources": [
      { "srcId": "web:egypt-constitution-equality", "grade": "الدستور والمنهجية" }
    ]
  }
];

injectSourcesAndItems(PATH_RIGHTS, sources, cards, 'CARDS', 'id');

console.log('Waves H-6 & H-7 completed successfully.');
