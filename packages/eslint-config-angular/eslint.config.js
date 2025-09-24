import { javascriptConfig } from '@ni/eslint-config-javascript';

export default [
    ...javascriptConfig,
    {
        files: ['eslint.config.js'],
        rules: {
            'import/no-default-export': 'off'
        }
    },
    {
        files: ['**/*.js'],
        rules: {
            'import/extensions': 'off'
        },
    },
];