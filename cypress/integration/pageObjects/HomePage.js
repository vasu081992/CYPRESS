class HomePage {


  getInputField(){
    return cy.get('input[name="name"]:nth-child(2)')
  }


  getinputEmailField(){
    return cy.get('form input[name="email"]')
  }


  getTwowayDataBinding(){

    return  cy.get('input[name="name"]:nth-child(1)')

  }

  getRadioDisabled(){
    return  cy.get('input[value="option3"]')
  }

getRadio() {

  return cy.get('input[id="inlineRadio2"]')
}


  getGender(){

    return cy.get('select[id="exampleFormControlSelect1"]')

  }

  getEntrepreneur(){
    return cy.get('input[value="option3"]')
  }

  getShopButton(){
    return cy.get('.nav-item:nth-child(2)')
  }

  getPasswordField(){
    return  cy.get('input[type="password"]')
  }

}

export default HomePage