module.exports = {
    extends: [
        '@ni/eslint-config-typescript'
    ],
    rules: {
        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Deeply nested describe blocks are likely an indication that test files are too complicated.
        */
        'playwright/max-nested-describe': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Conditional logic in tests is usually an indication that a test is attempting to cover too much, and not testing the logic it intends to.
            Each branch of code executing within a conditional statement will usually be better served by a test devoted to it.
        */
        'playwright/no-conditional-in-test': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Instead of element handles (page.$) use locators (page.locator).
        */
        'playwright/no-element-handle': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Instead of page.$eval use locators (page.locator).
        */
        'playwright/no-eval': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            We should generally avoid using {"force: true"} to force Playwright to interact with an element that isn't visible.
            In some cases it is necessary and this rule may be suppressed if explained with a comment.
        */
        'playwright/no-force-option': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Using page.pause should be reserved for debugging, not production code.
        */
        'playwright/no-page-pause': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            We allow skipped tests as a mechanism of temporarily disabling them in production.
            Skipped tests should be accompanied by a comment linking to a work item that tracks re-enabling them.
        */
        'playwright/no-skipped-test': 'off',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Assertions are easier to read when using a dedicated matcher rather than negating the opposite matcher.
        */
        'playwright/no-useless-not': 'error',

        /*
            Playwright marks this as recommended but configures it as 'warn'.
            Waiting for arbitrary amounts of time can cause test intermittency. Instead wait for a specific condition.
        */
        'playwright/no-wait-for-timeout': 'error',

        'playwright/no-restricted-matchers': '',
        'playwright/prefer-lowercase-title': '',
        'playwright/prefer-strict-equal': '',
        'playwright/prefer-to-be': '',
        'playwright/prefer-to-have-length': '',
        'playwright/require-soft-assertions': '',
        'playwright/require-top-level-describe': ''
    },
    overrides: [
    ]
};
