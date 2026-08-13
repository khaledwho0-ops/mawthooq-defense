import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const path = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '19_ARABIC', 'terminology-registry.json');
const arabic = /[\u0600-\u06FF]/u;

test('Arabic terminology registry has substantive MSA and Egyptian explanations with safety boundaries', async () => {
  const registry = JSON.parse(await readFile(path, 'utf8'));
  assert.ok(registry.terms.length >= 20);
  assert.equal(new Set(registry.terms.map(({ id }) => id)).size, registry.terms.length);
  for (const term of registry.terms) {
    assert.match(term.msa, arabic);
    assert.match(term.egyptianExplanation, arabic);
    assert.ok(term.egyptianExplanation.length >= 30);
    assert.ok(term.definition.length >= 30);
    assert.ok(term.notSameAs.length >= 2);
    assert.ok(term.avoid.length >= 2);
    assert.equal(term.professionalReview, 'PENDING');
    assert.equal(term.userTesting, 'PENDING');
  }
  assert.ok(registry.terms.some(({ id }) => id === 'TERM-DIAGNOSIS'));
  assert.ok(registry.terms.some(({ id }) => id === 'TERM-IMMEDIATE-DANGER'));
  assert.ok(registry.terms.some(({ id }) => id === 'TERM-PRIVACY'));
});
