const without = function(array, remove) {
  const trimmedArray = [];
  let match = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (array[i] === remove[j]) {
        match = true;
      }
    }
    if (!match) {
      trimmedArray.push(array[i]);
    }
    match = false;
  }
  return trimmedArray;
};

module.exports = without;