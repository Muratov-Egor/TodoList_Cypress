import {allureStep} from '../utils/AllureHelper'
import {User} from '../models'

Cypress.Commands.add('openPage', (title, url) => {
  allureStep(title, () => {
    cy.visit(url)
  })
})

Cypress.Commands.add('login', () => {
  cy.request(
    'POST',
    '/api/auth/login',
    {...new User()}
  ).then((res) => {
    window.localStorage.setItem('userData', JSON.stringify({
      token: res.body.token,
      userId: res.body.userId,
    }))
  })
})

Cypress.Commands.add('logout', () => cy.clearLocalStorage('userData'))

Cypress.Commands.add('deleteUser', (userId) => {
  cy.request(
    'DELETE',
    `/api/profile/delete/${userId}`
  )
})

Cypress.Commands.add('deleteAllTask', () => {
  cy.request(
    'POST',
    '/api/auth/login',
    {...new User()}
  ).then((res) => {
    cy.request({
      method: 'DELETE',
      url: '/api/todolist/delete',
      auth: {
        'bearer': res.body.token
      }
    })
  })
})

Cypress.Commands.add('addTasks', (todos) => {
  cy.request(
    'POST',
    '/api/auth/login',
    {...new User()}
  ).then(res => {
    todos.map(todo => {
      cy.request({
        method: 'POST',
        url: '/api/todolist/add',
        auth: {
          'bearer': res.body.token
        },
        body: {title: todo.title}
      })
    })
  })
})

