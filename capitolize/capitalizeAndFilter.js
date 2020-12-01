
const word = ["hey", "how", "are", "you", "fred"];

// const capitalizeAndFilter = (word) => {
//     const wordCopy = [...word];
//     let output = [];
//     for (let i = 0; i < word.length; i++) {
//         const word = wordCopy[i];
//         if (word.charAt(0) !== "f") {
//             output.push(word.toUpperCase());
//         }
//     }
//     return output;
// };

const capitalizeAndFilter = (word) => {
    return word
      .filter((word) => word.charAt(0) !== "f")
      .map((word) => word.toUpperCase());
  };
  
  module.exports = { capitalizeAndFilter };


console.log(capitalizeAndFilter(word));