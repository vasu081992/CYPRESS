describe('My first test', function(){

it('test case1',function(){
  expect(5+2).to.equal(7)
}) // this test will pass as 7 == 7 

it('test case2 ',function(){
  expect(true).to.equal(true)
})// this test should fail as false is not equal to true

it('test case2 ',function(){
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

})

})