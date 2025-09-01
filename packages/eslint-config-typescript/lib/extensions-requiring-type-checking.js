export default [
    {
        rules: {
            // Defined by Airbnb
            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

            // Defined by Airbnb
            'no-implied-eval': 'off',
            '@typescript-eslint/no-implied-eval': 'error',

            // Defined by NI
            'require-await': 'off',
            '@typescript-eslint/require-await': 'error',

            // Defined by Airbnb
            'no-return-await': 'off',
            '@typescript-eslint/return-await': ['error', 'always'],
        }
    }
];
