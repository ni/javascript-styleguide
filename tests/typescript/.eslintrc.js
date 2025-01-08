module.exports = {
    ignorePatterns: ['*.js'],
    root: true,
    overrides: [
        {
            extends: '@ni/eslint-config-typescript',
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.json'
            },
            rules: {
                // In this example app, all files are allowed to refer to playwright packages from devDependencies
                'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            }
        }
    ]
};
