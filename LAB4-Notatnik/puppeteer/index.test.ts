// potrzebne pakiety:
// npm i puppeteer
// npm i @types/puppeteer
// npm i puppeteer-tsd

// uruchomienie
// 1) uruchomienie src: npm start
// 2) build projektu: tsc --OutDir build index.test.ts
// 3) node index.test.js z katalogu build

import * as puppeteer from 'puppeteer';

(async () => {
  // const browser = await puppeteer.launch(); // headless
  const browser = await puppeteer.launch({ headless: false, slowMo: 40 })
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 })
  await page.goto('http://localhost:8080/');
  await page.waitFor(2000); // nie stosować bez wyraźnej potrzeby! Użyte ze względu na długi czas doczytywania notatek
  await page.screenshot({path: 'screen.png'});
  await page.waitForSelector('#title')
  await page.type('#title', 'Automate Note');
  await page.type('#description', 'Automate Note Content');
  await page.click('#addBtn')
  await page.screenshot({path: 'screen-after-wait.png'});
})();

// describe('Google', () => {
//   beforeAll(async () => {
//     await page.goto('https://google.com');
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch('Google');
//   });
// });