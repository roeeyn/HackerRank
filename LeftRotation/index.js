module.exports = (originalArray, rotation) => {
  const firstPart = originalArray.slice(rotation);
  const lastPart = originalArray.slice(0, rotation);
  return [...firstPart, ...lastPart];
};
