const { hasType } = require('../util/handlerUtils');

// Although you can not return a response with any speech, 
//  card or directives after receiving a SessionEndedRequest, 
//  the SessionEndedRequestHandler is a good place to put your cleanup logic.

module.exports = {
  canHandle: (handlerInput) => hasType(handlerInput, 'SessionEndedRequest'),
  handle(handlerInput) {
    // Any clean-up logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};