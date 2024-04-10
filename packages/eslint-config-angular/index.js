module.exports = {
    extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        '@ni/eslint-config-typescript'
    ],
    rules: {
        /*
            Overrides to Angular recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.json
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

        // We intended to use the default from @typescript-eslint/recommended, but we adopted this override accidentally.
        // See https://github.com/ni/javascript-styleguide/issues/139
        '@typescript-eslint/no-inferrable-types': [
            'error',
            { ignoreParameters: true }
        ],

        /*
            Overrides to Angular rules outside of the recommended configuration:
        */

        /*
            Extract templates and styles into a separate files. In rare cases, allow for inline templates of a few
            elements with attributes and three minimal CSS declarations.
        */
        '@angular-eslint/component-max-inline-declarations': ['error', { animations: 15, styles: 15, template: 15 }],

        /* [application-prefix] */
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

        /* [application-prefix] */
        '@angular-eslint/pipe-prefix': 'error',

        /*
            This rule is for specific applications such as libraries that want to minimize global dependencies or parts
            of an application that have specific performance goals.
        */
        '@angular-eslint/prefer-on-push-component-change-detection': 'off',

        /*
            While marking @Output properties as readonly does better capture the intention of how they should generally be used,
            it does not appear that there is wide-spread abuse of not marking @Output properties readonly. Marking them readonly
            would deviate from the style given in most Angular docs and examples so this rule is not enabled.
        */
        '@angular-eslint/prefer-output-readonly': 'off',

        '@angular-eslint/relative-url-prefix': 'error',

        /*
            Generally not expected in practice to sort NgModule metadata arrays. Projects may enable if desired.
        */
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
    },
    overrides: [
        {
            files: ['*.spec.ts'],
            rules: {
                /*
                    Tests often define helper components and it improves test readability if they are in the same
                    file as the tests.
                */
                '@angular-eslint/component-max-inline-declarations': 'off',

                /*
                    Components defined in tests are typically only used within a single test file so don't need.
                    a compontent selector.
                */
                '@angular-eslint/use-component-selector': 'off',

                /*
                    Tests often define additional classes as mocks or helper components and it improves test readability
                    if those are in the same file as the tests.
                */
                'max-classes-per-file': 'off'
            }
        },
    ]
};
