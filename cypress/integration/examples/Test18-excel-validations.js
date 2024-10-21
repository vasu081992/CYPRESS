/// <reference types="Cypress" />

const neatCSV =  require('neat-csv')



let productName
describe('JWT Session',()=>{


  it('Session Login through local storage',()=>{
  
  cy.LoginAPI().then(function(){ // since this is custom command we need to resolve manually using .then()

  cy.visit('https://rahulshettyacademy.com/client',{

     onBeforeLoad : //code will execute before hitting above url

     function(window){
      window.localStorage.setItem('token',Cypress.env('token'))
     }


  })
  })

    cy.get('.card-body b').eq(1).then(function(ele){
      productName = ele.text()
      cy.log(productName)
    })


 cy.get('.card-body button:last-of-type').eq(1).click()
 cy.get('.card-body button:last-of-type').eq(2).click()

cy.get('button[routerlink*=cart]').click()
 cy.contains("Checkout").click()
 cy.get('input[placeholder="Select Country"]').type("ind")


 cy.get('section button span').each(($el,index,$list)=>{
 
   let country = $el.text()

   if(country==' India'){
    cy.get('section button span').eq(index).click()
   }

 })

cy.get('div a[class="btnn action__submit ng-star-inserted"]').click()

cy.wait(2000)  // we are waiting for 2 seocnds to network call to get completed (since cloud server is slow backend we wait for backend server to get completed and then csv will be ready and we can download)

cy.get('button[class="btn btn-primary mt-3 mb-3"]').contains('Excel').click()


const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_vasudevan29.92.xlsx"

//calling the task (ie to run js in node environment)

cy.task('excelToJsonConverter',filePath).then(function(res){
  cy.log( res.data[1].A)
  expect(productName).to.equal(res.data[1].B)
 
})

cy.readFile(filePath).then(function(text){
  expect(text).to.include(productName)
})


  })


})



