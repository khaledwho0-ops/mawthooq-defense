import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(toolsDir, '..', '..');
const handoffDir = join(repoRoot, 'docs', 'MOTAZEN_HANDOFF');

async function readJson(relativePath) {
  return JSON.parse(await readFile(join(handoffDir, relativePath), 'utf8'));
}

test('track universe uses unique stable IDs and 100 required days for every final track', async () => {
  const registry = await readJson('04_TRACK_UNIVERSE/tracks.json');
  const ids = registry.tracks.map(({ id }) => id);

  assert.ok(registry.tracks.length >= 60);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(registry.tracks.every(({ name_ar }) => /[\u0600-\u06ff]/u.test(name_ar)));
  assert.ok(registry.tracks.every(({ required_days }) => required_days === 100));
  assert.ok(registry.tracks.every(({ status }) => status === 'PLANNED' || status === 'IN_PROGRESS'));
});

test('إنسان متزن is the first priority and remains unpublished', async () => {
  const registry = await readJson('04_TRACK_UNIVERSE/tracks.json');
  const human = registry.tracks.find(({ id }) => id === 'TRACK-HUMAN-001');

  assert.equal(human.name_ar, 'إنسان متزن');
  assert.equal(human.priority, 1);
  assert.equal(human.status, 'IN_PROGRESS');
  assert.equal(human.professional_review, 'PENDING');
  assert.equal(human.published, false);
});

test('constitution preserves the existing product and states the non-clinical boundaries', async () => {
  const constitution = await readFile(join(handoffDir, '01_PRODUCT_CONSTITUTION', 'constitution.md'), 'utf8');

  assert.match(constitution, /لا تشخيص/u);
  assert.match(constitution, /لا علاج/u);
  assert.match(constitution, /100 يوم/u);
  assert.match(constitution, /لا يحذف/u);
  assert.match(constitution, /المراجعة المهنية/u);
});

test('core capability ontology covers the complete specified domain baseline', async () => {
  const registry = await readJson('08_CONCEPT_ONTOLOGY/human-capabilities.json');
  const ids = registry.capabilities.map(({ id }) => id);

  assert.equal(registry.capabilities.length, 44);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(registry.capabilities.every(({ name_ar }) => /[\u0600-\u06ff]/u.test(name_ar)));
  assert.ok(registry.capabilities.every(({ research_status }) => research_status === 'RESEARCH_REQUIRED'));
});

test('bad-pattern ontology preserves all 61 non-diagnostic research targets and the full schema', async () => {
  const registry = await readJson('10_PATTERN_ONTOLOGY/patterns.json');
  const ids = registry.patterns.map(({ id }) => id);

  assert.equal(registry.patterns.length, 61);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(registry.required_content_fields.length, 22);
  assert.ok(registry.patterns.every(({ research_status }) => research_status === 'RESEARCH_REQUIRED'));
  assert.ok(registry.patterns.every(({ diagnostic_label }) => diagnostic_label === false));
});
