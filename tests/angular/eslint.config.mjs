import { defineConfig, globalIgnores } from 'eslint/config';
import { angularTypescriptConfig, angularTemplateConfig, ignoreAttributes } from '@ni/eslint-config-angular';
import { javascriptConfig, importNodeEsmConfig } from '@ni/eslint-config-javascript';

export default defineConfig([
    globalIgnores(['projects']),
    {
        files: ['**/*.js', '**/*.mjs'],
        extends: [javascriptConfig, importNodeEsmConfig]
    }, {
        files: ['**/*.ts'],
        extends: angularTypescriptConfig,
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.app.json', 'tsconfig.spec.json', 'tsconfig.json']
            }
        },
        rules: {
            '@angular-eslint/component-selector': [
                'error', { prefix: 'app', style: 'kebab-case', type: 'element' }
            ]
        }
    }, {
        files: ['**/*.spec.ts'],
        rules: {
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off'
        }
    }, {
        files: ['**/*.html'],
        extends: angularTemplateConfig,
        rules: {
            '@angular-eslint/template/i18n': [
                'error',
                { 
                    allowMarkupInContent: false,
                    checkId: false,
                    ignoreAttributes: [...ignoreAttributes.all, 'custom-field']
                }
            ]
        }
    }]);