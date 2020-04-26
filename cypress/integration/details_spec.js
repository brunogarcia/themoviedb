describe('Movie details', () => {
  beforeEach(() => {
    cy.visit('/details/419704');
  });

  it('Check the movie details', () => {
    cy.get('[data-cy=movie-details-title]')
      .should('contain', 'Ad Astra');

    cy.get('[data-cy=movie-details-release-year]')
      .should('contain', '2019');
  });
});
