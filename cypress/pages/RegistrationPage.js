import {TEST_ATTRIBUTE} from '../utils/TestAttribute'
import {allureStep} from '../utils/AllureHelper'

export class RegistrationPage {
  fillInRegistrationForm({email, password}) {
    allureStep(`Fill in Registration form`, () => {
      if (email) {
        this.fillInEmail(email)
      }
      if (password) {
        this.fillInPassword(password)
      }

      this.clickRegistrationButton()
    })
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

  clickRegistrationButton() {
    allureStep(`Click registration button`, () => {
      cy.get(BUTTON_SUBMIT_FORM)
        .realClick()
    })
    return this
  }

  clickLoginLink() {
    allureStep(`Click login link`, () => {
      cy.get(LINK_LOGIN)
        .realClick()
    })
    return this
  }
}

const INPUT_EMAIL = `[${TEST_ATTRIBUTE}="inputEmail"]`
const INPUT_PASSWORD = `[${TEST_ATTRIBUTE}="inputPassword"]`
const BUTTON_SUBMIT_FORM = `[${TEST_ATTRIBUTE}="submitBtn"]`
const LINK_LOGIN = `[${TEST_ATTRIBUTE}="linkRegistration"]`