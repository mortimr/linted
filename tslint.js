const path = require('path');

module.exports = {
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
    ],
    "unified-signatures": true,
    "no-internal-module": true,
    "no-namespace": true,
    "no-reference": true,
    "no-this-assignment": true,
    "no-var-requires": true,
    "prefer-for-of": true,
    "prefer-readonly": true,
    "promise-function-async": true,
    "typedef-whitespace": [
      true,
      {
	"call-signature": "nospace",
	"index-signature": "nospace",
	"parameter": "nospace",
	"property-declaration": "nospace",
	"variable-declaration": "nospace",
      },
      {
	"call-signature": "onespace",
	"index-signature": "onespace",
	"parameter": "onespace",
	"property-declaration": "onespace",
	"variable-declaration": "onespace",
      },
    ],
    "unified-signatures": true,
    "max-classes-per-file": [true, 1],
    "semicolon": [true, "always"],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type",
      "check-typecast",
      "check-preblock",
      "check-type-operator",
      "check-rest-spread",
    ],
    "eofline": true,
    "no-consecutive-blank-lines": true,
    "quotemark": [true, "single", "jsx-single"],
    "curly": [true, "ignore-same-line"],
    "no-duplicate-switch-case": true,
    "no-duplicate-super": true,
    "triple-equals": [true, "allow-undefined-check", "allow-null-check"],
    "prefer-const": [true, {"destructuring": "all"}],
    "arrow-parens": true,
    "arrow-return-shorthand": [true, "multiline"],
    "class-name": true,
    "no-trailing-whitespace": [true, "ignore-comments", "ignore-jsdoc", "ignore-blank-lines", "ignore-template-strings"]
  },

  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './')
  ],
};
