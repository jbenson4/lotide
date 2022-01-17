const countLetters = function(string) {
  const countResults = {};
  for (const item of string) {
    if (item === ' ') {
      continue;
    } else if (countResults[item]) {
      countResults[item] += 1;
    } else countResults[item] = 1;
  }
  console.log(countResults);
  return countResults;
};

module.exports = countLetters;