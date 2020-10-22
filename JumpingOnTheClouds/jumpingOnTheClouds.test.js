const main = require("./index.js");

describe.each`
  cloudsCount | clouds                   | expected
  ${7}        | ${[0, 0, 1, 0, 0, 1, 0]} | ${4}
  ${6}        | ${[0, 0, 0, 1, 0, 0]}    | ${3}
`("Testing $clouds", ({ cloudsCount, clouds, expected }) => {
  it(`Should return ${expected}`, () => {
    expect(main(cloudsCount, clouds)).toEqual(expected);
  });
});
