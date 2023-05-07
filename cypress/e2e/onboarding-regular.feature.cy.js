/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
import { DATA_ONBOARDING } from "../data/onboarding.data.js"
const LoginPage = require('../pages/login.page')
const Onboarding = require('../pages/onboarding-reg.page')


describe('Onboarding Regular', () => {
    it('Fill Form Onboarding Regular', () => {
      ENDPOINT.openURL(ENDPOINT.login)
      LoginPage.fillEmail(DATA_USER.valid.email)
      LoginPage.fillPassword(DATA_USER.valid.password)
      LoginPage.clickSubmit()
      cy.wait(5000)
      Onboarding.fillStoreName(DATA_ONBOARDING.onboardReg.nameCorporate)
      cy.wait(2000)
      Onboarding.fillNameOwner(DATA_ONBOARDING.onboardReg.nameOwner)
      cy.wait(2000)
      Onboarding.fillPhone(DATA_ONBOARDING.onboardReg.phone)
      Onboarding.fillAddress(DATA_ONBOARDING.onboardReg.address)
      cy.wait(2000)
      Onboarding.chooseDistrict(DATA_ONBOARDING.onboardReg.district)
      cy.wait(3000)
      Onboarding.clickNext()
      //page 2
      Onboarding.checkAddressPickupSame()
      cy.wait(3000)
      Onboarding.clickNext()
      //page 3
      Onboarding.fillAccountName(DATA_ONBOARDING.onboardReg.accountName)
      Onboarding.fillAccountNumber(DATA_ONBOARDING.onboardReg.accountNumber)
      Onboarding.chooseBank(DATA_ONBOARDING.onboardReg.bankName)
      cy.wait(3000)
      Onboarding.clickNext()
      //page 4
      Onboarding.uploadIdCard(DATA_ONBOARDING.onboardReg.nameFile)
      cy.wait(3000)
      Onboarding.clickNext()
    })
})