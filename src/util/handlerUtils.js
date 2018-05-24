module.exports = {
  hasType(handlerInput, intentType){
    return handlerInput.requestEnvelope.request.type === intentType;
  },
  hasName(handlerInput, intentName) {
    return handlerInput.requestEnvelope.request.intent.name === intentName;
  },
  isIntentWithName(handlerInput, intentName) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === intentName;
  },
};