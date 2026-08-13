import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

async function fingerprintMotazen(repoRoot) {
  const motazenDir = join(repoRoot, 'motazen');

  try {
    const directoryStat = await stat(motazenDir);
    if (!directoryStat.isDirectory()) {
      throw new Error('Motazen path is not a directory');
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Motazen directory does not exist: ${motazenDir}`);
    }
    throw error;
  }

  const files = [];

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
      files.push({
        path: relative(repoRoot, fullPath).replaceAll('\\', '/'),
        bytes: bytes.length,
        sha256: createHash('sha256').update(bytes).digest('hex'),
      });
    }
  }

  await visit(motazenDir);
  return files;
}

async function readGitState(repoRoot) {
  const [{ stdout: branch }, { stdout: commit }, { stdout: status }] = await Promise.all([
    execFileAsync('git', ['branch', '--show-current'], { cwd: repoRoot }),
    execFileAsync('git', ['rev-parse', 'HEAD'], { cwd: repoRoot }),
    execFileAsync('git', ['status', '--short'], { cwd: repoRoot }),
  ]);

  return {
    branch: branch.trim(),
    commit: commit.trim(),
    dirty: status.trim().length > 0,
    status: status.trim().split(/\r?\n/u).filter(Boolean),
  };
}

export async function snapshotCurrentState(repoRoot, options = {}) {
  const capturedAt = options.capturedAt ?? new Date().toISOString();
  const motazenFiles = await fingerprintMotazen(repoRoot);
  const git = await readGitState(repoRoot);

  return {
    schemaVersion: 1,
    capturedAt,
    repoRoot,
    preservationRule: 'Read-only baseline. Existing Motazen files and uncommitted work must not be replaced or deleted.',
    git,
    motazenFiles,
  };
}
