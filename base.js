module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      "airbnb-base",
      "prettier",
    ],
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      "no-undef": "off", // TypeScript handles this natively
      "arrow-parens": "off",
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "ignore", // not compatible with TS
        },
      ],
      "no-unused-vars": "error",
      "no-use-before-define": "off",
      "no-shadow": "off",
      "consistent-return": "off",
      "no-console": "error",
      "max-classes-per-file": ["error", 2],
      "class-methods-use-this": "off",
      "no-useless-constructor": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
    },
  };
  