# @choksheak/vitest-run

A drop-in Vitest CLI that removes the includes restriction and allows the user to run any test file from the CLI.

## Installation

`pnpm add -D @choksheak/vitest-run`

## Usage

In package.json: `vitest-run src/mytest.custom.ts`

**npm:** `npx vitest-run src/mytest.custom.ts`

**pnpm:** `pnpm exec vitest-run src/mytest.custom.ts`
