export default {
    accessRegisterPage() {
      cy.visit("https://seubarriga.wcaquino.me/cadastro");
    },
  
    setName(name) {
      if (name) {
      return cy.get('#nome').type(name);
      }
    },

    setRandomEmail(email) {
      if (email) {
        const randomString = Math.random().toString(36).substring(8); 
        const randomEmail = `${randomString}${email}`; 
        return cy.get('#email').type(randomEmail);
      }
    },
    setEmail(email) {
      if (email) {
      return cy.get('#email').type(email);
      }
  },

    setPassword(password) {
      if (password) {
      return cy.get('#senha').type(password);
      }
    },

    clickRegisterButton() {
        cy.get('.btn').click();
    },

    getAlertMessage(message) {
        cy.get('.alert').contains(message);
    }
}