const main = require("./index.js");

describe.each([
  [[1, 2, 3, 4, 5], 4, [5, 1, 2, 3, 4]],
  [
    [
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
    ],
    10,
    [
      77,
      97,
      58,
      1,
      86,
      58,
      26,
      10,
      86,
      51,
      41,
      73,
      89,
      7,
      10,
      1,
      59,
      58,
      84,
      77,
    ],
  ],
  [
    [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97],
    13,
    [87, 97, 33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60],
  ],
])("Testing sandclock arrays (%p, %i)", (originalArray, rotation, expected) => {
  it(`Should return ${expected}`, () => {
    expect(main(originalArray, rotation)).toEqual(expected);
  });
});
