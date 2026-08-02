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

test('reports sentence-level fractional and Arabic decimal scope without overlapping partial tokens', () => {
  assert.deepEqual(
    audit.detectStatisticalQuantities('The replicated effects were about half the original magnitude.').quantities,
    ['The replicated effects were about half the original magnitude.'],
  );
  assert.deepEqual(
    audit.detectStatisticalQuantities('النسبة كانت ٣٫٥٪، وحوالي نصف العينة.').quantities,
    ['النسبة كانت ٣٫٥٪، وحوالي نصف العينة.'],
  );
  assert.deepEqual(
    audit.detectStatisticalQuantities('The ratio was 1:4 and 35%.').quantities,
    ['The ratio was 1:4 and 35%.'],
  );
});

test('classifies plural magnitudes, counted disorders, and counted reviews as statistical', () => {
  const samples = [
    'Stigma is a global public health issue affecting millions.',
    'Reviews describe five disorders.',
    'Two independent meta-analytic reviews found the same paradox.',
    'الوصمة بتأثّر على ملايين.',
    'المراجعات بتوصف خمسة اضطرابات.',
    'مراجعتين تحليليتين مستقلتين لقوا نفس المفارقة.',
  ];
  for (const sample of samples) {
    assert.equal(audit.detectStatisticalQuantities(sample).hasStatistic, true, sample);
  }
});

test('preserves exact English and Arabic quantity-and-scope language', () => {
  const english = audit.detectStatisticalQuantities('The synthesis included 522 trials and 116,000+ participants.');
  assert.deepEqual(english.quantities, ['The synthesis included 522 trials and 116,000+ participants.']);

  const arabic = audit.detectStatisticalQuantities('التحليل شمل ٥٢٢ تجربة، وأكتر من ١١٦ ألف مشارك، وكان الأثر نص حجمه الأصلي تقريباً.');
  assert.deepEqual(arabic.quantities, ['التحليل شمل ٥٢٢ تجربة، وأكتر من ١١٦ ألف مشارك، وكان الأثر نص حجمه الأصلي تقريباً.']);
});

test('independent broad quantitative scan blocks a primary-detector miss', () => {
  const claims = [
    { id: 'ordinary', claim_ar: 'وصف نوعي بلا كمية.', claim_en: 'A qualitative description.' },
    { id: 'broad-only', claim_ar: '', claim_en: 'A score of participants reported improvement.' },
  ];
  assert.equal(audit.detectStatisticalQuantities(claims[1].claim_en).hasStatistic, false);
  assert.equal(audit.scanBroadQuantitativeCandidates(claims[1].claim_en).hasCandidate, true);

  const completeness = audit.validateStatisticalDecisionCompleteness(claims, [
    { id: 'ordinary', decision: 'not-statistical' },
    { id: 'broad-only', decision: 'not-statistical' },
  ]);
  assert.equal(completeness.complete, false);
  assert.deepEqual(completeness.errors, [
    'Motazen broad quantitative candidate not marked statistical: broad-only',
  ]);
});

test('rejects a long generic JavaScript application shell as non-substantive source evidence', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'phase0-shell-'));
  const shell = `<!doctype html><title>IdentityTheft.gov</title><div id="root"></div><script>${'window.__APP_STATE__={};'.repeat(100)}</script>`;
  const result = await audit.fetchAndCapture('https://identitytheft.gov/', {
    corpusDir: directory,
    filename: 'identity.html',
    fetchImpl: async () => new Response(shell, { status: 200 }),
  });
  assert.equal(result.status, 'blocked');
  assert.match(result.reason, /substantive/i);
  assert.equal(existsSync(path.join(directory, 'identity.html')), false);
});

