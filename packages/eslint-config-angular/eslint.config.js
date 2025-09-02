import javascriptIndex from '@ni/eslint-config-javascript';

export default [
    ...javascriptIndex,
    {
        rules: {
            'import/no-default-export': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
        },
    },
];
