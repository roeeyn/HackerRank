module.exports = (num, sArray) => {
  const [, pairs] = sArray.reduce(
    (carry, element) => {
      const [possiblePairs, pairs] = carry;
      const isPossiblePair = possiblePairs.includes(element);
      return [
        isPossiblePair
          ? possiblePairs.filter(el => el != element)
          : [...possiblePairs, element],
        pairs + (isPossiblePair ? 1 : 0),
      ];
    },
    [[], 0] // [possiblePairs, pairs]
  );
  return pairs;
};
