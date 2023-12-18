class Advertisement {
  elements = {
    contactFormButton: () => cy.get('#sticker-contactForm-opener'),
  };

  url(url: string, userAgent: string) {
    cy.visit(url, {
      headers: {
        "user-agent": userAgent,
      },
    });
  }

  openContactFormForMobile() {
    this.elements.contactFormButton().click();
    cy.url().should('contain', '#wiadomosc');
  }
}

export default Advertisement;
