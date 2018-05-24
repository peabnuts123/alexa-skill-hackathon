function getAll(handlerInput) {
  return handlerInput.attributesManager.getSessionAttributes();
}

function get(handlerInput, key) {
  return getAll(handlerInput)[key];
}

function update(handlerInput, hash) {
  let attributes = getAll(handlerInput);

  Object.assign(attributes, hash);

  handlerInput.attributesManager.setSessionAttributes(attributes);
}

module.exports = {
  get,
  getAll,
  update,
};