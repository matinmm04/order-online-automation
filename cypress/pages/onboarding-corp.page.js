/// <reference types="cypress" />

class OnboardingPage {
    
    selectorOnboarding = {
        companyName: "[name='company_name']",
        nameOwner: "[name='owner_name']",
        companyBusiness: "[name='company_business']",
        companyNPWP: "[name='company_npwp']",
        phone: "[name='company_phone']",
        email: "[name='company_email']",
        pickupAddress: "[name='company_address']",
        district: "[placeholder='Masukkan nama kota / kecamatan (setidaknya 4 karakter)']",
        chooseDistrict: "[class='multiselect__option--highlight multiselect__option']",
        next: "[class='btn btn-sm btn-primary']",
        warehouseSenderName: "[name='warehouse.sender_name']",
        warehousePhone: "[name='warehouse.phone']",
        warehouseName: "[name='warehouse.name']",
        financeName: "[name='finance_name']",
        workingStart: "[name='working_hour.start']",
        workingEnd: "[name='working_hour.end']",
        workingDay: "[class='btn btn-multi-select']",
        billingPeriod: "Select option",
        pickupStart: "[name='pickup_time.start']",
        pickupEnd: "[name='pickup_time.end']",
        paymentMethod: {
            invoicing: "[id='payment-type-invoicing']",
            netOffCOD: "[id='payment-type-netoff']"
        },
        paymentTax: {
            taxppn: "[id='tax-ppn']",
            taxnonppn: "[id='tax-non-ppn']"
        },
        warehouseAddress: "[name='warehouse.address']",
        service: {
            satset: "[id='permission-service-0']",
            kiss: "[id='permission-service-1']",
            serbu: "[id='permission-service-2']",
            gocap: "[id='permission-service-3']"
        },
        chooseBank: "[class='multiselect__tags']",
        accountNumber: "[name='bank.account_number']",
        accountName: "[name='bank.account_name']",

    }
    
    fillCompanyName(company) {
        cy.get(this.selectorOnboarding.companyName).type(company)
    }
    
    fillCompanyBusiness(namebusiness) {
        cy.get(this.selectorOnboarding.companyBusiness).type(namebusiness)
    }

    fillNPWP(npwp) {
        cy.get(this.selectorOnboarding.companyNPWP).type(npwp)
    }

    fillNameOwner(name) {
        cy.get(this.selectorOnboarding.nameOwner).type(name)
    }
    
    fillPhone(phone) {
        cy.get(this.selectorOnboarding.phone).type(phone)
    }

    fillEmail(email) {
        cy.get(this.selectorOnboarding.email).type(email)
    }

    fillAddress(pickupAddress) {
        cy.get(this.selectorOnboarding.pickupAddress).type(pickupAddress)
    }

    chooseDistrict(district) {
        cy.get(this.selectorOnboarding.district).parent().type(district)
        cy.get(this.selectorOnboarding.chooseDistrict).click()
    }

    clickNext() {
        cy.get(this.selectorOnboarding.next).click()
    }

    fillWarehouseSenderName(warehouseSenderName) {
        cy.get(this.selectorOnboarding.warehouseSenderName).type(warehouseSenderName)
    }

    fillWarehousePhone(warehousePhone) {
        cy.get(this.selectorOnboarding.warehousePhone).type(warehousePhone)
    }

    fillWarehouseName(warehouseName) {
        cy.get(this.selectorOnboarding.warehouseName).type(warehouseName)
    }

    fillFinanceName(financeName) {
        cy.get(this.selectorOnboarding.financeName).type(financeName)
    }

    fillWorkingStart(workingStart) {
        cy.get(this.selectorOnboarding.workingStart).type(workingStart)
    }

    fillWorkingEnd(workingEnd) {
        cy.get(this.selectorOnboarding.workingEnd).type(workingEnd)
    }

    chooseWorkingDay(workingDay) {
        for(let days in workingDay) {
            cy.get(this.selectorOnboarding.workingDay).contains(workingDay[days]).click()
        }
    }

    chooseBillingPeriod(billingPeriod) {
        cy.contains(this.selectorOnboarding.billingPeriod).click()
        cy.get('span').contains(billingPeriod).click()
    }

    fillPickupStart(pickupStart) {
        cy.get(this.selectorOnboarding.pickupStart).type(pickupStart)
    }

    fillPickupEnd(pickupEnd) {
        cy.get(this.selectorOnboarding.pickupEnd).type(pickupEnd)
    }

    choosePaymentMethod(paymentMethod) {
        switch (paymentMethod) {
            case 'invoice':
                cy.get(this.selectorOnboarding.paymentMethod.invoicing).click()
              break;
            case 'cod':
                cy.get(this.selectorOnboarding.paymentMethod.netOffCOD).click()
              break;
            default:
                cy.get(this.selectorOnboarding.paymentMethod.invoicing).click()
              break;
        }
    }

    choosepaymentTax(ppn) {
        switch (ppn) {
            case 'with-ppn':
                cy.get(this.selectorOnboarding.paymentTax.taxppn).click()
              break;
            case 'without-ppn':
                cy.get(this.selectorOnboarding.paymentTax.taxnonppn).click()
              break;
            default:
                cy.get(this.selectorOnboarding.paymentTax.taxppn).click()
              break;
        }
    }

    chooseAllService() {
        cy.get(this.selectorOnboarding.service.gocap).click()
        cy.get(this.selectorOnboarding.service.kiss).click()
        cy.get(this.selectorOnboarding.service.satset).click()
        cy.get(this.selectorOnboarding.service.serbu).click()
    }

    fillAddressWarehouse(warehouseAddress) {
        cy.get(this.selectorOnboarding.warehouseAddress).type(warehouseAddress)
    }

    chooseBank(nameBank) {
        cy.get(this.selectorOnboarding.chooseBank).click()
        cy.get('span').contains(nameBank).click()
    }

    fillAccountNumber(accountNumber) {
        cy.get(this.selectorOnboarding.accountNumber).type(accountNumber)
    }

    fillAccountName(nameAccount) {
        cy.get(this.selectorOnboarding.accountName).type(nameAccount)
    }


}
module.exports = new OnboardingPage()
