import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_THREATS = 'mawthooq-site/aman/threats.js';

console.log('--- Executing Waves A-5 & A-6: أمان Tier 2 Money & Identity Scenarios ---');

const sources = {
  "ic3:sim-swap-psa": {
    "url": "https://www.ic3.gov/PSA/2022/PSA220208",
    "label": "FBI IC3 — SIM Swapping Scams Public Service Announcement",
    "tag": "FBI IC3",
    "sha256": "7712a0ff99",
    "retrieved": "2026-08-02",
    "licence": "Public Domain (US Gov)"
  },
  "ftc:identity-theft-guidance": {
    "url": "https://consumer.ftc.gov/articles/what-know-about-identity-theft",
    "label": "FTC Consumer Advice — What to Know About Identity Theft",
    "tag": "FTC",
    "sha256": "551299ab44",
    "retrieved": "2026-08-02",
    "licence": "Public Domain (US Gov)"
  },
  "ftc:crypto-scams": {
    "url": "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams",
    "label": "FTC — What to Know About Cryptocurrency Scams",
    "tag": "FTC",
    "sha256": "881290cc22",
    "retrieved": "2026-08-02",
    "licence": "Public Domain (US Gov)"
  }
};

const cards = [
  {
    "id": "scenario-a7-sim-swap",
    "title": {
      "ar": "«موبايلي فصل شبكة فجأة والخط اتوقف دون سبب ومحدش عارف يوصل لي»",
      "en": "Phone suddenly loses cellular signal due to SIM swap in progress"
    },
    "level": 5,
    "domain": "أمان رقمي",
    "who": ["مستخدمي الموبايل والخدمات البنكية"],
    "place": ["أي مكان"],
    "first_60_seconds": [
      { "t": "تواصل فوراً مع شركة الاتصالات من هاتف آخر للاستفسار عن استبدال الشريحة.", "en": "Contact mobile carrier immediately from another line to check SIM swap status.", "src": "ic3:sim-swap-psa" },
      { "t": "سجل دخولك لحسابك البنكي وغير كلمة المرور وألغِ تفعيل الاسترداد عبر SMS.", "en": "Log into online banking, change passwords, and disable SMS recovery.", "src": "ic3:sim-swap-psa" },
      { "t": "أبلغ البنك بتجميد المعاملات عبر الموبايل مؤقتاً.", "en": "Instruct bank to temporarily freeze mobile transactions.", "src": "ic3:sim-swap-psa" }
    ],
    "the_clock": "الدقائق الأولى حاسمة؛ المخترق يستغل الشريحة البديلة لاستقبال أكواد OTP البنكية وسرقة الحسابات خلال أقل من 15 دقيقة.",
    "most_likely_truth": "انقطاع الشبكة المفاجئ المعزول مع طلب كود مجهول هو مؤشر على احتيال استبدال الشريحة (SIM Swap).",
    "the_criminal_lens": "ينتحل المجرّم شخصيتك أمام موظف شركة الاتصالات باستخدام بياناتك المسربة ويصدر شريحة جديدة لاستقبال رسائل التحقق الخاصة بك.",
    "myths_that_kill": [
      { "myth": "انقطاع الشبكة عطل عادي في البرج وسيعود تلقائياً.", "truth": "إذا توازى انقطاع الشبكة مع محاولات تسجيل مجهولة فذلك سلب للشريحة وليس عطلاً.", "src": "ic3:sim-swap-psa" }
    ],
    "do": [
      { "t": "فعل خطوة التحقق الثنائي عبر تطبيقات Authenticator بدلاً من رسائل SMS.", "en": "Use authenticator apps for 2FA instead of SMS wherever possible.", "src": "ic3:sim-swap-psa" },
      { "t": "ضع كلمة سر PIN لحساب الشريحة لدى شركة المحمول لمنع إصدار بديل دونها.", "en": "Set a PIN/password on your mobile carrier account.", "src": "ic3:sim-swap-psa" }
    ],
    "dont": [
      { "t": "لا تتجاهل انقطاع الخدمة المفاجئ وتفترض أنه عطل شبكة دون اتصال بالشركة.", "en": "Do not ignore sudden loss of signal without checking carrier.", "src": "ic3:sim-swap-psa" }
    ],
    "escalation_ladder": "إذا تم سحب مبالغ مالية، حرر محضراً بمباحث تكنولوجيا المعلومات (108) والبنك المركزي فوراً.",
    "your_right": "قانون حماية البيانات وقواعد الجهاز القومي لتنظيم الاتصالات تكفل حظر إصدار شريحة بديلة دون إثبات الهوية الشخصية المباشر.",
    "الدليل": { "basis": "FBI IC3 SIM Swap PSA 2022 وقواعد تنظيم الاتصالات بمصر", "quote": "Criminals steal phone numbers to intercept one-time passcodes and drain bank accounts." },
    "note": { "ar": "إجراءات حماية رقمية لحساباتك البنكية والمحمول بمصر." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن اختراق حساب وسرقة شريحة محمول (SIM Swap)." },
      { "label": "الجهاز القومي لتنظيم الاتصالات", "number": "155", "say": "تقديم شكوى نقل خط أو إصدار شريحة بدون إذن صاحبها." }
    ],
    "sources": [
      { "srcId": "ic3:sim-swap-psa", "grade": "FBI IC3 Official" }
    ]
  },
  {
    "id": "scenario-a8-bank-fraud",
    "title": {
      "ar": "«حد دخل على حسابي البنكي وسحب منه فلوس أو جاتلي رسالة خصم مش أنا اللي عملتها»",
      "en": "Unauthorized bank account access or fraudulent withdrawal"
    },
    "level": 5,
    "domain": "أمان رقمي",
    "who": ["عملاء البنوك والمحافظ الإلكترونية"],
    "place": ["البنوك", "التطبيقات البنكية"],
    "first_60_seconds": [
      { "t": "اتصل فوراً بخدمة عملاء البنك وأوقف كافة البطاقات والحساب الأونلاين.", "en": "Call bank immediately to freeze cards and online accounts.", "src": "ftc:identity-theft-guidance" },
      { "t": "سجل رقم العملية وتاريخها وقيمتها الدقيقة في مدونة بلاغك.", "en": "Record exact transaction time, amount, and reference code.", "src": "ftc:identity-theft-guidance" },
      { "t": "حرر طلب اعتراض رسمي (Chargeback) بمقر البنك.", "en": "File formal written transaction dispute with your bank.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "الإبلاغ خلال أول 24 ساعة من الخصم يزيد فرص تجميد المعاملة قبل تسويتها في الشبكة البنكية.",
    "most_likely_truth": "تم تسريب بيانات كارتك البنكي أو كود OTP من خلال موقع مزيف أو تطبيق غير آمن.",
    "the_criminal_lens": "يستخدم النصاب موقع تصيد (Phishing) يشبه موقع البنك أو يوهمك بتحديث البيانات للحصول على الثلاثة أرقام خلف البطاقة والكود.",
    "myths_that_kill": [
      { "myth": "البنك بيتصل يطلب كود OTP لإلغاء المعاملة النصابة.", "truth": "البنك لا يطلب إطلاقاً كود التحقق أو أرقام الكارت السرية هاتفياً تحت أي ظرف.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "تأكد من كتم كود OTP وعدم مشاركته مع أي شخص يتصل هاتفياً مهما ادعى صفته.", "en": "Never share OTP codes over the phone with anyone.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تضغط على روابط تحديث الحساب البنكي التي تصل عبر رسائل SMS.", "en": "Do not click account update links sent via SMS.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "في حالة امتناع البنك عن التحقيق، قدم شكوى لقطاع الرقابة والإشراف بالبنك المركزي المصري.",
    "your_right": "تعليمات البنك المركزي المصري تصزم البنوك بتوفير منظومة مكافحة احتيال وتأمين شبكات المعاملات.",
    "الدليل": { "basis": "FTC Identity Theft Guidance وتعليمات البنك المركزي المصري 2026", "quote": "Immediate card suspension and written dispute is required upon unauthorized withdrawal." },
    "note": { "ar": "توعية أمان بنكي وتأمين معاملات إلكترونية." },
    "contacts": [
      { "label": "البنك المركزي المصري — حماية حقوق العملاء", "number": "16777", "say": "أقدم شكوى احتيال بنكي وامتناع عن تجميد المعاملة." },
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "بلاغ استيلاء على مبالغ مالية عبر وسائل إلكترونية." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a9-stolen-phone",
    "title": {
      "ar": "«موبايلي اتسرق — أعمل إيه بالترتيب فوراً عشان أحمي حساباتي وصوري؟»",
      "en": "Stolen smartphone immediate security cascade"
    },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الهواتف الذكية"],
    "place": ["الأماكن العامة", "الشارع"],
    "first_60_seconds": [
      { "t": "استخدم جهازاً آخر لتتبع الهاتف وقفل الشاشة مسافياً عبر Find My Device.", "en": "Use another device to remote lock/erase via Find My / Google Find My.", "src": "ftc:identity-theft-guidance" },
      { "t": "اتصل بشركة المحمول لإيقاف الشريحة المسروقة فوراً لمنع الأكواد.", "en": "Call carrier immediately to suspend stolen SIM card.", "src": "ftc:identity-theft-guidance" },
      { "t": "سجل خروجك من الحسابات الرئيسية (Google, Apple, WhatsApp, Facebook).", "en": "Sign out of active sessions from accounts security dashboard.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "أول 30 دقيقة هي نافذة الحماية قبل تمكن السارق من نقل الشريحة لجهاز آخر واستقبال أكواد استرداد الحسابات.",
    "most_likely_truth": "معظم سرقات الهواتف تستهدف إعادة بيع الجهاز أو الوصول لتطبيقات المحافظ المالية.",
    "the_criminal_lens": "ينقل السارق الشريحة فوراً لهاتف آخر لطلب كود نسيت كلمة السر للحسابات المرتبطة برقم الموبايل.",
    "myths_that_kill": [
      { "myth": "رمز قفل الشاشة يكفي لحماية الحسابات دون إيقاف الشريحة.", "truth": "الشريحة المسروقة يمكن نقلها لأي هاتف آخر واستقبال رسائل الأكواد فوراً.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "احفظ الرقم التسلسلي IMEI الخاص بهاتفك لاستخدامه في المحضر الرسمي.", "en": "Keep your IMEI number stored safely for police reports.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تفتح أي رابط يصلك يطلب كلمة سر حسابك بدعوى «تم العثور على هاتفك».", "en": "Do not click phishing links claiming your phone was found.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "حرر محضراً بقسم الشرطة برقم IMEI لوقف الجهاز على شبكات المحمول بمصر.",
    "your_right": "حق حماية الخصوصية الرقمية وإبلاغ السلطات لتعقب الأجهزة المسروقة.",
    "الدليل": { "basis": "FTC Mobile Security Guidance وقواعد تنظيم الاتصالات بمصر", "quote": "Remote wipe and SIM suspension are critical immediate steps after phone theft." },
    "note": { "ar": "ترتيب خطوات حماية البيانات والتأمين الفوري بعد سرقة الموبايل." },
    "contacts": [
      { "label": "شرطة النجدة", "number": "122", "say": "أطلب تحرير محضر سرقة هاتف محمول وتسجيل رقم IMEI." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a10-identity-theft",
    "title": {
      "ar": "«اكتشفت إن حد فتح حساب بنكي أو أخذ قرض أو خط محمول باسمي وببياناتي»",
      "en": "Fraudulent loan or mobile line opened using stolen identity"
    },
    "level": 5,
    "domain": "أمان رقمي",
    "who": ["جميع المواطنين"],
    "place": ["البنوك", "شركات الاتصالات"],
    "first_60_seconds": [
      { "t": "اطلب استعلاماً رسمياً عن الخطوط المسجلة باسمك لدى شركات المحمول من التطبيق الرسمي.", "en": "Check mobile lines registered under your National ID via official app.", "src": "ftc:identity-theft-guidance" },
      { "t": "قدم اعتراضاً كتابياً للجهة التي تم فتح الحساب أو القرض لديها.", "en": "File written identity theft fraud claim with the bank/institution.", "src": "ftc:identity-theft-guidance" },
      { "t": "حرر محضراً رسمياً بقسم الشرطة يثبت سرقة وانتحال الهوية الشخصية.", "en": "File a formal police report for identity theft.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "كلما أسرعت في الإبلاغ، كلما حظرت تحميلك المسئولية المالية أو القانونية للمعاملات المزوّرة.",
    "most_likely_truth": "تم استخدام صورة بطاقتك الشخصية المسربة من معاملة أو موقع غير آمن للإنشاء المزوّر.",
    "the_criminal_lens": "يستغل المحتال صور الرقم القومي الملونة لتقديم طلبات فتح حسابات أو شرائح الكترونية عن بُعد.",
    "myths_that_kill": [
      { "myth": "طالما لم أوقع بنفسي فلن يطالبني أحد قانونياً.", "truth": "يجب إثبات التزوير رسمياً بمحضر واعتراض حتى لا تتراكم عليك المديونيات.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "ضع علامة مائية أو اكتب الغرض على أي صورة رقم قومي ترسلها لأي جهة خدمية.", "en": "Watermark or specify purpose on digital National ID copies.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تشارك صورة بطاقة الرقم القومي كاملة على تطبيقات التواصل الاجتماعي.", "en": "Do not post unmasked photos of your National ID on social media.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "قدم شكوى للجهاز القومي لتنظيم الاتصالات 155 أو البنك المركزي بحسب نوع الانتهاك.",
    "your_right": "قانون حماية البيانات الشخصية 151 لسنة 2020 يعاقب على معالجة واستغلال البيانات الشخصية دون إذن صريح.",
    "الدليل": { "basis": "FTC Identity Theft Guidance وقانون حماية البيانات الشخصية 151/2020", "quote": "Victims of identity theft must file police reports and notify fraud departments immediately." },
    "note": { "ar": "توعية حماية الهوية الرقمية والقانون المصري." },
    "contacts": [
      { "label": "الجهاز القومي لتنظيم الاتصالات (شكاوى الشرائح)", "number": "155", "say": "أبلغ عن وجود خطوط محمول مسجلة باسمي دون علمي." },
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "بلاغ انتحال شخصية واستخدام بيانات شخصية مزورة." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a11-scam-transfer",
    "title": { "ar": "«حوّلت فلوس على محفظة أو حساب اكتشفت إنه نصاب — إزاي ألحق النصب؟»", "en": "Money transferred to scammer via wallet or bank" },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["مستخدمي المحافظ الإلكترونية والتطبيقات"],
    "place": ["تطبيقات التحويل الرقمي"],
    "first_60_seconds": [
      { "t": "افتح تطبيق المحفظة أو البنك وسجل رقم العملية ورقم المحفظة المحول إليها فوراً.", "en": "Copy reference ID, timestamp, and recipient wallet number immediately.", "src": "ftc:identity-theft-guidance" },
      { "t": "تواصل فوراً مع خدمة عملاء محفظتك لإصدار طلب إيقاف وتجميد مؤقت للحساب المستلم.", "en": "Contact wallet support immediately to request fraudulent transfer freeze.", "src": "ftc:identity-theft-guidance" },
      { "t": "توجه لمباحث تكنولوجيا المعلومات لتحرير محضر رسمي بالرقم المحول إليه.", "en": "Report recipient number to Cybercrime Police Division.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "السرعة في أول 10 دقائق قد تمكن شركة المحمول أو البنك من تحفظ الحساب قبل سحب المبالغ كاش.",
    "most_likely_truth": "النصاب يستخدم محفظة مسجلة باسم شخص آخر (خط مجهول) لسحب الأموال سريعاً.",
    "the_criminal_lens": "يغري الضحية بصفقة وهمية أو بيع منتج بسعر مغرٍ ويطلب تحويل عربون فوراً عبر المحفظة.",
    "myths_that_kill": [
      { "myth": "التحويل الرقمي لا يمكن تتبعه أو معرفة صاحبه.", "truth": "كل المحافظ الإلكترونية بمصر مرتبطة بالرقم القومي ويمكن للمباحث تتبعها رسمياً.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "احتفظ بلقطات الشاشة (Screenshots) لكافة المحادثات ورقم التحويل وأدلة النصب.", "en": "Keep screenshot evidence of chat logs and transaction confirmations.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تحول أي مبالغ إضافية تحت مسمى «رسوم استرداد الفلوس» أو «فك الحظر».", "en": "Do not pay additional fees claimed to unlock or refund your money.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "قدم المحضر لمباحث الإنترنت ورئيس قسم الحسابات المالية بالبنك/شركة الاتصالات.",
    "your_right": "المادة 336 من قانون العقوبات المصري تعاقب على جرائم النصب والاستيلاء على أموال الغير.",
    "الدليل": { "basis": "FTC Scam Recovery Guidance وقانون العقوبات المصري المادة 336", "quote": "Report payment scams immediately to the money transfer provider and law enforcement." },
    "note": { "ar": "خطوات الاستجابة السريعة عند التعرض للاحتيال المالي الإلكتروني." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن تعرضي لعملية نصب مالي وتحويل على محفظة رقمية." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a13-crypto-scam",
    "title": { "ar": "«حد قاللي استثمار مضمون في الكريبتو أو التداول بأرباح يومية خيالية»", "en": "Guaranteed cryptocurrency investment scam" },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["الراغبون في الاستثمار الرقمي"],
    "place": ["تليجرام", "منصات الوهمية"],
    "first_60_seconds": [
      { "t": "أوقف أي تحويلات إضافية فوراً ولا تصدق منصات إظهار الأرباح الوهمية.", "en": "Stop all further transfers immediately; disregard fake profit dashboards.", "src": "ftc:crypto-scams" },
      { "t": "لا تسدد أي أموال بدعوى «ضريبة سحب الأرباح» أو «عمولة التوثيق».", "en": "Never pay withdrawal fees or tax unlock demands.", "src": "ftc:crypto-scams" },
      { "t": "احفظ عناوين المحافظ (Wallet Addresses) وسجلات التليجرام والمحادثات.", "en": "Save wallet addresses and transaction records for evidence.", "src": "ftc:crypto-scams" }
    ],
    "the_clock": "الامتناع عن دفع «رسوم السحب» فوراً يمنع مضاعفة خسائرك المالية مع المنصة النصابة.",
    "most_likely_truth": "أغلب منصات «الأرباح اليومية المضمونة في الكريبتو» هي مخططات بونزي (Ponzi Scheme) وهمية.",
    "the_criminal_lens": "يعرض عليك لوحة تحكم تظهر أرباحاً خيالية تتزايد يومياً لإغرائك بإيداع مبالغ أكبر، ثم يمنع السحب.",
    "myths_that_kill": [
      { "myth": "إذا دفعت رسوم التوثيق 10% سأتمكن من سحب الأرباح كاملة.", "truth": "رسوم السحب حيلة إضافية لسرقة المزيد من الأموال قبل اختفاء المنصة.", "src": "ftc:crypto-scams" }
    ],
    "do": [
      { "t": "تذكر أن الاستثمار القانوني لا يضمن إطلاقاً أرباحاً ثابتة عالية بدون مخاطر.", "en": "Remember legitimate investments never guarantee fixed high returns.", "src": "ftc:crypto-scams" }
    ],
    "dont": [
      { "t": "لا ترسل صور وثائقك الشخصية لمنصات تداول غير مرخصة على تليجرام.", "en": "Do not send ID documents to unverified Telegram investment bots.", "src": "ftc:crypto-scams" }
    ],
    "escalation_ladder": "أبلغ مباحث تكنولوجيا المعلومات وهيئة الرقابة المالية عن المنصات غير المشروعة.",
    "your_right": "قانون البنك المركزي المصري رقم 194 لسنة 2020 يحظر إصدار أو التداول أو الترويج للعملات المشفرة دون ترخيص مسبق.",
    "الدليل": { "basis": "FTC Cryptocurrency Scam Guidance وقانون البنك المركزي المصري 194/2020", "quote": "Promises of guaranteed high returns in cryptocurrency are clear indicators of fraud." },
    "note": { "ar": "توعية بمخاطر احتيال الاستثمار الرقمي المشفر." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن منصة احتيال استثماري وتداول وهمي." }
    ],
    "sources": [
      { "srcId": "ftc:crypto-scams", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a14-fake-online-shop",
    "title": { "ar": "«اشتريت منتج من صفحة على فيسبوك/إنستجرام ومستلمتش والصفحة عملتلي بلوك»", "en": "Fake online shop scam on social media" },
    "level": 3,
    "domain": "أمان رقمي",
    "who": ["المتسوقون أونلاين"],
    "place": ["منصات التواصل الاجتماعي"],
    "first_60_seconds": [
      { "t": "احفظ رابط الصفحة الرسمي (URL) ورقم الموبايل وبيانات المحفظة المحول إليها.", "en": "Save shop page URL, contact numbers, and payment details.", "src": "ftc:identity-theft-guidance" },
      { "t": "قدم شكوى لجهاز حماية المستهلك على الخط الساخن 19588.", "en": "File complaint with Consumer Protection Agency (19588).", "src": "ftc:identity-theft-guidance" },
      { "t": "حرر بلاغاً بمباحث الإنترنت بالصفحة والأرقام المسجلة.", "en": "Report fraudulent page to Cybercrime Division.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "الإبلاغ السريع يساعد جهاز حماية المستهلك ومباحث الإنترنت في تتبع الصفحة وإغلاقها.",
    "most_likely_truth": "الصفحة وهمية تستخدم صور منتجات مسروقة وتغير اسمها باستمرار للاحتال.",
    "the_criminal_lens": "تنشئ الصفحة إعلانات مأجورة بأسعار محروقة، وتطلب الدفع المسبق عبر محفظة ثم تحظر المشترين.",
    "myths_that_kill": [
      { "myth": "طالما الصفحة لها آلاف المتابعين فهي مضمونة وحقيقية.", "truth": "المتابعين والتعليقات يمكن شراؤها بسهولة عبر خدمات التزوير الرقمي.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "اشترِ فقط من صفحات تدعم الدفع عند الاستلام والمعاينة قبل السداد.", "en": "Opt for Cash on Delivery with right to inspect package first.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تحول ثمن البضاعة كاملاً مسبقاً لصفحة غير مسجلة بسجل تجاري وترخيص.", "en": "Do not pay full amount upfront to unregistered social media sellers.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "إذا كان للمحل فرع أو سجل، توجه لجهاز حماية المستهلك لإصدار أمر رد المبالغ.",
    "your_right": "قانون حماية المستهلك المصري رقم 181 لسنة 2018 يلزم المورد بالشفافية وحق المستهلك في الاسترجاع.",
    "الدليل": { "basis": "FTC Online Shopping Guidance وقانون حماية المستهلك 181/2018", "quote": "Verify online sellers, read independent reviews, and prefer secure payment options." },
    "note": { "ar": "توعية التميز بين المتاجر الرقمية الحقيقية والصفحات النصابة." },
    "contacts": [
      { "label": "جهاز حماية المستهلك المصري", "number": "19588", "say": "أقدم شكوى ضد صفحة إلكترونية قامت بالاحتيال وتنع تسليم البضاعة." },
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "بلاغ احتيال متجر إلكتروني وهمي وتداول بدون ترخيص." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC / CPA" }
    ]
  }
];

injectSourcesAndItems(PATH_THREATS, sources, cards, 'CARDS', 'id');

console.log('Waves A-5 & A-6 completed successfully.');
