import { defineConfig } from 'eslint/config';
import { javascriptConfig } from '@ni/eslint-config-javascript';

export default defineConfig([
    javascriptConfig,
    {
        files: ['*.js'],
        rules: {
            'no-console': 'off'
        }
    }
]);
