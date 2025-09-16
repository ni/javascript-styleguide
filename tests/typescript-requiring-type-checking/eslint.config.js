import { fileURLToPath } from 'url';
import path from 'path';
import typescript from '@ni/eslint-config-typescript';
import typescriptRequiringTypeChecking from '@ni/eslint-config-typescript/requiring-type-checking';

const tsConfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
	{
		ignores: ['*.js'],
	},
	...typescript,
	...typescriptRequiringTypeChecking,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.json'],
				tsConfigRootDir,
			},
		},
	},
];
