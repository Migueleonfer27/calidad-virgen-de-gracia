'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {

      const subcategories = [
          {
            name: 'Dirección y comunicación (DYC)',
            id_category: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Actividades de aula (ACT)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Evaluación (EVA)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Formación Empresas (FEM)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Orientación (ORI)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Programación (PROG)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Tutoría (TUT)',
            id_category: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Prevención de riesgos laborales (PRL)',
            id_category: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Recursos Humanos (RRHH)',
            id_category: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Recursos materiales (RMAT)',
            id_category: 3,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Auditorías',
            id_category: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Memorias anuales',
            id_category: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Registros de control',
            id_category: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'SQRs (Sugerencias, Quejas y Reclamaciones)',
            id_category: 4,
            createdAt: new Date(),
            updatedAt: new Date()
          }
      ];

      await queryInterface.bulkInsert('subcategories', subcategories, {});

      console.log("Subcategoría creada con éxito.");
    } catch (error) {
      console.error("Error al crear la subcategoría:", error);
    }
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('subcategories', null, {});

  }
};