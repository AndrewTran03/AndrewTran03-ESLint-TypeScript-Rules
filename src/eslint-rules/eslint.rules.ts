import { ConfigRules } from "./types";

/**
 * ESLint Ruleset Configuration (Exported At Bottom of File)
 */

/**
 * @tutorial [ESLint-Reference](https://eslint.org/docs/latest/rules/)
 */
const STANDARD_ESLINT_CONFIG_RULES: ConfigRules = {
  semi: "error",
  quotes: [
    "error",
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  "no-var": "error",
  "no-void": "error",
  "prefer-const": "error",
  "getter-return": "error",
  "no-setter-return": "error",
  "no-class-assign": "error",
  "no-const-assign": "error",
  "no-constant-binary-expression": "error",
  "no-dupe-args": "error",
  "no-dupe-else-if": "error",
  "no-duplicate-case": "error",
  "no-duplicate-imports": "error",
  "no-ex-assign": "error",
  "no-fallthrough": "error",
  "no-inner-declarations": "error",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-delete-var": "error",
  "no-empty": "error",
  // "no-empty-function": "error",
  "no-empty-static-block": "error",
  "no-eval": "error",
  "no-implied-eval": "error",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-label": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": "error",
  "no-label-var": "error",
  "no-labels": "error",
  "no-lone-blocks": "error",
  "no-lonely-if": "error",
  "no-multi-assign": "error",
  "no-nested-ternary": "error",
  "no-new": "error",
  "no-new-func": "error",
  "no-new-wrappers": "error",
  "no-param-reassign": "error",
  "no-proto": "error",
  "no-return-assign": "error",
  "no-script-url": "error",
  "no-sequences": "error",
  "no-compare-neg-zero": "error",
  "no-underscore-dangle": "error",
  "no-throw-literal": "error",
  "no-unused-labels": "error",
  "no-undefined": "error",
  "no-useless-call": "error",
  "no-useless-concat": "error",
  "prefer-template": "error",
  "no-useless-escape": "error",
  "no-useless-return": "error",
  "operator-assignment": ["error", "always"],
  "prefer-exponentiation-operator": "error",
  "prefer-object-has-own": "error",
  "require-yield": "error",
  yoda: "error",
  "no-else-return": [
    "error",
    {
      allowElseIf: true
    }
  ],
  "max-len": [
    "error",
    {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ],
  "max-lines": [
    "error",
    {
      max: 1000,
      skipBlankLines: true,
      skipComments: true
    }
  ],
  "logical-assignment-operators": [
    "error",
    "always",
    { enforceForIfStatements: true }
  ],
  // "sort-imports": [
  //   "error",
  //   {
  //     ignoreCase: false,
  //     ignoreDeclarationSort: false,
  //     ignoreMemberSort: false,
  //     memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
  //     allowSeparatedGroups: true
  //   }
  // ],
  "no-restricted-syntax": [
    "error",
    {
      selector: "TSEnumDeclaration:not([const=true])",
      message: "Avoid declaring non-const enums. Use const-types instead."
    },
    {
      selector: "TSEnumDeclaration[const=true]",
      message: "Avoid declaring const enums. Use const-types instead."
    },
    /**
     * @tutorial [No-Explicit-Void-Return-Type](https://typescript-eslint.io/play/#ts=5.7.2&showAST=es&fileType=.tsx&code=GYVwdgxgLglg9mABAZwIYE8ASMAUBKALkQDc4YATRAbwChFEIFk4AbAUwDoW4BzHAImz88AbhoBfGjUZhkUFBmwAmIvkQBeAHwkyldYjVbqdBk1adufQTGFjJ0pvLRYYAZlV4N20hQ2JQkLAIarT0MszsXLwCQqISUhAsqMjIiACCxvTOyvhEPpSh9Kay5lFWsWL0kvZsAB4ADnAATvKJyakAIqhQqADCcAC2jWBsYPKF4VBNINDNIYj29DxsUGksLF09uTq%2BhWFmkZYxNnFV8Q6y8r1JKUp%2BhTxNbCseXplF4aVH1rYm4gA08SAA&eslintrc=N4KABGBEBOCuA2BTAzpAXGUEKQHYHsBaaFAF2gEsBjUxAE0OQE9dSBDAD3TAG1xsciaNHzRIAGn4CsA7JGSIkNUd0gAxWLhoV8uACKIq8NtDakduMAD4wAFQDKtpgAdEAQVwF253dbv2ANXwKOgBpRCYAd1E6CSlZSABbFGQ2AHNEVTcAN2C6MEQOZ3hqClJ4JjBIynNcNLAAHUhckKawElJYaEsAawjo6HyAChJ6ukMASgA6SHiIAF9JWUw5uQUlUhUMdU1tXQBRIpJkZAs-BydXDy8zM5sHIJDwqJi45Zxkk-TM7Zy8gqKJSoZQqVRqFDqjWaeTaHS6vX6MTAI0Q9UKzmms2Wi1WMmW8kUhk2Ym2Dg0Wh8uEuiHOjhc7k8%2BG8d38jzCiMGb3eSRS3yyLXy6KBIMq1TKEPqTQFsMQnW6YD6L0GyNGYBMIkimNW83iAF1%2BDr5kA&tsconfig=N4KABGBEDGD2C2AHAlgGwKYCcDyiAuysAdgM6QBcYoEEkJemy0eAcgK6qoDCAFutAGsylBm3TgwAXxCSgA&tokens=false)
     * New Rule: Intended for developers to stop explicitly writing "void" return type explicitly (developed using ESTree ASTs).
     */
    {
      selector: "FunctionDeclaration > TSTypeAnnotation > TSVoidKeyword",
      message:
        '[FunctionDeclaration] Avoid explicitly declaring a "void" return type.'
    },
    {
      selector: "FunctionExpression > TSTypeAnnotation > TSVoidKeyword",
      message:
        '[FunctionExpression] Avoid explicitly declaring a "void" return type.'
    },
    {
      selector: "TSFunctionType > TSTypeAnnotation > TSVoidKeyword",
      message: '[FunctionType] Avoid explicitly declaring a "void" return type.'
    }
  ]
};

/**
 * @tutorial [TS-ESLint-Reference](https://typescript-eslint.io/rules/)
 */
const TYPESCRIPT_ESLINT_CONFIG_RULES: ConfigRules = {
  // "void" keyword is allowed
  // Issue: https://github.com/typescript-eslint/typescript-eslint/issues/7250
  // "@typescript-eslint/explicit-function-return-type": ["warn", {
  //   allowExpressions: true,
  //   allowTypedFunctionExpressions: true
  // }],

  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-unused-vars": "error",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/array-type": "error",
  "@typescript-eslint/ban-tslint-comment": "error",
  "@typescript-eslint/consistent-generic-constructors": [
    "error",
    "constructor"
  ],
  "consistent-return": "off",
  // "@typescript-eslint/consistent-return": "error",
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/no-array-delete": "error",
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-deprecated": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  "no-loss-of-precision": "off",
  "@typescript-eslint/no-loss-of-precision": "error",
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-assertion": "off",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-condition": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  "@typescript-eslint/no-unnecessary-template-expression": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-enum-comparison": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",
  "@typescript-eslint/no-unsafe-return": "error",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/no-var-requires": "error",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-find": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-function-type": "error",
  "@typescript-eslint/prefer-includes": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",
  "@typescript-eslint/related-getter-setter-pairs": "error",
  "@typescript-eslint/prefer-ts-expect-error": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "require-await": "off",
  "@typescript-eslint/require-await": "error",
  "@typescript-eslint/no-invalid-void-type": "error"
  // "@typescript-eslint/sort-type-constituents": "error"
};

/**
 * @tutorial [Unicorn-Reference](https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main?tab=readme-ov-file)
 */
const UNICORN_ESLINT_CONFIG_RULES: ConfigRules = {
  "unicorn/no-console-spaces": "error",
  "unicorn/no-empty-file": "error",
  "unicorn/no-array-for-each": "error",
  "unicorn/no-array-push-push": "error",
  "unicorn/no-array-reduce": [
    "error",
    {
      allowSimpleOperations: true
    }
  ],
  "unicorn/no-for-loop": "error",
  "unicorn/no-instanceof-array": "error",
  "unicorn/no-new-array": "error",
  "unicorn/no-new-buffer": "error",
  "unicorn/no-this-assignment": "error",
  "unicorn/prefer-string-slice": "error",
  "unicorn/prefer-module": "error",
  "unicorn/prefer-string-starts-ends-with": "error",
  "unicorn/prefer-string-trim-start-end": "error",
  "unicorn/prefer-negative-index": "error",
  "unicorn/consistent-existence-index-check": "error",
  "unicorn/switch-case-braces": "error",
  "unicorn/empty-brace-spaces": "error",
  "unicorn/require-number-to-fixed-digits-argument": "error"
};

const CONSOLE_DEBUGGER_WARN_ESLINT_CONFIG_RULES: ConfigRules = {
  "no-console": "warn",
  "no-debugger": "warn"
};

const CONSOLE_DEBUGGER_ERROR_ESLINT_CONFIG_RULES: ConfigRules = {
  "no-console": "error",
  "no-debugger": "error"
};

/**
 * @tutorial [ESLint-Plugin-Simple-Import-Sort-Reference](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
 * @tutorial [ESLint-Plugin-Import-Reference](https://www.npmjs.com/package/eslint-plugin-import)
 */
const SORT_IMPORT_ESLINT_CONFIG_RULES: ConfigRules = {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error"
};

/**
 * @tutorial [Angular-ESLint-Reference](https://www.npmjs.com/package/@angular-eslint/eslint-plugin)
 */
const ANGULAR_ESLINT_CONFIG_RULES: ConfigRules = {
  "@angular-eslint/contextual-lifecycle": "error",
  "@angular-eslint/no-async-lifecycle-method": "error",
  "@angular-eslint/no-attribute-decorator": "error",
  "@angular-eslint/sort-lifecycle-methods": "error",
  "@angular-eslint/component-class-suffix": [
    "error",
    {
      suffixes: ["Component"]
    }
  ],
  // "@angular-eslint/component-selector": [
  //   "warn",
  //   {
  //     type: "element",
  //     prefix: "app",
  //     style: "kebab-case"
  //   }
  // ],
  "@angular-eslint/directive-class-suffix": [
    "error",
    {
      suffixes: ["Directive"]
    }
  ],
  // "@angular-eslint/directive-selector": [
  //   "warn",
  //   {
  //     type: "attribute",
  //     prefix: "app",
  //     style: "camelCase"
  //   }
  // ],
  "@angular-eslint/consistent-component-styles": "error",
  "@angular-eslint/no-conflicting-lifecycle": "error",
  "@angular-eslint/no-duplicates-in-metadata-arrays": "error",
  "@angular-eslint/no-empty-lifecycle-method": "error",
  "@angular-eslint/no-input-rename": "error",
  "@angular-eslint/no-inputs-metadata-property": "error",
  "@angular-eslint/no-lifecycle-call": "error",
  "@angular-eslint/no-output-rename": "error",
  "@angular-eslint/no-pipe-impure": "error",
  "@angular-eslint/prefer-output-readonly": "error",
  "@angular-eslint/prefer-standalone": "error",
  "@angular-eslint/use-component-selector": "error",
  "@angular-eslint/use-lifecycle-interface": "error",
  "@angular-eslint/relative-url-prefix": "error",
  "@angular-eslint/use-pipe-transform-interface": "error"
};

/**
 * @tutorial [React-ESLint-Reference](https://www.npmjs.com/package/eslint-plugin-react)
 */
const REACT_ESLINT_CONFIG_RULES: ConfigRules = {
  "react/hook-use-state": "error",
  "react/destructuring-assignment": "error",
  "react/no-danger": "error",
  "react/no-danger-with-children": "error",
  "react/no-deprecated": "error",
  "react/no-multi-comp": "error",
  "react/no-unused-prop-types": "warn",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "react/boolean-prop-naming": "error",
  "react/no-array-index-key": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-typos": "error",
  "react/jsx-no-target-blank": "error",
  "react/jsx-pascal-case": "error",
  "react/no-access-state-in-setstate": "error",
  "react/jsx-boolean-value": ["error", "always"],
  "react/jsx-no-comment-textnodes": "error",
  "react/jsx-no-duplicate-props": "error",
  "react/jsx-fragments": "error",
  "react/jsx-curly-brace-presence": [
    "error",
    {
      props: "never",
      children: "never",
      propElementValues: "always"
    }
  ],
  "react/jsx-uses-vars": "error",
  "react/no-unused-state": "error",
  "react/prefer-read-only-props": "error",
  "react/self-closing-comp": "error",
  "react/void-dom-elements-no-children": "error"
};

/**
 * @tutorial [React-Hooks-ESLint-Reference](https://www.npmjs.com/package/eslint-plugin-react-hooks)
 */
const REACT_HOOKS_ESLINT_CONFIG_RULES = {
  "react-hooks/rules-of-hooks": "error"
};

// Export all ESLint Ruleset Configurations
export {
  CONSOLE_DEBUGGER_ERROR_ESLINT_CONFIG_RULES,
  CONSOLE_DEBUGGER_WARN_ESLINT_CONFIG_RULES,
  SORT_IMPORT_ESLINT_CONFIG_RULES,
  STANDARD_ESLINT_CONFIG_RULES,
  TYPESCRIPT_ESLINT_CONFIG_RULES,
  UNICORN_ESLINT_CONFIG_RULES,
  ANGULAR_ESLINT_CONFIG_RULES,
  REACT_ESLINT_CONFIG_RULES,
  REACT_HOOKS_ESLINT_CONFIG_RULES
};
