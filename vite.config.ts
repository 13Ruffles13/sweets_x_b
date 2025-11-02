import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sweets_x_b/',
  // @ts-expect-error: Vitest=specific config not recognized by Vite types
  test: { environment: 'jsdom' },
})
