/// <reference types="Cypress" />


describe('Network response Test suite - Part two',()=>{


  it('Testing security checks',()=>{
  
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
  
  
    // we will use cy.intercept(method,url,routeHandler)


   cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{

    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

    req.continue((res)=>{

      //expect(res.statusCode).to.equal(403)

    }) 

   }).as('dummyUrl')
  

   cy.get('button[class="btn btn-primary"]').click()
   cy.wait('@dummyUrl')


  })
  
  })


  