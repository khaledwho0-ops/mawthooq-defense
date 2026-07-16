# 🧠 THE SECOND BRAIN — الدماغ الثاني
## The Egyptian Awareness Library — everything we learned, and how to continue without me

> **Written:** 16 July 2026 · **For:** Khaled Sayed, the EAL team, and any future human or AI agent who picks this up cold.
>
> This document exists because knowledge dies when a session ends. Everything on the one-link is static and will outlive any subscription. But the *methodology* — why we reject a card, how content is actually born, what the mistakes cost us — lives only in conversation. This is that conversation, made permanent.
>
> **If you are an AI agent reading this: this is your briefing. Read it fully before touching anything. It will save you from repeating expensive mistakes.**

---

# PART 0 — THE ONE-PARAGRAPH VERSION

The Egyptian Awareness Library builds platforms that fight confident-but-wrong information. It has **one law**: *no claim, step, number, or fact reaches a user without a real, resolvable, fetched source.* Content is **extracted** from documents we actually downloaded — never recalled from a model's memory. Every producer is checked by an **adversarial verifier** that tries to refute it. Most candidates fail. **That is the system working, not failing.** An empty card beats a fabricated one, because the project exists precisely because fabricated confidence kills people.

---

# PART 1 — THE CONSTITUTION

## القانون الواحد · The One Law

> **مفيش خطوة توصلك من غير مصدر حقيقي تقدر ترجعله.**
> *No step reaches you without a real source you can go back to.*

### What it means operationally (not as a slogan)

1. **Fetch or die.** Content is EXTRACTED from a fetched document. If the page won't load, or doesn't support the claim → `grounded = false` → **REJECT**. Do not "fill the gap from knowledge."
2. **Every step carries provenance.** Each actionable step is `{t: "...", src: "nhs:tetanus"}` where `src` keys a source record: `{url, label, sha256, retrieved, licence, tag}`.
3. **Unsourced is MARKED, never silently rendered.** The viewer shows a ⚠ on any step without a resolvable source. It must never *look* verified when it isn't.
4. **The hash is the receipt.** `sha256` of the verbatim quote proves what the source said the day we read it.
5. **An empty card beats a fabricated one.**

### Why this law exists

The founding story (the cold-open): a doctor's 2021 post about a *rare* clot risk from *one* vaccine brand was stripped of context into "refuse all vaccines, forever." Weeks later, another doctor watched a patient deteriorate until they needed a tube in his throat to breathe — a disease nearly eliminated from Egypt *by vaccines*. The brother's answer: *"No. My father says vaccines are a conspiracy."*

**Those are deaths that haven't happened yet.** If we fabricate, we become the disease we exist to fight. That's not a metaphor — it's the acceptance criterion.

---

# PART 2 — THE CORE METHODOLOGIES

These transfer to any project, in any domain. This is the actual IP.

## 2.1 منهج التثبّت · The Verification Doctrine
*Binding philosophy that sits ABOVE the constitution.*

- **Operational definitions** — define every term so it can be measured and falsified. "Misinformation" is not a definition; "a claim contradicted by the cited source" is.
- **Falsification tests** — for every claim, ask: *what observation would prove this wrong?* If nothing could, it isn't a claim, it's a belief.
- **Stress-test everything** — assume your own output is wrong until it survives an attack.
- **The ~1-in-4 rule** — empirically, roughly a quarter of confident outputs are wrong. Plan for it. Build the catcher, not the hope.

## 2.2 The Firewall Protocol
The binding acceptance test for any verdict the system gives:

1. **Separate the layers** — empirical / religious / emotional. Never mix them. A claim can be empirically false and religiously meaningful; conflating the two is how you lose the person and the truth at once.
2. **Harm gate** — if being right causes harm, the harm is part of the answer.
3. **Calibrated verdict — NEVER 100%.** Certainty is the tell of a liar. (Passes 21/21 on prod.)

## 2.3 The Provenance Pipeline — how content is actually born

```
FETCH → HASH → EXTRACT → VERIFY(adversarial) → INTEGRATE(additive) → VALIDATE(node) → DEPLOY → CONFIRM(live)
```

| Step | Rule |
|---|---|
| **FETCH** | Download the real URL. No fetch = no card. |
| **HASH** | sha256 the verbatim quote — the receipt. |
| **EXTRACT** | Every field must trace to the fetched text. |
| **VERIFY** | A *different* agent re-fetches and tries to refute. |
| **INTEGRATE** | Additive injection only. Never rebuild. |
| **VALIDATE** | `node -e` load the data file; count must be right; a syntax error must fail loudly. |
| **CONFIRM** | Fetch the live URL, assert the new content is actually there + 0 console errors. |

> **⚠️ THE LESSON THAT DEFINES THIS PIPELINE:**
> **NHS overturned my poisoning card.** The model's recall was confidently wrong; the fetched source was right. **Always trust the fetch over the memory — including your own.** On the first مستعد validation run, only **1 of 18** cards was properly grounded. That number is why the pipeline exists.

