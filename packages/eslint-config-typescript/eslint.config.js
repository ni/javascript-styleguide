import { defineConfig } from 'eslint/config';

import { javascriptConfig, nodeEsmImportConfig } from '@ni/eslint-config-javascript';

export default defineConfig([
    javascriptConfig,
    nodeEsmImportConfig,
    {
        files: ['tools/*.js'],
        rules: {
            'no-console': 'off'
        }
    }
]);
