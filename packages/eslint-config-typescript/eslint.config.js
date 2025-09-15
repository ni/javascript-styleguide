import javascript from '@ni/eslint-config-javascript';

export default [
	...javascript,
	{
		files: ['**/*.js'],
		rules: {
			'import/no-default-export': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',
			'import/no-unresolved': 'off',
		},
	},
];
