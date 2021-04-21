<div align="center">
    <div>
        <!-- Load images from raw.githubusercontent.com to enable image rendering when viewed from https://www.npmjs.com/package/@ni/eslint-config -->
        <img src="https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/logo.svg" alt="JavaScript, TypeScript, and NI logo" width="200px">
    </div>
</div>

# NI JavaScript and TypeScript Style Guide
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

### Angular

See [instructions below](#usage-angular) to use a schematic to install dependencies.

## Usage

### JavaScript

Extend `@ni` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats).

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

<a name="usage-angular"></a>
### Angular

ESLint support for Angular is provided by [@angular-eslint](https://github.com/angular-eslint/angular-eslint#readme). It's recommended to use `@angular-eslint/schematics` to
configure ESLint for Angular projects especially when migrating from TSLint.

[Use version 1.x.x](https://github.com/angular-eslint/angular-eslint#supported-angular-cli-versions) for Angular versions less than 11.1.0.

#### Generating a Workspace

Workspaces [generated with @angular-eslint](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-and-eslint) will generate projects with `@angular-eslint`.

```bash
> npm i -g @angular/cli @angular-devkit/core @angular-devkit/schematics @angular-eslint/schematics
> ng new --collection=@angular-eslint/schematics
```

Extend `@ni/eslint-config/typescript` in `.eslintrc.json` for TypeScript and templates.
```json
"overrides": [{
    "files": ["*.ts"],
    ...
    "extends": ["@ni/eslint-config/typescript"]
},
    ...
]
```

#### Migrating a Workspace

1. Install `@angular-eslint/schematics` and `@ni/eslint-config`.

    ```bash
    npm install --save-dev @angular-eslint/schematics @ni/eslint-config.
    ```

2. Follow the `@angular-eslint` [instructions](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint) to run the schematic, listed here for convenience.

    ```bash
    > ng add @angular-eslint/schematics
    > ng g @angular-eslint/schematics:convert-tslint-to-eslint <PROJECT NAME>
    ```

3. Extend `@ni/eslint-config/typescript` in `.eslintrc.json` for TypeScript and templates, [see above](#generating-a-workspace).
4. Remove the rules configured in .eslintrc.json for TypeScript and templates. They are not required with `@ni/eslint-config`.
5. Remove the root tslint.json configuration file, and uninstall TSLint.

## Recommended Development Environment Configuration
Modern IDEs can be configured to provide live feedback about ESLint errors.

**Visual Studio Code**

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

![VSCode Extension](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/VSCodeESLintExtension.png)

**JetBrains WebStorm**

Follow the [instructions in the WebStorm documentation](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) to activate and configure ESLint automatically in the Settings ≫ Preferences dialog.

## Troubleshooting

### JavaScript Heap Out of Memory

Increase the heap allocation using the ```max_old_space_size``` option.
```bash
node --max_old_space_size=8196 ./node_modules/eslint/bin/eslint
```

This option can be adapted for npm scripts, for example.
```json
"ng": "node --max_old_space_size=8196 ./node_modules/@angular/cli/bin/ng",
"lint": "npm run ng -- lint"
```

### Angular Notes on Performance

Deviations from the `@angular-eslint` schematic, `@ni/eslint-config`, and the [parserOptions.project](https://www.npmjs.com/package/@typescript-eslint/parser#user-content-parseroptionsproject) configurations can result in significant performance degredation.

Fully manual configuration [is not recommended](https://github.com/angular-eslint/angular-eslint#going-fully-manual-not-recommended). Read `@angular-eslint`'s [section on performance](https://github.com/angular-eslint/angular-eslint#eslint-configs-and-performance) for information on addressing slow linting processes.

## License

[MIT (c) 2021 National Instruments Corporation](./LICENSE)
