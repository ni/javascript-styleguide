module.exports = {
    rules: {
        /*
            The following are extension rules that replace core JavaScript rules to support
            TypeScript.
            * When upgrading, changes to these rules can be identified in the typescript-eslint
              changelog under features and breaking changes:
              https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
            * In addition, the `npm run dev-print-typescript-props` command can be used to list
              the expected extension properties.
            * The value of the extension properties should match the value chosen by the
              JavaScript / Airbnb configuration.
        */

        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error'],

        'default-param-last': 'off',
        // TODO: enable TS rule?

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',

        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],

        'init-declarations': 'off',
        // TODO: enable TS rule?

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'error',

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-duplicate-imports': 'off',
        // TODO: enable TS rule?

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }],

        'no-extra-parens': 'off',
        // TODO: enable TS rule?

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',

        'no-invalid-this': 'off',
        // TODO: enable TS rule?

        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        'no-loss-of-precision': 'off',
        // TODO: enable TS rule?

        'no-magic-numbers': 'off',
        // TODO: enable TS rule?

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'object-curly-spacing': 'off',
        // TODO: enable TS rule?

        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

        semi: 'off',
        '@typescript-eslint/semi': 'error',

        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
    }
};
