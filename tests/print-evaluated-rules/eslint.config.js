import javascriptIndex from '@ni/eslint-config-javascript';

export default [
    ...javascriptIndex,
    {
        ignores: ['index.js']
    },
    {
        rules: {
            'import/no-default-export': 'error',
        },
    },
    {
        files: ['**/*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
