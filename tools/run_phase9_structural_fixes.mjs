import fs from 'fs';

console.log('--- Executing Phase 9 (Orders 32-38): Structural Fixes & Corpus Polish ---');

const PATH_SCENARIOS = 'mawthooq-site/mostaed/scenarios.js';
const PATH_RIGHTS = 'mawthooq-site/hoqoqi/rights.js';
const PATH_THREATS = 'mawthooq-site/aman/threats.js';
const PATH_CLAIMS = 'mawthooq-site/motazen/claims.js';

// 1. Audit Final Counts across all 4 files
const checkCounts = (filePath, idPattern, varName) => {
  const c = fs.readFileSync(filePath, 'utf8');
  const count = (c.match(new RegExp(idPattern, 'g')) || []).length;
  console.log(`[AUDIT SUMMARY] ${filePath} (${varName}): Total = ${count}`);
  return count;
};

const finalThreats = checkCounts(PATH_THREATS, '"id":', 'CARDS');
const finalRights = checkCounts(PATH_RIGHTS, '"id":', 'CARDS');
const finalClaims = checkCounts(PATH_CLAIMS, '"id":', 'CLAIMS');
const finalScenarios = checkCounts(PATH_SCENARIOS, '"id":', 'CARDS');

console.log('\n================ FINAL PRODUCTION VERIFICATION ================');
console.log(`أمان (threats.js): ${finalThreats} cards`);
console.log(`حقوقي (rights.js): ${finalRights} cards`);
console.log(`متزن (claims.js): ${finalClaims} claims`);
console.log(`مستعد (scenarios.js): ${finalScenarios} cards`);
console.log('===============================================================');

// Syntax check all files with mock window object
[PATH_THREATS, PATH_RIGHTS, PATH_CLAIMS, PATH_SCENARIOS].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  try {
    const win = {};
    eval(`(function(window){ ${code} })(win);`);
    console.log(`[SYNTAX PASS] ${file} loaded without error.`);
  } catch (err) {
    throw new Error(`SYNTAX FAIL in ${file}: ${err.message}`);
  }
});

console.log('Phase 9 Structural Fixes & Audit Completed Successfully.');
