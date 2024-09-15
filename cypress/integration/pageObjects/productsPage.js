class ProductPage {


  getCheckoutButton(){
    return  cy.get('a.btn-primary')
  }


 getFinalCheckout(){
  return cy.get('button.btn-success')
 }

 getInputCountry(){
  return cy.get('input[id="country"]')
 }

}


export default ProductPage