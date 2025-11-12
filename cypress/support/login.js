class login {
  userId() {
    return cy.get("#username");
  }
  passWord() {
    return cy.get("#password");
  }
  submit() {
    return cy.get("#submit-login");
  }
}

export default login
