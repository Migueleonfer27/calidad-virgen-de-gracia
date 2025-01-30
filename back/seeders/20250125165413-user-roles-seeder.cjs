"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { Users, Roles } = await import("../models/associations.js");

    const users = await Users.findAll({
      attributes: ["id"],
      where: { id: { [Sequelize.Op.ne]: 1 } },
    });
    const roles = await Roles.findAll({
      attributes: ["id"],
      where: { id: { [Sequelize.Op.ne]: 1 } },
    });

    const userRoles = users.map((user) => ({
      user_id: user.id,
      role_id: roles[Math.floor(Math.random() * roles.length)].id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("users_roles", userRoles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users_roles", null, {});
  },
};
