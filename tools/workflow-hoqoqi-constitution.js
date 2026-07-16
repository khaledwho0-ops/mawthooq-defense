export const meta = {
  name: 'hoqoqi-constitution-final',
  description: 'FINAL حقوقي wave — grounded ONLY in the Egyptian Constitution 2014 (binding Egyptian law, and unlike the UDHR it DOES contain procedural guarantees: Art 54 arrest rights, Art 99 NCHR civil action). Fixes two bugs: (1) verifier now receives the FULL card, not a 3200-char slice; (2) prompt FORBIDS adding any procedure not literally on the page. Covers K dims 2/3/4/5/6/7/8.',
  phases: [{ title: 'Produce' }, { title: 'Verify' }],
}
const SAFE = 'RULES: ONLY fetch public web pages (WebFetch — load via ToolSearch "select:WebFetch" — or `curl -s -L -m 25 <url>`) and RETURN structured data. No git, no writes, no deploy. '
const ONELAW = 'ONE LAW (binding): every field must be EXTRACTED from the FETCHED page. Fetch it FIRST. NEVER invent a fact, article number, or phone number. An empty card beats a fabricated one. '
const NOPROC = 'NO INVENTED PROCEDURE (this rule killed the last wave — obey it exactly): a do_step may ONLY describe something the page LITERALLY says. The Egyptian Constitution DOES contain some procedure (e.g. Art 54: a detainee must be informed of the reasons, enabled to contact relatives and a lawyer, and brought before the investigation authority within 24 hours; Art 99: assault on personal freedoms is a crime with no statute of limitations and the National Council for Human Rights may file a civil action). USE THOSE — they are real and on the page. But DO NOT add procedural advice that is NOT on the page (do not invent "document the date and witnesses", "file a complaint with the نيابة", "hire a lawyer", "keep evidence") unless that text is literally there. If the article states only a principle, the card states only that principle. '
const CITE = 'CITE EXACTLY: attribute every statement to the article that LITERALLY contains it. A definition article is not a prohibition article. If a claim comes from a different article, cite THAT article. basis_ar = the real article number(s) + title as printed on the page. verbatim_quote = the exact sentence, word-for-word (this is الدليل). '
const FRAME = 'HONEST FRAMING — note_ar MUST say: الدستور المصري ٢٠١٤ قانون مُلزم في مصر، لكن مواده مبادئ دستورية — الإجراءات التفصيلية بتيجي من قوانين تانية (زي قانون الإجراءات الجنائية أو قانون العمل). ده وعي قانوني عام مش استشارة قانونية؛ في أي موقف حقيقي استشير محامي مصري مختص. '
const NUMSAFE = 'NUMBER SAFETY: the Constitution page contains NO phone numbers. Therefore every contacts[] entry MUST have number:"" — put guidance in "say" only. Never invent a number. '
const CONCISE = 'COMPACT: ≤5 do_steps, ≤3 dont_steps, ≤4 redFlags, ≤2 contacts, each ≤20 words. JSON MUST be COMPLETE — every array closed. '
const AR = 'Warm clear Egyptian Arabic (مصري). Give English (en) for each step too. '

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

