'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('survey_responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      survey_id: {
        type: Sequelize.BIGINT
      },
      question_id: {
        type: Sequelize.INTEGER
      },
      answer: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE, // Para el softdelete
        allowNull: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('survey_responses');
  }
};