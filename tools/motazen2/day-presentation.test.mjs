import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('presentation contract covers every content field once and assigns one pilot primary practice', async () => {
  const [schema, contract] = await Promise.all([
    load(join(handoffDir, '15_DATA_MODEL', 'day-schema.json')),
    load(join(handoffDir, '15_DATA_MODEL', 'day-presentation-contract.json')),
  ]);
  const grouped = contract.groups.flatMap(({ fields }) => fields);
  assert.equal(grouped.length, 44);
  assert.deepEqual(new Set(grouped), new Set(schema.properties.content.required));
  assert.equal(new Set(grouped).size, grouped.length);
  assert.deepEqual(contract.pilotPrimaryPracticeFields.map(({ day }) => day), Array.from({ length: 20 }, (_, index) => index + 1));
  const optionalPracticeFields = new Set(contract.groups.find(({ id }) => id === 'optional-practices').fields);
  assert.ok(contract.pilotPrimaryPracticeFields.every(({ field }) => optionalPracticeFields.has(field)));
  assert.deepEqual(contract.expansionPrimaryPracticeFields.map(({ day }) => day), Array.from({ length: 80 }, (_, index) => index + 21));
  assert.ok(contract.expansionPrimaryPracticeFields.every(({ field }) => optionalPracticeFields.has(field)));
});

test('every currently written day has exactly one primary-practice pointer', async () => {
  const contract = await load(join(handoffDir, '15_DATA_MODEL', 'day-presentation-contract.json'));
  const pointers = [...contract.pilotPrimaryPracticeFields, ...contract.expansionPrimaryPracticeFields];
  assert.equal(new Set(pointers.map(({ day }) => day)).size, pointers.length);
  assert.deepEqual(pointers.map(({ day }) => day), Array.from({ length: 100 }, (_, index) => index + 1));
  for (const { day, field } of pointers) {
    const lesson = await load(join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001', `day-${String(day).padStart(3, '0')}.json`));
    assert.ok(lesson.content[field].length >= 20, `day ${day}: shallow primary practice`);
  }
});

test('presentation contract makes safety independent and tomorrow cues non-coercive', async () => {
  const contract = await load(join(handoffDir, '15_DATA_MODEL', 'day-presentation-contract.json'));
  const invariants = contract.invariants;
  assert.equal(invariants.controlsBeforeContent, true);
  assert.equal(invariants.controlsDuringPractice, true);
  assert.equal(invariants.helpIndependentOfCompletion, true);
  assert.equal(invariants.helpIndependentOfStorage, true);
  assert.equal(invariants.helpIndependentOfAI, true);
  assert.equal(invariants.noGamificationOnSafetyControls, true);
  assert.equal(invariants.tomorrowCueDefault, 'OFF');
  assert.equal(invariants.tomorrowCueCreatesNotification, false);
  assert.equal(invariants.tomorrowCueAffectsStreakOrProgress, false);
  assert.equal(invariants.physicalFoundationCauseInferenceAllowed, false);
});
