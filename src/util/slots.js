function get(handlerInput, slotName) {
  return handlerInput.requestEnvelope.request.intent.slots[slotName].value;
}

module.exports = {
  get,
}