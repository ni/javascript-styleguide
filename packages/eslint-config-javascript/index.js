import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin';
import globals from 'globals';
import { bestPractices } from './lib/best-practices.js';
import { errors } from './lib/errors.js';
import { node } from './lib/node.js';
import { style } from './lib/style.js';
import { variables } from './lib/variables.js';
import { es6 } from './lib/es6.js';
import { imports } from './lib/imports.js';
import { strict } from './lib/strict.js';

export { importNodeEsmConfig } from './lib/import-node-esm.js';
export const javascriptConfig = defineConfig([
    stylisticPlugin.configs['disable-legacy'],
    bestPractices,
    errors,
    node,
    style,
    variables,
    es6,
    imports,
    strict,
    {
        plugins: {
            '@stylistic': stylisticPlugin,
            import: importPlugin,
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node
            }
        }
    },
]);
