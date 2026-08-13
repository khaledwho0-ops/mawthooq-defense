import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const path = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '25_RED_TEAM', 'TRACK-HUMAN-001', 'full-track-review.json');

test('full-track internal red team covers four lenses and preserves external publication holds', async () => {
  const review = JSON.parse(await readFile(path, 'utf8'));
  assert.equal(review.scope, 'DAYS_001_100_AND_SHARED_SYSTEMS');
  assert.equal(review.approvalClaimed, false);
  assert.equal(review.verifiedFacts.days, 100);
  assert.equal(review.verifiedFacts.fieldsPerDay, 44);
  assert.deepEqual(new Set(review.findings.map(({ lens }) => lens)), new Set(review.lenses));
  assert.ok(review.findings.length >= 12);
  assert.ok(review.findings.some(({ status }) => status === 'HOLD_EXTERNAL'));
  assert.ok(review.findings.every(({ action, externalGate }) => action && externalGate));
  assert.match(review.releaseDecision, /^HOLD_/u);
  assert.ok(review.requiredExternalDecisions.length >= 6);
});
