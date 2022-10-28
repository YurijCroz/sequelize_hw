'use strict';

const addTestCategories = [
  {
    name: "Samsung",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Asus",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "Apple",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", addTestCategories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  }
};
