const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);