import javascript from '@ni/eslint-config-javascript';

export default [
    ...javascript,
    {
        rules: {
            'import/no-default-export': 'error',
        },
    },
    {
        files: ['**/*.config.js', 'index.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];