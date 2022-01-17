const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const pass = '✅';
  const fail = '🛑';
  let isTrue = true;

  if (!eqObjects(actual, expected)) {
    isTrue = false;
  }

  if (isTrue === true) {
    console.log(`${pass} Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  }
  if (isTrue === false) {
    console.log(`${fail} Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

module.exports = assertObjectsEqual;