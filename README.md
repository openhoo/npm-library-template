# npm-library-template

[![npm version](https://img.shields.io/npm/v/%40openhoo%2Fnpm-library-template?label=npm)](https://www.npmjs.com/package/@openhoo/npm-library-template)
[![CI](https://github.com/openhoo/npm-library-template/actions/workflows/ci.yml/badge.svg)](https://github.com/openhoo/npm-library-template/actions/workflows/ci.yml)
![coverage](https://img.shields.io/badge/coverage-92%25%2B-brightgreen)

Template repository for Bun-powered TypeScript npm libraries in the OpenHoo style.

It includes Bun, TypeScript, Biome, tsup, Bun test coverage, hooversion commit and release automation, npm trusted publishing, and Git hooks.

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

Commits merged to `main` are evaluated by hooversion after CI passes. When a release is produced, the release workflow creates the release commit, tag, and GitHub release automatically, then publishes the package through npm trusted publishing.

Configure npm trusted publishing for this repository and package on npmjs.com. The workflow uses Bun for installs, checks, and package metadata lookups; npm publishing uses the registry's trusted OIDC flow and does not require an npm token secret.

If `main` is protected by rulesets that require pull requests, status checks, or code scanning, add `github-actions[bot]` (`User` actor id `41898282`) as an always-allowed bypass actor on those rulesets so Hooversion can push automatic release commits and tags.

Use Conventional Commit messages so hooversion can lint commits and determine releases.

## License

MIT. See [LICENSE](LICENSE).
