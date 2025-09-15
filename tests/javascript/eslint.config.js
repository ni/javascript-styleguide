import javascript from '@ni/eslint-config-javascript';

export default [
    ...javascript,
    {
        files: ['*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
