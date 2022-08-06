/**
 * @param id = ID Allure TestOps
 * */
export function linkAllureId(id) {
  cy.allure().testID(id)
}

/**
 * @param title = Description of the step in Allure TestOps
 * @param func() = Function that performs the described step
 * */
export function allureStep(title, func) {
  cy.allure().startStep(title)
  func()
  cy.allure().endStep()
}

/**
 * @param suite = Suite in Allure TestOps
 * @param epic = Epic in Allure TestOps
 * @param story = Story in Allure TestOps
 * @param feature = Feature in Allure TestOps
 * @param tags = Tag Array in Allure TestOps
 * @param owner = Test owner in Allure TestOps
 * */
export function allureTestInfo({suite, epic, story, feature, tags, owner}) {
  suite ? cy.allure().suite(suite) : null
  epic ? cy.allure().epic(epic) : null
  story ? cy.allure().story(story) : null
  feature ? cy.allure().feature(feature) : null
  tags ? cy.allure().tag(...tags) : null
  owner ? cy.allure().owner(owner) : null
}