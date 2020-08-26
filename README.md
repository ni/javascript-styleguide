# NI JavaScript and TypeScript Style Guide

Welcome to NI's JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started) and [TSLint](https://palantir.github.io/tslint/).

## Installation

Install @ni/eslint-config and its peer dependencies.

Use [npm view](https://docs.npmjs.com/cli/view.html) to get the correct versions of each package.

```bash
npm view @ni/eslint-config peerDependencies
```

Alternatively, use a shortcut with [install-peerdeps](https://www.npmjs.com/package/install-peerdeps).

```bash
npx install-peerdeps --dev @ni/eslint-config
```

## Usage

Extend @ni in the ESLint configuration.

```json
{
    "extends": "@ni"
}
```

## License

[MIT (c) 2020 National Instruments Corporation](./LICENSE)