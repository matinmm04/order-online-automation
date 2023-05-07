/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
const LoginPage = require('../pages/login.page')
const ForgetPassword = require('../pages/forget-password.page')


describe('Forget Password', () => {
    it('User Success to submit Forget Password', () => {
    ENDPOINT.openURL(ENDPOINT.login)
    LoginPage.clickForgetPassword()
    cy.wait(2000)
    ForgetPassword.fillEmail(DATA_USER.valid.email)
    ForgetPassword.clickSubmit()
    ForgetPassword.assertionResetPassword(DATA_USER.forgetPassword.success)
    })

    it('User Failed to submit Forget Password', () => {
    ENDPOINT.openURL(ENDPOINT.login)
    LoginPage.clickForgetPassword()
    cy.wait(2000)
    ForgetPassword.fillEmail(DATA_USER.valid.email)
    ForgetPassword.clickSubmit()
    ForgetPassword.assertionResetPasswordFailed()
    })
})
  
