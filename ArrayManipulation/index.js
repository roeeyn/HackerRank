module.exports = (queries, n) => {
  const modifiedArray = queries.reduce(
    (arr, query, idx) => {
      const [a, b, k] = query;
      arr[a] += k;
      arr[b + 1] -= k;
      return arr;
    },
    [...Array.from({ length: n + 2 }, () => 0)]
  );

  const [, result] = modifiedArray.reduce(
    (carry, element, idx) => {
      const [sumArr, maxIntersecSum] = carry;
      if (idx === 0) return carry;
      sumArr[idx] += sumArr[idx - 1];

      return [
        sumArr,
        sumArr[idx] > maxIntersecSum ? sumArr[idx] : maxIntersecSum,
      ];
    },
    [[...modifiedArray], 0]
  );

  return result;
};
