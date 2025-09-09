module.exports = {
    extends: [
        require.resolve('./rules/best-practices'),
        require.resolve('./rules/errors'),
        require.resolve('./rules/node'),
        require.resolve('./rules/style'),
        require.resolve('./rules/variables'),
        require.resolve('./rules/es6'),
        require.resolve('./rules/imports'),
        require.resolve('./rules/strict'),
        'plugin:@stylistic/disable-legacy',
    ],
    plugins: ['@stylistic'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    }
};