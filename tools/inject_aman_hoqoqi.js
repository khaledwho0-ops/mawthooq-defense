const fs = require('fs');

const amanFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/aman/threats.js';
let amanContent = fs.readFileSync(amanFile, 'utf8');

const newAmanSources = `
  "ftc:ai-voice-scam": {
    "url": "https://consumer.ftc.gov/articles/scammers-use-ai-enhance-their-family-emergency-schemes",
    "label": "AI Voice Cloning Scams",
    "tag": "FTC",
    "retrieved": "2026-08",
    "sha256": "mock-ai-voice"
  },
  "cbe:mobile-wallet-fraud": {
    "url": "https://www.cbe.org.eg/",
    "label": "Mobile Wallet Fraud Warnings",
    "tag": "CBE",
    "retrieved": "2026-08",
    "sha256": "mock-cbe-wallet"
  }`;

const newAmanCards = [
  {
    "id": "scenario-a30-ai-voice-clone",
    "title": {
      "ar": "«جالي صوت أخويا على التليفون بيقول ابعتلي فلوس — بس حاجة مش طبيعية»",
      "en": "AI Voice Cloning Emergency Scam"
    },
    "level": 4,
    "domain": "احتيال",
    "who": ["البالغين", "أسر كبار السن"],
    "place": ["المكالمات التليفونية"],
    "first_60_seconds": [
      {
        "t": "اقفل السكة فوراً، حتى لو الصوت مطابق لصوت قريبك.",
        "en": "Hang up immediately, even if the voice sounds identical.",
        "src": "ftc:ai-voice-scam"
      },
      {
        "t": "اتصل بقريبك ده على رقمه المعتاد اللي متسجل عندك عشان تتأكد.",
        "en": "Call your relative directly on their known, saved phone number to verify.",
        "src": "ftc:ai-voice-scam"
      }
    ],
    "the_clock": "الذكاء الاصطناعي بيقلد الصوت بـ 3 ثواني تسجيل بس، وبيستغل صدمتك عشان تحول الفلوس بسرعة.",
    "most_likely_truth": "ده محتال استخدم فيديو أو تسجيل صوتي لقريبك من السوشيال ميديا وخلّق مكالمة مزيفة.",
    "the_criminal_lens": "المحتال بيجمع معلومات عن قريبك من النت، وبيستخدم الذكاء الاصطناعي عشان يخلي الصوت يطلب تحويل مبالغ نقدية أو كروت شحن بأسرع وقت.",
    "myths_that_kill": [
      {
        "myth": "محدش يقدر يقلد صوت أخويا بالطريقة دي.",
        "truth": "الذكاء الاصطناعي الحالي يقدر ينسخ نبرة الصوت والمشاعر بدقة مرعبة من أي فيديو عام.",
        "src": "ftc:ai-voice-scam"
      }
    ],
    "do": [
      {
        "t": "اتفق مع عيلتك على (كلمة سر) محدش يعرفها غيركم، تسأل عليها لو شكيت في مكالمة طوارئ.",
        "en": "Establish a family 'safe word' to ask for during suspicious emergency calls.",
        "src": "ftc:ai-voice-scam"
      }
    ],
    "dont": [
      {
        "t": "ماتحولش أي مبالغ أو تشحن كروت بناءً على مكالمة تليفون من رقم غريب، حتى لو الصوت مألوف.",
        "en": "Do not transfer money or buy gift cards based on a call from an unknown number.",
        "src": "ftc:ai-voice-scam"
      }
    ],
    "escalation_ladder": "لو حولت فلوس، كلم البنك فوراً لتجميد المعاملة وبلغ مباحث الإنترنت.",
    "your_right": "الإبلاغ عن الجريمة الإلكترونية واستخدام الذكاء الاصطناعي في الاحتيال.",
    "الدليل": {
      "basis": "FTC Family Emergency & AI Schemes Guidance",
      "quote": "Scammers use AI to enhance their family emergency schemes. Call the person back at a phone number you know is theirs."
    },
    "note": {
      "ar": "تكنولوجيا تقليد الصوت بقت متاحة للجميع، الثقة دلوقتي في (الرقم المألوف) و(كلمة السر) مش في الصوت."
    },
    "contacts": [
      {
        "label": "مباحث الإنترنت المصرية",
        "number": "108",
        "say": "أبلغ عن احتيال مالي باستخدام مكالمة ذكاء اصطناعي مزيفة."
      }
    ],
    "sources": [
      {
        "srcId": "ftc:ai-voice-scam",
        "grade": "FTC Official"
      }
    ]
  },
  {
    "id": "scenario-a31-mobile-wallet-otp",
    "title": {
      "ar": "«جاتلي رسالة من محفظتي الإلكترونية بتطلب كود — هل دي حقيقية؟»",
      "en": "Mobile Wallet Fake OTP Request Scam"
    },
    "level": 3,
    "domain": "احتيال",
    "who": ["البالغين", "أصحاب المحافظ الإلكترونية"],
    "place": ["الرسايل النصية (SMS)"],
    "first_60_seconds": [
      {
        "t": "تجاهل الرسالة وماتبعتش الكود لأي شخص، حتى لو ادعى إنه من خدمة العملاء.",
        "en": "Ignore the message and never share the OTP, even with claimed customer service.",
        "src": "cbe:mobile-wallet-fraud"
      }
    ],
    "the_clock": "مجرد ما تدي الكود للمحتال، بيسحب كل الرصيد اللي في محفظتك في ثواني.",
    "most_likely_truth": "المحتال بيحاول يدخل على محفظتك من جهازه، والشركة بتبعتلك (كود الأمان) اللي لو هو خده هيفتح الحساب.",
    "the_criminal_lens": "المحتال بيتصل بيك ويدعي إنه من خدمة العملاء بيحدث بياناتك، ويقولك هبعتلك كود أكدهولي عشان المحفظة ماتقفش.",
    "myths_that_kill": [
      {
        "myth": "خدمة العملاء محتاجة الكود عشان تحدث النظام.",
        "truth": "مفيش أي بنك أو محفظة بتطلب كود الـ OTP في مكالمة.",
        "src": "cbe:mobile-wallet-fraud"
      }
    ],
    "do": [
      {
        "t": "افتح تطبيق المحفظة بنفسك للتأكد من الرصيد، وماتدوسش على لينكات في رسايل.",
        "en": "Open the wallet app directly to check balance, don't click links in SMS.",
        "src": "cbe:mobile-wallet-fraud"
      }
    ],
    "dont": [
      {
        "t": "ماتديلش حد كود جالك في رسالة، الكود ده زي مفتاح بيتك.",
        "en": "Never give the OTP to anyone; it's the key to your account.",
        "src": "cbe:mobile-wallet-fraud"
      }
    ],
    "escalation_ladder": "لو إديت الكود لحد، اتصل فوراً برقم خدمة عملاء المحفظة لوقف الحساب.",
    "your_right": "حماية حساباتك المالية والإبلاغ عن محاولات الاختراق.",
    "الدليل": {
      "basis": "تحذيرات البنك المركزي المصري وشركات المحافظ الإلكترونية",
      "quote": "Never share your One-Time Password (OTP) with anyone."
    },
    "note": {
      "ar": "النصابين بيستغلوا خوف الناس من إيقاف الخدمة عشان يسرقوا الكود."
    },
    "contacts": [
      {
        "label": "خدمة عملاء البنك/المحفظة",
        "number": "مطبوع خلف بطاقتك أو في التطبيق الرسمي",
        "say": "أطلب إيقاف مؤقت لمحفظتي لأن الكود اتسرق."
      }
    ],
    "sources": [
      {
        "srcId": "cbe:mobile-wallet-fraud",
        "grade": "CBE Warnings"
      }
    ]
  }
];

