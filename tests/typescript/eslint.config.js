import typescript from '@ni/eslint-config-typescript';

export default [
    ...typescript,
    {
        files: ['**/*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
