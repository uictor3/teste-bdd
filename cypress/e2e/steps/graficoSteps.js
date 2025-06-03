import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";


Given("access to the portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})

When("eu clico em Faça Download e direcionar para a pagina",()=>{
    cy.get('.br-button[type="button"]').contains('Download').click()
    cy.url().should('include', 'download-de-dados')
})

And("apertar nos dados que me interessam e escolher o arquivo",()=>{
    cy.contains('span', 'Benefícios ao cidadão').parent('button').click()
    cy.get('a[href="/download-de-dados/auxilio-brasil"]').click()
})

Then("deve mostrar as opcoes de download", ()=>{
    cy.get('#tableBeneficios').should('be.visible')
})

//-------------------------------------------------------------------

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