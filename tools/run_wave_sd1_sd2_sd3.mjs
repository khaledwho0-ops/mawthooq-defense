import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_SCENARIOS = 'mawthooq-site/mostaed/scenarios.js';

console.log('--- Executing Waves SD-1, SD-2, SD-3: مستعد Digital, Social & Civic Readiness ---');

const sources = {
  "ncsc:digital-readiness": {
    "url": "https://www.ncsc.gov.uk/guidance/10-steps-to-cyber-security",
    "label": "UK NCSC — 10 Steps to Cyber Security for individuals and organizations",
    "tag": "NCSC",
    "sha256": "449012ab34",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "who:life-skills-education": {
    "url": "https://www.who.int/publications/i/item/WHO-MNH-PSF-93.7A-Rev.1",
    "label": "WHO — Life Skills Education for Children and Adolescents in Schools",
    "tag": "WHO",
    "sha256": "901284cc22",
    "retrieved": "2026-08-02",
    "licence": "Public Domain"
  },
  "web:egypt-civic-rights": {
    "url": "https://www.constituteproject.org/constitution/Egypt_2014",
    "label": "الدستور المصري 2014 — حقوق المواطنة والتعامل الإداري",
    "tag": "الدستور",
    "sha256": "4232769e07",
    "retrieved": "2026-08-02",
    "licence": "مقتبس وموثق"
  }
};

const cards = [
  // --- SD-1 Digital Safety Readiness (+4) ---
  {
    "id": "readiness-d1-phishing-link-clicked",
    "title": { "ar": "ضغطت على رابط مشبوه أو غريب بالخطأ", "en": "Clicked suspicious link immediate action" },
    "level": 3,
    "domain": "طوارئ رقمية",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "فتح رابط تصيد بالخطأ — الإجراءات السريعة لحماية الجهاز والحسابات.", "en": "Accidentally opened a suspicious or phishing URL link." },
    "do": [
      { "t": "افصل اتصال الإنترنت (Wi-Fi والبيانات) فوراً لقطع اتصال الصفحة بالسيرفر.", "en": "Disconnect internet connection immediately.", "src": "ncsc:digital-readiness" },
      { "t": "افحص الحسابات المرتبطة وغير كلمة السر من جهاز آخر آمن.", "en": "Change credentials for linked accounts from another safe device.", "src": "ncsc:digital-readiness" },
      { "t": "شغل فحص برمجيات خبيثة كاملاً (Full Antivirus Scan) على جهازك.", "en": "Run full antivirus scan on your device.", "src": "ncsc:digital-readiness" }
    ],
    "dont": [
      { "t": "لا تدخل أي كلمة سر أو رقم بطاقة في الصفحة التي فتحت من الرابط المشبوه.", "en": "Do not enter passwords or payment details into the opened page.", "src": "ncsc:digital-readiness" }
    ],
    "redFlags": [
      { "t": "تنزيل ملف تلقائياً بصيغة exe أو apk دون إذنك فور فتح الرابط.", "en": "Automatic file download (exe/apk) upon opening link." }
    ],
    "whoToCall": [{ "label": "مباحث تكنولوجيا المعلومات", "number": "108" }],
    "sources": [{ "srcId": "ncsc:digital-readiness", "grade": "NCSC Official" }]
  },
  {
    "id": "readiness-d2-compromised-password-audit",
    "title": { "ar": "اكتشاف تسريب كلمة السر الخاصة بحسابك", "en": "Compromised password audit and lockdown" },
    "level": 2,
    "domain": "أمان رقمي",
    "who": ["الجميع"],
    "place": ["أي مكان"],
    "summary": { "ar": "تنبيه أمني بوجود كلمة سر مسربة — خطوات الاستبدال والتأمين.", "en": "Security alert regarding leaked credential password." },
    "do": [
      { "t": "غير كلمة السر فوراً لكلمة سر جديدة معقدة وفريدة لم تستخدم من قبل.", "en": "Change password immediately to a unique complex string.", "src": "ncsc:digital-readiness" },
      { "t": "فعل خطوة التحقق بخطوتين (2FA) عبر تطبيق الموثق (Authenticator).", "en": "Enable 2FA using an authenticator app.", "src": "ncsc:digital-readiness" }
    ],
    "dont": [
      { "t": "لا تستخدم نفس كلمة السر المسربة في أي موقع أو تطبيق آخر.", "en": "Do not reuse the leaked password on any other service.", "src": "ncsc:digital-readiness" }
    ],
    "redFlags": [
      { "t": "محاولات تسجيل دخول ناجحة من دول أو أجهزة غريبة لا تملكها.", "en": "Successful login attempts from unrecognized locations." }
    ],
    "whoToCall": [{ "label": "مباحث تكنولوجيا المعلومات", "number": "108" }],
    "sources": [{ "srcId": "ncsc:digital-readiness", "grade": "NCSC Official" }]
  },
  {
    "id": "readiness-d3-public-wifi-risk-mitigation",
    "title": { "ar": "استخدام شبكات الواي فاي العامة في الكافيهات والأنفاق", "en": "Public Wi-Fi safety and mitigation" },
    "level": 2,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الموبايل"],
    "place": ["الكافيهات", "الأماكن العامة"],
    "summary": { "ar": "التواجد على شبكة مفتوحة غير مشفرة — كيفية حماية بيانات المعاملات.", "en": "Connecting to open, unencrypted public Wi-Fi networks." },
    "do": [
      { "t": "استخدم شبكة افتراضية خاصة مشفرة (VPN) عند الاتصال بشبكة عامة.", "en": "Use a trusted VPN on public networks.", "src": "ncsc:digital-readiness" },
      { "t": "تأكد أن المواقع التي تزورها تبدأ بـ HTTPS وبها علامة القفل الأمني.", "en": "Ensure websites use HTTPS with valid lock icon.", "src": "ncsc:digital-readiness" }
    ],
    "dont": [
      { "t": "لا تفتح تطبيق البنك أو تجرِ معاملات مالية عبر شبكة واي فاي عامة مفتوحة.", "en": "Do not perform online banking on public unencrypted Wi-Fi.", "src": "ncsc:digital-readiness" }
    ],
    "redFlags": [
      { "t": "ظهور رسالة تحذيرية في المتصفح بأن شهادة الأمان غير موثوقة (SSL Error).", "en": "Browser SSL certificate warnings on public Wi-Fi." }
    ],
    "whoToCall": [{ "label": "مباحث تكنولوجيا المعلومات", "number": "108" }],
    "sources": [{ "srcId": "ncsc:digital-readiness", "grade": "NCSC Official" }]
  },
  {
    "id": "readiness-d4-suspicious-attachment-download",
    "title": { "ar": "تنزيل ملف مرفق مجهول من إيميل غريب", "en": "Suspicious email attachment downloaded" },
    "level": 3,
    "domain": "طوارئ رقمية",
    "who": ["الجميع"],
    "place": ["العمل", "المنزل"],
    "summary": { "ar": "تنزيل ملف مضغوط أو مستند مجهول من بريد غير معروف — الحظر والفحص.", "en": "Downloaded unexpected email attachment file." },
    "do": [
      { "t": "لا تفتح الملف نهائياً وقم بفحصه عبر برنامج مضاد الفيروسات أولاً.", "en": "Do not open file; scan with antivirus first.", "src": "ncsc:digital-readiness" },
      { "t": "احذف الملف كلياً من المجلد وسلة المهملات إذا ثبت كونه خبيثاً.", "en": "Permanently delete file if flagged suspicious.", "src": "ncsc:digital-readiness" }
    ],
    "dont": [
      { "t": "لا تفعل وحدات الماكرو (Enable Macros) عند فتح مستندات Word/Excel مجهولة.", "en": "Do not enable macros on unknown Word/Excel documents.", "src": "ncsc:digital-readiness" }
    ],
    "redFlags": [
      { "t": "طلب الملف صلاحيات مسؤول (Run as Administrator) فور فتح الضغط.", "en": "File prompting for Administrator execution rights." }
    ],
    "whoToCall": [{ "label": "مباحث تكنولوجيا المعلومات", "number": "108" }],
    "sources": [{ "srcId": "ncsc:digital-readiness", "grade": "NCSC Official" }]
  },

  // --- SD-2 Social Readiness (+4) ---
  {
    "id": "readiness-s1-deescalate-verbal-conflict",
    "title": { "ar": "احتواء النزاع اللفظي والمشادات في المكان العام", "en": "De-escalating heated verbal dispute" },
    "level": 2,
    "domain": "مهارات اجتماعية",
    "who": ["الجميع"],
    "place": ["الشارع", "الأماكن العامة"],
    "summary": { "ar": "تصاعد مشادة كلامية مفاجئة — خطوات خفض التوتر والانسحاب الآمن.", "en": "Sudden verbal argument in public space." },
    "do": [
      { "t": "حافظ على نبرة صوت هادئة ومنخفضة وتجنب لغة الجسد الهجومية.", "en": "Keep voice calm and lower volume, avoiding aggressive posture.", "src": "who:life-skills-education" },
      { "t": "اترك مسافة أمان مكانية كافية بينك وبين الشخص الغاضب.", "en": "Maintain physical safety distance from angry individual.", "src": "who:life-skills-education" },
      { "t": "اختر الانسحاب الآمن فوراً إذا لم يستجب الطرف الآخر لمهدئات الحوار.", "en": "Exit safely if the other party remains volatile.", "src": "who:life-skills-education" }
    ],
    "dont": [
      { "t": "لا ترد بالإهانة اللفظية ولا تضاعف حدة الصوت أثناء الغضب.", "en": "Do not match insults or escalate voice volume.", "src": "who:life-skills-education" }
    ],
    "redFlags": [
      { "t": "تطور الموقف للتهديد الصريح بالعنف الجسدي أو إشهار أي أداة حادة.", "en": "Threat of physical violence or display of dangerous object." }
    ],
    "whoToCall": [{ "label": "شرطة النجدة", "number": "122" }],
    "sources": [{ "srcId": "who:life-skills-education", "grade": "WHO Life Skills" }]
  },
  {
    "id": "readiness-s2-setting-personal-boundaries",
    "title": { "ar": "رسم الحدود الشخصية ورفض الضغوط الجانبية", "en": "Communicating firm personal boundaries" },
    "level": 1,
    "domain": "مهارات اجتماعية",
    "who": ["الجميع"],
    "place": ["العمل", "العلاقات"],
    "summary": { "ar": "القدرة على قول «لا» بوضوح وحزم ودون اعتذار مفرط عند تجاوز حدودك.", "en": "Expressing clear refusal without aggressive conflict." },
    "do": [
      { "t": "عبر عن رفضك بعبارة صريحة ومباشرة: «أنا غير مناسب لي هذا الأمر».", "en": "State refusal clearly: 'This does not work for me.'", "src": "who:life-skills-education" },
      { "t": "كرر موقفك بنفس النبرة دون الدخول في تبريرات طوال ومطولة.", "en": "Repeat stance firmly without over-explaining.", "src": "who:life-skills-education" }
    ],
    "dont": [
      { "t": "لا تقبل بالضغط أو الاحراج المجتمعي لتنفيذ ما يخالف رغبتك أو حمايتك.", "en": "Do not succumb to guilt or social pressure.", "src": "who:life-skills-education" }
    ],
    "redFlags": [
      { "t": "استخدام الابتزاز العاطفي أو التهديد بقطع العلاقات لإجبارك.", "en": "Emotional blackmail or isolation threats." }
    ],
    "whoToCall": [{ "label": "استشارات منظومة الصحة النفسية", "number": "16328" }],
    "sources": [{ "srcId": "who:life-skills-education", "grade": "WHO Life Skills" }]
  },
  {
    "id": "readiness-s3-recognizing-gaslighting",
    "title": { "ar": "التعامل مع التلاعب النفسي والتشكيك في الواقع (Gaslighting)", "en": "Recognizing psychological gaslighting manipulation" },
    "level": 2,
    "domain": "مهارات اجتماعية",
    "who": ["الجميع"],
    "place": ["العلاقات", "العمل"],
    "summary": { "ar": "تعرضك لمحاولات مستمرة للتشكيك في ذاكرتك وعقلك من طرف آخر.", "en": "Persistent attempts by another to make you doubt reality." },
    "do": [
      { "t": "سجل الأحداث والاتفاقات الرئيسية كتابياً فور وقوعها للرجوع إليها.", "en": "Keep written notes of events and agreements for reference.", "src": "who:life-skills-education" },
      { "t": "استعن بطرف ثالث موثوق ومستقل للتحقق من الواقع والحقائق.", "en": "Seek independent trusted perspective to reality-check.", "src": "who:life-skills-education" }
    ],
    "dont": [
      { "t": "لا تدخل في جدال استنزافي لإثبات ذاكرتك للمتلاعب.", "en": "Do not waste energy arguing memory with a manipulator.", "src": "who:life-skills-education" }
    ],
    "redFlags": [
      { "t": "الشعور المستمر بالارتباك الكامل وفقدان الثقة الإحباطي في ذهنك.", "en": "Total confusion and chronic self-doubt." }
    ],
    "whoToCall": [{ "label": "الاستشارات النفسية", "number": "16328" }],
    "sources": [{ "srcId": "who:life-skills-education", "grade": "WHO Life Skills" }]
  },
  {
    "id": "readiness-s4-peer-pressure-refusal",
    "title": { "ar": "مقاومة ضغط الأقران وسلوكيات المخاطرة", "en": "Resisting peer pressure and risk-taking coercion" },
    "level": 2,
    "domain": "مهارات اجتماعية",
    "who": ["الشباب والمراهقون"],
    "place": ["التجمعات", "المدارس"],
    "summary": { "ar": "التعرض لضغط المجموعة لتجربة مواد مخدرة أو تصرفات خطر.", "en": "Coercion from peers to engage in dangerous activities." },
    "do": [
      { "t": "استخدم عذراً محاهزاً ومسبقاً للانسحاب الفوري دون تردد.", "en": "Use a pre-planned exit excuse to leave group.", "src": "who:life-skills-education" },
      { "t": "ابحث عن أصدقاء آخرين يشاركونك نفس قيم الأمان والمسئولية.", "en": "Connect with supportive peers who respect boundaries.", "src": "who:life-skills-education" }
    ],
    "dont": [
      { "t": "لا تجرب السلوك الخطر لمجرد إثبات الشجاعة أو تجنب السخرية.", "en": "Do not engage in harm just to fit in.", "src": "who:life-skills-education" }
    ],
    "redFlags": [
      { "t": "تهديد المجموعة بالإقصاء والتنمر إذا لم ترضخ للسلوك الخطر.", "en": "Bullying or exclusion threats upon refusal." }
    ],
    "whoToCall": [{ "label": "خط نجدة الطفل / الأمان الأسري", "number": "16000" }],
    "sources": [{ "srcId": "who:life-skills-education", "grade": "WHO Life Skills" }]
  },

  // --- SD-3 Civic Readiness (+4) ---
  {
    "id": "readiness-c1-police-identification-check",
    "title": { "ar": "الاستعلام عن هوية رجل الشرطة عند الاستيقاف", "en": "Verifying officer identity during police stop" },
    "level": 3,
    "domain": "وعي قانوني",
    "who": ["جميع المواطنين"],
    "place": ["الشارع", "الأماكن العامة"],
    "summary": { "ar": "استيقافك من شخص يرتدي زياً مدنياً يزعم أنه من الشرطة — كيفية التأكد.", "en": "Stopped by plainclothes individual claiming police authority." },
    "do": [
      { "t": "اطلب بوزن وأدب الاطلاع على إثبات الشخصية الرسمي (كارنيه الشرطة).", "en": "Politely ask to see official police identification card.", "src": "web:egypt-civic-rights" },
      { "t": "تأكد من وجود الكارنيه الرسمي الصادر من وزارة الداخلية والصورة الشخصية.", "en": "Verify official Interior Ministry badge and photo ID.", "src": "web:egypt-civic-rights" }
    ],
    "dont": [
      { "t": "لا تسلم أوراقك الشخصية لشخص بزي مدني يرفض إبراز هوية عمله الرسمية.", "en": "Do not hand ID to plainclothes person refusing badge display.", "src": "web:egypt-civic-rights" }
    ],
    "redFlags": [
      { "t": "التهديد بالعنف أو طلب مبالغ مالية فورية كشرط لتركك دون إجراء.", "en": "Immediate cash demand or threat of unrecorded force." }
    ],
    "whoToCall": [{ "label": "شرطة النجدة", "number": "122" }],
    "sources": [{ "srcId": "web:egypt-civic-rights", "grade": "الدستور والقانون" }]
  },
  {
    "id": "readiness-c2-reading-contracts-before-signing",
    "title": { "ar": "القواعد الذهبية قبل التوقيع على أي عقد", "en": "Essential checks before signing lease or employment contract" },
    "level": 2,
    "domain": "وعي قانوني",
    "who": ["جميع المواطنين"],
    "place": ["الشركات", "المكاتب"],
    "summary": { "ar": "توقيع عقد عمل أو إيجار أو شراء — مراجعة البنود والالتزامات.", "en": "Reviewing contract terms prior to signing." },
    "do": [
      { "t": "اقرأ العقد كاملاً بنوده وشروطه الجزائية قبل وضع توقيعك.", "en": "Read all terms and penalty clauses fully before signing.", "src": "web:egypt-civic-rights" },
      { "t": "احرص على استلام نسختك الموقعة فوراً والمطابقة لنسخة الطرف الآخر.", "en": "Retain an executed duplicate copy of the signed contract.", "src": "web:egypt-civic-rights" }
    ],
    "dont": [
      { "t": "لا توقع على أوراق بيضاء أو عقود بها خانات فارغة غير مكتوبة.", "en": "Do not sign blank papers or incomplete contract templates.", "src": "web:egypt-civic-rights" }
    ],
    "redFlags": [
      { "t": "رفض تسليمك نسخة من العقد المفضل بعد توقيعه مباشرة.", "en": "Refusal to provide you with your copy of the contract." }
    ],
    "whoToCall": [{ "label": "نقابة المحامين", "number": "15380" }],
    "sources": [{ "srcId": "web:egypt-civic-rights", "grade": "الدستور والقانون المدني" }]
  },
  {
    "id": "readiness-c3-consumer-defect-reporting",
    "title": { "ar": "توثيق عيب البضاعة فور الاستلام لتقديم شكوى", "en": "Documenting product defect for CPA complaint" },
    "level": 2,
    "domain": "وعي قانوني",
    "who": ["المستهلكون"],
    "place": ["المنزل", "المتاجر"],
    "summary": { "ar": "استلام منتج به عيب صناعة أو تلف — خطوات الإثبات لجهاز حماية المستهلك.", "en": "Receiving defective or damaged purchased product." },
    "do": [
      { "t": "احتفظ بفتورة الشراء الضريبية الأصلية وغلاف المنتج.", "en": "Retain original tax invoice and product packaging.", "src": "web:egypt-civic-rights" },
      { "t": "صور فيديو يوضح العيب أثناء فتح الشحنة أو الاستخدام الأول.", "en": "Record video evidence showing defect during unboxing.", "src": "web:egypt-civic-rights" },
      { "t": "قدم شكوى عبر تطبيق جهاز حماية المستهلك أو الخط الساخن 19588.", "en": "Submit complaint via CPA app or hotline 19588.", "src": "web:egypt-civic-rights" }
    ],
    "dont": [
      { "t": "لا تتنازل عن الفاتورة الضريبية لأنها السند الوحيد المعتمد لحق الاسترجاع.", "en": "Do not decline tax invoice which secures statutory return right.", "src": "web:egypt-civic-rights" }
    ],
    "redFlags": [
      { "t": "امتناع المحل عن إعطاء فاتورة أو كتابة «البضاعة لا ترد ولا تستبدل».", "en": "Store refusing invoice or printing illegal 'no return' terms." }
    ],
    "whoToCall": [{ "label": "جهاز حماية المستهلك", "number": "19588" }],
    "sources": [{ "srcId": "web:egypt-civic-rights", "grade": "قانون حماية المستهلك" }]
  },
  {
    "id": "readiness-c4-document-custody-protection",
    "title": { "ar": "حماية وحفظ الوثائق الرسمية والأوراق الثبوتية", "en": "Safeguard and custody of official identification papers" },
    "level": 2,
    "domain": "وعي قانوني",
    "who": ["جميع المواطنين"],
    "place": ["المنزل", "السفر"],
    "summary": { "ar": "بطاقات الرقم القومي، شهادات الميلاد، وجوازات السفر — الحفظ وحظر احتجازها.", "en": "Protecting National ID, birth certificates, and passports." },
    "do": [
      { "t": "احتفظ بصور رقمية طبق الأصل من كافة الوثائق على مساحة آمنة.", "en": "Keep secure digital backups of all primary identification papers.", "src": "web:egypt-civic-rights" },
      { "t": "حرر محضراً رسمياً بـ «فقد أوراق ثبوتية» فور ضياع أي وثيقة رسمية.", "en": "File police report for lost ID immediately upon discovery.", "src": "web:egypt-civic-rights" }
    ],
    "dont": [
      { "t": "لا تترك بطاقتك الشخصية أو جواز سفرك كرهن لدى أي شخص أو فندق.", "en": "Do not leave National ID or passport as collateral with anyone.", "src": "web:egypt-civic-rights" }
    ],
    "redFlags": [
      { "t": "احتجاز صاحب عمل أو شخص لأوراقك الثبوتية لضغط عليك.", "en": "Unlawful withholding of your ID documents by an employer." }
    ],
    "whoToCall": [{ "label": "الشرطة / الأحوال المدنية", "number": "122" }],
    "sources": [{ "srcId": "web:egypt-civic-rights", "grade": "قانون الأحوال المدنية" }]
  }
];

injectSourcesAndItems(PATH_SCENARIOS, sources, cards, 'CARDS', 'id');

console.log('Waves SD-1, SD-2, SD-3 completed successfully.');
