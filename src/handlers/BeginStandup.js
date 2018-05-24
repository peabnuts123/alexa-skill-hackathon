const { hasType } = require('../util/handlerUtils');
const sessionState = require('../util/sessionState');
const prompt = require('../util/prompt');


module.exports = {
  /* 
    When:
      Launch Request
   */
  canHandle: (handlerInput) => hasType(handlerInput, 'LaunchRequest'),
  handle(handlerInput) {
    /* 
      Method:
        set current state to 'who'
        "Standup has begun. Who is first?"
     */

    sessionState.setState(handlerInput, 'who');

    return prompt(handlerInput, "Alright. Who is first?");
  },
};