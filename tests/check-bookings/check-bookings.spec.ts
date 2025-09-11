import {test, expect} from '../../fixture';

test.describe('Booking Availability Tests', () => {

  test('should check booking availability for today\'s date', async ({ homePage, page }) => {
    await homePage.navigate();

    // Assert that at least one booking is available
    await page.waitForTimeout(5000);
    const availabilityResults = await page.locator('.room-card').count(); // Adjust selector as needed
    expect(availabilityResults).toBeGreaterThan(0) // Adjust minimum count as needed
  });
});