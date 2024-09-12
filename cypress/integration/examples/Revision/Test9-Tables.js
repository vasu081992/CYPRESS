/// <reference types="Cypress"/>

describe('My Table tests basic', function(){

  it('Table Tests',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

  cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
 
    let textData = $el.text()

    if((textData).includes('Python')){
  
    cy.get('tr td:nth-child(2)').eq(index).next().then((price1)=>{

      let price = price1.text()

      expect(price).to.equal('25')

     })

 

    }

  })
    })



    })





  




































































//   cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{ //this selector picks second column which is td tag/element


//     let text =$el.text()
//     if(text.includes("Python")){
  
//     cy.get('tr td:nth-child(2)').eq(index).next().then((cost)=>{


//       let price = cost.text()
//       expect(price).to.equal('25')


//     })

//     }
// })