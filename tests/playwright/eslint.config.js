import { fileURLToPath } from 'url';
import path from 'path';
import { playwrightConfig } from '@ni/eslint-config-playwright';
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
        files: ['*.ts'],
        extends: [...playwrightConfig],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsConfigRootDir,
            },
        },
        rules: {
            // In this example app, all files are allowed to refer to playwright packages from devDependencies
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    }
]);
