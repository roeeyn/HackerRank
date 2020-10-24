module.exports = originalQueue => {
  const checkQueue = queue =>
    queue.reduce(
      (carry, el, idx, originalQ) =>
        idx === originalQ.length - 1
          ? carry && true
          : carry && originalQ[idx + 1] === el + 1,
      true
    );

  try {
    const getBribesSum = (queue, bribeCount = 0, bribedNumbers = {}) => {
      const [newQueue, newBribeCounts, newBribedNumbers] = queue.reduce(
        (carry, element, idx) => {
          if (idx === queue.length - 1) return carry;

          const [newQueue, bribeCounts, bribedNumbers] = carry;
          const [leftEl, rightEl] = newQueue.slice(idx, idx + 2);
          if (leftEl > rightEl) {
            newQueue[idx] = rightEl;
            newQueue[idx + 1] = leftEl;
            const prevBribeCount = bribedNumbers[leftEl] || 0;
            if (prevBribeCount === 2) throw new Error("Too chaotic");
            bribedNumbers[leftEl] = prevBribeCount + 1;
            return [[...newQueue], bribeCounts + 1, bribedNumbers];
          }
          return carry;
        },
        [[...queue], bribeCount, bribedNumbers] // [newQueue, bribeCounts, bribedNumbers]
      );

      return checkQueue(newQueue)
        ? newBribeCounts
        : getBribesSum([...newQueue], newBribeCounts, newBribedNumbers);
    };

    return getBribesSum(originalQueue);
  } catch (e) {
    return e.message;
  }
};
