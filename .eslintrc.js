module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-unused-expression": "off",
    "import/default": 0,
    "import/no-duplicates": 0,
    "import/named": 0,
    "import/namespace": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 2,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "arrow-body-style": "off", 
  }
};
