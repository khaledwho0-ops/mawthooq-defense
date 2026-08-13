import fs from 'fs';

// ======================================================================
// HARD AUDIT: Extract every card/claim ID from every production file
// ======================================================================

const files = [
  { name: 'أمان (threats.js)', path: 'mawthooq-site/aman/threats.js', arrayProp: 'CARDS' },
  { name: 'حقوقي (rights.js)', path: 'mawthooq-site/hoqoqi/rights.js', arrayProp: 'CARDS' },
  { name: 'متزن (claims.js)', path: 'mawthooq-site/motazen/claims.js', arrayProp: 'CLAIMS' },
  { name: 'مستعد (scenarios.js)', path: 'mawthooq-site/mostaed/scenarios.js', arrayProp: 'SCENARIOS' },
];

for (const f of files) {
  console.log('\n' + '='.repeat(70));
  console.log(`FILE: ${f.name}`);
  console.log('='.repeat(70));
  
  const content = fs.readFileSync(f.path, 'utf8');
  const mockWin = {};
  try {
    eval(`(function(window){ ${content} })(mockWin);`);
  } catch (e) {
    console.error('  JS EVAL ERROR:', e.message);
    continue;
  }
  
  const items = mockWin[f.arrayProp];
  if (!Array.isArray(items)) {
    console.error(`  ERROR: window.${f.arrayProp} is NOT an array`);
    continue;
  }
  
  console.log(`  Total items in window.${f.arrayProp}: ${items.length}`);
  console.log(`  Total sources in window.SOURCES: ${Object.keys(mockWin.SOURCES || {}).length}`);
  console.log('');
  
  // Print every ID
  items.forEach((item, i) => {
    const id = item.id || '(no id)';
    const title = item.title ? (item.title.ar || item.title.en || JSON.stringify(item.title)) : (item.claim_ar || item.myth_ar || '(no title)');
    const truncTitle = typeof title === 'string' ? title.substring(0, 80) : String(title).substring(0, 80);
    console.log(`  ${String(i+1).padStart(3)}. [${id}] ${truncTitle}`);
  });
  
  // Check for scenario-shaped IDs (the plan's new cards start with "scenario-")
  const scenarioIds = items.filter(it => it.id && it.id.startsWith('scenario-'));
  const topicIds = items.filter(it => it.id && !it.id.startsWith('scenario-'));
  console.log(`\n  Scenario-shaped IDs: ${scenarioIds.length}`);
  console.log(`  Topic/other IDs: ${topicIds.length}`);
}

console.log('\n' + '='.repeat(70));
console.log('AUDIT COMPLETE');
console.log('='.repeat(70));
