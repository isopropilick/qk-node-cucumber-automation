// This file sets up the environment for tests in cucumber js.

var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var By = webdriver.By;
var {defineSupportCode} = require('cucumber');
var {elementIsNotVisible} = require("selenium-webdriver");
var Condition = webdriver.Condition;
const { defineParameterType } = require('cucumber')

defineParameterType({
  name: 'genero',
  regexp: /femenino|masculino/,
})
until.elementIsNotPresent = function elementIsNotPresent(locator) {
  return new Condition('for no element to be located ' + locator, function(driver) {
    return driver.findElements(locator).then(function(elements) {
      return elements.length == 0;
    });
  });
};

function CustomWorld() {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})