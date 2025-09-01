import typescriptRequiringTypeChecking from '@ni/eslint-config-typescript/requiring-type-checking';
import tsParser from '@typescript-eslint/parser';

export default [
    ...typescriptRequiringTypeChecking,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                parser: tsParser
            }
        },
    },
    {
        files: ['*.spec.ts'],
        rules: {
            /*
                Spies used by Angular application tests result in a significant number of
                unbound methods so this rule is disabled for test specs in Angular projects.
            */
            '@typescript-eslint/unbound-method': 'off',
        }
    }
];