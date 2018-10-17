'use strict';
module.exports = (sequelize, DataTypes) => {
  const asset = sequelize.define('asset', {
    name: DataTypes.STRING,
    open_price: DataTypes.FLOAT,
    close_price: DataTypes.FLOAT,
    highest_price: DataTypes.FLOAT,
    lowest_price: DataTypes.FLOAT,
    date: DataTypes.STRING
  }, {});
  asset.associate = function(models) {
    // associations can be defined here
  };
  return asset;
};