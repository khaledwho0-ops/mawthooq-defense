import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdtemp, readFile, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import audit from './phase0-audit.mjs';

function semanticReviewFixture() {
  const card = {
    id: 'reviewed-card',
    title: { ar: 'بطاقة مراجعة', en: 'Reviewed card' },
    level: 4,
    do: [{ t: 'اعمل الخطوة الآمنة.', src: 'adam:reviewed' }],
    dont: [{ t: 'ماتعملش الخطوة الخطرة.', src: 'adam:reviewed' }],
    sources: [{ srcId: 'adam:reviewed', url: 'https://medlineplus.gov/ency/article/000001.htm', sha256: '', retrieved: '2026-08-02' }],
  };
  const sourceBytes = Buffer.from('<main>Complete source context with an explicit safety exception.</main>');
  const sourceSha256 = createHash('sha256').update(sourceBytes).digest('hex');
  card.sources[0].sha256 = sourceSha256;
  const cardSha256 = createHash('sha256').update(JSON.stringify(card)).digest('hex');
  const filename = 'reviewed-source.html';
  const manifest = {
    schema_version: 1,
    qualifying_card_ids: [card.id],
    records: [{
      card_id: card.id,
      title: card.title,
      level: card.level,
      card_sha256: cardSha256,
      sources: [{
        source_id: 'adam:reviewed',
        url: 'https://medlineplus.gov/ency/article/000001.htm',
        filename,
        sha256: sourceSha256,
        retrieval_date: '2026-08-02',
        final_url: 'https://medlineplus.gov/ency/article/000001.htm',
      }],
      actionable_lines: [
        { field_path: 'do[0]', text: card.do[0].t, english_text: null, english_status: 'absent', source_id: 'adam:reviewed', source_excerpt: 'Complete source context', qualifier_or_exception: 'none', card_carries: true, verdict: 'PASS' },
        { field_path: 'dont[0]', text: card.dont[0].t, english_text: null, english_status: 'absent', source_id: 'adam:reviewed', source_excerpt: 'explicit safety exception', qualifier_or_exception: 'explicit exception', card_carries: true, verdict: 'PASS' },
      ],
      source_qualifiers: [
        { id: 'reviewed-context', source_id: 'adam:reviewed', source_excerpt: 'Complete source context', disposition: 'Carried by do[0].', verdict: 'PASS' },
        { id: 'reviewed-exception', source_id: 'adam:reviewed', source_excerpt: 'explicit safety exception', disposition: 'Carried by dont[0].', verdict: 'PASS' },
      ],
      overall_verdict: 'PASS',
      reviewer_note: 'Complete full-context human review.',
      remediation: { changed: false, before_card_sha256: cardSha256, after_card_sha256: cardSha256, modified_fields: [] },
    }],
  };
  return {
    cards: [card],
    baseCards: [structuredClone(card)],
    sources: { 'adam:reviewed': { url: 'https://medlineplus.gov/ency/article/000001.htm', label: 'A.D.A.M. review source', sha256: sourceSha256, retrieved: '2026-08-02' } },
    requiredQualifierInventory: { 'adam:reviewed': ['reviewed-context', 'reviewed-exception'] },
    corpusIndex: [{ url: 'https://medlineplus.gov/ency/article/000001.htm', status: 'saved', filename, sha256: sourceSha256, retrievedAt: '2026-08-02T12:00:00.000Z', finalUrl: 'https://medlineplus.gov/ency/article/000001.htm' }],
    manifest,
    readFileImpl: async (requested) => {
      assert.equal(path.basename(requested), filename);
      return sourceBytes;
    },
  };
}

async function loadCanonicalMostaedCard(id) {
  const data = await audit.loadJavaScriptData(fileURLToPath(new URL('../mostaed/scenarios.js', import.meta.url)), 'SCENARIOS');
  return data.records.find((card) => card.id === id);
}

test('phase 0 audit module exists', () => {
  assert.equal(existsSync(new URL('./phase0-audit.mjs', import.meta.url)), true);
});

test('loads the actual remediation base card from a pinned git revision', async () => {
  const base = await audit.loadJavaScriptDataAtRevision('786b61d', 'mostaed/scenarios.js', 'SCENARIOS');
  assert.equal(base.records.length, 119);
  assert.equal(base.records.find((card) => card.id === 'choking-adult').do.length, 6);
});

