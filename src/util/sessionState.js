const sessionAttributes = require('./sessionAttributes');

function currentState(handlerInput) {
  return sessionAttributes.get(handlerInput, 'state');
}

function isCurrentState(handlerInput, state) {
  return currentState(handlerInput) === state.toLowerCase();
}

function setState(handlerInput, newState) {
  sessionAttributes.update(handlerInput, {
    state: newState.toLowerCase(),
  });
}

module.exports = {
  currentState,
  isCurrentState,
  setState,
};