describe('template spec', () => {
  const LOCALHOST = 'http://localhost:8000'
  it('enters the website', () => {
    cy.visit(LOCALHOST);
  })
})