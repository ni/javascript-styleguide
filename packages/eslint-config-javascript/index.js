import { bestPractices } from './rules/best-practices.js';
import { errors } from './rules/errors.js';
import { nodeRules } from './rules/node.js';
import { styleRules } from './rules/style.js';
import { variables } from './rules/variables.js';
import { es6 } from './rules/es6.js';
import { imports } from './rules/imports.js';
import { strictRules } from './rules/strict.js';

export default [
    bestPractices,
    errors,
    nodeRules,
    styleRules,
    variables,
    es6,
    imports,
    strictRules,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: 2022,
                sourceType: 'module',
            },
        },
    },
];