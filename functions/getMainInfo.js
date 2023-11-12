const {mainInfoReg} = require('../regularExpressions');
const parseString = require('./helpers/parsePartOfText');

const PRE_URL = 'https://www.zillow.com/homes/for_sale/';
const POST_URL = '_rb/?fromHomePage=true&shouldFireSellPageImplicitClaimGA=false&fromHomePageTab=buy';

function getMainInfo(text) {
  const {addressReg, areaReg, floorReg, bedroomsReg, bathesReg} = mainInfoReg;
  
    const address = parseString(text, addressReg);
    const area = parseString(text, areaReg);
    const floors = parseString(text, floorReg);
    const bedrooms = parseString(text, bedroomsReg);
    const bathrooms = parseString(text, bathesReg);
    const link = PRE_URL + address + POST_URL;
  
    return {
      address,
      area,
      floors,
      bedrooms,
      bathrooms,
      link
    };
  }

  module.exports = getMainInfo;