# Contributing

This document covers information needed for the contribution to and release of the eslint rules.

## Guiding Principles

Some overarching principles that are used for defining the rulesets:

1. Start strict and then loosen. We prefer to start with a strict set of opinionated rules and then loosen the ruleset with experience developing under them.
2. Use `error` or `off`; no `warn`. Allowing `warn` tends to increase noise when running lints and hide new or useful messages. 

## Development Scripts

Several scripts are provided for local development to help audit changes to the ruleset.

### Checking for new TypeScript rules

When updating the TypeScript rule npm packages the `npm run print-typescript-properties` command can be used to print all the available rules.

**Note:** This command does not print what rules are currently used but instead prints all the rules that are available.

The TypeScript extension rules (which are rules that extend the behavior of exisiting eslint rules) must be used in place of corresponding eslint rules. Printing the available rules is useful for manually auditing what extension rules need to be used.

### Checking the evaluated rules

The rules build on several exisiting rulesets such as the airbnb ruleset, the eslint recommended ruleset, the TypeScript recommended ruleset, etc. The `npm run print-evaluated-rules` commands helps to audit the final resolved rule values.

When the command is run it will print a JSON representation of each of the maintained rulesets. In addition the command will print the result of some audits that try to detect patterns we want to avoid, such as rules configured with a `warn` severity level.

<!--
## Release workflow

A manual versioning strategy is used based on the `npm version` command workflow.
After one or more changes have been merged into the default branch a project administrator will create a release using the following workflow:

1. Sync a local clone of the repository checked out on the default branch with the latest commits to release.
2. Run the npm version command in the following format:

   `npm version <version_change> -m "%s <change_description>"`

   Note: See [rules for version change](#rules-for-version-change) for notes on choosing the value of `<version_change>`.

   The `npm version` command will perform the following actions:

   1. `npm version` will update the version field in the package.json and package-lock.json.
   2. `npm version` will create a commit message for the updated files using the value passed to the `-m` parameter.

       Note: the literal string `%s` will be substituted with the new version number.
   3. `npm version` will create an annotated git tag on the commit with the version number and message.
3. Push the changes to GitHub with the newly created tag using:

   `git push --follow-tags`
4. The release pipeline will be triggered by the new tag and publish the new package.

Example running the release commands as a project administrator:

```bash
> npm version minor -m "%s Whitespace for function parameters changed"
> git push --follow-tags
```
-->

### Rules for version change

The following are guidelines for when to release as `patch`, `minor`, or `major` versions:

1. Release a `patch` for documentation changes.
2. Make a `minor` release for new rules or changes to rules.

   This results in most updates to the lint rules resulting in breakages during continuous integration and requiring source changes despite a `minor` version change. This was deemed acceptable as projects are expected to use `package-lock.json` files so updates are intentional and we expect updates to be infrequent.
3. Make a `major` release when changes to dependencies are performed such as requiring a newer node.js version, an eslint version update, or peer dependencies are changed.
