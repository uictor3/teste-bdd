import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("eu acessar o portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})


When("eu clico no Acesso a informação",()=>{
    cy.get('a[href="http://www.acessoainformacao.gov.br"]').contains("Acesso à Informação").click()
})


Then("deve aparecer a tela que contém outras informações que tem no site",()=>{
    cy.should().visit('https://www.gov.br/acessoainformacao/pt-br')
})
