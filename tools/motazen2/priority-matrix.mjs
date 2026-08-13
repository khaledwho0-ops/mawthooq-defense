import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const CATEGORY_PROFILES = {
  'core-human': [5, 5, 5, 5, 3, 5, 4, 5, 4, 4],
  'master-student': [5, 5, 4, 5, 3, 4, 4, 5, 4, 4],
  'adult-identity': [5, 4, 4, 4, 3, 4, 3, 5, 4, 4],
  parent: [5, 5, 4, 5, 4, 4, 5, 5, 5, 5],
  sibling: [4, 4, 3, 4, 3, 3, 4, 5, 4, 4],
  'master-educator': [4, 5, 4, 5, 4, 4, 5, 5, 5, 5],
  'life-stage': [4, 5, 3, 5, 4, 3, 5, 5, 5, 5],
  family: [4, 5, 3, 5, 4, 3, 5, 5, 5, 5],
  education: [4, 5, 4, 5, 4, 4, 5, 5, 5, 5],
  work: [4, 4, 4, 4, 3, 4, 5, 5, 4, 4],
  community: [4, 4, 3, 4, 3, 3, 5, 5, 4, 4],
  'life-transition': [3, 5, 3, 5, 4, 3, 5, 5, 5, 5],
};

const RECOMMENDED_FIRST_TRACKS = [
  'TRACK-HUMAN-001',
  'TRACK-STUDENT-001',
  'TRACK-STUDENT-002',
  'TRACK-PARENT-001',
  'TRACK-PARENT-002',
  'TRACK-EDUCATOR-001',
  'TRACK-EDUCATOR-002',
  'TRACK-ADULT-001',
  'TRACK-ADULT-002',
  'TRACK-SIBLING-001',
  'TRACK-SIBLING-002',
];

const CRITERIA = [
  'population_size',
  'need',
  'evidence_availability',
  'potential_benefit',
  'risk',
  'content_overlap',
  'distinctiveness',
  'egyptian_relevance',
  'professional_review_requirement',
  'implementation_cost',
];

function profileTrack(track) {
  const profile = CATEGORY_PROFILES[track.category];
  if (!profile) {
    throw new Error(`Missing priority profile for category ${track.category}`);
  }

  const scores = Object.fromEntries(CRITERIA.map((criterion, index) => [criterion, profile[index]]));

  if (track.id === 'TRACK-TRANSITION-011') {
    scores.risk = 5;
    scores.professional_review_requirement = 5;
    scores.implementation_cost = 5;
  }
  if (track.id === 'TRACK-LIFE-001' || track.id === 'TRACK-LIFE-002') {
    scores.risk = 5;
    scores.professional_review_requirement = 5;
  }
  if (track.id === 'TRACK-LIFE-009' || track.id === 'TRACK-LIFE-010') {
    scores.risk = 5;
    scores.professional_review_requirement = 5;
  }

  const composite_score = (
    scores.population_size
    + (2 * scores.need)
    + scores.evidence_availability
    + scores.potential_benefit
    + scores.distinctiveness
    + scores.egyptian_relevance
    - scores.risk
    - scores.content_overlap
    - scores.professional_review_requirement
    - scores.implementation_cost
  );

  return {
    track_id: track.id,
    name_ar: track.name_ar,
    category: track.category,
    ...scores,
    composite_score,
    scoring_status: 'PROVISIONAL_DESK_SCORING',
    rationale: 'Scores are transparent planning judgments from the supplied specification and require research and stakeholder validation before publication scheduling.',
  };
}

export function buildPriorityRows(tracks) {
  const profiledTracks = tracks.map(profileTrack);
  const byId = new Map(profiledTracks.map((row) => [row.track_id, row]));
  const recommendedRows = RECOMMENDED_FIRST_TRACKS.map((trackId) => {
    const row = byId.get(trackId);
    if (!row) {
      throw new Error(`Recommended track is absent: ${trackId}`);
    }
    byId.delete(trackId);
    return row;
  });
  const remainingRows = [...byId.values()].sort((left, right) => (
    right.composite_score - left.composite_score
    || left.track_id.localeCompare(right.track_id, 'en')
  ));

  return [...recommendedRows, ...remainingRows].map((row, index) => ({
    priority_rank: index + 1,
    ...row,
  }));
}

function csvField(value) {
  const text = String(value);
  return /[",\r\n]/u.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function serializePriorityRows(rows) {
  const headers = [
    'priority_rank', 'track_id', 'name_ar', 'category', ...CRITERIA,
    'composite_score', 'scoring_status', 'rationale',
  ];
  const lines = [headers.join(',')];
  for (const row of rows) {
    lines.push(headers.map((header) => csvField(row[header])).join(','));
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  const toolsDir = dirname(fileURLToPath(import.meta.url));
  const repoRoot = join(toolsDir, '..', '..');
  const tracksPath = join(repoRoot, 'docs', 'MOTAZEN_HANDOFF', '04_TRACK_UNIVERSE', 'tracks.json');
  const matrixPath = join(repoRoot, 'docs', 'MOTAZEN_HANDOFF', '04_TRACK_UNIVERSE', 'priority-matrix.csv');
  const trackRegistry = JSON.parse(await readFile(tracksPath, 'utf8'));
  await writeFile(matrixPath, serializePriorityRows(buildPriorityRows(trackRegistry.tracks)), 'utf8');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
