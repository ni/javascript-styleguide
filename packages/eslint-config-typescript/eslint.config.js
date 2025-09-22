import { javascriptConfig } from '@ni/eslint-config-javascript';

export default [
    ...javascriptConfig,
    {
        ignores: ['eslint.config.js'],
    },
    {
        files: ['**/*.js'],
        rules: {
            'import/extensions': 'off',
            // eslint-plugin-import doesn't know how to resolve entry points in packages
            // that use modern export maps in package.json.
            // https://github.com/typescript-eslint/typescript-eslint/issues/7565
            // https://github.com/import-js/eslint-plugin-import/issues/2703
            'import/no-unresolved': [
                'error',
                {
                    ignore: ['typescript-eslint']
                }
            ],
        },
    },
];
