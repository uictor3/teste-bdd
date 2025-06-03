import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";

Given("access to the portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})

When("clicked the search button without putting any information",()=>{
    cy.get('button[type="submit"]').click()
})


Then("should not show any information",()=>{
    cy.get("#resultados")
})