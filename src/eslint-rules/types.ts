type ESLintOverrideRuleOptions = {
  [key: string]: string | number | boolean | string[];
};

type ConsistentGenericConstructorOverrideRuleOptions =
  | "constructor"
  | "type-annotation";

type QuotesOverrideRuleOptions = "single" | "double" | "backtick";

type ConsistentTypeDefinitionsOverrideRuleOptions = "interface" | "type";

export type ConfigRules = {
  [key: string]:
    | "off"
    | "warn"
    | "error"
    | ["warn" | "error", ESLintOverrideRuleOptions]
    | ["warn" | "error", ...ESLintOverrideRuleOptions[]]
    | ["warn" | "error", "always" | "never"]
    | ["warn" | "error", "always" | "never", ESLintOverrideRuleOptions]
    | ["warn" | "error", ConsistentGenericConstructorOverrideRuleOptions]
    | ["warn" | "error", ConsistentTypeDefinitionsOverrideRuleOptions]
    | ["warn" | "error", QuotesOverrideRuleOptions, ESLintOverrideRuleOptions];
};
