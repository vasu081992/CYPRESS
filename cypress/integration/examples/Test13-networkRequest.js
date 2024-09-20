/// <reference types="Cypress" />


describe('Network response Test suite',()=>{


it('Mocking Network Response Test1',()=>{

  cy.visit('https://rahulshettyacademy.com/angularAppdemo/')


 cy.intercept({
  method:'GET',
  url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
 },
{
  statusCode:200,
  body:[{
          "book_name": "RestAssured with Java",
          "isbn": "BSG",
          "aisle": "2302"
      },{
        "book_name": "Cypress with JS AND CUCUMBER",
        "isbn": "BSG2",
        "aisle": "23022"
      }],

}).as('bookRetrievals')

cy.get('button[class="btn btn-primary"]').click()

//cy.wait('@bookRetrievals')  // we are waiting till the promise is resolved and we get the proper mock response



//length of response array should match with table rows --> kind of integration testing 


cy.wait('@bookRetrievals').then(({request,response})=>{


  if(response.statusCode==200){
  cy.get('tr').should('have.length',response.body.length+1)
  }
  else{
    cy.get('tr').should('have.length',1)

  }
})


//cy.get('p').should('have.text','Oops only 1 Book available')


cy.get('p').should('not.exist');


})

})