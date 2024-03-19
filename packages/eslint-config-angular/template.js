module.exports = {
    extends: [
        'plugin:@angular-eslint/template/recommended'
    ],
    rules: {
        /*
            Overrides to Angular template recommended rules:
            https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/src/configs/recommended.json
        */

        /*
            Angular template accessibility rules:
            https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/src/configs/accessibility.json
        */

        /* [accessibility] */
        '@angular-eslint/template/alt-text': 'off',

        /* [accessibility] */
        '@angular-eslint/template/click-events-have-key-events': 'off',

        /* [accessibility] */
        '@angular-eslint/template/elements-content': 'off',

        /* [accessibility] */
        '@angular-eslint/template/interactive-supports-focus': 'off',

        /* [accessibility] */
        '@angular-eslint/template/label-has-associated-control': 'off',

        /* [accessibility] */
        '@angular-eslint/template/mouse-events-have-key-events': 'off',

        /* [accessibility] */
        '@angular-eslint/template/no-autofocus': 'off',

        /* [accessibility] */
        '@angular-eslint/template/no-distracting-elements': 'error',

        /* [accessibility] */
        '@angular-eslint/template/no-positive-tabindex': 'off',

        /* [accessibility] */
        '@angular-eslint/template/role-has-required-aria': 'off',

        /* [accessibility] */
        '@angular-eslint/template/table-scope': 'off',

        /* [accessibility] */
        '@angular-eslint/template/valid-aria': 'error',

        /*
            Overrides to Angular rules outside of the recommended configuration:
        */

        '@angular-eslint/template/conditional-complexity': 'error',

        /*
            In practice, independent paths in templates tend to be parallel rather than linear. Templates are
            declarative whereas procedural code is more likely to result in cyclomatic complexity. While this rule may
            be applicable to specific features, a template should not result in an error simply because it exceeds the
            number of statements allotted by this rule.
        */
        '@angular-eslint/template/cyclomatic-complexity': 'off',

        /*
            Enable this rule by default to enforce internationalization for existing applications that are localized
            and new applications in the chance that they'll need to be localized in the future. Disable this rule
            if an application will never be localized.
        */
        '@angular-eslint/template/i18n': ['error', { checkId: false }],

        '@angular-eslint/template/no-any': 'error',

        /*
            When considering efficient bindings use memoization and pipes. Avoid heavy array iteratoration, nested
            function calls, and calls into uncontrolled third-party imports. However, there are many cases where a
            function call significantly improves template readability and has no impact on performance—where a 1ms
            execution is imperceivable for users.
        */
        '@angular-eslint/template/no-call-expression': 'off',

        '@angular-eslint/template/no-duplicate-attributes': 'error',

        /*
            Providing a `trackBy` function in `ngFor` loops can improve performance in specific cases where Angular can't track references, but it's overkill to require it for every `ngFor` so this rule is disabled.
        */
        '@angular-eslint/template/use-track-by-function': 'off'
    }
};
