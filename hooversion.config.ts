export default {
  branches: ["main"],
  packages: [
    {
      name: "@openhoo/npm-library-template",
      path: ".",
      type: "node",
      manifest: "package.json",
      changelog: "CHANGELOG.md",
      scopes: ["@openhoo/npm-library-template", "npm-library-template"],
      dependencies: [],
    },
  ],
  hooks: {
    afterVersion: ["bun install --lockfile-only --ignore-scripts"],
  },
  github: {
    releases: true,
  },
};
