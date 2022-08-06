import {TEST_ATTRIBUTE} from '../utils/TestAttribute'
import {allureStep} from '../utils/AllureHelper'

export class MessageSnackBar {
  messageBlockIsNotExist() {
   allureStep('Message block is not display', () => {
     cy
       .get(BLOCK_MESSAGE)
       .should('not.exist')
   })
   return this
  }

  messageBlockHasText(text) {
    allureStep(`Message block has text: ${text}`, () => {
      cy
        .get(TEXT_MESSAGE)
        .should('include.text', text)
    })
    return this
  }

  clickButtonCloseMessage() {
    allureStep('Click button close message', () => {
      cy
        .get(BUTTON_HIDE_BLOCK_MESSAGE)
        .realClick()
    })
    return this
  }
}

const BLOCK_MESSAGE = `[${TEST_ATTRIBUTE}="message"]`
const TEXT_MESSAGE = `[${TEST_ATTRIBUTE}="message"] span`
const BUTTON_HIDE_BLOCK_MESSAGE = `[${TEST_ATTRIBUTE}="btnCloseMessage"]`