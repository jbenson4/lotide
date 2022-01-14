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

const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  } return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);