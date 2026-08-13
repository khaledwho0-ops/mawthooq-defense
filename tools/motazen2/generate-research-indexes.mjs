import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));
const [sourceRegistry, claimRegistry] = await Promise.all([
  load('06_SOURCE_LIBRARY', 'sources.json'), load('07_CLAIM_LIBRARY', 'claims.json'),
]);
const days = [];
for (let day = 1; day <= 100; day += 1) {
  days.push(await load('14_DAILY_LESSONS', 'TRACK-HUMAN-001', `day-${String(day).padStart(3, '0')}.json`));
}

const sourceDayMap = Object.fromEntries(sourceRegistry.sources.map(({ id }) => [id, []]));
const claimDayMap = Object.fromEntries(claimRegistry.claims.map(({ id }) => [id, []]));
for (const lesson of days) {
  const day = lesson.content.dayNumber;
  for (const id of [...lesson.content.primarySourceIds, ...lesson.content.additionalSourceIds]) sourceDayMap[id].push(day);
  for (const id of lesson.outlineRefs.claimIds) claimDayMap[id].push(day);
}

const indexedSources = sourceRegistry.sources.map((source) => ({ ...source, canonicalDaysUsed: sourceDayMap[source.id] }));
const indexedClaims = claimRegistry.claims.map((claim) => ({ ...claim, canonicalDaysUsed: claimDayMap[claim.id] }));
const guidelinePattern = /GUIDELINE|GUIDANCE|STANDARD|HANDBOOK|CONSENSUS|GOVERNMENT|PUBLIC_HEALTH|RESOURCE_DIRECTORY/u;
const reviewPattern = /SYSTEMATIC|META_ANALYSIS|META_ANALYTIC|UMBRELLA|SCOPING_REVIEW|RAPID_EVIDENCE/u;

const libraries = {
  schemaVersion: '1.0.0', status: 'GENERATED_RESEARCH_INDEX', generatedFrom: ['sources.json','claims.json','day-001.json through day-100.json'],
  scientificEvidence: indexedSources.filter(({ type }) => !guidelinePattern.test(type)),
  professionalGuidelines: indexedSources.filter(({ type }) => guidelinePattern.test(type)),
  systematicReviews: indexedSources.filter(({ type }) => reviewPattern.test(type)),
};

const dayEvidence = days.map((lesson) => {
  const claims = lesson.outlineRefs.claimIds.map((id) => indexedClaims.find((claim) => claim.id === id));
  return {
    day: lesson.content.dayNumber,
    dayId: lesson.dayId,
    claimIds: lesson.outlineRefs.claimIds,
    primarySourceIds: lesson.content.primarySourceIds,
    additionalSourceIds: lesson.content.additionalSourceIds,
    evidenceRating: lesson.content.evidenceStrength.rating,
    calibratedLimitationAr: lesson.content.researchLimitationAr,
    counterevidence: claims.map(({ id, counterevidence, limitations, egyptian_applicability }) => ({ claimId: id, counterevidence, limitations, egyptian_applicability })),
  };
});

await writeFile(join(root, '06_SOURCE_LIBRARY', 'research-libraries-index.json'), `${JSON.stringify(libraries, null, 2)}\n`, 'utf8');
await writeFile(join(root, '07_CLAIM_LIBRARY', 'claim-day-index.json'), `${JSON.stringify({ schemaVersion:'1.0.0', status:'GENERATED', claims:indexedClaims }, null, 2)}\n`, 'utf8');
const evidenceDir = join(root, '09_EVIDENCE_COVERAGE');
await mkdir(evidenceDir, { recursive: true });
await writeFile(join(evidenceDir, 'TRACK-HUMAN-001-day-evidence-and-counterevidence.json'), `${JSON.stringify({ schemaVersion:'1.0.0', trackId:'TRACK-HUMAN-001', status:'GENERATED_REVIEW_PENDING', days:dayEvidence }, null, 2)}\n`, 'utf8');
