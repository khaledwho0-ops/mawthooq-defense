import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { parseCsv, validateRequirementRows } from './validate-requirements.mjs';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(toolsDir, '..', '..');

function validRows() {
  return Array.from({ length: 150 }, (_, index) => ({
    id: `MOT-${String(index + 1).padStart(4, '0')}`,
    priority: 'MUST',
    source_section: String(index + 1),
    requirement: `Requirement for section ${index + 1}`,
    verification: `Verify section ${index + 1}`,
    artifact: 'docs/MOTAZEN_HANDOFF',
    status: 'PLANNED',
  }));
}

test('CSV parser preserves quoted commas and escaped quotes', () => {
  const rows = parseCsv('id,requirement\r\nMOT-0001,"Keep sources, claims, and limits"\r\nMOT-0002,"Say ""unknown"""\r\n');
  assert.deepEqual(rows, [
    { id: 'MOT-0001', requirement: 'Keep sources, claims, and limits' },
    { id: 'MOT-0002', requirement: 'Say "unknown"' },
  ]);
});

test('validator accepts complete atomic section coverage', () => {
  const report = validateRequirementRows(validRows());
  assert.equal(report.valid, true);
  assert.equal(report.coveredSections.length, 150);
  assert.deepEqual(report.errors, []);
});

test('validator rejects duplicate IDs and missing sections', () => {
  const rows = validRows().slice(0, 149);
  rows[1].id = rows[0].id;
  const report = validateRequirementRows(rows);

  assert.equal(report.valid, false);
  assert.match(report.errors.join('\n'), /duplicate id MOT-0001/u);
  assert.match(report.errors.join('\n'), /missing source section 150/u);
});

test('validator rejects empty verification and unknown controlled values', () => {
  const rows = validRows();
  rows[0].verification = '';
  rows[1].priority = 'URGENT';
  rows[2].status = 'DONE-ISH';
  const report = validateRequirementRows(rows);

  assert.equal(report.valid, false);
  assert.match(report.errors.join('\n'), /row 2: verification is required/u);
  assert.match(report.errors.join('\n'), /row 3: invalid priority URGENT/u);
  assert.match(report.errors.join('\n'), /row 4: invalid status DONE-ISH/u);
});

test('checked-in ledger passes validation and covers all 150 sections', async () => {
  const ledgerPath = join(
    repoRoot,
    'docs',
    'MOTAZEN_HANDOFF',
    '03_REQUIREMENTS',
    'atomic-requirements.csv',
  );
  const rows = parseCsv(await readFile(ledgerPath, 'utf8'));
  const report = validateRequirementRows(rows);

  assert.equal(report.valid, true, report.errors.join('\n'));
  assert.deepEqual(report.coveredSections, Array.from({ length: 150 }, (_, index) => index + 1));
});
