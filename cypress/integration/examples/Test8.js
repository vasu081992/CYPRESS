/// <reference types="Cypress"/>

describe('My Eighth test suite', function(){

  it('Mouse hover Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


    //cy.get('.mouse-hover-content').invoke('show')

    //alternate way in cypress



    cy.contains('Top').click({force:true}) // this force:true looks for hidden elements also and clicks on it. 

    // this clicks without showin the pop up on hover. ie it just directly clicks on the hidden element Top


    //assertion 

    cy.url().should('include','#top') //include checks for substring / part of a string in url

    cy.get('h1').should('have.text','Practice Page') //this is to understand diff between have.text assertion and include 

    //have.text retrieves text of a html tag, include checks for substring / part of a string in url

    })


  })

