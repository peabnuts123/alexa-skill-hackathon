const { isIntentWithName } = require('../util/handlerUtils');
const { isCurrentState, setState } = require('../util/sessionState');
const sessionAttributes = require('../util/sessionAttributes');
const prompt = require('../util/prompt');
const slots = require('../util/slots');
const standupData = require('../util/standupData');

module.exports = {
  canHandle: (handlerInput) => {
    return (isCurrentState(handlerInput, 'yesterday') && (isIntentWithName(handlerInput, 'ReportIntent') || isIntentWithName('AMAZON.NoIntent'))) ||
      (isCurrentState(handlerInput, 'today') && (isIntentWithName(handlerInput, 'ReportIntent') || isIntentWithName(handlerInput, 'AMAZON.NoIntent')));
  },
  handle(handlerInput) {
    if (isCurrentState(handlerInput, 'yesterday')) {
      // Check if the user said "no"
      let isFinished = isIntentWithName(handlerInput, "AMAZON.NoIntent");
      if (isFinished) {
        // Finished talking about yesterday
        setState(handlerInput, 'today');

        return prompt(handlerInput, "Okay. What are you working on today?");
      } else {
        // Still talking about yesterday

        // Get current person from our session attributes
        let person = sessionAttributes.get(handlerInput, 'currentPerson');
        // Get the person's summary for yesterday from their response
        let summary = slots.get(handlerInput, 'Summary');
        // Update person's summary for yesterday
        standupData.updatePerson(handlerInput, person, summary, 'yesterday');

        return prompt(handlerInput, "Okay. Anything else for yesterday?");
      }
    } else if (isCurrentState(handlerInput, 'today')) {
      // Check if the user said "no"
      let isFinished = isIntentWithName(handlerInput, "AMAZON.NoIntent");
      if (isFinished) {
        // Finished talking about today
        setState(handlerInput, 'who');

        return prompt(handlerInput, "Cool. Who's next?");
      } else {
        // Still talking about today

        // Get current person from our session attributes
        let person = sessionAttributes.get(handlerInput, 'currentPerson');
        // Get the person's summary for today from their response
        let summary = slots.get(handlerInput, 'Summary');
        // Update person's summary for today
        standupData.updatePerson(handlerInput, person, summary, 'today');

        return prompt(handlerInput, "Okay. Anything else for today?");
      }
    } else {
      throw new Error("Invalid state.");
    }
  },
};