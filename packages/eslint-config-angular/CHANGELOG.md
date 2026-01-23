# Change Log - @ni/eslint-config-angular

<!-- This log was last generated on Fri, 23 Jan 2026 23:19:30 GMT and should not be manually modified. -->

<!-- Start content -->

## 11.1.0

Fri, 23 Jan 2026 23:19:30 GMT

### Minor changes

- Update configuration of `@angular-eslint/template/i18n` to set `allowMarkupInContent: false` (jattasNI@users.noreply.github.com)

## 11.0.1

Tue, 16 Dec 2025 21:24:32 GMT

### Patches

- Update attributes that should not be localized (7282195+m-akinc@users.noreply.github.com)

## 11.0.0

Tue, 16 Dec 2025 16:58:10 GMT

### Major changes

- Update to Typescript 5.8 and Angular 19 (7282195+m-akinc@users.noreply.github.com)

## 10.0.5

Fri, 12 Dec 2025 16:36:33 GMT

### Patches

- Bump @ni/eslint-config-typescript to v5.0.5
- Bump @ni/eslint-config-javascript to v5.1.4

## 10.0.3

Wed, 26 Nov 2025 16:58:56 GMT

### Patches

- Bump @ni/eslint-config-typescript to v5.0.3
- Bump @ni/eslint-config-javascript to v5.1.2

## 10.0.2

Mon, 03 Nov 2025 16:15:37 GMT

### Patches

