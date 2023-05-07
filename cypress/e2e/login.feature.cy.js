/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
const LoginPage = require('../pages/login.page')


describe('Login to Sandbox oexpress', () => {
    it('Login Failed Email and Password not match', () => {
    ENDPOINT.openURL(ENDPOINT.login)
    LoginPage.fillEmail(DATA_USER.invalid.email)
    LoginPage.fillPassword(DATA_USER.invalid.password)
    LoginPage.clickSubmit()
    LoginPage.assertErrorLoginCombinationNotMatch()
    })

    it('Login User Not Active', () => {
      ENDPOINT.openURL(ENDPOINT.login)
      LoginPage.fillEmail(DATA_USER.notActive.email)
      LoginPage.fillPassword(DATA_USER.notActive.password)
      LoginPage.clickSubmit()
      LoginPage.assertErrorLoginUserNotActive()
    })
  
    it('Login Success', () => {
      ENDPOINT.openURL(ENDPOINT.login)
      LoginPage.fillEmail(DATA_USER.valid.email)
      LoginPage.fillPassword(DATA_USER.valid.password)
      LoginPage.clickSubmit()
      cy.get('span').contains('Dashboard').should('have.text','Dashboard')
    })
})
  
