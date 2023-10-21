describe('template spec', () => {
  const TAREA1 = 'http://localhost:8000/tarea1'

  it('agrega 0 en la cantidad de personas y espera un error', () => {
    const CANTIDAD = 0;
    cy.visit(TAREA1).get("#cantidad-personas").type(CANTIDAD).get('#siguiente').click();
    cy.get('#error-cantidad').should('have.text', 'el valor debe ser igual o mayor a 1');
  })

  it(`agrega 1 en la cantidad de personas y chekea el easter egg`, () => {
    const CANTIDAD = 1;
    cy.visit(TAREA1).get("#cantidad-personas").type(CANTIDAD).get('#siguiente').click();
    cy.get('.input-group-text').should('have.length', CANTIDAD);
    cy.get('#easter-egg').should('be.visible');
  })

  it('agrega 5 edades las rellena y las evalua', () => {
    const CANTIDAD = 5;
    cy.visit(TAREA1).get("#cantidad-personas").type(CANTIDAD).get('#siguiente').click();
    cy.get('.input-group-text').should('have.length', CANTIDAD).each(($edad, index) => {
      if(index === 0){
        cy.wrap($edad).type(CANTIDAD-1);
      }
      else if(index === CANTIDAD-1){
        cy.wrap($edad).type(CANTIDAD+1);
      }
      else{
        cy.wrap($edad).type(CANTIDAD);
      }
    })
    cy.get('#calcular').click();
    cy.get('#menor-edad').should('have.text', CANTIDAD-1);
    cy.get('#mayor-edad').should('have.text', CANTIDAD+1);
    cy.get('#promedio-edad').should('have.text', CANTIDAD);
  })

})