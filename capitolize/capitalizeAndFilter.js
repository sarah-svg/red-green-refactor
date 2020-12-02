
const word = ["hey", "how", "are", "you", "fred"];

////////capitalizing and filtering through the results using loop and then map


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

