import {test, expect} from '../../fixture';
test.describe('Contact Form Tests', () => {
  test('should display an error message for invalid phone number', async ({ homePage, page }) => {

    // Navigate to the homepage
    await homePage.navigate();

    // Fill out the contact form with invalid phone number
    await homePage.fillContactForm(
      'John Doe',          // Name
      'johndoe@example.com', // Email
      '12345',             // Invalid Phone (too short)
      'Test Subject',      // Subject
      'This is a test message.' // Messageß
    );

    // Assert that the error message is visible
    await expect(homePage.contactForm.phoneError).toBeVisible();
    await expect(homePage.contactForm.phoneError).toHaveText('Phone must be between 11 and 21 characters.');
    expect(await page.screenshot()).toMatchSnapshot('contact-form-error.png', {
      maxDiffPixelRatio: 0.1
    });
  });
});