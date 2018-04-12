const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './')
  ],
  rules: {
    typedef: [
      true, 
      "call-signature",
      "arrow-call-signature",
      "parameter",
      "arrow-parameter",
      "property-declaration",
      "member-variable-declaration",
      "object-destructuring",
      "array-destructuring"
    ]
  }
};
