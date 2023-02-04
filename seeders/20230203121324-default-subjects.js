'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subjects', [
      {
        name: 'Maths'
      },{
        name: 'Science'
      },{
        name: 'Commerce'
      },{
        name: 'Arts'
      },{
        name:'Biology'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
