import {TEST_ATTRIBUTE} from '../utils/TestAttribute'
import {allureStep} from '../utils/AllureHelper'

export class LoginPage {
  fillInLoginForm({email, password}) {
    if (email) {
      this.fillInEmail(email)
    }
    if (password) {
      this.fillInPassword(password)
    }

    this.clickLoginButton()

    return this
  }

  fillInEmail(email) {
    allureStep(`Type ${email} in Email input`, () => {
      cy.get(INPUT_EMAIL)
        .focus()
        .realType(email)
    })
    return this
  }

  fillInPassword(password) {
    allureStep(`Type ${password} in Password input`, () => {
      cy.get(INPUT_PASSWORD)
        .focus()
        .realType(password)
    })
    return this
  }

  clickLoginButton() {
    allureStep(`Click login button`, () => {
      cy.get(BUTTON_SUBMIT_FORM)
        .realClick()
    })
    return this
  }

  clickRegistrationLink() {
    allureStep(`Click registration link`, () => {
      cy.get(LINK_REGISTRATION)
        .realClick()
    })
    return this
  }
}

const INPUT_EMAIL = `[${TEST_ATTRIBUTE}="inputEmail"]`
const INPUT_PASSWORD = `[${TEST_ATTRIBUTE}="inputPassword"]`
const BUTTON_SUBMIT_FORM = `[${TEST_ATTRIBUTE}="submitBtn"]`
const LINK_REGISTRATION = `[${TEST_ATTRIBUTE}="linkRegistration"]`