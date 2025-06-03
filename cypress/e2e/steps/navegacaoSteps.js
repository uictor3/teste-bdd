import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// acessando outra página
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

//voltando para o homepage
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


