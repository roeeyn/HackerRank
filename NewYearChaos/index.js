module.exports = originalQueue => {
  let ans = 0;
  for (let i = originalQueue.length - 1; i >= 0; i--) {
    if (originalQueue[i] - 2 > i + 1) {
      return "Too chaotic";
    }
    for (let j = Math.max(0, originalQueue[i] - 2); j < i; j++) {
      if (originalQueue[j] > originalQueue[i]) ans++;
    }
  }
  return ans;
};
