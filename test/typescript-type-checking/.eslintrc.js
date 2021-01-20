module.exports = {
    extends: '../../typescript-requiring-type-checking',
    root: true,
    ignorePatterns: ['*.js'],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
};
