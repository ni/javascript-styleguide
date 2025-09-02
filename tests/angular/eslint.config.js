// Test TypeScript and templates together to process inline templates.
import { fileURLToPath } from 'url';
import path from 'path';
import angularIndex from '@ni/eslint-config-angular';
import { defineConfig } from 'eslint/config';
import angularRequiringTypeChecking from '@ni/eslint-config-angular/requiring-type-checking';
import angularTemplate from '@ni/eslint-config-angular/template';
import { ignoreAttributes } from '@ni/eslint-config-angular/template/options';
import angularPlugin from 'angular-eslint';
import typescriptPlugin from 'typescript-eslint';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
	{
		ignores: ['*.js'],
	},
	{
		files: ['**/*spec.ts, **/*.ts'],
		extends: [...angularIndex, ...angularRequiringTypeChecking],
		languageOptions: {
			parser: typescriptPlugin.parser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir,
			},
		},
	},
	{
		files: ['**/*.html'],
		extends: [...angularTemplate],
		languageOptions: {
			parser: angularPlugin.templateParser,
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
		extends: [...angularTemplate],
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'@angular-eslint/template/i18n': 'off',
		},
	},
]);