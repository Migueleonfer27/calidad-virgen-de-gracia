"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert(
        "roles",
        [
          {
            name: "Administrador",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Directora",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Jefa de departamento de informática",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Jefa de Calidad",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Tutor",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Profesor",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.error("Error seeding de los roles:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
