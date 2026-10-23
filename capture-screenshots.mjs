import puppeteer from 'puppeteer';
import path from 'path';

const outDir = 'C:/Users/Aryan Kamdar/.gemini/antigravity/brain/9b56973a-8c38-4d70-a49e-0e2e69f6a987';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-webgl', '--use-gl=angle', '--hide-scrollbars']
  });

  const page = await browser.newPage();

  // Desktop 1440x900
  console.log('Capturing Desktop 1440px...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 20000 });
  await page.waitForSelector('#world-3d-canvas-container canvas', { timeout: 10000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 3000));

  await page.screenshot({ path: path.join(outDir, 'desktop-1440-hero.png') });
  console.log('Saved desktop-1440-hero.png');

  // Desktop Services
  await page.evaluate(() => {
    document.querySelector('#services')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'desktop-1440-services.png') });
  console.log('Saved desktop-1440-services.png');

  // Desktop Infrastructure & Bridge
  await page.evaluate(() => {
    document.querySelector('#infrastructure')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'desktop-1440-infrastructure.png') });
  console.log('Saved desktop-1440-infrastructure.png');

  // Desktop Compliance Table
  await page.evaluate(() => {
    document.querySelector('#compliance')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'desktop-1440-compliance.png') });
  console.log('Saved desktop-1440-compliance.png');

  // Desktop Contact
  await page.evaluate(() => {
    document.querySelector('#contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'desktop-1440-contact.png') });
  console.log('Saved desktop-1440-contact.png');

  // Mobile Viewport (390 x 844)
  console.log('Capturing Mobile 390px...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 20000 });
  await page.waitForSelector('#world-3d-canvas-container canvas', { timeout: 10000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 2500));

  await page.screenshot({ path: path.join(outDir, 'mobile-390-hero.png') });
  console.log('Saved mobile-390-hero.png');

  await page.evaluate(() => {
    document.querySelector('#services')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'mobile-390-services.png') });
  console.log('Saved mobile-390-services.png');

  await page.evaluate(() => {
    document.querySelector('#compliance')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'mobile-390-compliance.png') });
  console.log('Saved mobile-390-compliance.png');

  await page.evaluate(() => {
    document.querySelector('#contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outDir, 'mobile-390-contact.png') });
  console.log('Saved mobile-390-contact.png');

  await browser.close();
  console.log('All screenshots completed successfully!');
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
