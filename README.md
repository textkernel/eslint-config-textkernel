# eslint-config-textkernel
ESLint shareable config for Textkernel style guide

[eslint-config-textkernel](https://github.com/textkernel/eslint-config-textkernel) is a shareable configuration package for [eslint](http://eslint.org) built on top of [eslint-airbnb-config](https://github.com/airbnb/javascript) and modified to meet Textkernel's own standards.

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev eslint-config-textkernel
```

2. Install [eslint-config-textkernel](https://github.com/textkernel/eslint-config-textkernel) as a development dependency of your project:

```sh
npm install eslint-config-textkernel --save-dev
```

## Available ESLint configs

### eslint-config-textkernel/base

The base export contains common rules that are not specific to any framework or environment.

```js
// eslintrc.js
module.exports = {
	extends: ['eslint-config-textkernel/base'],
};
```

### eslint-config-textkernel

The default export that extends `eslint-config-textkernel/base` adding Typescript rules.

```js
// eslintrc.js
module.exports = {
	extends: ['eslint-config-textkernel'],
};
```

### eslint-config-textkernel/react

Extends `eslint-config-textkernel` adding specific rules to React.


```js
// eslintrc.js
module.exports = {
	extends: ['eslint-config-textkernel/react'],
};
```

## VSCode integration

We recommend turning on VSCode settings to automatically run `eslint --fix` on save.

```json
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true,
}
```

This will automatically format your code once you save. You don't need VSCode prettier extension enabled or running on save as eslint will automatically run `prettier` for you.
