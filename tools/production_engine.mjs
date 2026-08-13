import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const calculateSha256 = (str) => crypto.createHash('sha256').update(str).digest('hex').slice(0, 10);

export const getEol = (content) => (content.includes('\r\n') ? '\r\n' : '\n');

export function injectSourcesAndItems(filePath, sourcesDict, itemsArray, arrayVarName, idField = 'id') {
  let content = fs.readFileSync(filePath, 'utf8');
  const eol = getEol(content);
  const initialIdCount = (content.match(new RegExp(`"${idField}":`, 'g')) || []).length;

  // 1. Inject Sources into window.SOURCES
  for (const [srcId, srcObj] of Object.entries(sourcesDict)) {
    if (content.includes(`"${srcId}":`)) {
      continue; // source already declared
    }
    const sourcesIndex = content.indexOf('window.SOURCES = {');
    if (sourcesIndex === -1) {
      throw new Error(`Could not find window.SOURCES in ${filePath}`);
    }
    const openBrace = content.indexOf('{', sourcesIndex);
    const insertPos = openBrace + 1;

    const formattedSource = `${eol}  "${srcId}": ${JSON.stringify(srcObj, null, 2).split('\n').join(eol + '  ')},`;
    content = content.slice(0, insertPos) + formattedSource + content.slice(insertPos);
  }

  // 2. Inject Items into target array
  const lastClosingIndex = content.lastIndexOf('];');
  if (lastClosingIndex === -1) {
    throw new Error(`Could not find closing ]; for ${arrayVarName} in ${filePath}`);
  }

  const serializedItems = itemsArray.map(item => JSON.stringify(item, null, 2))
    .join(',' + eol)
    .split('\n')
    .join(eol);

  const before = content.slice(0, lastClosingIndex - eol.length);
  const after = content.slice(lastClosingIndex);

  const updatedContent = before + ',' + eol + serializedItems + eol + after;
  fs.writeFileSync(filePath, updatedContent, 'utf8');

  // 3. MANDATORY VERIFICATION
  const reRead = fs.readFileSync(filePath, 'utf8');
  const finalIdCount = (reRead.match(new RegExp(`"${idField}":`, 'g')) || []).length;

  console.log(`[VERIFY] ${filePath}: Before count = ${initialIdCount}, After count = ${finalIdCount}`);
  if (finalIdCount <= initialIdCount) {
    throw new Error(`INJECTION FAILED for ${filePath}: count did not increase (${initialIdCount} -> ${finalIdCount})`);
  }

  // Check each new ID exists in reRead
  for (const item of itemsArray) {
    const itemId = item[idField];
    if (!reRead.includes(`"${itemId}"`)) {
      throw new Error(`INJECTION VERIFICATION FAILED: ID "${itemId}" not found in ${filePath}`);
    }
  }

  // Validate syntax in Node with mock window object
  try {
    const mockWindow = {};
    const evalCode = `(function(window){ ${reRead} })(global.window || {});`;
    eval(evalCode);
  } catch (err) {
    throw new Error(`JS SYNTAX EVAL FAILED for ${filePath}: ${err.message}`);
  }

  console.log(`[PASS] ${filePath}: Injected ${itemsArray.length} items successfully.`);
}
