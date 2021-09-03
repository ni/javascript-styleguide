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
            Upgrade the recommended rule configuration from a warning to an error.
        */
        '@angular-eslint/use-lifecycle-interface': 'error',

        /*
            Overrides to Angular extra recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin/src/configs/recommended--extra.json
        */

        /*
            Overrides to Angular rules outside of the recommended configuration:
        */

        /*
            Extract templates and styles into a separate files. In rare cases, allow for inline templates of a few
            elements with attributes and three minimal CSS declarations.
        */
        '@angular-eslint/component-max-inline-declarations': ['error', { animations: 15, styles: 15, template: 15 }],

        /*
            If your application uses a specific prefix for components you may want to enable this rule
        */
        '@angular-eslint/component-selector': 'off',

        '@angular-eslint/contextual-decorator': 'error',

        /*
            Do not require a directive to select an element or attribute exclusively, because there are valid use cases
            for both.
        */
        '@angular-eslint/directive-selector': 'off',

        '@angular-eslint/no-attribute-decorator': 'error',

        /*
            `forwardRef` is needed for certain Dependency Injection use cases and abuse is not widespread so its use is permitted.
        */
        '@angular-eslint/no-forward-ref': 'off',

        /*
            We don't yet have a general naming conventions so enforcing a convention just for inputs would be inconsistent.
        */
        '@angular-eslint/no-input-prefix': 'off',

        '@angular-eslint/no-lifecycle-call': 'error',

        '@angular-eslint/no-pipe-impure': 'error',

        '@angular-eslint/no-queries-metadata-property': 'error',

        '@angular-eslint/pipe-prefix': 'error',

        '@angular-eslint/prefer-on-push-component-change-detection': 'off',

        '@angular-eslint/prefer-output-readonly': 'off',

        '@angular-eslint/relative-url-prefix': 'error',

        '@angular-eslint/sort-ngmodule-metadata-arrays': 'off',

        '@angular-eslint/use-component-selector': 'error',

        '@angular-eslint/use-component-view-encapsulation': 'error',

        /*
            Provide root services with the application root injector in the Injectable decorator. However, NgModule
            providers are frequently preferred for non-root, module scoped services in applications where tree-shaking
            is usually irrelevant. Additionally, libraries commonly export services from modules in order to manage
            dependencies. Consider enabling this rule for libraries to ensure proper tree-shaking when appropriate.
        */
        '@angular-eslint/use-injectable-provided-in': 'off'
    }
};
