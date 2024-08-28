/// <reference types="Cypress"/>

describe('My Third test suite', function(){

  it('My third test case',function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("ca")
    cy.wait(2000) // we are waiting for search to get completed.... 
    //in cypress get is used to get any web element

   // cy.get(':nth-child(2) > .product-action > button').click() //this selector is got from cypress plugin in test runner

  cy.get('.products').as('productLocator') // using alias name here
   cy.get('@productLocator').find('.product').each(($el, index, $list)=>{

     let itemName = $el.find('h4.product-name').text();

     if(itemName.includes("Cashews")){
     cy.wrap(($el)).find('button').click()
     }
   })


   cy.get('.cart-icon > img').click()
   cy.contains('PROCEED TO CHECKOUT').click()

   //cy.get('button').click() // this will throw error since some buttons are hidden in the page


  cy.contains('button','Place Order').click()
  })
  


  })


  
