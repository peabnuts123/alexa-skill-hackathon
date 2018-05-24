const { isIntentWithName } = require('../util/handlerUtils');
const sessionAttributes = require('../util/sessionAttributes');
const sessionState = require('../util/sessionState');
const slots = require('../util/slots');
const prompt = require('../util/prompt');

module.exports = {
  canHandle: (handlerInput) => isIntentWithName(handlerInput, 'WhoIntent') && sessionState.isCurrentState(handlerInput, 'who'),
  handle(handlerInput) {
    /* 
      Get person's name, store in sessionAttributes,
      Set to yesterday
      Ask what they worked on yesterday
     */

    // Store current person in Session Attributes
    let person = slots.get(handlerInput, 'Name');
    sessionAttributes.update(handlerInput, {
      currentPerson: person,
    });

    // Set state to yesterday
    sessionState.setState(handlerInput, 'yesterday');

    return prompt(handlerInput, `okay, ${person}, tell us what you worked on yesterday`);
  },
}