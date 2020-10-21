const main = require("./index.js");

describe("Sock Merchant Test", () => {
  it("should work", () => {
    expect(main(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toEqual(3);
    expect(main(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toEqual(4);
  });
});
