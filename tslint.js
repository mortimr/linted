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
    "no-inferrable-types": [true, "ignore-params"],
    "no-internal-module": true,
    "no-magic-numbers": true,
    "no-namespace": true,
    "no-non-null-assertion": true,
    "no-reference": true,
    "no-this-assignment": true,
    "no-var-requires": true,
    "only-arrow-functions": true,
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
    "import-spacing": true,
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
    ]
  },
  "eofline": true,
  "no-consecutive-blank-lines": true,

  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-config-airbnb')), './')
  ],
};
