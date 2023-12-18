import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://gratka.pl",
    setupNodeEvents(on, config) {},
  },
});
