
const word = ["hey", "how", "are", "you", "fred"];

const capitalizeAndFilter = (word) => {
    const wordCopy = [...word];
    let output = [];
    for (let i = 0; i < word.length; i++) {
        const word = wordCopy[i];
        if (word.charAt(0) !== "f") {
            output.push(word.toUpperCase());
        }
    }
    return output;
};

module.exports = { capitalizeAndFilter };

console.log(capitalizeAndFilter(word));