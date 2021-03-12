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

        // None

        /*
            TypeScript rules outside of the recommended configuration
        */
        // '@typescript-eslint/naming-convention': 'error',
        // '@typescript-eslint/no-base-to-string': 'error',
        // '@typescript-eslint/no-confusing-void-expression': 'error',
        // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // '@typescript-eslint/no-unnecessary-condition': 'error',
        // '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        // Available in newer typescript-eslint version
        // '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        // '@typescript-eslint/prefer-includes': 'error',
        // '@typescript-eslint/prefer-nullish-coalescing': 'error',
        // '@typescript-eslint/prefer-readonly': 'error',
        // '@typescript-eslint/prefer-readonly-parameter-types': 'error',
        // '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        // '@typescript-eslint/promise-function-async': 'error',
        // '@typescript-eslint/require-array-sort-compare': 'error',
        // '@typescript-eslint/strict-boolean-expressions': 'error',
        // '@typescript-eslint/switch-exhaustiveness-check': 'error'
    }
};
