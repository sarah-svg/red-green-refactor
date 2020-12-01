

const { capitalizeAndFilter } = require("./capitalizeAndFilter");

describe("capitalizeAndFilter", () => {
    it("takes in an array of strings and returns an array of all capitalized strings, words beginning with F filtered out", () => {
        const word = ["hey", "how", "are", "you", "fred"];
        const output = capitalizeAndFilter(word);

        expect(output).toEqual(["HEY", "HOW", "ARE", "YOU"]);
    });
});
