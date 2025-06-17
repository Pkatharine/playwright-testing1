import {test, expect} from '../../fixture';


test.describe('Welcome Message Tests', () => {

  test('should check welcome message on home page', async ({ homePage, page }) => {
    // Navigate to the homepage
    await homePage.navigate();

    const welcomeHeader = page.locator('.hero h1'); // Adjust selector as needed
    await expect(welcomeHeader).toBeVisible();
    await expect(welcomeHeader).toHaveText('Welcome to Shady Meadows B&B');

    // Check the welcome message
    const welcomeMessage = page.locator('.hero p'); // Adjust selector as needed
    await expect(welcomeMessage).toBeVisible();
    await expect(welcomeMessage).toHaveText(
      'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.'
    );
    expect(await page.screenshot()).toMatchSnapshot('welcome-message.png', {
        maxDiffPixelRatio: 0.1
      });
  });
});