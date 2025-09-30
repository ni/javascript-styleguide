import { angularConfig, angularTemplateConfig, ignoreAttributes } from '@ni/eslint-config-angular';

import { defineConfig } from 'eslint/config';
import { javascriptConfig } from '@ni/eslint-config-javascript';

export default defineConfig([
    {
        files: ['**/*.js'],
        extends: javascriptConfig,
    },
    {
        files: ['**/*.ts'],
        extends: angularConfig,
        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsConfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ['**/*.html'],
        extends: angularTemplateConfig,
    },
    // Use only a single top-level eslint.config.js: https://eslint.org/docs/latest/use/configure/configuration-files#experimental-configuration-file-resolution
    {
        files: ['custom-ignore-attributes/**/*.html'],
        ignores: ['custom-ignore-attributes/**/*.spec.ts*.html'],
        rules: {
            '@angular-eslint/template/i18n': [
                'error',
                {
                    checkId: false,
                    ignoreAttributes: [...ignoreAttributes.all, 'custom-field'],
                },
            ],
        },
    },
]);
