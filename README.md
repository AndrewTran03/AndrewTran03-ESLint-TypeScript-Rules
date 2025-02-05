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
angular-eslint

# React-Specific:
eslint-plugin-react
eslint-plugin-react-hooks
```

- To install these project dependencies:

```sh
npm install eslint eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unicorn typescript-eslint @typescript-eslint/utils globals @angular-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks -D
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

### `ESLint` File Configuration

#### Recommended (Stable) - `CommonJS`

---

```js
// eslint.config.cjs
const ESLINT_RULES = require("@andrewt03/eslint-typescript-rules");
const eslintPluginUnicorn = require("eslint-plugin-unicorn");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const eslintPluginSimpleImportSort = require("eslint-plugin-simple-import-sort");
const eslintImportPlugin = require("eslint-plugin-import");
const angularEslintPlugin = require("@angular-eslint/eslint-plugin");
const eslintReactPlugin = require("eslint-plugin-react");
const eslintReactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
  {
    ignores: ["**/dist"]
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],

    // React-Specific (Omit if not necessary)
    settings: {
      react: {
        version: "detect"
      }
    },

    languageOptions: {
      globals: globals.builtin,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,

        // React-Specific (Omit if not necessary)
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": eslintPluginSimpleImportSort,
      import: eslintImportPlugin,

      // Angular-Specific (Omit if not necessary)
      "@angular-eslint": angularEslintPlugin,

      // React-Specific (Omit if not necessary)
      react: eslintReactPlugin,
      "react-hooks": eslintReactHooksPlugin
    },
    rules: {
      // Standard ESLint Rules
      ...ESLINT_RULES.STANDARD_ESLINT_CONFIG_RULES,

      // TypeScript ESLint Rules
      ...ESLINT_RULES.TYPESCRIPT_ESLINT_CONFIG_RULES,

      // Unicorn ESLint Rules
      ...ESLINT_RULES.UNICORN_ESLINT_CONFIG_RULES,

      // ESLint Rules: Console/Debugger to "Warn"
      ...ESLINT_RULES.CONSOLE_DEBUGGER_WARN_ESLINT_CONFIG_RULES,
      // ...ESLINT_RULES.CONSOLE_DEBUGGER_ERROR_ESLINT_CONFIG_RULES, // Alternative: Console/Debugger to "Error"

      // ESLint Rules: Sorting Imports
      ...ESLINT_RULES.SORT_IMPORT_ESLINT_CONFIG_RULES,

      // ESLint Rules: Angular
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Component"]
        }
      ],
      "@angular-eslint/component-selector": [
        "warn",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ],
      "@angular-eslint/directive-class-suffix": [
        "error",
        {
          suffixes: ["Directive"]
        }
      ],
      "@angular-eslint/directive-selector": [
        "warn",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      ...ESLINT_RULES.ANGULAR_ESLINT_CONFIG_RULES,

      // ESLint Rules: React
      ...ESLINT_RULES.REACT_ESLINT_CONFIG_RULES,
      ...ESLINT_RULES.REACT_HOOKS_ESLINT_CONFIG_RULES

      // TODO: Add more ESLint rules here for personal customization (or you can override existing rules manually based on project/team development norms)
    }
  }
];
```

#### Alternative - `ESModules`

- **Note:** In `ESModules`, the `__dirname` variable is not available. As a fix, in most cases, we can leverage `import.meta.dirname` or `process.cwd()` in this case since the `ESLint` file configuration is typically written at the top-level of a project. However, if this does not work, some alternatives can be found in this [StackOverflow](https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules) post.

---

```js
// eslint.config.mjs
import ESLINT_RULES from "@andrewt03/eslint-typescript-rules";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintImportPlugin from "eslint-plugin-import";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import eslintReactPlugin from "eslint-plugin-react";
import eslintReactHooksPlugin from "eslint-plugin-react-hooks";

const DIR_NAME = import.meta.dirname;

export default [
  {
    ignores: ["**/dist"]
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],

    // React-Specific (Omit if not necessary)
    settings: {
      react: {
        version: "detect"
      }
    },

    languageOptions: {
      globals: globals.builtin,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: DIR_NAME,

        // React-Specific (Omit if not necessary)
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": eslintPluginSimpleImportSort,
      import: eslintImportPlugin,

      // Angular-Specific (Omit if not necessary)
      "@angular-eslint": angularEslintPlugin,

      // React-Specific (Omit if not necessary)
      react: eslintReactPlugin,
      "react-hooks": eslintReactHooksPlugin
    },
    rules: {
      // Standard ESLint Rules
      ...ESLINT_RULES.STANDARD_ESLINT_CONFIG_RULES,

      // TypeScript ESLint Rules
      ...ESLINT_RULES.TYPESCRIPT_ESLINT_CONFIG_RULES,

      // Unicorn ESLint Rules
      ...ESLINT_RULES.UNICORN_ESLINT_CONFIG_RULES,

      // ESLint Rules: Console/Debugger to "Warn"
      ...ESLINT_RULES.CONSOLE_DEBUGGER_WARN_ESLINT_CONFIG_RULES,
      // ...ESLINT_RULES.CONSOLE_DEBUGGER_ERROR_ESLINT_CONFIG_RULES, // Alternative: Console/Debugger to "Error"

      // ESLint Rules: Sorting Imports
      ...ESLINT_RULES.SORT_IMPORT_ESLINT_CONFIG_RULES,

      // ESLint Rules: Angular
      "@angular-eslint/component-class-suffix": [
        "error",
        {
          suffixes: ["Component"]
        }
      ],
      "@angular-eslint/component-selector": [
        "warn",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ],
      "@angular-eslint/directive-class-suffix": [
        "error",
        {
          suffixes: ["Directive"]
        }
      ],
      "@angular-eslint/directive-selector": [
        "warn",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      ...ESLINT_RULES.ANGULAR_ESLINT_CONFIG_RULES,

      // ESLint Rules: React
      ...ESLINT_RULES.REACT_ESLINT_CONFIG_RULES,
      ...ESLINT_RULES.REACT_HOOKS_ESLINT_CONFIG_RULES

      // TODO: Add more ESLint rules here for personal customization (or you can override existing rules manually based on project/team development norms)
    }
  }
];
```

## Additional Resources:

For more information about `ESLint` Rule Configuration, please check out the following links:

- `ESLint`: https://eslint.org/docs/latest/rules/
- `TypeScript-ESLint`: https://typescript-eslint.io/rules/
- `ESLint-Plugin-Unicorn`: https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main?tab=readme-ov-file
- `ESLint-Plugin-Import`: https://www.npmjs.com/package/eslint-plugin-import
- `ESLint-Plugin-Simple-Import-Sort`: https://www.npmjs.com/package/eslint-plugin-simple-import-sort
- `Angular-ESLint`: https://www.npmjs.com/package/@angular-eslint/eslint-plugin
- `React-ESLint`: https://www.npmjs.com/package/eslint-plugin-react
- `React-Hooks-ESLint`: https://www.npmjs.com/package/eslint-plugin-react-hooks
