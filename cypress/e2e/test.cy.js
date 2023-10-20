describe('template spec', () => {
  const LOCALHOST = 'http://localhost:8000'

  it('agrega 0 en la cantidad de personas y apreta siguiente', () => {
    cy.visit(LOCALHOST+'/tarea1').get("#cantidad-personas").type('0').get('#siguiente').click().get('#error-cantidad').should('have.text', 'el valor debe ser igual o mayor a 1');
  })

})