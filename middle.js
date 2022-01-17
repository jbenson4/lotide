const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);
  const result = [];

  if (array.length >= 2) {
    if (array.length % 2 !== 0 && array.length > 2) {
      result.push(array[midIndex]);
    }
    if (array.length % 2 === 0 && array.length > 2) {
      result.push(array[midIndex - 1], array[midIndex]);
    }
  } return result;
};

module.exports = middle;