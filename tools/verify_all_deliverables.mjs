import fs from 'fs';

console.log('================================================================');
console.log('         EAL COMPREHENSIVE VERIFICATION SUITE                   ');
console.log('================================================================\n');

const files = [
  { name: 'أمان', path: 'mawthooq-site/aman/threats.js', minCount: 31, arrayName: 'CARDS' },
  { name: 'حقوقي', path: 'mawthooq-site/hoqoqi/rights.js', minCount: 35, arrayName: 'CARDS' },
  { name: 'متزن', path: 'mawthooq-site/motazen/claims.js', minCount: 190, arrayName: 'CLAIMS' },
  { name: 'مستعد', path: 'mawthooq-site/mostaed/scenarios.js', minCount: 135, arrayName: 'SCENARIOS' }
];

let allPassed = true;

files.forEach(({ name, path, minCount, arrayName }) => {
  console.log(`\n--- Checking ${name} (${path}) ---`);
  
  if (!fs.existsSync(path)) {
    console.error(`❌ FAIL: File missing -> ${path}`);
    allPassed = false;
    return;
  }

  const content = fs.readFileSync(path, 'utf8');

  // 1. Line ending check
  const isCrlf = content.includes('\r\n');
  if (isCrlf) {
    console.log(`  [✓] Line Endings: CRLF (\\r\\n) verified.`);
  } else {
    console.error(`  [❌] Line Endings: FAIL - expected CRLF (\\r\\n).`);
    allPassed = false;
  }

  // 2. Count check
  const idCount = (content.match(/"id":/g) || content.match(/id:/g) || []).length;
  if (idCount >= minCount) {
    console.log(`  [✓] ID Count: ${idCount} >= min target ${minCount}`);
  } else {
    console.error(`  [❌] ID Count: ${idCount} < min target ${minCount}`);
    allPassed = false;
  }

  // 3. JS Eval & Schema check
  try {
    const mockWin = {};
    eval(`(function(window){ ${content} })(mockWin);`);
    
    if (!mockWin.SOURCES || Object.keys(mockWin.SOURCES).length === 0) {
      console.error(`  [❌] window.SOURCES is missing or empty!`);
      allPassed = false;
    } else {
      console.log(`  [✓] window.SOURCES: ${Object.keys(mockWin.SOURCES).length} declared sources.`);
    }

    const items = mockWin[arrayName];
    if (!Array.isArray(items)) {
      console.error(`  [❌] window.${arrayName} is not an array!`);
      allPassed = false;
    } else {
      console.log(`  [✓] window.${arrayName}: ${items.length} items parsed successfully.`);

      // Validate source key bindings
      let orphanSources = 0;
      items.forEach(item => {
        const itemSources = item.sources || [];
        itemSources.forEach(s => {
          const srcId = s.srcId || s;
          if (typeof srcId === 'string' && !mockWin.SOURCES[srcId]) {
            console.warn(`  [⚠] Warning: item "${item.id}" cites undeclared source "${srcId}"`);
            orphanSources++;
          }
        });
      });

      if (orphanSources === 0) {
        console.log(`  [✓] Source Provenance: 100% of item sources map to declared window.SOURCES.`);
      }
    }

  } catch (err) {
    console.error(`  [❌] JS Syntax Evaluation Error: ${err.message}`);
    allPassed = false;
  }
});

console.log('\n================================================================');
if (allPassed) {
  console.log('  SUCCESS: ALL DELIVERABLES FULLY VERIFIED AND PASSING 100%!');
} else {
  console.log('  FAILURE: ONE OR MORE VERIFICATION CHECKS FAILED!');
  process.exit(1);
}
console.log('================================================================\n');
