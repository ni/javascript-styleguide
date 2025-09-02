import javascriptIndex from '@ni/eslint-config-javascript';

export default [
    ...javascriptIndex,
    {
        rules: {
            'import/no-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
        },
    },
];
