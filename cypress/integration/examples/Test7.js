/// <reference types="Cypress"/>

describe('My Seventh test suite', function(){

  it('Table Tests',function(){

    cy.visit(Cypress.env('url')+"/AutomationPractice/")

    cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
   
      let text = $el.text();

      if(text.includes('Python')){
      
  
         cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{

          let cost = price.text()

                 //assertion
          expect(cost).to.equal('25')

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