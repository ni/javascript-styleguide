module.exports = {
    rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',

        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',

        'no-return-await': 'off',
        '@typescript-eslint/return-await': ['error', 'always'],
    }
};
