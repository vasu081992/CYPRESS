/// <reference types="Cypress" />


describe('Network response Test suite',()=>{


it('Mocking Network Response Test1',()=>{

  cy.visit('https://rahulshettyacademy.com/angularAppdemo/')


//  cy.intercept({
//   method:'GET',
//   url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
//  },
// {
//   statusCode:200,
//   body:[{
//           "book_name": "RestAssured with Java",
//           "isbn": "BSG",
//           "aisle": "2302"
//        },{
//          "book_name": "Cypress with JS AND CUCUMBER",
//          "isbn": "BSG2",
//          "aisle": "23022"
//      }
//     ],

// }).as('bookRetrievals')

// cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
//   req.continue((res) => {
//     expect(res.statusCode).to.eq(200); // Optional: Ensure you have a successful response.
 
//     console.log(res.body)

//     expect(res.body).to.be.an('array');

//     expect(res.body).to.deep.include.members([
//       {
//         book_name: 'RestAssured with Java',
//         isbn: 'LSA',
//         aisle: '2303'
//       }
//     ]) 

//     expect(res.body[6].book_name).to.eq('Learn Appium Automation with Java');


//     // Use a Cypress command to log the response body outside of the promise chain
//     // After the request is resolved
// })
// }).as('bookRetrievals')

cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
  // statusCode defaults to `302`
  req.redirect('https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra', 301)
}).as('bookRetrievals')

// cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', {
// statusCode:200,
// body:[{
//   "book_name": "RestAssured with Java",
//            "isbn": "BSG",
//           "aisle": "2302"
// }]
// }
// ).as('bookRetrievals')



cy.get('button[class="btn btn-primary"]').click()

//cy.wait('@bookRetrievals')  // we are waiting till the promise is resolved and we get the proper mock response



//length of response array should match with table rows --> kind of integration testing 


 cy.wait('@bookRetrievals').then(({request,response})=>{


//   if(response.statusCode==200){
//   cy.get('tr').should('have.length',response.body.length+1)
//   }
//   else{
//     cy.get('tr').should('have.length',1)

//   }
// })


//cy.get('p').should('have.text','Oops only 1 Book available') // UNCOMMENT if we are stubbing only with one response


//cy.get('p').should('not.exist'); //uncomment this if we are gonna stub 2 responses ie we wont see error any more
expect(response.statusCode).to.equal(301);

})

})

})