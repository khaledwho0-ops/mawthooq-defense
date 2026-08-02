# tools · the pipeline, preserved

These are the working scripts behind the One Law. They were living in a session-temp
scratchpad; they are here so they outlive any session or subscription.

**Read [`../docs/SECOND_BRAIN.md`](../docs/SECOND_BRAIN.md) first** — it explains the
methodology these scripts implement. Without it, they are just plumbing.

| File | What it does |
|---|---|
| `integrate.py` | Additive injection of verified cards/claims into `mostaed/scenarios.js` + `motazen/claims.js`. Brace-matches the array close, dedups by id, node-validates. Run `python integrate.py` for a **mock** (writes copies to scratchpad), `python integrate.py APPLY` to write live. Git is the safety net: if validation fails, `git checkout -- <file>` reverts instantly. |
| `integrate_new.py` | Canonical accumulator → regenerates `aman/threats.js` + `hoqoqi/rights.js` (`window.CARDS` + `window.SOURCES`). Idempotent; safe to re-run. |
| `workflow-expand-hoqoqi-aman.js` | The content workflow: produce → adversarially verify → PASS-only. **The prompt constants (`ONELAW`, `NUMSAFE`, `CONCISE`, `BASIS`, `AR`) are the methodology compressed — each encodes a scar.** Reuse them verbatim. |
| `workflow-fix-rerun-pattern.js` | The re-run pattern for failed items, with the anti-truncation + number-safety guards that fixed the tetanus One-Law violation. |
| `phase0-audit.mjs` | Deterministic retroactive Phase 0 safety audit and four-product coverage baseline. Loads canonical JavaScript in a sandboxed VM, probes sources before capture, writes durable evidence beneath `docs/audits/phase0-2026-08-02/`, and exits non-zero while any audit record is `FAIL` or `BLOCKED`. |

## Phase 0 audit

```powershell
node --test tools/phase0-audit.test.mjs
node tools/phase0-audit.mjs
```

The production command is deliberately fail-closed. A non-zero exit can be the correct result:
inspect `docs/audits/phase0-2026-08-02/PHASE0_CHECKPOINT.md` for the exact blockers. Successful
source responses are captured in `corpus/`; failed probes never overwrite a successful capture.
HTTP 200 and response length alone are insufficient: application shells without substantive visible
source content are blocked, and scenario `source-found` rows additionally require scenario-specific
evidence in the captured document.

## The loop, end to end

```bash
# 1. run a content workflow (produce → adversarially verify → PASS-only)
# 2. extract the PASS candidates → scratchpad/pass_*.json
# 3. integrate
python integrate_new.py APPLY        # or: python integrate.py APPLY
# 4. ship
git add -A && git commit -m "content: ..." && git push
# 5. CONFIRM LIVE — "it's in the file" is not "the user can see it"
#    fetch the deployed URL, assert the new ids are present, 0 console errors
```

**Non-negotiable:** never integrate a card that failed verification. The gate exists because
it already caught a fabricated emergency phone number on a tetanus card before it reached anyone.
