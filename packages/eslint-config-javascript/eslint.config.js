import { defineConfig } from 'eslint/config';

import { javascriptConfig, nodeEsmImportConfig } from './index.js';

export default defineConfig([
    javascriptConfig,
    nodeEsmImportConfig,
]);
