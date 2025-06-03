context("Testes do Portal da Transparência", () => {
  beforeEach(() => {
    cy.visit('https://portaldatransparencia.gov.br/')
    cy.get("#accept-minimal-btn").click()
    cy.get("button").contains('Pular Tutorial').click()
  })

  describe("Barra de busca", () => {
    it('Deve buscar por nome: José Pereira', () => {
      cy.get("#termoBuscaPortal").type('José Pereira')
      cy.get('button[type="submit"]').click()
      cy.get("#resultados").should("contain.text", "José Pereira")
    })

    it('Deve clicar em buscar sem termo preenchido', () => {
      cy.get('button[type="submit"]').click()
      cy.get("#resultados").should('exist')
    })

    it('Deve buscar pelo termo "Saúde"', () => {
      cy.get("#termoBuscaPortal").type('Saúde')
      cy.get('button[type="submit"]').click()
      cy.get("#resultados").should("contain.text", "Saúde")
    })
  })

  describe("Acessibilidade", () => {
    it('Deve ativar modo alto contraste', () => {
      cy.get("#alto-contraste").click()
      cy.get('body').should('have.class', 'contraste')
    })
  })

  describe("Acesso à Informação", () => {
    it('Deve acessar link Acesso à Informação', () => {
      cy.get('a[href="http://www.acessoainformacao.gov.br"]').contains("Acesso à Informação").click()
    })

    it('Deve verificar existência do menu principal', () => {
      cy.get('#navigation').click()
      cy.get('nav.menu-body').should('be.visible')
    })
  })

  describe("Navegação entre páginas", () => {
    it('Deve acessar página de despesas', () => {
      cy.get('#btnDespesas').click()
      cy.url().should('include', 'despesas/visao-geral')
    })

    it('Deve voltar para a homepage', () => {
      cy.visit('https://portaldatransparencia.gov.br/despesas/visao-geral')
      cy.get("#accept-minimal-btn").click()
      cy.contains('.link-home', 'Portal da Transparência').click()
      cy.url().should('not.include', 'despesas/visao-geral')
    })
  })

  describe("Gráficos e downloads", () => {
    it('Deve acessar gráficos e visualizar dados de auxílio', () => {
      cy.get('.br-button[type="button"]').contains('Download').click()
      cy.url().should('include', 'download-de-dados')
      cy.contains('span', 'Benefícios ao cidadão').parent('button').click()
      cy.get('a[href="/download-de-dados/auxilio-brasil"]').click()
      cy.get('#tableBeneficios').should('be.visible')
    })

    it('Deve acessar painel de despesas', () => {
      cy.get('#btnDespesas').click()
      cy.get('#button-painel-depesas').click()
      cy.get('#main-content').should('be.visible')
    })
  })
})
