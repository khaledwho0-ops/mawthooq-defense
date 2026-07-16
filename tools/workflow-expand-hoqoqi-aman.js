export const meta = {
  name: 'expand-hoqoqi-aman-w2',
  description: 'Wave 2 — deep content for حقوقي (universal human rights from UN UDHR + rights under the Egyptian Constitution 2014, each with الدليل/legal basis + how to reclaim + do/dont/who-to-call) and أمان (family/elderly/home + criminology: how the criminal thinks). Fetched-source-grounded → adversarially verified. One-Law, number-safe. PASS-only.',
  phases: [{ title: 'Produce' }, { title: 'Verify' }],
}
const SAFE = 'RULES: ONLY fetch public web pages (WebFetch — load via ToolSearch "select:WebFetch" — or `curl -s -L -m 25 <url>`) and RETURN structured data. No git, no writes, no deploy. '
const ONELAW = 'ONE LAW (binding): every field must come from the FETCHED source. Fetch the URL FIRST. NEVER invent a fact, article number, statistic, or phone number. If the page will not load or does not cover the topic, set grounded=false and stop. '
const NUMSAFE = 'NUMBER SAFETY: never invent a phone number. In "contacts", only include a "number" if it literally appears in the source or is an official verifiable Egyptian line; otherwise number="" and put guidance in "say". '
const CONCISE = 'COMPACT to avoid truncation: ≤6 do_steps, ≤4 dont_steps, ≤5 redFlags, each ≤20 words. Ensure the JSON is COMPLETE (arrays closed). '
const AR = 'Warm clear Egyptian Arabic (مصري), like a knowledgeable friend. Give English (en) for each step too. '
const BASIS = 'ALWAYS fill basis_ar = a short Arabic statement of the exact legal/authoritative basis (e.g. "الإعلان العالمي لحقوق الإنسان — المادة ٣" أو "الدستور المصري ٢٠١٤ — المادة ٥٤"), and verbatim_quote = the exact sentence from the source that proves it (this is الدليل). '
const RIGHTS = 'This is a legal-rights card. do_steps must cover: (a) ما هو حقك بالظبط, ثم (b) كيف تسترده / تمارسه عمليًا (خطوات). dont_steps = أخطاء شائعة. contacts = مين تكلّم (نيابة عامة / محامي / منظمة حقوقية / خط مساعدة) — رقم فقط لو موثّق. ALWAYS set note_ar = تنويه إن ده وعي قانوني عام مش استشارة، والقوانين بتختلف، استشير محامي مصري. '

const CARD = { type: 'object', properties: {
  id: { type: 'string' }, project: { type: 'string' }, title_ar: { type: 'string' }, title_en: { type: 'string' },
  level: { type: 'number' }, domain: { type: 'string' }, who: { type: 'array', items: { type: 'string' } }, place: { type: 'array', items: { type: 'string' } },
  snapshot_ar: { type: 'string' }, snapshot_en: { type: 'string' }, redFlags_ar: { type: 'array', items: { type: 'string' } },
  do_steps: { type: 'array', items: { type: 'object', properties: { t_ar: { type: 'string' }, en: { type: 'string' } } } },
  dont_steps: { type: 'array', items: { type: 'object', properties: { t_ar: { type: 'string' }, en: { type: 'string' } } } },
  whenWhy_ar: { type: 'string' }, note_ar: { type: 'string' }, basis_ar: { type: 'string' },
  contacts: { type: 'array', items: { type: 'object', properties: { label: { type: 'string' }, number: { type: 'string' }, say: { type: 'string' } } } },
  source_name: { type: 'string' }, source_url: { type: 'string' }, verbatim_quote: { type: 'string' }, grounded: { type: 'boolean' } },
  required: ['id', 'project', 'grounded'] }
const VERDICT = { type: 'object', properties: { id: { type: 'string' }, verdict: { type: 'string' }, grounded_confirmed: { type: 'boolean' }, issues: { type: 'array', items: { type: 'string' } } }, required: ['id', 'verdict'] }

