import { fileURLToPath } from 'url';
import path from 'path';
import { playwrightConfig } from '@ni/eslint-config-playwright';

const tsConfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
    ...playwrightConfig,
    {
        ignores: ['*.js']
    },
    {
        files: ['*.ts'],
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
];
