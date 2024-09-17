const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumberReports",
  reportPath: "cypress/cucumberReports/cucumber-report.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "100",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Sep 17 2024,05:47 PM IST" },
      { label: "Execution End Time", value: "Sep 17 2024, 05:47 PM IST" },
    ],
  },
});