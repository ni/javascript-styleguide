import { javascriptConfig } from '@ni/eslint-config-javascript';
import { typescriptConfig } from '@ni/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

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
