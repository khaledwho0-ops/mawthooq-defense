import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const path = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '17_MODES', 'mode-contracts.json');

test('all seven required modes have substantive power, safety, access, and research contracts without false curriculum claims', async () => {
  const registry = JSON.parse(await readFile(path, 'utf8'));
  const required = new Set(['MODE-STUDENT','MODE-PARENT','MODE-TEACHER','MODE-WORK','MODE-MANAGER','MODE-FAMILY','MODE-RELATIONSHIP']);
  assert.deepEqual(new Set(registry.modes.map(({ id }) => id)), required);
  for (const mode of registry.modes) {
    assert.ok(mode.purposeAr.length >= 30);
    assert.ok(mode.mustAdd.length >= 5);
    assert.ok(mode.mustNotAssume.length >= 5);
    assert.ok(mode.safetyGates.length >= 4);
    assert.ok(mode.requiredResearch.length >= 4);
    assert.equal(mode.publicationStatus, 'HOLD_TRACK_NOT_WRITTEN');
  }
  assert.match(registry.status, /TRACK_CURRICULA_PENDING/u);
});
