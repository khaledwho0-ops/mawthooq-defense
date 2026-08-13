import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(handoffDir, ...parts), 'utf8'));

test('low-energy and missed-day systems are non-coercive and never create debt', async () => {
  const [low, missed] = await Promise.all([
    load('16_PRODUCT_SYSTEMS', 'low-energy-system.json'),
    load('16_PRODUCT_SYSTEMS', 'missed-day-system.json'),
  ]);
  assert.equal(low.entry.noReasonRequired, true);
  assert.equal(low.privacy.storeSelectionByDefault, false);
  assert.ok(low.routes.some(({ id, completionCredit }) => id === 'REST' && completionCredit));
  assert.equal(missed.rules.noDebt, true);
  assert.equal(missed.rules.noForcedRestart, true);
  assert.equal(missed.rules.noStreakLoss, true);
  assert.equal(missed.rules.notificationsDefault, 'OFF');
});

test('progress system cannot become a wellbeing score or safety gate', async () => {
  const progress = await load('16_PRODUCT_SYSTEMS', 'non-shaming-progress-system.json');
  assert.equal(progress.display.percentCompleteAllowed, false);
  assert.equal(progress.display.wellbeingScoreAllowed, false);
  assert.equal(progress.display.rankAllowed, false);
  assert.equal(progress.display.streakAllowed, false);
  assert.ok(progress.dimensions.every(({ neverScore }) => neverScore));
  assert.equal(progress.privacy.diagnosticInferenceForbidden, true);
});

test('version workflow forbids researched drafts from skipping human gates', async () => {
  const workflow = await load('16_PRODUCT_SYSTEMS', 'versioning-and-status.json');
  assert.ok(workflow.forbiddenTransitions.includes('RESEARCHED_DRAFT->PUBLISHED'));
  assert.ok(workflow.transitions.some(({ to, requires }) => to === 'APPROVED_FOR_PUBLICATION' && requires.includes('named_approvers')));
  assert.deepEqual(workflow.evidenceVersioning.impactTraversal, ['source', 'claim', 'capability', 'day', 'track', 'ui_copy']);
});

test('evaluation, harm monitoring, and feedback preserve negative outcomes and independent reporting', async () => {
  const [evaluation, harm, feedback] = await Promise.all([
    load('23_EVALUATION', 'curriculum-evaluation.json'),
    load('23_EVALUATION', 'negative-outcome-monitoring.json'),
    load('23_EVALUATION', 'feedback-system.json'),
  ]);
  assert.ok(evaluation.outcomes.some(({ id }) => id === 'NEGATIVE_EFFECT'));
  assert.ok(evaluation.interpretationRules.includes('completion is not effectiveness'));
  assert.equal(harm.report.accountRequired, false);
  assert.equal(harm.report.lessonCompletionRequired, false);
  assert.ok(harm.signalTypes.includes('DELAYED_HELP'));
  assert.ok(feedback.antiRetaliation.includes('feedback never changes progress'));
  assert.equal(feedback.privacy.AIProcessingDefault, false);
});
