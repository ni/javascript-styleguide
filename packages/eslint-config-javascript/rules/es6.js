export const es6 = {
    rules: {
        /*
            Developers should consider readability, and no braces may be preferred when unnecessary. However, this rule
            is disabled, because it enforces no braces to an extent that developers must construct unintuitive formats
            that are reasonably satisfied with braces.
            https://eslint.org/docs/rules/arrow-body-style
        */
        'arrow-body-style': 'off',

        /*
            Omit arrow function parenthesis where they are not required to improve readability.
            https://eslint.style/rules/arrow-parens
        */
        '@stylistic/arrow-parens': ['error', 'as-needed'],

        /*
            require space before/after arrow function's arrow
            https://eslint.style/rules/arrow-spacing
        */
        '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

        /*
            verify super() callings in constructors
        */
        'constructor-super': 'error',

        /*
            enforce the spacing around the * in generator functions
            https://eslint.style/rules/generator-star-spacing
        */
        '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],

        /*
            disallow modifying variables of class declarations
            https://eslint.org/docs/rules/no-class-assign
        */
        'no-class-assign': 'error',

        /*
            disallow arrow functions where they could be confused with comparisons
            https://eslint.style/rules/no-confusing-arrow
        */
        '@stylistic/no-confusing-arrow': ['error', {
            allowParens: true,
        }],

        /*
            disallow modifying variables that are declared using const
        */
        'no-const-assign': 'error',

        /*
            disallow duplicate class members
            https://eslint.org/docs/rules/no-dupe-class-members
        */
        'no-dupe-class-members': 'error',

        /*
            disallow importing from the same path more than once
            https://eslint.org/docs/rules/no-duplicate-imports
            replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        */
        'no-duplicate-imports': 'off',

        /*
            disallow symbol constructor
            https://eslint.org/docs/rules/no-new-symbol
        */
        'no-new-symbol': 'error',

        /*
            This rule would ban exports with specific names. Projects can configure it as-needed, but there are no NI-wide restricted exports
            https://eslint.org/docs/rules/no-restricted-exports
        */
        'no-restricted-exports': 'off',

        /*
            disallow specific imports
            https://eslint.org/docs/rules/no-restricted-imports
        */
        'no-restricted-imports': [
            'error',
            {
                paths: [{
                    // The following is recommended by the @angular-eslint/recommended--extra configuration.
                    // https://github.com/angular-eslint/angular-eslint/blob/v15.2.1/packages/eslint-plugin/src/configs/recommended--extra.json
                    name: 'rxjs/Rx',
                    message: 'Please import directly from \'rxjs\' instead'
                }]
            }],

        /*
            disallow to use this/super before super() calling in constructors.
            https://eslint.org/docs/rules/no-this-before-super
        */
        'no-this-before-super': 'error',

        /*
            disallow useless computed property keys
            https://eslint.org/docs/rules/no-useless-computed-key
        */
        'no-useless-computed-key': 'error',

        /*
            disallow unnecessary constructor
            https://eslint.org/docs/rules/no-useless-constructor
        */
        'no-useless-constructor': 'error',

        /*
            disallow renaming import, export, and destructured assignments to the same name
            https://eslint.org/docs/rules/no-useless-rename
        */
        'no-useless-rename': ['error', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],

        /*
            Migrating from var is not trivial, so there may be exceptions for older projects.
        */
        'no-var': 'error',

        /*
            Allow object property shorthand, but disallow method shorthand to differentiate objects
            with functions from classes. However, this rule does not support disallowing method
            shorthands, so they should be corrected in review.
            https://eslint.org/docs/rules/object-shorthand
        */
        'object-shorthand': ['error', 'properties', { avoidQuotes: true }],

        /*
            suggest using arrow functions as callbacks
        */
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],

        /*
            suggest using of const declaration for variables that are never modified after declared
        */
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],

        /*
            Destructuring should be considered for multi-variable declarations and assignments while simple single
            variable declarations and assignments likely don't require it.
            https://eslint.org/docs/rules/prefer-destructuring
        */
        'prefer-destructuring': 'off',

        /*
            disallow parseInt() in favor of binary, octal, and hexadecimal literals
            https://eslint.org/docs/rules/prefer-numeric-literals
        */
        'prefer-numeric-literals': 'error',

        /*
            suggest using Reflect methods where applicable
            https://eslint.org/docs/rules/prefer-reflect
        */
        'prefer-reflect': 'off',

        /*
            use rest parameters instead of arguments
            https://eslint.org/docs/rules/prefer-rest-params
        */
        'prefer-rest-params': 'error',

        /*
            suggest using the spread syntax instead of .apply()
            https://eslint.org/docs/rules/prefer-spread
        */
        'prefer-spread': 'error',

        /*
            suggest using template literals instead of string concatenation
            https://eslint.org/docs/rules/prefer-template
        */
        'prefer-template': 'error',

        /*
            disallow generator functions that do not have yield
            https://eslint.org/docs/rules/require-yield
        */
        'require-yield': 'error',

        /*
            enforce spacing between object rest-spread
            https://eslint.style/rules/rest-spread-spacing
        */
        '@stylistic/rest-spread-spacing': ['error', 'never'],

        /*
            import sorting
            https://eslint.org/docs/rules/sort-imports
        */
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],

        /*
            require a Symbol description
            https://eslint.org/docs/rules/symbol-description
        */
        'symbol-description': 'error',

        /*
            enforce usage of spacing in template strings
            https://eslint.style/rules/template-curly-spacing
        */
        '@stylistic/template-curly-spacing': 'error',

        /*
            enforce spacing around the * in yield* expressions
            https://eslint.style/rules/yield-star-spacing
        */
        '@stylistic/yield-star-spacing': ['error', 'after']
    }
};