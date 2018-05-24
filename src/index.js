const Alexa = require('ask-sdk');

// Handlers
const BeginStandup = require('./handlers/BeginStandup');
const CompleteStandupHandler = require('./handlers/CompleteStandup');
const ReportHandler = require('./handlers/Report');
const SessionEndedRequest = require('./handlers/SessionEndedRequest');
const WhoHandler = require('./handlers/WhoHandler');


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    BeginStandup,
    CompleteStandupHandler,
    ReportHandler,
    SessionEndedRequest,
    WhoHandler
  )
  .lambda();