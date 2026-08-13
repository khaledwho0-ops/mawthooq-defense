import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { snapshotCurrentState } from './snapshot-current-state.mjs';

const toolsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(toolsDir, '..', '..');
const motazenDir = join(repoRoot, 'motazen');

async function hashTree(rootDir) {
  const hashes = {};

  async function visit(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name, 'en'));

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await visit(fullPath);
        continue;
      }

      const bytes = await readFile(fullPath);
      const filePath = relative(repoRoot, fullPath).replaceAll('\\', '/');
      hashes[filePath] = createHash('sha256').update(bytes).digest('hex');
    }
  }

  await visit(rootDir);
  return hashes;
}

test('snapshot records every Motazen file without editing it', async () => {
  const before = await hashTree(motazenDir);
  const manifest = await snapshotCurrentState(repoRoot, { capturedAt: '2026-08-13T00:00:00.000Z' });

  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.capturedAt, '2026-08-13T00:00:00.000Z');
  assert.deepEqual(
    manifest.motazenFiles.map(({ path }) => path),
    Object.keys(before),
  );
  assert.deepEqual(
    Object.fromEntries(manifest.motazenFiles.map(({ path, sha256 }) => [path, sha256])),
    before,
  );
  assert.deepEqual(await hashTree(motazenDir), before);
});

test('snapshot rejects a missing Motazen directory', async () => {
  await assert.rejects(
    snapshotCurrentState(join(repoRoot, 'missing-repository')),
    /Motazen directory does not exist/,
  );
});

test('checked-in baseline matches the preserved Motazen files', async () => {
  const manifestPath = join(
    repoRoot,
    'docs',
    'MOTAZEN_HANDOFF',
    '00_CURRENT_STATE',
    'file-manifest.json',
  );
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const currentHashes = await hashTree(motazenDir);

  assert.deepEqual(
    Object.fromEntries(manifest.motazenFiles.map(({ path, sha256 }) => [path, sha256])),
    currentHashes,
  );
});
