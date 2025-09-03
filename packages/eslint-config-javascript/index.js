import importPlugin from 'eslint-plugin-import';
import stylisticPlugin from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import { bestPractices } from './rules/best-practices.js';
import { errors } from './rules/errors.js';
import { nodeRules } from './rules/node.js';
import { styleRules } from './rules/style.js';
import { variables } from './rules/variables.js';
import { es6 } from './rules/es6.js';
import { imports } from './rules/imports.js';
import { strictRules } from './rules/strict.js';

export default [
    {
        plugins: {
            '@stylistic': stylisticPlugin,
            import: importPlugin,
            n: nodePlugin
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
            },
        },
        rules: {
            ...bestPractices.rules,
            ...errors.rules,
            ...nodeRules.rules,
            ...styleRules.rules,
            ...variables.rules,
            ...es6.rules,
            ...imports.rules,
            ...strictRules.rules,
        },
    },
];