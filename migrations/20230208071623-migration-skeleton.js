'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable('Users', { 
      firstName: Sequelize.STRING, 
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      address1: Sequelize.STRING,
      address2: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      phone: Sequelize.STRING,
      password: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('Users');
     */
    queryInterface.dropTable('Users')
  }
};