## 2.4 Adversarial Verification — produce → refute → PASS-only

**Never trust the producer.** A second agent re-fetches the source and attempts to *refute* the card. It PASSes only if **all** hold:

- [ ] every do/dont step is supported by the page
- [ ] nothing invented — no fabricated fact, article number, statistic, or phone number
- [ ] arrays complete (not truncated)
- [ ] no unverified number; no jurisdiction conflation
- [ ] safe and not misleading

**This is not theatre — it caught real kills:**

> **1. The tetanus card** fabricated `"123 إسعاف"` (the Egyptian ambulance) into a step, when the NHS source lists only 111 and 999 — *and* spliced an emergency number into a step labelled with the **non-emergency** line. Wrong AND dangerous. Rejected. **It never reached a user.**

> **2. The severe-bleeding card dropped an exception that could blind someone.** MedlinePlus reads: *"Direct pressure is best for external bleeding, **except for an eye injury**."* The card kept the direct-pressure instruction and **dropped the exception**. Someone following it literally would press on an injured eye. The verifier's verdict: **"BLOCKING (safety)"**. Rejected — on the most dangerous card in the library.
>
> **Note what kind of error that is.** Nothing was fabricated. Every word came from the source. The defect was an **omission** — a true instruction made dangerous by dropping the clause that bounds it. *Grounding is necessary but not sufficient: a subset of the truth can be more dangerous than a visible lie, because it carries the source's authority while missing the part that keeps you safe.* Check for what was **left out**, not only for what was made up.

> **3. The domestic-violence card** widened WHO's *"intimate partner violence"* statistic into *"violence"* generally. A true number in a false frame. Rejected.

**Expect low yield and don't flinch.** Batch 1: **4 of 18 PASS**. Wave 1 gap batch: 3/6 cards + 5/6 claims. That's the gate doing its job. *A low pass rate is evidence of integrity, not incompetence.*

## 2.5 The Durability Protocol
*Born from a session-limit kill that destroyed ~40 minutes of work and produced zero files.*

- **Write-first.** Make the deliverable durable **before** the expensive call, not after.
- **One unit per agent.** A death then costs one card, not a batch.
- **Checkpoint + persist resume state.**
- **Resume, don't restart.** `Workflow({scriptPath, resumeFromRunId})` — unchanged agents replay from cache **for free**.
- **Salvage immediately.** When a batch dies, harvest the PASS survivors *now* (integration is cheap, agents are not). We rescued `high-blood-sugar` this way from a 12-of-17 wipeout.

## 2.6 Number Safety *(the tetanus lesson, generalized)*

- **Never invent a phone number.** Ever.
- **Keep the source's own numbers** (NHS 111, 999) *inside* source-quoted steps, exactly as written.
- **Put the Egyptian number (123) only in its own field** / the call directory — never spliced into a foreign source's step.
- **Never merge a non-emergency line with an emergency one.** That's not a typo, it's a triage failure.
- **Unverifiable number → leave it empty** and give guidance in words.

### 2.6b A number needs its OWN source — the card's source can't grant it
Found live on 16 Jul: the حقوقي `fraud-victim-steps` card listed **«جهاز حماية المستهلك — 19588»** while its **only** source was a **US FTC page**. A US federal page cannot possibly carry an Egyptian hotline. **The tetanus pattern again**, and it survived batch-1's verifier *because the slice bug (2.10b Bug 1) hid the `contacts` array from it.* Two harness bugs compounding.

