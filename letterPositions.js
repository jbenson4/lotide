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

const letterPositions = function(string) {
  const results = {};
  
  for (const index in string) {
    if (results[string[index]]) {
      results[string[index]].push(Number(index));
    } else results[string[index]] = [Number(index)];
  }
  return results;
};

console.log(letterPositions("lighthouse in the house").h);
console.log(letterPositions("lighthouse in the house").i);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);