'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      open_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      close_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      highest_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      lowest_price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('assets');
  }
};