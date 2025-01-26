"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const { Roles, Users } = await import("../models/associations.js");
      const adminRole = await Roles.findOne({
        where: { name: "Administrador" },
      });

      const adminUser = {
        dni: "12345678A",
        first_name: "Admin",
        last_name: "User",
        email: "admin@example.com",
        password: await bcrypt.hash("12345", 10),
        phone: "123456789",
        birth_date: new Date("1980-01-01"),
        gender: "Other",
        profile_picture: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const newUser = await Users.create(adminUser);

      await queryInterface.bulkInsert(
        "users_roles",
        [
          {
            user_id: newUser.id,
            role_id: adminRole.id,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
      console.log("Usuario administrador creado con éxito.");
    } catch (error) {
      console.error("Error al crear el usuario administrador:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "users",
      { email: "admin@example.com" },
      {}
    );
    await queryInterface.bulkDelete("users_roles", { user_id: 1 }, {});
  },
};
