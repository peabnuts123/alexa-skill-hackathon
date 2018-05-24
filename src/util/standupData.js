const sessionAttributes = require('./sessionAttributes');

function updatePerson(handlerInput, person, summaryKey, summary) {
  let standupData = sessionAttributes.get(handlerInput, 'standup-data');

  if (!standupData) {
    standupData = {};
  }

  // Default person data if needed
  if (!standupData[person]) {
    standupData[person] = {}
  }

  // Default data for `summaryKey` if needed
  if (standupData[person][summaryKey]) {
    standupData[person][summaryKey] = '';
  }

  // Append summary
  standupData[person][summaryKey] += ' ' + summary;

  // Store back in sessionAttributes
  sessionAttributes.update(handlerInput, {
    'standup-data': standupData,
  });
}

function getAll(handlerInput) {
  return sessionAttributes.get(handlerInput, 'standup-data');
}

module.exports = {
  updatePerson,
  getAll,
};