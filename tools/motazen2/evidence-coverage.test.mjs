import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const readJson = (relativePath) => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));

test('capability evidence ledger covers all 44 capabilities and references registered claims', () => {
  const ontology = readJson('docs/MOTAZEN_HANDOFF/08_CONCEPT_ONTOLOGY/human-capabilities.json');
  const ledger = readJson('docs/MOTAZEN_HANDOFF/09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-capability-coverage.json');
  const claims = readJson('docs/MOTAZEN_HANDOFF/07_CLAIM_LIBRARY/claims.json').claims;
  const capabilityIds = ontology.capabilities.map((item) => item.id);
  const ledgerIds = ledger.coverage.map((item) => item.capabilityId);
  const claimIds = new Set(claims.map((item) => item.id));

  assert.equal(ledger.trackId, 'TRACK-HUMAN-001');
  assert.equal(ledger.status, 'RESEARCH_GATE_FAIL');
  assert.equal(ledger.coverage.length, 44);
  assert.equal(new Set(ledgerIds).size, 44);
  assert.deepEqual([...ledgerIds].sort(), [...capabilityIds].sort());

  for (const entry of ledger.coverage) {
    assert.match(entry.status, /^(RESEARCHED_INITIAL|PARTIAL|WEAK_GAP)$/);
    assert.ok(entry.claimIds.length > 0, `${entry.capabilityId} must show its current evidence basis`);
    assert.ok(entry.gap.trim().length > 0, `${entry.capabilityId} must preserve its unresolved gap`);
    for (const claimId of entry.claimIds) {
      assert.ok(claimIds.has(claimId), `${entry.capabilityId} references unknown claim ${claimId}`);
    }
  }
});

test('no capability is mislabeled as approved or research-complete', () => {
  const ledger = readJson('docs/MOTAZEN_HANDOFF/09_EVIDENCE_COVERAGE/TRACK-HUMAN-001-capability-coverage.json');
  assert.ok(ledger.coverage.every((item) => !/APPROVED|COMPLETE/.test(item.status)));
});
