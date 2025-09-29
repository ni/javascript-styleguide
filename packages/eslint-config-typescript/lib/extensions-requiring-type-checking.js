import { defineConfig } from 'eslint/config';

export const extensionsRequiringTypeCheckingConfig = defineConfig([{
    rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/only-throw-error': 'error',

        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',

        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'always'],
    }
}]);
