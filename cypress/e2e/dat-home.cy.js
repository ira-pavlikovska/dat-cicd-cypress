describe('Home Site Overview', () => {

  it('Welcome test', () => {
    cy.visit('https://www.dat.com/')
    //todo
  })

  it('Login test', () => {
    cy.visit('https://www.dat.com/')
    cy.get('a').contains('Login').click()
    cy.get('h1').contains('Welcome Back!')
  })

  it('Signup test', () => {
    cy.visit('https://www.dat.com/')
    // todo
  })

})