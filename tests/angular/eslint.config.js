import { fileURLToPath } from 'url';
import path from 'path';

import { angularConfig } from '@ni/eslint-config-angular';
import { angularTemplateConfig } from '@ni/eslint-config-angular/template';
import { ignoreAttributes } from '@ni/eslint-config-angular/template/options';

import typescriptPlugin from 'typescript-eslint';
import angularTemplatePlugin from 'angular-eslint';
import { defineConfig } from 'eslint/config';

const tsConfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
	{
		files: ['eslint.config.js'],
		rules: {
			'import/no-default-export': 'off',
		}
	},
	{
		files: ['**/*.ts'],
		extends: [...angularConfig],
		languageOptions: {
			parser: typescriptPlugin.parser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsConfigRootDir,
			},
		},
	},
	{
		files: ['*.html'],
		extends: [...angularTemplateConfig],
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
]);