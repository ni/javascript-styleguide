import { defineConfig } from 'eslint/config';

import { javascriptConfig, importNodeEsmConfig } from './index.js';

export default defineConfig([
    javascriptConfig,
    importNodeEsmConfig,
]);
