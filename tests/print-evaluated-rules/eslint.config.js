import javascript from '@ni/eslint-config-javascript';

export default [
    ...javascript,
    {
        ignores: ['index.js'],
    },
    {
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
