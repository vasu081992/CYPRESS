/// <reference types="Cypress"/>

describe('My Nineth test suite', function(){

  it('Child window test cases',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    cy.get('#opentab').then((item)=>{

      let href1 = item.prop('href')
      
      cy.visit(href1)


      cy.origin(href1,()=>{
        cy.get('#navbarSupportedContent a[href="about.html"]').click()
      })


  })

})

})

