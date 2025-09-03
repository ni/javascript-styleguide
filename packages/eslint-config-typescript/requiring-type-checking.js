import typescriptPlugin from 'typescript-eslint';
import extensionsTypeChecked from './lib/extensions-requiring-type-checking.js';

export default [
    ...extensionsTypeChecked,
    ...typescriptPlugin.configs.recommendedTypeChecked,
    ...typescriptPlugin.configs.stylisticTypeChecked,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptPlugin.parser,
        },
        rules: {
            /*
                Overrides to TypeScript recommended rules:
                https://github.com/typescript-eslint/typescript-eslint/tree/v7.18.0/packages/eslint-plugin/src/configs/recommended-type-checked.ts
            */

            '@typescript-eslint/no-duplicate-enum-values': 'off',
            '@typescript-eslint/no-duplicate-type-constituents': 'off',
            '@typescript-eslint/no-loss-of-precision': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'off',
            '@typescript-eslint/no-unsafe-declaration-merging': 'off',
            '@typescript-eslint/no-unsafe-enum-comparison': 'off',

            /*
                This rule can be confusing if you're not familiar with JavaScript's rules for binding `this`,
                but in our experience when it reports an error it is usually indicitave of a real bug.

                Common ways to resolve this error include:
                1. Wrapping the function with an arrow function, which establishes `this` based on the context
                the function is defined in rather than where it's called from.
                ```
                        // Good, this will refer to the class where this code is defined
                        array.sort(() => this.compare());

                        // Bad, this will refer to the context where this code is invoked from
                        array.sort(this.compare);
                    ```
                2. For callbacks passed to `addEventListener` which need to be referenced in `removeEventListener`,
                the arrow function should be stored in a variable since it must refer to the same instance of the function.
                ```
                        // Good
                        const handler = event => this.clickHandler();
                        elt.addEventListener('click', handler);
                        elt.removeEventListener('click', handler);

                        // Bad, violates this rule
                        elt.addEventListener('click', this.clickHandler);
                        elt.removeEventListener('click', this.clickHandler);

                        // Bad, removeEventListener isn't removing the original handler
                        elt.addEventListener('click', event => this.clickHandler());
                        elt.removeEventListener('click', event => this.clickHandler());
                3. If the function doesn't use `this` to refer to an instance or other static members, you can change the function to be static and the rule will ignore it.
            */
            '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

            /*
                Overrides to TypeScript type-checked stylistic rules:
                https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts
            */

            '@typescript-eslint/consistent-generic-constructors': 'off',
            '@typescript-eslint/prefer-regexp-exec': 'off',

            /*
                Overrides to Typescript rules outside of the recommended configuration:
            */

            /*
                Most of this configuration is identitical to the default with exceptions called out in comments below
            */
            '@typescript-eslint/naming-convention': [
                'error',
                // Allow properties with custom-element-names, commonly used in HTMLElementNameTagMap
                {
                    selector: 'property',
                    format: null,
                    filter: {
                        // custom element regex adapted from https://html-validate.org/rules/element-name.html
                        regex: '^[a-z][a-z0-9\\-._]*-[a-z0-9\\-._]*$',
                        match: true,
                    },
                },
                // The default configuration for this rule requires that enum members
                // follow the camelCase style, which doesn't match the existing convention
                // within NI and the broader TS community to use PascalCase.
                {
                    selector: 'enumMember',
                    format: ['PascalCase'],
                },
                {
                    selector: 'variable',
                    format: ['camelCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
                {
                    selector: 'typeLike',
                    format: ['PascalCase'],
                },
                {
                    selector: 'import',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'default',
                    format: ['camelCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow',
                },
            ],

            '@typescript-eslint/no-base-to-string': 'error',

            '@typescript-eslint/no-confusing-void-expression': [
                'error',
                { ignoreArrowShorthand: true },
            ],

            /* [strict-null-checks] */
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

            /* [strict-null-checks] */
            '@typescript-eslint/no-unnecessary-condition': 'off',

            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            '@typescript-eslint/no-unnecessary-type-arguments': 'error',

            '@typescript-eslint/no-unsafe-argument': 'error',

            '@typescript-eslint/non-nullable-type-assertion-style': 'error',

            '@typescript-eslint/prefer-includes': 'error',

            /*
                Both nullish coalescing (`??`) and logical OR (`||`) may be used
                to provide default values in specific cases.

                Developers should choose the strictest operator for their use case:
                - `??` to provide a default for nullish values (null or undefined).
                - `||` to provide a default for values that are nullish or one of: empty string / boolean false.

                Logical OR checks should not be used for other falsy values such as numbers (0, -0, 0n, NaN).
            */
            '@typescript-eslint/prefer-nullish-coalescing': 'off',

            '@typescript-eslint/prefer-optional-chain': 'error',

            '@typescript-eslint/prefer-readonly': 'error',

            /*
                This rule requires adding `readonly` keywords to all levels of non-primitive parameters in order to prevent
                any part of the parameter from being mutated. While the spirit of preferring not to mutate inputs is correct,
                requiring it to be encoded via `readonly` is overly burdensome.
            */
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',

            '@typescript-eslint/prefer-reduce-type-parameter': 'error',

            '@typescript-eslint/prefer-return-this-type': 'error',

            '@typescript-eslint/prefer-string-starts-ends-with': 'error',

            '@typescript-eslint/promise-function-async': 'error',

            '@typescript-eslint/require-array-sort-compare': 'error',

            /*
                [strict-null-checks] This rule requires the TypeScript strictNullChecks compiler flag. If strictNullChecks is enabled, disallow numbers
                with the following configuration:
                '@typescript-eslint/strict-boolean-expressions': ['error', {
                    allowNumber: false,
                    allowNullableBoolean: true,
                    allowNullableString: true,
                    allowNullableNumber: false
                }]
            */
            '@typescript-eslint/strict-boolean-expressions': 'off',

            /*
                This rule is made redundant by `default-case` so it will never fire and is disabled.
            */
            '@typescript-eslint/switch-exhaustiveness-check': 'off',
        },
    },
];
