import {test, expect} from '../../fixture';

test.describe('Contact Form Tests', () => {

  test('should successfully submit the contact form with valid data', async ({ homePage, page }) => {
    // Navigate to the homepage
    await homePage.navigate();

    // Fill out the contact form with valid data
    await homePage.fillContactForm(
      'Jane Smith',           // Name
      'janesmith@example.com', // Email
      '12345678901',          // Valid Phone (11 characters)
      'Inquiry',              // Subject
      'This is a valid test message for the contact form.' // Message
    );


    // Assert that the form submission was successful
    // Note: You might need to adjust this based on how your application behaves after a successful submission
    // For example, you might check for a success message or a redirect
    await expect(page.locator('#contact .card-body')).toBeVisible();
    await expect(page.locator('#contact .card-body')).toContainText('Thanks for getting in touch Jane Smith!');

    // Optionally, take a screenshot of the success state
    expect(await page.screenshot()).toMatchSnapshot('contact-form-success.png', {
      maxDiffPixelRatio: 0.1
    });
  });
});