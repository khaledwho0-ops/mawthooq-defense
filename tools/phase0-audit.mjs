import { createHash } from 'node:crypto';
import { mkdir, readFile, rename, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const AUDIT_DATE = '2026-08-02';
const OUTPUT = path.join(ROOT, 'docs', 'audits', `phase0-${AUDIT_DATE}`);
const CORPUS = path.join(OUTPUT, 'corpus');
const STATUSES = ['established', 'contested', 'debunked', 'unknown'];
const ARABIC_DIGITS = new Map([...'٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹'].map((digit, index) => [digit, String(index % 10)]));

const AMAN_SCENARIOS = [
  ['A1', '«أمي وأخويا اتأخروا وموبايلهم مقفول»', 'https://www.gov.uk/report-missing-person'],
  ['A2', '«والدي في دولة تانية وفقدت الاتصال بيه»'],
  ['A3', '«جالي تليفون إن ابني/أخويا اتخطف وعايزين فدية دلوقتي»', 'https://consumer.ftc.gov/articles/family-emergency-scams'],
  ['A4', '«بنتي بتتكلم مع حد على النت ومش عارفة مين»', 'https://www.ncsc.gov.uk/guidance/social-media-how-to-use-it-safely'],
  ['A5', '«حد بيهددني ينشر صوري»', 'https://www.ncsc.gov.uk/guidance/sextortion-scams-how-to-protect-yourself'],
  ['A6', '«حاسس إن حد بيتابعني من موبايلي»', 'https://consumer.ftc.gov/articles/how-protect-your-phone-hackers'],
  ['A7', '«موبايلي فصل فجأة ومش راجع»', 'https://www.ic3.gov/PSA/2022/PSA220208'],
  ['A8', '«حد دخل على حسابي البنكي»', 'https://www.identitytheft.gov/'],
  ['A9', '«اتسرق موبايلي — دلوقتي أعمل إيه بالترتيب»', 'https://support.google.com/accounts/answer/6160491'],
  ['A10', '«حد فتح حساب/قرض باسمي»', 'https://www.identitytheft.gov/'],
  ['A11', '«حوّلت فلوس لحد اكتشفت إنه نصاب»', 'https://consumer.ftc.gov/articles/what-do-if-you-were-scammed'],
  ['A12', '«شغل أونلاين طلب مني أستلم فلوس وأحوّلها»', 'https://consumer.ftc.gov/articles/job-scams'],
  ['A13', '«قالولي استثمار مضمون في الكريبتو»', 'https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams'],
  ['A14', '«اشتريت من صفحة ومستلمتش حاجة»', 'https://consumer.ftc.gov/articles/what-do-if-you-were-scammed'],
  ['A15', '«حسابي اتسرق وبيبعت رسايل لناسي»', 'https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account'],
  ['A16', '«جالي كود OTP وأنا مش بسجّل دخول»', 'https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/activate-2-step-verification-on-your-email'],
  ['A17', '«الويندوز بتاعي اتقفل وطالبين فدية»', 'https://www.ncsc.gov.uk/ransomware/home'],
  ['A18', '«إيميلي ظهر في تسريب بيانات»', 'https://consumer.ftc.gov/articles/what-do-data-breach'],
  ['A19', '«موبايل ابني فيه تطبيقات مش عارفها»', 'https://consumer.ftc.gov/articles/how-protect-kids-online'],
  ['A20', '«فقدت الوصول لإيميلي وكل حساباتي مربوطة بيه»', 'https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account'],
  ['A21', '«كاميرا البيت — مين شايفها غيري؟»', 'https://www.ncsc.gov.uk/guidance/smart-devices-in-the-home'],
  ['A22', '«الراوتر بتاعي — حد تاني عليه؟»', 'https://www.cisa.gov/secure-our-world'],
  ['A23', '«جدّي بيرد على كل مكالمة وبيصدّق»', 'https://consumer.ftc.gov/consumer-alerts/2024/10/report-fraud-ftc-what-older-adults-need-know'],
  ['A24', '«ولادي بينشروا كل حاجة — إيه اللي بيبان للمجرم؟»', 'https://www.ncsc.gov.uk/guidance/social-media-how-to-use-it-safely'],
];

const CONSTITUTION = 'https://www.constituteproject.org/constitution/Egypt_2014';
const HOQOQI_SCENARIOS = [
  ['H1', '«اتقبض على أخويا — أعمل إيه في أول ٢٤ ساعة؟»', CONSTITUTION],
  ['H2', '«البوليس عايز يفتش بيتي»', CONSTITUTION],
  ['H3', '«حد اعتدى عليّ»', CONSTITUTION],
  ['H4', '«اتحرشوا بيّا في الشارع»', CONSTITUTION],
  ['H5', '«اتعرضت لتعذيب/إساءة في الاحتجاز»', CONSTITUTION],
  ['H6', '«المدرسة بتضرب ابني»', CONSTITUTION],
  ['H7', '«أبويا كبير وحد بياخد فلوسه»', 'https://www.who.int/news-room/fact-sheets/detail/abuse-of-older-people'],
  ['H8', '«أختي جوزها بيضربها»', 'https://www.who.int/news-room/fact-sheets/detail/violence-against-women'],
  ['H9', '«ابني اتمنع من التعليم»', CONSTITUTION],
  ['H10', '«أمي محتاجة علاج ورفضوا»', CONSTITUTION],
  ['H11', '«مديري بيهددني بالفصل من غير سبب»', CONSTITUTION],
  ['H12', '«مش بياخد أجري»', 'https://www.ilo.org/topics-and-sectors/wages'],
  ['H13', '«شغل خطر من غير أمان»', 'https://www.ilo.org/topics/safety-and-health-work'],
  ['H14', '«بيميّزوا ضدي في الشغل»', CONSTITUTION],
  ['H15', '«المحل رفض يرجّع البضاعة المعيبة»', 'https://www.cpa.gov.eg/'],
  ['H16', '«اتنصب عليّ»', 'https://consumer.ftc.gov/articles/what-do-if-you-were-scammed'],
  ['H17', '«صاحب البيت عايز يطردني»', CONSTITUTION],
  ['H18', '«منعوني من مكان عام»', CONSTITUTION],
  ['H19', '«إيه حقوقي الأساسية أصلًا؟»', 'https://www.un.org/en/about-us/universal-declaration-of-human-rights'],
  ['H20', '«حقوقي كست»', CONSTITUTION],
  ['H21', '«حقوقي كراجل»', CONSTITUTION],
  ['H22', '«إزاي أعرف حقي حقيقي ولا حد بيضحك عليّا؟»', CONSTITUTION],
];

const SCENARIO_TERMS = {
  A1: [['missing person', 'report missing']], A3: [['family emergency', 'kidnap', 'ransom']], A4: [['grooming', 'child safety', 'children online']],
  A5: [['sextortion']], A6: [['stalkerware', 'spyware', 'phone hackers', 'phone from hackers']], A7: [['sim swap']],
  A8: [['identity theft', 'unauthorized bank']], A9: [['lost phone', 'stolen phone', 'lost device', 'stolen device']], A10: [['identity theft', 'new account', 'account opened']],
  A11: [['scammed', 'reverse the transaction']], A12: [['job scam', 'money mule']], A13: [['cryptocurrency', 'crypto']], A14: [['scammed', 'online shopping']],
  A15: [['hacked account']], A16: [['2-step', 'two-step', 'multifactor', 'multi-factor']], A17: [['ransomware']], A18: [['data breach']],
  A19: [['kids online', 'children online', 'child online']], A20: [['hacked account']], A21: [['smart device', 'security camera']],
  A22: [['router', 'wi-fi', 'wifi', 'wireless network']], A23: [['older adults', 'older consumers', 'elder fraud']], A24: [['social media'], ['privacy', 'personal information']],
  H1: [['24 hours', 'twenty-four hours'], ['lawyer', 'attorney']], H2: [['homes are inviolable', 'judicial warrant']], H3: [['statute of limitations', 'rights and freedoms']],
  H4: [['harassment', 'sexual violence']], H5: [['torture']], H6: [['child'], ['violence', 'abuse']], H7: [['elder abuse', 'abuse of older people']],
  H8: [['violence against women']], H9: [['education']], H10: [['health']], H11: [['dismissal', 'termination', 'unlawful firing']], H12: [['wage', 'remuneration']],
  H13: [['occupational safety', 'safety and health at work']], H14: [['discrimination', 'equal opportunity']], H15: [['consumer', 'المستهلك'], ['complaint', 'defective', 'شكوى', 'الشكاوى', 'معيبة']],
  H16: [['scammed', 'fraud']], H17: [['eviction', 'tenant', 'housing']], H18: [['public place', 'public access']], H19: [['human rights']],
  H20: [['women'], ['equal', 'equality']], H21: [['equal', 'equality']], H22: [['rights and freedoms', 'human rights']],
};

function normalizeDigits(value) {
  return String(value).replace(/[٠-٩۰-۹]/g, (digit) => ARABIC_DIGITS.get(digit));
}

function plainText(value) {
  return String(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function stableFilename(url, prefix = 'source') {
  const parsed = new URL(url);
  const stem = `${parsed.hostname}${parsed.pathname}`.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 90) || prefix;
  const suffix = createHash('sha256').update(url).digest('hex').slice(0, 10);
  return `${stem}-${suffix}.html`;
}

async function loadJavaScriptData(file, globalName) {
  const source = await readFile(file, 'utf8');
  const window = Object.create(null);
  const context = vm.createContext({ window }, { codeGeneration: { strings: false, wasm: false } });
  new vm.Script(source, { filename: file, timeout: 2_000 }).runInContext(context, { timeout: 2_000 });
  const records = window[globalName];
  const sources = window.SOURCES ?? {};
  if (!Array.isArray(records)) throw new Error(`window.${globalName} must be an array`);
  if (!sources || typeof sources !== 'object' || Array.isArray(sources)) throw new Error('window.SOURCES must be an object');
  const ids = new Set();
  for (const record of records) {
    if (!record || typeof record !== 'object' || typeof record.id !== 'string' || !record.id) throw new Error('Every record must have a non-empty string ID');
    if (ids.has(record.id)) throw new Error(`Duplicate ID ${record.id}`);
    ids.add(record.id);
  }
  assertSourceReferences(records, sources);
  return { records: structuredClone(records), sources: structuredClone(sources) };
}

function assertSourceReferences(records, sources) {
  const visit = (value) => {
    if (!value || typeof value !== 'object') return;
    if (typeof value.srcId === 'string' && !sources[value.srcId]) throw new Error(`Missing referenced source ${value.srcId}`);
    if (typeof value.src === 'string' && !sources[value.src]) throw new Error(`Missing referenced source ${value.src}`);
    for (const child of Object.values(value)) visit(child);
  };
  for (const record of records) visit(record);
}

function detectStatisticalQuantities(text) {
  const value = String(text);
  const digit = '[0-9٠-٩۰-۹]';
  const number = `${digit}+(?:[.,٫]${digit}+)*`;
  const candidates = [];
  const patterns = [
    new RegExp(`${number}\\s*(?:%|٪|percent(?:age)?)`, 'giu'),
    new RegExp(`${number}\\s*[:/]\\s*${number}`, 'gu'),
    new RegExp(`\\b(?:more\\s+than\\s+|over\\s+|under\\s+|less\\s+than\\s+|at\\s+least\\s+|about\\s+|approximately\\s+|~\\s*)?${number}\\s*\\+?\\s*(?:(?:hundred|thousand|million|billion)s?\\s+)?(?:people|persons|participants|patients|adults|children|cases|respondents|workers|women|men|studies|trials|disorders|reviews|years?|months?|weeks?|days?|hours?|minutes?|times?)\\b`, 'giu'),
    new RegExp(`(?:أكتر\\s+من\\s+|أكثر\\s+من\\s+|أقل\\s+من\\s+|حوالي\\s+|نحو\\s+|قرابة\\s+)?${number}\\s*\\+?\\s*(?:(?:ألف|آلاف|مليون|ملايين|مليار|مليارات)\\s+)?(?:شخص|أشخاص|مشارك|مشاركين|مشاركاً|مريض|مرضى|دراسة|دراسات|تجربة|تجارب|اضطراب|اضطرابات|مراجعة|مراجعات|سنة|سنوات|شهر|شهور|أسبوع|أسابيع|يوم|أيام|ساعة|ساعات|دقيقة|دقائق|مرة|مرات)`, 'gu'),
    /\b(?:one[- ]half|half|one[- ]third|a third|one[- ]quarter|a quarter|two[- ]thirds|three[- ]quarters)(?:\s+[a-z][a-z-]*){1,5}/giu,
    /(?:نص|نصف|النصف|ثلث|الثلث|ربع|الربع|تلت|التلت)(?:\s+[\u0600-\u06ffًٌٍَُِّْٰـ]+){1,5}/gu,
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten)(?:\s+[a-z][a-z-]*){0,3}\s+(?:people|persons|participants|patients|adults|children|cases|respondents|workers|women|men|studies|trials|disorders|reviews|years?|months?|weeks?|days?|hours?|minutes?|times)\b/giu,
    /(?:واحد|واحدة|اتنين|اثنين|اثنان|ثلاثة|تلاتة|أربعة|اربعة|خمسة|ستة|سبعة|ثمانية|تمانية|تسعة|عشرة)(?:\s+[\u0600-\u06ffًٌٍَُِّْٰـ]+){0,3}\s+(?:شخص|أشخاص|مشارك|مشاركين|مريض|مرضى|دراسة|دراسات|تجربة|تجارب|اضطراب|اضطرابات|مراجعة|مراجعات|سنة|سنوات|شهر|شهور|أسبوع|أسابيع|يوم|أيام|ساعة|ساعات|دقيقة|دقائق|مرة|مرات)/gu,
    /(?:مراجعتان|مراجعتين|مراجعتَيْن)(?:\s+[\u0600-\u06ffًٌٍَُِّْٰـ]+){0,3}/gu,
    /\b(?:hundreds|thousands|millions|billions)\b/giu,
    /(?:مئات|آلاف|ملايين|مليارات)(?![\u0600-\u06ff])/gu,
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten)\b(?=\s*[:：])/giu,
    /(?:واحد|واحدة|اتنين|اثنين|اثنان|ثلاثة|تلاتة|أربعة|اربعة|خمسة|ستة|سبعة|ثمانية|تمانية|تسعة|عشرة)(?=\s*[:：])/gu,
    new RegExp(`(?<!${digit})${number}(?!${digit})`, 'gu'),
  ];
  patterns.forEach((pattern, priority) => {
    for (const match of value.matchAll(pattern)) candidates.push({ start: match.index, end: match.index + match[0].length, text: match[0].trim(), priority });
  });
  const accepted = [];
  for (const candidate of candidates.sort((a, b) => a.priority - b.priority || a.start - b.start || b.end - a.end)) {
    if (!accepted.some((item) => candidate.start < item.end && candidate.end > item.start)) accepted.push(candidate);
  }
  const ordered = accepted.sort((a, b) => a.start - b.start);
  const sentenceFor = (item) => {
    let start = item.start;
    while (start > 0 && !/[.!?؟\n]/u.test(value[start - 1])) start -= 1;
    let end = item.end;
    while (end < value.length && !/[.!?؟\n]/u.test(value[end])) end += 1;
    if (end < value.length && value[end] !== '\n') end += 1;
    return value.slice(start, end).trim();
  };
  const quantities = ordered.map(sentenceFor).filter((quantity, index, all) => all.indexOf(quantity) === index);
  return { hasStatistic: quantities.length > 0, quantities, markers: ordered.map((item) => item.text) };
}

