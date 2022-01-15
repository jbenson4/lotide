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

const eqObjects = function(object1, object2) {
  const objOneKeys = Object.keys(object1);
  const objTwoKeys = Object.keys(object2);
// Step 1
  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  };
  // Step 2
  for (let value of objOneKeys) {
    if (Array.isArray(object1[value])) {
      if (!eqArrays(object1[value],object2[value])) {
      return false;
      } 
    } else if (object1[value] !== object2[value]) {
      return false;
  } 
    // console.log('objOneKeys:', objOneKeys);
    console.log('eqArrays(object1[value],object2[value])', eqArrays(object1[value],object2[value]));
    console.log('object1[value]', object1[value]);
    console.log('object2[value]: ', object2[value]);
    if (object1[value] !== object2[value]) {
      return false;
    };
    // Step 3 & 4
    // if (Array.isArray(object1[value])) {
      // if (!eqArrays(object1[value],object2[value])) {
      // return false;
      // }
    // }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// 
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// 
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
