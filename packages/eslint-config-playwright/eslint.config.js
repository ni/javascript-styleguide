import { javascriptConfig } from '@ni/eslint-config-javascript';

export default [
    ...javascriptConfig,
    {
        ignores: ['eslint.config.js'],
    },
    {
        rules: {
            // Disable this rule because some packages used in the project are not listed in devDependencies or dependencies.
            'import/no-extraneous-dependencies': 'off',
        },
    },
];
