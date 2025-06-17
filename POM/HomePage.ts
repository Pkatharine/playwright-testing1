import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navbarLinks: Locator;
  readonly heroSection: Locator;
  readonly bookNowButton: Locator;
  readonly checkInInput: Locator;
  readonly checkOutInput: Locator;
  readonly checkAvailabilityButton: Locator;
  readonly contactForm: {
    nameInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    subjectInput: Locator;
    messageTextarea: Locator;
    submitButton: Locator;
    phoneError: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.navbarLinks = page.locator('.navbar-nav .nav-link');
    this.heroSection = page.locator('.hero');
    this.bookNowButton = page.locator('.hero a.btn-primary');
    this.checkInInput = page.locator('//label[@for="checkin"]/..//div//input');
    this.checkOutInput = page.locator('//label[@for="checkout"]/..//div//input');
    this.checkAvailabilityButton = page.locator('#booking button.btn-primary');
    this.contactForm = {
      nameInput: page.locator('[data-testid="ContactName"]'),
      emailInput: page.locator('[data-testid="ContactEmail"]'),
      phoneInput: page.locator('[data-testid="ContactPhone"]'),
      subjectInput: page.locator('[data-testid="ContactSubject"]'),
      messageTextarea: page.locator('[data-testid="ContactDescription"]'),
      submitButton: page.locator('#contact button.btn-primary'),
      phoneError: page.locator('text=Phone must be between 11 and 21 characters.'),
    };
  }

  async navigate() {
    await this.page.goto('https://automationintesting.online/');
  }

  async clickNavbarLink(linkText: string) {
    await this.navbarLinks.locator(`text=${linkText}`).click();
  }

  async fillBookingForm(checkIn: string, checkOut: string) {
    await this.checkInInput.clear({force: true});
    await this.checkInInput.fill(checkIn, {force: true});
    await this.checkOutInput.clear({force: true});
    await this.checkOutInput.fill(checkOut, {force: true});
    await this.checkAvailabilityButton.click();
  }

  async fillContactForm(name: string, email: string, phone: string, subject: string, message: string) {
    await this.contactForm.nameInput.fill(name);
    await this.contactForm.emailInput.fill(email);
    await this.contactForm.phoneInput.fill(phone);
    await this.contactForm.subjectInput.fill(subject);
    await this.contactForm.messageTextarea.fill(message);
    await this.contactForm.submitButton.click();
  }
}
