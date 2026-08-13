import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));

test('communication scripts are substantive, sourced, and explicitly bounded', async () => {
  const library = await load('12_COMMUNICATION_SCRIPTS', 'scripts.json');
  assert.ok(library.scripts.length >= 15);
  assert.equal(library.professionalReview, 'PENDING');
  assert.ok(library.scripts.every(({ scriptAr, notForAr, claimIds, sourceIds }) => scriptAr.length >= 20 && notForAr.length >= 20 && claimIds.length && sourceIds.length));
});

test('myth library corrects claims with evidence and limitations', async () => {
  const [library, claims, sources] = await Promise.all([
    load('18_MYTH_LIBRARY', 'myths.json'), load('07_CLAIM_LIBRARY', 'claims.json'), load('06_SOURCE_LIBRARY', 'sources.json'),
  ]);
  const claimIds = new Set(claims.claims.map(({ id }) => id));
  const sourceIds = new Set(sources.sources.map(({ id }) => id));
  assert.ok(library.myths.length >= 15);
  assert.ok(library.myths.every(({ correctionAr, limitsAr, claimIds: citedClaims, sourceIds: citedSources }) => correctionAr.length >= 30 && limitsAr.length >= 20 && citedClaims.every((id) => claimIds.has(id)) && citedSources.every((id) => sourceIds.has(id))));
});

test('journal library contains three private optional prompts for every day', async () => {
  const library = await load('13_JOURNAL_PROMPTS', 'prompts.json');
  assert.equal(library.promptCount, 300);
  assert.equal(library.prompts.length, 300);
  assert.deepEqual(new Set(library.prompts.map(({ day }) => day)), new Set(Array.from({ length: 100 }, (_, i) => i + 1)));
  assert.ok(library.prompts.every(({ optional, storageDefault, AIProcessingDefault, skipWithoutPenalty }) => optional && storageDefault === 'NO_STORAGE' && AIProcessingDefault === false && skipWithoutPenalty));
});

test('required topic modules map to real canonical days and keep safety entry points', async () => {
  const catalog = await load('17_MODULES', 'module-catalog.json');
  const required = new Set(['MODULE-DIGITAL','MODULE-SLEEP','MODULE-STRESS','MODULE-HABITS','MODULE-COMMUNICATION','MODULE-FAILURE','MODULE-MONEY','MODULE-AI']);
  assert.ok([...required].every((id) => catalog.modules.some((module) => module.id === id)));
  assert.ok(catalog.modules.every(({ entryDay, safetyDay, dayRanges }) => entryDay >= 1 && entryDay <= 100 && safetyDay >= 1 && safetyDay <= 100 && dayRanges.length));
});
