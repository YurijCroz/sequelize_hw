'use strict';

const addTestProducts = [
  {
    name: "Galaxy A52 6/128GB Black(SM-A525)",
    categoryId: 2,
    price: 400,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "iPhone 13 Pro Max 128GB Alpine Green",
    categoryId: 4,
    price: 1200,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ROG Phone 3 ZS661KS 12/512GB Black",
    categoryId: 3,
    price: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", addTestProducts, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
