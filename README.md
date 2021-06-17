<div align="center">
    <div>
        <!-- Load images from raw.githubusercontent.com to enable image rendering when viewed from https://www.npmjs.com/package/@ni/eslint-config -->
        <img src="https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/logo.svg" alt="JavaScript, TypeScript, and NI logo" width="300" height="100">
    </div>
</div>

# NI JavaScript and TypeScript Style Guide

[![NPM Version](https://img.shields.io/npm/v/@ni/eslint-config.svg)](https://www.npmjs.com/package/@ni/eslint-config)

Welcome to NI's JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started).

## Installation

Install `@ni/eslint-config` and its peer dependencies.

Use [`npm view`](https://docs.npmjs.com/cli/view.html) to list the correct versions of each package to install yourself.

```bash
npm view @ni/eslint-config peerDependencies
```

Alternatively, use [`npx install-peerdeps`](https://www.npmjs.com/package/install-peerdeps) as a shortcut to install the packages for you.

```bash
npx install-peerdeps --dev @ni/eslint-config
```

### Angular Installation

See [instructions below](#angular) to use a schematic to install dependencies.

## Usage

### JavaScript

Extend `@ni` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats).

```js
{
    extends: '@ni'
}
```

### TypeScript

Extend `@ni/eslint-config/typescript` and `@ni/eslint-config/typescript-requiring-type-checking` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats). Set the `parserOptions.project` configuration to the project's TypeScript configuration.

```js
{
    extends: [
        '@ni/eslint-config/typescript',
        '@ni/eslint-config/typescript-requiring-type-checking'
    ],
    parserOptions: {
        project: 'tsconfig.json'
    }
}
```


### Angular

ESLint support for Angular is provided by [`@angular-eslint`](https://github.com/angular-eslint/angular-eslint#readme). It's recommended to use `@angular-eslint/schematics` to
configure ESLint for Angular projects especially when migrating from TSLint. [Use version 1.x.x](https://github.com/angular-eslint/angular-eslint#supported-angular-cli-versions) for Angular versions less than 11.2.0.

1. [Use the schematic](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-and-eslint) to add ESLint to new workspaces, and new applications and libraries will be generated with ESLint as well.
    ```bash
    > ng add @angular-eslint/schematics
    > ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
    ```
2. Extend `@ni/eslint-config/typescript` and `@ni/eslint-config/typescript-requiring-type-checking` in the ESlint configuration for TypeScript and templates.
    ```js
    overrides: [{
        files: ['*.ts'],
        // ...
        extends: [
            '@ni/eslint-config/typescript',
            '@ni/eslint-config/typescript-requiring-type-checking'
        ]
    },
        // ...
    ]
    ```
3. For existing workspaces, [migrate each project](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint). When all projects have been migrated, new applications and libraries will be generated with ESLint as well.
    ```bash
    ng g @angular-eslint/schematics:convert-tslint-to-eslint <PROJECT NAME>
    ```
4. Remove the rules configured in the ESlint configuration for TypeScript and templates. They are not required with `@ni/eslint-config`.
5. Remove the root `tslint.json` configuration file, and uninstall TSLint.

## Recommended Development Environment Configuration
Modern IDEs can be configured to provide live feedback about ESLint errors.

**Visual Studio Code**

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

![VSCode Extension](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/VSCodeESLintExtension.png)

**JetBrains WebStorm**

Follow the [instructions in the WebStorm documentation](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) to activate and configure ESLint automatically in the Settings ≫ Preferences dialog.

### TSConfig
Depending on the JavaScript runtime environment in which you intend to run your code, there may be a base configuration which you can extend from at github.com/tsconfig/bases. New TypeScript applications should extend from the recommended `tsconfig.json`, like so:

Install:
```sh
npm install --save-dev @tsconfig/recommended
yarn add --dev @tsconfig/recommended
```

Add to your tsconfig.json:
```json
"extends": "@tsconfig/recommended/tsconfig.json"
```

The recommended config turns on several strict compiler flags, such as `strictNullChecks` and `noImplicitAny` ([more info here](https://www.typescriptlang.org/tsconfig#strict)). While these checks are strongly encouraged to help prevent runtime errors, it may be difficult for existing projects to adopt them. If `strictNullChecks` is disabled, some linter rules that depend on its presence will also need to be turned off:

*List Rules here*

## Troubleshooting

### JavaScript Heap Out of Memory

Increase the heap allocation using the `max_old_space_size` option.
```bash
node --max_old_space_size=8196 ./node_modules/eslint/bin/eslint
```

This option can be adapted for npm scripts, for example.
```json
"ng": "node --max_old_space_size=8196 ./node_modules/@angular/cli/bin/ng",
"lint": "npm run ng -- lint"
```

## Performance

### TypeScript linting performance

`@ni/eslint-config/typescript-requiring-type-checking` includes rules that require type checking that run slower as they utilize the TypeScript compiler for type information.

If there are situations where the analysis time for enabling the type checked rules is an excessive burden you may consider creating a separate eslint configuration that avoids extending the type checked rules and omits the `parserOptions.project` configuration to run in specific scenarios.

See discussion in the [performance section](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#performance) of the Getting Started - Linting with Type Information guide.

### Angular linting performance

Deviations from the `@angular-eslint schematic`, `@ni/eslint-config`, and the [`parserOptions.project`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) configurations can result in significant performance degredation. Fully manual configuration [is not recommended](https://github.com/angular-eslint/angular-eslint#going-fully-manual-not-recommended). Read `@angular-eslint`'s [section on performance](https://github.com/angular-eslint/angular-eslint#eslint-configs-and-performance) for information on addressing slow linting processes.

## License

[MIT (c) 2021 National Instruments Corporation](./LICENSE)
