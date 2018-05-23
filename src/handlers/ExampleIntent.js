const intentWithName = require('../util/intentWithName');

/* @TODO remove / refactor this file, it is just an example. */

module.exports = {
  canHandle: intentWithName('ExampleIntent'),
  handle(handlerInput) {
    const speechText = 'This is an example intent.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Example', speechText)
      .getResponse();
  }
};