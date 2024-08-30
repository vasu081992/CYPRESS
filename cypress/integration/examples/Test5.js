/// <reference types="Cypress"/>

describe('My Fourth test suite', function(){

  it('Checkboxes Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

   // cy.get('input[value="Alert"]').click()


    //window.alert


    // cy.on('window:alert',(str)=>{

    //   expect(str).to.equal('Hello , share this practice page and share your knowledge') // coming frm Mocha to compare strings

    // })


    // to enter a name in text field and compare if alert dislays text with entered name by user


    cy.get('input[id="name"]').type('Vasu')

    cy.get('#alertbtn').click()

     cy.on('window:alert',(str1)=>{

      expect(str1).to.equal('Hello Vasu, share this practice page and share your knowledge')

    })


      cy.get('input[value="Confirm"]').click()

      cy.on('window:confirm',(str)=>{

        expect(str).to.equal('Hello , Are you sure you want to confirm?')

        return false // returning false here means cypress selected CANCEL instead of OK
  
      })


  })



})



//IMPORTANT : Do not use two alert OR TWO CONFIRMS  in same test case (cypress overlaps and confuses it)



//CONFIRM


  
