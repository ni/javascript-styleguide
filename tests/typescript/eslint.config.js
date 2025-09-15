import { fileURLToPath } from 'url';
import path from 'path';
import typescript from '@ni/eslint-config-typescript';
import typescriptRequiringTypeChecking from '@ni/eslint-config-typescript/requiring-type-checking';

import typescript from '@ni/eslint-config-typescript';

export default [
	...typescript,
	{
		files: ['*.js'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
];