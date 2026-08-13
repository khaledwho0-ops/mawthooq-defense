import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const root = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF');
const load = async (...parts) => JSON.parse(await readFile(join(root, ...parts), 'utf8'));

test('final completeness report reconciles all deliverables without claiming publication readiness', async () => {
  const [audit, report] = await Promise.all([
    load('03_REQUIREMENTS', 'completion-audit.json'), load('28_FINAL_AUDIT', 'final-completeness-report.json'),
  ]);
  assert.equal(audit.deliverables.length, 100);
  assert.equal(Object.values(report.counts).reduce((sum, count) => sum + count, 0), 100);
  assert.equal(report.status, 'NOT_PUBLICATION_READY');
  assert.match(report.publicationDecision, /^HOLD_/u);
  assert.ok(report.externalBlocks.length >= 5);
  assert.ok(Array.isArray(report.missingDeliverables));
  assert.match(report.truthStatement, /first-priority/u);
  assert.match(report.truthStatement, /not complete/u);
});

test('current audit no longer claims canonical days 34 through 100 are missing', async () => {
  const audit = await load('03_REQUIREMENTS', 'completion-audit.json');
  for (const id of ['DEL-004','DEL-030','DEL-031','DEL-046','DEL-064','DEL-065']) {
    const item = audit.deliverables.find((deliverable) => deliverable.id === id);
    assert.ok(item);
    assert.doesNotMatch(item.gap, /Days 34.?100|remaining 70 days|daily-content.*incomplete/iu);
  }
});
