# Change Log - @ni/eslint-config-typescript

<!-- This log was last generated on Wed, 26 Nov 2025 16:58:56 GMT and should not be manually modified. -->

<!-- Start content -->

## 5.0.3

Wed, 26 Nov 2025 16:58:56 GMT

### Patches

- Bump @ni/eslint-config-javascript to v5.1.2

## 5.0.2

Mon, 03 Nov 2025 16:15:37 GMT

### Patches

- Updates for npm trusted publishing (1588923+rajsite@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v5.1.1

## 5.0.1

Mon, 13 Oct 2025 20:47:22 GMT

### Patches

- Bump @ni/eslint-config-javascript to v5.1.0

## 5.0.0

Wed, 01 Oct 2025 04:25:59 GMT

### Major changes

- Update eslint-config-typescript to be compatible with eslint v9. Change default rule configuration to assume `strictNullChecks` is enabled. See [Migration Guide](https://github.com/ni/javascript-styleguide/blob/main/README.md#migrating-to-eslint-flat-configuration-format) for more information. (131153319+gokulprasanth-ni@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v5.0.0

## 4.4.4

Fri, 12 Sep 2025 12:21:59 GMT

### Patches

- The migration to stylistic eslint config in the base javascript ruleset no longer requires overrides in the typescript ruleset as stylistic supports both typescript and javascript. (gokulprasanth.ravi@emerson.com)
- Bump @ni/eslint-config-javascript to v4.4.0

## 4.4.3

Mon, 08 Sep 2025 20:20:07 GMT

### Patches

- Remove Airbnb dependency from style guide (131153319+gokulprasanth-ni@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.3.1

## 4.4.2

Mon, 10 Feb 2025 23:13:27 GMT

### Patches

- Allow pascal-case imports and disable consistent-generic-constructors (7282195+m-akinc@users.noreply.github.com)

## 4.4.1

Mon, 10 Feb 2025 19:23:38 GMT

### Patches

- Update version of @typescript-eslint/parser and @typescript-eslint/eslint-plugin (7282195+m-akinc@users.noreply.github.com)

## 4.4.0

Thu, 26 Sep 2024 17:18:02 GMT

### Minor changes

- Rule changes for asynchronous code:\n 1. Functions marked `async` must now include an `await`. The rule `'@typescript-eslint/require-await'` changed from `'off'` to `'error'`. (jattasNI@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.3.0

## 4.3.0

Thu, 26 Sep 2024 17:15:21 GMT

### Minor changes

- Disable `@typescript-eslint/explicit-member-accessibility` for constructors (jattasNI@users.noreply.github.com)

## 4.2.2

Wed, 06 Mar 2024 19:12:39 GMT

### Patches

- Update to latest in semantic version range (rajsite@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.2.2

## 4.2.1

Thu, 16 Mar 2023 18:44:04 GMT

### Patches

- Make all eslint config deps peers (rajsite@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.2.1

## 4.2.0

Tue, 10 Jan 2023 19:27:28 GMT

### Minor changes

- Require curly braces and newlines for all blocks.  This modifies the configuration for rules `brace-style`/`@typescript-eslint/brace-style` and `curly`. (jattasNI@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.2.0

## 4.1.1

Tue, 10 Jan 2023 17:24:45 GMT

### Patches

- Bump @ni/eslint-config-javascript to v4.1.0

## 4.1.0

Fri, 11 Nov 2022 21:48:26 GMT

### Minor changes

- @typescript-eslint/naming-convention now allows properties with custom-element-style-names, commonly used in HTMLElementNameTagMap interfaces (jattasNI@users.noreply.github.com)

## 4.0.0

Thu, 10 Nov 2022 17:18:40 GMT

### Major changes

- Upgrade eslint, @typescript-eslint, @angular-eslint, and eslint-config-airbnb-base with support for Angular 13. (2351292+TrevorKarjanis@users.noreply.github.com)
- Bump @ni/eslint-config-javascript to v4.0.0

## 3.0.5

Fri, 07 Jan 2022 16:15:18 GMT

### Patches

- Bump @ni/eslint-config-javascript to v3.1.0

## 3.0.4

Fri, 07 Jan 2022 01:15:45 GMT

### Patches

- Bump @ni/eslint-config-javascript to v3.0.3

## 3.0.2

Thu, 28 Oct 2021 15:59:19 GMT

### Patches

- Remove comment since manually suppressing rules in jasminewd2 tests is no longer necessary (jattasNI@users.noreply.github.com)

## 3.0.1

Wed, 29 Sep 2021 22:10:29 GMT

### Patches

- Bump @ni/eslint-config-javascript to v3.0.1
