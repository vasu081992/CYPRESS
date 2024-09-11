describe('My Fourth test suite', function(){

  it('Checkboxes Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('input[id="checkBoxOption1"]').check()

    cy.get('input[id="checkBoxOption1"]').should('be.checked') //checks if 1 is checked

    cy.get('input[id="checkBoxOption2"]').should('not.be.checked') // checks if 2 is not checked


    cy.get('input[id="checkBoxOption1"]').should('be.checked').and('have.value',"option1")

    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //assertion

    cy.get('input[type="checkbox"]').check(['option1','option2', 'option3']).should('be.checked');


  })

})

