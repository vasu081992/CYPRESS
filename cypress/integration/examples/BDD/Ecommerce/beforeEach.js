beforeEach(function(){

  cy.fixture('example').then((data)=>{

    this.data = data // here left side data refers to global mocha object which makes the right side resolved data available throughout the test suite

    //else we need to keep using cy.fixture everytime in each it block

})
})