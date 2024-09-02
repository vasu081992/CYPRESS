/// <reference types="Cypress"/>

describe('My Sixth test suite', function(){

  it('Child window Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').invoke('removeAttr','target') //without this new web pages or links will open in new window 
    // above command uses invoke method to remove target attribute during run time

    cy.get('#opentab').click()

    cy.origin('https://www.qaclickacademy.com/',()=>{

      cy.get('#navbarSupportedContent a[href="about.html"]').click()
      
      cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy')


    })



  })
})



  
