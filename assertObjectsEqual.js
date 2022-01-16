const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let isTrue = true;
  for (let i of array1) {
    if (array1[i] !== array2[i]) {
      isTrue = false;
    }
  }
  return isTrue;
};

const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let value of objOneKeys) {
    if (Array.isArray(object1[value])) {
      if (!eqArrays(object1[value],object2[value])) {
        return false;
      }
    } else if (object1[value] !== object2[value]) {
      return false;
    }
  }
  return true;
};

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
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);