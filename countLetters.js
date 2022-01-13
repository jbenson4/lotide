const assertEqual = function(actual, expected) {
  const pass = '✅';
  const fail = '🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const chars = string.split(' ').join('');
  const countResults = {};

  for (let char of chars) {
    if (countResults[char]) {
      countResults[char] += 1;
    } else {
      countResults[char] = 1;
    }
  }
  console.log(countResults);
  return countResults;
};

countLetters("lighthouse in the house");
assertEqual(countLetters("lighthouse in the house").h, 4);