module.exports = {
    extends: [
        '@ni/eslint-config-typescript/requiring-type-checking'
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
                /*
                    The jasminewd2 library used by Angular applications results in a significant number of
                    floating promises and unbound methods so these rules are disabled for test specs in Angular projects.
                */
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/unbound-method': 'off',
            }
        },
    ]
};
