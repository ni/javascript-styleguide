import { fileURLToPath } from 'url';
import path from 'path';

import angular from '@ni/eslint-config-angular';
import angularTemplate from '@ni/eslint-config-angular/template';
import angularRequiringTypeChecking from '@ni/eslint-config-angular/requiring-type-checking';
import { ignoreAttributes } from '@ni/eslint-config-angular/template/options';

import tsParser from '@typescript-eslint/parser';
import angularTemplatePlugin from 'angular-eslint';
import { defineConfig } from 'eslint/config';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
	{ ignores: ['*.js'] },
	{
		files: ['**/*.ts'],
		extends: [...angular, ...angularRequiringTypeChecking],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir,
			},
		},
	},
	{
		files: ['*.html'],
		extends: [...angularTemplate],
		languageOptions: { parser: angularTemplatePlugin.templateParser },
	},
	{
		files: ['custom-ignore-attributes/**/*.html'],
		languageOptions: { parser: angularTemplatePlugin.templateParser },
		plugins: {
			'@angular-eslint/template': angularTemplatePlugin.templatePlugin,
		},
		rules: {
			'@angular-eslint/template/i18n': [
				'error',
				{
					checkId: false,
					ignoreAttributes: [...ignoreAttributes.all, 'custom-field'],
				},
			],
		},
	},
	{
		files: ['**/*.spec.ts*.html'],
		languageOptions: { parser: angularTemplatePlugin.templateParser },
		plugins: {
			'@angular-eslint/template': angularTemplatePlugin.templatePlugin,
		},
		rules: {
			'@angular-eslint/template/i18n': 'off',
		},
	},
	{
		files: ['**/*.spec.ts'],
		rules: {
			'@angular-eslint/use-component-selector': 'off',
			'@typescript-eslint/unbound-method': 'off',
		},
	},
]);