# @textkernel/eslint-config
ESLint shareable config for Textkernel style guide

[@textkernel/eslint-config](https://github.com/textkernel/eslint-config-textkernel) is a shareable configuration package for [eslint](http://eslint.org) built on top of [eslint-airbnb-config](https://github.com/airbnb/javascript) and modified to meet Textkernel's own standards.

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev @textkernel/eslint-config
```

2. Install [@textkernel/eslint-config](https://github.com/textkernel/eslint-config-textkernel) as a development dependency of your project:

```sh
npm install @textkernel/eslint-config --save-dev
```

3. Install yarn [@textkernel/eslint-config](https://github.com/textkernel/eslint-config-textkernel):

```sh
yarn add --dev install @textkernel/eslint-config
```


## Available ESLint configs

### @textkernel/eslint-config/base

The base export contains common rules that are not specific to any framework or environment.

```js
// eslintrc.js
module.exports = {
	extends: ['@textkernel/eslint-config/base'],
};
```

### @textkernel/eslint-config

The default export that extends `@textkernel/eslint-config` adding Typescript rules.

```js
// eslintrc.js
module.exports = {
	extends: ['@textkernel/eslint-config'],
};
```

### @textkernel/eslint-config/react

Extends `@textkernel/eslint-config` adding specific rules to React.


```js
// eslintrc.js
module.exports = {
	extends: ['@textkernel/eslint-config/react'],
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

## Repease and Publishing

1. Bump the `version` in `package.json` in your branch.
2. Merge your branch into the `master` branch.
3. Switch to the master branch and pull all changes:
 ```sh
git checkout master
git pull
```
4. Log in to the npm registry:
 ```sh
npm logi
```
5. Publish the library to npm:
```sh
npm publish --access public
```
