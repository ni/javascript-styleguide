import { defineConfig } from 'eslint/config';
import { javascriptConfig, restrictedImportPaths } from '@ni/eslint-config-javascript';

export default defineConfig([
    javascriptConfig,
    {
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    paths: [
                        ...restrictedImportPaths,
                        {
                            name: 'custom-restricted-import',
                            message: 'Custom restricted import.'
                        }
                    ]
                }
            ]
        }
    }
]);