- Updates for npm trusted publishing (1588923+rajsite@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v5.0.2
- Bump @ni/eslint-config-javascript to v5.1.1

## 10.0.1

Mon, 13 Oct 2025 20:47:22 GMT

### Patches

- Bump @ni/eslint-config-typescript to v5.0.1
- Bump @ni/eslint-config-javascript to v5.1.0

## 10.0.0

Wed, 01 Oct 2025 04:25:59 GMT

### Major changes

- Update eslint-config-angular to be compatible with eslint v9. Change default rule configuration to assume `strictNullChecks` is enabled. See [Migration Guide](https://github.com/ni/javascript-styleguide/blob/main/README.md#migrating-to-eslint-flat-configuration-format) for more information. (131153319+gokulprasanth-ni@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v5.0.0
- Bump @ni/eslint-config-javascript to v5.0.0

## 9.0.7

Fri, 12 Sep 2025 12:21:59 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.4.4

## 9.0.6

Mon, 08 Sep 2025 20:20:07 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.4.3

## 9.0.5

Thu, 10 Apr 2025 18:44:41 GMT

### Patches

- Add 'data-telemetry-id' to support telemetry use-cases. (jonathan.meyer@ni.com)

## 9.0.4

Mon, 07 Apr 2025 17:22:43 GMT

### Patches

- Add Spright chat attribute to i18n ignore list (jattasNI@users.noreply.github.com)

## 9.0.3

Wed, 26 Feb 2025 22:50:09 GMT

### Patches

- Add more cdk attributes to material options to silence @angular-eslint/template/i18n rule. (26874831+atmgrifter00@users.noreply.github.com)

## 9.0.2

Tue, 25 Feb 2025 19:54:57 GMT

### Patches

- Add cdkDragLockAxis to material set to silence @angular-eslint/template/i18n rule (26874831+atmgrifter00@users.noreply.github.com)

## 9.0.1

Mon, 10 Feb 2025 23:13:27 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.4.2

## 9.0.0

Mon, 10 Feb 2025 19:23:38 GMT

### Major changes

- Update to Angular 18 (7282195+m-akinc@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v4.4.1

## 8.2.1

Fri, 18 Oct 2024 22:00:56 GMT

### Patches

- Exempt groupableParentColumnId from i18n rule (7282195+m-akinc@users.noreply.github.com)

## 8.2.0

Thu, 26 Sep 2024 17:18:02 GMT

### Minor changes

- Rule changes for asynchronous code:\n 1. Functions marked `async` must now include an `await`. The rule `'@typescript-eslint/require-await'` changed from `'off'` to `'error'`.\n 2. Test code must now correctly handle promises. The rule `'@typescript-eslint/no-floating-promises'` changed from `'off'` to `'error'`. (jattasNI@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v4.4.0

## 8.1.0

Thu, 26 Sep 2024 17:15:21 GMT

### Minor changes

- Bump @ni/eslint-config-typescript to v4.3.0

## 8.0.1

Thu, 08 Aug 2024 22:33:17 GMT

### Patches

- Exempt parentIdFieldName from i18n rule (7282195+m-akinc@users.noreply.github.com)

## 8.0.0

Thu, 18 Jul 2024 15:42:14 GMT

### Major changes

- Update to Angular 17 (7282195+m-akinc@users.noreply.github.com)

## 7.0.7

Fri, 12 Jul 2024 15:38:31 GMT

### Patches

- Add 'menu-slot' i18n exception for the menu-button table column (20542556+mollykreis@users.noreply.github.com)

## 7.0.6

Mon, 20 May 2024 14:25:28 GMT

### Patches

- Add more nimble i18n attr exceptions (rajsite@users.noreply.github.com)

## 7.0.5

Fri, 17 May 2024 21:03:50 GMT

### Patches

- Add another SystemLink attribute for template/i18n (jattasNI@users.noreply.github.com)

## 7.0.4

Fri, 17 May 2024 16:23:37 GMT

### Patches

- Add missing i18n attributes for SystemLinkShared (jattasNI@users.noreply.github.com)

## 7.0.3

Fri, 17 May 2024 15:14:38 GMT

### Patches

- Move appearanceVariant to systemlink list (rajsite@users.noreply.github.com)

## 7.0.2

Fri, 17 May 2024 14:16:39 GMT

### Patches

- Add appearanceVariant to the list of i18n attributes to ignore. (2351292+TrevorKarjanis@users.noreply.github.com)

## 7.0.1

Wed, 15 May 2024 23:12:28 GMT

### Patches

- Update @angular-eslint/template/i18n to ignore common nimble and sl-lib attributes (418101+rbell517@users.noreply.github.com)

## 7.0.0

Wed, 10 Apr 2024 17:56:39 GMT

### Major changes

- Update to Angular 16 (7282195+m-akinc@users.noreply.github.com)

## 6.0.1

Wed, 06 Mar 2024 19:12:39 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.2.2

## 6.0.0

Mon, 13 Nov 2023 18:26:28 GMT

### Major changes

- Update to Angular 15 (20542556+mollykreis@users.noreply.github.com)

## 5.1.1

Fri, 10 Nov 2023 21:04:10 GMT

### Patches

- Revert addition of Angular 15 support (20542556+mollykreis@users.noreply.github.com)

## 5.1.0

Thu, 02 Nov 2023 17:32:58 GMT

### Minor changes

- Add support for Angular 15 (20542556+mollykreis@users.noreply.github.com)

## 5.0.4

Thu, 16 Mar 2023 18:44:04 GMT

### Patches

- Make all eslint config deps peers (rajsite@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v4.2.1

## 5.0.3

Tue, 10 Jan 2023 19:27:28 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.2.0

## 5.0.2

Tue, 10 Jan 2023 17:24:45 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.1.1

## 5.0.1

Fri, 11 Nov 2022 21:48:26 GMT

### Patches

- Bump @ni/eslint-config-typescript to v4.1.0

## 5.0.0

Thu, 10 Nov 2022 17:31:16 GMT

### Major changes

- Upgrade eslint, @typescript-eslint, @angular-eslint, and eslint-config-airbnb-base with support for Angular 14. (2351292+TrevorKarjanis@users.noreply.github.com)

## 4.0.0

Thu, 10 Nov 2022 17:18:40 GMT

### Major changes

- Upgrade eslint, @typescript-eslint, @angular-eslint, and eslint-config-airbnb-base with support for Angular 13. (2351292+TrevorKarjanis@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v4.0.0

## 3.4.0

Thu, 27 Oct 2022 19:11:59 GMT

### Minor changes

- Disable and document @angular-eslint/template/cyclomatic-complexity. (2351292+TrevorKarjanis@users.noreply.github.com)

## 3.3.1

Fri, 07 Jan 2022 16:15:18 GMT

### Patches

- Bump @ni/eslint-config-typescript to v3.0.5

## 3.3.0

Fri, 07 Jan 2022 01:54:08 GMT

### Minor changes

- Disable @angular-eslint/component-max-inline-declarations in tests (jattasNI@users.noreply.github.com)

## 3.2.2

Fri, 07 Jan 2022 01:15:45 GMT

### Patches

- Bump @ni/eslint-config-typescript to v3.0.4

## 3.2.0

Tue, 09 Nov 2021 18:23:18 GMT

### Minor changes

- Don't require i18n attributes to have custom IDs (molly.kreis@ni.com)

## 3.1.0

Thu, 28 Oct 2021 15:59:19 GMT

### Minor changes

- Add new config for rules requiring type checking and disable 3 rules in tests (jattasNI@users.noreply.github.com)
- Disable max-classes-per-file for Angular tests (jattasNI@users.noreply.github.com)
- Bump @ni/eslint-config-typescript to v3.0.2

## 3.0.1

Wed, 29 Sep 2021 22:10:29 GMT

### Patches

- Bump @ni/eslint-config-typescript to v3.0.1
