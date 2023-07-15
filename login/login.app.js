const assert = require('chai').assert;
const puppeteer = require('puppeteer');

let browser;
let page;

before(async function () {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

after(async function () {
  if (browser) {
    await browser.close();
  }
});

describe('Integration Tests', function () {
  // Your test cases go here


  const assert = require('chai').assert;
const { launchBrowser, closeBrowser } = require('./browser');

describe('Integration Tests', function () {
  let page;

  before(async function () {
    page = await launchBrowser();
  });

  after(async function () {
    await closeBrowser();
  });

  it('should switch to the Register form when clicking the registration link', async function () {
    await page.goto('http://localhost:3000');
    const registerLink = await page.$('.link-btn');
    await registerLink.click();

    const registerFormTitle = await page.$eval('h2', (element) => element.textContent);
    assert.equal(registerFormTitle, 'Register');
  });

  it('should switch to the Login form when clicking the login link', async function () {
    await page.goto('http://localhost:3000');
    const loginLink = await page.$('.link-btn');
    await loginLink.click();

    const loginFormTitle = await page.$eval('h2', (element) => element.textContent);
    assert.equal(loginFormTitle, 'Login');
  });

  it('should submit the Login form with valid credentials', async function () {
    await page.goto('http://localhost:3000');
    const emailInput = await page.$('input[name="email"]');
    const passwordInput = await page.$('input[name="password"]');
    const loginButton = await page.$('button[type="submit"]');

    await emailInput.type('test@example.com');
    await passwordInput.type('test123');
    await loginButton.click();

    // Replace the console.log with the actual action you want to test
    await page.waitForNavigation();
    console.log('Logged in successfully!');
  });

  it('should submit the Register form with valid credentials', async function () {
    await page.goto('http://localhost:3000');
    const nameInput = await page.$('input[name="name"]');
    const emailInput = await page.$('input[name="email"]');
    const passwordInput = await page.$('input[name="password"]');
    const registerButton = await page.$('button[type="submit"]');

    await nameInput.type('John Doe');
    await emailInput.type('johndoe@example.com');
    await passwordInput.type('password123');
    await registerButton.click();

    // Replace the console.log with the actual action you want to test
    await page.waitForNavigation();
    console.log('Registered successfully!');
  });
});

});
