const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

const words = ["hello", "world", "lighthouse"];

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);