import { test as baseTest } from '@playwright/test';
import { HomePage } from './POM/HomePage';
import fs from 'fs';
import {createLoggingProxy} from './logger-proxy';

type Fixtures = {
  homePage: HomePage;
};

export const test = baseTest.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = createLoggingProxy(new HomePage(page));
    await use(homePage);
  },
});

  test.afterEach(async ({page}, testInfo) => {
    const logFile = 'logs/test.log';
    
    try {
      if (fs.existsSync(logFile)) {
        await testInfo.attach('Logger Output', {
          path: logFile,
          contentType: 'text/plain',
        });
      }
    } catch (error) {
      console.warn('Failed to attach log file:', error);
    }

      try {
        const finalScreenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach('Final State (Test Failed)', {
          body: finalScreenshot,
          contentType: 'image/png'
        });
      } catch (e) {
        console.warn('Could not capture final screenshot:', e);
      }
    

  });

export const expect = test.expect;
export const describe = test.describe;