const without = function(array, remove) {
  const trimmedArray = [];
  let match = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (array[i] === remove[j]) {
        match = true;
      }
    }
    if (!match) {
      trimmedArray.push(array[i]);
    }
    match = false;
  }
  console.log(trimmedArray);
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);