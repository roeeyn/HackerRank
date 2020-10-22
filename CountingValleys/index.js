module.exports = (stepsCount, steps) => {
  return steps.split("").reduce(
    (carry, step) => {
      const [lastStepSlope, valleyCounts] = carry;
      const stepValue = step === "U" ? 1 : -1;
      const newSlope = lastStepSlope + stepValue;
      return [
        newSlope,
        valleyCounts + (newSlope === 0 && lastStepSlope < 0 ? 1 : 0),
      ];
    },
    [0, 0] // [lastStepSlope, valleyCounts]
  )[1];
};
