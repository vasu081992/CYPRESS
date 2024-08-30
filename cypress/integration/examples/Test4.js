/// <reference types="Cypress"/>

describe('My Fourth test suite', function(){

  it('Checkboxes Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    cy.get('#checkBoxOption1').check()
    

    //to check if check box is checked or not 

    cy.get('#checkBoxOption1').check().should('be.checked')

 
     //to check if correctly we have checked first check box correctly or the right checkbox ie option1

     
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value',"option1")
       

     //just checking if option 1 is checked

     cy.get('#checkBoxOption1').check().should('have.value',"option1")


     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')


    //to check multiple check boxses using its value 

     cy.get('input[type="checkbox"]').check(['option2','option3'])

     //assertion 1
    
     cy.get('input[type="checkbox"]').should('be.checked').and('not.have.value',"option1 ")

  //assertion  type2


     cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked');

 

     //STATIC DROP DOWN TEST CASES


    //to select option2 in dropdown 
     cy.get('select[id="dropdown-class-example"]').select('option2')
 

     //to assert if its working fine

     
     cy.get('select[id="dropdown-class-example"]').should('have.value','option2')




         //DYNAMIC DROP DOWN TEST CASES


         cy.get('#autocomplete').type('ind')

         cy.get('.ui-menu-item').each(($el,index,$list)=>{

          let text1 = $el.text()

          if(text1==='India'){
           $el.click()
          }
         })

         //assertion 


         cy.get('#autocomplete').should('have.value',"India")  



         //TO VERIFY DISPLAYED OR HIDDEN ELEMENTS USING CYPRESS

         


         cy.get('#displayed-text').should('be.visible') // initially visible check 

         cy.get('#hide-textbox').click() 

         //assertion  --> we are checking post hiding the element, if the input tag state goes to display:none

      
         cy.get('#displayed-text').should('not.be.visible')  // post click hidden check 


         //alternate ways to do using css props below : 

         cy.get('#displayed-text').should('have.css','display','none')

         cy.get('#show-textbox').click()


         cy.get('#displayed-text').should('have.css','display','block')


  })



})


  
