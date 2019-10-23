describe('Queue', () => {

  beforeEach(() => {
    cy.server();
    cy.route({
      url: '/api/queue',
      method: 'GET',
      status: 200,
      response: 'fixture:queue'
    });
    cy.visit('/');
  });

  it('should load queue', () => {
    cy.get('.QueueItem')
      .should('have.length', 2);
  });

  it('remove customer from queue when call', () => {
    cy.get('.QueueItem')
      .should('have.length', 2);
    cy.get('.QueueItem')
      .first()
      .find('.call > button')
      .click();
    cy.get('.QueueItem')
      .should('have.length', 1);
  });

  it('remove customer from queue when remove', () => {
    cy.get('.QueueItem')
      .should('have.length', 2);
    cy.get('.QueueItem')
      .first()
      .find('.remove > button')
      .click();
    cy.get('.QueueItem')
      .should('have.length', 1);
  });
});
