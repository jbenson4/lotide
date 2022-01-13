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

const letterPositions = function(string) {
  const results = {};
  
  for (const index in string) {
    // results[string[index]] = [index];
    if (results[string[index]]) {
      results[string[index]].push(index);
    } else results[string[index]] = [index];
  }
  console.log(results);
  return results;
};

letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);