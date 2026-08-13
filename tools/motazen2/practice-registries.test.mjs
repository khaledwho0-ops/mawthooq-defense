import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('behavioral experiment and mission registries reproduce every written lesson without generic substitution', async () => {
  const lessonsDir = join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001');
  const files = (await readdir(lessonsDir)).filter((file) => /^day-\d{3}\.json$/u.test(file)).sort();
  const lessons = await Promise.all(files.map((file) => load(join(lessonsDir, file))));
  const [experimentRegistry, missionRegistry] = await Promise.all([
    load(join(handoffDir, '11_EXERCISE_LIBRARY', 'behavioral-experiments.json')),
    load(join(handoffDir, '12_REAL_WORLD_MISSIONS', 'real-world-missions.json')),
  ]);
  assert.equal(experimentRegistry.experiments.length, lessons.length);
  assert.equal(missionRegistry.missions.length, lessons.length);
  for (let index = 0; index < lessons.length; index += 1) {
    const lesson = lessons[index];
    const experiment = experimentRegistry.experiments[index];
    const mission = missionRegistry.missions[index];
    assert.equal(experiment.dayId, lesson.dayId);
    assert.equal(experiment.instructionAr, lesson.content.microExperimentAr);
    assert.equal(mission.dayId, lesson.dayId);
    assert.equal(mission.instructionAr, lesson.content.realWorldMissionAr);
    assert.deepEqual(mission.relationshipAr, lesson.content.relationshipPracticeAr);
    assert.equal(experiment.professionalReview, 'PENDING');
    assert.equal(mission.professionalReview, 'PENDING');
  }
  assert.equal(new Set(experimentRegistry.experiments.map(({ instructionAr }) => instructionAr)).size, lessons.length);
  assert.equal(new Set(missionRegistry.missions.map(({ instructionAr }) => instructionAr)).size, lessons.length);
});
