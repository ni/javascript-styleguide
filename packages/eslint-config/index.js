module.exports = {
    extends: 'airbnb-base',
    rules: {
        /*
            Omit arrow function parenthesis where they are not required to improve readability.
        */
        'arrow-parens': ['error', 'as-needed'],
        /*
            This rule is controversial and is defined such that trailing commas are not required but
            may be used if preferred.
        */
        'comma-dangle': ['error', 'only-multiline'],
        /*
            Do not require a newline at the end of every file in favor of reducing the effort to
            satisfy the rule over the proposed advantages on UNIX and with concatenation.
        */
        'eol-last': 'off',
        /*
            This indentation size is used to promote consistency.
        */
        indent: ['error', 4],
        /*
            This is the default value which is defined here to note that there may be exceptions
            where it is appropriate to disable this rule for older projects or with a comment.
            Including one class per file is a best practice and recommended by the Angular style
            guide. However, migrating older projects may not be trivial, and there may be
            exceptions for organization.
        */
        'max-classes-per-file': ['error', 1],
        /*
            Errors from this rule will identify issues more often than not. However, there may be
            unique exceptions where this rule can be disabled with an inline comment.
        */
        'no-await-in-loop': 'error',
        /*
            Console logs should not be exposed in production environments.
        */
        'no-console': 'error',
        /*
            Migrating from var is not trivial, so there may be exceptions for older projects.
        */
        'no-var': 'error',
        /*
            This configuration already supports the JSDoc syntax. Add additional syntax as line or
            block exceptions or markers when necessary.
        */
        'spaced-comment': 'error'
    },
};