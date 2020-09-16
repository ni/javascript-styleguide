module.exports = {
  extends: 'airbnb-base',
  rules: {
    /*
        This rule is controversial and is defined such that trailing commas are not required but
        may be used if preferred.
    */
    'comma-dangle': ['error', 'only-multiline'],
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
  },
};