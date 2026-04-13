#!/usr/bin/env node

import { createVitest } from 'vitest/node';
import path from 'path';

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: vitest-run <files/globs...>');
    process.exit(1);
  }

  const root = process.cwd();

  // Normalize file paths
  const files = args.map(f => path.resolve(root, f));

  // This automatically finds and loads vitest.config.ts or vite.config.ts
  const vitest = await createVitest('test', {
    watch: false,
    // Include global imports by default to simplify test code.
    globals: true,
    // Always override `include` with the input args.
    include: files,
  });

  // Uncomment to see the config json.
  // console.log('Loaded config:', vitest.config);

  await vitest.start();
}

main();
