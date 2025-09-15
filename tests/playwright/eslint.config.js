import playwright from '@ni/eslint-config-playwright';

export default [
    ...playwright,
    {
        files: ['*.ts'],
        rules: {
            // In this example app, all files are allowed to refer to playwright packages from devDependencies
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    },
    {
        files: ['*.config.js'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
];
