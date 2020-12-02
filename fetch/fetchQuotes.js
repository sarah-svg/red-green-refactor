const request = require("superagent");
const _ = require("lodash");

const fetchQuotes = async () => {
    /////gabbing the quotes
  try {
    const response = await request.get(
      "http://futuramaapi.herokuapp.com/api/quotes/"
    );

    return response.body.slice(0, 1);
    /////grabbing one of the quotes and return it

  } catch (err) {
  
  }
};

module.exports = { fetchQuotes };

fetchQuotes();
