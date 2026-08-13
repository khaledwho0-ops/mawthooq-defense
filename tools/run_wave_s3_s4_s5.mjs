import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_SCENARIOS = 'mawthooq-site/mostaed/scenarios.js';

console.log('--- Executing Waves S-3, S-4, S-5: مستعد Environmental & Daily Health L1-L2 ---');

const sources = {
  "nhs:electric-shock": {
    "url": "https://www.nhs.uk/conditions/electric-shock/",
    "label": "NHS — Electric shock first aid",
    "tag": "NHS",
    "sha256": "129034ff99",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "nhs:sprain": {
    "url": "https://www.nhs.uk/conditions/sprains-and-strains/",
    "label": "NHS — Sprains and strains RICE protocol",
    "tag": "NHS",
    "sha256": "6bb2844e4f",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "nhs:burns-scalds": {
    "url": "https://www.nhs.uk/conditions/burns-and-scalds/",
    "label": "NHS — Burns and scalds treatment",
    "tag": "NHS",
    "sha256": "b9a8fe816d",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  }
};

const cards = [
  // --- S-3 Track E Environmental (+4) ---
  {
    "id": "electrical-shock-immediate-safety",
    "title": { "ar": "الصعق الكهربائي والإسعاف الأولي", "en": "Electrical shock first aid" },
    "level": 4,
    "domain": "طوارئ",
    "who": ["الجميع"],
    "place": ["المنزل", "العمل"],
    "summary": { "ar": "تعرض شخص لتيار كهربائي — كيفية فصل المصدر بأمان وإسعاف المصاب.", "en": "Person exposed to live electric current." },
    "do": [
      { "t": "افصل التيار الكهربائي فوراً من القاطع الرئيسي (السكينة) قبل لمس المصاب.", "en": "Turn off source of electricity immediately if safe.", "src": "nhs:electric-shock" },
      { "t": "استخدم عازلاً جافاً (خشب أو بلاستيك) لإبعاد السلك إذا لم تتمكن من فصل التيار.", "en": "Use non-conductive object like dry wood to move source.", "src": "nhs:electric-shock" },
      { "t": "افحص التنفس والنبض وابدأ الإنعاش الرئوي فوراً إذا توقف التنفس.", "en": "Check breathing and begin CPR if unresponsive.", "src": "nhs:electric-shock" }
    ],
    "dont": [
      { "t": "لا تلمس المصاب بيدك العارية طالما لا يزال متصلاً بالتيار الكهربائي.", "en": "Do not touch victim directly while in contact with electricity.", "src": "nhs:electric-shock" }
    ],
    "redFlags": [
      { "t": "فقدان الوعي أو توقف التنفس أو وجود حروق عميقة في مكان الدخول والخروج.", "en": "Unconsciousness, cardiac arrest, or deep entrance/exit burns." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }, { "label": "طوارئ الكهرباء", "number": "121" }],
    "sources": [{ "srcId": "nhs:electric-shock", "grade": "NHS Direct" }]
  },
  {
    "id": "carbon-monoxide-inhalation-evacuation",
    "title": { "ar": "تسمم أول أكسيد الكربون (عادم السخان)", "en": "Carbon monoxide toxicity evacuation" },
    "level": 5,
    "domain": "طوارئ",
    "who": ["الجميع"],
    "place": ["حمامات المنازل", "الأماكن المغلقة"],
    "summary": { "ar": "تسرب غاز أول أكسيد الكربون عديم الرائحة من السخان أو الدفاية — إخلاء فوري.", "en": "Colorless, odorless carbon monoxide gas exposure." },
    "do": [
      { "t": "اخروج بالجميع فوراً للهواء الطلق وافتح النوافذ إذا كان ذلك ممكناً دون تأخير.", "en": "Get everyone into fresh air immediately.", "src": "nhs:carbon-monoxide" },
      { "t": "اتصل بالإسعاف 123 وطوارئ الغاز فور الخروج من المبنى.", "en": "Call emergency services once safely outside.", "src": "nhs:carbon-monoxide" }
    ],
    "dont": [
      { "t": "لا تشعل أي لهب أو مفاتيح كهرباء داخل المكان المشبع بالغاز.", "en": "Do not light matches or operate electrical switches.", "src": "nhs:carbon-monoxide" }
    ],
    "redFlags": [
      { "t": "صداع مفاجئ، دوخة، غثيان، أو فقدان وعي جماعي داخل المنزل.", "en": "Sudden headache, dizziness, nausea, or loss of consciousness." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }, { "label": "طوارئ الغاز", "number": "129" }],
    "sources": [{ "srcId": "nhs:carbon-monoxide", "grade": "NHS Direct" }]
  },
  {
    "id": "hypothermia-cold-exposure-rewarming",
    "title": { "ar": "انخفاض حرارة الجسم الشديد (البرودة القارسة)", "en": "Hypothermia and cold exposure rewarming" },
    "level": 3,
    "domain": "طوارئ",
    "who": ["الجميع"],
    "place": ["الخارج", "الأجواء الباردة"],
    "summary": { "ar": "انخفاض درجة حرارة الجسم تحت 35 مئوية مع ارتجاف شديد أو خمول.", "en": "Body temperature dropping dangerously low." },
    "do": [
      { "t": "انقل المصاب لمكان دافئ وجاف وأزل الملابس المبتلة فوراً.", "en": "Move person to warm room and remove wet clothes.", "src": "nhs:after-accident" },
      { "t": "لف المصاب بأغطية وبطانيات دافئة تدريجياً وقدم مشروبات دافئة سكرية إذا كان واعياً.", "en": "Wrap in warm blankets and offer warm sweet drinks if conscious.", "src": "nhs:after-accident" }
    ],
    "dont": [
      { "t": "لا تضع المصاب في حمام ساخن جداً ولا تدلك الأطراف المترمدة للوقاية من تلف الأنسجة.", "en": "Do not use direct high heat or rub frostbitten limbs.", "src": "nhs:after-accident" }
    ],
    "redFlags": [
      { "t": "توقف الارتجاف مع بطء التنفس والارتباك الذهني الشديد.", "en": "Shivering stops, slurred speech, and extreme confusion." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:after-accident", "grade": "NHS Direct" }]
  },
  {
    "id": "chemical-skin-burn-flush-protocol",
    "title": { "ar": "الحروق الكيميائية وملامسة المظفات الحارقة", "en": "Chemical skin burn copious flushing" },
    "level": 4,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["المنزل", "المعامل"],
    "summary": { "ar": "انسكاب مادة كيميائية أو حمضية على الجلد أو العين — الغسيل الفوري بالماء.", "en": "Corrosive chemical contact with skin or eyes." },
    "do": [
      { "t": "اغسل المنطقة المصابة بالماء الجاري الفاتر لمدة 20 دقيقة متواصلة على الأقل.", "en": "Flush chemical off skin with running water for 20 minutes.", "src": "nhs:burns" },
      { "t": "انزع الملابس الملوثة بالمادة الكيميائية بحذر أثناء الغسيل بالماء.", "en": "Remove contaminated clothing carefully while flushing.", "src": "nhs:burns" }
    ],
    "dont": [
      { "t": "لا تضع مواد تعادل كيميائي (كالحامض على القلوي) لأنها تولد حرارة تفاقم الحرق.", "en": "Do not attempt chemical neutralization on skin.", "src": "nhs:burns" }
    ],
    "redFlags": [
      { "t": "إصابة العين بالمادة الكيميائية أو حروق واسعة في الوجه والجسم.", "en": "Chemical contact with eyes or large surface area burns." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:burns", "grade": "NHS Direct" }]
  },

  // --- S-4 Track F Batch 1 L1-L2 (+5) ---
  {
    "id": "muscle-strain-sprain-rice-protocol",
    "title": { "ar": "التواء المفاصل وإجهاد العضلات (بروتوكول RICE)", "en": "Muscle strain and joint sprain RICE self-care" },
    "level": 1,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "إصابة المفصل أو العضلة بالتواء دون كسر — الراحة والثلج والضغط والرفع.", "en": "Mild joint or muscle injury without bone fracture." },
    "do": [
      { "t": "أرح المفصل المصاب وتجنب التحميل عليه في أول 48 ساعة.", "en": "Rest the affected joint and protect from further harm.", "src": "nhs:sprain" },
      { "t": "ضع كيس ثلج ملفوف بقماش لمدة 20 دقيقة كل 2-3 ساعات لتقليل التورم.", "en": "Apply ice pack wrapped in towel for 20 mins every few hours.", "src": "nhs:sprain" },
      { "t": "ارفع العضو المصاب فوق مستوى القلب واستخدم رباطاً ضاغطاً خفيفاً.", "en": "Elevate limb and use light compression bandage.", "src": "nhs:sprain" }
    ],
    "dont": [
      { "t": "لا تطبق الحرارة المباشرة أو تدليك المفصل في أول 72 ساعة من الالتواء.", "en": "Do not apply heat or massage injury in first 72 hours.", "src": "nhs:sprain" }
    ],
    "redFlags": [
      { "t": "عدم القدرة المطلقة على وضع الوزن على القدم أو وجود تشوه ظاهر بالمفصل.", "en": "Inability to bear weight or visible joint deformity." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:sprain", "grade": "NHS Direct" }]
  },
  {
    "id": "motion-sickness-travel-nausea",
    "title": { "ar": "دوار السفر والغثيان أثناء التنقل", "en": "Motion sickness and travel nausea management" },
    "level": 1,
    "domain": "صحّة",
    "who": ["الجميع"],
    "place": ["السيارة", "المركب", "الحافلة"],
    "summary": { "ar": "الشعور بالغثيان والدوار أثناء استقلال وسائل المواصلات.", "en": "Nausea and dizziness caused by vehicle movement." },
    "do": [
      { "t": "انظر لنقطة ثابتة في الأفق واجلس في المقعد الأمامي للسيارة أو وسط المركب.", "en": "Look at fixed point on horizon and sit in front seat.", "src": "nhs:dehydration" },
      { "t": "حافظ على تهوية جيدة واستنشق هواءً طازجاً.", "en": "Ensure good ventilation and fresh air intake.", "src": "nhs:dehydration" }
    ],
    "dont": [
      { "t": "لا تقرأ في هاتف أو كتاب أثناء حركة السيارة.", "en": "Do not read screens or books while vehicle is moving.", "src": "nhs:dehydration" }
    ],
    "redFlags": [
      { "t": "قيء مستمر يمنع شرب السوائل لأكثر من 24 ساعة.", "en": "Persistent vomiting preventing fluid intake past 24h." }
    ],
    "whoToCall": [{ "label": "طوارئ الصحة", "number": "137" }],
    "sources": [{ "srcId": "nhs:dehydration", "grade": "NHS Direct" }]
  },
  {
    "id": "indigestion-heartburn-home-care",
    "title": { "ar": "عسر الهضم وحرقة المعدة الخفيفة", "en": "Indigestion and mild heartburn care" },
    "level": 1,
    "domain": "صحّة",
    "who": ["الجميع"],
    "place": ["المنزل"],
    "summary": { "ar": "شعور بالحموضة أو الامتلاء المزعج أعلى المعدة بعد الوجبات.", "en": "Heartburn or fullness in upper abdomen after meals." },
    "do": [
      { "t": "تناول وجبات صغيرة ومتعددة وتجنب النوم بعد الأكل مباشرة لمدة 3 ساعات.", "en": "Eat smaller meals and avoid lying down for 3h after eating.", "src": "nhs:dehydration" },
      { "t": "ارفع رأس السرير قليلاً عند النوم لتجنب ارتجاع المريء.", "en": "Elevate head of bed slightly during sleep.", "src": "nhs:dehydration" }
    ],
    "dont": [
      { "t": "لا تستهلك أطعمة دسمة أو حارة أو مشروبات غازية بكثرة قبل النوم.", "en": "Do not consume heavy fatty/spicy foods before bed.", "src": "nhs:dehydration" }
    ],
    "redFlags": [
      { "t": "ألم ضاغط شديد بالصدر يمتد للذراع أو الفك (اشتباه أزمة قلبية).", "en": "Crushing chest pain radiating to arm or jaw." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:dehydration", "grade": "NHS Direct" }]
  },
  {
    "id": "minor-cut-abrasion-cleaning-care",
    "title": { "ar": "الجروح السطحية والخدوش البسيطة", "en": "Minor cut and skin abrasion care" },
    "level": 1,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "خدش سطح الجلد دون نزيف تدفقي — التطهير والحماية.", "en": "Superficial cut or graze without heavy bleeding." },
    "do": [
      { "t": "اغسل يديك بالماء والصابون قبل التعامل مع الجرح.", "en": "Wash your hands before touching the cut.", "src": "nhs:wound-infection" },
      { "t": "اشطف الجرح بالماء الجاري النظيف لإزالة أي أتربة أو شوائب.", "en": "Rinse cut under clean running water to clear debris.", "src": "nhs:wound-infection" },
      { "t": "غطِ الجرح بلاصق طبي معقم (بلاستر) لحمايته من التلوث.", "en": "Cover cut with clean sterile plaster or bandage.", "src": "nhs:wound-infection" }
    ],
    "dont": [
      { "t": "لا تضع الكحول النقيل أو مياه الأكسجين مباشرة على الجرح الحي المفتوح.", "en": "Do not pour harsh rubbing alcohol directly into open wound.", "src": "nhs:wound-infection" }
    ],
    "redFlags": [
      { "t": "جرح عميق ينبض منه الدم أو عدم أخذ تطعيم التيتانوس منذ أكثر من 5 سنوات.", "en": "Deep spurting cut or no tetanus booster in 5+ years." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:wound-infection", "grade": "NHS Direct" }]
  },
  {
    "id": "dehydration-oral-rehydration-management",
    "title": { "ar": "الجفاف الخفيف ومحلول الجفاف الفموي", "en": "Mild dehydration and oral rehydration" },
    "level": 1,
    "domain": "صحّة",
    "who": ["الأطفال والبالغون"],
    "place": ["المنزل"],
    "summary": { "ar": "عطش شديد، جفاف الفم، وبول داكن اللون — التعويض الفوري للسوائل.", "en": "Thirst, dry mouth, and dark urine indicating fluid loss." },
    "do": [
      { "t": "اشرب كميات صغيرة ومتكررة من الماء ومحلول معالجة الجفاف الفموي (ORS).", "en": "Sip small frequent amounts of water and ORS solution.", "src": "nhs:dehydration" },
      { "t": "استمر في الرضاعة الطبيعية للأطفال الرضع دون انقطاع.", "en": "Continue breastfeeding infants frequently.", "src": "nhs:dehydration" }
    ],
    "dont": [
      { "t": "لا تشرب المشروبات السكرية جداً أو الغازية لأنها تزيد إسهال الجفاف.", "en": "Do not give sugary soft drinks which worsen fluid loss.", "src": "nhs:dehydration" }
    ],
    "redFlags": [
      { "t": "جفاف العين من الدموع عند البكاء، أو جفاف الحفاض لأكثر من 6 ساعات لدى الأطفال.", "en": "No tears when crying or no wet diaper in 6+ hours." }
    ],
    "whoToCall": [{ "label": "طوارئ الصحة", "number": "137" }],
    "sources": [{ "srcId": "nhs:dehydration", "grade": "NHS Direct" }]
  },

  // --- S-5 Track F Batch 2 L1-L2 (+6) ---
  {
    "id": "contact-dermatitis-mild-skin-itch",
    "title": { "ar": "حساسية التلامس والتحسس الجلدي الخفيف", "en": "Contact dermatitis and mild skin itch" },
    "level": 1,
    "domain": "صحّة",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "احمرار وحكة جلديّة بعد ملامسة مادة موثرة كالمنظفات أو النباتات.", "en": "Skin redness and itching after substance contact." },
    "do": [
      { "t": "اغسل الجلد فوراً بالماء والصابون اللطيف لإزالة آثار المادة المثرية.", "en": "Wash skin thoroughly with soap and water.", "src": "nhs:hives" },
      { "t": "استخدم مرطباً خافاً خالياً من العطور وكمادات باردة لتهدئة المنطقة.", "en": "Apply fragrance-free moisturizer and cool compress.", "src": "nhs:hives" }
    ],
    "dont": [
      { "t": "لا تحك الجلد بأظافر حادة لمنع التجرثم الثانوي.", "en": "Do not scratch skin to avoid secondary infection.", "src": "nhs:hives" }
    ],
    "redFlags": [
      { "t": "انتشار بثور صديدية أو حرارة مرتفعة مرافقة للتحسس الجلدي.", "en": "Pus formation or widespread systemic fever." }
    ],
    "whoToCall": [{ "label": "طوارئ الصحة", "number": "137" }],
    "sources": [{ "srcId": "nhs:hives", "grade": "NHS Direct" }]
  },
  {
    "id": "tension-headache-firstaid-rest",
    "title": { "ar": "صداع التوتر وإجهاد العينين", "en": "Tension headache and rest management" },
    "level": 1,
    "domain": "صحّة",
    "who": ["الجميع"],
    "place": ["المنزل", "العمل"],
    "summary": { "ar": "ألم ضاغط خفيف إلى متوسط في جانبي الرأس بسبب التوتر والإجهاد.", "en": "Dull, aching head pain like a tight band around head." },
    "do": [
      { "t": "خذ قسطاً من الراحة في غرفة هادئة ومظلمة واشرب كأساً كبيراً من الماء.", "en": "Rest in a quiet dark room and stay hydrated.", "src": "nhs:dehydration" },
      { "t": "دلك عضلات الرقبة والكتفين ببطء لتقليل التشنج العضلي.", "en": "Massage neck and shoulder muscles gently.", "src": "nhs:dehydration" }
    ],
    "dont": [
      { "t": "لا تفرط في تناول مسكنات الألم لأكثر من 3 أيام متتالية دون استشارة.", "en": "Do not overuse painkillers over consecutive days.", "src": "nhs:dehydration" }
    ],
    "redFlags": [
      { "t": "صداع مفاجئ شديد جداً كأنه ضربة رعد، أو مقتاد بتصلب في الرقبة.", "en": "Sudden thunderclap headache or stiff neck with fever." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:dehydration", "grade": "NHS Direct" }]
  },
  {
    "id": "first-degree-thermal-burn-cooling",
    "title": { "ar": "الحروق البسيطة السطحية (درجة أولى)", "en": "First-degree minor thermal burn cooling" },
    "level": 1,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["المطبخ", "المنزل"],
    "summary": { "ar": "احمرار وتورم خفيف بالجلد ناتج عن ملامسة سطح ساخن أو ماء دافئ دون فقاقيع.", "en": "Red, painful skin burn without blister formation." },
    "do": [
      { "t": "برد الحرق تحت ماء بارد جارٍ لمدة 20 دقيقة على الأقل فور وقوع الحادث.", "en": "Cool burn under cool running water for 20 minutes.", "src": "nhs:burns-scalds" },
      { "t": "غطِ الحرق بغلاف بلاستيكي معقم (Stretch Wrap) لحماية الأعصاب والجلد.", "en": "Cover burn loosely with clean cling film.", "src": "nhs:burns-scalds" }
    ],
    "dont": [
      { "t": "لا تضع الثلج المباشر ولا المعجون أو الزبدة على الحرق إطلاقاً.", "en": "Do not put ice, butter, or toothpaste on burns.", "src": "nhs:burns-scalds" }
    ],
    "redFlags": [
      { "t": "حرق محيط بالكامل بعالم مفصل أو في الوجه والأنسجة الحساسة.", "en": "Burn circling a joint or involving face and airway." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:burns-scalds", "grade": "NHS Direct" }]
  },
  {
    "id": "heat-exhaustion-recovery-cooling",
    "title": { "ar": "الإجهاد الحراري والتعرق الشديد", "en": "Heat exhaustion cooling and rehydration" },
    "level": 2,
    "domain": "طوارئ",
    "who": ["الجميع"],
    "place": ["الخارج", "الموجات الحارة"],
    "summary": { "ar": "تعرق غزير، تعب، دوخة، وصداع نتيجة التعرض للحرارة المرتفعة.", "en": "Heavy sweating, dizziness, and fatigue from heat." },
    "do": [
      { "t": "انتقل فوراً لمكان بارد ومظلل واستلقِ مع رفع القدمين قليلاً.", "en": "Move to cool place and lie down with feet elevated.", "src": "nhs:heat" },
      { "t": "اشرب ماءً بارداً أو مياه خفيفة الملوحة لتعويض السوائل.", "en": "Drink plenty of cool water or rehydration drinks.", "src": "nhs:heat" },
      { "t": "برد الجلد بماء فاتر أو مراوح ورشاشات مائية.", "en": "Cool skin with cool water spray or damp sponges.", "src": "nhs:heat" }
    ],
    "dont": [
      { "t": "لا تترك المصاب بالإجهاد الحراري دون مراقبة مستمرة لمدة 30 دقيقة.", "en": "Do not leave person unattended while cooling down.", "src": "nhs:heat" }
    ],
    "redFlags": [
      { "t": "توقف التعرق مع سخونة جلد جافة وارتفاع حرارة الجسم فوق 40م (ضربة شمس).", "en": "No sweating, hot dry skin, confusion (heatstroke)." }
    ],
    "whoToCall": [{ "label": "الإسعاف المصري", "number": "123" }],
    "sources": [{ "srcId": "nhs:heat", "grade": "NHS Direct" }]
  },
  {
    "id": "foot-friction-blister-management",
    "title": { "ar": "فقاقيع الاحتكاك بالقدم واليدين", "en": "Friction blister management and care" },
    "level": 1,
    "domain": "إصابات",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "فقاعة مائية على الجلد نتيجة احتكاك الحذاء أو الأدوات اليدوية.", "en": "Fluid-filled pocket of skin caused by friction." },
    "do": [
      { "t": "اغسل الفقاعة بماء وصابون وغطها بضمادة مرنة لحمايتها من الاحتكاك.", "en": "Wash area and cover blister with soft plaster.", "src": "nhs:sprain" },
      { "t": "اترك الفقاعة تلتئم طبيعياً تحت السقف الجلدي المحيط بها.", "en": "Allow blister to heal naturally intact.", "src": "nhs:sprain" }
    ],
    "dont": [
      { "t": "لا تفقأ أو تثقب الفقاعة بنفسك للوقاية من دخول البكتيريا.", "en": "Do not puncture or burst blister intentionally.", "src": "nhs:sprain" }
    ],
    "redFlags": [
      { "t": "تكون صديد أصفر أو احمرار شديد منتشر حول البثور.", "en": "Yellow pus or spreading red streak indicating infection." }
    ],
    "whoToCall": [{ "label": "طوارئ الصحة", "number": "137" }],
    "sources": [{ "srcId": "nhs:sprain", "grade": "NHS Direct" }]
  },
  {
    "id": "mild-food-poisoning-fluid-replacement",
    "title": { "ar": "التسمم الغذائي الخفيف وتنسيق السوائل", "en": "Mild food poisoning fluid replacement" },
    "level": 2,
    "domain": "صحّة",
    "who": ["الجميع"],
    "place": ["المنزل"],
    "summary": { "ar": "غثيان وإسهال خفيف بعد تناول وجبة غير آمنة — تعويض السوائل.", "en": "Nausea, vomiting, and diarrhea after contaminated food." },
    "do": [
      { "t": "ارتح واشرب رشفات صغيرة متكررة من الماء ومحلول الجفاف.", "en": "Rest and drink frequent small sips of water and ORS.", "src": "nhs:poisoning" },
      { "t": "تناول أطعمة خفيفة سهلة الهضم كالأرز المسلوق والخبز المحمص عند تحسن المعدة.", "en": "Eat bland foods like rice and toast when feeling ready.", "src": "nhs:poisoning" }
    ],
    "dont": [
      { "t": "لا تتناول مطهرات مئوية أو مضادات إسهال قوية دون استشارة طبية.", "en": "Do not take anti-diarrhea drugs without medical advice.", "src": "nhs:poisoning" }
    ],
    "redFlags": [
      { "t": "دم في البراز أو الإسهال الشديد المترابط مع حرارة عالية فوق 38.5م.", "en": "Blood in stool or severe high fever with diarrhea." }
    ],
    "whoToCall": [{ "label": "الإسعاف", "number": "123" }],
    "sources": [{ "srcId": "nhs:poisoning", "grade": "NHS Direct" }]
  }
];

injectSourcesAndItems(PATH_SCENARIOS, sources, cards, 'CARDS', 'id');

console.log('Waves S-3, S-4, S-5 completed successfully.');
