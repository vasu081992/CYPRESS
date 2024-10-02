/// <reference types="Cypress" />


describe('Cypress DB Interaction ',()=>{

  let data;

  beforeEach(()=>{ //fetching data from database and storing in data variable

    cy.sqlServer("select * from Persons1").then(function(res){

      data = res;
  
    })

  })

  it('DB Interaction',()=>{ // using the data from database to type in the web app 

    cy.visit('https://rahulshettyacademy.com/client/')
   
    cy.get('input[type="email"]').type(data[1][4])

    cy.get('input[type="password"]').type(data[1][5])

    cy.get('input[type="submit"]').click()

    cy.get('.card-body button:last-of-type').eq(1).click()



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

cy.get('h1').should('have.text', ' Thankyou for the order. ');

 })

  })






















