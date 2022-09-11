import {TEST_ATTRIBUTE} from '../../utils/TestAttribute'
import {allureStep} from '../../utils/AllureHelper'

export class TodoPage {
  addNewTask(task) {
    allureStep(`Add new task: ${task}`, () => {
      this.fillInTaskTitle(task)
        .clickAddTaskButton()
    })
    return this
  }

  fillInTaskTitle(task) {
    allureStep(`Fill in Task title filed: ${task}`, () => {
      cy
        .get(ADD_TASK_INPUT)
        .focus()
        .realType(task)
    })
    return this
  }

  clickAddTaskButton() {
    allureStep('Click Add Task button', () => {
      cy
        .get(ADD_TASK_BUTTON)
        .realClick()
    })
    return this
  }


  assertThatTodoPageIsDisplayed() {
    allureStep('TodoPage is displayed', () => {
      cy.get(PAGE_WRAPPER).should('be.visible')
    })
    return this
  }

  assertThatStubIsDisplayed() {
    allureStep('The "Your Todo list is empty!" stub is displayed', () => {
      cy.get(STUB).should('be.visible')
    })
    return this
  }

  assertThatStubIsHidden() {
    allureStep('The "Your Todo list is empty!" stub is hidden', () => {
      cy.get(STUB).should('not.exist')
    })
    return this
  }

  assertThatLoaderIsDisplayed() {
    allureStep('The loader is displayed', () => {
      cy.get(LOADER).should('be.visible')
    })
    return this
  }
}

const PAGE_WRAPPER = `[${TEST_ATTRIBUTE}="todoPageWrapper"]`
const ADD_TASK_INPUT = `[${TEST_ATTRIBUTE}="addTaskInput"]`
const ADD_TASK_BUTTON = `[${TEST_ATTRIBUTE}="addTaskButton"]`
const STUB = `[${TEST_ATTRIBUTE}="stub"]`
const LOADER = `[${TEST_ATTRIBUTE}="loader"]`