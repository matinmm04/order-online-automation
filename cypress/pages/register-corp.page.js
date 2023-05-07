/// <reference types="cypress" />

class RegisterCorp {
    
    selectorRegisterCorp = {
        nameCorp: "[type='text']",
        email: "[type='email']",
        password: "[type='password']",
        submitButton: "[type='submit']",
        phone: "[type='numeric']",
        login: "Masuk"
    }
    
    fillName(name) {
        cy.get(this.selectorRegisterCorp.nameCorp).type(name)
    }
    
    fillEmail(email) {
        cy.get(this.selectorRegisterCorp.email).type(email)
    }
    
    fillPassword(password) {
        cy.get(this.selectorRegisterCorp.password).type(password)
    }

    fillPhone(handphone) {
        cy.get(this.selectorRegisterCorp.phone).type(handphone)
    }
    
    clickSubmit() {
        cy.get(this.selectorRegisterCorp.submitButton).click()
    }

    clickLogin() {
        cy.contains(this.selectorRegisterCorp.login).click()
    }

}
module.exports = new RegisterCorp()

