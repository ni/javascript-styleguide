import typescript from '@ni/eslint-config-typescript';

export default [
    ...typescript,
    {
        files: ['**/*.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    }
];
