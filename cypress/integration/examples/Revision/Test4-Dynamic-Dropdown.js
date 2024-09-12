describe('My test suite', function(){

  it('Dynamic dropdown Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item').each(($item,index,$list)=>{
      
      let text1 = $item.text()


      if(text1==='India'){
        $item.click()
      }
      
    })

    cy.get('#autocomplete').should('have.value',"India")

  })

})

