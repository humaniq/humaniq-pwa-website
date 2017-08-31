module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "globals": {
    "describe": true,
    "store": true,
    'Console': true,
    '__SERVER__': true,
    '__CLIENT__': true,
    '__DEVELOPMENT__': true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jest/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "15.3" // React version, default to the latest React stable release
    }
  },
  "plugins": [
    "react",
    "jest"
  ],
  "parser": "babel-eslint",
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-unused-vars": [1, {varsIgnorePattern: "PropTypes|styles"}],
    "no-unused-expressions": 0,
    "no-case-declarations": 0,
    "react/prop-types": 0,
    "no-irregular-whitespace": 0,
    "no-debugger": 0,
    "no-console": 0,
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error"
  }
};