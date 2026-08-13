import fs from 'fs';
import path from 'path';

const amanFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/aman/threats.js';
const hoqoqiFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/hoqoqi/rights.js';
const motazenFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/motazen/claims.js';
const mostaedFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/mostaed/scenarios.js';

// Evaluate files to get data objects
function loadData(filePath, globalVar) {
  const content = fs.readFileSync(filePath, 'utf8');
  let window = {};
  const evalFunc = new Function('window', content);
  evalFunc(window);
  return { data: window[globalVar], sources: window.SOURCES };
}

const aman = loadData(amanFile, 'CARDS');
const hoqoqi = loadData(hoqoqiFile, 'CARDS');
const motazen = loadData(motazenFile, 'CLAIMS');
const mostaed = loadData(mostaedFile, 'SCENARIOS');

console.log('--- DATA LOADED SUCCESSFULLY ---');
console.log(`Aman cards: ${aman.data.length}, sources: ${Object.keys(aman.sources).length}`);
console.log(`Hoqoqi cards: ${hoqoqi.data.length}, sources: ${Object.keys(hoqoqi.sources).length}`);
console.log(`Motazen claims: ${motazen.data.length}, sources: ${Object.keys(motazen.sources).length}`);
console.log(`Mostaed cards: ${mostaed.data.length}, sources: ${Object.keys(mostaed.sources).length}`);

// 0.1 Audit L4/L5 Mostaed cards for dropped exceptions
const l4l5Mostaed = mostaed.data.filter(c => c.level === 4 || c.level === 5);
console.log(`\n--- 0.1 MOSTAED L4/L5 CARDS (${l4l5Mostaed.length}) ---`);
const droppedExceptionsAudit = [];
for (const card of l4l5Mostaed) {
  let hasExceptionMention = false;
  const cardStr = JSON.stringify(card);
  if (cardStr.includes('استثناء') || cardStr.includes('إلا') || cardStr.includes('ممنوع') || cardStr.includes('تجنب') || cardStr.includes('احذر')) {
    hasExceptionMention = true;
  }
  droppedExceptionsAudit.push({
    id: card.id,
    title: card.title.ar,
    level: card.level,
    sources: card.sources ? card.sources.map(s => s.srcId) : [],
    hasExceptionMention
  });
}

// Save audit log
fs.writeFileSync('c:/Users/pc/Desktop/EGY/mawthooq-site/docs/audits/phase0-2026-08-02/mostaed-l4l5-exceptions-audit.json', JSON.stringify(droppedExceptionsAudit, null, 2));

// 0.2 Audit Motazen statistics scoping
console.log('\n--- 0.2 MOTAZEN STATISTICS SCOPING ---');
const statClaims = motazen.data.filter(c => /\d+|%|نسبة|معدل/.test(c.claim_ar || ''));
console.log(`Claims with numbers/percentages: ${statClaims.length}`);

// 0.3 Contacts provenance audit
console.log('\n--- 0.3 CONTACTS PROVENANCE AUDIT ---');
const checkContacts = (items, name) => {
  const missingProv = [];
  for (const item of items) {
    if (item.contacts && item.contacts.length > 0) {
      for (const c of item.contacts) {
        if (c.number && !c.src && (!item.sources || item.sources.length === 0)) {
          missingProv.push({ id: item.id, contact: c });
        }
      }
    }
  }
  console.log(`${name} contacts missing explicit source provenance: ${missingProv.length}`);
};
checkContacts(aman.data, 'Aman');
checkContacts(hoqoqi.data, 'Hoqoqi');

// 0.4 Generate Coverage Matrices
console.log('\n--- 0.4 COVERAGE MATRICES GENERATION ---');

// Mostaed: Domain x Level
const mostaedMatrix = {};
mostaed.data.forEach(c => {
  const d = c.domain || 'Uncategorized';
  const l = `L${c.level || 0}`;
  if (!mostaedMatrix[d]) mostaedMatrix[d] = { L1: 0, L2: 0, L3: 0, L4: 0, L5: 0, Total: 0 };
  mostaedMatrix[d][l] = (mostaedMatrix[d][l] || 0) + 1;
  mostaedMatrix[d].Total += 1;
});
fs.writeFileSync('c:/Users/pc/Desktop/EGY/mawthooq-site/docs/audits/phase0-2026-08-02/mostaed-coverage-matrix.json', JSON.stringify(mostaedMatrix, null, 2));

// Motazen: Domain x Status
const motazenMatrix = {};
motazen.data.forEach(c => {
  const d = c.domain || 'Uncategorized';
  const s = c.status || 'unknown';
  if (!motazenMatrix[d]) motazenMatrix[d] = { established: 0, contested: 0, debunked: 0, unknown: 0, Total: 0 };
  motazenMatrix[d][s] = (motazenMatrix[d][s] || 0) + 1;
  motazenMatrix[d].Total += 1;
});
fs.writeFileSync('c:/Users/pc/Desktop/EGY/mawthooq-site/docs/audits/phase0-2026-08-02/motazen-coverage-matrix.json', JSON.stringify(motazenMatrix, null, 2));

// Check empty en summaries in Mostaed
const emptyEnMostaed = mostaed.data.filter(c => !c.title.en || c.title.en.trim() === '');
console.log(`\nMostaed cards with empty en title: ${emptyEnMostaed.length}`);

console.log('\nPhase 0 analysis complete.');
