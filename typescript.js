module.exports = {
    extends: [
        './index',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        /*
            The following rules are already handled by the TypeScript compiler.
        */
        'import/named': 'off',
        'import/no-unresolved': 'off',

        /*
            The following are extension rules that replace core JavaScript rules to support
            TypeScript. When upgrading, changes to these rules can be identified in the
            typescript-eslint changelog under features and breaking changes.
            https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
        */
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error'],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'error',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
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
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
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
