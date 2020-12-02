



const { findByName } = require('./find-by-name');


describe("findByName", () => {
  it("returns the name property of the passed object", () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const name = findByName(spot);

    expect(name).toEqual("spot");
  });
});