test('accepts a complete source-grounded Mostaed semantic review', async () => {
  const result = await audit.validateMostaedSemanticReview(semanticReviewFixture());
  assert.deepEqual(result, { verdict: 'PASS', complete: true, errors: [], records: [{ id: 'reviewed-card', verdict: 'PASS', complete: true, reason: 'Complete source-grounded semantic review.' }] });
});

test('blocks a Mostaed semantic manifest that omits a qualifying card', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.qualifying_card_ids = [];
  fixture.manifest.records = [];
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /qualifying inventory.*reviewed-card/i);
});

test('blocks stale Mostaed card and source hashes', async (t) => {
  await t.test('card hash', async () => {
    const fixture = semanticReviewFixture();
    fixture.manifest.records[0].card_sha256 = '0'.repeat(64);
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /reviewed-card card hash mismatch/i);
  });

  await t.test('source hash', async () => {
    const fixture = semanticReviewFixture();
    fixture.manifest.records[0].sources[0].sha256 = '0'.repeat(64);
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /adam:reviewed source hash mismatch/i);
  });
});

test('blocks a Mostaed semantic review with a missing actionable path', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines.pop();
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /missing actionable path dont\[0\]/i);
});

test('blocks duplicate Mostaed actionable paths', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines.push({ ...fixture.manifest.records[0].actionable_lines[0] });
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /duplicate actionable path do\[0\]/i);
});

test('blocks unresolved Mostaed source-wide qualifiers', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].source_qualifiers[0].disposition = '';
  fixture.manifest.records[0].source_qualifiers[0].verdict = 'BLOCKED';
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /unresolved source qualifier reviewed-exception/i);
});

test('blocks a fabricated source excerpt that is absent from the hashed capture', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines[0].source_excerpt = 'Fabricated source claim';
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /source excerpt.*not found.*do\[0\]/i);
});

test('blocks a reduced source-wide qualifier inventory', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].source_qualifiers.pop();
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /missing required source qualifier reviewed-exception/i);
});

test('blocks a PASS line that does not carry its source condition', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines[0].card_carries = false;
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /source condition is not carried.*do\[0\]/i);
});

test('blocks stale canonical source-registry and card-citation hashes', async (t) => {
  await t.test('source registry', async () => {
    const fixture = semanticReviewFixture();
    fixture.sources['adam:reviewed'].sha256 = '0'.repeat(64);
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /canonical source hash mismatch/i);
  });

  await t.test('card citation', async () => {
    const fixture = semanticReviewFixture();
    fixture.cards[0].sources[0].sha256 = '0'.repeat(64);
    fixture.manifest.records[0].card_sha256 = createHash('sha256').update(JSON.stringify(fixture.cards[0])).digest('hex');
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /card citation hash mismatch/i);
  });
});

test('blocks fabricated remediation hashes and modified fields', async (t) => {
  await t.test('before hash', async () => {
    const fixture = semanticReviewFixture();
    fixture.manifest.records[0].remediation.changed = true;
    fixture.manifest.records[0].remediation.before_card_sha256 = '0'.repeat(64);
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /remediation before-card hash mismatch/i);
  });

  await t.test('modified field', async () => {
    const fixture = semanticReviewFixture();
    fixture.manifest.records[0].remediation.changed = true;
    fixture.manifest.records[0].remediation.modified_fields = [{ field_path: 'do[0].t', before: 'invented', after: fixture.cards[0].do[0].t }];
    const result = await audit.validateMostaedSemanticReview(fixture);
    assert.equal(result.verdict, 'BLOCKED');
    assert.match(result.errors.join('\n'), /remediation before value mismatch.*do\[0\]\.t/i);
  });
});

test('blocks actionable lines without an explicit English review status', async () => {
  const fixture = semanticReviewFixture();
  delete fixture.manifest.records[0].actionable_lines[0].english_status;
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'BLOCKED');
  assert.match(result.errors.join('\n'), /English review status.*do\[0\]/i);
});

test('fails a Mostaed semantic review that records a proven content defect', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines[0].verdict = 'FAIL';
  fixture.manifest.records[0].overall_verdict = 'FAIL';
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.verdict, 'FAIL');
  assert.match(result.errors.join('\n'), /proven content defect at do\[0\]/i);
});

