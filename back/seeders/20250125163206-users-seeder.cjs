"use strict";

const { generateUsers } = require("../factories/user-factorie.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const users = await generateUsers(10);
      await queryInterface.bulkInsert("users", users, {});
    } catch (error) {
      console.error("Error seeding de los usuarios:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
