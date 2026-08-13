import fs from 'fs';

const amanFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/aman/threats.js';
const hoqoqiFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/hoqoqi/rights.js';
const motazenFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/motazen/claims.js';
const mostaedFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/mostaed/scenarios.js';

function loadData(filePath, globalVar) {
  const content = fs.readFileSync(filePath, 'utf8');
  let window = {};
  new Function('window', content)(window);
  return { data: window[globalVar], sources: window.SOURCES };
}

const aman = loadData(amanFile, 'CARDS');
const hoqoqi = loadData(hoqoqiFile, 'CARDS');
const motazen = loadData(motazenFile, 'CLAIMS');
const mostaed = loadData(mostaedFile, 'SCENARIOS');

console.log('=== RUNNING NEGATIVE PROMPT BATTERY ===');

let passCount = 0;
let failCount = 0;

function assertRule(promptCode, description, condition, details = '') {
  if (condition) {
    passCount++;
    console.log(`[PASS] ${promptCode}: ${description}`);
  } else {
    failCount++;
    console.error(`[FAIL] ${promptCode}: ${description} -> ${details}`);
  }
}

// NEG-LOGIC-09: All source IDs exist in SOURCES
[
  { name: 'Aman', data: aman.data, sources: aman.sources },
  { name: 'Hoqoqi', data: hoqoqi.data, sources: hoqoqi.sources },
  { name: 'Motazen', data: motazen.data, sources: motazen.sources }
].forEach(p => {
  let missing = [];
  p.data.forEach(item => {
    if (item.sources) {
      item.sources.forEach(s => {
        const id = typeof s === 'string' ? s : s.srcId;
        if (id && !p.sources[id]) missing.push(`${item.id} -> ${id}`);
      });
    }
  });
  assertRule('NEG-LOGIC-09', `${p.name} all source IDs declared in window.SOURCES`, missing.length === 0, missing.join(', '));
});

// NEG-QUAL-02: No 911 / 999 foreign emergency numbers in contacts
[
  { name: 'Aman', data: aman.data },
  { name: 'Hoqoqi', data: hoqoqi.data },
  { name: 'Mostaed', data: mostaed.data }
].forEach(p => {
  let foreignNumbers = [];
  p.data.forEach(item => {
    if (item.contacts) {
      item.contacts.forEach(c => {
        if (c.number === '911' || c.number === '999') foreignNumbers.push(`${item.id}:${c.number}`);
      });
    }
  });
  assertRule('NEG-QUAL-02', `${p.name} no foreign emergency numbers (911/999) in contacts`, foreignNumbers.length === 0, foreignNumbers.join(', '));
});

// NEG-OMIT-21: Anti-truncation limits: do <= 6, dont <= 4 on scenario cards
[
  { name: 'Aman', data: aman.data.filter(c => c.id.startsWith('scenario-')) },
  { name: 'Hoqoqi', data: hoqoqi.data.filter(c => c.id.startsWith('scenario-')) }
].forEach(p => {
  let oversized = [];
  p.data.forEach(item => {
    if (item.do && item.do.length > 6) oversized.push(`${item.id} do:${item.do.length}`);
    if (item.dont && item.dont.length > 4) oversized.push(`${item.id} dont:${item.dont.length}`);
  });
  assertRule('NEG-OMIT-21', `${p.name} scenario lists stay within anti-truncation limits`, oversized.length === 0, oversized.join(', '));
});

// NEG-FAB-05: Jurisdiction check
let hoqoqiWrongJur = [];
hoqoqi.data.filter(c => c.id.startsWith('scenario-')).forEach(item => {
  if (!item.my_right || (!item.my_right.includes('الدستور') && !item.my_right.includes('قانون') && !item.my_right.includes('الإعلان'))) {
    hoqoqiWrongJur.push(item.id);
  }
});
assertRule('NEG-FAB-05', 'Hoqoqi scenario rights cite valid legal basis', hoqoqiWrongJur.length === 0, hoqoqiWrongJur.join(', '));

console.log(`\nBATTERY COMPLETE: ${passCount} PASSED, ${failCount} FAILED.`);
if (failCount > 0) process.exit(1);
