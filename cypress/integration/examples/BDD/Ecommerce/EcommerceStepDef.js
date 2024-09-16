import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/productsPage"

  
const homePage = new HomePage() //creating a new object from the class
const productPage = new ProductPage()



Given('I open the e commerce website',()=>{

  cy.visit(Cypress.env('url')+"/angularpractice/")

})

//When I add items to cart 


When('When I add items to the cart',()=>{
  homePage.getShopButton().click()
        
  this.data.productName.forEach((item)=>{ //productName is an array in fixtures file so we use forEach to loop over it and call selectProduct custom function everytime

    cy.selectProduct(item)


  })

  productPage.getCheckoutButton().click()

})
  And('I validate the total price of the cart',()=>{

    let sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
     let value = $el.text()
     let number = value.split(' ')
     let finalNum = Number(number[1])
     cy.log(finalNum)
     sum+=finalNum;
    })
   
    cy.get('h3 strong').then(($el,index,$list)=>{
     let totalValue = $el.text()
     let number = totalValue.split(' ')
     let finalNum = Number(number[1])
     
     expect(sum).to.equal(finalNum)
    })
    productPage.getFinalCheckout().click()

  })

  Then('Select the country and submit and verify the Success message',()=>{
    productPage.getInputCountry().type('India')
     
    // cy.wait(6000) // changed defaultCommandTimeout to 6 seconds wait in cypress.config.js

    cy.get('div.suggestions li',{timeout:6000}).click()

      cy.get('#checkbox2').check({force:true})

      cy.get('body').should('not.include.text','Success!')

      cy.get('input[type="submit"]').click()

      //assertion --> to check for success message post submit click 

      cy.get('div.alert').should('include.text','Success!')

  })


  When('I fill the form details completely',()=>{

    homePage.getInputField().type(this.data.name)
        //cy.get('form input[name="name"]').type(' Vineela Devi')

        homePage.getinputEmailField().type('vasudevan29.92@gmail.com')

       homePage.getPasswordField().type('vasu12345')

        homePage.getGender().select(this.data.gender)

        homePage.getRadio().click()
 
  })

  Then('Validate the form behaviour',()=>{
    homePage.getTwowayDataBinding().should('have.value',this.data.name)


    //assertion to check if we have typed min of 2 characters in input box 


    homePage.getInputField().should('have.attr','minlength','2')

    //alterate way 

    homePage.getInputField().then((elem1)=>{

      let minlength1 = elem1.attr('minlength')

      cy.log(minlength1)

      expect(minlength1).to.equal('2')


    })

    homePage.getRadioDisabled().should('be.disabled')

  })

  Then('select the shop page',()=>{

    homePage.getShopButton().click()


  })



 