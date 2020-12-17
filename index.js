module.exports = {
    extends: 'airbnb-base',
    rules: {
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
            Including one class per file is a best practice in general and also recommended by the
            Angular style guide. However, migrating older projects may not be trivial, and there
            may be exceptions for public/internal types that are only used as part of the interface
            to the main type and no other types
        */
        'max-classes-per-file': ['error', 1],

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

        /**
            This rule disallows assigning to function parameters; function parameters are
            treated as const bindings. Some more readable or type-safe alternatives to
            parameter assignment are:
            - use default parameters
            - assign to a new variable with a stricter type and descriptive name
         */
        'no-param-reassign': ['error', { props: false }],

        /**
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
            Higher-order function composition, like Array.forEach(), is preferred for iterative
            loops. For...in statements can be used when performance is a consideration as long as
            guard-for-in is enabled. For...of statements can be used when break is required for
            control flow or the iteration produces side-effects.
        */
        'no-restricted-syntax': [
            'error', {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            }, {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            }],

        /**
            Underscore prefixes are permitted only to indicate fields that are for private internal
            use. Trailing or prefixed underscores that signify other use cases are not allowed.
            Different guidelines may exist for languages that support private fields, such as
            TypeScript. The JavaScript guidelines are subject to change if availability of private
            fields changes in the JavaScript ecosystem.
         */
        'no-underscore-dangle': 'off',

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