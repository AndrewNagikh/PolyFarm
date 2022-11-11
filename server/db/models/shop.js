'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'category',
      });
    }
  }
  Shop.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};
