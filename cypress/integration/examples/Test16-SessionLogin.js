/// <reference types="Cypress" />



describe('JWT Session',()=>{


  it('Session Login through local storage',()=>{
  
  cy.LoginAPI().then(function(){ // since this is custom command we need to resolve manually using .then()

  cy.visit('https://rahulshettyacademy.com/client',{

     onBeforeLoad : //code will execute before hitting above url

     function(window){
      window.localStorage.setItem('token',Cypress.env('token'))
     }


  })
  })

cy.get('.card-body button:last-of-type').eq(1).click()

cy.get('button[routerlink*=cart]').click()
cy.contains("Checkout").click()
cy.get('input[placeholder="Select Country"]').type("ind")

cy.get('section button span[class="ng-star-inserted"]').each(($el,index,$list)=>{
  let text1 = $el.text()

  if(text1==' India'){
    cy.get('section button span[class="ng-star-inserted"]').eq(index).click() 

    //or

    //cy.wrap($el).click()
  }
})

cy.get('a[class="btnn action__submit ng-star-inserted"]').click()
cy.wait(2000)

// cy.get('.order-summary button').each(($el,index,$list)=>{
  
//   $el.contains('Click To Download Order Details in CSV').click()
// })

cy.contains('.order-summary button', 'Click To Download Order Details in CSV').click();

  })
  
  })
