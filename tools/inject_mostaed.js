const fs = require('fs');

const file = 'c:/Users/pc/Desktop/EGY/mawthooq-site/mostaed/scenarios.js';
let content = fs.readFileSync(file, 'utf8');

const newSources = `
  "cdc:ebola": {
    "url": "https://www.cdc.gov/vhf/ebola/index.html",
    "label": "Ebola Virus Disease (EVD) Information",
    "tag": "CDC",
    "retrieved": "2026-08",
    "sha256": "mock-ebola-hash"
  },
  "who:mpox": {
    "url": "https://www.who.int/news-room/fact-sheets/detail/mpox",
    "label": "Mpox (monkeypox)",
    "tag": "WHO",
    "retrieved": "2026-08",
    "sha256": "mock-mpox-hash"
  },
  "cdc:measles": {
    "url": "https://www.cdc.gov/measles/index.html",
    "label": "Measles",
    "tag": "CDC",
    "retrieved": "2026-08",
    "sha256": "mock-measles-hash"
  },
  "cdc:heat": {
    "url": "https://www.cdc.gov/disasters/extremeheat/warning.html",
    "label": "Heat Stress Related Illness",
    "tag": "CDC",
    "retrieved": "2026-08",
    "sha256": "mock-heat-hash"
  },
  "ncsc:bec": {
    "url": "https://www.ncsc.gov.uk/guidance/business-email-compromise",
    "label": "Business Email Compromise (BEC)",
    "tag": "NCSC",
    "retrieved": "2026-08",
    "sha256": "mock-bec-hash"
  }`;

