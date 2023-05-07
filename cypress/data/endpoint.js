/// <reference types="cypress" />
const baseUrl = "https://sandbox-app.oexpress.co.id"

export const ENDPOINT = { 
    login : `${baseUrl}/login`,
    registerReg: `${baseUrl}/register`,
    registerCorp: `${baseUrl}/corp/register`,
   
    openURL(url) {
        cy.visit(url,{failOnStatusCode: false})
    }
}