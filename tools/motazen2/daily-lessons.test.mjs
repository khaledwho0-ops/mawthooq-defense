import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const lessonsDir = join(handoffDir, '14_DAILY_LESSONS', 'TRACK-HUMAN-001');
const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

const arabic = /[\u0600-\u06FF]/u;
const prohibited = /العلم يثبت|نتيجة مضمونة|سيشفيك|يعالجك حتمًا|أنت مصاب|لديك اضطراب|اتزانك (?:هو|يساوي) [0-9]|حصلت على [0-9]+(?:%|٪) في الاتزان/u;

test('every written pilot lesson implements the exact 44-field contract with substantive Arabic', async () => {
  const [schema, files] = await Promise.all([
    load(join(handoffDir, '15_DATA_MODEL', 'day-schema.json')),
    readdir(lessonsDir),
  ]);
  const lessonFiles = files.filter((file) => /^day-\d{3}\.json$/u.test(file)).sort();
  assert.ok(lessonFiles.length >= 1);

  for (const file of lessonFiles) {
    const lesson = await load(join(lessonsDir, file));
    const fields = Object.keys(lesson.content);
    assert.deepEqual(new Set(fields), new Set(schema.properties.content.required), `${file}: wrong 44-field set`);
    assert.equal(fields.length, 44);
    assert.equal(lesson.professionalReview, 'PENDING');
    assert.notEqual(lesson.status, 'PROFESSIONALLY_REVIEWED');
    assert.notEqual(lesson.status, 'PUBLISHED');
    assert.equal(lesson.content.selfCheckQuestionsAr.length >= 3 && lesson.content.selfCheckQuestionsAr.length <= 8, true);
    assert.ok(lesson.content.whatNotToDoAr.length >= 2);
    assert.ok(lesson.content.specialContextAdaptationsAr.length >= 3);
    assert.ok(['STRONG', 'MODERATE', 'LIMITED', 'MIXED'].includes(lesson.content.evidenceStrength.rating));

    const text = JSON.stringify(lesson.content);
    assert.match(text, arabic, `${file}: missing Arabic`);
    assert.doesNotMatch(text, prohibited, `${file}: prohibited certainty/diagnosis/score language`);
    for (const key of schema.properties.content.required) {
      const value = lesson.content[key];
      assert.notEqual(value, undefined, `${file}: missing ${key}`);
      if (typeof value === 'string') assert.ok(value.length >= 20, `${file}: shallow ${key}`);
    }
  }
});

test('written lesson metadata and evidence references match the audited outline and registries', async () => {
  const [outline, sources, files] = await Promise.all([
    load(join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'outline.json')),
    load(join(handoffDir, '06_SOURCE_LIBRARY', 'sources.json')),
    readdir(lessonsDir),
  ]);
  const sourceIds = new Set(sources.sources.map(({ id }) => id));
  const lessonFiles = files.filter((file) => /^day-\d{3}\.json$/u.test(file)).sort();

  for (const file of lessonFiles) {
    const lesson = await load(join(lessonsDir, file));
    const outlineDay = outline.days[lesson.content.dayNumber - 1];
    assert.equal(lesson.dayId, `DAY-TRACK-HUMAN-001-${String(lesson.content.dayNumber).padStart(3, '0')}`);
    assert.equal(lesson.trackId, outline.trackId);
    assert.equal(lesson.content.titleAr, outlineDay.titleAr);
    assert.deepEqual(lesson.outlineRefs, {
      capabilityIds: outlineDay.capabilityIds,
      claimIds: outlineDay.claimIds,
      patternIds: outlineDay.patternIds,
      practiceFamilyIds: outlineDay.practiceFamilyIds,
      prerequisites: outlineDay.prerequisites,
    });
    const cited = [...lesson.content.primarySourceIds, ...lesson.content.additionalSourceIds];
    assert.ok(cited.every((sourceId) => sourceIds.has(sourceId)), `${file}: unknown source`);
  }
});

test('written lessons do not reuse core content under different day metadata', async () => {
  const files = (await readdir(lessonsDir)).filter((file) => /^day-\d{3}\.json$/u.test(file)).sort();
  const lessons = await Promise.all(files.map((file) => load(join(lessonsDir, file))));
  const coreFields = [
    'definitionSimpleAr',
    'definitionDeepAr',
    'researchSaysAr',
    'healthyExampleAr',
    'unhealthyExampleAr',
    'egyptianContextExampleAr',
    'action5MinAr',
    'action15MinAr',
    'fullPracticeAr',
    'microExperimentAr',
    'realWorldMissionAr',
    'reflectionAr',
  ];

  for (const field of coreFields) {
    const values = lessons.map(({ content }) => content[field].replace(/\s+/gu, ' ').trim());
    assert.equal(new Set(values).size, values.length, `duplicate ${field} across written days`);
  }
});

test('pilot manifest truthfully distinguishes drafted files from pending days', async () => {
  const [manifest, files] = await Promise.all([
    load(join(lessonsDir, 'pilot-manifest.json')),
    readdir(lessonsDir),
  ]);
  const lessonFiles = new Set(files.filter((file) => /^day-\d{3}\.json$/u.test(file)));
  assert.equal(manifest.days.length, 20);
  assert.deepEqual(manifest.days.map(({ day }) => day), Array.from({ length: 20 }, (_, index) => index + 1));
  for (const entry of manifest.days) {
    const expectedFile = `day-${String(entry.day).padStart(3, '0')}.json`;
    if (lessonFiles.has(expectedFile)) {
      assert.equal(entry.status, 'DRAFTED', `${expectedFile}: manifest hides an existing draft`);
      assert.equal(entry.file, expectedFile);
    } else {
      assert.equal(entry.status, 'PENDING', `${expectedFile}: manifest claims unwritten work`);
      assert.equal(entry.file, null);
    }
  }
  assert.equal(manifest.publicationStatus, 'HOLD_PENDING_PROFESSIONAL_AND_USER_REVIEW');
});

test('expansion manifest truthfully accounts for every day from 21 through 100', async () => {
  const [manifest, files] = await Promise.all([
    load(join(lessonsDir, 'expansion-manifest.json')),
    readdir(lessonsDir),
  ]);
  const lessonFiles = new Set(files.filter((file) => /^day-\d{3}\.json$/u.test(file)));
  assert.equal(manifest.days.length, 80);
  assert.deepEqual(manifest.days.map(({ day }) => day), Array.from({ length: 80 }, (_, index) => index + 21));
  for (const entry of manifest.days) {
    const expectedFile = `day-${String(entry.day).padStart(3, '0')}.json`;
    if (lessonFiles.has(expectedFile)) {
      assert.equal(entry.status, 'DRAFTED', `${expectedFile}: expansion manifest hides an existing draft`);
      assert.equal(entry.file, expectedFile);
    } else {
      assert.equal(entry.status, 'PENDING', `${expectedFile}: expansion manifest claims unwritten work`);
      assert.equal(entry.file, null);
    }
  }
  assert.match(manifest.publicationStatus, /^HOLD_/u);
});
