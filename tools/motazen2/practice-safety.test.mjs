import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');

test('practice families have three optional levels, stop rules, alternatives, evidence links, and pending review', async () => {
  const matrix = JSON.parse(await readFile(join(handoffDir, '22_SAFETY', 'practice-dose-stop-rules.json'), 'utf8'));
  const claims = JSON.parse(await readFile(join(handoffDir, '07_CLAIM_LIBRARY', 'claims.json'), 'utf8')).claims;
  const claimIds = new Set(claims.map(({ id }) => id));
  const ids = matrix.practiceFamilies.map(({ id }) => id);

  assert.equal(matrix.status, 'DRAFT_NOT_PROFESSIONALLY_REVIEWED');
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(matrix.practiceFamilies.length >= 15);

  for (const practice of matrix.practiceFamilies) {
    for (const field of ['id', 'name_ar', 'scope', 'minimum', 'standard', 'extended']) {
      assert.ok(practice[field], `${practice.id}: missing ${field}`);
    }
    assert.ok(practice.stopSignals.length >= 3, `${practice.id}: insufficient stop signals`);
    assert.ok(practice.alternatives.length >= 2, `${practice.id}: insufficient alternatives`);
    assert.ok(practice.claimIds.length >= 1, `${practice.id}: no claim link`);
    assert.ok(practice.claimIds.every((id) => claimIds.has(id)), `${practice.id}: unknown claim`);
    assert.equal(practice.professionalReview, 'PENDING');
  }
});
