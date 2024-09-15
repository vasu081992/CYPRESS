const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 4000,
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  projectId: "htzybv",
  env:{
     url:'https://rahulshettyacademy.com'
  },
  retries:{
   runMode:1,
   openMode:1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);

      
    },
    specPattern:'cypress/integration/examples/Test7.js',
    viewportHeight:1000,
    viewportWidth:1200,
  },
});
  