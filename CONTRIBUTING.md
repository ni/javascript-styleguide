# Contributing

This document covers information needed for the contribution to and release of the eslint rules.

## Guiding Principles

Some overarching principles that are used for defining the rulesets:

1. Start strict and then loosen. We prefer to start with a strict set of opinionated rules and then loosen the ruleset with experience developing under them.
2. Use `error` or `off`; no `warn`. Allowing `warn` tends to increase noise when running lints and hide new or useful messages. 

## Development Scripts

Several scripts are provided for local development to help audit changes to the ruleset.

### Checking for new rules

When updating dependencies the `npm run print-available-rules` command can be used to print all the available rules.

**Note:** This command does not print what rules are currently used but instead prints all the rules that are available.

The TypeScript extension rules (which are rules that extend the behavior of exisiting eslint rules) must be used in place of corresponding eslint rules. Printing the available rules is useful for manually auditing what extension rules need to be used.

### Checking the evaluated rules

The rules build on several exisiting rulesets such as the airbnb ruleset, the eslint recommended ruleset, the TypeScript recommended ruleset, etc. The `npm run print-evaluated-rules` commands helps to audit the final resolved rule values.

When the command is run it will print the result of some audits that try to detect patterns we want to avoid, such as rules configured with a `warn` severity level.

## Smoke tests

The `/tests` folder contains different smoke tests for basic validation of the lint rules. The smoke tests represent a project that has integrated the relevant eslint configuration and has a simple test file that the toolchain is evaluated on.

The goal of the smoke tests is basic validation that the eslint configurations can be run in a project without error.

## Release workflow

### Creating a pull request

Currently the repository only supports contributions by creating a branch and pull request (we hope to support a fork-pull workflow soon). Not all users can create a branch in this repo; contact @rajsite to be granted the necessary privileges.

### Beachball change file

This repository uses [beachball](https://microsoft.github.io/beachball/) to automate publishing its packages to NPM. The basic workflow is as follows:

1. Every pull request that affects a published package must contain a "change file" which specifies how it affects the versions of each package and includes a description of the change. Developers generate this change file by running `npm run change` before creating the pull request.
1. After the pull request completes, a CI pipeline will inspect the change files to generate changelogs, bump versions in package.json, and publish the newly built packages to NPM.

### Rules for version change

The following are guidelines for when to release as `patch`, `minor`, or `major` versions:

1. Release a `patch` for documentation changes.
2. Make a `minor` release for new rules or changes to rules.

   This results in most updates to the lint rules resulting in breakages during continuous integration and requiring source changes despite a `minor` version change. This was deemed acceptable as projects are expected to use `package-lock.json` files so updates are intentional and we expect updates to be infrequent.
3. Make a `major` release when changes to dependencies are performed such as requiring a newer node.js version, an eslint version update, or peer dependencies are changed.
