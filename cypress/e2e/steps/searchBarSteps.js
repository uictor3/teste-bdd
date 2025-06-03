import { Given, When, And , Then } from "@badeball/cypress-cucumber-preprocessor";

//test1 - search for public servers with José Pereira in their names
Given("access to the portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})


When("typed on the search bar for {String}",()=>{
    cy.get("#termoBuscaPortal").type('J')
})

And("clicked on the search button",()=>{
    cy.get('button[type="submit"]').click()
})

Then("should appear results of people with {String} in their names",()=>{
    cy.get("#resultados").should("contain.text", "José Pereira")
})

//test2 - what should appear if press the search button without information on the input

Given("access to the portal da transparencia",()=>{
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
})

When("clicked the search button without putting any information",()=>{
    cy.get('button[type="submit"]').click()
})


Then("should not show any information",()=>{
    cy.get("#resultados")
})
