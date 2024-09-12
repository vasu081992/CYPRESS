describe('My test suite', function(){

  it('Radio button Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('input[value="radio3"]').click()


    //assertion 

    cy.get('input[value="radio3"]').should('be.checked')


    // alternate way 

    cy.get('input[value="radio2"]').check()


    cy.get('input[value="radio2"]').should('be.checked')



  })

})

