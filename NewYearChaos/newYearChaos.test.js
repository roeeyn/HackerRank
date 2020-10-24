const main = require("./index.js");

describe.each([
  [[2, 1, 5, 3, 4], 3],
  [[2, 5, 1, 3, 4], "Too chaotic"],
  [[5, 1, 2, 3, 7, 8, 6, 4], "Too chaotic"],
  [[1, 2, 5, 3, 7, 8, 6, 4], 7],
  [[1, 2, 5, 3, 4, 7, 8, 6], 4],
])("Testing New Years Chaos arrays (%p)", (queue, expected) => {
  it(`Should return ${expected}`, () => {
    expect(main(queue)).toEqual(expected);
  });
});
