"use strict";

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
        name: "facebook",
        open_price: "450.33",
        close_price: "465.33",
        highest_price: "470.33",
        lowest_price: "445.33",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "bithumb",
        open_price: "320.39",
        close_price: "355.23",
        highest_price: "640.45",
        lowest_price: "231.21",
        date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
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
