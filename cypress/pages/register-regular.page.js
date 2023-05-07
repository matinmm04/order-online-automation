/// <reference types="cypress" />

class RegisterCorp {
    
    selectorRegisterRegular = {
        name: "[type='text']",
        email: "[type='email']",
        password: "[type='password']",
        submitButton: "[type='submit']",
        phone: "[type='numeric']",
        login: "Masuk"
    }
    
    fillName(name) {
        cy.get(this.selectorRegisterRegular.name).type(name)
    }
    
    fillEmail(email) {
        cy.get(this.selectorRegisterRegular.email).type(email)
    }
    
    fillPassword(password) {
        cy.get(this.selectorRegisterRegular.password).type(password)
    }

    fillPhone(handphone) {
        cy.get(this.selectorRegisterRegular.phone).type(handphone)
    }
    
    clickSubmit() {
        cy.get(this.selectorRegisterRegular.submitButton).click()
    }

    clickLogin() {
        cy.contains(this.selectorRegisterRegular.login).click()
    }

}
module.exports = new RegisterCorp()

