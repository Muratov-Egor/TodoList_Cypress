import {allureTestInfo} from '../utils/AllureHelper'
import {RegistrationPage} from '../pages/RegistrationPage'
import {MessageSnackBar} from '../pages/MessageSnackBar'
import {RegistrationErrors} from '../texts/RegistrationErrors'

Cypress.on('uncaught:exception', () => {
  return false
})

describe('Registration tests', () => {
  let userId

  beforeEach(() => {
    allureTestInfo({
      suite: 'Registration Page',
      epic: 'Registration',
      tags: ['registration', 'regress', 'smoke'],
      owner: 'Egor Muratov'
    })

    cy.intercept('/api/auth/registration')
      .as('registration')
  })

  it('Successful registration', () => {
    const registrationPage = new RegistrationPage()
    const message = new MessageSnackBar()
    cy.openPage('Open Registration page', '/registration')

    registrationPage.fillInRegistrationForm({
      email: 'registrationTestUser@todo.list',
      password: '123581321'
    })

    cy.wait('@registration').then(res => {
      userId = res.response.body.userId
    })

    message
      .messageBlockHasText(RegistrationErrors.userCreated)
  })

  it('Show message password is empty', () => {
    const registrationPage = new RegistrationPage()
    const message = new MessageSnackBar()
    cy.openPage('Open Registration page', '/registration')

    registrationPage.fillInRegistrationForm({
      email: 'registrationTestUser@todo.list',
    })

    message
      .messageBlockHasText(RegistrationErrors.wrongPassword)
  })

  it('Show message user already exists', () => {
    const registrationPage = new RegistrationPage()
    const message = new MessageSnackBar()
    cy.openPage('Open Registration page', '/registration')

    registrationPage.fillInRegistrationForm({
      email: 'registrationTestUser@todo.list',
      password: '123123'
    })

    message
      .messageBlockHasText(RegistrationErrors.userExists)
  })

  it('Show message Incorrect email', () => {
    const registrationPage = new RegistrationPage()
    const message = new MessageSnackBar()
    cy.openPage('Open Registration page', '/registration')

    registrationPage.fillInRegistrationForm({
      password: '123123'
    })

    message
      .messageBlockHasText(RegistrationErrors.emailIsEmpty)
  })

  after(() => {
    cy.deleteUser(userId)
  })
})