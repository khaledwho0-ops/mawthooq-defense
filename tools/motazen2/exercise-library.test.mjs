import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('exercise library covers every safety practice family with substantive optional routes', async () => {
  const [library, safety, claims] = await Promise.all([
    load(join(handoffDir, '11_EXERCISE_LIBRARY', 'exercises.json')),
    load(join(handoffDir, '22_SAFETY', 'practice-dose-stop-rules.json')),
    load(join(handoffDir, '07_CLAIM_LIBRARY', 'claims.json')),
  ]);
  const familyIds = new Set(safety.practiceFamilies.map(({ id }) => id));
  const claimIds = new Set(claims.claims.map(({ id }) => id));
  assert.equal(library.exercises.length, familyIds.size);
  assert.deepEqual(new Set(library.exercises.map(({ familyId }) => familyId)), familyIds);
  assert.equal(new Set(library.exercises.map(({ id }) => id)).size, library.exercises.length);
  for (const exercise of library.exercises) {
    assert.ok(exercise.nameAr.length >= 8, `${exercise.id}: shallow nameAr`);
    for (const key of ['purposeAr', 'minimumAr', 'standardAr', 'extendedAr', 'successAr']) {
      assert.ok(exercise[key].length >= 20, `${exercise.id}: shallow ${key}`);
    }
    assert.ok(exercise.stopAr.length >= 2);
    assert.ok(exercise.alternativesAr.length >= 2);
    assert.ok(exercise.claimIds.every((id) => claimIds.has(id)));
    assert.equal(exercise.professionalReview, 'PENDING');
  }
});
