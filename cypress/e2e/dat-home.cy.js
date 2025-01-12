describe('Home Site Overview', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    cy.visit('https://www.dat.com/')
  })

  it('Welcome test', () => {
    cy.get('h1').contains('WE TAKE THE')
  })

  it('Login test', () => {
    cy.get('a').contains('Login').click()
    cy.get('h1').contains('Welcome Back!')
  })

})