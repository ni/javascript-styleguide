module.exports = {
  extends: 'airbnb-base',
  rules: {
    /*
        Errors from this rule will identify issues more often than not. However, there may be
        unique exceptions where this rule can be disabled with an inline comment.
    */
    'no-await-in-loop': 'error',
  },
};