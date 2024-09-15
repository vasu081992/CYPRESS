/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/productsPage"




describe('Framework Basic test',()=>
  {
   
    before(function(){
    
      cy.fixture('example').then((data)=>{

          this.data = data // here left side data refers to global mocha object which makes the right side resolved data available throughout the test suite

          //else we need to keep using cy.fixture everytime in each it block
      })

    })


      it('First framework Test', function(){

   
        const homePage = new HomePage() //creating a new object from the class
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url')+"/angularpractice/")
        //cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getInputField().type(this.data.name)

        //or

        //cy.get('form input[name="name"]').type(' Vineela Devi')

        homePage.getinputEmailField().type('vasudevan29.92@gmail.com')

       homePage.getPasswordField().type('vasu12345')

        homePage.getGender().select(this.data.gender)

        homePage.getRadio().click()
 

        //assertion - two way biding . ie we typed name in first input and checking if second input also got the same which is behaviour of two way binding


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
 

        //alternate way 

        // cy.get('input[value="option3"]').then((ele)=>{

        //   let disabledCheck = ele.attr('disabled')!=false;

        //   expect(disabledCheck).to.be.true

        // })

        //cy.pause() --> use this to pause test at a particular point of execution

 
        // cy.get('a.nav-link').each(($el,index,$list)=>{

        //   let text1 = $el.text()

        //   if(text1==='Shop'){
           
        //     cy.get('a.nav-link').eq(index).click()

        //   }
        // })

        //alternate simple way to do the above click 

       homePage.getShopButton().click()
        
        this.data.productName.forEach((item)=>{ //productName is an array in fixtures file so we use forEach to loop over it and call selectProduct custom function everytime

          cy.selectProduct(item)


        })


       productPage.getCheckoutButton().click()

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

       productPage.getInputCountry().type('India')
     
      // cy.wait(6000) // changed defaultCommandTimeout to 6 seconds wait in cypress.config.js

      cy.get('div.suggestions li',{timeout:6000}).click()

        cy.get('#checkbox2').check({force:true})

        cy.get('body').should('not.include.text','Success!')

        cy.get('input[type="submit"]').click()

        //assertion --> to check for success message post submit click 

        cy.get('div.alert').should('include.text','Success!')

     
    
        })

      })
      

