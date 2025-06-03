import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("eu acessar o portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})

When("clico no botão de modo contrase",()=>{
    cy.get("#alto-contraste").click()
})

Then("o site deve mudar para modo contraste",()=>{
    cy.get('body').should('have.class', 'contraste');
})