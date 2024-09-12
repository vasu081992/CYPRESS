describe('My test suite', function(){

  it('Window alerts',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('input[class="inputs"]').type('Vasu here!')

    cy.get('input[value="Alert"]').click()

//assert 


cy.on('window:alert',(str1)=>{

  expect(str1).to.equal('Hello Vasu here!, share this practice page and share your knowledge')


  })


  cy.get('input[value="Confirm"]').click()

  cy.on('window:confirm',(str)=>{
    
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

    return false // returning false here means cypress selected CANCEL instead of OK

  })


  
  })

})

