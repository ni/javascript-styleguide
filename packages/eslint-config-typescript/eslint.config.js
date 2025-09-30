import { defineConfig } from 'eslint/config';

import { javascriptConfig, importNodeEsmConfig } from '@ni/eslint-config-javascript';

export default defineConfig([
    javascriptConfig,
    importNodeEsmConfig,
    {
        files: ['tools/*.js'],
        rules: {
            'no-console': 'off'
        }
    }
]);
