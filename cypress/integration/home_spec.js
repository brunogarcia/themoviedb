describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the movie list', () => {
    cy.get('[data-cy=movie-item]')
      .should('have.length', '20');
  });
});
