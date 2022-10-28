'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Products, {through: 'Products'})
    }
  }
  Order.init({
    email: DataTypes.STRING,
    sumTotal: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};