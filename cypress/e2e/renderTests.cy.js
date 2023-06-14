/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable mocha/no-exclusive-tests */
// @ts-nocheck

const navbarText = Cypress.env('navbarText')
context('Render tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist');
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })

  it('renders a paragraph under the h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('renders a section with the correct elements', () => {
    cy.visit('/commands/actions')
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    })
  })

  it('correctly renders the cypress website link', () => {
    cy.findByText(navbarText).should('exist')
  })

})