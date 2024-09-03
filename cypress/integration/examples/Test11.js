/// <reference types="Cypress" />




describe('Calendar test',()=>
  {
   
      it('Verify date selection',()=>{
   
          const monthNumber = "6"; 
          const date = "15";
          const year = "2027";
          const expectedList = [monthNumber,date,year];
   
          cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
          // cy.wait(5000)
          cy.get(".react-date-picker__inputGroup").click();
   
          cy.get(".react-calendar__navigation__label").click();
          cy.get(".react-calendar__navigation__label").click();
          cy.contains("button",year).click();
          cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
          cy.contains("abbr",date).click();
   
          //Assertion
          cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
          {
              cy.wrap($el).invoke('val').should('eq',expectedList[index]);
          })

        })

      })
      

//alternate way


// describe('My 11th test suite', function(){

//   it('Calendar test cases',function(){

//     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

//     cy.get('.react-date-picker').click()

//     cy.get('.react-calendar__navigation__next2-button').click().click().click()

//     cy.get('.react-calendar__navigation__prev-button').click()

//     cy.get('abbr[aria-label="August 29, 2027"]').click()


//     //assertion of the selected date

//     cy.get('.react-date-picker__wrapper input').eq(0).should('have.value','2027-08-29')
//     })

// })