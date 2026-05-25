# npm-library-template

[![npm version](https://img.shields.io/npm/v/%40openhoo%2Fnpm-library-template?label=npm)](https://www.npmjs.com/package/@openhoo/npm-library-template)
[![CI](https://github.com/openhoo/npm-library-template/actions/workflows/ci.yml/badge.svg)](https://github.com/openhoo/npm-library-template/actions/workflows/ci.yml)
![coverage](https://img.shields.io/badge/coverage-92%25%2B-brightgreen)

Template repository for Bun-powered TypeScript npm libraries in the OpenHoo style.

It includes Bun, TypeScript, Biome, tsup, Bun test coverage, hooversion commit and release automation, Bun package publishing, and Git hooks.

## Create a project

Use GitHub's **Use this template** button, or create a project with Bun:

```sh
bun create openhoo/npm-library-template my-library
cd my-library
bun install
```

## Rename checklist

Before publishing a new project from this template, replace the template identity everywhere it is used:

- `package.json`: `name`, `description`, `repository.url`, `bugs.url`, and `homepage`
- `README.md`: title, badges, install command, and package examples
- `hooversion.config.ts`: package `name` and `scopes`
- `.github/workflows/release.yml`: package name in the "Check published package version" step
- `CHANGELOG.md`: package heading

## Install

```sh
bun add @openhoo/npm-library-template
```

## Usage

```ts
import { createGreeting } from "@openhoo/npm-library-template";

console.log(createGreeting("OpenHoo"));
```

## Development

```sh
bun install
bun run check
```

`bun install` configures the tracked Git hooks. The pre-commit hook runs Biome on staged files, and the commit-msg hook validates commit messages with hooversion before Git accepts them.

`bun run check` runs Biome linting and formatting checks with warnings treated as failures, type checking, Bun tests with coverage thresholds, and the package build.

Useful scripts:

```sh
bun run test
bun run test:coverage
bun run typecheck
bun run build
bun run biome:fix
```

## Release

Commits merged to `main` are evaluated by hooversion after CI passes. When a release is produced, the release workflow opens a release PR so the required CI checks still gate `main`; after that PR merges, the workflow creates the tag, creates the GitHub release, and publishes the package with Bun.

Configure `RELEASE_TOKEN` for release PR branches and `NPM_TOKEN` for Bun registry publishing. Until `RELEASE_TOKEN` is configured, the release workflow skips preparation and leaves main CI green.

Use Conventional Commit messages so hooversion can lint commits and determine releases.

## License

MIT. See [LICENSE](LICENSE).