test('classifies a proven line defect as FAIL even when the record verdict is inconsistent', async () => {
  const fixture = semanticReviewFixture();
  fixture.manifest.records[0].actionable_lines[0].verdict = 'FAIL';
  const result = await audit.validateMostaedSemanticReview(fixture);
  assert.equal(result.records[0].verdict, 'FAIL');
  assert.equal(result.verdict, 'FAIL');
});

test('adult choking carries five-thrust cycles and the pregnant-or-obese chest-thrust exception', async () => {
  const card = await loadCanonicalMostaedCard('choking-adult');
  assert.match(card.do[4].t, /٥ ضغطات.*كرّر ٥ ضربات و٥ ضغطات.*يفقد الوعي/);
  assert.match(card.do[5].t, /حامل أو بدين جدًا.*ضغطات صدر.*بدل ضغطات البطن/);
  assert.equal(card.do[5].src, 'mlp:choking-adult');
  assert.equal(card.dont[2].src, 'mlp:choking-adult');
  assert.match(card.after.ar, /أي حد اختنق.*كشف طبي/);
  assert.doesNotMatch(card.after.ar, /لو اضطريت تعمل ضغطات بطن/);
});

test('drowning carries rescue breathing and CPR before post-rescue reassurance', async () => {
  const card = await loadCanonicalMostaedCard('drowning');
  assert.match(card.do[3].t, /لو نفسه وقف.*تنفّس إنقاذي.*الإنعاش القلبي الرئوي/);
  assert.equal(card.do[3].src, 'mlp:drowning');
  assert.match(card.do[5].t, /لو فيه إصابة واضحة في الراس.*ثبّت راسه ورقبته/);
  assert.match(card.after.ar, /كشف طبي.*احتاج أي إنعاش.*للمستشفى/);
});

test('burn cooling is limited to minor unbroken-skin burns and excludes severe-burn immersion', async () => {
  const card = await loadCanonicalMostaedCard('burn');
  assert.match(card.do[0].t, /لو الحرق بسيط والجلد مش مفتوح/);
  assert.match(card.do[0].t, /٥.*٣٠ دقيقة/);
  assert.equal(card.do[0].src, 'mlp:burns');
  assert.match(card.dont[1].t, /ماتغمرش الحرق الشديد في ميّه ساقعة/);
  assert.match(card.dont[4].t, /ماتحطّش مخدة تحت راسه لو الحرق في مجرى الهوا/);
});

test('electric shock carries dry insulation, complete shock positioning, and the high-voltage cutoff boundary', async () => {
  const card = await loadCanonicalMostaedCard('electric-shock');
  assert.match(card.do[1].t, /قف على حاجة ناشفة ماتوصّلش كهربا/);
  assert.match(card.do[3].t, /فاقد الوعي.*مش بيتنفّس أو نفسه ضعيف.*تنفّس إنقاذي.*مفيش نبض.*إنعاش/);
  assert.match(card.do[5].t, /لو مش شاكك في إصابة عمود فقري.*ارفع رجليه.*غطّيه/);
  assert.match(card.dont[0].t, /لحد ما الكهربا تتفصل/);
  assert.equal(card.dont.some((line) => /ماتحرّكش راسه أو رقبته.*عموده الفقري/.test(line.t)), true);
});

test('heat illness hydration avoids an unmeasured homemade salt dose', async () => {
  const card = await loadCanonicalMostaedCard('heat-stroke');
  assert.match(card.do[2].t, /مشروب رياضي، أو ميّه ساقعة عادية/);
  assert.doesNotMatch(card.do[2].t, /ملح/);
  assert.equal(card.redFlags.some((line) => /٣٨٫٩/.test(typeof line === 'string' ? line : line.t)), true);
  const emergencyText = card.redFlags.map((line) => typeof line === 'string' ? line : line.t).join(' ');
  assert.match(emergencyText, /نبضه أو تنفّسه سريع/);
  assert.match(emergencyText, /مش بيتحسّن أو بيسوء رغم الإسعاف/);
});

test('head injury carries the source vomiting log-roll instruction', async () => {
  const card = await loadCanonicalMostaedCard('head-injury');
  assert.equal(card.do.length, 6);
  assert.match(card.do[5].t, /لو بيرجّع.*الراس والرقبة والجسم كوحدة واحدة.*مايشرقش/);
  assert.equal(card.do[5].src, 'mlp:head-injury');
  assert.equal(card.dont.some((line) => /إصابة راس خطيرة.*٤٨ ساعة.*كحول.*مخدرات/.test(line.t)), true);
});

