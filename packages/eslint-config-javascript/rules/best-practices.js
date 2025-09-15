export const bestPractices = {
    rules: {
        /*
            enforces getter/setter pairs in objects
            https://eslint.org/docs/rules/accessor-pairs
        */
        'accessor-pairs': 'off',

        /*
            enforces return statements in callbacks of array's methods
            https://eslint.org/docs/rules/array-callback-return
        */
        'array-callback-return': ['error', { allowImplicit: true }],

        /*
            treat var statements as if they were block scoped
            https://eslint.org/docs/rules/block-scoped-var
        */
        'block-scoped-var': 'error',

        /*
            specify the maximum cyclomatic complexity allowed in a program
            https://eslint.org/docs/rules/complexity
        */
        complexity: ['off', 20],

        /*
            A method's use of the this keyword does not always dictate that it should be static,
            particularly when the class must satisfy a derived interface or the caller has an
            instance. However, there are other cases, like when functionality is required without
            an instance, when a static type is appropriate.
            https://eslint.org/docs/rules/class-methods-use-this
        */
        'class-methods-use-this': 'off',

        /*
            require return statements to either always or never specify values
            https://eslint.org/docs/rules/consistent-return
        */
        'consistent-return': 'error',

        /*
            Require curly braces {} for all blocks (e.g. if, else, while).
            https://eslint.org/docs/rules/curly
        */
        curly: ['error', 'all'],

        /*
            require default case in switch statements
            https://eslint.org/docs/rules/default-case
        */
        'default-case': ['error', { commentPattern: '^no default$' }],

        /*
            Always provide a `default` case in `switch` statements.
            If the default case is logically unreachable, throw an Error.
            If the default case should do nothing, add a comment explaining why
            to indicate that it is an intentional decision.
        */

        /*
            Enforces that the default case of a switch statement should be listed last, matching common practice.
            https://eslint.org/docs/rules/default-case-last
        */
        'default-case-last': 'error',

        /*
            https://eslint.org/docs/rules/default-param-last
        */
        'default-param-last': 'error',

        /*
            encourages use of dot notation whenever possible
            https://eslint.org/docs/rules/dot-notation
        */
        'dot-notation': ['error', { allowKeywords: true }],

        /*
            enforces consistent newlines before or after dots
            https://eslint.style/rules/dot-location
        */
        '@stylistic/dot-location': ['error', 'property'],

        /*
            require the use of === and !==
            https://eslint.org/docs/rules/eqeqeq
        */
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        /*
            This enforces that the get and set methods of an accessor be defined next to each other.\
            https://eslint.org/docs/rules/grouped-accessor-pairs
        */
        'grouped-accessor-pairs': 'error',

        /*
            make sure for-in loops have an if statement
            https://eslint.org/docs/rules/guard-for-in
        */
        'guard-for-in': 'error',

        /*
            Including one class per file is a best practice in general and also recommended by the
            Angular style guide. However, migrating older projects may not be trivial, and there
            may be exceptions for public/internal types that are only used as part of the interface
            to the main type and no other types.
            https://eslint.org/docs/rules/max-classes-per-file
        */
        'max-classes-per-file': ['error', 1],

        /*
            JavaScript alert, confirm, and prompt functions should be used for debugging purposes only
            as they are obtrusive and have poor customizability.
            https://eslint.org/docs/rules/no-alert
        */
        'no-alert': 'error',

        /*
            disallow use of arguments.caller or arguments.callee
            https://eslint.org/docs/rules/no-caller
        */
        'no-caller': 'error',

        /*
            disallow lexical declarations in case/default clauses
            https://eslint.org/docs/rules/no-case-declarations
        */
        'no-case-declarations': 'error',

        /*
            Constructors should not typically return a value.
            https://eslint.org/docs/rules/no-constructor-return
        */
        'no-constructor-return': 'error',

        /*
            disallow division operators explicitly at beginning of regular expression
            https://eslint.org/docs/rules/no-div-regex
        */
        'no-div-regex': 'off',

        /*
            disallow else after a return in an if
            https://eslint.org/docs/rules/no-else-return
        */
        'no-else-return': ['error', { allowElseIf: false }],

        /*
            disallow empty functions, except for standalone funcs/arrows
            https://eslint.org/docs/rules/no-empty-function
        */
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],

        /*
            disallow empty destructuring patterns
            https://eslint.org/docs/rules/no-empty-pattern
        */
        'no-empty-pattern': 'error',

        /*
            Disallow empty static blocks
            https://eslint.org/docs/latest/rules/no-empty-static-block
        */
        'no-empty-static-block': 'off',

        /*
            disallow comparisons to null without a type-checking operator
            https://eslint.org/docs/rules/no-eq-null
        */
        'no-eq-null': 'off',

        /*
            disallow use of eval()
            https://eslint.org/docs/rules/no-eval
        */
        'no-eval': 'error',

        /*
            disallow adding to native types
            https://eslint.org/docs/rules/no-extend-native
        */
        'no-extend-native': 'error',

        /*
            disallow unnecessary function binding
            https://eslint.org/docs/rules/no-extra-bind
        */
        'no-extra-bind': 'error',

        /*
            disallow Unnecessary Labels
            https://eslint.org/docs/rules/no-extra-label
        */
        'no-extra-label': 'error',

        /*
            disallow fallthrough of case statements
            https://eslint.org/docs/rules/no-fallthrough
        */
        'no-fallthrough': 'error',

        /*
            disallow the use of leading or trailing decimal points in numeric literals
            https://eslint.style/rules/no-floating-decimal
        */
        '@stylistic/no-floating-decimal': 'error',

        /*
            disallow reassignments of native objects or read-only globals
            https://eslint.org/docs/rules/no-global-assign
        */
        'no-global-assign': ['error', { exceptions: [] }],

        /*
            deprecated in favor of no-global-assign
            https://eslint.org/docs/rules/no-native-reassign
        */
        'no-native-reassign': 'off',

        /*
            disallow implicit type conversions
            https://eslint.org/docs/rules/no-implicit-coercion
        */
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],

        /*
            disallow var and named functions in global scope
            https://eslint.org/docs/rules/no-implicit-globals
        */
        'no-implicit-globals': 'off',

        /*
            disallow use of eval()-like methods
            https://eslint.org/docs/rules/no-implied-eval
        */
        'no-implied-eval': 'error',

        /*
            disallow this keywords outside of classes or class-like objects
            https://eslint.org/docs/rules/no-invalid-this
        */
        'no-invalid-this': 'off',

        /*
            disallow usage of __iterator__ property
            https://eslint.org/docs/rules/no-iterator
        */
        'no-iterator': 'error',

        /*
            disallow use of labels for anything other than loops and switches
            https://eslint.org/docs/rules/no-labels
        */
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        /*
            disallow unnecessary nested blocks
            https://eslint.org/docs/rules/no-lone-blocks
        */
        'no-lone-blocks': 'error',

        /*
            There may be exceptions, like array iterators, where it is appropriate to disable this
            rule with an inline comment.
            https://eslint.org/docs/rules/no-loop-func
        */
        'no-loop-func': 'error',

        /*
            disallow magic numbers
            https://eslint.org/docs/rules/no-magic-numbers
        */
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        /*
            disallow use of multiple spaces
            https://eslint.style/rules/no-multi-spaces
        */
        '@stylistic/no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],

        /*
            disallow use of multiline strings
            https://eslint.org/docs/rules/no-multi-str
        */
        'no-multi-str': 'error',

        /*
            disallow use of new operator when not part of the assignment or comparison
            https://eslint.org/docs/rules/no-new
        */
        'no-new': 'error',

        /*
            disallow use of new operator for Function object
            https://eslint.org/docs/rules/no-new-func
        */
        'no-new-func': 'error',

        /*
            disallows creating new instances of String, Number, and Boolean
            https://eslint.org/docs/rules/no-new-wrappers
        */
        'no-new-wrappers': 'error',

        /*
            This disallows \8 and \9 escape sequences in string literals, which fixes an ambiguity in browser behavior.
            https://eslint.org/docs/rules/no-nonoctal-decimal-escape
        */
        'no-nonoctal-decimal-escape': 'error',

        /*
            Disallow calls to the Object constructor without an argument
            https://eslint.org/docs/latest/rules/no-object-constructor
        */
        'no-object-constructor': 'off',

        /*
            disallow use of (old style) octal literals
            https://eslint.org/docs/rules/no-octal
        */
        'no-octal': 'error',

        /*
            disallow use of octal escape sequences in string literals, such as
            var foo = 'Copyright \251';
            https://eslint.org/docs/rules/no-octal-escape
        */
        'no-octal-escape': 'error',

        /*
            This rule disallows assigning to function parameters; function parameters are
            treated as const bindings. Some more readable or type-safe alternatives to
            parameter assignment are:
            - use default parameters
            - assign to a new variable with a stricter type and descriptive name
         */
        'no-param-reassign': ['error', { props: false }],

        /*
            disallow usage of __proto__ property
            https://eslint.org/docs/rules/no-proto
        */
        'no-proto': 'error',

        /*
            disallow declaring the same variable more than once
            https://eslint.org/docs/rules/no-redeclare
        */
        'no-redeclare': 'error',

        /*
            disallow certain object properties
            https://eslint.org/docs/rules/no-restricted-properties
        */
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead',
        }, {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead',
        }, {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        }],

        /*
            disallow use of assignment in return statement
            https://eslint.org/docs/rules/no-return-assign
        */
        'no-return-assign': ['error', 'always'],

        /*
            This rule is deprecated since ESLint 8.46.0 because returning an awaited value no longer generates an extra microtask.
            https://eslint.org/docs/latest/rules/no-return-await
        */
        'no-return-await': 'off',

        /*
            disallow use of `javascript:` urls.
            https://eslint.org/docs/rules/no-script-url
        */
        'no-script-url': 'error',

        /*
            disallow self assignment
            https://eslint.org/docs/rules/no-self-assign
        */
        'no-self-assign': ['error', {
            props: true,
        }],

        /*
            disallow comparisons where both sides are exactly the same
            https://eslint.org/docs/rules/no-self-compare
        */
        'no-self-compare': 'error',

        /*
            disallow use of comma operator
            https://eslint.org/docs/rules/no-sequences
        */
        'no-sequences': 'error',

        /*
            restrict what can be thrown as an exception
            https://eslint.org/docs/rules/no-throw-literal
        */
        'no-throw-literal': 'error',

        /*
            disallow unmodified conditions of loops
            https://eslint.org/docs/rules/no-unmodified-loop-condition
        */
        'no-unmodified-loop-condition': 'off',

        /*
            disallow usage of expressions in statement position
            https://eslint.org/docs/rules/no-unused-expressions
        */
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        }],

        /*
            disallow unused labels
            https://eslint.org/docs/rules/no-unused-labels
        */
        'no-unused-labels': 'error',

        /*
            disallow unnecessary .call() and .apply()
            https://eslint.org/docs/rules/no-useless-call
        */
        'no-useless-call': 'off',

        /*
            Disallow unnecessary catch clauses
            https://eslint.org/docs/rules/no-useless-catch
        */
        'no-useless-catch': 'error',

        /*
            disallow useless string concatenation
            https://eslint.org/docs/rules/no-useless-concat
        */
        'no-useless-concat': 'error',

        /*
            disallow unnecessary string escaping
            https://eslint.org/docs/rules/no-useless-escape
        */
        'no-useless-escape': 'error',

        /*
            disallow redundant return; keywords
            https://eslint.org/docs/rules/no-useless-return
        */
        'no-useless-return': 'error',

        /*
            'void' shouldn't be used to get an 'undefined' value, but can be used to
            explicitly mark a promise as intentionally not awaited. This aligns with
            the '@typescript-eslint/no-floating-promises' rule configuration.
            https://eslint.org/docs/rules/no-void
        */
        'no-void': ['error', { allowAsStatement: true }],

        /*
            disallow usage of configurable warning terms in comments: e.g. todo
            https://eslint.org/docs/rules/no-warning-comments
        */
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        /*
            disallow use of the with statement
            https://eslint.org/docs/rules/no-with
        */
        'no-with': 'error',

        /*
            require using Error objects as Promise rejection reasons
            https://eslint.org/docs/rules/prefer-promise-reject-errors
        */
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        /*
            Suggest using named capture group in regular expression
            https://eslint.org/docs/rules/prefer-named-capture-group
        */
        'prefer-named-capture-group': 'off',

        /*
            Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
            https://eslint.org/docs/rules/prefer-object-has-own
            TODO: semver-major: enable thus rule, once eslint v8.5.0 is required
        */
        'prefer-object-has-own': 'off',

        /*
            For consistency, when we create regular expressions we should use the literal syntax rather than the RexExp() constructor.
            https://eslint.org/docs/rules/prefer-regex-literals
        */
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

        /*
            require use of the second argument for parseInt()
            https://eslint.org/docs/rules/radix
        */
        radix: 'error',

        /*
            Asynchronous functions that don’t use await might not need to be asynchronous functions and could be the unintentional result of refactoring.
            https://eslint.org/docs/rules/require-await
        */
        'require-await': 'error',

        /*
            Enforce the use of u flag on RegExp
            https://eslint.org/docs/rules/require-unicode-regexp
        */
        'require-unicode-regexp': 'off',

        /*
            requires to declare all vars on top of their containing scope
            https://eslint.org/docs/rules/vars-on-top
        */
        'vars-on-top': 'error',

        /*
            require immediate function invocation to be wrapped in parentheses
            https://eslint.style/rules/wrap-iife.html
        */
        '@stylistic/wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        /*
            require or disallow Yoda conditions
            https://eslint.org/docs/rules/yoda
        */
        yoda: 'error'
    }
};