import playwright from '@ni/eslint-config-playwright';

export default [
    ...playwright,
    {
        files: ['**/*.ts'],
        rules: {
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            '@stylistic/eol-last': 'off'
        },
    },
    {
        files: ['**/*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
