import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const reportsDir = join(toolsDir, '..', '..', 'docs', 'MOTAZEN_HANDOFF', '25_RED_TEAM', 'TRACK-HUMAN-001');
const reportFiles = [
  'expert-1-clinical-public-health.md',
  'expert-2-behavioral-curriculum.md',
  'expert-3-egyptian-society.md',
  'expert-4-product-accessibility.md',
];
const expectedSections = new Map([
  ['## Top 20 recommendations', 20],
  ['## Top 10 safety risks', 10],
  ['## Top 10 overpathologizing risks', 10],
  ['## Top 10 under-escalation risks', 10],
  ['## Top 10 research gaps', 10],
  ['## Top 10 curriculum omissions', 10],
  ['## Top 5 vetoes', 5],
]);

function numberedItemsInSection(markdown, heading) {
  const start = markdown.indexOf(heading);
  assert.notEqual(start, -1, `missing heading ${heading}`);
  const sectionBody = markdown.slice(start + heading.length).split('\n## ')[0];
  return sectionBody.split(/\r?\n/u).filter((line) => /^\d+\. /u.test(line));
}

for (const reportFile of reportFiles) {
  test(`${reportFile} has the full independent review depth without false sign-off`, async () => {
    const markdown = await readFile(join(reportsDir, reportFile), 'utf8');
    assert.match(markdown, /ليست مراجعة مهنية/u);
    assert.match(markdown, /Professional review: PENDING/u);
    assert.match(markdown, /## Professional review requirements/u);
    assert.match(markdown, /## Definition of done/u);

    for (const [heading, expectedCount] of expectedSections) {
      assert.equal(numberedItemsInSection(markdown, heading).length, expectedCount, `${heading} count`);
    }
  });
}
