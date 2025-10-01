import { defineConfig } from 'eslint/config';
import { javascriptConfig } from '@ni/eslint-config-javascript';
import { typescriptConfig } from '@ni/eslint-config-typescript';

export default defineConfig([
    javascriptConfig,
    {
        files: ['**/*.ts'],
        extends: typescriptConfig,
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsConfigRootDir: import.meta.dirname,
            },
        },
    },
]);
