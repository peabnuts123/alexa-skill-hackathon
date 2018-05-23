
// The LaunchRequest event occurs when the skill is invoked without a specific intent.

module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'This is a skill template, it needs some work.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Skill Template', speechText)
      .getResponse();
  }
};
