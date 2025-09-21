import { typescriptRequiringTypeCheckingConfig } from '@ni/eslint-config-typescript/requiring-type-checking';
import typescriptPlugin from 'typescript-eslint';

export const angularRequiringTypeCheckingConfig = [
    ...typescriptRequiringTypeCheckingConfig,
    {
        languageOptions: {
            parser: typescriptPlugin.parser,
        },
    },
    {
        files: ['**/*.spec.ts'],
        rules: {
            /*
                Spies used by Angular application tests result in a significant number of
                unbound methods so this rule is disabled for test specs in Angular projects.
            */
            '@typescript-eslint/unbound-method': 'off',
        },
    },
];
