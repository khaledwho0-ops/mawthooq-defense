import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const requirementsDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '03_REQUIREMENTS');

test('both fully-read specification attachments are byte-identical to pinned provenance', async () => {
  const provenance = JSON.parse(await readFile(join(requirementsDir, 'spec-provenance.json'), 'utf8'));
  assert.equal(provenance.attachments.length, 2);

  for (const attachment of provenance.attachments) {
    const bytes = await readFile(attachment);
    const file = await stat(attachment);
    const lines = bytes.toString('utf8').split(/\r?\n/u).length - 1;
    assert.equal(file.size, provenance.byteCount, `${attachment}: byte count changed`);
    assert.equal(lines, provenance.lineCount, `${attachment}: line count changed`);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), provenance.sha256, `${attachment}: hash changed`);
  }
});

test('completion audit names all 100 final deliverables without unsupported completion', async () => {
  const audit = JSON.parse(await readFile(join(requirementsDir, 'completion-audit.json'), 'utf8'));
  const ids = audit.deliverables.map(({ id }) => id);
  assert.equal(audit.deliverables.length, 100);
  assert.equal(new Set(ids).size, 100);
  assert.deepEqual(ids, Array.from({ length: 100 }, (_, index) => `DEL-${String(index + 1).padStart(3, '0')}`));
  for (const deliverable of audit.deliverables) {
    assert.ok(audit.allowedStatuses.includes(deliverable.status), `${deliverable.id}: invalid status`);
    assert.ok(deliverable.name && deliverable.gap, `${deliverable.id}: missing name or gap`);
    if (deliverable.status === 'VERIFIED') {
      assert.ok(deliverable.evidence.length > 0, `${deliverable.id}: verified without evidence`);
    }
  }
  assert.equal(audit.status, 'IN_PROGRESS_NOT_COMPLETE');
});
