import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const lessonsDir = join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001');
const experimentDir = join(handoffDir, '11_EXERCISE_LIBRARY');
const missionDir = join(handoffDir, '12_REAL_WORLD_MISSIONS');
const lessonFiles = (await readdir(lessonsDir)).filter((file) => /^day-\d{3}\.json$/u.test(file)).sort();
const lessons = await Promise.all(lessonFiles.map(async (file) => JSON.parse(await readFile(join(lessonsDir, file), 'utf8'))));

const base = {
  schemaVersion: 1,
  generatedFrom: '14_DAILY_LESSONS/TRACK-HUMAN-001/day-*.json',
  status: 'PARTIAL_WRITTEN_DAYS_ONLY_PROFESSIONAL_AND_USER_REVIEW_PENDING',
  generatedAt: '2026-08-13',
};

const experiments = lessons.map((lesson) => ({
  id: `EXP-TRACK-HUMAN-001-${String(lesson.content.dayNumber).padStart(3, '0')}`,
  dayId: lesson.dayId,
  titleAr: `تجربة اليوم ${lesson.content.dayNumber}: ${lesson.content.titleAr}`,
  instructionAr: lesson.content.microExperimentAr,
  purposeAr: lesson.content.objectiveAr,
  practiceFamilyIds: lesson.outlineRefs.practiceFamilyIds,
  claimIds: lesson.outlineRefs.claimIds,
  sourceIds: [...lesson.content.primarySourceIds, ...lesson.content.additionalSourceIds],
  safetyAr: lesson.content.safetyNoteAr,
  helpThresholdAr: lesson.content.professionalHelpThresholdAr,
  failureResponseAr: lesson.content.failureResponseAr,
  completionAr: lesson.content.completionWithoutPerfectionAr,
  dataPolicy: 'NO_STORAGE_DEFAULT',
  professionalReview: lesson.professionalReview,
}));

const missions = lessons.map((lesson) => ({
  id: `MISSION-TRACK-HUMAN-001-${String(lesson.content.dayNumber).padStart(3, '0')}`,
  dayId: lesson.dayId,
  titleAr: `مهمة اليوم ${lesson.content.dayNumber}: ${lesson.content.titleAr}`,
  instructionAr: lesson.content.realWorldMissionAr,
  relationshipAr: lesson.content.relationshipPracticeAr,
  environmentAr: lesson.content.environmentChangeAr,
  practiceFamilyIds: lesson.outlineRefs.practiceFamilyIds,
  claimIds: lesson.outlineRefs.claimIds,
  sourceIds: [...lesson.content.primarySourceIds, ...lesson.content.additionalSourceIds],
  safetyAr: lesson.content.safetyNoteAr,
  helpThresholdAr: lesson.content.professionalHelpThresholdAr,
  failureResponseAr: lesson.content.failureResponseAr,
  dataPolicy: 'NO_STORAGE_DEFAULT',
  professionalReview: lesson.professionalReview,
}));

await Promise.all([mkdir(experimentDir, { recursive: true }), mkdir(missionDir, { recursive: true })]);
await Promise.all([
  writeFile(join(experimentDir, 'behavioral-experiments.json'), `${JSON.stringify({ ...base, experiments }, null, 2)}\n`, 'utf8'),
  writeFile(join(missionDir, 'real-world-missions.json'), `${JSON.stringify({ ...base, missions }, null, 2)}\n`, 'utf8'),
]);
