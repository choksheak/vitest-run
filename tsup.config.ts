import { defineConfig } from 'tsup';

export default defineConfig({
    clean: true,
    entry: ['src/cli.ts'],
    format: ['esm'],
    // Treats everything in 'dependencies' and 'peerDependencies' as external.
    skipNodeModulesBundle: true,
});
