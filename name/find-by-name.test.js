
const spot = { name: "spot", age: 5, weight: "20 lbs" };


const character = { _id: "5cf5679a915ecad153ab68c9", name: "Aang" };


const { findByName } = require('./find-by-name');


describe("findByName", () => {
  it("returns the name property of the passed object", () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const name = findByName(spot);

    expect(name).toEqual("spot");
  });
  it('returns Aang\'s name from character object', () => {
    const name = findByName(character)
    expect(name).toEqual('Aang')
  });

});