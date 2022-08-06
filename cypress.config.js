const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://simpletodolist2022.herokuapp.com/',
    retries: { "runMode": 1, "openMode": 0 },
    video: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
