import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const reviewDir = join(handoffDir, '25_RED_TEAM', 'TRACK-HUMAN-001', 'pilot-days-001-020');
const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('pilot review register covers all four required lenses without fabricated approval', async () => {
  const register = await load(join(reviewDir, 'findings.json'));
  assert.equal(register.publicationDecision, 'HOLD');
  assert.match(register.reviewType, /NOT_PROFESSIONAL_APPROVAL/u);
  assert.deepEqual(new Set(register.findings.map(({ lens }) => lens)), new Set([
    'clinical-public-health',
    'behavioral-curriculum',
    'egyptian-society-language',
    'product-accessibility-privacy',
  ]));
  assert.ok(register.findings.length >= 12);
  assert.ok(register.findings.some(({ severity }) => severity === 'CRITICAL'));
  assert.ok(register.findings.some(({ status }) => status === 'HOLD_EXTERNAL'));
  assert.ok(register.findings.every(({ id, action, requiredHumanRole }) => id && action && requiredHumanRole));
});

test('all written high and critical days expose active safety and human-help fields', async () => {
  const outline = await load(join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'outline.json'));
  const sensitiveDays = outline.days.filter(({ safetySensitivity }) => ['HIGH', 'CRITICAL'].includes(safetySensitivity));
  assert.ok(sensitiveDays.length >= 1);
  for (const outlineDay of sensitiveDays) {
    const file = `day-${String(outlineDay.day).padStart(3, '0')}.json`;
    const lesson = await load(join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001', file));
    assert.equal(lesson.content.safetyNoteAr.applicable, true, `${file}: safety note inactive`);
    assert.equal(lesson.content.professionalHelpThresholdAr.applicable, true, `${file}: help threshold inactive`);
    assert.equal(lesson.professionalReview, 'PENDING');
    assert.notEqual(lesson.status, 'PUBLISHED');
  }
});

test('pilot internal revision has no open drafting findings while external holds remain explicit', async () => {
  const [register, manifest] = await Promise.all([
    load(join(reviewDir, 'findings.json')),
    load(join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001', 'pilot-manifest.json')),
  ]);
  assert.equal(register.findings.filter(({ status }) => status === 'OPEN_INTERNAL').length, 0);
  assert.ok(register.findings.filter(({ status }) => status === 'HOLD_EXTERNAL').length >= 1);
  assert.equal(manifest.internalReview.status, 'COMPLETE_WITH_EXTERNAL_HOLDS');
  assert.equal(manifest.externalReview.status, 'PENDING');
  assert.equal(manifest.externalReview.approvalClaimed, false);
  assert.match(manifest.publicationStatus, /^HOLD_/u);
});