test('accepts substantive page-specific source content', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'phase0-substantive-'));
  const paragraphs = Array.from({ length: 20 }, (_, index) => `<p>Identity theft recovery step ${index}: contact the issuing bank, preserve records, report unauthorized accounts, and follow the official recovery plan.</p>`).join('');
  const page = `<!doctype html><title>Official identity theft recovery plan</title><main><h1>Recover from identity theft</h1>${paragraphs}</main>`;
  const result = await audit.fetchAndCapture('https://authority.test/identity-recovery', {
    corpusDir: directory,
    filename: 'identity.html',
    fetchImpl: async () => new Response(page, { status: 200 }),
  });
  assert.equal(result.status, 'saved');
});

test('source-found requires scenario-specific semantic evidence', () => {
  const generic = '<main><h1>Secure Our World</h1><p>' + 'Use strong passwords and multifactor authentication. '.repeat(40) + '</p></main>';
  const router = '<main><h1>Secure your home router</h1><p>' + 'Change the default router password and secure the Wi-Fi wireless network. '.repeat(30) + '</p></main>';
  const required = [['router', 'wi-fi', 'wifi', 'wireless network']];
  assert.equal(audit.hasScenarioEvidence(generic, required).matched, false);
  assert.equal(audit.hasScenarioEvidence(router, required).matched, true);
});

test('required inventory completeness fails on any omitted production-style occurrence or matrix cell', () => {
  const completeness = audit.validateRequiredInventories([
    { name: 'mostaed audit', expected: ['m1', 'm2'], actual: ['m1'] },
    { name: 'motazen 130 claims', expected: ['c1', 'c2'], actual: ['c1', 'c2'] },
    { name: 'motazen statistical subset', expected: ['s1', 's2'], actual: ['s1'] },
    { name: 'contact occurrences', expected: ['aman/a/do[0]/122'], actual: [] },
    { name: 'matrix cells', expected: ['domain/L1', 'domain/L2'], actual: ['domain/L1'] },
    { name: 'Aman rows', expected: ['A1', 'A2'], actual: ['A1'] },
    { name: 'Hoqoqi rows', expected: ['H1', 'H2'], actual: ['H1'] },
  ]);
  assert.equal(completeness.complete, false);
  assert.deepEqual(completeness.errors, [
    'mostaed audit missing: m2',
    'motazen statistical subset missing: s2',
    'contact occurrences missing: aman/a/do[0]/122',
    'matrix cells missing: domain/L2',
    'Aman rows missing: A2',
    'Hoqoqi rows missing: H2',
  ]);
  assert.equal(audit.evaluateGate([{ verdict: 'PASS', complete: true }], true, completeness).clear, false);
});

test('corpus index ordering is deterministic by URL after concurrent completion', () => {
  assert.deepEqual(audit.sortCorpusIndex([
    { url: 'https://z.test/', status: 'saved' },
    { url: 'https://a.test/', status: 'blocked' },
    { url: 'https://m.test/', status: 'saved' },
  ]).map((entry) => entry.url), ['https://a.test/', 'https://m.test/', 'https://z.test/']);
});

test('prior-capture recovery ignores ENOENT but propagates corruption and permission failures', async () => {
  const missing = new Error('missing');
  missing.code = 'ENOENT';
  assert.equal(await audit.loadPriorCapture('https://authority.test/page', {
    corpusDir: 'unused',
    readFileImpl: async () => { throw missing; },
  }), null);

  const denied = new Error('permission denied');
  denied.code = 'EACCES';
  await assert.rejects(() => audit.loadPriorCapture('https://authority.test/page', {
    corpusDir: 'unused',
    readFileImpl: async () => { throw denied; },
  }), /permission denied/);

  const substantive = Buffer.from(`<main>${'substantive official source evidence '.repeat(50)}</main>`);
  await assert.rejects(() => audit.loadPriorCapture('https://authority.test/page', {
    corpusDir: 'unused',
    expectedSha256: '0'.repeat(64),
    readFileImpl: async () => substantive,
    statImpl: async () => ({ mtime: new Date('2026-08-02T12:00:00Z') }),
  }), /hash mismatch/);
});
