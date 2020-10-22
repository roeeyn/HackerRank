const main = require("./index.js");

describe.each`
  times            | str      | expected
  ${10}            | ${"aba"} | ${7}
  ${1000000000000} | ${"a"}   | ${1000000000000}
`("Testing times: $times", ({ times, str, expected }) => {
  it(`Should return ${expected}`, () => {
    expect(main(str, times)).toEqual(expected);
  });
});
