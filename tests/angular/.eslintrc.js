// Test TypeScript and templates together to process inline templates.
module.exports = {
    overrides: [{
        extends: [
            '@ni/eslint-config-angular',
            '@ni/eslint-config-typescript/requiring-type-checking'
        ],
        files: ['*.ts'],
        parserOptions: {
            project: './tsconfig.json',
            // Resolve the project relative to this file's directory.
            // https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint
            tsconfigRootDir: __dirname
        }
    }, {
        extends: '@ni/eslint-config-angular/template',
        files: ['*.html']
    }],
    root: true
};
