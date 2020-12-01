
const  dogs  = require('./name');
const request = require('superagent');

const { findByName } = require('./find-by-name');
const { name } = require('./find-by-name');

describe('findByName', () => {
    it('grabs a dog by its name', () => {
    expected = 
      expect(findByName).toEqual('Sasha');
    });
    it('grabs a dog by its name using destruction', () => {
      expected = 
        expect(name).toEqual('Sasha');
      });
  
  });