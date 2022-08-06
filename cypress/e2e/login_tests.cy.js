import {allureTestInfo} from '../utils/AllureHelper'
import {LoginForm} from '../elements/LoginForm'
import {MessageSnackBar} from '../elements/MessageSnackBar'
Cypress.on('uncaught:exception', () => {
  return false
})
describe('Tests login page', () => {
  beforeEach(() => {
    allureTestInfo({
      suite: 'Login Page',
      epic: 'Authorisation',
      tags: ['login', 'regress', 'smoke'],
      owner: 'Egor Muratov'
    })
  })

  it('Login', () => {
    const loginForm = new LoginForm()
    const messageSnackBar = new MessageSnackBar()

    cy.openPage('Open login page', '/')
    messageSnackBar
      .messageBlockIsNotExist()
    loginForm
      .fillInEmail('email@email.com')
      .fillInPassword('pass')
      .clickLoginButton()
    messageSnackBar
      .messageBlockHasText('User not found')
      .clickButtonCloseMessage()
      .messageBlockIsNotExist()
  })
})