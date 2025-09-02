import { fileURLToPath } from 'url';
import path from 'path';
import typescript from '@ni/eslint-config-typescript';
import typescriptRequiringTypeChecking from '@ni/eslint-config-typescript/requiring-type-checking';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

export default [
	...typescript,
	...typescriptRequiringTypeChecking,
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
	},
];
