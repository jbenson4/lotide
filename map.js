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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results = map(words, word => word[0]);
console.log(results);

assertArraysEqual(results, ['g', 'c', 't', 'm', 't']);