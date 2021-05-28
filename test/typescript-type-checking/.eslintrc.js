module.exports = {
    extends: ['../../typescript', '../../typescript-requiring-type-checking'],
    root: true,
    ignorePatterns: ['*.js'],
    parserOptions: {
        project: ['./tsconfig.json'],
        // Resolve the project relative to this file's directory.
        // https://stackoverflow.com/questions/64933543/parsing-error-cannot-read-file-tsconfig-json-eslint
        tsconfigRootDir: __dirname,
    },
};
