import javascriptIndex from '@ni/eslint-config-javascript';

export default [
    ...javascriptIndex,
    {
        files: ['**/*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];