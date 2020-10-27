const main = require("./index.js");

describe.each([
  [[4, 3, 1, 2], 3],
  [[2, 3, 4, 1, 5], 3],
  [[1, 3, 5, 2, 4, 6, 7], 3],
])("Testing minimum swipes (%p)", (queue, expected) => {
  it(`Should return ${expected}`, () => {
    expect(main(queue)).toEqual(expected);
  });
});
