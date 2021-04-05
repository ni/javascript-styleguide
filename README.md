# NI JavaScript and TypeScript Style Guide
<!-- Load images from raw.githubusercontent.com to enable image rendering when viewed from https://www.npmjs.com/package/@ni/eslint-config -->
![Logo](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/logo.svg)

Welcome to NI's JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started).

## Installation

Install @ni/eslint-config and its peer dependencies.

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

Extend @ni in the ESLint configuration.

```json
{
    "extends": "@ni"
}
```

### TypeScript

Extend @ni/eslint-config/typescript in the ESLint configuration. Configure the @typescript-eslint plugin and the project's TypeScript configuration.

```json
{
    "extends": "@ni/eslint-config/typescript",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "project": "tsconfig.json"
    }
}
```

## Recommended Development Environment Configuration
Modern IDEs can be configured to provide live feedback about ESLint errors.

**Visual Studio Code**

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

![VSCode Extension](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/VSCodeESLintExtension.png)

**JetBrains WebStorm**

Follow the [instructions in the WebStorm documentation](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) to activate and configure ESLint automatically in the Settings/Preferences dialog.


## License

[MIT (c) 2020 National Instruments Corporation](./LICENSE)
