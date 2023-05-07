/// <reference types="cypress" />

class OnboardingPage {
    
    selectorOnboarding = {
        storeName: "[name='store_name']",
        nameOwner: "[name='name']",
        phone: "[name='phone']",
        pickupAddress: "[name='pickup_address']",
        district: "[class='multiselect__tags']",
        chooseDistrict: "[class='multiselect__option--highlight multiselect__option']",
        next: "[class='btn btn-sm btn-primary']",
        constainsNext: "Selanjutnya",
        addressPickupSame: "[for='store-address']",
        chooseBank: "[class='multiselect__tags']",
        accountNumber: "[name='account_number']",
        accountName: "[name='account_name']",
        uploadIdCard: "[name='file']"


    }
    
    fillStoreName(storeName) {
        cy.get(this.selectorOnboarding.storeName).type(storeName).should('have.value',storeName)
    }
    
    fillNameOwner(name) {
        cy.get(this.selectorOnboarding.nameOwner).type(name)
    }
    
    fillPhone(phone) {
        cy.get(this.selectorOnboarding.phone).type(phone)
    }

    fillAddress(pickupAddress) {
        cy.get(this.selectorOnboarding.pickupAddress).type(pickupAddress)
    }

    chooseDistrict(district) {
        cy.get(this.selectorOnboarding.district).type(district)
        cy.get(this.selectorOnboarding.chooseDistrict).click()
    }


    clickNext() {
        cy.get(this.selectorOnboarding.next).contains(this.selectorOnboarding.constainsNext).click()
    }

    checkAddressPickupSame() {
        cy.get(this.selectorOnboarding.addressPickupSame).click()
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

    uploadIdCard(pathfile) {
        cy.get(this.selectorOnboarding.uploadIdCard).attachFile(pathfile)
    }


}
module.exports = new OnboardingPage()
