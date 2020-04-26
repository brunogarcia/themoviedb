describe('Search a movie', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check the movie details of Interstellar', () => {
    cy.get('[data-cy=search-movie]')
      .type('Interstellar');

    cy.get('[data-cy=search-results]')
      .contains('Interstellar')
      .click();

    cy.url()
      .should('include', '/details/157336');

    cy.get('[data-cy=movie-details-title]')
      .should('contain', 'Interstellar');

    cy.get('[data-cy=movie-details-release-year]')
      .should('contain', '2014');
  });
});
