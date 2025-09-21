import { javascriptConfig } from '@ni/eslint-config-javascript';

export default [
	...javascriptConfig,
	{
		ignores: ['eslint.config.js'],
	},
	{
		files: ['**/*.js'],
		rules: {
			// Disable these rules because some packages used in the project are not listed in devDependencies or dependencies, and ES6 modules require explicit file extensions by default.
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',
		},
	},
];
