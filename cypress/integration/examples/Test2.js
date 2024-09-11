/// <reference types="Cypress"/>

describe('My first test', function(){

  it('Selectors',function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("ca")
    cy.wait(2000) // we are waiting for search to get completed.... 
    //in cypress get is used to get any web element

    //using visible method 

    //cy.get('.product:visible').should('have.length',4)

    //using parent child chaining 

    cy.get('.products').find('.product').should('have.length',4)

      cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
      cy.get('.products').find('.product').then((elem)=>{
       cy.log(elem)
      })
   // cy.get(':nth-child(2) > .product-action > button').click() //this selector is got from cypress plugin in test runner

  
   cy.get('.products').find('.product').each(($el, index, $list)=>{

     let itemName = $el.find('h4.product-name').text();

     if(itemName.includes("Cashews")){
     cy.wrap(($el)).find('button').click()
     }
   })









   //wrong way below --> promise wont be resolved as we are storing in a variable

    // let abc = cy.get('.brand').text()
    // cy.log(abc)



    //right way --> we resolve manually using .then and use that to do further steps

    cy.get('.brand').as('brandText')
    cy.get('@brandText').then((logoEle)=>{
     cy.log(logoEle.text())
    })

    console.log("Text of brand - printed first as code is synchronous by default ( non cypress js code - console.log ) ") // this is printed first as it is non cypress(js code) and hence it follows synchronous handling by default. 


      //to handle a non cypress command in sequential way. ie say after a click of a button or so, we need to do like below : 


  cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click().then(()=>{
    console.log("I was clicked by first product as an last action of code and hence i will be printed only after last add to cart click in sequence since i am resolved manually") // this will be printed only after click operation ie after resolving click and then it prints in console though it is synchronous we made it async by putting it inside .then method of manual handling
  })

  //aliasing ie we changed .brand class to brandText and we can use the new name in next code sequences. 

  
  cy.get('@brandText').should('have.text','GREENKART') // ie am using brandText instead of .brand here and still it works


  })
  


  })


  
