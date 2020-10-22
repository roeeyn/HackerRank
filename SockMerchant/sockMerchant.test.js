const main = require("./index.js");

describe.each`
  socksCount | socks                                   | expected
  ${9}       | ${[10, 20, 20, 10, 10, 30, 50, 10, 20]} | ${3}
  ${10}      | ${[1, 1, 3, 1, 2, 1, 3, 3, 3, 3]}       | ${4}
`("Testing $socksCount, $socks", ({ socksCount, socks, expected }) => {
  it(`should return ${expected}`, () => {
    expect(main(socksCount, socks)).toEqual(expected);
  });
});
