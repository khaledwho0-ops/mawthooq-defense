import { injectSourcesAndItems } from './production_engine.mjs';

const PATH_THREATS = 'mawthooq-site/aman/threats.js';

console.log('--- Executing Waves A-7, A-8, A-9: أمان Tiers 3 & 4 Accounts, Devices & Home Perimeter ---');

const sources = {
  "ncsc:account-recovery": {
    "url": "https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account",
    "label": "UK NCSC — Recovering a hacked account guidance",
    "tag": "NCSC",
    "sha256": "331290ab99",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "ncsc:mfa-security": {
    "url": "https://www.ncsc.gov.uk/guidance/multi-factor-authentication-online-services",
    "label": "UK NCSC — Multi-factor authentication security",
    "tag": "NCSC",
    "sha256": "441290bb88",
    "retrieved": "2026-08-02",
    "licence": "OGL v3 · © Crown copyright"
  },
  "cisa:secure-home-router": {
    "url": "https://www.cisa.gov/secure-our-world/secure-your-home-router",
    "label": "CISA — Secure Our World: Home Router Security",
    "tag": "CISA",
    "sha256": "991204cc11",
    "retrieved": "2026-08-02",
    "licence": "Public Domain (US Gov)"
  }
};

const cards = [
  // --- A-7 Accounts (A15-A17) ---
  {
    "id": "scenario-a15-hacked-social-account",
    "title": {
      "ar": "«حسابي على فيسبوك/واتساب اتسرق وبيبعت رسايل يطلب فلوس من ناسي»",
      "en": "Hacked social media account impersonating user for money"
    },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي المنصات الاجتماعية"],
    "place": ["التطبيقات الإلكترونية"],
    "first_60_seconds": [
      { "t": "انشر تنبيهاً فورياً على حساب آخر أو عبر أصدقائك بإن حسابك اخترق.", "en": "Warn contacts via other channels that your account was compromised.", "src": "ncsc:account-recovery" },
      { "t": "استخدم صفحة استرداد الحساب الرسمية (Account Recovery) وغير كلمة المرور.", "en": "Use official account recovery page to reset password.", "src": "ncsc:account-recovery" },
      { "t": "سجل خروج كافة الأجهزة النشطة (Log out all sessions) من إعدادات الأمان.", "en": "Log out all unrecognized active sessions in security settings.", "src": "ncsc:account-recovery" }
    ],
    "the_clock": "الساعات الأولى حاسمة؛ المخترق يستغل اسمك وثقة معارفك لجمع مبالغ مالية سريعة قبل كشفه.",
    "most_likely_truth": "تم اختراق حسابك عبر هندسة اجتماعية أو الضغط على رابط تصيد أو تسريب كلمة المرور.",
    "the_criminal_lens": "ينزل المخترق قائمة محادثاتك الأخيرة ويرسل رسايل استغاثة وهمية يطلب تحويل مالي عاجل على محفظة.",
    "myths_that_kill": [
      { "myth": "طالما الحساب اتسرق فستضيع كل رسائلي ولن أستطيع استرداده.", "truth": "معظم المنصات توفر مسار استرداد عبر الإيميل أو فيديو التحقق من الشخصية.", "src": "ncsc:account-recovery" }
    ],
    "do": [
      { "t": "فعل خطوة التحقق الثنائي (2FA) فور استرداد الحساب لمنع الاختراق مجدداً.", "en": "Enable 2FA immediately upon account recovery.", "src": "ncsc:account-recovery" }
    ],
    "dont": [
      { "t": "لا ترسل أي مبالغ مالية فدية للمخترق لاستعادة الحساب.", "en": "Do not pay ransom money to scammers promising account return.", "src": "ncsc:account-recovery" }
    ],
    "escalation_ladder": "إذا تم النصب باسمك، حرر محضراً بمباحث تكنولوجيا المعلومات لحماية موقفك القانوني.",
    "your_right": "حق سرية المكاتبات الرقمية وحظر اختراق الحسابات الشخصية بقانون تكنولوجيا المعلومات 175 لسنة 2018.",
    "الدليل": { "basis": "NCSC Hacked Account Guidance وقانون مكافحة جرائم تقنية المعلومات 175/2018", "quote": "Inform contacts immediately and reset credentials via official recovery portals." },
    "note": { "ar": "إجراءات استرداد وتأمين الحسابات المخترقة بمصر." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن اختراق حساب شخصي واستخدامه في النصب." }
    ],
    "sources": [
      { "srcId": "ncsc:account-recovery", "grade": "NCSC Official" }
    ]
  },
  {
    "id": "scenario-a16-unsolicited-otp",
    "title": {
      "ar": "«جالي كود OTP في رسالة على الموبايل وأنا مش بسجل دخول في أي مكان دلوقتي»",
      "en": "Unsolicited 2FA/OTP code received unexpectedly"
    },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الخدمات الرقمية"],
    "place": ["الهواتف المحمولة"],
    "first_60_seconds": [
      { "t": "احتفظ بالكود لنفسك تماماً ولا تشاركه مع أي شخص هاتفياً أو عبر الرسائل.", "en": "Keep code completely private; never share with anyone.", "src": "ncsc:mfa-security" },
      { "t": "توجه للحساب المذكور في الرسالة وغير كلمة المرور فوراً.", "en": "Log into the affected service and change your password.", "src": "ncsc:mfa-security" },
      { "t": "تفقد الأجهزة المتصلة بحسابك وأنهِ أي جلسة غريبة.", "en": "Check account active devices and terminate strange sessions.", "src": "ncsc:mfa-security" }
    ],
    "the_clock": "وصول الكود يعني أن شخصاً ما يملك كلمة مرورك الحالية ويحاول تجاوز الخطوة الثانية الآن.",
    "most_likely_truth": "كلمة سر حسابك مسربة أو مخمولة، والجدار الأخير الذي يمنع الدخول هو كود OTP.",
    "the_criminal_lens": "يتصل بك المخترق فوراً ينتحل صفة موظف دعم فني ويطلب منك الكود «لإلغاء محاولة الاختراق».",
    "myths_that_kill": [
      { "myth": "الموظف اللي بيتصل من شركة المحمول أو البنك محتاج الكود ليحميني.", "truth": "لا يوجد موظف حقيقي يطلب كود التحقق السري مطلقاً؛ الطلب دليل احتيال مؤكد.", "src": "ncsc:mfa-security" }
    ],
    "do": [
      { "t": "تأكد من استخدام كلمات سر فريدة ومختلفة لكل حساب إلكتروني.", "en": "Ensure unique passwords across all your accounts.", "src": "ncsc:mfa-security" }
    ],
    "dont": [
      { "t": "لا تقرأ الكود لأي شخص يتصل بك هاتفياً مهما كانت حجته.", "en": "Do not read the OTP aloud to any caller.", "src": "ncsc:mfa-security" }
    ],
    "escalation_ladder": "إذا تمكن المخترق من الدخول رغم ذلك، أوقف الحساب عبر الدعم الفني الرسمي فوراً.",
    "your_right": "حماية بيانات الاعتماد الرقمي وكفالة الخصوصية بقانون حماية البيانات 151/2020.",
    "الدليل": { "basis": "NCSC MFA Guidance وقانون حماية البيانات الشخصية", "quote": "Never share one-time passcodes; unsolicited codes indicate credential compromise." },
    "note": { "ar": "توعية بتأمين رموز التحقق بخطوتين." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "بلاغ محاولة اختراق حساب واستيلاء على أكواد تحقق." }
    ],
    "sources": [
      { "srcId": "ncsc:mfa-security", "grade": "NCSC Official" }
    ]
  },
  {
    "id": "scenario-a17-ransomware-lock",
    "title": {
      "ar": "«شاشة الويندوز أو الكمبيوتر اتclosed وظهرت رسالة تشفير وتطالب بفدية مالية»",
      "en": "Ransomware infection screen lock demanding payment"
    },
    "level": 5,
    "domain": "أمان رقمي",
    "who": ["مستخدمو أجهزة الكمبيوتر والشركات"],
    "place": ["أجهزة المنازل والعمل"],
    "first_60_seconds": [
      { "t": "افصل الجهاز فوراً عن شبكة الإنترنت (Wi-Fi والكابل) لمنع انتشاره للأجهزة الأخرى.", "en": "Disconnect device from Wi-Fi and Ethernet immediately.", "src": "ncsc:account-recovery" },
      { "t": "افصل أي فلاشة أو هارد خارجي متصل بالجهاز لمنع تشفير النسخ الاحتياطية.", "en": "Unplug external drives and USB backups instantly.", "src": "ncsc:account-recovery" },
      { "t": "صور شاشة الفدية ورسالة التشفير لاستخدامها في التتبع الفني.", "en": "Take photo of ransom note screen for analysis.", "src": "ncsc:account-recovery" }
    ],
    "the_clock": "فصل شبكة الإنترنت والنسخ الاحتياطية خلال الثواني الأولى يحمي بقية ملفاتك وأجهزة الشبكة.",
    "most_likely_truth": "تم تحميل برنامج خبيث (Ransomware) عبر ملف مجهول أو برنامج مقالي مكرك.",
    "the_criminal_lens": "يشفر البرنامج ملفاتك بمفتاح سري ويطالب بدفع بيتكوين خلال مهلة زمنية تهديداً بحذف الملفات.",
    "myths_that_kill": [
      { "myth": "دفع الفدية يضمن استعادة الملفات المشفرة 100%.", "truth": "دفع الفدية يشجع المجرمين وغالباً لا يعيد الملفات المشفرة.", "src": "ncsc:account-recovery" }
    ],
    "do": [
      { "t": "استعن بمتخصص أمان رقمي وابحث عن مفاتيح فك تشفير مجانية على NoMoreRansom.org.", "en": "Search for free official decryptors on NoMoreRansom.org.", "src": "ncsc:account-recovery" }
    ],
    "dont": [
      { "t": "لا تدفع الفدية المالية المطلوبة للمجرمين الرقميين.", "en": "Do not pay the ransom money.", "src": "ncsc:account-recovery" }
    ],
    "escalation_ladder": "حرر بلاغاً بمباحث تكنولوجيا المعلومات (108) لجرائم التشفير والابتزاز الإلكتروني.",
    "your_right": "المادة 18 من قانون مكافحة جرائم تقنية المعلومات 175 لسنة 2018 تعاقب على الاعتداء على سلامة البيانات والأنظمة.",
    "الدليل": { "basis": "NCSC Ransomware Guidance وقانون مكافحة جرائم تقنية المعلومات 175/2018", "quote": "Disconnect immediately, do not pay ransom, use offline backups for recovery." },
    "note": { "ar": "خطوات التعامل الفني والجنائي مع هجمات فدية البرمجيات الخبيثة." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن هجوم برمجيات فدية وتشفير بيانات." }
    ],
    "sources": [
      { "srcId": "ncsc:account-recovery", "grade": "NCSC Official" }
    ]
  },

  // --- A-8 Accounts Continued (A18-A20) ---
  {
    "id": "scenario-a18-data-leak-exposure",
    "title": {
      "ar": "«وصلني إيميل إن كلمة سر حسابي أو بياناتي ظهرت في تسريب بيانات موقع شهير»",
      "en": "Data breach exposure notification for credentials"
    },
    "level": 3,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الإنترنت"],
    "place": ["الخدمات الإلكترونية"],
    "first_60_seconds": [
      { "t": "غير كلمة المرور للحساب المذكور فوراً ولأي حساب آخر يستخدم نفس كلمة السر.", "en": "Change password for leaked service and any reusing accounts.", "src": "ncsc:mfa-security" },
      { "t": "فعل التحقق بخطوتين (2FA) على الحسابات المسربة فوراً.", "en": "Enable 2FA on compromised accounts immediately.", "src": "ncsc:mfa-security" },
      { "t": "تفقد الحسابات البنكية والإيميلات المرتبطة لأي نشاط غريب.", "en": "Monitor linked email and financial accounts for unauthorized activity.", "src": "ncsc:mfa-security" }
    ],
    "the_clock": "تغيير كلمات السر المكررة فور التسريب يمنع استغلال المجرّمين لها في هجمات التخمين (Credential Stuffing).",
    "most_likely_truth": "قاعدة بيانات خدمة أو موقع قديم استخدمته تم اختراقها ونشر بياناتها على شبكة الإنترنت.",
    "the_criminal_lens": "يأخذ المحتال قاعدة البيانات المسربة ويجرب نفس الإيميل وكلمة السر على البنوك والمنصات الشهيرة تلقائياً.",
    "myths_that_kill": [
      { "myth": "طالما التسريب في موقع قديم فلا خطر على بقية حساباتي.", "truth": "إذا كنت تكرر كلمة السر نفسها، فجميع حساباتك أصبحت مكشوفة الآن.", "src": "ncsc:mfa-security" }
    ],
    "do": [
      { "t": "استخدم مدير كلمات سر (Password Manager) لتوليد كلمات سر فريدة ومعقدة لكل موقع.", "en": "Use a password manager to generate distinct complex passwords.", "src": "ncsc:mfa-security" }
    ],
    "dont": [
      { "t": "لا تكرر كلمة السر نفسها عبر عدة خدمات إلكترونية.", "en": "Do not reuse the same password across multiple online services.", "src": "ncsc:mfa-security" }
    ],
    "escalation_ladder": "إذا نتج عن التسريب استغلال مالي أو اختراق، حرر محضراً بمباحث الإنترنت.",
    "your_right": "قانون حماية البيانات الشخصية المصري 151 لسنة 2020 يلزم الشركات بإخطار المستخدمين ومركز حماية البيانات عند حدوث تسريب.",
    "الدليل": { "basis": "NCSC Password Guidance وقانون حماية البيانات الشخصية 151/2020", "quote": "Change shared passwords immediately upon breach notification and enforce 2FA." },
    "note": { "ar": "توعية بتأمين الحسابات عند التسريبات الرقمية." },
    "contacts": [
      { "label": "مركز حماية البيانات الشخصية / مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن تسريب بيانات شخصية واستغلالها في اختراق حسابات." }
    ],
    "sources": [
      { "srcId": "ncsc:mfa-security", "grade": "NCSC Official" }
    ]
  },
  {
    "id": "scenario-a19-unrecognized-child-apps",
    "title": {
      "ar": "«لقيت تطبيقات غريبة ومريبة على موبايل ابني مش عارف مصدرها أو حد بيكلمه»",
      "en": "Unrecognized or suspicious apps found on child's phone"
    },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["أولياء الأمور"],
    "place": ["أجهزة الأطفال والشباب"],
    "first_60_seconds": [
      { "t": "افحص أذونات التطبيق (Permissions) وتأكد هل الكاميرا أو الميكروفون أو الموقع مفتوحان.", "en": "Check app permissions for camera, microphone, and location access.", "src": "cisa:secure-home-router" },
      { "t": "ضع الموبايل في وضع الطيران قبل مسح التطبيقات المشبوهة لقطع الاتصال.", "en": "Enable Airplane mode to cut live server connection.", "src": "cisa:secure-home-router" },
      { "t": "تحدث مع الطفل بهدوء ودون ترهيب لمعرفة كيف نزل التطبيق ومن يتحدث معه.", "en": "Talk to child calmly without punishment to understand who installed it.", "src": "cisa:secure-home-router" }
    ],
    "the_clock": "التصرف بهدوء ودون ترهيب للطفل يحافظ على جسور الاستئمان والتصارح عند التعرض للابتزاز.",
    "most_likely_truth": "تم تحميل التطبيق من متجر غير رسمي أو عبر رابط أرسله مجهول أثناء الألعاب الإلكترونية.",
    "the_criminal_lens": "يستغل الغرباء تطبيقات الألعاب والتواصل غير المراقبة لبناء الثقة مع الأطفال واستدراجهم.",
    "myths_that_kill": [
      { "myth": "عقاب الطفل وسحب الموبايل يحل المشكلة الرقمية.", "truth": "الترهيب يجعل الطفل يخفي التهديدات والابتزاز بدلاً من طلب مساعدة الوالدين.", "src": "cisa:secure-home-router" }
    ],
    "do": [
      { "t": "ثبت تطبيقات الرقابة الأبوية الرسمية وقيد التحميل من خارج المتجر الرسمي.", "en": "Use official parental control tools and restrict non-store app installs.", "src": "cisa:secure-home-router" }
    ],
    "dont": [
      { "t": "لا تترك حسابات الأطفال بدون تفعيل خيارات الخصوصية وتقييد الرسائل من الغرباء.", "en": "Do not leave child accounts open to unsolicited direct messaging.", "src": "cisa:secure-home-router" }
    ],
    "escalation_ladder": "إذا كان هناك استدراج أو استغلال للطفل، اتصل بخط نجدة الطفل 16000 ومباحث تكنولوجيا المعلومات 108.",
    "your_right": "المادة 80 من الدستور وقانون الطفل تعاقب على كل تعريض للطفل للخطر أو الخداع أو الاستغلال الرقمي.",
    "الدليل": { "basis": "CISA Child Online Safety Guidance وقانون الطفل المصري 12/1996", "quote": "Audit child device permissions and foster open communication to prevent online grooming." },
    "note": { "ar": "توعية بالأمان الرقمي وحماية الأطفال على الإنترنت." },
    "contacts": [
      { "label": "خط نجدة الطفل", "number": "16000", "say": "أبلغ عن محاولة استدراج أو استغلال إلكتروني لطفل." },
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "بلاغ استدراج رقمي واستغلال أطفال عبر تطبيقات إلكترونية." }
    ],
    "sources": [
      { "srcId": "cisa:secure-home-router", "grade": "CISA / Child Safety" }
    ]
  },
  {
    "id": "scenario-a20-email-master-lockout",
    "title": {
      "ar": "«فقدت الوصول لإيميلي الرئيسي وكل حساباتي البنكية والشخصية مربوطة بيه»",
      "en": "Primary email master lockout or recovery failure"
    },
    "level": 5,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الإنترنت"],
    "place": ["البريد الإلكتروني"],
    "first_60_seconds": [
      { "t": "استخدم خيارات الاسترداد البديلة (الإيميل الاحتياطي أو الهاتف المسجل).", "en": "Use backup email or registered phone recovery channels.", "src": "ncsc:account-recovery" },
      { "t": "إذا اخترق الإيميل، اتصل فوراً بالبنك لتعديل البريد المرتبط بالحساب البنكي.", "en": "Notify bank immediately to update primary contact email on file.", "src": "ncsc:account-recovery" },
      { "t": "استخدم رموز الاسترداد الاحتياطية (Backup Codes) المطبوعة مسبقاً إن وجدت.", "en": "Enter pre-generated offline recovery codes if available.", "src": "ncsc:account-recovery" }
    ],
    "the_clock": "البريد الرئيسي هو مفتاح الهوية الرقمية؛ السيطرة عليه تمكن المخترق من إعادة تعيين كلمة سر كافة المنصات.",
    "most_likely_truth": "تم تغيير رقم هاتف الاسترداد والإيميل البديل من قبل شخص نجح في دخول الإيميل.",
    "the_criminal_lens": "يبدأ المخترق فوراً بطلب رسائل «نسيت كلمة السر» للبنوك والمنصات المرتبطة بهذا الإيميل.",
    "myths_that_kill": [
      { "myth": "طالما لدي رقم الهاتف فالحساب آمن ولن يغلق الإيميل.", "truth": "إذا تم تغيير بيانات الاسترداد من داخل الإيميل ستحتاج لتقديم طلب استرداد هويّة رسمي للشركة Provider.", "src": "ncsc:account-recovery" }
    ],
    "do": [
      { "t": "احفظ رموز الاسترداد الاحتياطية (Backup Codes) ورقم الهوية الحقيقية على الإيميل.", "en": "Keep backup codes stored securely offline.", "src": "ncsc:account-recovery" }
    ],
    "dont": [
      { "t": "لا تترك الإيميل الرئيسي بدون تحقق بخطوتين وتأمين دائم.", "en": "Do not leave master primary email without strong 2FA enforcement.", "src": "ncsc:account-recovery" }
    ],
    "escalation_ladder": "قدم طلب إثبات ملكية رسمية للدعم الفني للشركة (Google / Microsoft) برقم القومي وصورة الهوية.",
    "your_right": "حق حماية البيانات والمكاتبات الرقمية الشاملة.",
    "الدليل": { "basis": "NCSC Account Recovery Guidance وقانون جرائم تقنية المعلومات", "quote": "Primary email is the cornerstone of digital identity; secure it with offline recovery keys." },
    "note": { "ar": "إجراءات تأمين واستعادة البريد الإلكتروني الرئيسي." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن اختراق حساب بريد إلكتروني رئيسي واستخدامه في الاستيلاء على حسابات." }
    ],
    "sources": [
      { "srcId": "ncsc:account-recovery", "grade": "NCSC Official" }
    ]
  },

  // --- A-9 Home Perimeter (A21-A24) ---
  {
    "id": "scenario-a21-home-camera-privacy",
    "title": {
      "ar": "«كاميرا المراقبة المنزلية — إزاي أتأكد إن مفيش حد غريب شايف البث غيري؟»",
      "en": "Home IP security camera privacy and compromise prevention"
    },
    "level": 4,
    "domain": "أمان رقمي",
    "who": ["أصحاب الكاميرات المنزلية"],
    "place": ["المنازل", "المكاتب"],
    "first_60_seconds": [
      { "t": "غير كلمة مرور افتراضية (Default Admin Password) للكاميرا والتطبيق فوراً.", "en": "Change default camera admin password immediately.", "src": "cisa:secure-home-router" },
      { "t": "حدث البرامج الثابتة (Firmware) للكاميرا لأحدث إصدار أمني متوفر.", "en": "Update camera firmware to latest vendor security patch.", "src": "cisa:secure-home-router" },
      { "t": "أغلق خاصية UPnP وإمكانية الوصول المباشر من الإنترنت دون شبكة تشفير VPN.", "en": "Disable UPnP and direct unencrypted web access.", "src": "cisa:secure-home-router" }
    ],
    "the_clock": "ترك كلمة السر الافتراضية يجعل الكاميرا مكشوفة لمحركات البحث الرقمية العالمية العامة.",
    "most_likely_truth": "أغلب اختراقات الكاميرات تحدث بسبب عدم تغيير كلمة سر المصنع الافتراضية (admin/admin).",
    "the_criminal_lens": "يمسح المخترقون شبكة الإنترنت بحثاً عن كاميرات تعمل بكلمات السر الإفتراضية لمشاهدة البث المباشر.",
    "myths_that_kill": [
      { "myth": "طالما اشتركت في تطبيق الكاميرا فالكاميرا آمنة تلقائياً دون كلمة سر جديدة.", "truth": "الكاميرات الرخيصة تأتي باختراقات مفتوحة ما لم تقم بتغيير كلمة السر يدويًا.", "src": "cisa:secure-home-router" }
    ],
    "do": [
      { "t": "تأكد من اختيار ماركات كاميرات موثوقة تدعم التحديث الأمني المستمر وتشفير البث.", "en": "Buy trusted brands supporting encrypted video streams and regular patches.", "src": "cisa:secure-home-router" }
    ],
    "dont": [
      { "t": "لا تضع الكاميرات المتصلة بالإنترنت في غرف النوم أو غرف المعيشة الخاصة جداً.", "en": "Do not place internet-connected cameras in private bedrooms.", "src": "cisa:secure-home-router" }
    ],
    "escalation_ladder": "إذا اكتشفت بثاً مسرباً لكاميرا منزلك، حرر محضراً بمباحث تكنولوجيا المعلومات فوراً.",
    "your_right": "حرمة المساكن والحياة الخاصة حق دستوري مكفول بالمادة 57 من الدستور المصري.",
    "الدليل": { "basis": "CISA Smart Device Security Guidance والمادة 57 من الدستور المصري", "quote": "Change factory default credentials on IP cameras to prevent public stream indexing." },
    "note": { "ar": "توعية بتأمين كاميرات المراقبة المنزلية والخصوصية." },
    "contacts": [
      { "label": "مباحث تكنولوجيا المعلومات", "number": "108", "say": "أبلغ عن اختراق كاميرا منزلية وانتهاك الخصوصية." }
    ],
    "sources": [
      { "srcId": "cisa:secure-home-router", "grade": "CISA Official" }
    ]
  },
  {
    "id": "scenario-a22-router-hijack",
    "title": {
      "ar": "«الراوتر المنزلي — حاسس إن في غريب مخترق الشبكة وبيتجسس على الأجهزة»",
      "en": "Home Wi-Fi router security audit and intruder eviction"
    },
    "level": 3,
    "domain": "أمان رقمي",
    "who": ["جميع مستخدمي الإنترنت المنزلي"],
    "place": ["المنازل"],
    "first_60_seconds": [
      { "t": "ادخل على صفحة الراوتر (192.168.1.1) وغير كلمة سر الأدمن ومفتاح الواي فاي.", "en": "Log into router admin page, change admin password and Wi-Fi key.", "src": "cisa:secure-home-router" },
      { "t": "أغلق خاصية WPS لتفادي اختراق كلمة السر عبر برامج التخمين.", "en": "Disable WPS button/feature in router wireless settings.", "src": "cisa:secure-home-router" },
      { "t": "افحص قائمة الأجهزة المتصلة (DHCP Client List) واطرد الأجهزة الغريبة.", "en": "Check DHCP list for unknown devices and block them.", "src": "cisa:secure-home-router" }
    ],
    "the_clock": "اختراق الراوتر يتيح للغريب التجسس على المواقع المزارة أو استخدام شبكتك في جرائم إلكترونية باسمك.",
    "most_likely_truth": "تم اختراق شبكتك عبر ثغرة WPS أو استخدام كلمة سر واي فاي ضعيفة وسهلة التخمين.",
    "the_criminal_lens": "يتصل المعتدي بشبكتك المنزلية مجاناً أو يستغلها كواجهة لإجراء تحويلات مشبوهة لتوريط صاحب الخط.",
    "myths_that_kill": [
      { "myth": "إخفاء اسم الشبكة (Hide SSID) يكفي تماماً لحمايتها دون كلمة سر قوية.", "truth": "إخفاء الشبكة حيلة بسيطة لا تمنع برامج الفحص من اكتشافها واختراقها.", "src": "cisa:secure-home-router" }
    ],
    "do": [
      { "t": "استخدم نظام تشفير WPA2-AES أو WPA3 لشبكة الواي فاي المنزلية.", "en": "Set Wi-Fi encryption to WPA2-AES or WPA3.", "src": "cisa:secure-home-router" }
    ],
    "dont": [
      { "t": "لا تترك كلمة سر الراوتر هي نفسها المكتوبة على ظهر الجهاز دون تغيير.", "en": "Do not leave default router password on sticker unchanged.", "src": "cisa:secure-home-router" }
    ],
    "escalation_ladder": "إذا استُخدمت شبكتك في ارتكاب جريمة رقمية، قدم أدلة تأمين الراوتر وسجلات الحظر.",
    "your_right": "مسئولية استخدام الاشتراك الرقمي وحق تأمين الشبكات الشخصية.",
    "الدليل": { "basis": "CISA Home Router Security Guidance وقواعد تنظيم الاتصالات", "quote": "Disable WPS, update admin passwords, and use strong WPA2/WPA3 encryption." },
    "note": { "ar": "إجراءات حماية وتأمين شبكة الإنترنت المنزلية والراوتر." },
    "contacts": [
      { "label": "الدعم الفني لشركة الإنترنت / الجهاز القومي للاتصالات", "number": "155", "say": "تقديم شكوى اختراق أو ضبط إعدادات الراوتر الأمني." }
    ],
    "sources": [
      { "srcId": "cisa:secure-home-router", "grade": "CISA Official" }
    ]
  },
  {
    "id": "scenario-a23-elderly-call-scams",
    "title": {
      "ar": "«جدّي أو والدتي الكبيرة بيردوا على كل مكالمة تليفون وبيصدقوا نصابي البنوك»",
      "en": "Protecting older family members from phone phone scams"
    },
    "level": 3,
    "domain": "أمان رقمي",
    "who": ["أسر كبار السن"],
    "place": ["المنازل"],
    "first_60_seconds": [
      { "t": "فعل خاصية حظر الأرقام الغريبة أو غير المسجلة على هاتف الشخص المسن.", "en": "Enable call blocking or auto-filter for unknown callers on elder's phone.", "src": "ftc:identity-theft-guidance" },
      { "t": "ضع ملصقاً واضحاً بجوار الهاتف: «البنك لا يطلب الأرقام السريّة هاتفياً أبداً».", "en": "Place visible note near phone reminding that banks never ask for codes.", "src": "ftc:identity-theft-guidance" },
      { "t": "ربط الحسابات البنكية للمسن بنظام تنبيهات SMS على هاتف أحد الأبناء.", "en": "Set bank transaction SMS alerts to go to trusted family member.", "src": "ftc:identity-theft-guidance" }
    ],
    "the_clock": "النصب الهاتفي يستهدف احترام وطيبة كبار السن لسرقة بياناتهم خلال مكالمة واحدة.",
    "most_likely_truth": "المحتال يختار كبار السن استناداً لأساليب الإقناع وانتحال صفة خدمة العملاء أو مسابقات الجوائز.",
    "the_criminal_lens": "يدعي المتصل أنه موظف تحديث بيانات أو يخبرهم بفوزهم بجائزة وطلب كود الفيزا لتحويل المبالغ.",
    "myths_that_kill": [
      { "myth": "كبار السن لا يحتاجون لتوعية أمنية طالما لا يستخدمون الإنترنت.", "truth": "معظم عمليات الاحتيال المالي لكبار السن تتحدث عبر مكالمات هاتفية تقليدية.", "src": "ftc:identity-theft-guidance" }
    ],
    "do": [
      { "t": "عوض المسن على الاتصال بك فوراً عند ورود أي مكالمة تطالبه ببيانات أو مبالغ.", "en": "Instruct older relatives to call you first before sharing details over phone.", "src": "ftc:identity-theft-guidance" }
    ],
    "dont": [
      { "t": "لا تترك البطاقات البنكية وأرقامها السرية مدونة في مكان مفتوح بجوار الموبايل.", "en": "Do not leave bank cards with written PINs next to phone.", "src": "ftc:identity-theft-guidance" }
    ],
    "escalation_ladder": "أبلغ البنك فوراً بتجميد الحساب إذا أدلى المسن بأي بيانات سريّة هاتفياً.",
    "your_right": "حماية كبار السن من الاستغلال المالي والاجتماعي المادة 83 من الدستور.",
    "الدليل": { "basis": "FTC Elder Phone Scam Protection Guidance والمادة 83 من الدستور المصري", "quote": "Set up phone filtering, bank alert notifications, and continuous family guidance." },
    "note": { "ar": "خطوات حماية كبار السن من الاحتيال الهاتفي." },
    "contacts": [
      { "label": "منظومة الشكاوى الحكومية / خدمات كبار السن", "number": "16528", "say": "أطلب الدعم في حماية مسن من احتيال استغلالي." }
    ],
    "sources": [
      { "srcId": "ftc:identity-theft-guidance", "grade": "FTC Official" }
    ]
  },
  {
    "id": "scenario-a24-kids-oversharing-osint",
    "title": {
      "ar": "«ولادي بينشروا صورهم ومكانهم ومدرستهم على النت — إيه الخطر الجنائي؟»",
      "en": "Child social media oversharing risk and OSINT exploitation"
    },
    "level": 3,
    "domain": "أمان رقمي",
    "who": ["أولياء الأمور والأطفال"],
    "place": ["منصات التواصل الاجتماعي"],
    "first_60_seconds": [
      { "t": "اجعل حسابات الأطفال خاصة (Private Accounts) وأغلق الوصول للعامة.", "en": "Set child social media profiles to strictly Private.", "src": "cisa:secure-home-router" },
      { "t": "أغلق خاصية التحديد الجغرافي المباشر (Location Tagging) بالصور والمشورات.", "en": "Disable automatic GPS location tagging on photos and posts.", "src": "cisa:secure-home-router" },
      { "t": "احذف الصور التي تظهر زي المدرسة أو موقع المنزل أو تفاصيل اليومية.", "en": "Remove photos showing school logos, home address, or daily routes.", "src": "cisa:secure-home-router" }
    ],
    "the_clock": "تجميع البيانات المفتوحة (OSINT) يتيح للغرباء رسم النمط اليومي للطفل وموقعه الجغرافي الدقيق.",
    "most_likely_truth": "الأطفال ينشرون تفاصيل حياتهم بدافع التفاعل الاجتماعي دون إدراك لخطورة جمع البيانات.",
    "the_criminal_lens": "يجمع المعتدي صور المدرسة وأماكن التواجد لبناء قصة مقنعة واستدراج الطفل أو محاولة الخطف.",
    "myths_that_kill": [
      { "myth": "نشر صور الأطفال بزي المدرسة أمر آمن طالما الصفحة بين الأصدقاء.", "truth": "الصور يتم إعادة مشاركتها أو حفظها من قبل أشخاص آخرين بسهولة.", "src": "cisa:secure-home-router" }
    ],
    "do": [
      { "t": "علم الطفل عدم قبول إضافات من أشخاص لا يعرفهم شخصياً في الحياة الواقعية.", "en": "Teach kids not to accept friend requests from unknown people.", "src": "cisa:secure-home-router" }
    ],
    "dont": [
      { "t": "لا تنشر مواعيد سفر الأسرة أو ترك المنزل خالياً على الحسابات العامة.", "en": "Do not post family travel schedules or empty house notifications publicly.", "src": "cisa:secure-home-router" }
    ],
    "escalation_ladder": "عند استخدام صور الأطفال في تتبع أو مضايقات، حرر بلاغاً بمباحث تكنولوجيا المعلومات.",
    "your_right": "حق الطفل في حماية خصوصيته وسلامته المادة 80 من الدستور وقانون حماية البيانات 151.",
    "الدليل": { "basis": "CISA OSINT & Social Engineering Awareness وقانون الطفل المصري", "quote": "Restrict public location broadcasting and school markers on youth social profiles." },
    "note": { "ar": "توعية بالأمان الرقمي والحد من الإفراط في المشاركة الرقمية." },
    "contacts": [
      { "label": "خط نجدة الطفل", "number": "16000", "say": "أستفسر عن حماية طفل من مضايقات رقمية ناتجة عن نشر بياناته." }
    ],
    "sources": [
      { "srcId": "cisa:secure-home-router", "grade": "CISA / Child Safety" }
    ]
  }
];

injectSourcesAndItems(PATH_THREATS, sources, cards, 'CARDS', 'id');

console.log('Waves A-7, A-8, A-9 completed successfully.');
