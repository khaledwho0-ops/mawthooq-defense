# NHS (OGL v3) replacements for A.D.A.M./Ebix-derived مستعد cards
Probed live 16 Jul 2026. Purpose: resolve the licence exposure in SECOND_BRAIN 2.11d —
A.D.A.M. forbids derivative works; NHS OGL v3 explicitly permits reuse + adaptation with attribution.

## Genuine 1:1 matches — safe to re-source
| card | NHS page |
|---|---|
| burn | https://www.nhs.uk/conditions/burns-and-scalds/ |
| heat-stroke | https://www.nhs.uk/conditions/heat-exhaustion-heatstroke/ |
| head-injury | https://www.nhs.uk/conditions/head-injury-and-concussion/ |
| cuts-wounds | https://www.nhs.uk/conditions/cuts-and-grazes/ |
| poisoning | https://www.nhs.uk/conditions/poisoning/ |

## DO NOT re-source to these — scope mismatch, they will (correctly) fail verification
- choking-adult, drowning → only /conditions/first-aid/ (generic; may not carry the specific procedure)
- electric-shock → only /conditions/burns-and-scalds/ (does not cover electric shock as such)
- broken-bone → only /conditions/broken-arm-or-wrist/ (NARROWER than the card; re-scope the card to arm/wrist or leave it)
- choking-infant → no NHS equivalent found

## IMPORTANT — this is a REPLACE, not an append
integrate.py / integrate_new.py dedup by id, so a re-sourced card with an existing id is SKIPPED.
Remove the old card + its A.D.A.M. source record first, then integrate the NHS version.
Verify after: the card's sources[] must point at nhs.uk and licence must read OGL — not A.D.A.M.
