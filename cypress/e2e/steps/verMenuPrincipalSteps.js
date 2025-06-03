import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("acesso a página inicial",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})


When("clico no roll",()=>{
    cy.get('#navigation').click()
})


Then("o menu deve estar visível com as opções {Despesas}, {Receitas}, {Servidores} e {Contratos}",()=>{
    cy.get('nav.menu-body').should('be.visible')
})