const SRC = 'https://www.constituteproject.org/constitution/Egypt_2014'
const T = [
  { id: 'egypt-equality', t: 'المساواة وعدم التمييز', arts: 'المادة ٥٣ (المساواة في الحقوق والحريات العامة، ومنع التمييز)', dom: 'دستور مصري', lvl: 2 },
  { id: 'egypt-arrest-rights', t: 'حقوقك لو اتقبض عليك', arts: 'المادة ٥٤ (الحرية الشخصية: إبلاغك بالأسباب، الاتصال بأهلك ومحاميك، العرض على سلطة التحقيق خلال ٢٤ ساعة)', dom: 'دستور مصري', lvl: 4 },
  { id: 'egypt-dignity-torture', t: 'كرامتك ومنع التعذيب', arts: 'المادة ٥١ (الكرامة) والمادة ٥٢ (التعذيب جريمة لا تسقط بالتقادم)', dom: 'دستور مصري', lvl: 4 },
  { id: 'egypt-private-life', t: 'حرمة حياتك الخاصة ومراسلاتك', arts: 'المادة ٥٧ (الحياة الخاصة والمراسلات)', dom: 'دستور مصري', lvl: 2 },
  { id: 'egypt-home-inviolable', t: 'حرمة بيتك — مفيش دخول ولا تفتيش من غير إذن قضائي', arts: 'المادة ٥٨ (حرمة المنازل)', dom: 'دستور مصري', lvl: 3 },
  { id: 'egypt-women-rights', t: 'حقوق المرأة في الدستور', arts: 'المادة ١١ (مكانة المرأة والأمومة والطفولة)', dom: 'حقوق المرأة', lvl: 2 },
  { id: 'egypt-work-rights', t: 'حقوقك في الشغل', arts: 'المواد ١٢–١٤ (العمل حق وواجب وشرف، ومنع العمل الجبري)', dom: 'عمل', lvl: 2 },
  { id: 'egypt-education-right', t: 'حقك في التعليم', arts: 'المادة ١٩ (التعليم حق لكل مواطن)', dom: 'تعليم', lvl: 2 },
  { id: 'egypt-children-protection', t: 'حماية الطفل — إزاي تحمي ابنك أو أخوك الصغير', arts: 'المادة ٨٠ (حقوق الطفل)', dom: 'حماية الأهل', lvl: 3 },
  { id: 'egypt-litigation-remedy', t: 'حقك في التقاضي — وإن الاعتداء على حرياتك جريمة لا تسقط', arts: 'المادة ٩٧ (التقاضي حق مكفول) والمادة ٩٩ (الاعتداء على الحريات جريمة لا تسقط بالتقادم، وللمجلس القومي لحقوق الإنسان أن يتدخّل)', dom: 'دستور مصري', lvl: 3 },
]

phase('Produce')
const R = await pipeline(T,
  (x) => agent(SAFE + ONELAW + NOPROC + CITE + FRAME + NUMSAFE + CONCISE + AR +
    `Produce ONE complete "hoqoqi" card id="${x.id}" project="hoqoqi" ("${x.t}") grounded ONLY in ${SRC}. level=${x.lvl}, domain="${x.dom}". Focus articles: ${x.arts} — but VERIFY the article numbers and text on the page yourself; if an article number differs from what I wrote, use what the PAGE says. do_steps = ما هو حقك بالظبط حسب النص (وأي إجراء النص نفسه بيذكره — بس اللي مذكور فعلاً). grounded=true only if truly fetched and every field is on the page.`,
    { label: `make:${x.id}`, phase: 'Produce', schema: CARD }),
  (card, x) => card && card.grounded
    ? agent(SAFE + `ADVERSARIAL One-Law check. Re-fetch ${SRC}. The FULL card is below (not truncated). Confirm: (1) every do/dont step is LITERALLY supported by the page — reject any invented procedure; (2) basis_ar article numbers are real and each statement is attributed to the article that actually contains it; (3) verbatim_quote is word-for-word on the page; (4) arrays complete; (5) every contacts[].number is empty (page has no numbers); (6) note_ar honestly frames constitutional articles as principles, not self-executing procedures; (7) nothing misleading. verdict="PASS" only if ALL hold, else "FAIL" + specific issues.\n\nFULL CARD:\n${JSON.stringify(card, null, 1)}`,
      { label: `verify:${x.id}`, phase: 'Verify', schema: VERDICT }).then((v) => ({ card, verdict: v }))
    : { card, verdict: { id: x.id, verdict: 'FAIL', issues: ['ungrounded at produce'] } }
)
const pass = R.filter(Boolean).filter((r) => r.verdict && r.verdict.verdict === 'PASS').map((r) => r.card)
return { hoqoqiPass: pass.length, hoqoqi: pass, fails: R.filter(Boolean).map((r) => r.verdict).filter((v) => v && v.verdict === 'FAIL') }
