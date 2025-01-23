module.exports = {
    extends: [
        '@ni/eslint-config-playwright',
        '@ni/eslint-config-playwright/requiring-type-checking'
    ],
    ignorePatterns: ['*.js'],
    parserOptions: {
        project: ['./tsconfig.json'],
        // Resolve the project relative to this file's directory.
        // https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint
        tsconfigRootDir: __dirname,
    },
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