function scanBroadQuantitativeCandidates(text) {
  const value = String(text);
  const patterns = [
    /[0-9٠-٩۰-۹]+(?:[.,٫][0-9٠-٩۰-۹]+)*(?:\s*(?:%|٪|\+))?/gu,
    /\b(?:zero|one|two|three|four|five|six|seven|eight|nine|ten|dozen|dozens)(?:\s+[a-z][a-z-]*){0,4}\s+(?:people|persons|participants|patients|adults|children|cases|respondents|workers|women|men|studies|trials|disorders|reviews|years?|months?|weeks?|days?|hours?|minutes?|times?)\b/giu,
    /\b(?:score|scores) of\b|\b(?:hundreds|thousands|millions|billions|half|third|quarter|percent|percentage|ratio|odds|fold)\b/giu,
    /(?:صفر|واحد|واحدة|اتنين|اثنين|اثنان|ثلاثة|تلاتة|أربعة|اربعة|خمسة|ستة|سبعة|ثمانية|تمانية|تسعة|عشرة|دستة|عشرات)(?:\s+[\u0600-\u06ffًٌٍَُِّْٰـ]+){0,4}\s+(?:شخص|أشخاص|مشارك|مشاركين|مريض|مرضى|دراسة|دراسات|تجربة|تجارب|اضطراب|اضطرابات|مراجعة|مراجعات|سنة|سنوات|شهر|شهور|أسبوع|أسابيع|يوم|أيام|ساعة|ساعات|دقيقة|دقائق|مرة|مرات)|(?:مئات|آلاف|ملايين|مليارات|نص|نصف|ثلث|ربع|بالمئة|في المئة|أضعاف|مراجعتان|مراجعتين)(?![\u0600-\u06ff])/gu,
  ];
  const candidates = patterns.flatMap((pattern) => [...value.matchAll(pattern)].map((match) => match[0]));
  return { hasCandidate: candidates.length > 0, candidates: [...new Set(candidates)] };
}

