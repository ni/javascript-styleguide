module.exports = {
    rules: {
        /*
            The following are extension rules that replace core JavaScript rules to support
            TypeScript.
            * When upgrading, changes to these rules can be identified in the typescript-eslint
              changelog under features and breaking changes:
              https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#extension-rules
            * In addition, the `npm run dev-print-typescript-props` command can be used to list
              the expected extension properties.
            * The value of the extension properties should match the value chosen by the
              JavaScript / NI configuration.
        */

        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],

        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],

        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'off',

        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }],

        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all',
            enforceForArrowConditionals: false,
        }],

        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',

        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',

        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',

        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],

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
