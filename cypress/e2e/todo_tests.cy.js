import {TodoPage} from '../pages/TodoPage/TodoPage'
import {TodoList} from '../pages/TodoPage/TodoList'
import {allureTestInfo} from '../utils/AllureHelper'

const firstTask = {title: 'First task'}
const secondTask = {title: 'Second task'}
const deleteTask = {title: 'Delete this task'}
const todos = [
  {title: 'Buy a bread'},
  {title: 'Buy a beer'},
  {title: 'Call mom'},
]

describe('Todo list tests', () => {
  before('Delete all tasks', () => cy.deleteAllTask())
  beforeEach('login', () => {
    allureTestInfo({
      suite: 'Todo Page',
      epic: 'Todo list',
      tags: ['todo', 'regress', 'smoke'],
      owner: 'Egor Muratov'
    })
    cy.login()
  })

  it('Add new task', () => {
    const todoPage = new TodoPage()
    const todoList = new TodoList()

    cy.visit('Open Todo page', '/')

    todoPage
      .assertThatStubIsDisplayed()
      .addNewTask(firstTask.title)
      .assertThatLoaderIsDisplayed()
    todoList
      .assertThatTodoLengthEqual(1)
  })

  it('Delete task by title', () => {
    const todoList = new TodoList()

    cy.addTasks([...todos, deleteTask])
    cy.visit('Open Todo page', '/')

    todoList
      .assertThatTodoLengthEqual(5)
      .deleteTodoItem(deleteTask.title)
      .assertThatTodoListHasNotTask(deleteTask.title)
  })

  it('Edit task', () => {
    const todoList = new TodoList()
    cy.visit('Open Todo page', '/')
    cy.addTasks([secondTask])

    todoList
      .editTodoItem(firstTask.title, secondTask.title)
      .assertThatTodoListHasNotTask(firstTask.title)
      .assertThatTodoListHasTask(secondTask.title)
  })

  afterEach('logout', () => cy.logout())
})