/// <reference types="Cypress"/>

describe('Child window handling - Basic', function(){

  it('Child window Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#opentab').invoke('removeAttr','target').click()

    
    cy.origin('https://www.qaclickacademy.com/',()=>{

      cy.url().then((url1)=>{
      
        expect(url1).to.eq('https://www.qaclickacademy.com/')

        cy.get('div[class="event-title"] h3').should('contain','Upcoming events')
    
  
      })

    })
  


  })


})

  
