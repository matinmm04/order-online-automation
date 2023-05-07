/// <reference types="cypress" />

class ForgetPassword {
    
    selector = {
        success: "[class='alert alert-success']",
        resetEmail: "[type='email']",
        submitButton: "[type='submit']",
        failed:"[class='alert alert-danger bg-danger text-white border-0 fade show mb-4']"
    }

    fillEmail(email) {
        cy.get(this.selector.resetEmail).type(email)
    }

    clickSubmit() {
        cy.get(this.selector.submitButton).click()
    }

    assertionResetPassword(assert) {
        cy.get(this.selector.success).should('have.text',assert)
    }

    assertionResetPasswordFailed() {
        cy.get(this.selector.failed).should('be.visible')
    }
}
module.exports = new ForgetPassword()