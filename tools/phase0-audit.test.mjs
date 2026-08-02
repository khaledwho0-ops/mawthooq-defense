import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import audit from './phase0-audit.mjs';

test('phase 0 audit module exists', () => {
  assert.equal(existsSync(new URL('./phase0-audit.mjs', import.meta.url)), true);
});

test('loads every supported window array in a sandboxed VM', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'phase0-vm-'));
  for (const globalName of ['SCENARIOS', 'CLAIMS', 'CARDS']) {
    const file = path.join(directory, `${globalName}.js`);
    await writeFile(file, `window.${globalName} = [{ id: "one" }]; window.SOURCES = { one: { url: "https://example.test" } };`);
    const loaded = await audit.loadJavaScriptData(file, globalName);
    assert.deepEqual(loaded.records.map((record) => record.id), ['one']);
    assert.equal(loaded.sources.one.url, 'https://example.test');
  }
});

test('rejects malformed data, duplicate IDs, and missing source references', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'phase0-invalid-'));
  const malformed = path.join(directory, 'malformed.js');
  await writeFile(malformed, 'window.CARDS = { nope: true }; window.SOURCES = {};');
  await assert.rejects(() => audit.loadJavaScriptData(malformed, 'CARDS'), /array/);

  const duplicate = path.join(directory, 'duplicate.js');
  await writeFile(duplicate, 'window.CARDS = [{id:"x",sources:[]},{id:"x",sources:[]}]; window.SOURCES = {};');
  await assert.rejects(() => audit.loadJavaScriptData(duplicate, 'CARDS'), /Duplicate ID x/);

  assert.throws(
    () => audit.assertSourceReferences([{ id: 'x', sources: [{ srcId: 'missing' }] }], {}),
    /Missing referenced source missing/,
  );
});

test('detects Western and Arabic-Indic quantities, percentages, ratios, and quantitative number words', () => {
  const samples = [
    'The sample included 240 people.',
    'النسبة ٣٥٪ من المشاركين.',
    'The ratio was 1:4.',
    'three participants improved',
    'ثلاثة من كل عشرة أشخاص',
  ];
  for (const sample of samples) assert.equal(audit.detectStatisticalQuantities(sample).hasStatistic, true, sample);
  assert.equal(audit.detectStatisticalQuantities('قد يساعد بعض الناس أحيانًا.').hasStatistic, false);
});

test('extracts contact numbers recursively with stable field paths', () => {
  const card = {
    id: 'card-z',
    contacts: [{ label: 'الجهة', number: '19588', extra: { backup: '١٢٣' } }],
    do: [{ t: 'اتصل على 122 فورًا.' }],
    note: { ar: 'دستور ٢٠١٤' },
  };
  assert.deepEqual(audit.extractContactNumbers(card), [
    { fieldPath: 'contacts[0].extra.backup', number: '123', rendered: '١٢٣' },
    { fieldPath: 'contacts[0].number', number: '19588', rendered: '19588' },
    { fieldPath: 'do[0].t', number: '122', rendered: '122' },
  ]);
});

test('source provenance rejects a number absent from the issuing-authority source', () => {
  assert.equal(audit.sourceContainsExactNumber('Call us on 19588.', '19588'), true);
  assert.equal(audit.sourceContainsExactNumber('Call another office on 123.', '19588'), false);
});

test('topic cards cannot be classified as scenario cards', () => {
  const topic = { do: [], dont: [], contacts: [], basis: {} };
  assert.equal(audit.isScenarioCard(topic, 'aman'), false);
  assert.equal(audit.isScenarioCard(topic, 'hoqoqi'), false);
  assert.equal(audit.isScenarioCard({
    first_60_seconds: [], the_clock: {}, the_criminal_lens: {}, myths_that_kill: [], 'الدليل': {},
  }, 'aman'), true);
  assert.equal(audit.isScenarioCard({
    my_right: {}, 'الدليل': {}, how_to_recover: { principle: '', procedure: '' }, do: [], dont: [], who_to_call: [],
  }, 'hoqoqi'), true);
});

test('CSV escaping and row sorting are deterministic', () => {
  const rows = [{ id: 'b', title: 'plain' }, { id: 'a', title: 'a, "quote"' }];
  const csv = audit.toCsv(rows, ['id', 'title']);
  assert.equal(csv, 'id,title\r\na,"a, ""quote"""\r\nb,plain\r\n');
});

test('gate is fail-closed for FAIL, BLOCKED, and incomplete records', () => {
  assert.equal(audit.evaluateGate([{ verdict: 'PASS', complete: true }], true).clear, true);
  assert.equal(audit.evaluateGate([{ verdict: 'FAIL', complete: true }], true).clear, false);
  assert.equal(audit.evaluateGate([{ verdict: 'BLOCKED', complete: true }], true).clear, false);
  assert.equal(audit.evaluateGate([{ verdict: 'PASS', complete: false }], true).clear, false);
  assert.equal(audit.evaluateGate([{ verdict: 'PASS', complete: true }], false).clear, false);
});

test('corpus capture is saved only after a successful probe and failed fetch never overwrites it', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'phase0-corpus-'));
  const body = '<html>' + 'authoritative content '.repeat(100) + '</html>';
  const okFetch = async () => new Response(body, { status: 200, headers: { 'content-type': 'text/html; charset=utf-8' } });
  const first = await audit.fetchAndCapture('https://authority.test/guidance', {
    corpusDir: directory,
    filename: 'authority.html',
    fetchImpl: okFetch,
    retrievedAt: '2026-08-02T12:00:00.000Z',
  });
  assert.equal(first.status, 'saved');
  assert.match(first.sha256, /^[a-f0-9]{64}$/);
  const saved = await readFile(path.join(directory, 'authority.html'), 'utf8');
  assert.equal(saved, body);
  const before = (await stat(path.join(directory, 'authority.html'))).mtimeMs;

  const failed = await audit.fetchAndCapture('https://authority.test/guidance', {
    corpusDir: directory,
    filename: 'authority.html',
    fetchImpl: async () => new Response('not found', { status: 404 }),
    retrievedAt: '2026-08-02T12:01:00.000Z',
  });
  assert.equal(failed.status, 'blocked');
  assert.equal(await readFile(path.join(directory, 'authority.html'), 'utf8'), body);
  assert.equal((await stat(path.join(directory, 'authority.html'))).mtimeMs, before);
});
