// eslint.config.mjs
import ESLINT_RULES from "@andrewt03/eslint-typescript-rules";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintImportPlugin from "eslint-plugin-import";
import eslintReactPlugin from "eslint-plugin-react";
import eslintReactHooksPlugin from "eslint-plugin-react-hooks";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";
import angularTemplateParser from "@angular-eslint/template-parser";
import angularTemplatePlugin from "@angular-eslint/eslint-plugin-template";

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
  },
  {
    // Angular-Specific (Omit if not necessary)
    files: ["src/**/*.html"],
    languageOptions: {
      parser: angularTemplateParser
    },
    plugins: {
      "@angular-eslint/template": angularTemplatePlugin
    },
    rules: {
      ...ESLINT_RULES.ANGULAR_HTML_TEMPLATE_ESLINT_CONFIG_RULES

      // TODO: Add more ESLint rules here for personal customization (or you can override existing rules manually based on project/team development norms)
    }
  }
];
