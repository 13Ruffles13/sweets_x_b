import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/*
  https://vite.dev/config/

  Target Environment: JS that vite handles

  Key Purposes:
  - Vite configuration
  - Vite plugins configuration
  - Vitest configuration

  Target API or Libraries:
  - Vite APIs
  - React

*/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // @ts-expect-error: Vitest=specific config not recognized by Vite types
  test: {
    environment: "jsdom",
    setupFiles: "./src/Test/setupTests.ts",
    globals: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/build/**",
        "**/coverage/**",
        "src/main.tsx",
        "src/vite-env.d.ts",
      ],
    },
  },
});