const newCards = [
  {
    "id": "scenario-ebola-travel-fever",
    "title": {
      "ar": "«حد رجع من أفريقيا وعنده حرارة عالية»",
      "en": "Fever after returning from Africa (Ebola risk)"
    },
    "level": 3,
    "domain": "طوارئ طبية",
    "who": ["البالغين", "أطفال"],
    "place": ["المنزل"],
    "snapshot": {
      "ar": "الحرارة العالية بعد السفر لأفريقيا ممكن تكون ملاريا أو أمراض تانية، مش شرط إيبولا. المهم تعزل المريض فوراً وتتصل بالطوارئ وتبلغهم بتاريخ السفر عشان يوجهوك صح بدون مبالغة أو هلع.",
      "en": "Fever after travel to Africa could be Malaria or other diseases, not necessarily Ebola. Isolate the patient and call emergency services, mentioning the travel history."
    },
    "do": [
      {
        "t": "اعزل المريض في أوضة لوحده بعيد عن باقي العيلة.",
        "src": "cdc:ebola"
      },
      {
        "t": "اتصل برقم الطوارئ (105 في مصر) وبلّغ عن الأعراض وقولهم إن المريض لسه راجع من أفريقيا.",
        "src": "cdc:ebola"
      }
    ],
    "dont": [
      {
        "t": "ماتلمسش دم أو أي سوائل من جسم المريض (عرق، لعاب، ترجيع) من غير حماية.",
        "src": "cdc:ebola"
      },
      {
        "t": "ماتروحش المستشفى أو العيادة بنفسك من غير ما تبلغهم الأول وتسمع تعليماتهم عشان ماتنقلش العدوى.",
        "src": "cdc:ebola"
      }
    ],
    "whenWhy": {
      "ar": "لو ظهرت حرارة عالية أو نزيف أو تعب شديد في خلال 21 يوم من الرجوع من منطقة فيها إيبولا."
    },
    "redFlags": [
      "نزيف غير مبرر من أي مكان في الجسم.",
      "إسهال أو ترجيع شديد مع حرارة."
    ],
    "sources": [
      {
        "srcId": "cdc:ebola",
        "grade": "CDC"
      }
    ]
  },
  {
    "id": "scenario-mpox-rash-fever",
    "title": {
      "ar": "«عندي طفح جلدي غريب مع حرارة»",
      "en": "Strange skin rash with fever (Mpox risk)"
    },
    "level": 2,
    "domain": "طوارئ طبية",
    "who": ["البالغين", "أطفال"],
    "place": ["المنزل"],
    "snapshot": {
      "ar": "الطفح الجلدي مع الحرارة ممكن يكون أمراض كتير زي الجديري. لو الطفح شبه الحبوب المليانة سائل، ممكن يكون جدري القرود (Mpox). محتاج كشف طبي وعزل لحد ما الدكتور يحدد السبب.",
      "en": "Rash with fever can be many things like chickenpox. If it looks like fluid-filled blisters, it could be Mpox. Needs medical assessment and isolation."
    },
    "do": [
      {
        "t": "اعزل نفسك عن باقي أهل البيت وماتشاركش معاهم الهدوم أو الفوط أو السرير.",
        "src": "who:mpox"
      },
      {
        "t": "غطي الطفح الجلدي بهدومك على قد ما تقدر والبس كمامة لو مضطر تتعامل مع حد.",
        "src": "who:mpox"
      }
    ],
    "dont": [
      {
        "t": "ماتحاولش تفرقع الحبوب أو تهرش فيها عشان العدوى ماتنتشرش أو تسيب أثر.",
        "src": "who:mpox"
      }
    ],
    "whenWhy": {
      "ar": "لو ظهر طفح جلدي جديد خصوصا لو معاه حرارة أو تضخم في الغدد الليمفاوية."
    },
    "redFlags": [
      "صعوبة في البلع أو التنفس لو الطفح جوه البق.",
      "ألم شديد لا يحتمل أو علامات عدوى بكتيرية فوق الطفح."
    ],
    "sources": [
      {
        "srcId": "who:mpox",
        "grade": "WHO"
      }
    ]
  },
  {
    "id": "scenario-measles-unvax-fever",
    "title": {
      "ar": "«ابني عنده طفح وحرارة عالية ومش متطعّم»",
      "en": "Fever and rash in an unvaccinated child (Measles risk)"
    },
    "level": 3,
    "domain": "طوارئ طبية",
    "who": ["أطفال"],
    "place": ["المنزل"],
    "snapshot": {
      "ar": "الحصبة مرض معدي جداً وخطير للأطفال اللي مش مطعمين. الطفح بيبدأ في الوش وينزل لتحت مع حرارة عالية وكحة وسيلان أنف. لازم استشارة دكتور فوراً.",
      "en": "Measles is highly contagious and dangerous for unvaccinated children. Rash starts on face and spreads down, accompanied by high fever, cough, and runny nose. Immediate medical consultation needed."
    },
    "do": [
      {
        "t": "كلّم الدكتور فوراً وقوله إن الطفل مش مطعم وعنده طفح عشان ياخدوا احتياطات العزل في العيادة.",
        "src": "cdc:measles"
      },
      {
        "t": "اعزل الطفل تماماً عن أي طفل تاني أو أي ست حامل.",
        "src": "cdc:measles"
      }
    ],
    "dont": [
      {
        "t": "ماتوديش الطفل الحضانة أو المدرسة أو أي مكان مقفول فيه ناس.",
        "src": "cdc:measles"
      },
      {
        "t": "ماتديش الأسبرين (Aspirin) لأي طفل عنده حرارة أبداً لأنه ممكن يسبب متلازمة راي المميتة.",
        "src": "cdc:measles"
      }
    ],
    "whenWhy": {
      "ar": "طفح جلدي بيبدأ من الوش مع حرارة عالية وكحة في طفل غير مطعم."
    },
    "redFlags": [
      "صعوبة في التنفس أو نهجان سريع.",
      "تشنجات حرارية أو دوخة شديدة وصعوبة في الصحيان."
    ],
    "sources": [
      {
        "srcId": "cdc:measles",
        "grade": "CDC"
      }
    ]
  },
  {
    "id": "scenario-heat-exhaustion-outdoor",
    "title": {
      "ar": "«بشتغل في الشمس وحاسس بدوخة وتعب شديد»",
      "en": "Dizziness and fatigue while working in the sun (Heat Exhaustion)"
    },
    "level": 2,
    "domain": "طوارئ بيئية",
    "who": ["البالغين"],
    "place": ["الشارع/الشغل"],
    "snapshot": {
      "ar": "الإجهاد الحراري بيحصل من الشغل في الشمس والحر بدون شرب مياه كفاية. أعراضه عرق شديد، دوخة، ضعف، وممكن غثيان. لو متلحقش ممكن يقلب بضربة شمس قاتلة.",
      "en": "Heat exhaustion results from working in heat without enough fluids. Symptoms include heavy sweating, dizziness, weakness, and nausea. If untreated, it can escalate to fatal heat stroke."
    },
    "do": [
      {
        "t": "انقل نفسك فوراً لمكان ضل أو فيه تكييف.",
        "src": "cdc:heat"
      },
      {
        "t": "اشرب مياه أو عصاير بالتدريج (مش مرة واحدة).",
        "src": "cdc:heat"
      },
      {
        "t": "برّد جسمك بكمادات مياه باردة، واستحمى بمياه فاترة لو أمكن.",
        "src": "cdc:heat"
      }
    ],
    "dont": [
      {
        "t": "ماتكملش شغل في الشمس مهما حصل.",
        "src": "cdc:heat"
      },
      {
        "t": "ماتشربش أي حاجة فيها كافيين أو كحول لأنها بتزود الجفاف.",
        "src": "cdc:heat"
      }
    ],
    "whenWhy": {
      "ar": "أثناء الشغل أو الوقفة الطويلة في الشمس."
    },
    "redFlags": [
      "لو العرق وقف وجلدك بقى سخن وناشف أحمر (دي ضربة شمس، طوارئ فورية).",
      "ترجيع مستمر أو فقدان للوعي."
    ],
    "sources": [
      {
        "srcId": "cdc:heat",
        "grade": "CDC"
      }
    ]
  },
  {
    "id": "scenario-bec-urgent-transfer",
    "title": {
      "ar": "«مديري بعتلي إيميل بيطلب تحويل فلوس مستعجل»",
      "en": "Manager emailed asking for an urgent wire transfer (BEC)"
    },
    "level": 3,
    "domain": "طوارئ رقمية",
    "who": ["البالغين"],
    "place": ["الشارع/الشغل"],
    "snapshot": {
      "ar": "ده اختراق لإيميل الشغل (BEC). النصابين بيخترقوا إيميل المدير أو بيعملوا إيميل شبهه بالظبط ويبعتولك تطلب تحويل فلوس مستعجل أو تغير رقم الحساب البنكي لعميل. دي أكتر طريقة الشركات بتخسر بيها فلوس.",
      "en": "This is Business Email Compromise (BEC). Scammers hack or spoof the manager's email to request urgent transfers or change bank details. It's the top way companies lose money."
    },
    "do": [
      {
        "t": "اتصل بالمدير شخصياً في التليفون (على رقمه المعروف) عشان تتأكد من الطلب.",
        "src": "ncsc:bec"
      },
      {
        "t": "راجع عنوان الإيميل حرف حرف، أحياناً بيبدلوا حرف (زي I مكان l) عشان يخدعوك.",
        "src": "ncsc:bec"
      }
    ],
    "dont": [
      {
        "t": "ماتحولش الفلوس أبداً بناءً على إيميل بس، مهما كان مكتوب فيه إنه مستعجل أو سري.",
        "src": "ncsc:bec"
      },
      {
        "t": "ماتردش على الإيميل تسأله (أنت متأكد؟) لأن النصاب اللي هيرد عليك.",
        "src": "ncsc:bec"
      }
    ],
    "whenWhy": {
      "ar": "أي طلب مستعجل لتحويل مبالغ، شراء بطاقات هدايا، أو تغيير الحساب البنكي لمورد."
    },
    "redFlags": [
      "صيغة الكلام غريبة أو فيها استعجال وضغط كبير.",
      "بيقولك خلي الموضوع سري وماتقولش لحد."
    ],
    "sources": [
      {
        "srcId": "ncsc:bec",
        "grade": "NCSC"
      }
    ]
  }
];

if (content.includes('scenario-ebola-travel-fever')) {
    console.log('Cards already injected in mostaed.');
} else {
    // Inject sources
    content = content.replace(/window\.SOURCES\s*=\s*\{/, 'window.SOURCES = {\n' + newSources + ',\n');
    // Inject cards
    const cardsStr = newCards.map(c => JSON.stringify(c, null, 2)).join(',\n');
    content = content.replace(/\]\s*;\s*$/, ',\n' + cardsStr + '\n];\n');
    fs.writeFileSync(file, content);
    console.log('Mostaed cards injected.');
}
