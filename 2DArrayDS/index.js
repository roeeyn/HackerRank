module.exports = matrix => {
  let max = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const topSum = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2];
      const middleSum = matrix[i + 1][j + 1];
      const bottomSum =
        matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2];
      const total = topSum + middleSum + bottomSum;
      if (i === 0 && j === 0) max = total;
      if (total > max) max = total;
    }
  }
  return max;
};
