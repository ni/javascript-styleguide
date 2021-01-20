module.exports = {
    rules: {
        // Defined by Airbnb
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

        // Defined by Airbnb
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',

        // Defined by Airbnb
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',

        // Defined by Airbnb
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        // TODO: the reasoning here is dubious... I think we should enable the rule https://github.com/airbnb/javascript/issues/2013

        // Defined by Airbnb
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'error',
    }
};
