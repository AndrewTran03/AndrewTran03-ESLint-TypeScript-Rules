# `AndrewTran03-ESLint-TypeScript-Rules`

# &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AndrewTran03/AndrewTran03-ESLint-TypeScript-Rules/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/@andrewt03/eslint-typescript-rules.svg?style=flat)](https://www.npmjs.com/package/@andrewt03/eslint-typescript-rules) &middot;

The `AndrewTran03-ESLint-TypeScript-Rules` package is `recommended` ESLint Rules for general `TypeScript`, `Node.js/Express.js`, `Angular`, and `React.js` Projects that utilize `TypeScript` for development.

- **Note:** By default, we will be using ESLint's newest `Flat Config` file configuration (published in August 2022 and publicly announced on this [blog](https://eslint.org/blog/2022/08/new-config-system-part-2/) post). If you are currently using a legacy `eslintrc` format in your codebase (such as `.eslintrc`, `.eslintrc.js`, `.eslintrc.json`, `.eslintrc.yml`, or other another legacy-equivalent file), please consult `ESLint` for the most updated [Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

## Necessary Dependencies

```sh
# General:
eslint
eslint-plugin-import
eslint-plugin-simple-import-sort
eslint-plugin-unicorn
typescript-eslint
@typescript-eslint/utils
globals

# Angular-Specific:
@angular-eslint/eslint-plugin
@angular-eslint/template-parser
@angular-eslint/eslint-plugin-template

# React-Specific:
eslint-plugin-react
eslint-plugin-react-hooks
```

- To install these project dependencies:

```sh
npm install eslint eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn typescript-eslint @typescript-eslint/utils globals @angular-eslint/eslint-plugin @angular-eslint/template-parser @angular-eslint/eslint-plugin-template eslint-plugin-react eslint-plugin-react-hooks -D
```

## Example Usage

### `NPM` File Configuration

- Add the following lines to your `package.json` under `scripts`:

```json
{
  "scripts": {
    "lint": "eslint \"./src\"",
    "lint:fix": "eslint \"./src\" --fix"
  }
}
```

- **Note:** Please change the directory path in these commands based on your project configuration and use-case!
- Type `npm run lint` in your terminal to log your linting warnings/errors.
- Type `npm run lint:fix` in your terminal to allow `ESLint` to try and resolve your linting warnings/errors within your project (wherever possible).

## `ESLint` File Configuration

### Recommended (Stable) - `ESModules` File Configuration

- **Note:** In `ESModules`, the `__dirname` variable is not available. As a fix, in most cases, we can leverage `import.meta.dirname` or `process.cwd()` in this case since the `ESLint` file configuration is typically written at the top-level of a project. However, if this does not work, some alternatives can be found in this [StackOverflow](https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules) post.

- NOTE: A `copyable` example of `ESModules` can be found in this repository at [`configs/eslint.config.mjs`](./configs/eslint.config.mjs).

#### Alternative - `CommonJS` (No Longer Recommended)

- **Note:** This configuration method is `NOT` **recommended** as it may cause compatibility issues with certain newer versions of these `ESLint` plugin packages and rules.
- Furthermore, modern `ESLint` features (and the larger `ECMAScript` ecosystem) is moving towards `ESModules`, rather than `CommonJS`. Thus, it is highly recommended to migrate your codebase to `ESModules` and use the `ESLint Flat Config` system instead and only use this option as a **last resort**.

- NOTE: A `copyable` example of `CommonJS` can be found in this repository at [`configs/eslint.config.cjs`](./configs/eslint.config.cjs).

## Additional Resources:

For more information about `ESLint` Rule Configuration, please check out the following links:

- `ESLint`: https://eslint.org/docs/latest/rules/
- `TypeScript-ESLint`: https://typescript-eslint.io/rules/
- `ESLint-Plugin-Unicorn`: https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main?tab=readme-ov-file
- `ESLint-Plugin-Import`: https://www.npmjs.com/package/eslint-plugin-import
- `ESLint-Plugin-Simple-Import-Sort`: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
- `Angular-ESLint`: https://www.npmjs.com/package/@angular-eslint/eslint-plugin
- `Angular-ESLint-Template`: https://www.npmjs.com/package/@angular-eslint/eslint-plugin-template
- `React-ESLint`: https://www.npmjs.com/package/eslint-plugin-react
- `React-Hooks-ESLint`: https://www.npmjs.com/package/eslint-plugin-react-hooks
