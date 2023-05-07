/// <reference types="cypress" />

class LoginPage {
    
    selectorLogin = {
        email: "[type='email']",
        password: "[type='password']",
        submitButton: "[type='submit']",
        registerButton: "Daftar Disini",
        forgetPassword: "Lupa password?",
        alert: "[class='alert alert-danger bg-danger text-white border-0 fade show mb-3']"
    }
    
    fillEmail(email) {
        cy.get(this.selectorLogin.email).type(email)
    }
    
    fillPassword(password) {
        cy.get(this.selectorLogin.password).type(password)
    }
    
    clickSubmit() {
        cy.get(this.selectorLogin.submitButton).click()
    }


    clickRegister() {
        cy.contains(this.selectorLogin.registerButton).click()
    }

    clickForgetPassword() {
        cy.contains(this.selectorLogin.forgetPassword).click()
    }

    assertErrorLoginCombinationNotMatch() {
        cy.get(this.selectorLogin.alert).should('have.text','Kombinasi email dan password salah')
    }

    assertErrorLoginUserNotActive() {
        cy.get(this.selectorLogin.alert).should('have.text','Akun Anda tidak aktif')
    }

}
module.exports = new LoginPage()

