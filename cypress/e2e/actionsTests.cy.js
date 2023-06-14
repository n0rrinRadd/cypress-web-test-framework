/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable mocha/no-exclusive-tests */
// @ts-nocheck

context('Actions tests', () => {

  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('renders the correct h1 text', () => {
    cy.visit('/commands/actions')
    cy.get('h1').should('contain.text', 'Action')
  })

  it('renders a section with the correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    })
  })

  it('types into an email field', () => {
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000).then(() => {
      console.log('test is finished')
      fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    })
    cy.log('Cypress log used')
  })

  it('shows an active class for the current page', () =>{
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('should not have an active class on inactive pages', () => {
    cy.get('.dropdown-menu').find('li').first()
    .should('not.have.class', 'active')
    .find('a')
    .should('have.attr', 'href', '/commands/querying')
  })

  it('links to the actions page correctly', () => {
    cy.findAllByText('Actions').first().click({ force : true })
    cy.url().should('include', 'commands/actions')
  })

  it('lets you type in an input field', () => {
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })

  it('lets you clear an input field', () => {
    cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
    .clear().should('have.value', '')
  })

  it('lets you check a checkbox', () => {
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  })

  it('lets you check a disabled checkbox', () => {
    cy.get('.action-checkboxes [type="checkbox"]').eq(1).first().check({ force: true }).should('be.checked')
  })

  it('trigers a popover on click', () => {
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('can click on different sections of a canvas', () => {
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80, 100)
  })

  it('can double click to edit', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit', () => {
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })
  
  it('shows the nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })

})