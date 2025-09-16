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

export default [
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
];