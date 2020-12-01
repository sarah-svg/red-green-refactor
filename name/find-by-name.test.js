
const  dogs  = require('./name');
const request = require('superagent');


const { findByName } = require('./find-by-name');


describe('findByName', () => {
    it('grabs a dog by its name', () => {
    expected = 
      expect(findByName).toEqual('Sasha');
    });
  
  
  });