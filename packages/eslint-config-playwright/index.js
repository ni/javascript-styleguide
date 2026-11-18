import { defineConfig } from 'eslint/config';
import { typescriptConfig } from '@ni/eslint-config-typescript';
import playwright from 'eslint-plugin-playwright';

export const playwrightConfig = defineConfig([
    typescriptConfig,
    playwright.configs['flat/recommended'],
    {
        rules: {
            /*
                In UI tests it is common to have a loop that performs async operations which must be sequential.
                For example, clicking on a list of elements one after another.
                While there are still some cases where the rule would suggest valid improvements, they are not common
                enough to justify the noise that comes from needing to suppress it.
            */
            'no-await-in-loop': 'off',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                A test without an assertion can't fail on incorrect behavior, so it gives a false sense of coverage.
            */
            'playwright/expect-expect': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                Deeply nested describe blocks are likely an indication that test files are too complicated.
            */
            'playwright/max-nested-describe': 'error',

            /*
                Commented out tests are easy to forget about and lose coverage silently.
                Use a skipped test accompanied by a comment linking to a work item instead.
            */
            'playwright/no-commented-out-tests': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                An assertion that is conditionally skipped can cause a test to pass without verifying anything.
            */
            'playwright/no-conditional-expect': 'error',

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
                Identical titles make it hard to tell which test failed and can cause tests to be filtered or reported incorrectly.
            */
            'playwright/no-identical-title': 'error',

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
                Awaiting a value that is not a promise is unnecessary and misleading about what is asynchronous.
            */
            'playwright/no-useless-await': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                Assertions are easier to read when using a dedicated matcher rather than negating the opposite matcher.
            */
            'playwright/no-useless-not': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                page.waitForSelector is discouraged. Instead use locators with web-first assertions, which wait automatically.
            */
            'playwright/no-wait-for-selector': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                Waiting for arbitrary amounts of time can cause test intermittency. Instead wait for a specific condition.
            */
            'playwright/no-wait-for-timeout': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                Locators are auto-waiting and retryable. Instead of page methods like page.click use page.locator().click().
            */
            'playwright/prefer-locator': 'error',

            /*
                Playwright marks this as recommended but configures it as 'warn'.
                toHaveCount() retries until the count matches, which avoids intermittency compared to asserting on locator.count().
            */
            'playwright/prefer-to-have-count': 'error',

            /*
                In order to have a better failure message, toHaveLength() should be used when asserting expectations on objects length property.
            */
            'playwright/prefer-to-have-length': 'error',

            /*
                Skipped tests are allowed (see no-skipped-test) but must explain why they are skipped.
                The reason should link to a work item that tracks re-enabling the test.
            */
            'playwright/require-annotation-reason': 'error',

            /*
                Having a top-level describe block in each test file is common practice which aligns with patterns we use in Jasmine
            */
            'playwright/require-top-level-describe': 'error'
        }
    }
]);
