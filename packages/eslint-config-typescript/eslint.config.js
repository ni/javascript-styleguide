import javascriptIndex from '@ni/eslint-config-javascript';

export default [
    ...javascriptIndex,
    {
        rules: {
            'import/no-default-export': 'error',
        },
    },
    {
        files: [
            '**/*.config.js',
            './index.js',
            './requiring-type-checking.js',
            './lib/extensions.js',
            './lib/extensions-requiring-type-checking.js',
        ],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];