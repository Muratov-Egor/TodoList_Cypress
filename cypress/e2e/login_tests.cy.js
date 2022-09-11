import {allureTestInfo} from '../utils/AllureHelper'
import {LoginPage} from '../pages/LoginPage'
import {MessageSnackBar} from '../pages/MessageSnackBar'
import {TodoPage} from '../pages/TodoPage/TodoPage'
import {User} from '../models'
import {LoginErrors} from '../texts'

Cypress.on('uncaught:exception', () => {
  return false
})

describe('Login page tests', () => {
  beforeEach(() => {
    allureTestInfo({
      suite: 'Login Page',
      epic: 'Authorisation',
      tags: ['login', 'regress', 'smoke'],
      owner: 'Egor Muratov'
    })
  })

  it('Successful login', () => {
    const loginForm = new LoginPage()
    const todoPage = new TodoPage()
    const user = new User()

    cy.openPage('Open Login page', '/login')
    loginForm
      .fillInLoginForm(user)
    todoPage
      .assertThatTodoPageIsDisplayed()
  })

  it('Show message email is empty', () => {
    const loginForm = new LoginPage()
    const message = new MessageSnackBar()
    const user = new User()

    cy.openPage('Open Login page', '/login')
    loginForm
      .fillInLoginForm({password: user.password})
    message
      .messageBlockHasText(LoginErrors.emailIsEmpty)
  })

  it('Show message password is empty', () => {
    const loginForm = new LoginPage()
    const message = new MessageSnackBar()
    const user = new User()

    cy.openPage('Open Login page', '/login')
    loginForm
      .fillInLoginForm({email: user.email})
    message
      .messageBlockHasText(LoginErrors.passwordIsEmpty)
  })

  it('Show message wrong password', () => {
    const loginForm = new LoginPage()
    const message = new MessageSnackBar()
    const user = new User({password: 'wrongPassword'})

    cy.openPage('Open Login page', '/login')
    loginForm
      .fillInLoginForm(user)
    message
      .messageBlockHasText(LoginErrors.wrongPassword)
  })

  it('Show message user not found', () => {
    const loginForm = new LoginPage()
    const message = new MessageSnackBar()
    const user = new User({email: 'user@not.found'})

    cy.openPage('Open Login page', '/login')
    loginForm
      .fillInLoginForm(user)
    message
      .messageBlockHasText(LoginErrors.userNotFound)
  })
})