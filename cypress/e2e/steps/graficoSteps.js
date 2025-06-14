import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";

Given("access to the portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})

When("eu clico em despesas publicas",()=>{
    cy.get('#btnDespesas').click()
})


And("aperto botao de ver painel grafico",()=>{
   cy.get('#button-painel-depesas').click()
})

Then("deve mostrar os graficos das despesas publicas", ()=>{
    cy.get('#main-content').should('be.visible')
})