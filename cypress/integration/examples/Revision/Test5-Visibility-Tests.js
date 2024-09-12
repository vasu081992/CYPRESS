describe('My test suite', function(){

  it('Visibility Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   cy.get('input[id="displayed-text"]').should('be.visible')


   cy.get('input[id="hide-textbox"]').click()

  

   cy.get('input[id="displayed-text"]').should('not.be.visible')



   cy.get('input[id="show-textbox"]').click()


   //assertion using css property  
   cy.get('input[id="displayed-text"]').should('have.css','display','block')

   cy.get('input[id="hide-textbox"]').click()

   //assertion using css property  

   cy.get('input[id="displayed-text"]').should('have.css','display','none')

  })

})

