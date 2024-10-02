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

cy.get('button[class="btn btn-primary mt-3 mb-3"]').eq(0).click()


cy.readFile(Cypress.config("fileServerFolder")+'/cypress/downloads/order-invoice_vasudevan29.92.csv').then(async function (text){

  const csv = await neatCSV(text)

 expect(csv[0]["Product Name"]).to.eq(productName)


})



 })
  })























  // cy.get('section button span[class="ng-star-inserted"]').each(($el,index,$list)=>{
//   let text1 = $el.text()

//   if(text1==' India'){
//     cy.get('section button span[class="ng-star-inserted"]').eq(index).click() 

//     //or

//     //cy.wrap($el).click()
//   }
// })

// cy.get('a[class="btnn action__submit ng-star-inserted"]').click()
// cy.wait(2000)

// // cy.get('.order-summary button').each(($el,index,$list)=>{
  
// //   $el.contains('Click To Download Order Details in CSV').click()
// // })

// cy.contains('.order-summary button', 'Click To Download Order Details in CSV').click();

// Cypress.config('fileServerFolder')
// cy.readFile(Cypress.config('fileServerFolder')+'/cypress/downloads/order-invoice_vasudevan29.92.csv').then(async function(text){

// const csv =  await neatCSV(text) // we wait here to get promise to be resolved and then proceed

// const actualProductCSV=csv[0]["Product Name"]

//  expect(productName).to.equal(actualProductCSV)
//   })