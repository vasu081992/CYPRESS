/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import "cypress-iframe"

describe('My Tenth test suite', function(){

  it('Frame test cases',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    cy.frameLoaded('#courses-iframe') // loading the frame

    cy.iframe().find('a[href="mentorship"]').eq(0).click()

    cy.wait(500) // we need to add this wait. so that once click of the button happens it wait for 2 seconds to identify the items below and asssert it

    cy.iframe().find('.pricing-footer .pricing-price').should('have.length',2)


    })

})



