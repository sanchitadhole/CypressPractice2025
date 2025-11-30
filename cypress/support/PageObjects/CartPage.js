import confirmationPage from "./ConfirmationPage";
class cartPage {
    
  checkOutItems() {
    cy.get("button[class='btn btn-success']").click();
    return new confirmationPage();
  }



  sumOfCartPage() {
    let sum = 0;

    return cy.get("tr td:nth-child(4) strong")
      .each((el) => {
        let amount = Number(el.text().split(" ")[1].trim());
        sum = sum + amount;
      })
      .then(() => {
        return sum;
      });
  }
}

export default cartPage;
