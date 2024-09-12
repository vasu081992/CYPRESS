describe('My test suite', function(){

  it('Static dropdown Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   cy.get('select[id="dropdown-class-example"]').select('option3')

   //assertion 

   cy.get('select[id="dropdown-class-example"]').should('have.value', 'option3');


//selecting drop downs using their values


cy.get('select[id="dropdown-class-example"]').select('Option2')

//assertion for value


cy.get('select[id="dropdown-class-example"] option:selected').should('have.text', 'Option2');


cy.get('option[value="option2"]').should('have.text', 'Option2');



  })

})

