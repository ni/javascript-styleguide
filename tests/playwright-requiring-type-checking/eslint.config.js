import { fileURLToPath } from 'url';
import path from 'path';
import playwright from '@ni/eslint-config-playwright';
import playwrightRequiringTypeChecking from '@ni/eslint-config-playwright/requiring-type-checking';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
	...playwright,
	...playwrightRequiringTypeChecking,
	{
		ignores: ['*.js'],
	},
	{
		files: ['*.ts'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir,
			},
		},
		rules: {
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		},
	},
	{
		files: ['*.config.js'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
];
