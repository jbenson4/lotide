const assertEqual = function(actual, expected) {
  const pass = '✅';
  const fail = '🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  if (array.length < 1) {
    return undefined;
  }
  let result = array.shift();
  return result;
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");