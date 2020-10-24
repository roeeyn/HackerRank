module.exports = queue => {
  const checkQueue = queue =>
    queue.reduce(
      (carry, el, idx, originalQ) =>
        idx === originalQ.length - 1
          ? carry && true
          : carry && originalQ[idx + 1] === el + 1,
      true
    );

  try {
    const [semiQueue, initialBribeCounts] = queue.reduce(
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
      [[...queue], 0, {}] // [newQueue, bribeCounts, bribedNumbers]
    );

    const reversedQueue = semiQueue.reverse();
    const [newReversedQueue, reversedBribeCounts] = reversedQueue.reduce(
      (carry, element, idx) => {
        if (idx === queue.length - 1) return carry;
        const [newQueue, bribeCounts] = carry;
        const [leftEl, rightEl] = newQueue.slice(idx, idx + 2);
        if (leftEl < rightEl) {
          newQueue[idx] = rightEl;
          newQueue[idx + 1] = leftEl;
          return [[...newQueue], bribeCounts + 1];
        }
        return carry;
      },
      [[...reversedQueue], 0]
    ); // [newQueue, bribeCounts]

    const [newReversedQueue2, reversedBribeCounts2] = newReversedQueue.reduce(
      (carry, element, idx) => {
        if (idx === queue.length - 1) return carry;
        const [newQueue, bribeCounts] = carry;
        const [leftEl, rightEl] = newQueue.slice(idx, idx + 2);
        if (leftEl < rightEl) {
          newQueue[idx] = rightEl;
          newQueue[idx + 1] = leftEl;
          return [[...newQueue], bribeCounts + 1];
        }
        return carry;
      },
      [[...newReversedQueue], 0]
    ); // [newQueue, bribeCounts]

    const result =
      reversedBribeCounts2 + reversedBribeCounts + initialBribeCounts;
    return result;
  } catch (e) {
    return e.message;
  }
};

// console.log(7, module.exports([1, 2, 5, 3, 7, 8, 6, 4]));
// console.log(checkQueue([1, 2, 3, 4]));
// console.log(checkQueue([1, 3, 2, 4]));
