import Advertisement from "./pageObjects/Advertisement";
import ContactForm from "./pageObjects/ContactForm";
import ContactData from "./pageObjects/ContactData";

const testAdvertisementUrl =
  "/nieruchomosci/nowe-mieszkanie-zaluze-ul-zaluze/ob/32277255";
const userAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1";

describe("Contact form - mobile view", () => {
  const advertisement = new Advertisement();
  const contactForm = new ContactForm();

  beforeEach(() => {
    // disable Cypress's default behavior of logging all XMLHttpRequests and fetches
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.viewport("iphone-xr");
    advertisement.url(testAdvertisementUrl, userAgent);
    advertisement.openContactFormForMobile();
  });

  it("Message sent successfully", () => {
    const contactData = new ContactData("email@test.pl", "123123123");
    contactForm.fillContactForm(contactData);
    contactForm.sendMessage();
    contactForm.messageSentSuccessfully();
  });

  it("Empty fields", () => {
    contactForm.clearContentMessage();
    contactForm.sendMessage();
    contactForm.shouldDisplayEmailValidationError(
      'Pole "E-mail" jest wymagane'
    );
    contactForm.shouldDisplayPhoneValidationError(
      'Pole "Telefon" jest wymagane'
    );
    contactForm.shouldDisplayContentMessageValidationError(
      'Pole "Twoja wiadomość" jest wymagane'
    );
  });

  it("Email format validation", () => {
    const contactData = new ContactData("email", "123123123");
    contactForm.fillContactForm(contactData);
    contactForm.sendMessage();
    contactForm.shouldDisplayEmailValidationError(
      "Wpisz prawidłowy format adresu e-mail"
    );
  });

  it("Phone format validation", () => {
    const contactData = new ContactData("email@test.pl", "qwe123");
    contactForm.fillContactForm(contactData);
    contactForm.sendMessage();
    contactForm.shouldDisplayPhoneValidationError(
      "Nieprawidłowy format numeru telefonu komórkowego"
    );
  });

  it("Content message minimum length validation", () => {
    const toShortContent = "malo slow";
    contactForm.fillContentMessage(toShortContent);
    contactForm.sendMessage();
    contactForm.shouldDisplayContentMessageValidationError(
      'Minimalna długość pola "Twoja wiadomość" to 10 znaków'
    );
  });
});
