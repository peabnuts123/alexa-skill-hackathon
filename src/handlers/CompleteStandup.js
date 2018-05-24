const { isIntentWithName } = require('../util/handlerUtils');
const { isCurrentState } = require('../util/sessionState');

module.exports = {
  /* 
    When:
     state = ready && intent = 'CompleteStandupIntent'
   */
  canHandle: (handlerInput) => {
    isCurrentState(handlerInput, 'ready') && isIntentWithName('CompleteStandupIntent');
  },
  handle(handlerInput) {
    /* 
      Method:
        "Cool i'll send that"
        Send that.
        exit session.
     */

    // @TODO;
    
    return handlerInput.responseBuilder
      .speak("@TODO standup over. Thanks.")

      // @TODO new Date() will not be pretty lol
      .withSimpleCard('Standup', "Standup is complete at " + new Date() + " .")
      .getResponse();
  },
};