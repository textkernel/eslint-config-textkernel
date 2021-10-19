module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "./index",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off", // we don't need prop-types with TypeScript 🤟
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-curly-newline": "off",
    "react/static-property-placement": ["off", "property assignment"],
    "react/display-name": [
      2,
      {
        ignoreTranspilerName: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
};
