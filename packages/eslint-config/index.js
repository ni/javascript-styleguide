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
    }
};