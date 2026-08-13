import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const sourcesPath = join(
  toolsDir,
  '..',
  '..',
  'docs',
  'MOTAZEN_HANDOFF',
  '06_SOURCE_LIBRARY',
  'sources.json',
);
const claimsPath = join(
  toolsDir,
  '..',
  '..',
  'docs',
  'MOTAZEN_HANDOFF',
  '07_CLAIM_LIBRARY',
  'claims.json',
);

test('source registry has unique IDs and complete appraisal fields', async () => {
  const registry = JSON.parse(await readFile(sourcesPath, 'utf8'));
  const ids = registry.sources.map(({ id }) => id);
  const required = [
    'id', 'title', 'organization', 'authors', 'year', 'type', 'url', 'population',
    'country', 'method', 'topic', 'finding', 'limitations', 'evidence_level',
    'tracks_used', 'days_used', 'last_checked', 'verification_status',
  ];

  assert.equal(new Set(ids).size, ids.length);
  for (const source of registry.sources) {
    for (const field of required) {
      assert.ok(source[field] !== undefined && source[field] !== '', `${source.id}: missing ${field}`);
    }
    assert.match(source.url, /^https:\/\//u);
    assert.match(source.last_checked, /^\d{4}-\d{2}-\d{2}$/u);
    assert.notEqual(source.verification_status, 'PROFESSIONALLY_REVIEWED');
  }
});

test('claim registry links every calibrated claim to registered evidence and keeps review pending', async () => {
  const sourceRegistry = JSON.parse(await readFile(sourcesPath, 'utf8'));
  const claimRegistry = JSON.parse(await readFile(claimsPath, 'utf8'));
  const sourceIds = new Set(sourceRegistry.sources.map(({ id }) => id));
  const claimIds = claimRegistry.claims.map(({ id }) => id);
  const required = [
    'id', 'claim', 'domain', 'role', 'candidate_modules', 'sources', 'evidence_type',
    'population', 'cultural_context', 'date_range', 'strength', 'limitations',
    'counterevidence', 'egyptian_applicability', 'professional_review',
    'user_facing_wording_ar', 'status',
  ];

  assert.equal(new Set(claimIds).size, claimIds.length);
  for (const claim of claimRegistry.claims) {
    for (const field of required) {
      assert.ok(claim[field] !== undefined && claim[field] !== '', `${claim.id}: missing ${field}`);
    }
    assert.ok(claim.sources.length > 0, `${claim.id}: no sources`);
    assert.ok(claim.sources.every((sourceId) => sourceIds.has(sourceId)), `${claim.id}: unknown source`);
    assert.equal(claim.professional_review, 'PENDING');
    assert.equal(claim.status, 'DRAFT_RESEARCHED_NOT_APPROVED');
    assert.doesNotMatch(claim.user_facing_wording_ar, /العلم يثبت|ثبت علميًا/u);
  }
});
