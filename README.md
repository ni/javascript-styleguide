# NI JavaScript Style Guide

Welcome to NI's internal and external JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started) and [TSLint](https://palantir.github.io/tslint/).

## Installation

```
npm install --save-dev eslint eslint-plugin-import @ni/eslint-config
```

## Usage

Extend @ni in the ESLint configuration.

```json
{
    "extends": "@ni"
}
```

## License

[MIT (c) 2020 NI](./LICENSE)