<div align="center">
    <div>
        <!-- Load images from raw.githubusercontent.com to enable image rendering when viewed from npmjs.com -->
        <img src="https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/docs/logo.svg" alt="JavaScript, TypeScript, and NI logo" width="300" height="100">
    </div>
</div>

# NI JavaScript and TypeScript Style Guide

[![NPM Version](https://img.shields.io/npm/v/@ni/eslint-config-javascript.svg?label=@ni/eslint-config-javascript)](https://www.npmjs.com/package/@ni/eslint-config-javascript)
[![NPM Version](https://img.shields.io/npm/v/@ni/eslint-config-typescript.svg?label=@ni/eslint-config-typescript)](https://www.npmjs.com/package/@ni/eslint-config-typescript)
[![NPM Version](https://img.shields.io/npm/v/@ni/eslint-config-angular.svg?label=@ni/eslint-config-angular)](https://www.npmjs.com/package/@ni/eslint-config-angular)

Welcome to NI's JavaScript and TypeScript linter rules for [ESLint](https://eslint.org/docs/user-guide/getting-started).

## Installation

Install the package for your corresponding language as a development dependency:

- For JavaScript run: 

    ```bash
    npm install -D @ni/eslint-config-javascript
    ```

   Then follow the [JavaScript configuration](#javascript-configuration) instructions.
- For TypeScript run:

    ```bash
    npm install -D @ni/eslint-config-typescript
    ```

    Then follow the [TypeScript configuration](#typescript-configuration) instructions.
- For Angular run:

    ```bash
    npm install -D @ni/eslint-config-angular
    ```

    Then follow the [Angular configuration](#angular-configuration) instructions.

With npm 7 and up the required peer dependencies will be installed automatically and you can move on to [Configuration](#configuration).

If you are using npm 6 or lower, use the following instructions to manually install the required peer dependencies:

Use [`npm view`](https://docs.npmjs.com/cli/view.html) to list the correct versions of each peer package to install yourself. For example, with a JavaScript project run:

```bash
npm view @ni/eslint-config-javascript peerDependencies
```

Alternatively, use [`npx install-peerdeps`](https://www.npmjs.com/package/install-peerdeps) as a shortcut to install the peer packages for you. For example, with a JavaScript project run:

```bash
npx install-peerdeps --dev @ni/eslint-config-javascript
```

## Configuration

After installing the lint configuration packages, follow the configuration instructions for your project language:

### JavaScript configuration

Extend `@ni/eslint-config-javascript` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats).

```js
{
    extends: '@ni/eslint-config-javascript'
}
```

### TypeScript configuration

Extend `@ni/eslint-config-typescript` and `@ni/eslint-config-typescript/requiring-type-checking` in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats). Set the `parserOptions.project` configuration to the project's TypeScript configuration.

```js
{
    extends: [
        '@ni/eslint-config-typescript',
        '@ni/eslint-config-typescript/requiring-type-checking'
    ],
    parserOptions: {
        project: 'tsconfig.json'
    }
}
```

### Angular configuration

ESLint support for Angular is provided by [`@angular-eslint`](https://github.com/angular-eslint/angular-eslint#readme). **It's recommended to use `@angular-eslint/schematics` to
configure ESLint for Angular projects** especially when migrating from TSLint. [Use version 1.x.x](https://github.com/angular-eslint/angular-eslint#supported-angular-cli-versions) for Angular versions less than 11.2.0.

1. [Use the schematic](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-and-eslint) to add ESLint to new workspaces **version 12+**, and new applications and libraries will be generated with ESLint as well.
    ```bash
    > ng add @angular-eslint/schematics
    ```
2. Extend the NI configured rules for Angular and Angular templates in the [ESLint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats). Set the `parserOptions.project` configuration to the project's TypeScript configuration.
    ```js
    overrides: [{
        files: ['*.ts'],
        // ...
        extends: [
            '@ni/eslint-config-angular',
            '@ni/eslint-config-angular/requiring-type-checking'
        ],
        parserOptions: {
            project: 'tsconfig.json'
        }
    }, {
        files: ['*.html'],
        // ...
        extends: ['@ni/eslint-config-angular/template'],
    }]
    ```
3. **For existing workspaces**, [migrate each project](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint). When all projects have been migrated, new applications and libraries will be generated with ESLint as well. Enter yes for both options to remove TSLint and ignore its configuration.
    ```bash
    ng g @angular-eslint/schematics:convert-tslint-to-eslint <PROJECT NAME>
    ```
4. Evaluate the [project specific rule groups](#evaluate-project-specific-rule-groups) to manually add to your lint configuration. For Angular applications in particular, consider enabling the [`[application-prefix]`](#application-prefix) rule group.

## Usage

After following the above steps to install and configure the linter, you should be able to run it from the command line using `npx eslint .`

### NPM commands

To avoid developers needing to remember tooling-specific commands, each project should add standard aliases to its `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
  }
}
```

This allows developers to lint using `npm run lint` and to run the automatic fixer using `npm run lint:fix`.

### Add linting to your PR build

Each project's pull request build pipeline should ensure no lint errors can be committed to the repository. Invoke `npm run lint` from your GitHub Actions or Azure Pipelines YML after installing dependencies and building your application (not shown in the examples).

### GitHub Actions

[Ensure NPM is present on the agent](https://github.com/actions/setup-node/) then run the lint command. 

```yml
jobs:
  build:
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: '16'
      - run: npm run lint
```

### Azure Pipelines

Use the [npm task](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/package/npm?view=azure-devops) to run the lint command.

```yml
  - task: Npm@1
    displayName: 'Lint'
    inputs:
      command: custom
      customCommand: 'run lint'
```

## Tips for Adopting this Style Guide

### Enable as early as possible

**New projects** should turn on linting before writing any code. It's easier to fix violations as developers add new code than it is to fix large numbers of lint errors across an existing codebase.

**Existing projects** are likely to have numerous violations even if they already used a different linter (for example, the deprecated [TSLint](https://www.npmjs.com/package/tslint)) as this ruleset is more strict than most. The recommended flow for adopting this ruleset in an existing repository is:
1. Install the tooling as described above.
2. Disable existing lint tooling.
3. Fix as many simple violations as possible by running the automated fixer and doing targeted manual fixes.
4. If necessary, suppress the remaining violations but fix them as soon as possible in follow up submissions.

Typically steps 1-3 will happen in a single pull request (or a few in quick succession) while step 4 will be split across many subsequent submissions as time permits.

### Evaluate project-specific rule groups

Several sets of rules may be enabled based on requirements of a given project. By default the following sets of rules are in an inert / disabled state, but should be evaluated for your integration.

Text search for the tag associated with a specific rule group in the repository to find the related rules. If enabling a rule group, the rules should be toggled from `'off'` to `'error'` unless the rule comment says otherwise.

#### Application prefix

Tag: [`[application-prefix]`](https://github.com/ni/javascript-styleguide/search?q=%5Bapplication-prefix%5D&type=code)

Prefixes are generally added to named objects such as the selector for Components in Angular applications. Projects should consider enabling this rule group so that names can be consistently prefixed making them easier to share between applications and to minimize the chance of conflicts when using shared libraries.

#### Strict null checks

Tag: [`[strict-null-checks]`](https://github.com/ni/javascript-styleguide/search?q=%5Bstrict-null-checks%5D&type=code)

When `strictNullChecks` are enabled the values `null` and `undefined` are treated as distinct types by the compiler. For example, with `strictNullChecks` enabled, the value `null` could not be directly assigned to a binding of a `Cat` object, ie `const cat: Cat = null` would be a compile error. The `null` value is a distinct type and the binding would have to explicitly state that it can have a `null` value, ie `const cat: Cat | null = null;`.

`strictNullChecks` are a powerful tool for code correctness and give us a way to avoid ["The Billion Dollar Mistake"](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/). However, it can be impractical to retrofit `strictNullChecks` configuration into an existing application and requires expanding your mental model for software development for use in new applications.

As such, `strictNullChecks` are not recommended by default in order to prevent overhead of rule adoption for existing applications.

However, we encourage new applications to leverage `strictNullChecks` for development. Enabling `strictNullChecks` is the TypeScript compiler recommendation and it is enabled by default in new Angular applications.

#### Accessibility

Tag: [`[accessibility]`](https://github.com/ni/javascript-styleguide/search?q=%5Baccessibility%5D&type=code)

There currently isn't an NI organization wide requirement to enforce accessibility in applications. The rule group should be enabled if individual applications prioritize accessibility.

### Globally disable rules that don't apply to a codebase or directory

A project should strive to adopt this configuration as fully as possible, but there are valid reasons to disable a rule across a codebase or specific directory:
1. As a temporary measure to stage adoption of the tooling.
2. As a permanent measure if the rule is incompatible with a project's configuration. The rule configuration files in each package (`packages/eslint-config-*/index.js`) contain comments on each rule if it might commonly be disabled. Some examples include:
   - consider disabling `@angular-eslint/template/i18n` if a project will never be localized
   - consider disabling `func-names` in older JavaScript projects that make use of immediately-invoked function expressions (IIFEs) where providing a name is not useful
3. As a permanent measure for an existing codebase if the Technical Lead determines it is too costly to fix the violations of that rule.

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

#### Visual Studio Code

Install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

<!-- Load images from raw.githubusercontent.com to enable image rendering when viewed from npmjs.com -->
![VSCode Extension](https://raw.githubusercontent.com/ni/javascript-styleguide/HEAD/docs/VSCodeESLintExtension.png)

You can [configure a repository to prompt developers to install this extension](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) by adding a file called `.vscode/extensions.json` with the following contents:

```json
{
    "recommendations": [
        "dbaeumer.vscode-eslint",
    ]
}
```

Follow the `@angular-eslint` [instructions](https://github.com/angular-eslint/angular-eslint#linting-html-files-and-inline-templates-with-the-vscode-extension-for-eslint) for linting HTML files and inline-templates with Angular.

#### JetBrains WebStorm

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

Deviations from the `@angular-eslint schematic`, `@ni/eslint-config-angular`, and the [`parserOptions.project`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) configurations can result in significant performance degredation. Fully manual configuration [is not recommended](https://github.com/angular-eslint/angular-eslint#going-fully-manual-not-recommended). Read `@angular-eslint`'s [section on performance](https://github.com/angular-eslint/angular-eslint#eslint-configs-and-performance) for information on addressing slow linting processes.

## License

[MIT (c) 2021 National Instruments Corporation](./LICENSE)
