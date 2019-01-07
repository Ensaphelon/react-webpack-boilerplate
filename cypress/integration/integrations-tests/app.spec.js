context('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Application opens', () => {
    cy.get('.app').should('have.text', 'Application root')
  })
})
