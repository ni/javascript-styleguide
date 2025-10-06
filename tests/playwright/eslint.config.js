import { defineConfig } from 'eslint/config';
import { javascriptConfig } from '@ni/eslint-config-javascript';
import { playwrightConfig } from '@ni/eslint-config-playwright';

export default defineConfig([
    {
        files: ['**/*.js'],
        extends: javascriptConfig,
    },
    {
        files: ['**/*.ts'],
        extends: playwrightConfig,
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // In this example app, all files are allowed to refer to playwright packages from devDependencies
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    }
]);
