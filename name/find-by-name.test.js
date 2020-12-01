
const  dogs  = require('./name');
const request = require('superagent');


const { findByName } = require('./find-by-name');


describe('findByName', () => {
    it('grabs a dog by its name', () => {
      const white = hexToRGB('FFFFFF');
      expect(white).toEqual({
        r: 255,
        g: 255,
        b: 255
      });
    });
  
    // it('converts a 000000 to r: 0, g: 0, b: 0', () => {
    //   const black = hexToRGB('000000');
    //   expect(black).toEqual({
    //     r: 0,
    //     g: 0,
    //     b: 0
    //   });
    // });
  });