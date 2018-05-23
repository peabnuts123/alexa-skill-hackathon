const Alexa = require('ask-sdk');

// Handlers
const LaunchRequestHandler = require('./handlers/LaunchRequest');
const HelloWorldIntentHandler = require('./handlers/HelloWorldIntent');
const SessionEndedRequestHandler = require('./handlers/SessionEndedRequest');


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    SessionEndedRequestHandler,
)
  .lambda();