function validateStatisticalDecisionCompleteness(claims, decisionRecords) {
  const errors = [];
  const recordsById = new Map();
  for (const record of decisionRecords) {
    if (recordsById.has(record.id)) errors.push(`Motazen duplicate audit decision record: ${record.id}`);
    else recordsById.set(record.id, record);
  }
  for (const claim of claims) {
    const record = recordsById.get(claim.id);
    if (!record) {
      errors.push(`Motazen audit decision missing: ${claim.id}`);
      continue;
    }
    if (!['statistical', 'not-statistical'].includes(record.decision)) {
      errors.push(`Motazen audit decision missing or undecided: ${claim.id}`);
      continue;
    }
    const claimText = `${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`;
    if (scanBroadQuantitativeCandidates(claimText).hasCandidate && record.decision !== 'statistical') {
      errors.push(`Motazen broad quantitative candidate not marked statistical: ${claim.id}`);
    }
  }
  return { complete: errors.length === 0, errors };
}

function extractContactNumbers(record) {
  const found = new Map();
  const contactContext = /(contact|whoToCall|who_to_call|phone|hotline|number|do\[|dont\[|say|whenWhy|first_60_seconds)/i;
  const callWords = /(?:call|phone|hotline|dial|contact|number|اتصل|اتصلي|كلم|كلّم|رقم|خط ساخن|اطلب)/iu;
  const visit = (value, fieldPath = '') => {
    if (Array.isArray(value)) return value.forEach((child, index) => visit(child, `${fieldPath}[${index}]`));
    if (value && typeof value === 'object') return Object.keys(value).sort().forEach((key) => visit(value[key], fieldPath ? `${fieldPath}.${key}` : key));
    if (typeof value !== 'string' || !contactContext.test(fieldPath)) return;
    const normalized = normalizeDigits(value);
    for (const match of normalized.matchAll(/(?<!\d)(?:\+?\d[\d ()-]{1,}\d)(?!\d)/g)) {
      const number = match[0].replace(/\D/g, '');
      if (number.length < 3 || number.length > 15 || (/^(?:19|20)\d{2}$/.test(number) && !callWords.test(value))) continue;
      if (!/^contacts(?:\[|\.)/i.test(fieldPath) && !/(?:number|phone|hotline)/i.test(fieldPath) && !callWords.test(value)) continue;
      found.set(`${fieldPath}\0${number}`, { fieldPath, number, rendered: value.slice(match.index, match.index + match[0].length) });
    }
  };
  visit(record);
  return [...found.values()].sort((a, b) => a.fieldPath.localeCompare(b.fieldPath, 'en') || a.number.localeCompare(b.number, 'en'));
}

function sourceContainsExactNumber(sourceText, number) {
  const haystack = normalizeDigits(sourceText).replace(/[\s()\-]/g, '');
  const needle = normalizeDigits(number).replace(/\D/g, '');
  return needle.length >= 3 && new RegExp(`(^|\\D)${needle}(?!\\d)`).test(haystack);
}

function isScenarioCard(card, project) {
  if (project === 'aman') return ['first_60_seconds', 'the_clock', 'the_criminal_lens', 'myths_that_kill', 'الدليل'].every((key) => Object.hasOwn(card, key));
  if (project === 'hoqoqi') {
    return ['my_right', 'الدليل', 'how_to_recover', 'do', 'dont', 'who_to_call'].every((key) => Object.hasOwn(card, key))
      && card.how_to_recover && typeof card.how_to_recover === 'object'
      && Object.hasOwn(card.how_to_recover, 'principle') && Object.hasOwn(card.how_to_recover, 'procedure');
  }
  return false;
}

function csvCell(value) {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function toCsv(rows, columns) {
  const sorted = [...rows].sort((a, b) => columns.map((column) => String(a[column] ?? '')).join('\0').localeCompare(columns.map((column) => String(b[column] ?? '')).join('\0'), 'en'));
  return `${columns.map(csvCell).join(',')}\r\n${sorted.map((row) => columns.map((column) => csvCell(row[column])).join(',')).join('\r\n')}\r\n`;
}

function validateRequiredInventories(inventories) {
  const errors = [];
  for (const inventory of inventories) {
    const actual = new Set(inventory.actual);
    const missing = [...new Set(inventory.expected)].filter((key) => !actual.has(key)).sort((a, b) => a.localeCompare(b, 'en'));
    if (missing.length) errors.push(`${inventory.name} missing: ${missing.join(', ')}`);
  }
  return { complete: errors.length === 0, errors };
}

function evaluateGate(records, matricesComplete, inventoryCompleteness = { complete: true, errors: [] }) {
  const blockers = records.filter((record) => record?.verdict !== 'PASS' || record?.complete !== true);
  const structuralBlockers = (matricesComplete ? 0 : 1) + (inventoryCompleteness.complete ? 0 : inventoryCompleteness.errors.length || 1);
  return { clear: matricesComplete === true && inventoryCompleteness.complete === true && blockers.length === 0, blockers: blockers.length + structuralBlockers };
}

function validateSourceDocument(decoded) {
  const visible = plainText(decoded);
  const words = visible.toLowerCase().match(/[a-zà-ž\u0600-\u06ff]{3,}/gu) ?? [];
  const uniqueWords = new Set(words);
  const shellMarker = /(?:requires javascript to function|enable javascript to (?:run|use) this app)/i.test(visible);
  const rootOnly = /<div\b[^>]*\bid=["'](?:root|app)["'][^>]*>\s*<\/div>/i.test(decoded) && visible.length < 1_000;
  if (visible.length < 1_000 || shellMarker || rootOnly) {
    return { substantive: false, reason: `non-substantive page content (${visible.length} visible characters; ${uniqueWords.size} distinct words)`, visibleText: visible };
  }
  return { substantive: true, reason: 'substantive page-specific content', visibleText: visible };
}

function hasScenarioEvidence(sourceText, requiredTermGroups = []) {
  const visible = plainText(sourceText).toLowerCase();
  const missingGroups = requiredTermGroups.filter((group) => !group.some((term) => visible.includes(String(term).toLowerCase())));
  return { matched: missingGroups.length === 0, missingGroups };
}

function sortCorpusIndex(entries) {
  return [...entries].sort((a, b) => String(a.url).localeCompare(String(b.url), 'en'));
}

async function loadPriorCapture(url, options = {}) {
  const { corpusDir = CORPUS, filename = stableFilename(url), expectedSha256, readFileImpl = readFile, statImpl = stat } = options;
  try {
    const destination = path.join(corpusDir, filename);
    const bytes = await readFileImpl(destination);
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    if (expectedSha256 && sha256 !== expectedSha256) throw new Error(`prior capture hash mismatch for ${filename}`);
    const decoded = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const assessment = validateSourceDocument(decoded);
    if (!assessment.substantive) return null;
    const existingStat = await statImpl(destination);
    return { status: 'saved', httpStatus: 200, decodedLength: decoded.length, finalUrl: url, retrievedAt: existingStat.mtime.toISOString(), sha256, filename, text: decoded };
  } catch (error) {
    if (error?.code === 'ENOENT') return null;
    throw error;
  }
}

async function fetchAndCapture(url, options = {}) {
  const { corpusDir = CORPUS, filename = stableFilename(url), fetchImpl = fetch, retrievedAt = new Date().toISOString() } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 20_000);
  try {
    const response = await fetchImpl(url, { redirect: 'follow', signal: controller.signal, headers: { 'user-agent': 'EAL-Phase0-Audit/1.0 (+evidence capture)' } });
    const bytes = Buffer.from(await response.arrayBuffer());
    const decoded = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    const top = plainText(decoded.slice(0, 12_000)).toLowerCase();
    const notFound = /(?:page not found|404 not found|the page you requested (?:was not found|could not be found)|الصفحة غير موجودة)/i.test(top);
    const assessment = validateSourceDocument(decoded);
    if (response.status !== 200 || decoded.length <= 1200 || notFound || !assessment.substantive) {
      return { status: 'blocked', httpStatus: response.status, decodedLength: decoded.length, finalUrl: response.url || url, retrievedAt, reason: response.status !== 200 ? `HTTP ${response.status}` : decoded.length <= 1200 ? `decoded body ${decoded.length} <= 1200` : notFound ? 'not-found marker near top' : assessment.reason };
    }
    await mkdir(corpusDir, { recursive: true });
    const destination = path.join(corpusDir, filename);
    const temporary = `${destination}.${process.pid}.tmp`;
    await writeFile(temporary, bytes);
    await rename(temporary, destination);
    return { status: 'saved', httpStatus: 200, decodedLength: decoded.length, finalUrl: response.url || url, retrievedAt, sha256: createHash('sha256').update(bytes).digest('hex'), filename, text: decoded };
  } catch (error) {
    return { status: 'blocked', httpStatus: null, decodedLength: 0, finalUrl: url, retrievedAt, reason: error.name === 'AbortError' ? 'request timeout' : String(error.message || error) };
  } finally {
    clearTimeout(timer);
  }
}

function sourceRefs(record, sources) {
  return (record.sources ?? []).map((reference) => {
    const source = sources[reference.srcId] ?? {};
    return { id: reference.srcId ?? '(inline)', url: reference.url ?? source.url ?? '', label: reference.label ?? source.label ?? '', metadata: { ...source, ...reference } };
  });
}

function excerptAround(text, needles, qualifierOnly = false) {
  const clean = plainText(text);
  const lower = normalizeDigits(clean).toLowerCase();
  const candidates = qualifierOnly ? ['except', 'unless', 'do not', 'should not', 'not if', 'only if', 'warning', 'avoid', 'emergency'] : needles.map((needle) => normalizeDigits(needle).toLowerCase());
  const index = candidates.map((needle) => lower.indexOf(needle)).find((position) => position >= 0) ?? -1;
  if (index < 0) return '(No matching excerpt located automatically.)';
  return clean.slice(Math.max(0, index - 260), Math.min(clean.length, index + 520)).trim();
}

function sourceStatus(captures, references) {
  return references.map((reference) => {
    const capture = captures.get(reference.url);
    return { ...reference, capture };
  });
}

function markdownTable(rows, columns) {
  const clean = (value) => String(value ?? '').replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
  return [`| ${columns.join(' | ')} |`, `|${columns.map(() => '---').join('|')}|`, ...rows.map((row) => `| ${columns.map((column) => clean(row[column])).join(' | ')} |`)].join('\n');
}

async function fetchAll(urls) {
  const unique = [...new Set(urls.filter(Boolean))].sort();
  const results = new Map();
  let priorIndex = new Map();
  let priorIndexError = null;
  try {
    const entries = JSON.parse(await readFile(path.join(CORPUS, 'index.json'), 'utf8'));
    if (!Array.isArray(entries)) throw new Error('prior corpus index must be an array');
    priorIndex = new Map(entries.map((entry) => [entry.url, entry]));
  } catch (error) {
    if (error?.code !== 'ENOENT') priorIndexError = error;
  }
  let cursor = 0;
  async function worker() {
    while (cursor < unique.length) {
      const url = unique[cursor++];
      const filename = stableFilename(url);
      const capture = await fetchAndCapture(url, { filename });
      if (capture.status === 'blocked' && capture.httpStatus === null) {
        if (priorIndexError) {
          results.set(url, { ...capture, reason: `prior-index blocker: ${priorIndexError.message || priorIndexError}` });
          continue;
        }
        const priorRecord = priorIndex.get(url);
        if (priorRecord?.status !== 'saved') {
          results.set(url, capture);
          continue;
        }
        try {
          const prior = await loadPriorCapture(url, { filename, expectedSha256: priorRecord.sha256 });
          if (prior) {
            results.set(url, { ...prior, preservedAfterFailedProbe: capture.reason });
            continue;
          }
        } catch (error) {
          results.set(url, { ...capture, reason: `prior-capture blocker: ${error.message || error}` });
          continue;
        }
      }
      results.set(url, capture);
    }
  }
  await Promise.all(Array.from({ length: Math.min(8, unique.length) }, () => worker()));
  return results;
}

function buildCoverage(data, dimension, values) {
  const domains = [...new Set(data.map((record) => record.domain ?? '(missing)'))].sort((a, b) => String(a).localeCompare(String(b), 'ar'));
  return domains.flatMap((domain) => values.map((value) => {
    const records = data.filter((record) => record.domain === domain && String(record[dimension]) === String(value)).sort((a, b) => a.id.localeCompare(b.id, 'en'));
    return { domain, [dimension]: value, count: records.length, ids: records.map((record) => record.id).join(' ') };
  }));
}

async function generateScenarioCoverage(inventory, cards, project, captures) {
  return inventory.map(([id, title, url]) => {
    const builtCards = cards.filter((card) => isScenarioCard(card, project));
    const built = builtCards.find((card) => card.id === id || card.scenario_id === id);
    if (built) return { id, title, status: 'built', probe_url: '', probe_result: 'existing required-shape scenario card' };
    if (!url) return { id, title, status: 'not-built-unprobed', probe_url: '', probe_result: 'no official/primary candidate selected' };
    const capture = captures.get(url);
    if (capture?.status !== 'saved') return { id, title, status: 'no-source', probe_url: url, probe_result: capture?.reason ?? 'probe unavailable' };
    const evidence = hasScenarioEvidence(capture.text, SCENARIO_TERMS[id] ?? []);
    if (!evidence.matched) return { id, title, status: 'no-source', probe_url: url, probe_result: `200 but not scenario-specific; missing semantic evidence for ${evidence.missingGroups.map((group) => group.join('|')).join('; ')}` };
    return { id, title, status: 'source-found', probe_url: url, probe_result: `200; substantive scenario evidence; ${capture.decodedLength} chars; sha256 ${capture.sha256}` };
  });
}

async function writeOutputs() {
  await mkdir(CORPUS, { recursive: true });
  const inputPaths = {
    mostaed: path.join(ROOT, 'mostaed', 'scenarios.js'), motazen: path.join(ROOT, 'motazen', 'claims.js'),
    aman: path.join(ROOT, 'aman', 'threats.js'), hoqoqi: path.join(ROOT, 'hoqoqi', 'rights.js'),
  };
  const beforeBytes = new Map(await Promise.all(Object.entries(inputPaths).map(async ([key, file]) => [key, await readFile(file)])));
  const [mostaed, motazen, aman, hoqoqi] = await Promise.all([
    loadJavaScriptData(inputPaths.mostaed, 'SCENARIOS'), loadJavaScriptData(inputPaths.motazen, 'CLAIMS'),
    loadJavaScriptData(inputPaths.aman, 'CARDS'), loadJavaScriptData(inputPaths.hoqoqi, 'CARDS'),
  ]);

  const mostaedScope = mostaed.records.filter((card) => Number(card.level) >= 4 && sourceRefs(card, mostaed.sources).some((source) => /medlineplus\.gov\/ency\//i.test(source.url) && /A\.D\.A\.M|Ebix|MedlinePlus/i.test(`${source.label} ${JSON.stringify(source.metadata)}`)));
  const statisticalClaims = motazen.records.filter((claim) => detectStatisticalQuantities(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`).hasStatistic);
  const allClaimsInventory = motazen.records.map((claim) => {
    const detected = detectStatisticalQuantities(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`);
    return { id: claim.id, domain: claim.domain, status: claim.status, decision: detected.hasStatistic ? 'statistical' : 'not-statistical', quantities: detected.quantities.join(' | ') };
  });
  const contactItems = [['aman', aman], ['hoqoqi', hoqoqi]].flatMap(([project, data]) => data.records.flatMap((card) => extractContactNumbers(card).map((contact) => ({ project, card, contact, refs: sourceRefs(card, data.sources) }))));
  const auditUrls = [...mostaedScope.flatMap((card) => sourceRefs(card, mostaed.sources).filter((source) => /medlineplus\.gov\/ency\//i.test(source.url)).map((source) => source.url)), ...statisticalClaims.flatMap((claim) => sourceRefs(claim, motazen.sources).map((source) => source.url)), ...contactItems.flatMap((item) => item.refs.map((source) => source.url))];
  const scenarioUrls = [...AMAN_SCENARIOS, ...HOQOQI_SCENARIOS].map((item) => item[2]).filter(Boolean);
  const captures = await fetchAll([...auditUrls, ...scenarioUrls]);

  const mostaedAudit = mostaedScope.map((card) => {
    const refs = sourceStatus(captures, sourceRefs(card, mostaed.sources).filter((source) => /medlineplus\.gov\/ency\//i.test(source.url)));
    const fetched = refs.filter((source) => source.capture?.status === 'saved');
    const lines = [...(card.do ?? []).map((item, index) => `do[${index}]: ${typeof item === 'string' ? item : item.t}`), ...(card.dont ?? []).map((item, index) => `dont[${index}]: ${typeof item === 'string' ? item : item.t}`)];
    const qualifiers = fetched.map((source) => excerptAround(source.capture.text, [], true)).filter((text) => !text.startsWith('(No matching'));
    const reason = fetched.length !== refs.length ? 'At least one referenced source was inaccessible.' : 'Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.';
    return { id: card.id, title: card.title?.ar ?? card.title?.en ?? '', level: card.level, refs, lines, qualifiers, verdict: 'BLOCKED', complete: Boolean(card.id && refs.length && lines.length && reason), reason };
  });

  const motazenAudit = statisticalClaims.map((claim) => {
    const detected = detectStatisticalQuantities(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`);
    const refs = sourceStatus(captures, sourceRefs(claim, motazen.sources));
    const excerpts = refs.map((source) => ({ id: source.id, excerpt: source.capture?.status === 'saved' ? excerptAround(source.capture.text, detected.markers) : '(Source inaccessible.)' }));
    const claimText = `${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`;
    const reason = refs.some((source) => source.capture?.status !== 'saved') ? 'At least one cited source was inaccessible.' : 'Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.';
    return { id: claim.id, quantities: detected.quantities, claim: claimText, refs, excerpts, verdict: 'BLOCKED', complete: Boolean(claim.id && detected.quantities.length && claimText.trim() && refs.length && reason), reason };
  });

  const contactsAudit = contactItems.map((item) => {
    const statuses = sourceStatus(captures, item.refs);
    const matches = statuses.filter((source) => source.capture?.status === 'saved' && sourceContainsExactNumber(source.capture.text, item.contact.number));
    const inaccessible = statuses.some((source) => source.capture?.status !== 'saved');
    const verdict = matches.length ? 'PASS' : inaccessible ? 'BLOCKED' : 'FAIL';
    const authority = item.card.contacts?.find((contact) => normalizeDigits(contact.number ?? '').replace(/\D/g, '') === item.contact.number)?.label ?? '(authority not explicit)';
    const reason = matches.length ? 'Exact number found in a separately cited source record.' : inaccessible ? 'No accessible cited source established the exact number.' : 'Exact number absent from every cited source; true-but-unsourced remains FAIL.';
    return { project: item.project, cardId: item.card.id, fieldPath: item.contact.fieldPath, number: item.contact.number, authority, refs: statuses, matches, verdict, complete: Boolean(item.project && item.card.id && item.contact.fieldPath && item.contact.number && authority && statuses.length && reason), reason };
  });

  const mostaedCoverage = buildCoverage(mostaed.records, 'level', [1, 2, 3, 4, 5]);
  const motazenCoverage = buildCoverage(motazen.records, 'status', STATUSES);
  const amanCoverage = await generateScenarioCoverage(AMAN_SCENARIOS, aman.records, 'aman', captures);
  const hoqoqiCoverage = await generateScenarioCoverage(HOQOQI_SCENARIOS, hoqoqi.records, 'hoqoqi', captures);

  const linesForSource = (source) => `${source.id} — ${source.url} — ${source.capture?.status === 'saved' ? `HTTP 200; ${source.capture.decodedLength} chars; SHA256 ${source.capture.sha256}; saved corpus/${source.capture.filename}; final ${source.capture.finalUrl}; retrieved ${source.capture.retrievedAt}` : `BLOCKED: ${source.capture?.reason ?? 'no capture'}`}`;
  const mostaedMd = ['# Mostaed dropped-exceptions audit', '', `Observed qualifying inventory: ${mostaedAudit.length} cards (the canonical current data, not the older ~33 estimate).`, '', ...mostaedAudit.flatMap((record) => [`## ${record.id} — ${record.title}`, '', `- Level: L${record.level}`, `- Sources: ${record.refs.map(linesForSource).join('; ')}`, `- Source qualifiers/exceptions found automatically: ${record.qualifiers.length ? record.qualifiers.join(' … ') : '(none located automatically; this is not proof none exist)'}`, `- Card text checked: ${record.lines.join(' | ')}`, `- Verdict: **${record.verdict}**`, `- Basis: ${record.reason}`, ''])].join('\n');
  const motazenMd = ['# Motazen statistics-scope audit', '', `All ${motazen.records.length} claims have an explicit statistical/not-statistical audit decision; ${motazenAudit.length} are marked statistical.`, '', ...motazenAudit.flatMap((record) => [`## ${record.id}`, '', `- Exact detected quantity/scope in claim: ${record.quantities.join(' | ')}`, `- Claim text: ${record.claim.replace(/\n/g, ' / ')}`, `- Sources: ${record.refs.map(linesForSource).join('; ') || '(none)'}`, `- Supporting excerpts with surrounding qualifiers: ${record.excerpts.map((item) => `${item.id}: ${item.excerpt}`).join(' … ') || '(none)'}`, `- Verdict: **${record.verdict}**`, `- Basis: ${record.reason}`, '']), '## Complete 130-claim decision inventory', '', markdownTable(allClaimsInventory, ['id', 'domain', 'status', 'decision', 'quantities']), ''].join('\n');
  const contactsMd = ['# Aman and Hoqoqi contact provenance audit', '', `Inventory: ${contactsAudit.length} rendered/actionable contact numbers.`, '', ...contactsAudit.flatMap((record) => [`## ${record.project}/${record.cardId} — ${record.number}`, '', `- Field path: ${record.fieldPath}`, `- Authority: ${record.authority}`, `- Sources: ${record.refs.map(linesForSource).join('; ') || '(none)'}`, `- Exact-number excerpt: ${record.matches.map((source) => excerptAround(source.capture.text, [record.number])).join(' … ') || '(not found)'}`, `- Verdict: **${record.verdict}**`, `- Basis: ${record.reason}`, ''])].join('\n');

  const coverageMd = (title, rows, columns) => `# ${title}\n\n${markdownTable(rows, columns)}\n`;
  await Promise.all([
    writeFile(path.join(OUTPUT, 'mostaed-dropped-exceptions.md'), mostaedMd),
    writeFile(path.join(OUTPUT, 'motazen-statistics-scope.md'), motazenMd),
    writeFile(path.join(OUTPUT, 'contacts-provenance.md'), contactsMd),
    writeFile(path.join(OUTPUT, 'coverage-mostaed.csv'), toCsv(mostaedCoverage, ['domain', 'level', 'count', 'ids'])),
    writeFile(path.join(OUTPUT, 'coverage-mostaed.md'), coverageMd('Mostaed coverage: domain × L1–L5', mostaedCoverage.map((row) => ({ ...row, level: `L${row.level}` })), ['domain', 'level', 'count', 'ids'])),
    writeFile(path.join(OUTPUT, 'coverage-motazen.csv'), toCsv(motazenCoverage, ['domain', 'status', 'count', 'ids'])),
    writeFile(path.join(OUTPUT, 'coverage-motazen.md'), `${coverageMd('Motazen coverage: domain × status', motazenCoverage, ['domain', 'status', 'count', 'ids'])}\n## Claims outside the required status vocabulary\n\n${markdownTable(motazen.records.filter((claim) => !STATUSES.includes(claim.status)).map((claim) => ({ id: claim.id, status: claim.status })), ['id', 'status'])}\n`),
    writeFile(path.join(OUTPUT, 'coverage-aman.csv'), toCsv(amanCoverage, ['id', 'title', 'status', 'probe_url', 'probe_result'])),
    writeFile(path.join(OUTPUT, 'coverage-aman.md'), coverageMd('Aman PRD scenario inventory A1–A24', amanCoverage, ['id', 'title', 'status', 'probe_url', 'probe_result'])),
    writeFile(path.join(OUTPUT, 'coverage-hoqoqi.csv'), toCsv(hoqoqiCoverage, ['id', 'title', 'status', 'probe_url', 'probe_result'])),
    writeFile(path.join(OUTPUT, 'coverage-hoqoqi.md'), coverageMd('Hoqoqi PRD scenario inventory H1–H22', hoqoqiCoverage, ['id', 'title', 'status', 'probe_url', 'probe_result'])),
  ]);

  const afterBytes = new Map(await Promise.all(Object.entries(inputPaths).map(async ([key, file]) => [key, await readFile(file)])));
  const counts = { mostaed: mostaed.records.length, motazen: motazen.records.length, aman: aman.records.length, hoqoqi: hoqoqi.records.length };
  const inputIntegrity = Object.fromEntries(Object.keys(inputPaths).map((key) => {
    const before = beforeBytes.get(key);
    const after = afterBytes.get(key);
    return [key, {
      countBefore: counts[key], countAfter: counts[key],
      sha256Before: createHash('sha256').update(before).digest('hex'),
      sha256After: createHash('sha256').update(after).digest('hex'),
      bytesUnchanged: before.equals(after),
    }];
  }));
  const allAudits = [...mostaedAudit, ...motazenAudit, ...contactsAudit];
  const motazenUnclassified = motazen.records.filter((claim) => !STATUSES.includes(claim.status));
  const contactKey = (project, cardId, fieldPath, number) => `${project}/${cardId}/${fieldPath}/${number}`;
  const mostaedDomains = [...new Set(mostaed.records.map((card) => card.domain ?? '(missing)'))];
  const motazenDomains = [...new Set(motazen.records.map((claim) => claim.domain ?? '(missing)'))];
  const structuralInventoryCompleteness = validateRequiredInventories([
    { name: 'Mostaed audit cards', expected: mostaedScope.map((card) => card.id), actual: mostaedAudit.map((record) => record.id) },
    { name: 'Motazen 130-claim inventory', expected: motazen.records.map((claim) => claim.id), actual: allClaimsInventory.map((record) => record.id) },
    { name: 'Motazen statistical subset', expected: statisticalClaims.map((claim) => claim.id), actual: motazenAudit.map((record) => record.id) },
    { name: 'Aman/Hoqoqi contact occurrences', expected: contactItems.map((item) => contactKey(item.project, item.card.id, item.contact.fieldPath, item.contact.number)), actual: contactsAudit.map((record) => contactKey(record.project, record.cardId, record.fieldPath, record.number)) },
    { name: 'Mostaed matrix cells', expected: mostaedDomains.flatMap((domain) => [1, 2, 3, 4, 5].map((level) => `${domain}/L${level}`)), actual: mostaedCoverage.map((row) => `${row.domain}/L${row.level}`) },
    { name: 'Motazen matrix cells', expected: motazenDomains.flatMap((domain) => STATUSES.map((status) => `${domain}/${status}`)), actual: motazenCoverage.map((row) => `${row.domain}/${row.status}`) },
    { name: 'Motazen claims represented in matrix', expected: motazen.records.map((claim) => claim.id), actual: motazenCoverage.flatMap((row) => row.ids ? row.ids.split(' ') : []) },
    { name: 'Aman scenario rows', expected: AMAN_SCENARIOS.map(([id]) => id), actual: amanCoverage.map((row) => row.id) },
    { name: 'Hoqoqi scenario rows', expected: HOQOQI_SCENARIOS.map(([id]) => id), actual: hoqoqiCoverage.map((row) => row.id) },
  ]);
  const statisticalDecisionCompleteness = validateStatisticalDecisionCompleteness(motazen.records, allClaimsInventory);
  const inventoryCompleteness = {
    complete: structuralInventoryCompleteness.complete && statisticalDecisionCompleteness.complete,
    errors: [...structuralInventoryCompleteness.errors, ...statisticalDecisionCompleteness.errors],
  };
  const matricesComplete = mostaedCoverage.length > 0
    && mostaedCoverage.reduce((sum, row) => sum + row.count, 0) === mostaed.records.length
    && motazenCoverage.length > 0
    && motazenCoverage.reduce((sum, row) => sum + row.count, 0) === motazen.records.length
    && amanCoverage.length === 24 && hoqoqiCoverage.length === 22;
  const gate = evaluateGate(allAudits, matricesComplete, inventoryCompleteness);
  const verdictTotals = (records) => Object.fromEntries(['PASS', 'FAIL', 'BLOCKED'].map((verdict) => [verdict, records.filter((record) => record.verdict === verdict).length]));
  const fetchTotals = { requested: captures.size, saved: [...captures.values()].filter((capture) => capture.status === 'saved').length, blocked: [...captures.values()].filter((capture) => capture.status !== 'saved').length };
  const blockers = [
    ...allAudits.filter((record) => record.verdict !== 'PASS').map((record) => `${record.id ?? `${record.project}/${record.cardId}/${record.number}`}: ${record.verdict} — ${record.reason}`),
    ...motazenUnclassified.map((claim) => `Motazen matrix ${claim.id}: FAIL — status ${JSON.stringify(claim.status)} is outside established|contested|debunked|unknown.`),
    ...inventoryCompleteness.errors.map((error) => `Inventory completeness: FAIL — ${error}`),
  ];
  const summary = { auditDate: AUDIT_DATE, gate: gate.clear ? 'CLEAR' : 'BLOCKED', phase1Started: false, commands: ['node --test tools/phase0-audit.test.mjs', 'node tools/phase0-audit.mjs', 'git diff --check'], inputs: inputIntegrity, sourceFetchTotals: fetchTotals, inventoryCompleteness, audits: { mostaedDroppedExceptions: { inventory: mostaedAudit.length, verdicts: verdictTotals(mostaedAudit) }, motazenStatisticsScope: { allClaimsInventoried: motazen.records.length, explicitDecisions: allClaimsInventory.length, broadCandidates: motazen.records.filter((claim) => scanBroadQuantitativeCandidates(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`).hasCandidate).length, statisticalClaims: motazenAudit.length, verdicts: verdictTotals(motazenAudit) }, contactsProvenance: { inventory: contactsAudit.length, verdicts: verdictTotals(contactsAudit) } }, matrices: { complete: matricesComplete, mostaed: { cells: mostaedCoverage.length, total: mostaedCoverage.reduce((sum, row) => sum + row.count, 0) }, motazen: { cells: motazenCoverage.length, classifiedTotal: motazenCoverage.reduce((sum, row) => sum + row.count, 0), canonicalTotal: motazen.records.length, unclassified: motazenUnclassified.map((claim) => ({ id: claim.id, status: claim.status })) }, aman: { rows: amanCoverage.length, statuses: Object.fromEntries(['built', 'source-found', 'no-source', 'not-built-unprobed'].map((status) => [status, amanCoverage.filter((row) => row.status === status).length])) }, hoqoqi: { rows: hoqoqiCoverage.length, statuses: Object.fromEntries(['built', 'source-found', 'no-source', 'not-built-unprobed'].map((status) => [status, hoqoqiCoverage.filter((row) => row.status === status).length])) } }, blockers };
  const corpusIndex = sortCorpusIndex([...captures.entries()].map(([url, capture]) => ({ url, ...capture, text: undefined })));
  await writeFile(path.join(CORPUS, 'index.json'), `${JSON.stringify(corpusIndex, null, 2)}\n`);
  await writeFile(path.join(OUTPUT, 'phase0-summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
  const checkpoint = [`# Phase 0 checkpoint — ${AUDIT_DATE}`, '', `**Gate: ${summary.gate}. Phase 1 was not started.**`, '', '## Canonical input integrity', '', markdownTable(Object.entries(inputIntegrity).map(([product, item]) => ({ product, before: item.countBefore, after: item.countAfter, sha256_before: item.sha256Before, sha256_after: item.sha256After, unchanged: item.bytesUnchanged })), ['product', 'before', 'after', 'sha256_before', 'sha256_after', 'unchanged']), '', '## Evidence totals', '', `- Source fetches: ${fetchTotals.requested} requested; ${fetchTotals.saved} saved; ${fetchTotals.blocked} blocked.`, `- Mostaed: ${mostaedAudit.length} audited; ${JSON.stringify(verdictTotals(mostaedAudit))}.`, `- Motazen: all ${motazen.records.length} inventoried; ${motazenAudit.length} statistical; ${JSON.stringify(verdictTotals(motazenAudit))}.`, `- Contacts: ${contactsAudit.length} inventoried; ${JSON.stringify(verdictTotals(contactsAudit))}.`, `- Matrices: Mostaed ${mostaedCoverage.length} cells/${summary.matrices.mostaed.total} cards; Motazen ${motazenCoverage.length} cells/${summary.matrices.motazen.classifiedTotal} classified claims plus ${motazenUnclassified.length} invalid-status claims; Aman ${amanCoverage.length} rows; Hoqoqi ${hoqoqiCoverage.length} rows.`, '', '## Commands', '', ...summary.commands.map((command) => `- \`${command}\``), '', '## Exact blockers', '', ...blockers.map((blocker) => `- ${blocker}`), '', 'The hard gate is fail-closed. No heuristic keyword or quantity match was treated as a semantic PASS, and Phase 1 was not started.', ''].join('\n');
  await writeFile(path.join(OUTPUT, 'PHASE0_CHECKPOINT.md'), checkpoint);
  return summary;
}

const audit = {
  loadJavaScriptData, assertSourceReferences, detectStatisticalQuantities, scanBroadQuantitativeCandidates,
  validateStatisticalDecisionCompleteness, extractContactNumbers,
  sourceContainsExactNumber, isScenarioCard, toCsv, validateRequiredInventories, evaluateGate,
  validateSourceDocument, hasScenarioEvidence, sortCorpusIndex, loadPriorCapture, fetchAndCapture, writeOutputs,
};
export default audit;

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const summary = await writeOutputs();
  process.stdout.write(`Phase 0 gate: ${summary.gate}\nEvidence: ${OUTPUT}\n`);
  if (summary.gate !== 'CLEAR') process.exitCode = 1;
}
