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
  const countResults = {};
  for (const item of string) {
    if (item === ' ') {
      continue;
    } else if (countResults[item]) {
      countResults[item] += 1;
    } else countResults[item] = 1;
  }
  console.log(countResults);
  return countResults;
};

countLetters("lighthouse in the house");
assertEqual(countLetters("lighthouse in the house").h, 4);