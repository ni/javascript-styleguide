import javascript from '@ni/eslint-config-javascript';

export default [
    ...javascript,
    {
        rules: {
            'import/no-default-export': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
        },
    }
];