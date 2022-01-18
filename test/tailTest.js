const assert = require('chai').assert;
const tail = require('../tail');

describe('Tail Tests', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });
})