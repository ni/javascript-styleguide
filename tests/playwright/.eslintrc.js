module.exports = {
    extends: '@ni/eslint-config-playwright',
    root: true,
    overrides: [
        {
            files: [
                '*.ts',
            ],
            rules: {
                // In this example app, all files are allowed to refer to playwright packages from devDependencies
                'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
            }
        }
    ]
};
