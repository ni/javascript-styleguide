import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin';
import globals from 'globals';
import { bestPractices } from './rules/best-practices.js';
import { errors } from './rules/errors.js';
import { node } from './rules/node.js';
import { style } from './rules/style.js';
import { variables } from './rules/variables.js';
import { es6 } from './rules/es6.js';
import { imports } from './rules/imports.js';
import { strict } from './rules/strict.js';

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

export const nodeEsmImportConfig = defineConfig([
    {
        rules: {
            // node esm resolution requires extensions
            'import/extensions': 'off',
            // node esm resolution requires full path name
            'import/no-useless-path-segments': 'off',
            // eslint-plugin-import doesn't know how to resolve entry points in packages
            // that use modern export maps in package.json.
            // https://github.com/typescript-eslint/typescript-eslint/issues/7565
            // https://github.com/import-js/eslint-plugin-import/issues/2703
            'import/no-unresolved': 'off',
        }
    }
]);
