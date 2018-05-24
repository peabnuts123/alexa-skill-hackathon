module.exports = function prompt(handlerInput, message, reprompt = true) {
  let response = handlerInput.responseBuilder
    .speak(message);

  if (reprompt) {
    response = response.reprompt();
  }

  return response
    .withSimpleCard(' @TODO', message)
    .getResponse();
}