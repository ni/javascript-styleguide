module.exports = {
    rules: {
        /*
            enforce line breaks after opening and before closing array brackets
            https://eslint.style/rules/array-bracket-newline
        */
        '@stylistic/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

        /*
            enforce line breaks between array elements
            https://eslint.style/rules/array-element-newline
        */
        '@stylistic/array-element-newline': ['off', { multiline: true, minItems: 3 }],

        /*
            enforce spacing inside array brackets
        */
        '@stylistic/array-bracket-spacing': ['error', 'never'],

        /*
            enforce spacing inside single-line blocks
            https://eslint.org/docs/rules/block-spacing
        */
        '@stylistic/block-spacing': ['error', 'always'],

        /*
            Use the "one true brace style" in which in which the opening brace of a block is placed
            on the same line as its corresponding statement or declaration.
            Also require the body within the braces to be on a new line.
        */
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],

        /*
            require camel case names
        */
        camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

        /*
            enforce or disallow capitalization of the first letter of a comment
            https://eslint.org/docs/rules/capitalized-comments
        */
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],

        /*
            This rule is controversial and is defined such that trailing commas are not required but
            may be used if preferred.
        */
        '@stylistic/comma-dangle': ['error', 'only-multiline'],

        /*
            enforce spacing before and after comma
        */
        '@stylistic/comma-spacing': ['error', { before: false, after: true }],

        /*
            enforce one true comma style
        */
        '@stylistic/comma-style': ['error', 'last', {
            exceptions: {
                ArrayExpression: false,
                ArrayPattern: false,
                ArrowFunctionExpression: false,
                CallExpression: false,
                FunctionDeclaration: false,
                FunctionExpression: false,
                ImportDeclaration: false,
                ObjectExpression: false,
                ObjectPattern: false,
                VariableDeclaration: false,
                NewExpression: false,
            }
        }],

        /*
            disallow padding inside computed properties
        */
        '@stylistic/computed-property-spacing': ['error', 'never'],

        /*
            enforces consistent naming when capturing the current execution context
        */
        'consistent-this': 'off',

        /*
            Do not require a newline at the end of every file in favor of reducing the effort to
            satisfy the rule over the proposed advantages on UNIX and with concatenation.
        */
        '@stylistic/eol-last': 'off',

        /*
            This enforces that function call args should either all be on one line or each be on separate lines.
            https://eslint.style/rules/function-call-argument-newline
        */
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],

        /*
            enforce spacing between functions and their invocations
            https://eslint.style/rules/func-call-spacing
        */
        '@stylistic/func-call-spacing': ['error', 'never'],

        /*
            requires function names to match the name of the variable or property to which they are assigned
            https://eslint.org/docs/rules/func-name-matching
        */
        'func-name-matching': ['off', 'always', {
            includeCommonJSModuleExports: false,
            considerPropertyDescriptor: true,
        }],

        /*
            There may be exceptions where it is appropriate to disable this rule for older projects
            that make use of Immediately Invoked Function Expressions (IIFE).
            https://eslint.org/docs/rules/func-names
        */
        'func-names': ['error', 'as-needed'],

        /*
            enforces use of function declarations or expressions
            https://eslint.org/docs/rules/func-style
        */
        'func-style': ['off', 'expression'],

        /*
            This enforces consistent line breaks inside function parentheses. Requires either all or none of the
            arguments to have a newline between them (with newlines permitted around a single argument)
            https://eslint.style/rules/function-paren-newline
        */
        '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

        /*
            disallow specified identifiers
            https://eslint.org/docs/rules/id-denylist
        */
        'id-denylist': 'off',

        /*
            this option enforces minimum and maximum identifier lengths
            (variable names, property names etc.)
        */
        'id-length': 'off',

        /*
            require identifiers to match the provided regular expression
        */
        'id-match': 'off',

        /*
            Enforce the location of arrow function bodies with implicit returns
            https://eslint.style/rules/implicit-arrow-linebreak
        */
        '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

        /*
            This indentation size is used to promote consistency.
        */
        '@stylistic/indent': ['error', 4],

        /*
            specify whether double or single quotes should be used in JSX attributes
            https://eslint.style/rules/jsx-quotes
        */
        '@stylistic/jsx-quotes': ['off', 'prefer-double'],

        /*
            enforces spacing between keys and values in object literal properties
        */
        '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

        /*
            require a space before & after certain keywords
        */
        '@stylistic/keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        /*
            enforce position of line comments
            https://eslint.org/docs/rules/line-comment-position
        */
        'line-comment-position': ['off', {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true,
        }],

        /*
            This rule is disabled to avoid errors while developing on Windows and in favor of using
            features of the source control to ensure the correct line endings are checked out and
            committed, e.g. the core.autocrlf git configuration.
            https://eslint.style/rules/linebreak-style
        */
        '@stylistic/linebreak-style': 'off',

        /*
            Requires empty lines between multiline class members but avoids the empty line
            for single line members to reduce the amount of vertical space used in a class.
            https://eslint.style/rules/lines-between-class-members
        */
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        /*
            enforces empty lines around comments
        */
        '@stylistic/lines-around-comment': 'off',

        /*
            require or disallow newlines around directives
            https://eslint.org/docs/rules/lines-around-directive
        */
        'lines-around-directive': ['error', {
            before: 'always',
            after: 'always',
        }],

        /*
            Require or disallow logical assignment logical operator shorthand
            https://eslint.org/docs/latest/rules/logical-assignment-operators
        */
        'logical-assignment-operators': ['off', 'always', {
            enforceForIfStatements: true,
        }],

        /*
            specify the maximum depth that blocks can be nested
        */
        'max-depth': ['off', 4],

        /*
            Line length is not enforced, because of developer preference, lack of consistent enforcement,
            and lack of a fixer. Developers should consider readability and may impose a length in their
            own writing without strict enforcement.
            https://eslint.style/rules/max-len
        */
        '@stylistic/max-len': 'off',

        /*
            specify the max number of lines in a file
            https://eslint.org/docs/rules/max-lines
        */
        'max-lines': ['off', {
            max: 300,
            skipBlankLines: true,
            skipComments: true
        }],

        /*
            enforce a maximum function length
            https://eslint.org/docs/rules/max-lines-per-function
        */
        'max-lines-per-function': ['off', {
            max: 50,
            skipBlankLines: true,
            skipComments: true,
            IIFEs: true,
        }],

        /*
            specify the maximum depth callbacks can be nested
        */
        'max-nested-callbacks': 'off',

        /*
            limits the number of parameters that can be used in the function declaration.
        */
        'max-params': ['off', 3],

        /*
            specify the maximum number of statement allowed in a function
        */
        'max-statements': ['off', 10],

        /*
            restrict the number of statements per line
            https://eslint.style/rules/max-statements-per-line
        */
        '@stylistic/max-statements-per-line': ['off', { max: 1 }],

        /*
            enforce a particular style for multiline comments
            https://eslint.org/docs/rules/multiline-comment-style
        */
        'multiline-comment-style': ['off', 'starred-block'],

        /*
            require multiline ternary
            https://eslint.style/rules/multiline-ternary
        */
        '@stylistic/multiline-ternary': ['off', 'never'],

        /*
            require a capital letter for constructors
        */
        'new-cap': ['error', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        }],

        /*
            disallow the omission of parentheses when invoking a constructor with no arguments
            https://eslint.style/rules/new-parens
        */
        '@stylistic/new-parens': 'error',

        /*
            allow/disallow an empty newline after var statement
        */
        'newline-after-var': 'off',

        /*
            https://eslint.org/docs/rules/newline-before-return
        */
        'newline-before-return': 'off',

        /*
            enforces new line after each method call in the chain to make it
            more readable and easy to maintain
            https://eslint.style/rules/newline-per-chained-call
        */
        '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        /*
            disallow use of the Array constructor
        */
        'no-array-constructor': 'error',

        /*
            disallow use of bitwise operators
            https://eslint.org/docs/rules/no-bitwise
        */
        'no-bitwise': 'error',

        /*
            `continue` statements can improve readability but care should be taken to avoid confusing control flow.
            They should generally be the only statement within an `if` block and should never use labels.
            https://eslint.org/docs/rules/no-continue
        */
        'no-continue': 'off',

        /*
            disallow comments inline after code
        */
        'no-inline-comments': 'off',

        /*
            disallow if as the only statement in an else block
            https://eslint.org/docs/rules/no-lonely-if
        */
        'no-lonely-if': 'error',

        /*
            Enforce parenthesis in cases of mixed precedence.
            https://eslint.style/rules/no-mixed-operators
        */
        '@stylistic/no-mixed-operators': ['error', {
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
            disallow mixed spaces and tabs for indentation
        */
        '@stylistic/no-mixed-spaces-and-tabs': 'error',

        /*
            disallow use of chained assignment expressions
            https://eslint.org/docs/rules/no-multi-assign
        */
        'no-multi-assign': ['error'],

        /*
            disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
            https://eslint.style/rules/no-multiple-empty-lines
        */
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

        /*
            disallow negated conditions
            https://eslint.org/docs/rules/no-negated-condition
        */
        'no-negated-condition': 'off',

        /*
            disallow nested ternary expressions
        */
        'no-nested-ternary': 'error',

        /*
            disallow use of the Object constructor
        */
        'no-new-object': 'error',

        /*
            Prefer the '+=' operator. Allow unary operators in for loops, because it is a common
            pattern.
            https://eslint.org/docs/rules/no-plusplus
         */
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

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
            }
        ],

        /*
            disallow space between function identifier and application
            deprecated in favor of func-call-spacing
        */
        '@stylistic/function-call-spacing': 'off',

        /*
            disallow tab characters entirely
        */
        '@stylistic/no-tabs': 'error',

        /*
            disallow the use of ternary operators
        */
        'no-ternary': 'off',

        /*
            disallow trailing whitespace at the end of lines
        */
        '@stylistic/no-trailing-spaces': ['error', {
            skipBlankLines: false,
            ignoreComments: false,
        }],

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
            disallow the use of Boolean literals in conditional expressions
            also, prefer `a || b` over `a ? a : b`
            https://eslint.org/docs/rules/no-unneeded-ternary
        */
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        /*
            disallow whitespace before properties
            https://eslint.style/rules/no-whitespace-before-property
        */
        '@stylistic/no-whitespace-before-property': 'error',

        /*
            enforce the location of single-line statements
            https://eslint.style/rules/nonblock-statement-body-position
        */
        '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        /*
            require padding inside curly braces
        */
        '@stylistic/object-curly-spacing': ['error', 'always'],

        /*
            Allow single line object expressions and patterns, but ensure a reasonable line length.
            All expressions, patterns, and declarations should be consistent.
            https://eslint.style/rules/object-curly-newline
        */
        '@stylistic/object-curly-newline': ['error', {
            ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
            ImportDeclaration: { consistent: true },
            ExportDeclaration: { consistent: true }
        }],

        /* enforce "same line" or "multiple line" on object properties.
            https://eslint.style/rules/object-property-newline
        */
        '@stylistic/object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true,
        }],

        /*
            allow just one var statement per function
        */
        'one-var': ['error', 'never'],

        /*
            require a newline around variable declaration
            https://eslint.style/rules/one-var-declaration-per-line
        */
        '@stylistic/one-var-declaration-per-line': ['error', 'always'],

        /*
            require assignment operator shorthand where possible or prohibit it entirely
            https://eslint.org/docs/rules/operator-assignment
        */
        'operator-assignment': ['error', 'always'],

        /*
            requires operator at the beginning of the line in multiline statements
            https://eslint.style/rules/operator-linebreak
        */
        '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

        /*
            disallow padding within blocks
        */
        '@stylistic/padded-blocks': ['error', {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }, {
            allowSingleLineBlocks: true,
        }],

        /*
            require or disallow padding lines between statements
            https://eslint.org/docs/rules/padding-line-between-statements
        */
        'padding-line-between-statements': 'off',

        /*
            For consistency, when we do exponentiation we should prefer the ** operator over the Math.pow() function.
            https://eslint.org/docs/rules/prefer-exponentiation-operator
        */
        'prefer-exponentiation-operator': 'error',

        /*
            prefer object spread over Object.assign
            https://eslint.org/docs/rules/prefer-object-spread
        */
        'prefer-object-spread': 'error',

        /*
            require quotes around object literal property names
            https://eslint.style/rules/quote-props.html
        */
        '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        /*
            specify whether double or single quotes should be used
        */
        '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

        /*
            do not require jsdoc
            https://eslint.org/docs/rules/require-jsdoc
        */
        'require-jsdoc': 'off',

        /*
            require or disallow use of semicolons instead of ASI
        */
        '@stylistic/semi': ['error', 'always'],

        /*
            enforce spacing before and after semicolons
        */
        '@stylistic/semi-spacing': ['error', { before: false, after: true }],

        /*
            enforce location of semicolons
            https://eslint.style/rules/semi-style
        */
        '@stylistic/semi-style': ['error', 'last'],

        /*
            requires object keys to be sorted
        */
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        /*
            sort variables within the same declaration block
        */
        'sort-vars': 'off',

        /*
            require or disallow space before blocks
        */
        '@stylistic/space-before-blocks': 'error',

        /*
            Enforcing this rule improves readability by making code more consistent.
            We do not include a space before function parentheses except for anonymous
            functions. Opinions differ, but the syntax without a space is more familiar
            to many NI developers with backgrounds in C, C++, C#, and Python.
            https://eslint.style/rules/space-before-function-paren
        */
        '@stylistic/space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        /*
            require or disallow spaces inside parentheses
        */
        '@stylistic/space-in-parens': ['error', 'never'],

        /*
            require spaces around operators
        */
        '@stylistic/space-infix-ops': 'error',

        /*
            require or disallow spaces before/after unary operators
            https://eslint.style/rules/space-unary-ops
        */
        '@stylistic/space-unary-ops': ['error', {
            words: true,
            nonwords: false,
            overrides: {
            },
        }],

        // require or disallow a space immediately following the // or /* in a comment
        // https://eslint.style/rules/spaced-comment
        '@stylistic/spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
                balanced: true,
            }
        }],

        /*
            enforce spacing around colons of switch statements
            https://eslint.style/rules/switch-colon-spacing
        */
        '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

        /*
            require or disallow spacing between template tags and their literals
            https://eslint.style/rules/template-tag-spacing
        */
        '@stylistic/template-tag-spacing': ['error', 'never'],

        /*
            require or disallow the Unicode Byte Order Mark
            https://eslint.org/docs/rules/unicode-bom
        */
        'unicode-bom': ['error', 'never'],

        /*
            require regex literals to be wrapped in parentheses
        */
        '@stylistic/wrap-regex': 'off'
    }
};