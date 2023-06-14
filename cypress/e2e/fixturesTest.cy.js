/* eslint-disable mocha/no-exclusive-tests */

const token = 'abc123'
context('Fixtures tests', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS', this.data)
    })
  })

  it('sets a token in local storage', () => {
    cy.setLocalStorage('token', token)  
  })

  it('sets and gets a token from local storage', () =>{
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', token)
  })

  it('overwrites the type command by using sensative characters', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true })
  })

  it('uses fixture data in a network request', function () {
    cy.visit('/commands/network-requests')
    cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log('Response: ', res)
    })
  })

  it('pulls data from a fixture',  ()=> {
    cy.fixture('example').then((data) => {
      cy.log('DATA', data)
    })
  })

  it('updates fixture data inline', () =>{
    cy.fixture('example').then((data) => {
      data.email = 'updated@mail.com'
      cy.log('UPDATED: ', data)
    })
  })

  
})