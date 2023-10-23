describe('Pruebas de tarea 1', () => {
  const TAREA1 = 'http://localhost:8000/tarea1';
  beforeEach(() => {
    cy.visit(TAREA1);
  });
  it('Debería mostrar un error si se ingresa una cantidad inválida de personas', () => {
    const CANTIDAD_INVALIDA = 0;
    cy.get("#cantidad-personas").type(CANTIDAD_INVALIDA).get('#siguiente').click();
    cy.get('#error-cantidad').should('have.text', 'el valor debe ser igual o mayor a 1');
  })

  it('Debería mostrar un error si se ingresa una cantidad superior a la permitida de personas', () => {
    const CANTIDAD_INVALIDA = 101;
    cy.get("#cantidad-personas").type(CANTIDAD_INVALIDA).get('#siguiente').click();
    cy.get('#error-cantidad').should('have.text', 'el valor debe ser menor de 100');
  })

  it(`Debería mostrar el easter egg si se ingresa una sola persona en la cantidad`, () => {
    const CANTIDAD_PERSONAS = 1;
    cy.get("#cantidad-personas").type(CANTIDAD_PERSONAS).get('#siguiente').click();
    cy.get('.input-group-text').should('have.length', CANTIDAD_PERSONAS);
    cy.get('#easter-egg').should('be.visible');
  })

  it(`Debería mostrar un error si se ingresa una edad con decimal`, () => {
    const CANTIDAD_PERSONAS = 1;
    const DECIMAL = 1.5;
    cy.get("#cantidad-personas").type(CANTIDAD_PERSONAS).get('#siguiente').click();
    cy.get('.input-group-text').type(DECIMAL);
    cy.get('#calcular').click();
    cy.get('#campos-decimales').should('be.visible');
  })

  it(`Debería mostrar un error si se deja un campo de edad vacío al realizar los cálculos`, () => {
    const CANTIDAD_PERSONAS = 1;
    cy.get("#cantidad-personas").type(CANTIDAD_PERSONAS).get('#siguiente').click().get('#calcular').click();
    cy.get('#campos-incompletos').should('be.visible');
  })

  it('agrega 5 edades las rellena y las evalua', () => {
    const CANTIDAD_PERSONAS = 5;
    cy.get("#cantidad-personas").type(CANTIDAD_PERSONAS).get('#siguiente').click();
    cy.get('.input-group-text').should('have.length', CANTIDAD_PERSONAS).each(($edad, index) => {
      if(index === 0){
        cy.wrap($edad).type(CANTIDAD_PERSONAS-1);
      }
      else if(index === CANTIDAD_PERSONAS-1){
        cy.wrap($edad).type(CANTIDAD_PERSONAS+1);
      }
      else{
        cy.wrap($edad).type(CANTIDAD_PERSONAS);
      }
    })
    cy.get('#calcular').click();
    cy.get('#mayor-edad').should('have.text', CANTIDAD_PERSONAS+1);
    cy.get('#menor-edad').should('have.text', CANTIDAD_PERSONAS-1);
    cy.get('#promedio-edad').should('have.text', CANTIDAD_PERSONAS);
  })

})
