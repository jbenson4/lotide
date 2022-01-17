const flatten = function(array) {
  console.log(array.flat());
};

flatten([1, 2, [3, 4], 5, [6]]);
/*
const assertArraysEqual = function(array1, array2) {
  const pass = '✅';
  const fail = '🛑';
  if (array1.length !== array2.length) {
    console.log(`${fail} Assertion Failed: [${array1}] !== [${array2}]`);
  }
  let isTrue = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isTrue = false;
    }
  }
  if (isTrue === true) {
    console.log(`${pass} Assertion Passed: [${array1}] === [${array2}]`);
  }
  if (isTrue === false) {
    // console.log(fail + ' Assertion Failed: ' + array1 + ' !== ' + array2)
    console.log(`${fail} Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const assertEqual = function(actual, expected) {
  const pass = '✅';
  const fail = '🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let isTrue = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      isTrue = false;
    }
  }
  return isTrue;
};
*/

function flatten(arr) {
  const result = []

  arr.forEach(function(i) {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]