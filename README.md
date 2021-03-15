# NI JavaScript and TypeScript Style Guide

![Logo](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/logo.svg)

Welcome to NI's JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started).

## Installation

Install `@ni/eslint-config` and its peer dependencies.

Use [npm view](https://docs.npmjs.com/cli/view.html) to list the correct versions of each package to install yourself.

```bash
npm view @ni/eslint-config peerDependencies
```

Alternatively, use [install-peerdeps](https://www.npmjs.com/package/install-peerdeps) as a shortcut to install the packages for you.

```bash
npx install-peerdeps --dev @ni/eslint-config
```

## Usage

### JavaScript

Extend `@ni` in the default ESLint configuration, ie `.eslintrc.json`.

```json
{
    "extends": "@ni"
}
```

### TypeScript

Extend `@ni/eslint-config/typescript` in the default ESLint configuration. The default `.eslintrc.json` used for development should only extend TypeScript rules and not the TypeScript rules requiring type checking.

```json
{
    "extends": "@ni/eslint-config/typescript",
}
```

### TypeScript Rules Requiring Type Checking

Extend `@ni/eslint-config/typescript-requiring-type-checking` in a separate ESLint configuration. Configure the project's TypeScript configuration. Due to the longer execution time, the separate `.eslintrc-requires-type-checking.json` should only run from an explicit `npm run lint` command invoked by developers and on CIs.

```json
{
    "extends": "@ni/eslint-config/typescript-requiring-type-checking",
    "parserOptions": {
        "project": "tsconfig.json"
    }
}
```

## License

[MIT (c) 2020 National Instruments Corporation](./LICENSE)