module.exports = {
    extends: ['../../typescript', '../../typescript-requiring-type-checking'],
    root: true,
    ignorePatterns: ['*.js'],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
};
