import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage"
import ProductPage from "../../../pageObjects/productsPage"
import './beforeEach';
//const { Before } = require('@badeball/cypress-cucumber-preprocessor');


const homePage = new HomePage() //creating a new object from the class
const productPage = new ProductPage()

let name 
let gender


// Before(function(){
  
//   cy.fixture('example').then((data)=>{

//     this.data = data // here left side data refers to global mocha object which makes the right side resolved data available throughout the test suite

//     //else we need to keep using cy.fixture everytime in each it block

// })
// })


Given('I open the e commerce website',function(){ 

  cy.visit(Cypress.env('url')+"/angularpractice/")

})

//When I add items to cart 


When('I add items to the cart',function(){
  homePage.getShopButton().click()
        
  this.data.productName.forEach((item)=>{ //productName is an array in fixtures file so we use forEach to loop over it and call selectProduct custom function everytime

    cy.selectProduct(item)


  })

  productPage.getCheckoutButton().click()
  
})

When('I validate the total price of the cart',function(){

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


  })

  Then('Select the country and submit and verify the Success message',function(){

    productPage.getFinalCheckout().click()
    productPage.getInputCountry().type('India')
     
    // cy.wait(6000) // changed defaultCommandTimeout to 6 seconds wait in cypress.config.js

    cy.get('div.suggestions li',{timeout:6000}).click()

      cy.get('#checkbox2').check({force:true})

      cy.get('body').should('not.include.text','Success!')

      cy.get('input[type="submit"]').click()

      //assertion --> to check for success message post submit click 

      cy.get('div.alert').should('include.text','Success!')

  })


  When('I fill the form details completely',function(dataTable){

    //homePage.getInputField().type(this.data.name)

    //array will be like [[name,gender],[Vineela,Female]]

    name = dataTable.rawTable[1][0] 
    gender = dataTable.rawTable[1][1]

    homePage.getInputField().type(dataTable.rawTable[1][0]) // we are taking second array first index
        //cy.get('form input[name="name"]').type(' Vineela Devi')

        homePage.getinputEmailField().type('vasudevan29.92@gmail.com')

       homePage.getPasswordField().type('vasu12345')

        //homePage.getGender().select(this.data.gender)
        homePage.getGender().select(dataTable.rawTable[1][1])// we are taking second array second index
        homePage.getRadio().click()
 
  })

  When('Validate the form behaviour',function(){

    homePage.getTwowayDataBinding().should('have.value',name) //name declared globally and initialised with cucumber data table feature
    homePage.getGender().should('have.value',gender)


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

  Then('select the shop page',function(){

    homePage.getShopButton().click()


  })



 