const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const pass = '✅';
  const fail = '🛑';
  let isTrue = true;

  if (!eqArrays(array1, array2)) {
    isTrue = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isTrue = false;
    }
  }
  if (isTrue === true) {
    console.log(`${pass} Assertion Passed: [${array1}] === [${array2}]`);
  }
  if (isTrue === false) {
    console.log(`${fail} Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

module.exports = assertArraysEqual;