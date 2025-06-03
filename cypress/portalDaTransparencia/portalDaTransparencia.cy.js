context(" Testes do Portal da Transparencia",()=>{
    beforeEach(() => {
        cy.visit('https://portaldatransparencia.gov.br/')
    })


    it('Test-SearchBar1',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get("#termoBuscaPortal").type('José Pereira')
        cy.get('button[type="submit"]').click()
        cy.get("#resultados").should("contain.text", "José Pereira")
    })

    it('Test-SearchBar2',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('button[type="submit"]').click()
        cy.get("#resultados")
    })

//--------------------------------------------------------------------------------------------
    it('Test1-buscar termo',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get("#termoBuscaPortal").type('Saúde')
        cy.get('button[type="submit"]').click()
        cy.get("#resultados").should("contain.text", "Saúde")
    })

    it('Test2-modo contraste',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get("#alto-contraste").click()
        cy.get('body').should('have.class', 'contraste')
    })

//-------------------------------------------------------------------------------------------

      it('Test1-acesso as informações',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('a[href="http://www.acessoainformacao.gov.br"]').contains("Acesso à Informação").click()
    })
     it('Test2-Verificar existência do menu principal',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('#navigation').click()
        cy.get('nav.menu-body').should('be.visible')
    })
//--------------------------------------------------------------------------------------------
    it('Test1-Acessando outra página',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('#btnDespesas').click()
        cy.url().should('include', 'despesas/visao-gerall')
    })

    it('Test2-Voltando para a homepage',()=>{
        cy.visit('https://portaldatransparencia.gov.br/despesas/visao-gerall')
        cy.get("#accept-minimal-btn").click()
        cy.contains('.link-home','Portal da Transparência').click()
        cy.url().should('not.exist', 'despesas/visao-gerall')
    })
//--------------------------------------------------------------------------------------------
    it('Test-grafico1',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('.br-button[type="button"]').contains('Download').click()
        cy.url().should('include', 'download-de-dados')
        cy.contains('span', 'Benefícios ao cidadão').parent('button').click()
        cy.get('a[href="/download-de-dados/auxilio-brasil"]').click()
        cy.get('#tableBeneficios').should('be.visible')
    })
    
    it('Test-grafico2',()=>{
        cy.visit('https://portaldatransparencia.gov.br/')
        cy.get("#accept-minimal-btn").click()
        cy.get("button").contains('Pular Tutorial').click()
        cy.get('#btnDespesas').click()
        cy.get('#button-painel-depesas').click()
        cy.get('#main-content').should('be.visible')
    })

})
