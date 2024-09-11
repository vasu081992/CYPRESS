describe('My first test', function(){

  it('Selectors',function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("ca")
    cy.wait(2000) // we are waiting for search to get completed.... 
    //in cypress get is used to get any web element

    //using visible method 

    cy.get('.product:visible').should('have.length',4)

    cy.get('.products').find('.product').should('have.length',4)

    //using parent child chaining 

    cy.get('.products .product').should('have.length',4)

 
    cy.get('.products .product').eq(1).contains('ADD TO CART').click()

      
   cy.get('.products').find('.product').each(($el, index, $list)=>{

    let itemName = $el.find('h4.product-name').text();

    if(itemName.includes("Cashews")){
    cy.wrap(($el)).find('button').click()
    }
  })

  cy.get('img[alt="Cart"]').click()

  cy.get('button[type="button"]').contains('PROCEED TO CHECKOUT').click()

  cy.get('button').contains('Place Order').click()

  })

})