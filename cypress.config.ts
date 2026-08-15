import { defineConfig } from "cypress";

/*
  https://docs.cypress.io/guides/references/configuration

  Target Environment: Cypress runtime (frontend)

  Key Purposes:
  - Cypress configuration
  - Cypress plugins configuration
  
  Target API or Libraries:
  - Cypress APIs
*/

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", (details) => {
        console.log("Cypress is starting the run...", details);
      });

      console.log(config.baseUrl);

      return config;
    },
    baseUrl: "https://sweetsxb.netlify.app/",
  },
});
