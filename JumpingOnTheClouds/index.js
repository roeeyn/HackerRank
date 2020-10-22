const recursiveFn = (clouds, jumpsCount = 0) => {
  const nextJumpIdx = clouds[2] === 0 ? 2 : 1;
  const remainingClouds = clouds.filter((el, idx) => idx >= nextJumpIdx);

  return remainingClouds.length === 0
    ? jumpsCount
    : recursiveFn(remainingClouds, jumpsCount + 1);
};

module.exports = (cloudsCount, clouds) => recursiveFn(clouds);
