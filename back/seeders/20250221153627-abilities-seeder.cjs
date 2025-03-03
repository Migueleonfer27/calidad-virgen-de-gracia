"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { abilities } = await import("../helpers/abilities.js");

    try {
      const generateAbilityData = (description) => ({
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const abilitiesData = Object.values(abilities).map((description) =>
        generateAbilityData(description)
      );

      await queryInterface.bulkInsert("abilities", abilitiesData, {});
    } catch (error) {
      console.error("Error al crear las Abilities:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("abilities", null, {});
  },
};
