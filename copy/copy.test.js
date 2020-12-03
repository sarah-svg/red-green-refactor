const { copyAndPush } = require("./copy-and-push");

describe("copyAndPush", () => {
  it("given an array and a new item, returns the original array with adding a new number into the array", () => {
    const array = [1, 2, 3];
    const value = 4;
    const numbers = copyAndPush(array, value);

    expect(numbers).toEqual([1, 2, 3, 4]);
  });
  it("checks to see if original array is unchanged", () => {
    const array = [1, 2, 3]
    const numberArr = [1, 2, 3]
    copyAndPush(numberArr, 4)
    expect(numberArr).toEqual(array)
  })

});