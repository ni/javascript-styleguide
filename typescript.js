module.exports = {
    extends: [
        './index',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        './lib/typescript-extensions'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        /*
            Overrides to import rules (already handled by the TypeScript compiler):
            https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        */

        'import/named': 'off',

        'import/no-unresolved': 'off',

        /*
            Overrides to TypeScript recommended rules:
            https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
        */

        '@typescript-eslint/explicit-module-boundary-types': 'error',

        '@typescript-eslint/no-explicit-any': 'error',

        /*
            With `stickNullChecks` disabled, non-null assertions are discouraged as they do not provide additional type safety
            and if used inconsistently add to visual noise. With `strictNullChecks` enabled, the non-null assertion operator
            is useful for asserting that a value will no longer be null and usage of operator should be allowed.
        */
        '@typescript-eslint/no-non-null-assertion': 'error',

        /*
            Overrides to Typescript rules outside of the recommended configuration:
        */

        /*
            Prefer the array straight bracket syntax over generics in all cases.
        */
        '@typescript-eslint/array-type': 'error',

        '@typescript-eslint/ban-tslint-comment': 'error',

        '@typescript-eslint/class-literal-property-style': 'error',

        /*
            Prefer the index signature syntax over the builtin `Record` type in all cases.
        */
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],

        '@typescript-eslint/consistent-type-assertions': 'error',

        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        /*
            Type imports are useful for uncommon use cases such as modules with
            side-efects and file-by-file transpiling. Usage will be determined
            on a case-by-case basis.
        */
        '@typescript-eslint/consistent-type-imports': 'off',

        '@typescript-eslint/explicit-function-return-type': 'error',

        /*
            Requiring an accessibility modifier helps when creating classes to ensure the
            accessibility of a class member is intentionally decided and not relying on
            the default of public accessibility.
        */
        '@typescript-eslint/explicit-member-accessibility': 'error',

        /*
            All interface members should be terminated with a semicolon including single line
            definitions, consistent with classes. Object literal types should use commas
            consistent with object literals.
        */
        '@typescript-eslint/member-delimiter-style': ['error', {
            overrides: {
                interface: {
                    singleline: {
                        delimiter: 'semi',
                        requireLast: true
                    }
                },
                typeLiteral: {
                    multiline: {
                        delimiter: 'comma',
                        requireLast: false
                    },
                    singleline: {
                        delimiter: 'comma',
                        requireLast: false
                    }
                }
            }
        }],

        /*
            Group members by fields and methods and then order them by accessibility starting
            with statics. Order members within these groups in a logical organization where
            readability is the most important thing. Private fields that back public accessors
            may be grouped with their accessor by disabling the rule with a comment.
        */
        '@typescript-eslint/member-ordering': ['error', {
            default: [
                'signature',
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'static-field',
                'public-field',
                'protected-field',
                'private-field',
                'field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'constructor',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                'static-method',
                'public-method',
                'protected-method',
                'private-method',
                'method'
            ]
        }],

        /*
            The stricter type checking that's possible by using property style when declaring
            method signatures only has benefits in some cases of inheritance. Therefore we
            prefer to align the style between interface and class definitions and to align
            with other languages used by NI like C#.
        */
        '@typescript-eslint/method-signature-style': 'off',

        '@typescript-eslint/no-confusing-non-null-assertion': 'error',

        /*
            This rule is unnecessary because delete is banned via 'no-restricted-syntax'
        */
        '@typescript-eslint/no-dynamic-delete': 'off',

        '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true, allowStaticOnly: true }],

        /*
            TypeScript only supports catching `any` and `unknown` so this rule does not add
            much value. With the rule no-throw-literal we enforce throwing `Error` objects,
            which should be sufficient most of the time. For more type safety, consider
            using type guards.
        */
        '@typescript-eslint/no-implicit-any-catch': 'off',

        '@typescript-eslint/no-invalid-void-type': 'error',

        /*
            Parameter properties are a nice shorthand for defining properties ingested
            in the constructor.
        */
        '@typescript-eslint/no-parameter-properties': 'off',

        '@typescript-eslint/no-require-imports': 'error',

        '@typescript-eslint/no-type-alias': 'off',

        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        '@typescript-eslint/no-unused-vars-experimental': 'off',

        /*
            If an enum is crossing a code boundary (being serialized to JSON for example) then
            you should initialize its values. But in most other cases code shouldn't care about
            the values of enum items, so you can safely leave them implicit.
        */
        '@typescript-eslint/prefer-enum-initializers': 'off',

        '@typescript-eslint/prefer-for-of': 'error',

        '@typescript-eslint/prefer-function-type': 'error',

        '@typescript-eslint/prefer-literal-enum-member': 'error',

        '@typescript-eslint/prefer-optional-chain': 'error',

        '@typescript-eslint/prefer-ts-expect-error': 'error',

        '@typescript-eslint/sort-type-union-intersection-members': 'off',

        '@typescript-eslint/type-annotation-spacing': 'error',

        '@typescript-eslint/typedef': 'off',

        '@typescript-eslint/unified-signatures': 'error'
    }
};
