import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const ledgerPath = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '03_REQUIREMENTS', 'atomic-subrequirements.json');

test('compound specification lists are fully atomized with stable IDs', async () => {
  const ledger = JSON.parse(await readFile(ledgerPath, 'utf8'));
  const expected = { absoluteRules: 90, dailyFields: 44, screens: 50, screenFields: 19 };
  const allIds = [];

  for (const [groupId, expectedCount] of Object.entries(expected)) {
    const group = ledger.groups[groupId];
    assert.ok(group.artifact && group.verification, `${groupId}: missing evidence contract`);
    assert.equal(group.items.length, expectedCount, `${groupId}: wrong item count`);
    for (const [id, requirement, status] of group.items) {
      assert.ok(id && requirement, `${groupId}: blank atomic requirement`);
      assert.ok(ledger.allowedStatuses.includes(status), `${id}: invalid status`);
      allIds.push(id);
    }
  }

  assert.equal(allIds.length, 203);
  assert.equal(new Set(allIds).size, 203);
  assert.equal(ledger.totals.atomicSubrequirements, 203);
});

test('absolute rules preserve the most dangerous and most easily hidden prohibitions', async () => {
  const ledger = JSON.parse(await readFile(ledgerPath, 'utf8'));
  const text = ledger.groups.absoluteRules.items.map(([, requirement]) => requirement).join('\n');
  for (const phrase of [
    'Never diagnose',
    'Never invent citations',
    'Never replace emergency care with self-help',
    'Never sell emotional data',
    'Never encourage unsafe confrontation',
    'Never copy-paste one 100-day program across roles',
    'Never mark AI-written content as professionally reviewed',
    'Never declare a track complete before all 100 days exist',
  ]) {
    assert.match(text, new RegExp(phrase, 'u'));
  }
});
