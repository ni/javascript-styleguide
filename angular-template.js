module.exports = {
    extends: [
        'plugin:@angular-eslint/template/recommended'
    ],
    rules: {
        /*
            Overrides to Angular template recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/master/packages/eslint-plugin-template/src/configs/recommended.json
        */

        /*
            Overrides to Angular rules outside of the recommended configuration:
        */

        /*
            There currently isn't an NI organization wide requirement to enforce accessibility in applications. These
            rules should be considered if individual applications prioritize it. They may be enabled in the future as
            the priority of accessibility increases.
        */
        '@angular-eslint/template/accessibility-alt-text': 'off',

        '@angular-eslint/template/accessibility-elements-content': 'off',

        '@angular-eslint/template/accessibility-label-for': 'off',

        '@angular-eslint/template/accessibility-label-has-associated-control': 'off',

        '@angular-eslint/template/accessibility-table-scope': 'off',

        /*
            Enabled as the rule validates usage of aria attributes when used but does not require their usage.
        */
        '@angular-eslint/template/accessibility-valid-aria': 'error',

        /*
            This rule primarily impacts accessibility so currently requires enforcement per project.
        */
        '@angular-eslint/template/click-events-have-key-events': 'off',

        '@angular-eslint/template/conditional-complexity': 'error',

        '@angular-eslint/template/cyclomatic-complexity': 'error',

        /*
            Enable this rule by default to enforce internationalization for existing applications that are localized
            and new applications in the chance that they'll need to be localized in the future. Disable this rule
            if an application will never be localized.
        */
        '@angular-eslint/template/i18n': ['error', { checkText: true }],

        /*
            This rule primarily impacts accessibility so currently requires enforcement per project.
        */
        '@angular-eslint/template/mouse-events-have-key-events': 'off',

        '@angular-eslint/template/no-any': 'error',

        /*
            This rule primarily impacts accessibility so currently requires enforcement per project.
        */
        '@angular-eslint/template/no-autofocus': 'off',

        /*
            When considering efficient bindings use memoization and pipes. Avoid heavy array iteratoration, nested
            function calls, and calls into uncontrolled third-party imports. However, there are many cases where a
            function call significantly improves template readability and has no impact on performance—where a 1ms
            execution is imperceivable for users.
        */
        '@angular-eslint/template/no-call-expression': 'off',

        '@angular-eslint/template/no-distracting-elements': 'error',

        '@angular-eslint/template/no-duplicate-attributes': 'error',

        /*
            This rule primarily impacts accessibility so currently requires enforcement per project.
        */
        '@angular-eslint/template/no-positive-tabindex': 'off',

        '@angular-eslint/template/use-track-by-function': 'off'
    }
};
