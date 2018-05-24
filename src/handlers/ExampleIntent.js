const { isIntentWithName } = require('../util/handlerUtils');

module.exports = {
  canHandle: (handlerInput) => isIntentWithName(handlerInput, 'ExampleIntent'),
  handle(handlerInput) {
    const speechText = 'This is an example intent.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Example', speechText)
      .getResponse();
  }
};