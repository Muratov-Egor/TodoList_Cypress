describe('Tests login page', () => {
  it('Login page', () => {
    cy.allure().step('Open login page', () => {
      cy.visit('/')
    })
  })
})