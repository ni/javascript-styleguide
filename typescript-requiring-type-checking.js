module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        './lib/typescript-extensions-requiring-type-checking'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        /*
            Overrides to TypeScript recommended rules:
            https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        */

        /*
            '@typescript-eslint/no-floating-promises' configuration from typescript-eslint recommended notes:
            The jasminewd2 library used by Angular applications will result in a significant number of floating promises.
            Consider disabling the '@typescript-eslint/no-floating-promises' rule for tests that utilize jasmine expects.
        */

        /*
            Allow usage of String.prototype.match for regular expression matching.
        */
        '@typescript-eslint/prefer-regexp-exec': 'off',

        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

        /*
            Overrides to Typescript rules outside of the recommended configuration:
        */

        /*
            The default configuration for this rule requires that enum members
            follow the camelCase style, which doesn't match the existing convention
            within NI and the broader TS community to use PascalCase. The rest of the
            configuration is identitical to the default.
        */
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'enumMember',
                format: ['PascalCase'],
            },
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],

        '@typescript-eslint/no-base-to-string': 'error',

        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],

        /*
            This rule requires the TypeScript strictNullChecks compiler flag. If strictNullChecks is enabled,
            consider enabling this rule.
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

        /*
            Both nullish coalescing (`??`) and logical OR (`||`) may be used
            to provide default values in specific cases.

            Developers should choose the strictest operator for their use case:
            - `??` to provide a default for nullish values (null or undefined).
            - `||` to provide a default for values that are nullish or one of: empty string / boolean false.

            Logical OR checks should not be used for other falsy values such as numbers (0, -0, 0n, NaN).
        */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

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

        /*
            This rule requires the TypeScript strictNullChecks compiler flag. If strictNullChecks is enabled, disallow numbers
            with the following configuration:
            '@typescript-eslint/strict-boolean-expressions': ['error', {
                allowNumber: false,
                allowNullableBoolean: true,
                allowNullableString: true,
                allowNullableNumber: false
            }]
        */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /*
            This rule is made redundant by `default-case` so it will never fire and is disabled.
        */
        '@typescript-eslint/switch-exhaustiveness-check': 'off'
    }
};
