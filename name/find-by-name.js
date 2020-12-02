const dogs = require('./name');

///finding one name out of the dogs array

// const findByName = dogs[0]['name']

const findByName = dogs[0].name;

const { name } = dogs[0];



module.exports = {
     findByName,
        name
}