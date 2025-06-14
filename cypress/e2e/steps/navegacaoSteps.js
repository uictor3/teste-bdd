import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("eu acessar o portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})


When("eu clico em Despesas Publicas",()=>{
    cy.get('#btnDespesas').click()
})


Then("deve direcionar para a pagina de despesas publicas",()=>{
    cy.url().should('include', 'despesas/visao-gerall');
})


