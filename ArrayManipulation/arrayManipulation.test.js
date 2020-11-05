const main = require("./index.js");

describe.each([
  [
    [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ],
    5,
    200,
  ],
  [
    [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ],
    10,
    10,
  ],
  [
    [
      [2, 6, 8],
      [3, 5, 7],
      [1, 8, 1],
      [5, 9, 15],
    ],
    10,
    31,
  ],
])("Testing Array Manipulation (%p)", (queue, n, expected) => {
  it(`Should return ${expected}`, () => {
    expect(main(queue, n)).toEqual(expected);
  });
});
