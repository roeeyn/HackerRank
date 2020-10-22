const main = require("./index.js");

describe.each([
  [8, "UDDDUDUU", 1],
  [12, "DDUUDDUDUUUD", 2],
])("Counting Valleys (%i, %s)", (stepsCount, steps, expected) => {
  it(`Should return ${expected}`, () => {
    expect(main(stepsCount, steps)).toEqual(expected);
  });
});
