module.exports = {
    extends: [
        '@ni/eslint-config-typescript/requiring-type-checking'
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
                '@typescript-eslint/unbound-method': 'off',
            }
        },
    ]
};
