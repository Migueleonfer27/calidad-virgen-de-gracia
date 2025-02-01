'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {

      const categories = [
          {
            name: 'Proceso de planificación estratégica',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Procesos de enseñanza y aprendizaje',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Procesos de gestión',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Proceso de medición y mejora',
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ];

      await queryInterface.bulkInsert('categories', categories, {});

      console.log("Categoría creada con éxito.");
    } catch (error) {
      console.error("Error al crear la categoría:", error);
    }
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
