import typescriptIndex from '@ni/eslint-config-typescript';

export default [
    ...typescriptIndex,
    {
        files: ['**/*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
