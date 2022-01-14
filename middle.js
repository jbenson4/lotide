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

const assertArraysEqual = function(array1, array2) {
  const pass = '✅';
  const fail = '🛑';
  let isTrue = true;

  if (!eqArrays(array1, array2)) isTrue = false;

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

const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);
  const result = [];

  if (array.length >= 2) {
    if (array.length % 2 !== 0 && array.length > 2) {
      result.push(array[midIndex]);
    }
    if (array.length % 2 === 0 && array.length > 2) {
      result.push(array[midIndex - 1], array[midIndex]);
    }
  } return result;
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);