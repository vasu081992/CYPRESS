/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage"




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


        cy.visit('https://rahulshettyacademy.com/angularpractice/')
 
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
        
        this.data.productName.forEach((item)=>{

          cy.selectProduct(item)


        })

        })

      })
      

