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

        // Defined by Airbnb
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // Defined by NI
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        // Defined by Airbnb
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

        // Defined by Airbnb
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'off',

        // Defined by Airbnb
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],

        // Defined by NI
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],

        // Defined by Airbnb
        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': 'off',

        // Defined by Airbnb
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

        // Defined by NI
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // Defined by Airbnb
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',

        // Defined by Airbnb
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',

        // Defined by Airbnb
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'off',

        // Defined by Airbnb
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }],

        // Defined by Airbnb
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all',
            enforceForArrowConditionals: false,
        }],

        // Defined by Airbnb
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',

        // Defined by Airbnb
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',

        // Defined by NI
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',

        // Defined by Airbnb
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',

        // Defined by Airbnb
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // Defined by Airbnb
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        // Defined by Airbnb
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',

        // Defined by Airbnb
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        // Defined by Airbnb
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // Defined by NI
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        // Defined by Airbnb
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',

        // Available in newer typescript-eslint version, enable on upgrade.
        // See: https://github.com/ni/javascript-styleguide/pull/18#discussion_r569795937
        // Defined by Airbnb
        'object-curly-spacing': 'off',
        // '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        // Defined by Airbnb
        quotes: 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

        // Defined by Airbnb
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],

        // Defined by NI
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        // Defined by Airbnb
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': 'error',
    }
};
