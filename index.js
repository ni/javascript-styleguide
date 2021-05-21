module.exports = {
    extends: [
        'airbnb-base'
    ],
    rules: {
        /*
            Overrides to airbnb rules:
            https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/index.js
        */

        /*
            Omit arrow function parenthesis where they are not required to improve readability.
        */
        'arrow-parens': ['error', 'as-needed'],

        /*
            A method's use of the this keyword does not always dictate that it should be static,
            particularly when the class must satisfy a derived interface or the caller has an
            instance. However, there are other cases, like when functionality is required without
            an instance, when a static type is appropriate.
        */
        'class-methods-use-this': 'off',

        /*
            This rule is controversial and is defined such that trailing commas are not required but
            may be used if preferred.
        */
        'comma-dangle': ['error', 'only-multiline'],

        /*
            'default-case' Airbnb rule configuration notes:
            Always provide a `default` case in `switch` statements.
            If the default case is logically unreachable, throw an Error.
            If the default case should do nothing, add a comment explaining why
            to indicate that it is an intentional decision.
        */

        /*
            Do not require a newline at the end of every file in favor of reducing the effort to
            satisfy the rule over the proposed advantages on UNIX and with concatenation.
        */
        'eol-last': 'off',

        /*
            There may be exceptions where it is appropriate to disable this rule for older projects
            that make use of Immediately Invoked Function Expressions (IIFE).
        */
        'func-names': ['error', 'as-needed'],

        /*
            There may be exceptions where it is appropriate to disable this rule for projects that
            require ES6 compliant module imports. It is understood that the compliance standards
            may change and that this rule may need to be reevaluated.
        */
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],

        /*
            This indentation size is used to promote consistency.
        */
        indent: ['error', 4],

        /*
            This rule is disabled to avoid errors while developing on Windows and in favor of using
            features of the source control to ensure the correct line endings are checked out and
            committed, e.g. the core.autocrlf git configuration.
        */
        'linebreak-style': 'off',

        /*
            Requires empty lines between multiline class members but avoids the empty line
            for single line members to reduce the amount of vertical space used in a class.
        */
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        /*
            Including one class per file is a best practice in general and also recommended by the
            Angular style guide. However, migrating older projects may not be trivial, and there
            may be exceptions for public/internal types that are only used as part of the interface
            to the main type and no other types.
        */
        'max-classes-per-file': ['error', 1],

        /*
            Line length is not enforced, because of developer preference, lack of consistent enforcement,
            and lack of a fixer. Developers should consider readability and may impose a length in their
            own writing without strict enforcement.
        */
        'max-len': 'off',

        /*
            JavaScript alert, confirm, and prompt functions should be used for debugging purposes only
            as they are obtrusive and have poor customizability.
        */
        'no-alert': 'error',

        /*
            Errors from this rule will identify issues more often than not. However, there may be
            unique exceptions, like bad third-party API design, where this rule can be disabled
            with an inline comment.
        */
        'no-await-in-loop': 'error',

        /*
            Console logs should not be exposed in production environments.
        */
        'no-console': 'error',

        /*
            `continue` statements can improve readability but care should be taken to avoid confusing control flow.
            They should generally be the only statement within an `if` block and should never use labels.
        */
        'no-continue': 'off',

        /*
            Constant expressions in conditions are likely an error. Cases representing an infinite loop
            may utilize the construct `for (;;) {}`.
        */
        'no-constant-condition': 'error',

        /*
            Disallow duplicate conditions in if-else-if chain.
            This rule does not need to be explicitly set after enabled in airbnb:
            https://github.com/airbnb/javascript/blob/1eadb93e377da1e56c3f91f26610e5d0a00738a9/packages/eslint-config-airbnb-base/rules/errors.js#L44
        */
        'no-dupe-else-if': 'error',

        /*
            Disallow assigning to imported bindings.
            This rule does not need to be explicitly set after enabled in airbnb:
            https://github.com/airbnb/javascript/blob/5641278fa1df75ba3b6af2959a553bd682c0ad42/packages/eslint-config-airbnb-base/rules/errors.js#L83
        */
        'no-import-assign': 'error',

        /*
            There may be exceptions, like array iterators, where it is appropriate to disable this
            rule with an inline comment.
        */
        'no-loop-func': 'error',

        /*
            Enforce parenthesis in cases of mixed precedence.
        */
        'no-mixed-operators': ['error', {
            groups: [
                ['%', '**'],
                ['%', '+'],
                ['%', '-'],
                ['%', '*'],
                ['%', '/'],
                ['/', '*'],
                ['&', '|', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!=='],
                ['&&', '||'],
            ],
            allowSamePrecedence: true
        }],

        /*
            This rule disallows assigning to function parameters; function parameters are
            treated as const bindings. Some more readable or type-safe alternatives to
            parameter assignment are:
            - use default parameters
            - assign to a new variable with a stricter type and descriptive name
         */
        'no-param-reassign': ['error', { props: false }],

        /*
            Prefer the '+=' operator. Allow unary operators in for loops, because it is a common
            pattern.
         */
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

        /*
            This rule defends against prototype pollution vulnerabilities that are exploitable with
            XSS.
        */
        'no-prototype-builtins': 'error',

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
            }],

        /*
            Higher-order function composition, like Array.forEach(), is preferred for iterative
            loops. For...in statements can be used when performance is a consideration as long as
            guard-for-in is enabled. For...of statements can be used when break is required for
            control flow or the iteration produces side-effects.
        */
        'no-restricted-syntax': ['error',
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            }, {
                selector: "UnaryExpression[operator='delete']",
                message: 'The `delete` operator is not allowed. If using an object keys as a map, use the ES `Map` data structure instead.'
            }, {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            }],

        /*
            Disallow returning values from setters.
            This rule does not need to be explicitly set after enabled in airbnb:
            https://github.com/airbnb/javascript/blob/5641278fa1df75ba3b6af2959a553bd682c0ad42/packages/eslint-config-airbnb-base/rules/errors.js#L121
        */
        'no-setter-return': 'error',

        /*
            Underscore prefixes are permitted only to indicate fields that are for private internal
            use. Trailing or prefixed underscores that signify other use cases are not allowed.
            Different guidelines may exist for languages that support private fields, such as
            TypeScript. The JavaScript guidelines are subject to change if availability of private
            fields changes in the JavaScript ecosystem.
         */
        'no-underscore-dangle': 'off',

        /*
            Unused variables are not allowed as they're usually an indication of a programming error.
            In situations where they are required like unused callback function arguments,
            indicate that the unused variable is intentional by pre-pending its name with _.
        */
        'no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],

        /*
            Migrating from var is not trivial, so there may be exceptions for older projects.
        */
        'no-var': 'error',

        /*
            Defining classes and variables before their use can cause errors. However, placing
            function declarations at the end of a file is a common programming practice for
            readability.
        */
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        /*
            Allow single line object expressions and patterns, but ensure a reasonable line length.
            All expressions, patterns, and declarations should be consistent.
        */
        'object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
            ImportDeclaration: { consistent: true },
            ExportDeclaration: { consistent: true }
        }],

        /*
            Allow object property shorthand, but disallow method shorthand to differentiate objects
            with functions from classes. However, this rule does not support disallowing method
            shorthands, so they should be corrected in review.
        */
        'object-shorthand': ['error', 'properties', { avoidQuotes: true }],

        /*
            Destructuring should be considered for multi-variable declarations and assignments while simple single
            variable declarations and assignments likely don't require it.
        */
        'prefer-destructuring': 'off',

        /*
            This configuration already supports the JSDoc syntax. Add additional syntax as line or
            block exceptions or markers when necessary.
        */
        'spaced-comment': 'error',

        /*
            Enforcing this rule improves code readability by making its appearance more consistent
            across codebases. Disabling or changing the value of this rule is discouraged.

            We elect not to include a space before function parentheses except for anonymous
            functions. There are advocates in the external JavaScript community and within NI for
            both this configuration and others that include a space. Each of those opinions have
            valid merits. The primary justification is that the syntax without a space will be more
            familiar to the many NI web developers with experience in other languages (e.g. C, C++,
            C#, and Python).
        */
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }]
    },
};
