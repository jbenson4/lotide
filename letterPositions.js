const letterPositions = function(string) {
  const results = {};
  
  for (const index in string) {
    if (results[string[index]]) {
      results[string[index]].push(Number(index));
    } else results[string[index]] = [Number(index)];
  }
  return results;
};

module.exports = letterPositions;