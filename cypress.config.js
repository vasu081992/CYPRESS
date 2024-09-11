const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/Revision/Test4-Dynamic-Dropdown.js',
    viewportHeight:1000,
    viewportWidth:1200
  },
});
  