import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));

test('evidence hierarchy requires directness, counterevidence, context, and human gates', async () => {
  const hierarchy = await load('06_SOURCE_LIBRARY', 'evidence-hierarchy.json');
  assert.ok(hierarchy.levels.length >= 6);
  assert.ok(hierarchy.decisionPolicy.some((rule) => rule.includes('counterevidence')));
  assert.ok(hierarchy.decisionPolicy.some((rule) => rule.includes('Egyptian context')));
  assert.ok(hierarchy.publicationGate.includes('professional review attributable'));
});

test('research libraries deterministically classify all sources without losing records', async () => {
  const [registry, index] = await Promise.all([load('06_SOURCE_LIBRARY','sources.json'), load('06_SOURCE_LIBRARY','research-libraries-index.json')]);
  assert.equal(index.scientificEvidence.length + index.professionalGuidelines.length, registry.sources.length);
  assert.ok(index.systematicReviews.length >= 50);
  assert.ok([...index.scientificEvidence, ...index.professionalGuidelines].every(({ canonicalDaysUsed }) => Array.isArray(canonicalDaysUsed)));
});

test('every canonical day has calibrated claim counterevidence and source links', async () => {
  const [index, claims] = await Promise.all([load('09_EVIDENCE_COVERAGE','TRACK-HUMAN-001-day-evidence-and-counterevidence.json'), load('07_CLAIM_LIBRARY','claim-day-index.json')]);
  assert.equal(index.days.length, 100);
  assert.equal(claims.claims.length, 60);
  for (const day of index.days) {
    assert.ok(day.claimIds.length >= 1);
    assert.ok(day.primarySourceIds.length >= 1);
    assert.equal(day.counterevidence.length, day.claimIds.length);
    assert.ok(day.counterevidence.every(({ counterevidence, limitations, egyptian_applicability }) => counterevidence && limitations && egyptian_applicability));
  }
});
