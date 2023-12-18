import ContactData from "./ContactData";

class ContactForm {
  elements = {
    emailInput: () => cy.get('[data-cy="senderEmail"]'),
    emailError: () => cy.get('[data-cy="senderEmailError"]'),
    phoneInput: () => cy.get('[data-cy="senderPhone"]'),
    phoneError: () => cy.get('[data-cy="senderPhoneError"]'),
    contentMessage: () => cy.get('[data-cy="contactFormMessageContent"]'),
    contentError: () => cy.get('[data-cy="messageContentError"]'),
    contactFormMessage: () => cy.get('[data-cy="contactFormMessage"]'),
    contactFormSubmit: () => cy.get('[data-cy="contactFormSubmit"]'),
  };

  sendMessage() {
    this.elements.contactFormSubmit().click();
  }

  fillContactForm(message: ContactData) {
    this.elements.emailInput().type(message.email);
    this.elements.phoneInput().type(message.phone);
  }

  fillContentMessage(content: string) {
    this.clearContentMessage();
    this.elements.contentMessage().type(content);
  }

  messageSentSuccessfully() {
    this.elements.contactFormMessage().contains("Twoja wiadomość została wysłana");
  }

  clearContentMessage() {
    this.elements.contentMessage().clear({force: true});
  }

  shouldDisplayEmailValidationError(errorMessage: string) {
    this.elements.emailError().contains(errorMessage);
  }

  shouldDisplayPhoneValidationError(errorMessage: string) {
    this.elements.phoneError().contains(errorMessage);
  }

  
  shouldDisplayContentMessageValidationError(errorMessage: string) {
    this.elements.contentError().contains(errorMessage);
  }
}

export default ContactForm;
