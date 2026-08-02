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
  const value = normalizeDigits(text);
  const matches = [];
  const patterns = [
    /\b\d+(?:[.,]\d+)?\s*(?:%|percent|percentage|٪)/giu,
    /\b\d+(?:[.,]\d+)?\s*[:/]\s*\d+(?:[.,]\d+)?\b/gu,
    /\b\d+(?:[.,]\d+)?\b/gu,
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|hundred|thousand|million|billion)\b(?=\s+(?:people|persons|participants|patients|adults|children|cases|respondents|workers|women|men|studies|times|percent))/giu,
    /(?:واحد|واحدة|اتنين|اثنين|اثنان|ثلاثة|تلاتة|أربعة|اربعة|خمسة|ستة|سبعة|ثمانية|تمانية|تسعة|عشرة|مئة|مائة|ألف|مليون|مليار)(?=\s+(?:شخص|أشخاص|مشارك|مشاركين|مريض|مرضى|دراسة|دراسات|مرة|مرات|في المئة|بالمئة|من كل))/gu,
  ];
  for (const pattern of patterns) for (const match of value.matchAll(pattern)) matches.push(match[0]);
  return { hasStatistic: matches.length > 0, quantities: [...new Set(matches)] };
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

function evaluateGate(records, matricesComplete) {
  const blockers = records.filter((record) => record?.verdict !== 'PASS' || record?.complete !== true);
  return { clear: matricesComplete === true && blockers.length === 0, blockers: blockers.length + (matricesComplete ? 0 : 1) };
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
    if (response.status !== 200 || decoded.length <= 1200 || notFound) {
      return { status: 'blocked', httpStatus: response.status, decodedLength: decoded.length, finalUrl: response.url || url, retrievedAt, reason: response.status !== 200 ? `HTTP ${response.status}` : decoded.length <= 1200 ? `decoded body ${decoded.length} <= 1200` : 'not-found marker near top' };
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
  let cursor = 0;
  async function worker() {
    while (cursor < unique.length) {
      const url = unique[cursor++];
      const filename = stableFilename(url);
      const capture = await fetchAndCapture(url, { filename });
      if (capture.status === 'blocked' && capture.httpStatus === null) {
        try {
          const destination = path.join(CORPUS, filename);
          const bytes = await readFile(destination);
          const decoded = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
          const existingStat = await stat(destination);
          if (decoded.length > 1200 && !/(?:page not found|404 not found|الصفحة غير موجودة)/i.test(plainText(decoded.slice(0, 12_000)))) {
            results.set(url, { status: 'saved', httpStatus: 200, decodedLength: decoded.length, finalUrl: url, retrievedAt: existingStat.mtime.toISOString(), sha256: createHash('sha256').update(bytes).digest('hex'), filename, text: decoded, preservedAfterFailedProbe: capture.reason });
            continue;
          }
        } catch {
          // No prior successful capture exists; retain the fail-closed probe result.
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
    return { id, title, status: capture?.status === 'saved' ? 'source-found' : 'no-source', probe_url: url, probe_result: capture?.status === 'saved' ? `200; ${capture.decodedLength} chars; sha256 ${capture.sha256}` : capture?.reason ?? 'probe unavailable' };
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
  const contactItems = [['aman', aman], ['hoqoqi', hoqoqi]].flatMap(([project, data]) => data.records.flatMap((card) => extractContactNumbers(card).map((contact) => ({ project, card, contact, refs: sourceRefs(card, data.sources) }))));
  const auditUrls = [...mostaedScope.flatMap((card) => sourceRefs(card, mostaed.sources).filter((source) => /medlineplus\.gov\/ency\//i.test(source.url)).map((source) => source.url)), ...statisticalClaims.flatMap((claim) => sourceRefs(claim, motazen.sources).map((source) => source.url)), ...contactItems.flatMap((item) => item.refs.map((source) => source.url))];
  const scenarioUrls = [...AMAN_SCENARIOS, ...HOQOQI_SCENARIOS].map((item) => item[2]).filter(Boolean);
  const captures = await fetchAll([...auditUrls, ...scenarioUrls]);

  const mostaedAudit = mostaedScope.map((card) => {
    const refs = sourceStatus(captures, sourceRefs(card, mostaed.sources).filter((source) => /medlineplus\.gov\/ency\//i.test(source.url)));
    const fetched = refs.filter((source) => source.capture?.status === 'saved');
    const lines = [...(card.do ?? []).map((item, index) => `do[${index}]: ${typeof item === 'string' ? item : item.t}`), ...(card.dont ?? []).map((item, index) => `dont[${index}]: ${typeof item === 'string' ? item : item.t}`)];
    const qualifiers = fetched.map((source) => excerptAround(source.capture.text, [], true)).filter((text) => !text.startsWith('(No matching'));
    return { id: card.id, title: card.title?.ar ?? card.title?.en ?? '', level: card.level, refs, lines, qualifiers, verdict: 'BLOCKED', complete: true, reason: fetched.length !== refs.length ? 'At least one referenced source was inaccessible.' : 'Fetched bytes are preserved, but full-context human semantic comparison of every actionable line and carried exception is not recorded; heuristic extraction cannot award PASS.' };
  });

  const motazenAudit = statisticalClaims.map((claim) => {
    const detected = detectStatisticalQuantities(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`);
    const refs = sourceStatus(captures, sourceRefs(claim, motazen.sources));
    const excerpts = refs.map((source) => ({ id: source.id, excerpt: source.capture?.status === 'saved' ? excerptAround(source.capture.text, detected.quantities) : '(Source inaccessible.)' }));
    return { id: claim.id, quantities: detected.quantities, claim: `${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`, refs, excerpts, verdict: 'BLOCKED', complete: true, reason: refs.some((source) => source.capture?.status !== 'saved') ? 'At least one cited source was inaccessible.' : 'Exact population/outcome/geography/time/relationship/units/rounding/qualifier agreement requires a recorded semantic review; automated quantity detection cannot award PASS.' };
  });

  const contactsAudit = contactItems.map((item) => {
    const statuses = sourceStatus(captures, item.refs);
    const matches = statuses.filter((source) => source.capture?.status === 'saved' && sourceContainsExactNumber(source.capture.text, item.contact.number));
    const inaccessible = statuses.some((source) => source.capture?.status !== 'saved');
    const verdict = matches.length ? 'PASS' : inaccessible ? 'BLOCKED' : 'FAIL';
    return { project: item.project, cardId: item.card.id, fieldPath: item.contact.fieldPath, number: item.contact.number, authority: item.card.contacts?.find((contact) => normalizeDigits(contact.number ?? '').replace(/\D/g, '') === item.contact.number)?.label ?? '(authority not explicit)', refs: statuses, matches, verdict, complete: true, reason: matches.length ? 'Exact number found in a separately cited source record.' : inaccessible ? 'No accessible cited source established the exact number.' : 'Exact number absent from every cited source; true-but-unsourced remains FAIL.' };
  });

  const mostaedCoverage = buildCoverage(mostaed.records, 'level', [1, 2, 3, 4, 5]);
  const motazenCoverage = buildCoverage(motazen.records, 'status', STATUSES);
  const amanCoverage = await generateScenarioCoverage(AMAN_SCENARIOS, aman.records, 'aman', captures);
  const hoqoqiCoverage = await generateScenarioCoverage(HOQOQI_SCENARIOS, hoqoqi.records, 'hoqoqi', captures);

  const linesForSource = (source) => `${source.id} — ${source.url} — ${source.capture?.status === 'saved' ? `HTTP 200; ${source.capture.decodedLength} chars; SHA256 ${source.capture.sha256}; saved corpus/${source.capture.filename}; final ${source.capture.finalUrl}; retrieved ${source.capture.retrievedAt}` : `BLOCKED: ${source.capture?.reason ?? 'no capture'}`}`;
  const mostaedMd = ['# Mostaed dropped-exceptions audit', '', `Observed qualifying inventory: ${mostaedAudit.length} cards (the canonical current data, not the older ~33 estimate).`, '', ...mostaedAudit.flatMap((record) => [`## ${record.id} — ${record.title}`, '', `- Level: L${record.level}`, `- Sources: ${record.refs.map(linesForSource).join('; ')}`, `- Source qualifiers/exceptions found automatically: ${record.qualifiers.length ? record.qualifiers.join(' … ') : '(none located automatically; this is not proof none exist)'}`, `- Card text checked: ${record.lines.join(' | ')}`, `- Verdict: **${record.verdict}**`, `- Basis: ${record.reason}`, ''])].join('\n');
  const allClaimsInventory = motazen.records.map((claim) => {
    const detected = detectStatisticalQuantities(`${claim.claim_ar ?? ''}\n${claim.claim_en ?? ''}`);
    return { id: claim.id, domain: claim.domain, status: claim.status, statistical: detected.hasStatistic ? 'yes' : 'no', quantities: detected.quantities.join(' ') };
  });
  const motazenMd = ['# Motazen statistics-scope audit', '', `All ${motazen.records.length} claims were inventoried; ${motazenAudit.length} contain detected statistical quantities in claim text.`, '', ...motazenAudit.flatMap((record) => [`## ${record.id}`, '', `- Exact detected quantity/scope in claim: ${record.quantities.join(', ')}`, `- Claim text: ${record.claim.replace(/\n/g, ' / ')}`, `- Sources: ${record.refs.map(linesForSource).join('; ') || '(none)'}`, `- Supporting excerpts with surrounding qualifiers: ${record.excerpts.map((item) => `${item.id}: ${item.excerpt}`).join(' … ') || '(none)'}`, `- Verdict: **${record.verdict}**`, `- Basis: ${record.reason}`, '']), '## Complete 130-claim inventory', '', markdownTable(allClaimsInventory, ['id', 'domain', 'status', 'statistical', 'quantities']), ''].join('\n');
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
  const matricesComplete = mostaedCoverage.length > 0
    && mostaedCoverage.reduce((sum, row) => sum + row.count, 0) === mostaed.records.length
    && motazenCoverage.length > 0
    && motazenCoverage.reduce((sum, row) => sum + row.count, 0) === motazen.records.length
    && amanCoverage.length === 24 && hoqoqiCoverage.length === 22;
  const gate = evaluateGate(allAudits, matricesComplete);
  const verdictTotals = (records) => Object.fromEntries(['PASS', 'FAIL', 'BLOCKED'].map((verdict) => [verdict, records.filter((record) => record.verdict === verdict).length]));
  const fetchTotals = { requested: captures.size, saved: [...captures.values()].filter((capture) => capture.status === 'saved').length, blocked: [...captures.values()].filter((capture) => capture.status !== 'saved').length };
  const blockers = [
    ...allAudits.filter((record) => record.verdict !== 'PASS').map((record) => `${record.id ?? `${record.project}/${record.cardId}/${record.number}`}: ${record.verdict} — ${record.reason}`),
    ...motazenUnclassified.map((claim) => `Motazen matrix ${claim.id}: FAIL — status ${JSON.stringify(claim.status)} is outside established|contested|debunked|unknown.`),
  ];
  const summary = { auditDate: AUDIT_DATE, gate: gate.clear ? 'CLEAR' : 'BLOCKED', phase1Started: false, commands: ['node --test tools/phase0-audit.test.mjs', 'node tools/phase0-audit.mjs', 'git diff --check'], inputs: inputIntegrity, sourceFetchTotals: fetchTotals, audits: { mostaedDroppedExceptions: { inventory: mostaedAudit.length, verdicts: verdictTotals(mostaedAudit) }, motazenStatisticsScope: { allClaimsInventoried: motazen.records.length, statisticalClaims: motazenAudit.length, verdicts: verdictTotals(motazenAudit) }, contactsProvenance: { inventory: contactsAudit.length, verdicts: verdictTotals(contactsAudit) } }, matrices: { complete: matricesComplete, mostaed: { cells: mostaedCoverage.length, total: mostaedCoverage.reduce((sum, row) => sum + row.count, 0) }, motazen: { cells: motazenCoverage.length, classifiedTotal: motazenCoverage.reduce((sum, row) => sum + row.count, 0), canonicalTotal: motazen.records.length, unclassified: motazenUnclassified.map((claim) => ({ id: claim.id, status: claim.status })) }, aman: { rows: amanCoverage.length, statuses: Object.fromEntries(['built', 'source-found', 'no-source', 'not-built-unprobed'].map((status) => [status, amanCoverage.filter((row) => row.status === status).length])) }, hoqoqi: { rows: hoqoqiCoverage.length, statuses: Object.fromEntries(['built', 'source-found', 'no-source', 'not-built-unprobed'].map((status) => [status, hoqoqiCoverage.filter((row) => row.status === status).length])) } }, blockers };
  await writeFile(path.join(CORPUS, 'index.json'), `${JSON.stringify([...captures.entries()].map(([url, capture]) => ({ url, ...capture, text: undefined })), null, 2)}\n`);
  await writeFile(path.join(OUTPUT, 'phase0-summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
  const checkpoint = [`# Phase 0 checkpoint — ${AUDIT_DATE}`, '', `**Gate: ${summary.gate}. Phase 1 was not started.**`, '', '## Canonical input integrity', '', markdownTable(Object.entries(inputIntegrity).map(([product, item]) => ({ product, before: item.countBefore, after: item.countAfter, sha256_before: item.sha256Before, sha256_after: item.sha256After, unchanged: item.bytesUnchanged })), ['product', 'before', 'after', 'sha256_before', 'sha256_after', 'unchanged']), '', '## Evidence totals', '', `- Source fetches: ${fetchTotals.requested} requested; ${fetchTotals.saved} saved; ${fetchTotals.blocked} blocked.`, `- Mostaed: ${mostaedAudit.length} audited; ${JSON.stringify(verdictTotals(mostaedAudit))}.`, `- Motazen: all ${motazen.records.length} inventoried; ${motazenAudit.length} statistical; ${JSON.stringify(verdictTotals(motazenAudit))}.`, `- Contacts: ${contactsAudit.length} inventoried; ${JSON.stringify(verdictTotals(contactsAudit))}.`, `- Matrices: Mostaed ${mostaedCoverage.length} cells/${summary.matrices.mostaed.total} cards; Motazen ${motazenCoverage.length} cells/${summary.matrices.motazen.classifiedTotal} classified claims plus ${motazenUnclassified.length} invalid-status claims; Aman ${amanCoverage.length} rows; Hoqoqi ${hoqoqiCoverage.length} rows.`, '', '## Commands', '', ...summary.commands.map((command) => `- \`${command}\``), '', '## Exact blockers', '', ...blockers.map((blocker) => `- ${blocker}`), '', 'The hard gate is fail-closed. No heuristic keyword or quantity match was treated as a semantic PASS, and Phase 1 was not started.', ''].join('\n');
  await writeFile(path.join(OUTPUT, 'PHASE0_CHECKPOINT.md'), checkpoint);
  return summary;
}

const audit = { loadJavaScriptData, assertSourceReferences, detectStatisticalQuantities, extractContactNumbers, sourceContainsExactNumber, isScenarioCard, toCsv, evaluateGate, fetchAndCapture, writeOutputs };
export default audit;

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const summary = await writeOutputs();
  process.stdout.write(`Phase 0 gate: ${summary.gate}\nEvidence: ${OUTPUT}\n`);
  if (summary.gate !== 'CLEAR') process.exitCode = 1;
}
