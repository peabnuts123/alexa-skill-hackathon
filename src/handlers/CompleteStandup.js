const { isIntentWithName } = require('../util/handlerUtils');
const { isCurrentState } = require('../util/sessionState');
const standupData = require('../util/standupData');

module.exports = {
  canHandle: (handlerInput) => {
    return isCurrentState(handlerInput, 'who') && isIntentWithName(handlerInput, 'CompleteStandupIntent');
  },
  handle(handlerInput) {
    // @TODO actually send to somewhere
    console.log("Finished standup. Standup Data:")
    console.log(standupData.getAll());

    return handlerInput.responseBuilder
      .speak("Cool, I'll email a summary of that to you.")

      // @TODO new Date() will not be pretty lol
      .withSimpleCard('Standup', "Standup is complete at " + new Date() + " .")
      .getResponse();
  },
};