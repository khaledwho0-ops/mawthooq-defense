import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '06_SOURCE_LIBRARY');

const dayDiff = (later, earlier) => Math.floor((Date.parse(later) - Date.parse(earlier)) / 86_400_000);

function classify(type, classes) {
  for (const rule of classes) {
    if (rule.match.exactTypes?.includes(type)) return rule;
    if (rule.match.typeContainsAny?.some((token) => type.includes(token))) return rule;
  }
  return classes.find(({ match }) => match.fallback);
}

test('every source has a deterministic freshness class and the checked-in audit is reproducible', async () => {
  const sources = JSON.parse(await readFile(join(sourceDir, 'sources.json'), 'utf8')).sources;
  const policy = JSON.parse(await readFile(join(sourceDir, 'freshness-policy.json'), 'utf8'));
  const counts = Object.fromEntries(policy.classes.map(({ id }) => [id, 0]));
  let overdue = 0;

  for (const source of sources) {
    const rule = classify(source.type, policy.classes);
    assert.ok(rule, `${source.id}: no freshness rule for ${source.type}`);
    assert.ok(rule.maxDaysSinceCheck > 0, `${rule.id}: invalid review interval`);
    assert.ok(Date.parse(source.last_checked) <= Date.parse(policy.asOf), `${source.id}: checked after audit date`);
    counts[rule.id] += 1;
    if (dayDiff(policy.asOf, source.last_checked) > rule.maxDaysSinceCheck) overdue += 1;
  }

  assert.equal(policy.auditSnapshot.registeredSources, sources.length);
  assert.deepEqual(policy.auditSnapshot.classCounts, counts);
  assert.equal(policy.auditSnapshot.overdueByCheckDate, overdue);
  assert.equal(policy.auditSnapshot.productionEligibleHelpResources, 0);
  assert.ok(policy.classes.find(({ id }) => id === 'CURRENT_RESOURCE').maxDaysSinceCheck <= 30);
});
