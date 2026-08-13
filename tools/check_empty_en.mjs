import fs from 'fs';

const mostaedFile = 'c:/Users/pc/Desktop/EGY/mawthooq-site/mostaed/scenarios.js';
const content = fs.readFileSync(mostaedFile, 'utf8');

let window = {};
new Function('window', content)(window);
const scenarios = window.SCENARIOS;

const emptyEn = scenarios.filter(c => !c.title.en || c.title.en.trim() === '');
console.log(`Found ${emptyEn.length} scenarios with empty English titles.`);

emptyEn.forEach(c => console.log(c.id));
