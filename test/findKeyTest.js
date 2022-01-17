const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  Mclaren: { model: 'P1'},
  Ferrari: { model: 488},
  Lamborghini: { model: 'Huracan'},
  Koenigsegg: { model: 'Jasko'}
}, x => x.model === 'Jasko');

assertEqual(result1, 'noma');
assertEqual(result2, 'Koenigsegg');