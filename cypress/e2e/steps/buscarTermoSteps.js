import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";


Given("eu acessar o portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})
When("eu digito {String} na barra de pesquisa o que voce esta procurando",()=>{
    cy.get("#termoBuscaPortal").type('Saúde')
})
And("aperto o botao de pesquisa",()=>{
    cy.get('button[type="submit"]').click()
})
Then("deve aparecer todos resultados relacionados a {String}",()=>{
    cy.get("#resultados").should("contain.text", "Saúde")
})

//segundo teste

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
