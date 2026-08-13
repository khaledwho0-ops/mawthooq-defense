import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));

test('screen registry covers every core product surface with independent help and exits', async () => {
  const registry = await load('24_UI_SPECIFICATIONS', 'screen-contracts.json');
  const required = ['SCREEN-TRACK-EXPLORER','SCREEN-ROADMAP','SCREEN-DAILY-LESSON','SCREEN-PRACTICE','SCREEN-JOURNAL','SCREEN-PROGRESS','SCREEN-EVIDENCE','SCREEN-SOURCE-LIBRARY','SCREEN-MYTH-LIBRARY','SCREEN-HELP','SCREEN-PRIVACY-SETTINGS','SCREEN-ACCESSIBILITY-SETTINGS','SCREEN-CONTENT-REPORT','SCREEN-METHODOLOGY','SCREEN-LIMITATIONS'];
  assert.ok(required.every((id) => registry.screens.some((screen) => screen.id === id)));
  assert.ok(registry.screens.every(({ purposeAr, requiredRegions, emptyStateAr, safetyRoute }) => purposeAr.length >= 20 && requiredRegions.length >= 3 && emptyStateAr.length >= 20 && safetyRoute));
  assert.ok(registry.globalInvariants.some((rule) => rule.includes('help independent')));
});

test('interaction state machine gives urgent help, privacy, rest, and exit precedence', async () => {
  const machine = await load('24_UI_SPECIFICATIONS', 'interaction-state-machine.json');
  assert.equal(machine.precedence[0], 'HELP_URGENT_EXIT');
  assert.ok(machine.forbidden.includes('HELP_URGENT_EXIT->CONTENT_AUTO'));
  assert.ok(machine.forbidden.includes('REST->BACKLOG'));
  assert.ok(machine.forbidden.includes('REFLECTION_NO_SAVE->REFLECTION_SAVE_OPT_IN_AUTO'));
});

test('methodology and limitations publicly reject unsupported readiness claims', async () => {
  const [methodology, limitations] = await Promise.all([
    readFile(join(root, '27_PUBLIC_DOCUMENTATION', 'research-methodology.md'), 'utf8'),
    readFile(join(root, '26_KNOWN_LIMITATIONS', 'known-limitations.md'), 'utf8'),
  ]);
  for (const text of [methodology, limitations]) {
    assert.match(text, /غير سريري/u);
    assert.match(text, /المراجعة/u);
    assert.match(text, /النشر/u);
  }
  assert.match(limitations, /لم تُجرَ تجربة فاعلية/u);
  assert.match(limitations, /موارد المساعدة المحلية غير معتمدة/u);
});
