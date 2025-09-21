import { javascriptConfig } from '@ni/eslint-config-javascript';

export default [
    ...javascriptConfig,
    {
        ignores: ['eslint.config.js'],
    },
    {
        rules: {
            'import/no-extraneous-dependencies': 'off',
            'import/no-unresolved': 'off',
        },
    },
];
