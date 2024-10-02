// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


   
Cypress.Commands.add('selectProduct', (productName) => {  

cy.get('h4.card-title').each(($el,index,$list)=>{

  let cardText = $el.text()

  if(cardText.includes(productName)){

    cy.get('button.btn.btn-info').eq(index).click()
  }
  
})

})

// Cypress.Commands.add('LoginAPI',()=>{

//   cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',
//     {
//       "userEmail":"vasudevan29.92@gmail.com", // this uname and password is payload
//       "userPassword":"Vasu@5555"
//     }
//   ).then(function(response){

//     expect(response.status).to.eq(200)

//     Cypress.env('token',response.body.token)
    
//   })



// })


Cypress.Commands.add('LoginAPI',()=>{

cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',{
  "userEmail":"vasudevan29.92@gmail.com",
  "userPassword":"Vasu@5555"
}).then(function(res){

  expect(res.status).to.eq(200)

  expect(res.body.message).to.eq('Login Successfully')

  Cypress.env('token',res.body.token)

})




})