"use strict";
const moment = require('moment')
/** 
 * Candlestick stock pattern
 * op > cp = up
 * op < cp = down
*/

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const asset = [
      {
        name: "Gemini",
        open_price: "450.33",
        close_price: "465.33",
        highest_price: "470.33",
        lowest_price: "445.33",
        date: moment().format('L'),
        createdAt: moment().format('llll'),
        updatedAt: moment().format('llll')
      },
      {
        name: "Binance",
        open_price: "111.39",
        close_price: "311.23",
        highest_price: "420.45",
        lowest_price: "251.21",
        date: moment().format('L'),
        createdAt: moment().format('llll'),
        updatedAt: moment().format('llll')
      },
      {
        name: "Bitfinex",
        open_price: "312.39",
        close_price: "386.23",
        highest_price: "225.45",
        lowest_price: "223.21",
        date: moment().format('L'),
        createdAt: moment().format('llll'),
        updatedAt: moment().format('llll')
      },
      {
        name: "Huobi",
        open_price: "378.39",
        close_price: "355.23",
        highest_price: "760.45",
        lowest_price: "231.21",
        date: moment().format('L'),
        createdAt: moment().format('llll'),
        updatedAt: moment().format('llll')
      },
      {
        name: "Bitnex",
        open_price: "323.39",
        close_price: "311.23",
        highest_price: "260.45",
        lowest_price: "223.21",
        date: moment().format('L'),
        createdAt: moment().format('llll'),
        updatedAt: moment().format('llll')
      }
    ];
    return queryInterface.bulkInsert("assets", asset, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
