const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');


const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,

  config.db = {
    userName: "vasu2908",
    password: "vasu@2908",
    server: "vasu290811.database.windows.net",
    options: {
        database: "vasu2908",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}


  await addCucumberPreprocessorPlugin(on, config);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on("file:preprocessor", preprocessor(config));


  //require('cypress-mochawesome-reporter/plugin')(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({

  defaultCommandTimeout: 4000,
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  projectId: "htzybv",
  env:{
     url:'https://rahulshettyacademy.com'
  },
  retries:{
   runMode:0,
   openMode:0,
  },
  e2e: {
  
    //specPattern:'cypress/integration/examples/BDD/*.feature',
    specPattern:'cypress/integration/examples/Test17-cypressDB.js',
    viewportHeight:1000,
    viewportWidth:1200,
    setupNodeEvents
  },
});
