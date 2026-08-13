import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));

test('role and life-stage ontologies are plural, optional, and privacy preserving', async () => {
  const [roles, stages] = await Promise.all([
    load('04_TRACK_UNIVERSE', 'role-ontology.json'),
    load('04_TRACK_UNIVERSE', 'life-stage-ontology.json'),
  ]);
  assert.ok(roles.roles.length >= 10);
  assert.equal(roles.selection.multiSelect, true);
  assert.equal(roles.selection.noneAllowed, true);
  assert.equal(roles.selection.storageDefault, 'NO_STORAGE');
  assert.ok(stages.stages.length >= 10);
  assert.equal(stages.selection.optional, true);
  assert.equal(stages.selection.neverUsedForDiagnosisOrPricing, true);
});

test('domain ontologies cover every required missing ontology with safety boundaries', async () => {
  const ontology = await load('09_SKILL_ONTOLOGY', 'domain-ontologies.json');
  const groups = ['skills', 'emotionalLiteracy', 'communication', 'relationships', 'family', 'parenting', 'education', 'workplace'];
  for (const group of groups) {
    assert.ok(ontology[group].length >= 3, `${group}: insufficient foundation`);
    assert.ok(ontology[group].every(({ id, nameAr, definitionAr, notThisAr, safetyBoundaryAr }) => id && nameAr && definitionAr && notThisAr && safetyBoundaryAr));
  }
});

test('search and unknown mode never diagnose and route danger before content', async () => {
  const system = await load('20_SEARCH', 'search-and-routing.json');
  assert.ok(system.search.forbiddenRanking.includes('diagnostic_probability'));
  assert.equal(system.patternSearch.safetyPrecedence, true);
  assert.equal(system.unknownMode.noDiagnosis, true);
  assert.equal(system.unknownMode.noStoredProfile, true);
  assert.equal(system.unknownMode.steps[0].onYes, 'EXIT_TO_HUMAN_HELP');
  assert.equal(system.help.unverifiedResourcesHidden, true);
  assert.equal(system.privacy.queryStorageDefault, 'NO_STORAGE');
});
