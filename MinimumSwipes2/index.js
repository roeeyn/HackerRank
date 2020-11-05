module.exports = arr => {
  const [, swapsNumber] = arr.reduce(
    (carry, el, idx) => {
      const [newQueue, swapNumber] = carry;
      const expectedEl = idx + 1;

      if (newQueue[idx] === expectedEl) return carry;

      const rightIdx = newQueue.indexOf(expectedEl, idx + 1);

      newQueue[rightIdx] = newQueue[idx];
      newQueue[idx] = expectedEl;

      return [newQueue, swapNumber + 1];
    },

    [[...arr], 0] // [queue, swapsNumber]
  );
  return swapsNumber;
};
