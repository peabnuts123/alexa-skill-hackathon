const { hasType, isIntentWithName } = require('../util/handlerUtils');
const { isCurrentState, setState } = require('../util/sessionState');

module.exports = {
  canHandle: (handlerInput) => {
    /* @TODO
      When:
          type = launchRequest
          - state = ready
            intent name = 'ReportIntent'
          - state = yesterday
            intent name = 'ReportIntent' || Amazon.NoIntent
            - state = today
            intent name = 'ReportIntent' || Amazon.NoIntent
     */
    (hasType(handlerInput, 'LaunchRequest')) ||
      (isCurrentState(handlerInput, 'ready') && isIntentWithName(handlerInput, 'ReportIntent')) ||
      (isCurrentState(handlerInput, 'yesterday') && (isIntentWithName(handlerInput, 'ReportIntent') || isIntentWithName('AMAZON.NoIntent'))) ||
      (isCurrentState(handlerInput, 'today') && (isIntentWithName(handlerInput, 'ReportIntent') || isIntentWithName(handlerInput, 'AMAZON.NoIntent')));
  },
  handle(handlerInput) {
    /* 
      @TODO 
      Method:
        - type = LaunchRequest
          state = yesterday
          "Great. So, $person, what did you do yesterday?"
        - state = ready
          set state = yesterday
          "Okay, did you do anything else?"
        - state = yesterday
          if (!continuing) => 
            state = today
            "Great. What did you do today?"
          else
            "Okay, did you do anything else?"
        - state = today
          if (!continuing) => 
            state = ready
            "Great. Anybody else?"
          else
            "Okay, did you do anything else?"
     */
    if (hasType(handlerInput, 'LaunchRequest')) {
      /* Launch request. Person has been nominated to start speaking */
      // @TODO get person's name

      setState(handlerInput, 'yesterday');

      return handlerInput.responseBuilder
        .speak("Great. So, @PERSON, what did you work on yesterday?")
        .withSimpleCard(' @TODO', " @TODO")
        .getResponse();

    } else if (isCurrentState(handlerInput, 'ready')) {
      /* Ready and we've begun to report. Somebody has started their turn to talk about yesterday */
      // @TODO read their data and set state

      setState(handlerInput, 'yesterday');

      return handlerInput.responseBuilder
        .speak("Okay. Anything else for yesterday?")
        .withSimpleCard(' @TODO', " @TODO")
        .getResponse();
    } else if (isCurrentState(handlerInput, 'yesterday')) {
      let isFinished = isIntentWithName(handlerInput, "AMAZON.NoIntent");
      if (isFinished) {
        // Finished talking about yesterday
        setState(handlerInput, 'today');

        return handlerInput.responseBuilder
          .speak("Okay. What are you working on today?")
          .withSimpleCard(' @TODO', " @TODO")
          .getResponse();
      } else {
        // Still talking about yesterday
        return handlerInput.responseBuilder
          .speak("Okay. Anything else for yesterday?")
          .withSimpleCard(' @TODO', " @TODO")
          .getResponse();
      }
    } else if (isCurrentState(handlerInput, 'today')) {
      let isFinished = isIntentWithName(handlerInput, "AMAZON.NoIntent");
      if (isFinished) {
        // Finished talking about today
        setState(handlerInput, 'ready');

        return handlerInput.responseBuilder
          .speak("Cool. Who's next?")
          .withSimpleCard(' @TODO', " @TODO")
          .getResponse();
      } else {
        // Still talking about today
        return handlerInput.responseBuilder
          .speak("Okay. Anything else for today?")
          .withSimpleCard(' @TODO', " @TODO")
          .getResponse();
      }
    } else {
      throw new Error("Invalid state.");
    }
  },
};