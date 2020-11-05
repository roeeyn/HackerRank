module.exports = originalQueue => {
  const swapInPlace = (arr, idx) => {
    let newIndex = arr[idx] - 1;
    let tmp = arr[newIndex];
    arr[newIndex] = arr[idx];
    arr[idx] = tmp;
  };

  const inPlace = (arr, index) => arr[index] == index + 1;

  let swaps = 0;

  for (let current = 0; current < originalQueue.length; ) {
    if (!inPlace(originalQueue, current)) {
      ++swaps;
      console.log(originalQueue);
      swapInPlace(originalQueue, current);
      console.log(originalQueue);
    } else {
      ++current;
    }
  }

  return swaps;
};