test('breathing difficulty carries the three-sided seal for a sucking chest wound', async () => {
  const card = await loadCanonicalMostaedCard('breathing-difficulty');
  assert.match(card.do[4].t, /بلاستيك.*٣ نواحي.*سيب ناحية مفتوحة/);
  assert.equal(card.do[4].src, 'mlp:breathing-difficulty');
});

test('chemical burn carries the immediate fifteen-minute eye-flush escalation', async () => {
  const card = await loadCanonicalMostaedCard('chemical-burn');
  const line = card.do.find((item) => /العين/.test(item.t) && /١٥ دقيقة/.test(item.t));
  assert.ok(line);
  assert.equal(line.src, 'mlp:chemical-burn');
  assert.match(line.t, /مساعدة طبية فورًا/);
});

test('unconsciousness carries age, pregnancy, diabetes, and seizure escalation conditions', async () => {
  const card = await loadCanonicalMostaedCard('unconsciousness');
  const text = card.variations.join(' ');
  assert.match(text, /حامل.*فوق ٥٠ سنة.*سكر.*تشنّجات.*فقد التحكم في البول أو البراز/);
});

test('dislocation carries the source shock-position injury exceptions', async () => {
  const card = await loadCanonicalMostaedCard('dislocation');
  const text = card.variations.join(' ');
  assert.match(text, /علامات صدمة.*مفيش إصابة راس أو رجل أو ضهر.*ارفع رجليه ٣٠ سم.*غطّيه/);
});

test('all reviewed Mostaed actionable lists stay within anti-truncation limits', async () => {
  const data = await audit.loadJavaScriptData(fileURLToPath(new URL('../mostaed/scenarios.js', import.meta.url)), 'SCENARIOS');
  const reviewedIds = new Set([
    'choking-adult', 'drowning', 'burn', 'electric-shock', 'infant-choking', 'heat-stroke', 'head-injury',
    'shock', 'chemical-burn', 'breathing-difficulty', 'dislocation', 'genital-injury', 'skull-fracture', 'unconsciousness',
  ]);
  const wordCount = (text) => String(text).trim().split(/\s+/u).filter(Boolean).length;
  for (const card of data.records.filter((item) => reviewedIds.has(item.id))) {
    assert.ok(card.do.length <= 6, `${card.id} has ${card.do.length} do lines`);
    assert.ok(card.dont.length <= 4, `${card.id} has ${card.dont.length} dont lines`);
    for (const [kind, lines] of [['do', card.do], ['dont', card.dont]]) {
      for (const [index, line] of lines.entries()) {
        const arabic = typeof line === 'string' ? line : line.t;
        assert.ok(wordCount(arabic) <= 20, `${card.id} ${kind}[${index}] Arabic has ${wordCount(arabic)} words`);
        if (typeof line === 'object' && line.en) assert.ok(wordCount(line.en) <= 20, `${card.id} ${kind}[${index}] English has ${wordCount(line.en)} words`);
      }
    }
  }
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

test('keeps decimal percentages inside one complete production sentence', () => {
  const regional = "A review found prevalence reaching 40% (Palestine) to 77.9% (Sudan) in these samples.";
  assert.deepEqual(audit.detectStatisticalQuantities(regional).quantities, [regional]);
  assert.equal(audit.detectStatisticalQuantities(regional).quantities.includes('A review found prevalence reaching 40% (Palestine) to 77.'), false);

  const adhd = "Its prevalence is about 7% in children and 2.5% in adults worldwide.";
  assert.deepEqual(audit.detectStatisticalQuantities(adhd).quantities, [adhd]);
  assert.equal(audit.detectStatisticalQuantities(adhd).quantities.includes('Its prevalence is about 7% in children and 2.'), false);
});

test('keeps et al. author context around production citation years', () => {
  const citations = 'Cipriani et al. (2018) showed drugs beat placebo. But another review (Jakobsen et al., 2017) found high risk of bias.';
  assert.deepEqual(audit.detectStatisticalQuantities(citations).quantities, [
    'Cipriani et al. (2018) showed drugs beat placebo.',
    'But another review (Jakobsen et al., 2017) found high risk of bias.',
  ]);
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
