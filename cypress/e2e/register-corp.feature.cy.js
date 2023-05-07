/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
const RegisterCorp = require('../pages/register-corp.page')


describe('Register Corporate to Sandbox oexpress', () => {
    it('Register Successful', () => {
        ENDPOINT.openURL(ENDPOINT.registerCorp)
        RegisterCorp.fillName(DATA_USER.register.nameCorporate)
        RegisterCorp.fillEmail(DATA_USER.register.emailCorp)
        RegisterCorp.fillPassword(DATA_USER.register.password)
        RegisterCorp.fillPhone(DATA_USER.register.handphone)
        RegisterCorp.clickSubmit()
    })
})
  