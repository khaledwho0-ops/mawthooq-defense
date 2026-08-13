import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const privacyDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '21_PRIVACY');
const load = async (name) => JSON.parse(await readFile(join(privacyDir, name), 'utf8'));

test('privacy registry defaults sensitive categories to no storage and forbids monetization and diagnosis', async () => {
  const registry = await load('data-control-registry.json');
  assert.equal(registry.defaultMode, 'NO_SAVE');
  assert.equal(registry.advertisingAllowed, false);
  assert.equal(registry.saleAllowed, false);
  assert.equal(registry.diagnosticInferenceAllowed, false);
  assert.equal(registry.balanceScoreAllowed, false);
  const byId = new Map(registry.categories.map((entry) => [entry.id, entry]));
  for (const id of ['JOURNAL', 'REFLECTION', 'HELP_INTERACTION', 'RESEARCH_DATA']) {
    assert.ok(['NONE', 'TRANSIENT_MEMORY_ONLY'].includes(byId.get(id).defaultStorage));
  }
  assert.equal(byId.get('JOURNAL').analyticsAllowed, false);
  assert.equal(byId.get('HELP_INTERACTION').aiAllowed, false);
  assert.equal(byId.get('SEARCH_QUERY').retention, 'ZERO_AFTER_QUERY');
});

test('AI processing is per use and every dangerous free-text sink is forbidden', async () => {
  const registry = await load('data-control-registry.json');
  assert.ok(registry.aiPerUseDisclosureFields.includes('exactPayload'));
  assert.ok(registry.aiPerUseDisclosureFields.includes('saferNoSendAlternative'));
  for (const sink of ['URL', 'ANALYTICS', 'CRASH_REPORT', 'APPLICATION_LOG', 'ADVERTISING']) {
    assert.ok(registry.forbiddenSinksForFreeText.includes(sink));
  }
  for (const check of ['networkNoSendTest', 'localDeleteTest', 'cloudDeleteTest', 'consentWithdrawalTest', 'aiPayloadPreviewTest']) {
    assert.ok(registry.requiredVerification.includes(check));
  }
});
