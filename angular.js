module.exports = {
    extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/recommended--extra',
        'plugin:@angular-eslint/template/process-inline-templates',
        './typescript'
    ],
    rules: {
        /*
            Overrides to Angular recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
        */

        /*
            '@angular-eslint/no-input-rename' rule notes:
            Disallow renaming directive inputs generally. Use an inline comment to disable the rule for exceptions where the
            context changes significantly, or disable the rule for files of directives that need to prefix their inputs to avoid conflicts.
        */

        /*
            '@angular-eslint/no-output-rename' rule notes:
            Disallow renaming directive outputs generally. Use an inline comment to disable the rule for exceptions where the
            context changes significantly, or disable the rule for projects that use the dollar sign postfix for EventEmitters.
        */

        /*
            Configure this rule as an error.
        */
        '@angular-eslint/use-lifecycle-interface': 'error',

        /*
            Overrides to Angular extra recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/src/configs/recommended--extra.json
        */
    }
};