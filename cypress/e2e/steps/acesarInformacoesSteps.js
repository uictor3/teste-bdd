import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";

//teste1
Given("eu acessar o portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})


When("eu clico no Acesso a informação",()=>{
    cy.get('a[href="http://www.acessoainformacao.gov.br"]').contains("Acesso à Informação").click()
})


Then("deve aparecer a tela que contém informações sobre as funcionalidades que tem no site",()=>{
    cy.should().visit('https://www.gov.br/acessoainformacao/pt-br')
})


//teste2
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