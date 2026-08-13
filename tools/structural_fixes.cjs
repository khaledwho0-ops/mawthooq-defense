const fs = require('fs');
const path = 'c:/Users/pc/Desktop/EGY/mawthooq-site/motazen/';
const files = fs.readdirSync(path).filter(f => f.endsWith('.html'));

let mainCss = fs.readFileSync(path + 'index.html', 'utf8').match(/<style>([\s\S]*?)<\/style>/);
if(mainCss) {
    fs.writeFileSync(path + 'style.css', mainCss[1]);
    files.forEach(f => {
        let content = fs.readFileSync(path + f, 'utf8');
        content = content.replace(/<style>[\s\S]*?<\/style>/, '<link rel="stylesheet" href="style.css">');
        fs.writeFileSync(path + f, content);
    });
    console.log("Extracted CSS from motazen files and updated htmls.");
} else {
    console.log("Could not find style tag in index.html");
}

const amanPath = 'c:/Users/pc/Desktop/EGY/mawthooq-site/aman/index.html';
let amanContent = fs.readFileSync(amanPath, 'utf8');
amanContent = amanContent.replace('const S = window.CARDS || [];', "const S = (window.CARDS || []).filter(c => c.id.startsWith('scenario-'));");
fs.writeFileSync(amanPath, amanContent);

const hoqoqiPath = 'c:/Users/pc/Desktop/EGY/mawthooq-site/hoqoqi/index.html';
let hoqoqiContent = fs.readFileSync(hoqoqiPath, 'utf8');
hoqoqiContent = hoqoqiContent.replace('const S = window.CARDS || [];', "const S = (window.CARDS || []).filter(c => c.id.startsWith('scenario-'));");
fs.writeFileSync(hoqoqiPath, hoqoqiContent);
console.log("Updated aman and hoqoqi index.html to filter non-scenario cards.");
