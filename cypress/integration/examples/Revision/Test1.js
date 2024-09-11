describe("Revision of visiting a website usig Cypress", ()=>{

  it("Opens the mentioned website",()=>{

    cy.visit("https://www.flipkart.com/")

    cy.get('img[alt="Grocery"]').should('be.visible')

    cy.get('img[title="Flipkart"]').should('be.visible')


   cy.title().then((title)=>{

    let title1= title;

      expect(title1).to.include('Furniture');

      if(title1.includes('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')){
        cy.log("Title is matching")
      }
      else{
        cy.log("There is a mismatch of the visited Websites title")
      }
      })
    }),

      it("Checks the url",()=>{
    
        cy.visit("https://www.flipkart.com/")
        cy.url().then((url12)=>{
        cy.log(url12)
        expect(url12).to.eq('https://www.flipkart.com/')
      })

       cy.get('img[alt="Cart"]').click()
       cy.get('div .s2gOFd').should('have.text',"Missing Cart items?")

    })
  })
