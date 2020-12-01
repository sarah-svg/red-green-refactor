const dogs = require('./name');


// const findByName = dogs[0]['name']

const findByName = dogs[0].name;

const { name } = dogs[0];



module.exports = {
     findByName,
        name
}