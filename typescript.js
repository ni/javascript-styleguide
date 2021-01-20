module.exports = {
    extends: [
        /*
            @typescript-eslint/recommended source:
            https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts

            import/typescript source:
            https://github.com/benmosher/eslint-plugin-import/blob/master/config/typescript.js
        */
        './index',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        './lib/typescript-base',
        './lib/typescript-extensions'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-type-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unused-vars-experimental': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/sort-type-union-intersection-members': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/typedef': 'error',
        '@typescript-eslint/unified-signatures': 'error'
    }
};
