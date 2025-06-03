import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("eu estou nas despesa publicas",()=>{
    cy.visit('https://portaldatransparencia.gov.br/despesas/visao-gerall')
    cy.get("#accept-minimal-btn").click()
    
})


When("eu clico em Portal da transparência",()=>{
    cy.contains('.link-home','Portal da Transparência').click()
})


Then("deve direcionar para a homepage e não ter mais o diretório de despesas no link",()=>{
    cy.url().should('not.exist', 'despesas/visao-gerall');
})
