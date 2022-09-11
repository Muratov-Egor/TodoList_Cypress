const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://simpletodolist2022.herokuapp.com/',
    retries: { "runMode": 0, "openMode": 0 },
    video: false,
    env: {
      allure: true,
      allureLogCypress: false,
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  projectId: "xdm5ap"
});
