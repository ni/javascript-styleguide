module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        './lib/typescript-extensions-requiring-type-checking'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        /*
            Overrides to TypeScript recommended rules
            https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        */

        // Notes for recommended configuration: '@typescript-eslint/no-floating-promises': 'error'
        // The jasminewd2 library used by Angular applications will result in a significant number of floating promises.
        // Consider disabling the '@typescript-eslint/no-floating-promises' rule for tests that utilize jasmine expects.

        '@typescript-eslint/unbound-method': ['error', {
            ignoreStatic: true
        }],

        /*
            TypeScript rules outside of the recommended configuration
        */
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],

        /*
            This rule is disabled as the rule requires strictNullChecks and users of the NI eslint configuration
            are not required to use strictNullChecks. Applications may choose to opt-in to strictNullChecks and
            enable this rule if they see fit.
        */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

        /*
            This rule requires the TypeScript strictNullChecks compiler flag. If strictNullChecks is enabled,
            consider enabling this rule.
        */
        '@typescript-eslint/no-unnecessary-condition': 'off',

        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-readonly': 'error',

        /*
            This rule requires adding `readonly` keywords to all levels of non-primitive parameters in order to prevent
             any part of the parameter from being mutated. While the spirit of preferring not to mutate inputs is correct,
            requiring it to be encoded via `readonly` is overly burdensome.
        */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error'
    }
};
