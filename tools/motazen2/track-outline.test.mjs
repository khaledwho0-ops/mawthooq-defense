import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const outlinePath = join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'outline.json');

const load = async (path) => JSON.parse(await readFile(path, 'utf8'));

test('إنسان متزن outline has exactly 100 substantive distinct ordered days', async () => {
  const outline = await load(outlinePath);
  const expectedDays = Array.from({ length: 100 }, (_, index) => index + 1);
  assert.equal(outline.trackId, 'TRACK-HUMAN-001');
  assert.equal(outline.dayCountRequired, 100);
  assert.equal(outline.days.length, 100);
  assert.deepEqual(outline.days.map(({ day }) => day), expectedDays);
  assert.equal(new Set(outline.days.map(({ titleAr }) => titleAr)).size, 100);
  assert.equal(outline.phases.length, 10);

  for (const day of outline.days) {
    for (const field of ['titleAr', 'objectiveAr', 'domain', 'whyHereAr', 'reviewType', 'safetySensitivity']) {
      assert.ok(day[field]?.length >= 3, `day ${day.day}: missing ${field}`);
    }
    assert.ok(day.titleAr.length >= 15, `day ${day.day}: title too shallow`);
    assert.ok(day.objectiveAr.length >= 55, `day ${day.day}: objective too shallow`);
    assert.ok(day.whyHereAr.length >= 45, `day ${day.day}: placement rationale too shallow`);
    assert.ok(day.capabilityIds.length >= 1, `day ${day.day}: no capability`);
    assert.ok(day.claimIds.length >= 1, `day ${day.day}: no evidence claim`);
    assert.ok(day.patternIds.length >= 1, `day ${day.day}: no pattern`);
    assert.ok(day.practiceFamilyIds.length >= 1, `day ${day.day}: no safe practice family`);
    assert.equal(day.phase, Math.ceil(day.day / 10), `day ${day.day}: wrong phase`);
    assert.ok(day.prerequisites.every((prerequisite) => prerequisite < day.day), `day ${day.day}: invalid/cyclic prerequisite`);
  }
});

test('outline references only registered capabilities, claims, patterns, and practice families', async () => {
  const [outline, capabilityRegistry, claimRegistry, patternRegistry, practiceRegistry] = await Promise.all([
    load(outlinePath),
    load(join(handoffDir, '08_CONCEPT_ONTOLOGY', 'human-capabilities.json')),
    load(join(handoffDir, '07_CLAIM_LIBRARY', 'claims.json')),
    load(join(handoffDir, '10_PATTERN_ONTOLOGY', 'patterns.json')),
    load(join(handoffDir, '22_SAFETY', 'practice-dose-stop-rules.json')),
  ]);
  const registries = {
    capabilityIds: new Set(capabilityRegistry.capabilities.map(({ id }) => id)),
    claimIds: new Set(claimRegistry.claims.map(({ id }) => id)),
    patternIds: new Set(patternRegistry.patterns.map(({ id }) => id)),
    practiceFamilyIds: new Set(practiceRegistry.practiceFamilies.map(({ id }) => id)),
  };

  for (const day of outline.days) {
    for (const [field, ids] of Object.entries(registries)) {
      assert.ok(day[field].every((id) => ids.has(id)), `day ${day.day}: unknown ${field}`);
    }
  }
});

test('all 44 core capabilities appear and review days are spaced across the curriculum', async () => {
  const outline = await load(outlinePath);
  const usedCapabilities = new Set(outline.days.flatMap(({ capabilityIds }) => capabilityIds));
  assert.equal(usedCapabilities.size, 44);
  assert.deepEqual([...usedCapabilities].sort(), Array.from({ length: 44 }, (_, index) => `CAP-${String(index + 1).padStart(3, '0')}`));

  const retrievalDays = outline.days.filter(({ reviewType }) => /RETRIEVAL|EVALUATION/u.test(reviewType)).map(({ day }) => day);
  for (const expected of [10, 20, 30, 40, 50, 60, 70, 80, 90, 91, 100]) {
    assert.ok(retrievalDays.includes(expected), `missing retrieval/evaluation at day ${expected}`);
  }
});

test('high-risk domains are visibly safety-sensitive rather than normalized as ordinary optimization', async () => {
  const outline = await load(outlinePath);
  for (const dayNumber of [62, 70, 79, 81, 86, 87, 88, 90, 95, 97, 98]) {
    const day = outline.days[dayNumber - 1];
    assert.ok(['HIGH', 'CRITICAL'].includes(day.safetySensitivity), `day ${dayNumber}: insufficient safety sensitivity`);
  }
  assert.equal(outline.status, 'DRAFT_RESEARCHED_NOT_PROFESSIONALLY_REVIEWED');
});

test('Part O generated audit proves full capability and pattern coverage without claiming publication readiness', async () => {
  const [audit, dependencyGraph, spacedPlan] = await Promise.all([
    load(join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'audit-findings.json')),
    load(join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'dependency-graph.json')),
    load(join(handoffDir, '13_TRACK_100_DAY_PLANS', 'TRACK-HUMAN-001', 'spaced-review-plan.json')),
  ]);
  assert.equal(audit.quantitative.totalDays, 100);
  assert.equal(audit.quantitative.capabilitiesCovered, 44);
  assert.equal(audit.quantitative.patternsCovered, 61);
  assert.deepEqual(audit.missing, { capabilityIds: [], patternIds: [] });
  assert.equal(dependencyGraph.nodes.length, 100);
  assert.ok(dependencyGraph.edges.length >= 100);
  assert.ok(spacedPlan.reviews.length >= 10);
  assert.match(audit.status, /EXTERNAL_REVIEW_PENDING/u);
  assert.ok(audit.dispositions.some(({ disposition }) => disposition === 'OPEN_EXTERNAL'));
});
