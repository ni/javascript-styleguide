import { fileURLToPath } from 'url';
import path from 'path';
import { typescriptConfig } from '@ni/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

const tsConfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
    {
        files: ['eslint.config.js'],
        rules: {
            'import/no-default-export': 'off',
        }
    },
    {
        files: ['**/*.ts'],
        extends: [...typescriptConfig],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsConfigRootDir,
            },
        },
    },
]);