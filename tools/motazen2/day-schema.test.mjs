import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const handoffDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');

test('day schema has exactly the 44 required content fields with no silent extras', async () => {
  const schema = JSON.parse(await readFile(join(handoffDir, '15_DATA_MODEL', 'day-schema.json'), 'utf8'));
  const atomized = JSON.parse(await readFile(join(handoffDir, '03_REQUIREMENTS', 'atomic-subrequirements.json'), 'utf8'));
  const fields = schema.properties.content.required;
  assert.equal(fields.length, 44);
  assert.equal(new Set(fields).size, 44);
  assert.deepEqual(new Set(fields), new Set(Object.keys(schema.properties.content.properties)));
  assert.equal(atomized.groups.dailyFields.items.length, 44);
  assert.equal(schema.properties.professionalReview.const, 'PENDING');
  assert.equal(schema.properties.content.properties.selfCheckQuestionsAr.minItems, 3);
  assert.equal(schema.properties.content.properties.selfCheckQuestionsAr.maxItems, 8);
  assert.deepEqual(schema.properties.content.properties.evidenceStrength.properties.rating.enum, ['STRONG', 'MODERATE', 'LIMITED', 'MIXED']);
});

test('day schema keeps safety, help, relationship, and deep-dive fields explicit even when not applicable', async () => {
  const schema = JSON.parse(await readFile(join(handoffDir, '15_DATA_MODEL', 'day-schema.json'), 'utf8'));
  for (const field of ['relationshipPracticeAr', 'safetyNoteAr', 'professionalHelpThresholdAr', 'optionalDeepDiveAr']) {
    assert.equal(schema.properties.content.properties[field].$ref, '#/$defs/applicableText');
  }
  assert.equal(schema.$defs.applicableText.required.length, 2);
});
