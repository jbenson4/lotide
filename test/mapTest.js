const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

const results = map(words, word => word[0]);

assertArraysEqual(results, ['g', 'c', 't', 'm', 't']);