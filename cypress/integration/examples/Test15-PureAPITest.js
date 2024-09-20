/// <reference types="Cypress" />


describe('Network response Test suite - Part three',()=>{


  it('API testing',()=>{
  
  cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

    "name":"Master web automation using Cypress",
    "isbn":"aaa4444",
    "aisle":"3344ty",
    "author":"Vinee"  

  }).then(function(response){
 
    expect(response.body).to.have.property("Msg","successfully added")// this is api return behaviour on 200 OK check postman to verify
    expect(response.status).to.eq(200) 
    expect(response.body).to.have.property("ID","aaa44443344ty") // this is api return behaviour on 200 OK check postman to 
 
  expect(response.isOkStatusCode).to.eq(true)

  // cy.log(response.headers)

  // cy.log(response.duration)
  

  })
  

  })
  
  })


  