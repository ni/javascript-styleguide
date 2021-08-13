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

Follow the [instructions below](#angular) to use a schematic to install dependencies.

## Configuration

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

ESLint support for Angular is provided by [`@angular-eslint`](https://github.com/angular-eslint/angular-eslint#readme). **It's recommended to use `@angular-eslint/schematics` to
configure ESLint for Angular projects** especially when migrating from TSLint. [Use version 1.x.x](https://github.com/angular-eslint/angular-eslint#supported-angular-cli-versions) for Angular versions less than 11.2.0.

1. [Use the schematic](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-and-eslint) to add ESLint to new workspaces **version 12+**, and new applications and libraries will be generated with ESLint as well.
    ```bash
    > ng add @angular-eslint/schematics
    ```
2. Extend `@ni/eslint-config/typescript` and `@ni/eslint-config/typescript-requiring-type-checking` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats) for TypeScript and templates.
    ```js
    overrides: [{
        files: ['*.ts'],
        // ...
        extends: [
            'plugin:@angular-eslint/base',
            '@ni/eslint-config/typescript',
            '@ni/eslint-config/typescript-requiring-type-checking'
        ]
    }, {
        files: ['*.html']
        // ...
        extends: ['plugin:@angular-eslint/template/base'],
    }]
    ```
3. **For existing workspaces**, [migrate each project](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint). When all projects have been migrated, new applications and libraries will be generated with ESLint as well. Enter yes for both options to remove TSLint and ignore its configuration.
    ```bash
    ng g @angular-eslint/schematics:convert-tslint-to-eslint <PROJECT NAME>
    ```

## Usage

After following the above steps to install and configure the linter, you be able to run it from the command line using `npx eslint .`

### NPM commands

To avoid developers needing to remember tooling-specific commands, each project should add standard aliases to its `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint-fix": "eslint . --fix",
  }
}
```

This allows developers to lint using `npm run lint` and to run the automatic fixer using `npm run lint-fix`.

### Add linting to your PR build

Each project's pull request build pipeline should ensure no lint errors can be committed to the repository. Invoke `npm run lint` from your GitHub Actions or Azure Pipelines YML.

## Tips for Adopting this Style Guide

### Enable as early as possible

**New projects** should turn on linting before writing any code. It's easier to fix violations as developers add new code than it is to fix large numbers of lint errors across an existing codebase. 

**Existing projects** are likely to have numerous violations even if they already used a different linter (for example, the deprecated [TSLint](https://www.npmjs.com/package/tslint)) as this ruleset is more strict than most. The recommended flow for adopting this ruleset in an existing repository is:
1. Install the tooling as described above.
1. Disable existing lint tooling.
1. Fix as many simple violations as possible by running the automated fixer and doing targeted manual fixes.
1. If necessary, suppress the remaining violations but fix them as soon as possible in follow up submissions.

Typically steps 1-3 will happen in a single pull request (or a few in quick succession) while step 4 will be split across many subsequent submissions as time permits.

### Globally disable rules that don't apply to a codebase or directory

A project should strive to adopt this configuration as fully as possible, but there are valid reasons to disable a rule across a codebase or specific directory:
1. As a temporary measure to stage adoption of the tooling.
1. As a permanent measure if the rule is incompatible with a project's configuration. The rule configuration files in this package (`index.js`, `typescript.js`, etc) contain comments on each rule if it might commonly be disabled. Some examples include:
   - consider disabling `@typescript-eslint/no-floating-promises` in test code for Angular projects because it is incompatible with the `jasminewd2` library
   - consider disabling `func-names` in older JavaScript projects that make use of immediately-invoked function expressions (IIFEs) where providing a name is not useful
1. As a permanent measure for an existing codebase if the Technical Lead determines it is too costly to fix the violations of that rule.

Each disabled rule (or group of similar rules) should include a comment explaining why it is disabled.

To disable a rule globally, modify the `rules` section of the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats):
```js
    rules: {
        // This rule is disabled as an example
        'import/prefer-default-export': 'off'
    }
```

To disable a rule for a specific file pattern or directory, modify the `overrides` section of the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats):
```js
    overrides: [{
        files: ['*.stories.ts'],
        rules: {
            // This rule is disabled as an example
            'import/no-default-export': 'off'
        }
    }]
```

### Inline disable rules that don't apply to a particular situation

A project should strive to adopt this configuration as fully as possible, but there are valid reasons to disable a rule (also called suppressing a violation) for a specific line, block, or file of code.

The rule configuration files in this package (`index.js`, `typescript.js`, etc) contain comments on each rule if it might commonly be disabled.

ESLint offers several [ways to disable a rule for a line or file](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules). Suppressions should be as targeted as possible and should include a comment explaining the suppression.

### Recommended Development Environment Configuration

Modern IDEs can be configured to provide live feedback about ESLint errors.

**Visual Studio Code**

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

![VSCode Extension](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/resources/VSCodeESLintExtension.png)

You can [configure a repository to prompt developers to install this extension](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) by adding a file called `.vscode/extensions.json` with the following contents:

```json
{
    "recommendations": [
        "dbaeumer.vscode-eslint",
    ]
}
```

Follow the `@angular-eslint` [instructions](https://github.com/angular-eslint/angular-eslint#linting-html-files-and-inline-templates-with-the-vscode-extension-for-eslint) for linting HTML files and inline-templates with Angular.

**JetBrains WebStorm**

Follow the [instructions in the WebStorm documentation](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_activate) to activate and configure ESLint automatically in the Settings ≫ Preferences dialog.

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

If there are situations where the analysis time for enabling the type checked rules is an excessive burden you may consider creating a separate ESLint configuration that avoids extending the type checked rules and omits the `parserOptions.project` configuration to run in specific scenarios.

See discussion in the [performance section](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md#performance) of the Getting Started - Linting with Type Information guide.

### Angular linting performance

Deviations from the `@angular-eslint schematic`, `@ni/eslint-config`, and the [`parserOptions.project`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) configurations can result in significant performance degredation. Fully manual configuration [is not recommended](https://github.com/angular-eslint/angular-eslint#going-fully-manual-not-recommended). Read `@angular-eslint`'s [section on performance](https://github.com/angular-eslint/angular-eslint#eslint-configs-and-performance) for information on addressing slow linting processes.

## License

[MIT (c) 2021 National Instruments Corporation](./LICENSE)
