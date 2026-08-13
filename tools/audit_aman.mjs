import fs from 'fs';

// Focused audit: just counts, IDs for أمان and the first portion of output
const files = [
  { name: 'أمان (threats.js)', path: 'mawthooq-site/aman/threats.js', arrayProp: 'CARDS' },
];

for (const f of files) {
  console.log('='.repeat(70));
  console.log(`FILE: ${f.name}`);
  console.log('='.repeat(70));
  
  const content = fs.readFileSync(f.path, 'utf8');
  const mockWin = {};
  eval(`(function(window){ ${content} })(mockWin);`);
  
  const items = mockWin[f.arrayProp];
  console.log(`  Total items: ${items.length}`);
  console.log(`  Total sources: ${Object.keys(mockWin.SOURCES || {}).length}`);
  console.log('');
  
  items.forEach((item, i) => {
    const id = item.id || '(no id)';
    const title = item.title ? (item.title.ar || item.title.en || '') : '';
    console.log(`  ${String(i+1).padStart(3)}. [${id}] ${title.substring(0, 80)}`);
  });
  
  const scenarioIds = items.filter(it => it.id && it.id.startsWith('scenario-'));
  const topicIds = items.filter(it => it.id && !it.id.startsWith('scenario-'));
  console.log(`\n  Scenario-shaped IDs: ${scenarioIds.length}`);
  console.log(`  Topic/other IDs: ${topicIds.length}`);
}
