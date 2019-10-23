describe('Sidenav', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('starts closed', () => {
    cy.get('.App.App--sidebar-open')
      .should('have.length', 0);
  });

  it('hamburger menu works', () => {
    cy.get('.Header svg')
      .click();
    cy.get('.App.App--sidebar-open')
      .should('have.length', 1);
    cy.get('.Header svg')
      .click();
    cy.get('.App.App--sidebar-open')
      .should('have.length', 0);
  });

  it('have all menu items', () => {
    const items = cy.get('.App__sidebar nav ul li a span');

    cy.get('.App__sidebar nav ul li a span')
      .eq(0)
      .should('have.text', 'Users');

    cy.get('.App__sidebar nav ul li a span')
      .eq(1)
      .should('have.text', 'Leads');

    cy.get('.App__sidebar nav ul li a span')
      .eq(2)
      .should('have.text', 'Analytics');

    cy.get('.App__sidebar nav ul li a span')
      .eq(3)
      .should('have.text', 'Settings');

    cy.get('.App__sidebar__footer a span')
      .should('have.text', 'Log out');

  });
});
