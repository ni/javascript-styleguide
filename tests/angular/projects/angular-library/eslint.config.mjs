import { defineConfig, globalIgnores } from 'eslint/config';

// eslint-disable-next-line import/no-relative-packages
import parentConfig from '../../eslint.config.mjs';

export default defineConfig([
    parentConfig,
    globalIgnores(['!projects']),
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.lib.json', 'tsconfig.spec.json'],
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            '@angular-eslint/component-selector': [
                'error', { type: 'element', prefix: 'angular-lib', style: 'kebab-case' }
            ]
        }
    }
]);