if (!amanContent.includes('scenario-a30-ai-voice-clone')) {
    amanContent = amanContent.replace(/window\.SOURCES\s*=\s*\{/, 'window.SOURCES = {\n' + newAmanSources + ',\n');
    const amanCardsStr = newAmanCards.map(c => JSON.stringify(c, null, 2)).join(',\n');
    amanContent = amanContent.replace(/\]\s*;\s*$/, ',\n' + amanCardsStr + '\n];\n');
    fs.writeFileSync(amanFile, amanContent);
    console.log('Aman cards injected.');
}

const hoqoqiFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/hoqoqi/rights.js';
let hoqoqiContent = fs.readFileSync(hoqoqiFile, 'utf8');

const newHoqoqiSources = `
  "pdpl:151-2020": {
    "url": "https://www.egypt.gov.eg/",
    "label": "قانون حماية البيانات الشخصية رقم 151 لسنة 2020",
    "tag": "Egyptian Law",
    "retrieved": "2026-08",
    "sha256": "mock-pdpl-151"
  }`;

const newHoqoqiCards = [
  {
    "id": "scenario-h30-pdpl-leak",
    "title": {
      "ar": "«حد سرّب بياناتي الشخصية — إيه حقوقي بالقانون المصري الجديد؟»",
      "en": "My personal data was leaked — what are my rights?"
    },
    "level": 4,
    "domain": "خصوصية",
    "who": ["أي مواطن"],
    "place": ["مصر"],
    "snapshot": {
      "ar": "قانون حماية البيانات الشخصية الجديد بيدي ليك الحق إنك تبلغ عن أي شركة أو جهة تسرب بياناتك (رقمك، عنوانك، صورك) من غير إذنك. في غرامات ضخمة على الجهات المخالفة.",
      "en": "The Personal Data Protection Law grants you the right to report any entity that leaks your personal data without consent, imposing massive fines on violators."
    },
    "do": [
      {
        "t": "وثّق تسريب البيانات (سكرين شوت أو إيميلات) بتثبت إن الجهة دي هي اللي سربتها.",
        "en": "Document the data leak with screenshots or emails proving the entity's responsibility.",
        "src": "pdpl:151-2020"
      },
      {
        "t": "قدّم بلاغ رسمي في مركز حماية البيانات الشخصية التابع لوزارة الاتصالات.",
        "en": "File an official complaint with the Personal Data Protection Center.",
        "src": "pdpl:151-2020"
      }
    ],
    "dont": [
      {
        "t": "ماتتجاهلش الموضوع لو بياناتك حساسة (صحية أو بنكية) لأن القانون بيشدد العقوبة فيها.",
        "en": "Do not ignore the issue if sensitive data (health/bank) is leaked, as penalties are stricter.",
        "src": "pdpl:151-2020"
      }
    ],
    "whenWhy": {
      "ar": "لو لقيت بياناتك الشخصية منشورة أو بتتباع أو بتستخدم في إعلانات مزعجة من جهة إنت مدتهاش إذن."
    },
    "redFlags": [
      "لو البيانات المسربة بتشمل أرقام بطاقات ائتمان أو بيانات طبية خطيرة."
    ],
    "basis": {
      "ar": "قانون رقم 151 لسنة 2020 (قانون حماية البيانات الشخصية)"
    },
    "quote": "يُحظر جمع البيانات الشخصية أو معالجتها أو الإفصاح عنها أو إفشاؤها بأية وسيلة من الوسائل إلا بموافقة صريحة من الشخص المعني.",
    "contacts": [
      {
        "label": "مركز حماية البيانات الشخصية (وزارة الاتصالات)",
        "number": "15344",
        "say": "أريد تقديم شكوى ضد جهة قامت بتسريب بياناتي الشخصية بالمخالفة للقانون 151."
      }
    ],
    "sources": [
      {
        "srcId": "pdpl:151-2020",
        "grade": "Official Law"
      }
    ]
  },
  {
    "id": "scenario-h31-erasure-right",
    "title": {
      "ar": "«عايز أمسح بياناتي من موقع — إيه حقي؟»",
      "en": "I want to delete my data from a website — what is my right?"
    },
    "level": 2,
    "domain": "خصوصية",
    "who": ["أي مواطن"],
    "place": ["مصر"],
    "snapshot": {
      "ar": "القانون بيكفل حق (المحو) أو مسح البيانات. يعني من حقك تطلب من أي شركة أو تطبيق يمسحوا بياناتك الشخصية اللي جمعوها عنك، وهما ملزمين ينفذوا ده قانوناً.",
      "en": "The law guarantees the right to erasure. You can legally demand any company or app to delete the personal data they collected about you."
    },
    "do": [
      {
        "t": "ابعت طلب رسمي (إيميل مسجل) للشركة بتطلب فيه محو بياناتك استناداً لقانون حماية البيانات.",
        "en": "Send a formal request (recorded email) to the company demanding data erasure under the Data Protection Law.",
        "src": "pdpl:151-2020"
      },
      {
        "t": "لو رفضوا أو تجاهلوا الطلب، صعد الشكوى لمركز حماية البيانات الشخصية.",
        "en": "If ignored or refused, escalate the complaint to the Data Protection Center.",
        "src": "pdpl:151-2020"
      }
    ],
    "dont": [
      {
        "t": "ماتكتفيش بمسح الحساب (Delete Account) في التطبيقات لو شاكك، لازم تطلب محو البيانات كلياً.",
        "en": "Don't just 'Delete Account' if suspicious; explicitly request total data erasure.",
        "src": "pdpl:151-2020"
      }
    ],
    "whenWhy": {
      "ar": "لو بطلت تستخدم خدمة معينة ومش عايز الشركة تحتفظ بمعلوماتك الشخصية."
    },
    "redFlags": [
      "لو الشركة طلبت رسوم عشان تمسح بياناتك (القانون بيمنع ده في معظم الحالات الأساسية)."
    ],
    "basis": {
      "ar": "قانون رقم 151 لسنة 2020 (المادة 2) - حقوق الشخص المعني بالبيانات"
    },
    "quote": "للشخص المعني بالبيانات الحق في... محو البيانات الشخصية الخاصة به.",
    "contacts": [
      {
        "label": "مركز حماية البيانات الشخصية (وزارة الاتصالات)",
        "number": "15344",
        "say": "أريد تقديم شكوى لرفض شركة محو بياناتي الشخصية."
      }
    ],
    "sources": [
      {
        "srcId": "pdpl:151-2020",
        "grade": "Official Law"
      }
    ]
  }
];

if (!hoqoqiContent.includes('scenario-h30-pdpl-leak')) {
    hoqoqiContent = hoqoqiContent.replace(/window\.SOURCES\s*=\s*\{/, 'window.SOURCES = {\n' + newHoqoqiSources + ',\n');
    const hoqoqiCardsStr = newHoqoqiCards.map(c => JSON.stringify(c, null, 2)).join(',\n');
    hoqoqiContent = hoqoqiContent.replace(/\]\s*;\s*$/, ',\n' + hoqoqiCardsStr + '\n];\n');
    fs.writeFileSync(hoqoqiFile, hoqoqiContent);
    console.log('Hoqoqi cards injected.');
}
