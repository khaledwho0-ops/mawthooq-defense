import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const path = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '20_ACCESSIBILITY', 'system-invariants.json');

test('access routes preserve RTL semantics, safety access, and no-storage completion', async () => {
  const rules = JSON.parse(await readFile(path, 'utf8'));
  assert.ok(rules.routes.includes('supportedReading'));
  assert.ok(rules.routes.includes('audioWithTranscript'));
  assert.ok(rules.routes.includes('noStorage'));
  assert.deepEqual(new Set(rules.alwaysReachable), new Set(['stop', 'skip', 'humanHelp', 'privacy', 'modeSwitch']));
  assert.equal(rules.rtl.logicalPropertiesRequired, true);
  assert.equal(rules.rtl.visualOrderMayReplaceDOMOrder, false);
  assert.equal(rules.rtl.manualCharacterReversalAllowed, false);
  assert.equal(rules.offline.noSaveCompletion, true);
});

test('low-bandwidth and offline failure rules cannot hide stale help or lose private data silently', async () => {
  const rules = JSON.parse(await readFile(path, 'utf8'));
  assert.equal(rules.lowBandwidth.coreRequiresImage, false);
  assert.equal(rules.lowBandwidth.coreRequiresAudio, false);
  assert.equal(rules.lowBandwidth.mediaPreloadOnMetered, false);
  assert.equal(rules.offline.publicAndPrivateCachesSeparated, true);
  assert.equal(rules.offline.atomicVersionUpdate, true);
  assert.equal(rules.offline.staleHelpMayAppearCurrent, false);
  assert.equal(rules.offline.journalAutoMergeAllowed, false);
  assert.equal(rules.offline.offlineCloudDeletionClaimAllowed, false);
  assert.equal(rules.offline.failedSaveMayClaimSaved, false);
  assert.equal(rules.privacy.freeTextCrashRecoveryWithoutOptIn, false);
});
