import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

/*
  https://vite.dev/config/

  Target Environment: Node.js runtime (build and dev tooling)

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
  test: {
    environment: "jsdom",
    setupFiles: "./src/Test/setupTests.ts",
    globals: true,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/**/*.{test,spec}.{ts,tsx}",
      ],
    },
  },
});
