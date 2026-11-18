import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    files: ["context/theme-context.tsx"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
  {
    files: ["email/contact-form-email.tsx"],
    rules: { "@next/next/no-head-element": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
