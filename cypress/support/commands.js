import {allureStep} from '../utils/AllureHelper'

Cypress.Commands.add('openPage', (title, url) => {
  allureStep(title, () => {
    cy.visit(url)
  })
})