**How it resolved — and why this is the pattern to copy:** the number turned out to be **real** (verified live in the header of the Consumer Protection Agency's own site, `cpa.gov.eg`). So the fix was **not** deletion — it was **provenance**. The contact now carries its own `extra_sources` record pointing at cpa.gov.eg, and the card renders **two** sources: FTC (for the advice) + CPA (for the number).

> **The rule:** a card's primary source only grounds what that source says. **Every phone number, address, or institution name needs provenance of its own** — verified against the issuing body's own site, and recorded as a separate source. `integrate_new.py` supports this via `extra_sources`.
>
> **And the deeper point:** "true" and "sourced" are different properties. 19588 was true and unsourced — still a One-Law violation, because a reader has no way to tell a true unsourced number from a hallucinated one. **The fix for a true-but-unsourced claim is to source it, not to delete it.** The fix for a false one is deletion.

## 2.7 Honesty Labels
Every متزن claim carries: **established · contested · debunked · unknown**, plus:
- **WEIRD flag** — was this studied only on Western/Educated/Industrialized/Rich/Democratic samples? If yes, say so.
- **cultural note** + **uncertainty note** — in Egyptian Arabic.

## 2.8 Anti-Truncation *(a completeness bug is a safety bug)*
Structured outputs get cut mid-array. On an emergency card, a truncated `dont` list is **actively dangerous** — the reader believes they've read all the warnings.
- Cap: **≤6 do / ≤4 dont / ≤5 redFlags**, each **≤18–20 words**.
- Require complete JSON (all arrays closed).
- **A truncated array = FAIL**, even if everything visible is correct.

## 2.9 Theme-Binding *(standing rule)*
**EVERY** page binds to tokens (`--bg-*`, `--text-*`, `--border-*`, `--accent-*`) — never a hardcoded colour. Verify on **a light and a dark theme** before shipping.

## 2.10 Jurisdiction Honesty *(حقوقي's version of the One Law)*
Legal content has a failure mode medical content doesn't: **a foreign procedure presented as local law.**
- State the **الدليل** (basis): the exact instrument + article (e.g. «الدستور المصري ٢٠١٤ — المادة ٥٤») + the verbatim quote.
- State the **jurisdiction** plainly.
- **ALWAYS**: *"ده وعي قانوني عام — مش استشارة قانونية. استشير محامي مصري مختص."*
- **Never** present an NCSC/FTC/UN procedure as an Egyptian one. (Batch 1's phishing card does this correctly: it says outright that the reporting route is UK-only, and points to the Egyptian channel separately.)

## 2.10b THE THREE HARNESS BUGS *(read this before you blame a model for a bad card)*

Three waves returned **0 PASS**. Not one was the model's fault. All three were the **harness** — mine. This section exists so nobody re-learns them.

### Bug 1 — Never truncate the artifact you ask a verifier to certify
The verify prompt did `JSON.stringify(card).slice(0, 3200)`. Arabic JSON blows past 3200 chars, so **every verifier received a card cut off mid-array** and correctly refused to certify what it could not see. The verifier said it outright:
> *"this is a **transport artifact of the instructions I was given**, not a proven defect in the card"*

Three waves of "failures" were **the slice**. Pass the **full** card. If it's too big, split the check — never silently amputate the evidence and then blame the witness.

### Bug 2 — Do not ORDER the fabrication, then blame the model for obeying
The `RIGHTS` prompt demanded: *"do_steps must cover (a) ما هو حقك ثم (b) **كيف تسترده عمليًا**"* — and pointed the agent at the **UDHR**, a document containing **zero procedures**. The agent, ordered to produce procedure from a page with none, filled the gap from recall: *"file a complaint with النيابة العامة"*, *"demand a lawyer"*, *"document the witnesses"*.
> The verifier's grep was brutal and correct: *"the page contains **ZERO occurrences of 'Egypt'**, no National Council for Human Rights, no prosecution service, and no complaint procedure."* · *"Plausible advice, but **not extracted** from the cited page." — **Recall, not extraction.***

**The One-Law violation was authored by my prompt, not by the model.** If you ask a source for something it does not contain, you have commissioned a fabrication.
**Rule:** the card's *shape* must match what the source can actually ground. Never demand a field the document cannot fill.

### Bug 3 — Verifying الدليل is NOT verifying the card
I hand-verified the 10 UDHR cards by checking **quotes and article numbers** — both genuinely clean, byte-exact. I **shipped them**. The real adversarial pass then checked the **do_steps** and failed them all.
> **A perfect quote at the top does not make the steps below it true.** Provenance of the *evidence* ≠ provenance of the *advice*. Check every step, or you have checked nothing.

This is the doctrine's own warning (*"self-review is not review"*) catching **me**. I was both the salvager and the verifier, and I certified my own work. **The cards were live for ~40 minutes before the real gate caught them.** Git reverted them in seconds — that is why additive-only + git-as-safety-net exists.

### THE PROOF — fixing the harness took the pass rate from 0% to 80%
Same models. Same adversarial gate. Same One Law. Three waves with the bugs: **0 PASS out of ~30**. One wave after fixing them (full card to the verifier + forbid procedure that isn't on the page + ground in the *binding* source): **8 PASS out of 10.**

> **When a pipeline returns nothing, suspect the harness before you suspect the model.** A 0% pass rate is almost never "the AI can't do it" — it is usually the scaffolding lying to itself.

And the content the fixed wave produced is *better* than what the buggy one attempted, because honesty was designed in rather than demanded away:
- `snapshot_ar`: **«ده مبدأ دستوري — مش إجراء»**
- `dont_step`: **«متدوّرش على خطوات إجرائية جوه المادة ٥٣ — مفيش فيها»**
- `redFlag`: **«حد بيستشهد برقم مادة من غير ما يقرالك نصها — اطلب النص الحرفي»** ← *the One Law, taught to the reader*
- `note_ar` even discloses that the verbatim quote is the English **International IDEA** translation on Constitute Project, **not the official Arabic text** — an honesty disclosure nobody asked for.

**The gate does not just block bad content. Given an honest frame, it produces better content.**

### The deeper lesson for حقوقي specifically
**A rights instrument grounds the RIGHT; it does not ground the REMEDY.**
- **UDHR / CEDAW** = non-binding declaration / obligation on *states*. **Not self-executing** in an Egyptian court. A card that pairs them with "go file at the نيابة" implies an enforcement pathway that does not exist — which could fail a real person in a real legal moment.
- **The Egyptian Constitution 2014 IS binding Egyptian law** — *and it actually contains procedure* (Art 54: a detainee must be told the reasons, may contact relatives and a lawyer, must be before the investigation authority within 24 hours; Art 99: assault on freedoms is a crime with no statute of limitations and the NCHR may file civil action). **Ground Egyptian procedural cards there, not in the UDHR.**
- The "كيف أسترده / من أكلم" half of K.'s card spec needs a **second, Egyptian procedural source**. Without one, the honest card states the right + الدليل + "استشير محامي" — and stops.

## 2.11b Probe the URLs Before You Spend *(the cheapest win in the whole pipeline)*

**A dead source URL is indistinguishable from bad content in the results — and it is far more common.**

Batch 1 reported 14 failures. The diagnosis:
- **10 of 14** were `"ungrounded at produce"` — because **the URL I supplied was 404**. The agents did nothing wrong; they were sent to a dead page and correctly refused to invent.
- The verifiers were explicit: *"All VISIBLE content is fully and accurately grounded — **nothing invented**"* · *"CONTENT IS OTHERWISE SUPPORTED (**no fabrication found**)"*.
- Only **1 of 14** was a real content defect (see 2.11c).

Then a pre-flight probe before the next wave found **only 7 of 13 topics had a live source at all** — NCSC and FTC restructure their URLs constantly (`/ransomware/home-and-small-business` → `/ransomware/home`; several `consumer.ftc.gov/articles/...` simply gone).

**The rule:** before spending a single agent, `curl` every candidate URL and assert `200 + >1200 chars + not "page not found"`. Cost: seconds. Savings: an entire wave.

```python
r = urllib.request.urlopen(Request(u, headers=UA), timeout=25)   # UA matters — some hosts 403 a bare agent
ok = r.status == 200 and len(text) > 1200 and 'page not found' not in text.lower()[:3000]
```
Keep 2–4 candidate URLs per topic and take the first that passes. **If no URL is live, drop the topic — do not send an agent to guess.**

## 2.11c Statistic Scoping *(the domestic-violence catch)*
A card turned WHO's **"intimate partner violence"** figure into **"violence"** generally — a real, subtle fabrication by widening scope. The verifier caught it.
> **Scope every statistic exactly as the source scopes it.** Do not broaden ("partner violence" → "violence"), narrow, or round. A true number in a wider frame is a false claim.

## 2.11d LICENCE TIER — "sourced" does not mean "allowed to use" ⚠️ **OPEN ISSUE — NEEDS KHALED'S DECISION**

**The One Law makes you check whether a claim is TRUE. It does not make you check whether you are ALLOWED to republish it. Those are different questions, and we got the second one wrong for months.**

### What we believed
`integrate.py` stamped every MedlinePlus source `"public domain (U.S. NLM)"`, and مستعد's public footer told users the same: *«المكتبة الوطنية الأمريكية للطب — ملكية عامة»*.

### What is actually true
**MedlinePlus is two different things under one domain:**
| Path | Owner | Licence |
|---|---|---|
| `medlineplus.gov/<topic>.html` | NLM | **genuinely public domain** ✅ |
| `medlineplus.gov/ency/article/*` | **A.D.A.M., Inc. (a business unit of Ebix)** | **© 1997-2026 — copyrighted** ❌ |

The `/ency/` pages carry this notice, verbatim:
> *"© 1997-2026 A.D.A.M., a business unit of Ebix, Inc. **Any duplication or distribution of the information contained herein is strictly prohibited.**"*
> *"You may not copy, reproduce, distribute, transmit, display, publish, reverse-engineer, adapt, modify, store beyond ordinary browser caching, index, mine, scrape, or **create derivative works from this content**. You may not use automated tools to access or extract content… Use of any content for **training, fine-tuning, calibrating, testing, evaluating, or improving AI systems** of any kind is prohibited without express written consent."*

### The exposure (measured 16 Jul 2026)
- **39 of 135** مستعد source records pointed at `/ency/` and were **all falsely labelled public domain**.
- **~33 of 119** مستعد cards are derived from A.D.A.M. content — including `choking-adult`, `choking-infant`, `drowning`, `electric-shock`, `heat-stroke`, `burn`, `scorpion-sting`, `knocked-out-tooth`.
- The site publicly asserted the false licence to every visitor.

### What was fixed immediately (done)
All 39 records relabelled **«© A.D.A.M./Ebix — مقتبس ومنسوب، مش ملكية عامة»**; the footer now states the truth and distinguishes the two MedlinePlus tiers; `integrate.py` will never mislabel `/ency/` again. **A false provenance claim is the exact defect this project exists to fight — it could not be left live for one hour.**

### What is NOT fixed — a human must decide ⚠️
Relabelling makes the claim **honest**. It does **not** make the use **permitted**. A.D.A.M.'s terms forbid derivative works, and a card *is* a derivative work. **Options for Khaled:**
1. **Re-source to NHS (recommended).** NHS content is **OGL v3** — it *explicitly permits* reuse and adaptation with attribution. NHS covers nearly every A.D.A.M.-sourced topic (choking, drowning, burns, bleeding, bites, heat illness). This resolves the issue cleanly and *strengthens* the library. Cost: re-run ~33 cards through the pipeline against NHS URLs.
2. **Seek written consent** from Ebix/A.D.A.M.
3. **Withdraw** the 33 cards.

**Do not ship مستعد commercially, or claim it as an unencumbered asset, until this is resolved.** Until then the honest public position is: attributed educational quotation, licence under review.

### The transferable rule
> **Add a licence gate beside the truth gate.** For every source ask *both*: **(a) is the claim true?** and **(b) am I permitted to republish and adapt it?** Record the real licence, per-URL-path — not per-domain. One domain can host two licences, and the restrictive one will be the page you actually used.

## 2.11 Dedup Before You Spend
**9 of 10 "new" topics in one batch were already covered.** Always diff proposed topics against the deployed set *before* spending a single agent. Token cost of dedup: ~0. Token cost of skipping it: an entire wave.

---

# PART 3 — THE ARCHITECTURE

## The family

**EAL is the mother methodology.** Every platform inherits the same law.

| Platform | Domain | State (16 Jul 2026) |
|---|---|---|
| **موثوق** Mawthooq | Verification — 8-layer deception scan, media forensics, no-hallucination agent, critical-thinking curriculum | **LIVE** · egy2.vercel.app |
| **مستعد** Mosta'ed | Readiness — first-aid / emergencies, every step line-level sourced | **117 cards** |
| **متزن** Motazen | Psychological literacy — claims with honesty labels | **130 claims** |
| **حقوقي** Ħoqoqi | Rights + criminology — know your right before you need it | **1 card** (seeded) |
| **أمان** Aman | Cybersecurity **+** criminology — a safe wall around you, your family, your home | **3 cards** (seeded) |

> **أمان's positioning (K., 16 Jul 2026):** *"منصة الأولى من نوعها بتدمج بين علوم الـ cybersecurity و criminology عشان تعمل جدار آمن حوالين نفسك أهلك بيتك وكل من تحب."* — The criminology half is what makes it new: not just *what the attack is*, but **how the criminal thinks and selects you**.

## The card engine (reusable across all platforms)

**Data file** sets two globals:
```js
window.SOURCES = { "ncsc:phishing": {url, label, tag, sha256, retrieved, licence} };
window.CARDS   = [ {id, title:{ar,en}, level, domain, who[], place[],
                    snapshot:{ar,en}, redFlags[],
                    do:[{t, src}], dont:[{t, src}],     // ← src = provenance
                    whenWhy:{ar}, note:{ar}, basis:{ar}, quote,
                    contacts:[{label, number, say}], sources:[{srcId, grade}]} ];
```

**Viewer** (`index.html`, ~350 lines, self-contained): filters (domain/level) → card grid → detail sheet.
The critical function is `CITE()`:
```js
// A verified step links to the document it came from.
// An unverified one is visibly flagged rather than passing as sourced.
const CITE = x => {
  if (typeof x === 'string' || !x.src) return `<sup class="cite unv" title="خطوة من غير مصدر مُثبت">⚠</sup>`;
  const s = (window.SOURCES||{})[x.src];
  if (!s) return `<sup class="cite unv" title="مصدر غير معروف">⚠</sup>`;
  return `<sup class="cite"><a href="${s.url}" target="_blank">${s.tag}</a></sup>`;
};
```
> **Design note that matters:** citations mark **claims** (do/dont/variations) only. Checklists and scripts render plain — *a ⚠ on everything trains people to ignore ⚠.*

## The integrators (in scratchpad — copy them forward)

| Tool | Job |
|---|---|
| `integrate.py` | Additive injection into مستعد/متزن. Brace-matches the array close, inserts before `]`, prepends to `window.SOURCES = {`. Dedups by id. node-validates. **Git is the safety net** — if validation fails, `git checkout -- <file>` reverts instantly. |
| `integrate_new.py` | Canonical accumulator (scratchpad JSON) → regenerates `aman/threats.js` + `hoqoqi/rights.js`. Idempotent; safe to re-run. |
| `validate-cards.mjs` | **Exits 1** on ungrounded L≥4. The blocking gate. |

**Why additive-only:** K.'s rule after a near-miss — *"DONT HARD REBUILD AND DELETE ALL WE HAVE NO TIME."* Surgical edits. A rebuild risks everything to fix a little.

---

# PART 4 — THE HARD-WON LESSONS

*Each of these cost real time, tokens, or trust. Do not re-learn them.*

### On truth
1. **Fabrication is the default failure mode.** An 86-item audit found **40 One-Law violations**. Unconstrained engines fabricate hadith, fatwa, and medical authority — fluently and confidently.
2. **The model's recall loses to the fetched source.** Every time. Including when you're sure.
3. **Adversarial verify catches what self-review cannot.** Self-review is the fox auditing the henhouse.
4. **A low PASS rate is a healthy signal.** 4/18 means the gate is real.

### On process
5. **Dedup before you spend.** 9/10 topics were duplicates.
5b. **Mine the journals — produced work survives a dead workflow.** When Wave 2 was killed by the session limit it reported `0 PASS` and looked like a total loss. It wasn't: **10 fully-produced حقوقي cards were sitting in `journal.jsonl`** — only their *verifiers* had died. The expensive half (fetch + extract) was already paid for. We recovered all 10, verified them by re-fetching the sources, and shipped them.
   - Journal path: `.claude/projects/<proj>/<session>/subagents/workflows/<runId>/journal.jsonl`
   - **Schema is `{type:"result", agentId, key, result}`** — `result` is a JSON *string* of the agent's return. (An early parser looked for `label`/`value`, found nothing, and nearly wrote off the whole wave. **Check the actual schema before concluding "no data."**)
   - **A workflow reporting 0 PASS is not the same as a workflow that produced nothing.**
5c. **Orphaned drafts accumulate in scratchpad.** Two complete, grounded مستعد cards (`sprain-strain`, `knocked-out-tooth`) sat unmerged for a day. Scratchpad is session-temp — **it gets wiped.** Sweep `scratchpad/*.json` against the live files periodically; merge or lose.
5d. **Verify with the source text, not a term-matcher.** Two "failures" in the salvage sweep were *my matcher*, not the cards: `egypt-home-privacy` (quote joined two sentences with `...`) and the tooth reinsertion step (card says "socket", MedlinePlus says "back in your mouth where it fell out" — a faithful paraphrase). **Always read the surrounding source text before rejecting.** A false rejection destroys good work as surely as a false accept ships bad work.
6. **Don't hard-rebuild.** Additive only.
7. **Save-only-on-200.** A screenshot re-run under thin quota silently overwrote good captures with error pages. Never write an artifact unless the response was actually successful.
8. **Session limits kill mid-flight.** Hence the Durability Protocol. This document is itself an instance of it.
9. **Verify live, not locally.** "It's in the file" ≠ "the user can see it." Fetch the deployed URL and assert.

### On judgement
10. **Third-party privacy is a hard line.** The 4 committee-analysis docs name and analyze real examiners — they stayed **local**, published 19 of 23. K. pushed to publish all; the line held. *A right answer that harms a third party is still the wrong action.*
11. **Secrets:** API keys pasted into chat are **exposed**. Gitignored `.env.local` only, never a public repo, and rotate afterward.
12. **Expert gates are not bureaucracy.** مستعد L4/L5 needs clinician sign-off; حقوقي needs a lawyer, before either claims authority. We can prove *traceability*; we cannot grant *medical or legal endorsement*. Those are different things, and conflating them is exactly the failure we exist to fight.

---

# PART 5 — STATE OF THE WORLD (16 July 2026)

## Live and permanent (no API, no subscription — works forever)
- **The one link:** `khaledwho0-ops.github.io/mawthooq-defense` — static GitHub Pages. Hub arranged in defense-day order (①–⑥).
- **موثوق:** `egy2.vercel.app` (needs API keys for the AI tools; the no-API pages work regardless)
- **Content:** مستعد **119** · متزن **130** · أمان **3** · حقوقي **15**
  *(حقوقي 9 = 8 Egyptian-Constitution 2014 cards + 1 FTC fraud-victim card. An earlier attempt at 10 UDHR cards was SHIPPED THEN REVERTED — see 2.10b Bug 3. The Constitution grounds them because it is binding Egyptian law and actually contains procedure; the UDHR does not.)*

## ⚠️ KNOWN CONTENT GAP — priority for the next run
**مستعد has NO severe-bleeding card.** It covers `bleeding-gums` and `nosebleed` only. Severe external bleeding is a life-threatening L5 topic and it is **uncovered**.
A grounded draft exists (`scratchpad/bleeding_card_draft.json`, MedlinePlus `ency/article/000045.htm`, *"The most important step for external bleeding is to apply direct pressure"*) but it is **malformed** — no `id`, wrong key shape (`do_steps_ar`), no level/domain/snapshot.
**It was deliberately NOT hand-authored.** Rebuilding it by hand would make the same context both producer and verifier, which breaks the separation the One Law depends on — on the single most dangerous card in the library. **Produce it properly (agent) → adversarially verify → integrate.** Do not shortcut this one.
- **Assets:** 59-slide deck (light-mode default, presenter initials), ~50s cold-open (`intro.html`), ~4-min looped showcase (`showcase.html`), 63pp documentation, 19 published docs.

## Known-open items
| Item | Note |
|---|---|
| حقوقي / أمان content | **The main gap.** Plan is in Part 6, ready to run. |
| Wave 2 expansion | Died on session limit (resets 8am Cairo). **Resumable** — see Part 6. |
| Clinician gate | مستعد L4/L5 before "medical-grade" claims |
| Lawyer gate | حقوقي before authoritative legal claims |
| `egy2clean` → `main` | Holds كوّن وعيك + rotator fixes. Not merged (prod-safe). |

---

# PART 6 — THE READY-TO-RUN PLAN
*The unfinished work, specified so it is executable rather than lost.*

## 6.1 حقوقي — the full dimension map (K.'s spec, 16 Jul 2026)

**Per-card structure (every card must answer all six):**
> **ما هو حقي القانوني الكامل** · **الدليل** · **كيف أسترده** · **ماذا أفعل** · **ماذا لا أفعل** · **من أكلم**

| # | Dimension | Grounded source |
|---|---|---|
| 1 | حقوق الإنسان الأساسية الطبيعية الموافق عليها من العالم كله | UDHR — `un.org/en/about-us/universal-declaration-of-human-rights` |
| 2 | حقوق الإنسان بناءً على القانون المصري | Egyptian Constitution 2014 — `constituteproject.org/constitution/Egypt_2014` |
| 3 | حقوق الإنسان — رجل | UDHR equality (Art 1–2, 7) — frame as equal protection |
| 4 | حقوق الإنسان — المرأة | CEDAW (OHCHR) · WHO violence-against-women |
| 5 | حقوق الإنسان في العمل | ILO (fundamental principles, OSH) |
| 6 | حقوق الإنسان في مجالات أخرى | CRC (children) · WHO (elder abuse) |
| 7 | كيف أحمي نفسي بالقانون: **البيت · الشارع · العمل · المتجر · المسجد · المدرسة · الأماكن العامة** | Ground each scenario in the *right* (home inviolability → Constitution Art 57–58; work → ILO; store → consumer protection) + the reporting route |
| 8 | كيف أحمي أبي وأمي وأخي وأختي بالقانون في كل الظروف | CRC/UNICEF (children) · WHO (older people) · the rights above |

**Grounding difficulty (be honest about it):** dimensions 1, 2, 5 ground cleanly — UDHR and the Constitution are fetchable full texts. Dimensions 7 and 8 are *situational*; ground each in an underlying right + a real reporting route, and let the verifier reject anything that drifts into invented Egyptian procedure. **Expect rejections. That's correct.**

## 6.1b ⚠️ THE REAL CRITIQUE — "STILL LACKING CONTENT… KNOWN DATA. DIVE DEEP" (K., 16 Jul)

**K. is right, and this is the most important open item in the document.**

أمان shipped 3 cards: *use three random words*, *don't click suspicious links*, *romance scams exist*. **Every Egyptian has heard all of it.** That is cyber-hygiene, not a product — and it is **not what K. specified**. His brief was explicit:

> *«منصة الأولى من نوعها بتدمج بين علوم الـ cybersecurity و **criminology** عشان تعمل جدار آمن حوالين نفسك أهلك بيتك وكل من تحب»*

**The criminology half — the entire differentiator — was never built.** A card that says "use a strong password" answers *what to do*. The product K. asked for answers **how the criminal thinks, how they choose you, and what actually happens next.** Nobody needs another list of tips; the value is in the non-obvious.

**Diagnosis of why it happened:** I picked topics by what had an easy source, not by what was worth knowing. The hygiene pages are the easiest pages on NCSC/FTC to ground — so the pipeline drifted to the shallowest possible content. **Grounding difficulty selected for banality.** Guard against this: choose the topic by value FIRST, then go find a source that can carry it.

### The deep source map — PROBE-VERIFIED LIVE 16 Jul 2026 (the hard part is done)

| Deep topic | Why it is NOT known data | Source (verified 200 + substantive) |
|---|---|---|
| **SIM swap** | The chain nobody explains: they take your **number** → your **OTP** → your **bank**. Your phone stops working *and that is the attack*, not a fault. | `https://www.ic3.gov/PSA/2022/PSA220208` (4.5k) |
| **Not all MFA is equal** | **Contradicts our own `two-factor-auth` card.** SMS codes are the *weakest* MFA and are phishable in real time. "Just turn on 2FA" is incomplete advice. | `https://www.ncsc.gov.uk/guidance/multi-factor-authentication-online-services` (5.5k) |
| **Sextortion** | The mechanics + *it is not your fault* + **do not pay** + the criminal usually has nothing. Life-saving for a panicking teenager. | `https://www.ncsc.gov.uk/guidance/sextortion-scams-how-to-protect-yourself` (6.4k) |
| **What happens to your data after a breach** | The resale chain — the theft is the *beginning*, not the end. | `https://consumer.ftc.gov/features/identity-theft` (8.7k) |
| **The real numbers** | Actual reported-fraud data instead of vibes. *(Scope every statistic EXACTLY — see 2.11c.)* | `https://www.ftc.gov/news-events/data-visualizations/data-spotlight` (15k) · `https://www.ic3.gov/AnnualReport/Reports` (3.7k) |
| **The global crime picture** | The criminology frame: organised, industrial, cross-border. | `https://www.unodc.org/unodc/en/cybercrime/index.html` (7k) |

**Dead ends — do not retry these (all 403/404 on 16 Jul):** Europol IOCTA + money-muling, actionfraud.police.uk, `ic3.gov/PSA/2021/*` and `/2023/*`, `consumer.ftc.gov/articles/cell-phone-fraud`, CISA `sites/default/files/*.pdf`, `ncsc.gov.uk/guidance/social-engineering`. Europol and Action Fraud block automated agents outright.

### Still-missing deep topics with NO live source found
money-mule recruitment (how an ordinary person becomes a criminal without knowing) · victim-selection/targeting · the fraud lifecycle (grooming→hook→extraction→exit) · why urgency and authority work on the brain. **These are the best cards on the list and none of them are grounded yet.** Find a fetchable authority before writing a word of them. If none exists, the honest answer is that أمان does not carry them.

### The rule this produced
> **Pick the topic by value, then hunt the source. Never let source-convenience pick your topics** — do that and you will faithfully, verifiably, ship things everyone already knows.

## 6.2 أمان — remaining topic map

Covered: phishing · strong-passwords · romance-scam.
Queued (all with strong fetchable sources):

| Topic | Source |
|---|---|
| elderly-scam-protection | `consumer.ftc.gov/features/protecting-older-consumers` |
| investment-crypto-scam | `consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams` |
| social-engineering *(criminology)* | `cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks` |
| secure-home-devices | `cisa.gov/secure-our-world` |
| account-recovery-hacked | `ncsc.gov.uk/guidance/recovering-a-hacked-account` |
| two-factor-auth · otp-hijack · ransomware · child-online-safety · public-wifi · data-breach-response · online-shopping-fraud | NCSC / FTC (see workflow script) |

**The criminology half** is the differentiator: every أمان card should answer not just *what the attack is*, but **how the criminal selects and manipulates you** (UNODC / FTC / CISA social-engineering material).

## 6.3 How to actually run it

**Resume the killed wave (free for cached agents):**
```
Workflow({ scriptPath: ".../workflows/scripts/expand-hoqoqi-aman-w2-wf_5c5876fc-287.js",
           resumeFromRunId: "wf_5c5876fc-287" })
```

**Then integrate:**
```bash
# extract PASS → scratchpad/pass_aman.json + pass_hoqoqi.json, then:
python integrate_new.py APPLY     # regenerates threats.js + rights.js, node-validates
git add -A && git commit -m "content: ..." && git push
# then FETCH the live URL and assert the new ids are present + 0 console errors
```

**The workflow shape that works** (produce → adversarially verify → PASS-only):
```js
const r = await pipeline(TOPICS,
  x => agent(SAFE + ONELAW + NUMSAFE + CONCISE + AR + BASIS +
             `Produce ONE card id="${x.id}" grounded ONLY in ${x.src}...`,
             {phase:'Produce', schema: CARD}),
  (card, x) => card?.grounded
    ? agent(SAFE + `ADVERSARIAL One-Law check. Re-fetch ${x.src}. Confirm every step
             supported, nothing invented, arrays complete, numbers safe. PASS/FAIL.`,
             {phase:'Verify', schema: VERDICT}).then(v => ({card, verdict:v}))
    : {card, verdict:{verdict:'FAIL', issues:['ungrounded at produce']}}
);
const pass = r.filter(Boolean).filter(x => x.verdict?.verdict === 'PASS').map(x => x.card);
```
**The prompt constants are the methodology compressed** — `ONELAW`, `NUMSAFE`, `CONCISE`, `BASIS`, `AR`. Reuse them verbatim; each one encodes a scar.

---

# PART 7 — HOW TO CONTINUE WITHOUT ME

**If you are a future agent or a human picking this up:**

1. **Read Part 1 and Part 2 first.** They are not background — they are the operating rules. Violating them produces output that looks like the project and betrays it.
2. **Never write a claim from memory.** Fetch, extract, hash, cite. If you can't fetch, you can't ship.
3. **Always have a second pass try to refute the first.** Self-review is not review.
4. **Expect and welcome rejection.** If your pass rate is high, your gate is broken.
5. **Additive edits only.** Git is the safety net; node-validate before you push; fetch the live URL before you claim it's done.
6. **Say what you don't know.** Calibrated, never 100%. Mark jurisdiction. Mark uncertainty. Flag WEIRD.
7. **Protect third parties** even when asked not to. Even when it's inconvenient.
8. **When the budget dies mid-flight:** salvage the survivors, write the state, resume — don't restart.

**The test for anything you build here:**
> *Would this step still be true if the person following it were someone you love, in the worst moment of their life, with no time to check?*
>
> If you can't trace it to a real source — **the honest answer is to say nothing.**

---

*الدليل قبل التصديق — evidence before belief.*
*المكتبة المصرية للوعي · The Egyptian Awareness Library · 2026*
