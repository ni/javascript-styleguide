// Test TypeScript and templates together to process inline templates.
module.exports = {
    overrides: [{
        extends: '../../angular',
        files: ['*.ts'],
        parserOptions: {
            project: './tsconfig.json',
            // Resolve the project relative to this file's directory.
            // https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint
            tsconfigRootDir: __dirname
        }
    }, {
        extends: '../../angular-template',
        files: ['*.html']
    }],
    root: true
};