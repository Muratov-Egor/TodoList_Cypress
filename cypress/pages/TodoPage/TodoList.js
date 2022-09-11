import {TEST_ATTRIBUTE} from '../../utils/TestAttribute'
import {allureStep} from '../../utils/AllureHelper'

export class TodoList {
  deleteTodoItem(title) {
    allureStep(`Delete todo item with title: ${title}`, () => {
      cy.get(TODO_ITEM)
        .find(TITLE)
        .contains(title)
        .siblings(DELETE_BUTTON)
        .realClick()
    })
    return this
  }

  editTodoItem(title, newTitle) {
    allureStep(`Edit todo item with title: ${title} to ${newTitle}`, () => {
      allureStep('Click edit button', () => {
        cy
          .get(TODO_ITEM)
          .find(TITLE)
          .contains(title)
          .siblings(EDIT_BUTTON)
          .realClick()
      })
      this.fillInEditTitleInput(newTitle)
      this.clickSaveButton()
    })
    return this
  }

  fillInEditTitleInput(newTitle) {
    allureStep(`Fill in edit title input: ${newTitle}`, () => {
      cy
        .get(EDIT_TITLE_INPUT)
        .clear()
        .realType(newTitle)
    })
    return this
  }

  clickSaveButton() {
    allureStep('Click Save button', () => {
      cy.get(SAVE_BUTTON)
        .realClick()
    })
    return this
  }

  assertThatTodoListHasNotTask(title) {
    allureStep(`Todo list has not task with title: ${title}`, () => {
      cy.get(TODO_ITEM)
        .get(TITLE)
        .should('not.contain', title)
    })
    return this
  }

  assertThatTodoListHasTask(title) {
    allureStep(`Todo list has task with title: ${title}`, () => {
      cy.get(TODO_ITEM)
        .get(TITLE)
        .should('contain', title)
    })
    return this
  }

  assertThatTodoLengthEqual(number) {
    allureStep(`Todo list length equal: ${number}`, () => {
      cy
        .get(TODO_ITEM)
        .should('have.length', number)
    })
    return this
  }
}

const TODO_ITEM = `[${TEST_ATTRIBUTE}="todoItem"]`
const CHECKBOX = `[${TEST_ATTRIBUTE}="checkboxTodo"]`
const DATE = `[${TEST_ATTRIBUTE}="dateTodo"]`
const TITLE = `[${TEST_ATTRIBUTE}="titleTodo"]`
const EDIT_BUTTON = `[${TEST_ATTRIBUTE}="editTodoBtn"]`
const EDIT_TITLE_INPUT = `[${TEST_ATTRIBUTE}="editTitleInput"]`
const SAVE_BUTTON = `[${TEST_ATTRIBUTE}="saveTodoBtn"]`
const DELETE_BUTTON = `[${TEST_ATTRIBUTE}="deleteTodoBtn"]`
