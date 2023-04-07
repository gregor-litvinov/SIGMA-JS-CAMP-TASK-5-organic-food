'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        id: 1,
        name: 'Product 1',
        price: 140,
        discount: 5,
        description: 'Description for Product 1',
        created_at: new Date(),
        updated_at: new Date(),
     },
     {
      id: 2,
      name: 'Product 2',
      price: 150,
      discount: 5,
      description: 'Description for Product 2',
      created_at: new Date(),
      updated_at: new Date(),
   }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null);
  }
};
