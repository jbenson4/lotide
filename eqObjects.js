const assertEqual = function(actual, expected) {
  const pass = '✅';
  const fail = '🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);

  if (objOneKeys.length !== objTwoKeys.length) return false;

  for (let key in object1) {
    console.log('key:', key);
    if (object1.key !== object2.key) return false;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);