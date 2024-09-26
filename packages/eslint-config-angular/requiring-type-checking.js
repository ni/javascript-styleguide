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
                    Spies used by Angular application tests result in a significant number of
                    unbound methods so this rule is disabled for test specs in Angular projects.
                */
                '@typescript-eslint/unbound-method': 'off',
            }
        },
    ]
};
