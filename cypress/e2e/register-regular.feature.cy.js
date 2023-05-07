/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
const RegisterReg = require('../pages/register-regular.page')


describe('Register User to Sandbox oexpress', () => {
    it('Register Successful', () => {
        ENDPOINT.openURL(ENDPOINT.registerReg)
        RegisterReg.fillName(DATA_USER.register.name)
        RegisterReg.fillEmail(DATA_USER.register.email)
        RegisterReg.fillPassword(DATA_USER.register.password)
        RegisterReg.fillPhone(DATA_USER.register.handphone)
        RegisterReg.clickSubmit()
        cy.get('h4').should('have.text','Please Check Your Email!')
    })
})
  
