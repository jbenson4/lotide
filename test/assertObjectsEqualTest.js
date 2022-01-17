const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);