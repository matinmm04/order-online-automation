/// <reference types="cypress" />

import { ENDPOINT } from "../data/endpoint.js"
import { DATA_USER } from "../data/user.data.js"
import { DATA_ONBOARDING } from "../data/onboarding.data.js"
const LoginPage = require('../pages/login.page')
const Onboarding = require('../pages/onboarding-corp.page')


describe('Onboarding Corporate', () => {
    beforeEach(() => {
        ENDPOINT.openURL(ENDPOINT.login)
      })
    
    it('Fill Form Onboarding Corporate', () => {
      LoginPage.fillEmail(DATA_USER.corpUser.email)
      LoginPage.fillPassword(DATA_USER.corpUser.password)
      LoginPage.clickSubmit()
      cy.wait(3000)
      //Page 1
      Onboarding.fillCompanyName(DATA_ONBOARDING.onboardCorp.nameCompany)
      Onboarding.fillNameOwner(DATA_ONBOARDING.onboardCorp.nameOwner)
      Onboarding.fillCompanyBusiness(DATA_ONBOARDING.onboardCorp.companyBusiness)
      Onboarding.fillNPWP(DATA_ONBOARDING.onboardCorp.companyNPWP)
      Onboarding.fillPhone(DATA_ONBOARDING.onboardCorp.phone)
      Onboarding.fillEmail(DATA_ONBOARDING.onboardCorp.email)
      Onboarding.fillAddress(DATA_ONBOARDING.onboardCorp.address)
      Onboarding.chooseDistrict(DATA_ONBOARDING.onboardCorp.district)
      cy.wait(3000)
      Onboarding.clickNext()
      //Page 2
      Onboarding.fillWarehouseSenderName(DATA_ONBOARDING.onboardCorp.warehouseSenderName)
      Onboarding.fillWarehousePhone(DATA_ONBOARDING.onboardCorp.warehousePhone)
      Onboarding.fillWarehouseName(DATA_ONBOARDING.onboardCorp.warehouseName)
      Onboarding.fillFinanceName(DATA_ONBOARDING.onboardCorp.financeName)
      Onboarding.fillWorkingStart(DATA_ONBOARDING.onboardCorp.workingStart)
      Onboarding.fillWorkingEnd(DATA_ONBOARDING.onboardCorp.workingEnd)
      Onboarding.chooseWorkingDay(DATA_ONBOARDING.onboardCorp.workingDay)
      Onboarding.chooseBillingPeriod(DATA_ONBOARDING.onboardCorp.billingPeriod)
      Onboarding.fillPickupStart(DATA_ONBOARDING.onboardCorp.pickupStart)
      Onboarding.fillPickupEnd(DATA_ONBOARDING.onboardCorp.pickupEnd)
      Onboarding.choosePaymentMethod(DATA_ONBOARDING.onboardCorp.paymentMethod)
      Onboarding.choosepaymentTax(DATA_ONBOARDING.onboardCorp.paymentTax)
      Onboarding.chooseAllService()
      Onboarding.fillAddressWarehouse(DATA_ONBOARDING.onboardCorp.address)
      Onboarding.chooseDistrict(DATA_ONBOARDING.onboardCorp.district)
      cy.wait(3000)
      Onboarding.clickNext()
      //Page 3 cant be automate because the fileuploader doesnt have spesific attribute in element input file
      //Page 4
      Onboarding.chooseBank(DATA_ONBOARDING.onboardCorp.bankName)
      Onboarding.fillAccountName(DATA_ONBOARDING.onboardCorp.accountName)
      Onboarding.fillAccountNumber(DATA_ONBOARDING.onboardCorp.accountNumber)
      cy.wait(3000)
      Onboarding.clickNext()
    })
})