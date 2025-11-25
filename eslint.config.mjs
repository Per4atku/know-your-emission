import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:tailwindcss/recommended",
      "prettier", // important: turns off ESLint rules that conflict with Prettier
    ],
    plugins: ["tailwindcss"],
    rules: {
      // Some useful tailwindcss-specific rules:
      "tailwindcss/classnames-order": "warn", // warn when class order is “weird”
      "tailwindcss/no-contradicting-classname": "error", // e.g. “p-2 p-4” or conflicting classes
      "tailwindcss/no-custom-classname": "off", // you may want custom classnames
      "tailwindcss/enforces-shorthand": "warn", // encourage shorthand like “px-4” not “pl-4 pr-4”
      "tailwindcss/no-arbitrary-value": "off", // optional: disallow arbitrary values
    },
    settings: {
      tailwindcss: {
        // If you use helper functions to build class strings, mention them here:
        callees: ["clsx", "cn", "cva"],
        // other settings, but these two are usually enough for basic setup
      },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
