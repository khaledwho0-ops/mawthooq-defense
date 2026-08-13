import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const lessonDir = join(root, '14_DAILY_LESSONS', 'TRACK-HUMAN-001');
const prompts = [];
for (let day = 1; day <= 100; day += 1) {
  const file = `day-${String(day).padStart(3, '0')}.json`;
  const lesson = JSON.parse(await readFile(join(lessonDir, file), 'utf8'));
  lesson.content.journalPromptsAr.forEach((promptAr, index) => prompts.push({
    id: `JP-TRACK-HUMAN-001-${String(day).padStart(3, '0')}-${index + 1}`,
    trackId: lesson.trackId,
    day,
    promptAr,
    optional: true,
    storageDefault: 'NO_STORAGE',
    AIProcessingDefault: false,
    skipWithoutPenalty: true,
    safetyNoteAr: lesson.content.safetyNoteAr.textAr,
  }));
}
const output = {
  schemaVersion: '1.0.0',
  status: 'GENERATED_FROM_RESEARCHED_DRAFT_DAYS',
  professionalReview: 'PENDING',
  promptCount: prompts.length,
  privacy: { storageDefault: 'NO_STORAGE', AIProcessingDefault: false, exportOptional: true, deleteIndependent: true },
  prompts,
};
const outDir = join(root, '13_JOURNAL_PROMPTS');
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, 'prompts.json'), `${JSON.stringify(output, null, 2)}\n`, 'utf8');
