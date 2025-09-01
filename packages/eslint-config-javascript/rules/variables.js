export const variables = {
    rules: {
        /*
            enforce or disallow variable initializations at definition
        */
        'init-declarations': 'off',

        /*
            disallow the catch clause parameter name being the same as a variable in the outer scope
        */
        'no-catch-shadow': 'off',

        /*
            disallow deletion of variables
        */
        'no-delete-var': 'error',

        /*
            disallow labels that share a name with a variable
            https://eslint.org/docs/rules/no-label-var
        */
        'no-label-var': 'error',

        /*
            The Jasmine 'fdescribe' and 'fit' functions are handy for local development but should
            not be committed to production.
        */
        'no-restricted-globals': ['error',
            {
                name: 'fdescribe',
                message: 'Do not commit fdescribe. Use "describe" instead for tests.'
            },
            {
                name: 'fit',
                message: 'Do not commit fit. Use "it" instead for tests.'
            }
        ],

        /*
            disallow declaration of variables already declared in the outer scope
        */
        'no-shadow': 'error',

        /*
            disallow shadowing of names such as arguments
        */
        'no-shadow-restricted-names': 'error',

        /*
            disallow use of undeclared variables unless mentioned in a `global` block
        */
        'no-undef': 'error',

        /*
            disallow use of undefined when initializing variables
        */
        'no-undef-init': 'error',

        /*
            disallow use of undefined variable
            https://eslint.org/docs/rules/no-undefined
        */
        'no-undefined': 'off',

        /*
            Unused variables are not allowed as they're usually an indication of a programming error.
            In situations where they are required like unused callback function arguments,
            indicate that the unused variable is intentional by pre-pending its name with `_`.
        */
        'no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],

        /*
            Defining classes and variables before their use can cause errors. However, placing
            function declarations at the end of a file is a common programming practice for
            readability.
        */
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    }
};