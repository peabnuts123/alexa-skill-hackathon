module.exports = function intentWithName(intentName) {
  return (handlerInput) => {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === intentName
  }
};