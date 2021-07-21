// This file sets up the environment for tests in cucumber js.

var webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
var until = webdriver.until;
var By = webdriver.By;
var {defineSupportCode} = require('cucumber');
var {elementIsNotVisible} = require("selenium-webdriver");
var Condition = webdriver.Condition;
const { defineParameterType } = require('cucumber')
const screen = {
  width: 1920,
  height: 1080
};
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
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})