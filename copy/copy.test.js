const { copyAndPush } = require("./copy-and-push");

describe("copyAndPush", () => {
  it("given an array and a new item, returns the original array with adding a new number into the array", () => {
    const array = [1, 2, 3];
    const value = 4;
    const numbers = copyAndPush(array, value);

    expect(numbers).toEqual([1, 2, 3, 4]);
  });
});