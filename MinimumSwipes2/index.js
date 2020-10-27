module.exports = originalQueue => {
  const [, swapCounts] = originalQueue.reduce(
    (carry, element, idx) => {
      const [newQueue, swapCounts] = carry;
      if (newQueue[idx] === idx + 1) return [[...newQueue], swapCounts];

      console.log("cosa", newQueue);
      const smallerElIdx = newQueue.indexOf(idx + 1);
      const smallerEl = newQueue[smallerElIdx];
      const biggerEl = newQueue[idx];
      newQueue[idx] = smallerEl;
      newQueue[smallerElIdx] = biggerEl;
      return [[...newQueue], swapCounts + 1];
    },
    [[...originalQueue], 0] // [newQueue, swapCounts]
  );
  return swapCounts;
};
