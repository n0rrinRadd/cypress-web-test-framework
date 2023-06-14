
context('Hooks test', () => {

  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })
  
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.log('after each hook is here')
  })

  after(() => {
    cy.log('the final after hook runs once')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist');
  })

})