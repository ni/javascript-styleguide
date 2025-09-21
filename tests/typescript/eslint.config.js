import { fileURLToPath } from 'url';
import path from 'path';
import { typescriptConfig } from '@ni/eslint-config-typescript';

const tsConfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
    ...typescriptConfig,
    {
        ignores: ['eslint.config.js']
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsConfigRootDir,
            },
        },
    },
];