const UDHR = 'https://www.un.org/en/about-us/universal-declaration-of-human-rights'
const CONST = 'https://www.constituteproject.org/constitution/Egypt_2014'
const HOQOQI = [
  { id: 'udhr-dignity-equality', t: 'إنك تتولد حر ومتساوي في الكرامة والحقوق', src: UDHR, dom: 'حقوق عالمية', lvl: 1 },
  { id: 'udhr-life-liberty-security', t: 'حقك في الحياة والحرية والأمان الشخصي', src: UDHR, dom: 'حقوق عالمية', lvl: 3 },
  { id: 'udhr-no-torture', t: 'حقك إنك ما تتعرّضش للتعذيب أو المعاملة المهينة', src: UDHR, dom: 'حقوق عالمية', lvl: 4 },
  { id: 'udhr-equal-before-law', t: 'حقك في المساواة أمام القانون', src: UDHR, dom: 'حقوق عالمية', lvl: 2 },
  { id: 'udhr-no-arbitrary-arrest', t: 'حقك إنك ما تتقبضش عليك تعسفيًا', src: UDHR, dom: 'حقوق عالمية', lvl: 3 },
  { id: 'udhr-fair-trial-innocent', t: 'حقك في محاكمة عادلة وإنك بريء لحد ما تثبت إدانتك', src: UDHR, dom: 'حقوق عالمية', lvl: 3 },
  { id: 'udhr-privacy-home-family', t: 'حقك في الخصوصية وحرمة بيتك وعيلتك', src: UDHR, dom: 'حقوق عالمية', lvl: 2 },
  { id: 'udhr-freedom-movement', t: 'حقك في حرية التنقّل', src: UDHR, dom: 'حقوق عالمية', lvl: 2 },
  { id: 'udhr-freedom-thought', t: 'حقك في حرية الفكر والضمير والعقيدة', src: UDHR, dom: 'حقوق عالمية', lvl: 2 },
  { id: 'udhr-work-fair-pay', t: 'حقك في الشغل وأجر عادل', src: UDHR, dom: 'عمل', lvl: 2 },
  { id: 'egypt-equality-art53', t: 'المساواة وعدم التمييز في الدستور المصري', src: CONST, dom: 'دستور مصري', lvl: 2 },
  { id: 'egypt-personal-freedom-art54', t: 'الحرية الشخصية وحقوقك عند القبض (الدستور المصري)', src: CONST, dom: 'دستور مصري', lvl: 3 },
  { id: 'egypt-home-privacy', t: 'حرمة الحياة الخاصة والمنزل (الدستور المصري)', src: CONST, dom: 'دستور مصري', lvl: 2 },
  { id: 'egypt-dignity-no-torture', t: 'الكرامة الإنسانية ومنع التعذيب (الدستور المصري)', src: CONST, dom: 'دستور مصري', lvl: 4 },
]
const AMAN = [
  { id: 'elderly-scam-protection', t: 'حماية كبار السن من النصب', src: 'https://consumer.ftc.gov/features/protecting-older-consumers', dom: 'أهل وبيت', lvl: 3 },
  { id: 'investment-crypto-scam', t: 'نصب الاستثمار والعملات الرقمية', src: 'https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams', dom: 'مال', lvl: 3 },
  { id: 'social-engineering', t: 'الهندسة الاجتماعية — إزاي المجرم بيتلاعب بيك', src: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks', dom: 'علم إجرام', lvl: 3 },
  { id: 'secure-home-devices', t: 'أمّن أجهزة بيتك والشبكة', src: 'https://www.cisa.gov/secure-our-world', dom: 'أهل وبيت', lvl: 2 },
  { id: 'account-recovery-hacked', t: 'استرجاع حسابك بعد ما اتخترق', src: 'https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account', dom: 'حسابات', lvl: 3 },
]

const mk = (proj, extra) => (x) => agent(
  SAFE + ONELAW + NUMSAFE + CONCISE + AR + BASIS + extra +
  `Produce ONE complete "${proj}" card id="${x.id}" project="${proj}" ("${x.t}") grounded ONLY in ${x.src}. level=${x.lvl}, domain="${x.dom}". Fill who/place/snapshot/redFlags/do_steps/dont_steps/whenWhy/contacts/basis_ar/verbatim_quote. grounded=true only if you truly fetched the page and every field is supported.`,
  { label: `make:${proj}:${x.id}`, phase: 'Produce', schema: CARD })
const vf = (x) => (card) => card && card.grounded
  ? agent(SAFE + `ADVERSARIAL One-Law check. Re-fetch ${x.src}. Confirm: (1) every do/dont step supported; (2) basis_ar + verbatim_quote actually appear/are accurate on the page (this is the الدليل — must be real); (3) NOTHING invented (no fake article number, statistic, or phone number); (4) arrays complete; (5) safe + not misleading. verdict="PASS" only if ALL hold, else "FAIL" + issues. Card: ${JSON.stringify(card).slice(0, 3200)}`, { label: `verify:${x.id}`, phase: 'Verify', schema: VERDICT }).then((v) => ({ card, verdict: v }))
  : { card, verdict: { id: x.id, verdict: 'FAIL', issues: ['ungrounded at produce'] } }

phase('Produce')
const hoqR = await pipeline(HOQOQI, mk('hoqoqi', RIGHTS), (c, x) => vf(x)(c))
const amanR = await pipeline(AMAN, mk('aman', ''), (c, x) => vf(x)(c))
const pass = (arr) => arr.filter(Boolean).filter((r) => r.verdict && r.verdict.verdict === 'PASS').map((r) => r.card)
const hoq = pass(hoqR), aman = pass(amanR)
const fails = [...hoqR, ...amanR].filter(Boolean).map((r) => r.verdict).filter((v) => v && v.verdict === 'FAIL')
return { hoqoqiPass: hoq.length, amanPass: aman.length, hoqoqi: hoq, aman, fails }
