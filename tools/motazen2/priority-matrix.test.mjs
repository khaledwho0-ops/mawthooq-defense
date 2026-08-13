import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { buildPriorityRows, serializePriorityRows } from './priority-matrix.mjs';
import { parseCsv } from './validate-requirements.mjs';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(toolsDir, '..', '..');
const tracksPath = join(repoRoot, 'docs', 'MOTAZEN_HANDOFF', '04_TRACK_UNIVERSE', 'tracks.json');
const matrixPath = join(repoRoot, 'docs', 'MOTAZEN_HANDOFF', '04_TRACK_UNIVERSE', 'priority-matrix.csv');

test('priority matrix scores and ranks every planned track exactly once', async () => {
  const trackRegistry = JSON.parse(await readFile(tracksPath, 'utf8'));
  const rows = buildPriorityRows(trackRegistry.tracks);
  const ids = rows.map(({ track_id }) => track_id);
  const ranks = rows.map(({ priority_rank }) => priority_rank);
  const criteria = [
    'population_size', 'need', 'evidence_availability', 'potential_benefit', 'risk',
    'content_overlap', 'distinctiveness', 'egyptian_relevance',
    'professional_review_requirement', 'implementation_cost',
  ];

  assert.equal(rows.length, trackRegistry.trackCount);
  assert.equal(new Set(ids).size, rows.length);
  assert.deepEqual(ranks, Array.from({ length: rows.length }, (_, index) => index + 1));
  assert.equal(rows[0].track_id, 'TRACK-HUMAN-001');
  assert.ok(rows.every((row) => criteria.every((criterion) => Number.isInteger(row[criterion]) && row[criterion] >= 1 && row[criterion] <= 5)));
  assert.ok(rows.every(({ scoring_status }) => scoring_status === 'PROVISIONAL_DESK_SCORING'));
});

test('checked-in matrix is generated from the current track universe', async () => {
  const trackRegistry = JSON.parse(await readFile(tracksPath, 'utf8'));
  const expectedCsv = serializePriorityRows(buildPriorityRows(trackRegistry.tracks));
  const actualCsv = await readFile(matrixPath, 'utf8');

  assert.equal(actualCsv, expectedCsv);
  assert.equal(parseCsv(actualCsv).length, trackRegistry.trackCount);
});
