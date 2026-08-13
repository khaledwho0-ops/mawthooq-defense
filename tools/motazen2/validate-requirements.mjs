import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const PRIORITIES = new Set(['MUST', 'SHOULD', 'COULD', 'MUST NOT']);
const STATUSES = new Set(['PLANNED', 'IN_PROGRESS', 'BLOCKED', 'VERIFIED', 'NOT_APPLICABLE']);
const REQUIRED_FIELDS = [
  'id',
  'priority',
  'source_section',
  'requirement',
  'verification',
  'artifact',
  'status',
];

function parseRecords(csvText) {
  const records = [];
  let record = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];

    if (quoted) {
      if (character === '"' && csvText[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      quoted = true;
    } else if (character === ',') {
      record.push(field);
      field = '';
    } else if (character === '\n') {
      record.push(field.replace(/\r$/u, ''));
      records.push(record);
      record = [];
      field = '';
    } else {
      field += character;
    }
  }

  if (quoted) {
    throw new Error('Unclosed quoted CSV field');
  }

  if (field.length > 0 || record.length > 0) {
    record.push(field.replace(/\r$/u, ''));
    records.push(record);
  }

  return records.filter((fields) => fields.some((value) => value.length > 0));
}

export function parseCsv(csvText) {
  const records = parseRecords(csvText.replace(/^\uFEFF/u, ''));
  if (records.length === 0) {
    return [];
  }

  const headers = records[0];
  return records.slice(1).map((fields, rowIndex) => {
    if (fields.length !== headers.length) {
      throw new Error(`CSV row ${rowIndex + 2} has ${fields.length} fields; expected ${headers.length}`);
    }
    return Object.fromEntries(headers.map((header, index) => [header, fields[index]]));
  });
}

export function validateRequirementRows(rows) {
  const errors = [];
  const ids = new Set();
  const coveredSections = new Set();

  for (const [index, row] of rows.entries()) {
    const rowNumber = index + 2;

    for (const field of REQUIRED_FIELDS) {
      if (!row[field]?.trim()) {
        errors.push(`row ${rowNumber}: ${field} is required`);
      }
    }

    if (row.id && !/^MOT-\d{4}$/u.test(row.id)) {
      errors.push(`row ${rowNumber}: invalid id ${row.id}`);
    }
    if (ids.has(row.id)) {
      errors.push(`row ${rowNumber}: duplicate id ${row.id}`);
    }
    ids.add(row.id);

    if (row.priority && !PRIORITIES.has(row.priority)) {
      errors.push(`row ${rowNumber}: invalid priority ${row.priority}`);
    }
    if (row.status && !STATUSES.has(row.status)) {
      errors.push(`row ${rowNumber}: invalid status ${row.status}`);
    }

    const sourceSection = Number(row.source_section);
    if (!Number.isInteger(sourceSection) || sourceSection < 1 || sourceSection > 150) {
      errors.push(`row ${rowNumber}: invalid source section ${row.source_section}`);
    } else {
      coveredSections.add(sourceSection);
    }
  }

  for (let section = 1; section <= 150; section += 1) {
    if (!coveredSections.has(section)) {
      errors.push(`missing source section ${section}`);
    }
  }

  return {
    valid: errors.length === 0,
    rowCount: rows.length,
    coveredSections: [...coveredSections].sort((left, right) => left - right),
    errors,
  };
}

async function main() {
  const ledgerPath = process.argv[2];
  if (!ledgerPath) {
    throw new Error('Usage: node validate-requirements.mjs <atomic-requirements.csv>');
  }

  const rows = parseCsv(await readFile(ledgerPath, 'utf8'));
  const report = validateRequirementRows(rows);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (!report.valid) {
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
