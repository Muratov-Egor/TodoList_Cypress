import {TEST_ATTRIBUTE} from '../utils/TestAttribute'
import {allureStep} from '../utils/AllureHelper'

export class TodoPage {
  assertThatTodoPageIsDisplayed() {
    allureStep('TodoPage is displayed', () => {
      cy.get(PAGE_WRAPPER).should('be.visible')
    })
  }
}

const PAGE_WRAPPER = `[${TEST_ATTRIBUTE}="todoPageWrapper"]`