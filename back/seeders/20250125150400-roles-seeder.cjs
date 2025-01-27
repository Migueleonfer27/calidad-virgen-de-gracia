"use strict";

const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert(
        "roles",
        [
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "ADMINISTRADOR",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "SECRETARIO/A",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE DEPARTAMENTO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE DEPARTAMENTO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE DEPARTAMENTO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE ESTUDIOS ADJUNTO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE DEPARTAMENTO",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A TÉCNICO/A",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR DE PREVENCIÓN",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "DIRECTOR/A",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO",
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
