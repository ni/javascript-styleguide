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
            Developers should consider readability, and no braces may be preferred when unnecessary. However, this rule
            is disabled, because it enforces no braces to an extent that developers must construct unintuitive formats
            that are reasonably satisfied with braces.
        */
        'arrow-body-style': 'off',

        /*
            Omit arrow function parenthesis where they are not required to improve readability.
        */
        'arrow-parens': ['error', 'as-needed'],

        /*
            Use the "one true brace style" in which in which the opening brace of a block is placed 
            on the same line as its corresponding statement or declaration (this matches Airbnb).
            Also require the body within the braces to be on a new line.
        */
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],

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
            Require curly braces {} for all blocks (e.g. if, else, while).
        */
        curly: ['error', 'all'],

        /*
            'default-case' Airbnb rule configuration notes:
            Always provide a `default` case in `switch` statements.
            If the default case is logically unreachable, throw an Error.
            If the default case should do nothing, add a comment explaining why
            to indicate that it is an intentional decision.
        */

        /*
            Enforces that the default case of a switch statement should be listed last, matching common practice.
        */
        'default-case-last': 'error',

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
            This enforces that function call args should either all be on one line or each be on separate lines.
        */
        'function-call-argument-newline': ['error', 'consistent'],

        /*
            This enforces consistent line breaks inside function parentheses. Requires either all or none of the
            arguments to have a newline between them (with newlines permitted around a single argument)
        */
        'function-paren-newline': ['error', 'multiline-arguments'],

        /*
            This enforces that the get and set methods of an accessor be defined next to each other.
        */
        'grouped-accessor-pairs': 'error',

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
            With prefer-default-export disabled, disallow default exports and prefer named exports to enforce consistency,
            consistent names, require more explicit renaming, and reduce the effort spent refactoring. Multi-export files are
            expected, and a trend to prefer named imports was seen in practice.
        */
        'import/no-default-export': 'error',

        /*
            This prevents files from mixing CommonJS exports with ES module imports
        */
        'import/no-import-module-exports': 'error',

        /*
            This prevents imports of packages via a relative path. Packages should always be imported with their scoped name.
        */
        'import/no-relative-packages': 'error',

        /*
            Keep path names short and consistent by avoiding unnecessary relative path segments and consistently
            avoiding usage of index files when possible.
        */
        'import/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true,
                commonjs: true
            }
        ],

        /*
            The primary argument for default exports, promoting single export files, was not experienced in practice.
            Developers were not compelled to exercise this practice, and instead, found defining a default when there is only
            one export to be counterintuitive. While defining a class per file is recommended, multiple exports are not
            disallowed. It was also found that another benefit, renaming an export doesn't affect imports, is usually
            irrelevant, because the import and export names are preferred to be the same. See no-default-export for more
            information.
        */
        'import/prefer-default-export': 'off',

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
            Constructors should not typically return a value.
        */
        'no-constructor-return': 'error',
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
            This disallows \8 and \9 escape sequences in string literals, which fixes an ambiguity in browser behavior.
        */
        'no-nonoctal-decimal-escape': 'error',

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
            This enforces that the function you pass to new Promise() should not return a value (it should call reject/resolve instead).
        */
        'no-promise-executor-return': 'error',

        /*
            This rule defends against prototype pollution vulnerabilities that are exploitable with
            XSS.
        */
        'no-prototype-builtins': 'error',

        /*
            This rule would ban exports with specific names. Projects can configure it as-needed, but there are no NI-wide restricted exports
        */
        'no-restricted-exports': 'off',

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

        'no-restricted-imports': [
            'error',
            {
                paths: [{
                    // The following is recommended by the @angular-eslint/recommended--extra configuration.
                    // https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/src/configs/recommended--extra.json
                    name: 'rxjs/Rx',
                    message: 'Please import directly from \'rxjs\' instead'
                }]
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
            }, {
                selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]',
                message: 'Unexpected property on console object was called'
            }],

        /*
            Disallow returning values from setters.
            This rule does not need to be explicitly set after enabled in airbnb:
            https://github.com/airbnb/javascript/blob/5641278fa1df75ba3b6af2959a553bd682c0ad42/packages/eslint-config-airbnb-base/rules/errors.js#L121
        */
        'no-setter-return': 'error',

        /*
            Trailing and prefixed underscores in identifiers are discouraged, with the following exceptions:

            1. An underscore prefix is permitted on a parameter name to indicate that the parameter is intentionally unused.

            2. In JavaScript code, an underscore prefix is permitted on a field to indicate when it is for private internal
            use. This guideline may change if the JavaScript ecosystem provides a native way to specify private fields.

            3. In TypeScript code, an underscore prefix is permitted on a field when it backs a property of the same name.
            Prefixing other fields to indicate they're private is not necessary.

            Unfortunately this ESLint rule doesn't support the above configuration so the rule is disabled and
            the policy must be enforced manually by developers and code reviewers.
         */
        'no-underscore-dangle': 'off',

        /*
            This rule detects when all code paths within a loop return early, making the loop unneccessary.
        */
        'no-unreachable-loop': 'error',

        /*
            This rule helps find cases where the .? optional chaining operator might result in undefined which isn't being handled.
        */
        'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

        /*
            Unused variables are not allowed as they're usually an indication of a programming error.
            In situations where they are required like unused callback function arguments,
            indicate that the unused variable is intentional by pre-pending its name with `_`.
        */
        'no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true }],

        /*
            This rule prevents certain useless syntax in regular expressions.
        */
        'no-useless-backreference': 'error',

        /*
            Migrating from var is not trivial, so there may be exceptions for older projects.
        */
        'no-var': 'error',

        /*
            'void' shouldn't be used to get an 'undefined' value, but can be used to
            explicitly mark a promise as intentionally not awaited. This aligns with
            the '@typescript-eslint/no-floating-promises' rule configuration.
        */
        'no-void': ['error', { allowAsStatement: true }],

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
            For consistency, when we do exponentiation we should prefer the ** operator over the Math.pow() function.
        */
        'prefer-exponentiation-operator': 'error',

        /*
            For consistency, when we create regular expressions we should use the literal syntax rather than the RexExp() constructor.
        */
        'prefer-regex-literals': 'error',

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
        }],
    },
};
