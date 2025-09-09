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

        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],

        '@stylistic/comma-dangle': ['error', 'only-multiline'],

        '@stylistic/comma-spacing': ['error', { before: false, after: true }],

        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        '@stylistic/func-call-spacing': ['error', 'never'],

        '@stylistic/indent': ['error', 4],

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        '@stylistic/keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

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

        '@stylistic/no-extra-parens': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all',
            enforceForArrowConditionals: false,
        }],

        '@stylistic/no-extra-semi': 'error',

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

        '@stylistic/object-curly-spacing': ['error', 'always'],

        '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

        '@stylistic/semi': ['error', 'always'],

        '@stylistic/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        '@stylistic/space-infix-ops': 'error',
    }
};
