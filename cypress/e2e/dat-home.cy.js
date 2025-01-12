describe('Home Site Overview', () => {

  it('Welcome test', () => {
    cy.visit('https://www.dat.com/')
    cy.get('h1').contains('WE TAKE THE')
  })

  it('Login test', () => {
    cy.visit('https://www.dat.com/')
    cy.get('a').contains('Login').click()
    cy.get('h1').contains('Welcome Back!')
  })

})