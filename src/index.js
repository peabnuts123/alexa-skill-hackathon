const Alexa = require('ask-sdk');

// Handlers
const CompleteStandupHandler = require('./handlers/CompleteStandup');
const ReportHandler = require('./handlers/Report');


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    CompleteStandupHandler,
    ReportHandler,
)
  .lambda();