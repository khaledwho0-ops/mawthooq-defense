export const meta = {
  name: 'fix-rerun-4-failures',
  description: 'Re-run the 4 gap-batch failures with hardened prompts: scorpion-sting/dog-bite (concise complete arrays, no truncation), tetanus (keep source numbers in steps; Egyptian 123 only in egyptian_number field, never spliced), loneliness (retry ground)',
  phases: [{ title: 'Produce' }, { title: 'Verify' }],
}
const SAFE = 'RULES: Only FETCH public web pages (WebFetch — load via ToolSearch "select:WebFetch" — or `curl -s -L -m 25 <url>`) and RETURN structured data. No git, no repo writes, no deploy. '
const ONELAW = 'ONE LAW: content ONLY from the fetched source; every step supported; NEVER invent a number/step/fact. '
const CONCISE = 'IMPORTANT — avoid truncation: keep it COMPACT — at most 6 do_steps and 4 dont_steps, each step ≤ 18 words. Make sure the JSON is COMPLETE (all arrays closed). '
const NUMRULE = 'NUMBER SAFETY (critical): keep the source\'s own numbers (e.g. NHS 111, 999) EXACTLY as written inside any step. Put the Egyptian ambulance number 123 ONLY in the "egyptian_number" field — NEVER inside a do/dont step, and NEVER merge a non-emergency line (111) with an emergency one. '

const CARD = { type: 'object', properties: { id: { type: 'string' }, title_ar: { type: 'string' }, title_en: { type: 'string' }, level: { type: 'number' }, who: { type: 'array', items: { type: 'string' } }, place: { type: 'array', items: { type: 'string' } }, domain: { type: 'string' }, snapshot_ar: { type: 'string' }, snapshot_en: { type: 'string' }, redFlags_ar: { type: 'array', items: { type: 'string' } }, do_steps: { type: 'array', items: { type: 'object', properties: { t_ar: { type: 'string' }, en: { type: 'string' } } } }, dont_steps: { type: 'array', items: { type: 'object', properties: { t_ar: { type: 'string' }, en: { type: 'string' } } } }, source_name: { type: 'string' }, source_url: { type: 'string' }, verbatim_quote: { type: 'string' }, egyptian_number: { type: 'string' }, grounded: { type: 'boolean' } }, required: ['id', 'grounded'] }
const CLAIM = { type: 'object', properties: { id: { type: 'string' }, domain: { type: 'string' }, crisis_sensitive: { type: 'boolean' }, claim_ar: { type: 'string' }, claim_en: { type: 'string' }, status: { type: 'string' }, evidence_tier: { type: 'string' }, weird_flag: { type: 'boolean' }, source_name: { type: 'string' }, source_url: { type: 'string' }, verbatim_quote: { type: 'string' }, cultural_note_ar: { type: 'string' }, uncertainty_note_ar: { type: 'string' }, grounded: { type: 'boolean' } }, required: ['id', 'grounded'] }
const VERDICT = { type: 'object', properties: { id: { type: 'string' }, verdict: { type: 'string' }, grounded_confirmed: { type: 'boolean' }, issues: { type: 'array', items: { type: 'string' } } }, required: ['id', 'verdict'] }

const CARDS = [
  { id: 'scorpion-sting', t: 'لسعة عقرب', src: 'https://medlineplus.gov/ency/article/002850.htm', level: 4, domain: 'طوارئ', extra: CONCISE },
  { id: 'dog-bite', t: 'عضة كلب / حيوان + خطر السعار', src: 'https://www.nhs.uk/conditions/animal-and-human-bites/', level: 4, domain: 'طوارئ', extra: CONCISE },
  { id: 'tetanus', t: 'تيتانوس من جرح ملوّث', src: 'https://www.nhs.uk/conditions/tetanus/', level: 3, domain: 'إسعافات', extra: CONCISE + NUMRULE },
]
const CLAIMS = [{ id: 'loneliness-health', t: 'الوحدة بتأثّر على الصحة النفسية والجسدية', src: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/loneliness/', domain: 'ضغط' }]

phase('Produce')
const cards = await pipeline(CARDS,
  (x) => agent(SAFE + ONELAW + x.extra + `Produce ONE COMPLETE مستعد card id="${x.id}" ("${x.t}") grounded ONLY in ${x.src}. Fill all fields; egyptian_number="123 إسعاف". Egyptian Arabic.`, { label: `make:${x.id}`, phase: 'Produce', schema: CARD }),
  (card, x) => card && card.grounded
    ? agent(SAFE + `ADVERSARIAL check: re-fetch ${x.src}; verify every step is in the page, arrays complete (not truncated), no invented number/step, and no non-emergency/emergency number conflation. PASS only if fully grounded+complete+safe. Card: ${JSON.stringify(card).slice(0, 2800)}`, { label: `verify:${x.id}`, phase: 'Verify', schema: VERDICT }).then((v) => ({ card, verdict: v }))
    : { card, verdict: { id: x.id, verdict: 'FAIL', issues: ['ungrounded'] } }
)
const claims = await pipeline(CLAIMS,
  (x) => agent(SAFE + ONELAW + `Produce ONE متزن claim id="${x.id}" ("${x.t}") grounded ONLY in ${x.src}. Fetch it, fill all fields (domain="${x.domain}", status, sources, claim_ar warm Egyptian Arabic, claim_en). grounded=true only if truly fetched+quoted.`, { label: `make:${x.id}`, phase: 'Produce', schema: CLAIM }),
  (claim, x) => claim && claim.grounded
    ? agent(SAFE + `ADVERSARIAL check: re-fetch ${x.src}; verify claim+status supported, nothing invented. PASS or FAIL. Claim: ${JSON.stringify(claim).slice(0, 2500)}`, { label: `verify:${x.id}`, phase: 'Verify', schema: VERDICT }).then((v) => ({ claim, verdict: v }))
    : { claim, verdict: { id: x.id, verdict: 'FAIL', issues: ['ungrounded'] } }
)
const cardsPass = cards.filter(Boolean).filter((r) => r.verdict && r.verdict.verdict === 'PASS').map((r) => r.card)
const claimsPass = claims.filter(Boolean).filter((r) => r.verdict && r.verdict.verdict === 'PASS').map((r) => r.claim)
return { cardsPass: cardsPass.length, claimsPass: claimsPass.length, cards: cardsPass, claims: claimsPass, fails: [...cards, ...claims].filter(Boolean).map((r) => r.verdict).filter((v) => v && v.verdict === 'FAIL') }
