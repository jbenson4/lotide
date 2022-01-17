const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length < 1) {
    return undefined;
  }
  let result = array.shift();
  return result;
};

module.exports = head;