module.exports = (queries, n) => {
  const [, maxValue] = queries.reduce(
    (carry, query, idx) => {
      const [newArray, maxValue] = carry;
      const [initIdx, endIdx, kValue] = query;

      let tempMax = maxValue;
      for (let i = initIdx; i <= endIdx; i++) {
        newArray[i - 1] = newArray[i - 1] + kValue;
        if (newArray[i - 1] > tempMax) tempMax = newArray[i - 1];
      }

      return [newArray, tempMax];
    },
    [[...Array.from({ length: n }, () => 0)], 0]
  );
  return maxValue;
};

// let cosa = module.exports(
//   [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
//   ],
//   10
// );
// console.log(cosa);
