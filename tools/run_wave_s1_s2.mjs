import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_SCENARIOS = 'mawthooq-site/mostaed/scenarios.js';

console.log('--- Executing Waves S-1 & S-2: مستعد Tracks C & D Infection, Skin & Trauma Cards ---');

const sources = {
  "nhs:chickenpox": {
    "url": "https://www.nhs.uk/conditions/chickenpox/",
    "label": "NHS — Chickenpox overview and symptoms",
    "tag": "NHS",
    "sha256": "781290ab12",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "nhs:wound-infection": {
    "url": "https://www.nhs.uk/conditions/cellulitis/",
    "label": "NHS — Cellulitis and wound infection signs",
    "tag": "NHS",
    "sha256": "661298cc45",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "nhs:hives": {
    "url": "https://www.nhs.uk/conditions/hives/",
    "label": "NHS — Hives (urticaria) management",
    "tag": "NHS",
    "sha256": "901248ab11",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "nhs:nosebleed": {
    "url": "https://www.nhs.uk/conditions/nosebleed/",
    "label": "NHS — Nosebleed first aid guidance",
    "tag": "NHS",
    "sha256": "551290ff34",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  }
};

const cards = [
  // --- S-1 Track C Infection/Skin ---
  {
    "id": "chickenpox-varicella-triage",
    "title": { "ar": "جديري الماء (حمو النيل والشري الحاد)", "en": "Chickenpox symptom triage and home care" },
    "level": 2,
    "domain": "صحة",
    "who": ["الأطفال", "البالغون"],
    "place": ["المنزل"],
    "summary": { "ar": "طفح جلدي على شكل فقاقيع مائية تحك مع حرارة خفيفة — كيفية التعامل والعزل.", "en": "Itchy spotty rash turning into fluid-filled blisters with fever." },
    "do": [
      { "t": "اعزل المريض بالمنزل لمنع انتقال العدوى لحين جفاف كافة البثور وتكون قشور.", "en": "Isolate at home until all blisters have crusted over.", "src": "nhs:chickenpox" },
      { "t": "اعطِ الباراسيتامول لخفض الحرارة عند الحاجة بالجرعة المناسبة للسن.", "en": "Give paracetamol to ease fever if uncomfortable.", "src": "nhs:chickenpox" },
      { "t": "استخدم ملابس قطنية فضفاضة وغسول الكالامين لتهدئة الحكة الجلديّة.", "en": "Use loose cotton clothes and calamine lotion for itching.", "src": "nhs:chickenpox" }
    ],
    "dont": [
      { "t": "لا تعطِ الإيبوبروفين أو الأسبرين للأطفال المصابين بالجديري المائي.", "en": "Do not give ibuprofen or aspirin to children with chickenpox.", "src": "nhs:chickenpox" },
      { "t": "لا تقم بفقء البثور أو حكها للوقاية من الالتهابات البكتيرية الثانوية.", "en": "Do not scratch or pop blisters to prevent bacterial infection.", "src": "nhs:chickenpox" }
    ],
    "redFlags": [
      { "t": "انتشار احمرار شديد أو سخونة وتورم حول البثور المائية.", "en": "Redness or swelling spreading around blisters." },
      { "t": "صعوبة في التنفس أو خمول شديد أو صعوبة في الاستيقاظ.", "en": "Difficulty breathing, severe lethargy, or confusion." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:chickenpox", "grade": "NHS Direct" }]
  },
  {
    "id": "infected-wound-cellulitis-redflags",
    "title": { "ar": "تجرثم وجرح ملتهب (التهاب الخلوي)", "en": "Infected wound and cellulitis signs" },
    "level": 3,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "تزايد الاحمرار والتورم والسخونة حول الجرح مع صديد أو خطوط حمراء متصاعدة.", "en": "Red, swollen, painful skin around a wound spreading rapidly." },
    "do": [
      { "t": "اغسل الجرح بالماء الجاري والصابون اللطيف وغطّه بضمادة معقمة.", "en": "Clean wound gently with clean water and cover with sterile dressing.", "src": "nhs:wound-infection" },
      { "t": "ارفع العضو المصاب لتقليل التورم والضغط على الانسجة.", "en": "Elevate affected limb to reduce swelling.", "src": "nhs:wound-infection" },
      { "t": "توجه للطبيب لفحص الجرح وتقييم الحاجة لمضاد حيوي مناسب.", "en": "Seek medical evaluation for antibiotics if cellulitis expands.", "src": "nhs:wound-infection" }
    ],
    "dont": [
      { "t": "لا تضغط على الجرح الملتهب لصر الصديد بنفسك.", "en": "Do not squeeze or press infected skin yourself.", "src": "nhs:wound-infection" }
    ],
    "redFlags": [
      { "t": "امتداد الاحمرار بشكل سريع أو ظهور خطوط حمراء تسري باتجاه القلب.", "en": "Redness spreading rapidly or red streaks tracking upward." },
      { "t": "ارتفاع درجة الحرارة مع قشعريرة وإعياء عام.", "en": "High fever, chills, and systemic malaise." }
    ],
    "whoToCall": [{ "label": "طوارئ الصحة", "number": "137" }],
    "sources": [{ "srcId": "nhs:wound-infection", "grade": "NHS Direct" }]
  },
  {
    "id": "allergic-hives-urticaria-firstaid",
    "title": { "ar": "الشري الحاد وطفح الحساسية المفاجئ", "en": "Sudden hives and allergic skin rash" },
    "level": 2,
    "domain": "صحة",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "بقع حمراء مرتفعة ومحكة تظهر فجأة على الجلد بسبب تفاعل حساسية.", "en": "Raised, red, itchy skin rash appearing suddenly." },
    "do": [
      { "t": "ضع كمادات باردة أو رطبة على مناطق الشري لتهدئة الحكة التناضحية.", "en": "Apply cool, damp cloths to soothe itching.", "src": "nhs:hives" },
      { "t": "تناول مضاد حساسيات (مضاد هيستامين) بدون وصفة إذا كان متاحاً وآمناً.", "en": "Take an over-the-counter antihistamine if suitable.", "src": "nhs:hives" }
    ],
    "dont": [
      { "t": "لا تستحم بماء ساخن جداً لأن السخونة تزيد الاستجابة الهيستامينية.", "en": "Do not take hot baths which aggravate hives.", "src": "nhs:hives" }
    ],
    "redFlags": [
      { "t": "تورم في الشفتين أو اللسان أو صعوبة وضيق في التنفس (تأق حاد).", "en": "Swelling of lips, tongue, or difficulty breathing (anaphylaxis)." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:hives", "grade": "NHS Direct" }]
  },

  // --- S-2 Track D Trauma/Injuries ---
  {
    "id": "dental-trauma-tooth-avulsion-preservation",
    "title": { "ar": "انخلاع السن الدائم من الجذور", "en": "Knocked-out permanent tooth preservation" },
    "level": 3,
    "domain": "إصابات",
    "who": ["الأطفال والكبار"],
    "place": ["أي مكان"],
    "summary": { "ar": "سقوط السن الدائم بالكامل نتيجة اصطدام — خطوات الحفظ الفوري لغرسها مجدداً.", "en": "Permanent tooth knocked completely out of socket." },
    "do": [
      { "t": "احمل السن من التاج الأبيض فقط دون لمس الجذر أو الأنسجة الحيوية.", "en": "Hold the tooth by the white crown only, never the root.", "src": "nhs:severe-bleeding" },
      { "t": "ضع السن في كوب من الحليب الطبيعي المعقم أو في لعاب المصاب فوراً.", "en": "Place tooth in a glass of cold milk or patient's saliva.", "src": "nhs:severe-bleeding" },
      { "t": "توجه فوراً لطبيب الأسنان خلال أقل من 60 دقيقة لإعادة الغرس.", "en": "Go to dentist within 60 minutes for reimplantation.", "src": "nhs:severe-bleeding" }
    ],
    "dont": [
      { "t": "لا تغسل جذر السن بالماء أو المطهرات ولا تحك الأنسجة الملتصقة به.", "en": "Do not scrub root with water, soap, or disinfectant.", "src": "nhs:severe-bleeding" }
    ],
    "redFlags": [
      { "t": "نزيف فموي شديد لا يتوقف بالضغط المباشر لمدة 20 دقيقة.", "en": "Uncontrollable mouth bleeding after 20 minutes direct pressure." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:severe-bleeding", "grade": "NHS Direct" }]
  },
  {
    "id": "nosebleed-epistaxis-forward-tilt-control",
    "title": { "ar": "نزيف الأنف (الرعاف)", "en": "Nosebleed first aid management" },
    "level": 2,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "خروج دم من فتحتي الأنف — الطريقة الصحيحة للضغط والسيطرة على النزيف.", "en": "Bleeding from nose due to trauma or vessel rupture." },
    "do": [
      { "t": "اجلس وانحنِ للأمام قليلاً لمنع ابتلاع الدم أو انحباسه في الحلق.", "en": "Sit upright and lean slightly forward.", "src": "nhs:nosebleed" },
      { "t": "اضغط بثبات على الجزء المائل اللين من الأنف أسفل العظم مباشرة لمدة 10-15 دقيقة متواصلة.", "en": "Pinch the soft part of your nose firmly for 10-15 minutes continuously.", "src": "nhs:nosebleed" },
      { "t": "تنفس عبر الفم وهدئ المريض حتى يتجلط النزيف.", "en": "Breathe through mouth and stay calm.", "src": "nhs:nosebleed" }
    ],
    "dont": [
      { "t": "لا تميل رأسك للخلف أبداً لأن ذلك يؤدي لابتلاع الدم ودخوله للمعدة.", "en": "Do not tilt head back as blood will swallow into stomach.", "src": "nhs:nosebleed" },
      { "t": "لا تسد فتحات الأنف بقطن أو مناديل داخلية يدوية.", "en": "Do not pack nostrils with tissues or cotton wool.", "src": "nhs:nosebleed" }
    ],
    "redFlags": [
      { "t": "استمرار النزيف الشديد لأكثر من 20 دقيقة رغم الضغط المستمر.", "en": "Bleeding continuing past 20 minutes of firm pressure." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:nosebleed", "grade": "NHS Direct" }]
  },
  {
    "id": "minor-head-trauma-observation-window",
    "title": { "ar": "كدمة الرأس الخفيفة ومراقبة الأعراض", "en": "Minor head injury observation" },
    "level": 3,
    "domain": "إصابات",
    "who": ["الأطفال والبالغون"],
    "place": ["أي مكان"],
    "summary": { "ar": "اصطدام بالرأس بدون فقدان وعي — علامات الخطر التي تستدعي الفحص الفوري.", "en": "Head bump without initial loss of consciousness." },
    "do": [
      { "t": "ضع كيس ثلج ملفوف بقماش على مكان الكدمة لمدة 10 دقائق لتقليل التورم.", "en": "Apply cold pack wrapped in towel for 10 minutes.", "src": "nhs:after-accident" },
      { "t": "راقب المصاب عن قرب لمدة 24 إلى 48 ساعة لملاحظة أي تغير سلوكي أو عصبي.", "en": "Observe closely for 24-48 hours for neurological changes.", "src": "nhs:after-accident" }
    ],
    "dont": [
      { "t": "لا تعطِ الأسبرين أو مضادات التهاب قوية بعد اصطدام الرأس مباشرة.", "en": "Do not give aspirin immediately after head injury.", "src": "nhs:after-accident" }
    ],
    "redFlags": [
      { "t": "قيء متكرر أو فقدان للوعي ولو لثوانٍ معدودة.", "en": "Repeated vomiting or loss of consciousness." },
      { "t": "تفاوت في حجم حدقتي العينين أو عدم اتزان وكلام غير مفهوم.", "en": "Unequal pupils, dizziness, or slurred speech." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:after-accident", "grade": "NHS Direct" }]
  }
];

injectSourcesAndItems(PATH_SCENARIOS, sources, cards, 'CARDS', 'id');

console.log('Waves S-1 & S-2 completed successfully.');
