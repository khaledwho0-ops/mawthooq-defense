import fs from 'fs';

// =====================================================================
// CHECK PHASE 0 SAFETY AUDIT & PHASE 9 STRUCTURAL FIXES
// =====================================================================

console.log('=== PHASE 0 CHECKS ===\n');

// 0.1 — Were coverage matrices built?
const matrixPaths = [
  'mawthooq-site/tools/coverage_matrix_mostaed.md',
  'mawthooq-site/tools/coverage_matrix_motazen.md', 
  'mawthooq-site/tools/coverage_matrix_aman.md',
  'mawthooq-site/tools/coverage_matrix_hoqoqi.md',
  'mawthooq-site/docs/coverage_matrix.md',
  'coverage_matrices.md',
];
console.log('Coverage matrices search:');
matrixPaths.forEach(p => {
  console.log(`  ${p}: ${fs.existsSync(p) ? 'EXISTS' : 'MISSING'}`);
});

// Check if any file matching "coverage" or "matrix" exists  
console.log('\n=== PHASE 9 STRUCTURAL FIXES CHECKS ===\n');

// 9.1 — Taxonomy corruption: are there English who/place values in scenarios.js?
const scenarios = fs.readFileSync('mawthooq-site/mostaed/scenarios.js', 'utf8');
const mockWin = {};
eval(`(function(window){ ${scenarios} })(mockWin);`);
const items = mockWin.SCENARIOS;

let englishWho = 0;
let englishPlace = 0;
let emptyEn = 0;
let totalCards = items.length;

items.forEach(item => {
  if (item.who) {
    item.who.forEach(w => {
      if (/^[a-zA-Z]/.test(w)) englishWho++;
    });
  }
  if (item.place) {
    item.place.forEach(p => {
      if (/^[a-zA-Z]/.test(p)) englishPlace++;
    });
  }
  // Check en:"" empty summaries
  if (item.title && item.title.en === '') emptyEn++;
  if (item.snapshot && item.snapshot.en === '') emptyEn++;
});

console.log(`مستعد taxonomy check:`);
console.log(`  English who values: ${englishWho} (should be 0 if normalized)`);
console.log(`  English place values: ${englishPlace} (should be 0 if normalized)`);
console.log(`  Empty en:"" fields (title/snapshot): ${emptyEn}`);

// 9.2 — Severity distribution  
const levels = {};
items.forEach(item => {
  const l = item.level || 'unknown';
  levels[l] = (levels[l] || 0) + 1;
});
console.log(`\nSeverity distribution (${totalCards} total):`);
Object.keys(levels).sort().forEach(l => {
  const pct = ((levels[l] / totalCards) * 100).toFixed(1);
  console.log(`  L${l}: ${levels[l]} cards (${pct}%)`);
});
const l1l2 = (levels[1] || 0) + (levels[2] || 0);
const l1l2pct = ((l1l2 / totalCards) * 100).toFixed(1);
console.log(`  L1+L2 combined: ${l1l2} (${l1l2pct}%) — target: ≥20%`);

// 9.3 — أمان/حقوقي: check if scenario cards have the right schema fields
console.log('\n=== أمان SCENARIO CARD SCHEMA CHECK ===\n');
const aman = fs.readFileSync('mawthooq-site/aman/threats.js', 'utf8');
const amanWin = {};
eval(`(function(window){ ${aman} })(amanWin);`);
const amanCards = amanWin.CARDS;
const scenarioCards = amanCards.filter(c => c.id.startsWith('scenario-'));

const requiredAmanFields = ['first_60_seconds', 'the_criminal_lens', 'myths_that_kill'];
scenarioCards.forEach(card => {
  const missing = requiredAmanFields.filter(f => !card[f]);
  if (missing.length > 0) {
    console.log(`  [${card.id}] MISSING: ${missing.join(', ')}`);
  } else {
    console.log(`  [${card.id}] ✓ all scenario fields present`);
  }
});

console.log('\n=== حقوقي SCENARIO CARD SCHEMA CHECK ===\n');
const hoqoqi = fs.readFileSync('mawthooq-site/hoqoqi/rights.js', 'utf8');
const hoqoqiWin = {};
eval(`(function(window){ ${hoqoqi} })(hoqoqiWin);`);
const hoqoqiCards = hoqoqiWin.CARDS;
const hoqoqiScenarios = hoqoqiCards.filter(c => c.id.startsWith('scenario-'));

const requiredHoqoqiFields = ['right_ar', 'basis', 'recovery', 'do_list', 'dont_list', 'contacts'];
hoqoqiScenarios.forEach(card => {
  const missing = requiredHoqoqiFields.filter(f => !card[f]);
  if (missing.length > 0) {
    console.log(`  [${card.id}] MISSING: ${missing.join(', ')}`);
  } else {
    console.log(`  [${card.id}] ✓ all rights fields present`);
  }
});

// Check Phase 0 audit artifacts
console.log('\n=== LOOKING FOR PHASE 0 AUDIT ARTIFACTS ===');
const auditPaths = [
  'mawthooq-site/tools/run_phase0_audit.mjs',
  'mawthooq-site/tools/audit_results.md', 
  'mawthooq-site/docs/phase0_audit.md',
  'mawthooq-site/docs/dropped_exceptions_audit.md',
  'mawthooq-site/docs/statistic_scoping_audit.md',
  'mawthooq-site/docs/contacts_audit.md',
];
auditPaths.forEach(p => {
  console.log(`  ${p}: ${fs.existsSync(p) ? 'EXISTS' : 'MISSING'}`);
});

// Check wave reports
console.log('\n=== LOOKING FOR WAVE REPORTS / CHECKPOINTS ===');
const wavePaths = [
  'mawthooq-site/docs/wave_reports',
  'mawthooq-site/tools/wave_reports',
  'mawthooq-site/docs/checkpoints',
];
wavePaths.forEach(p => {
  console.log(`  ${p}: ${fs.existsSync(p) ? 'EXISTS' : 'MISSING'}`);
});
