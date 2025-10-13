# Change Log - @ni/eslint-config-javascript

<!-- This log was last generated on Mon, 13 Oct 2025 20:47:22 GMT and should not be manually modified. -->

<!-- Start content -->

## 5.1.0

Mon, 13 Oct 2025 20:47:22 GMT

### Minor changes

- Update the configuration for import/no-extraneous-dependencies to includes all of the supported names for ESLint configuration files. (2351292+TrevorKarjanis@users.noreply.github.com)

## 5.0.0

Wed, 01 Oct 2025 04:25:59 GMT

### Major changes

- Update eslint-config-javascript to be compatible with eslint v9. See [Migration Guide](https://github.com/ni/javascript-styleguide/blob/main/README.md#migrating-to-eslint-flat-configuration-format) for more information. (131153319+gokulprasanth-ni@users.noreply.github.com)

## 4.4.0

Fri, 12 Sep 2025 12:21:59 GMT

### Minor changes

- Migrate deprecated ESLint formatting rules to @stylistic equivalents. See https://eslint.style/rules for the full list of stylistic rules. If your project overrides any deprecated formatting rules, update your config to use the corresponding @stylistic rule name (e.g., replace 'comma-dangle' with '@stylistic/comma-dangle') (gokulprasanth.ravi@emerson.com)

## 4.3.1

Mon, 08 Sep 2025 20:20:07 GMT

### Patches

- Remove Airbnb dependency from style guide (131153319+gokulprasanth-ni@users.noreply.github.com )

## 4.3.0

Thu, 26 Sep 2024 17:18:02 GMT

### Minor changes

- Rule changes for asynchronous code:\n 1. Functions marked `async` must now include an `await`. The rule `'require-await'` changed from `'off'` to `'error'`.\n 2. It is now acceptable for a function to return an awaited promise. The rule `'no-return-await'` changed from `'error'` to `'off'`. (jattasNI@users.noreply.github.com)

## 4.2.2

Wed, 06 Mar 2024 19:12:39 GMT

### Patches

- Update to latest in semantic version range (rajsite@users.noreply.github.com)

## 4.2.1

Thu, 16 Mar 2023 18:44:04 GMT

### Patches

- Make all eslint config deps peers (rajsite@users.noreply.github.com)

## 4.2.0

Tue, 10 Jan 2023 19:27:28 GMT

### Minor changes

- Require curly braces and newlines for all blocks. This modifies the configuration for rules `brace-style` and `curly`. (jattasNI@users.noreply.github.com)

## 4.1.0

Tue, 10 Jan 2023 17:24:45 GMT

### Minor changes

- Enabling several new rules from ESLint 8. These rules have new configuration which may result in new errors:
- `default-case-last`
- `function-call-argument-newline`
- `function-paren-newline`
- `grouped-accessor-pairs`
- `import/no-import-module-exports`
- `import/no-relative-packages`
- `no-constructor-return`
- `no-nonoctal-decimal-escape`
- `no-promise-executor-return`
- `no-unreachable-loop`
- `no-unsafe-optional-chaining`
- `no-useless-backreference`
- `prefer-exponentiation-operator`
- `prefer-regex-literals` (jattasNI@users.noreply.github.com)

## 4.0.0

Thu, 10 Nov 2022 17:18:40 GMT

### Major changes

- Upgrade eslint, @typescript-eslint, @angular-eslint, and eslint-config-airbnb-base with support for Angular 13. (2351292+TrevorKarjanis@users.noreply.github.com)

## 3.1.0

Fri, 07 Jan 2022 16:15:18 GMT

### Minor changes

- Add noUselessIndex to no-useless-path-segments (rajsite@users.noreply.github.com)

## 3.0.3

Fri, 07 Jan 2022 01:15:45 GMT

### Patches

- Update year to trigger build (rajsite@users.noreply.github.com)
- Update year to trigger publish (rajsite@users.noreply.github.com)

## 3.0.1

Wed, 29 Sep 2021 22:10:29 GMT

### Patches

- Place character in quotes in comment (rajsite@users.noreply.github.com)
