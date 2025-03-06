// Miguel
// REVISAR PERMISOS PARA LOS ROLES
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { abilities } = await import("../helpers/abilities.js");

    const roles = await queryInterface.sequelize.query(
      "SELECT id, position FROM roles;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    const abilitiesData = await queryInterface.sequelize.query(
      "SELECT id, description FROM abilities;",
      { type: Sequelize.QueryTypes.SELECT }
    );

    const roleAbilities = [];

    roles.forEach((role) => {
      let assignedAbilities = [];

      switch (role.position) {
        case "ADMINISTRADOR":
          assignedAbilities = Object.values(abilities);
          break;

        case "SECRETARIO/A":
          assignedAbilities = [
            abilities.getUsers,
            abilities.updateUser,
            abilities.createRol,
            abilities.getRoles,
            abilities.updateRol,
            abilities.getAbilitiesByRol,
            abilities.sendMessage,
            abilities.addAbilities,
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,

          ];
          break;

        case "JEFE/A DE DEPARTAMENTO":
          assignedAbilities = [
            abilities.createDocument,
            abilities.updateDocument,
            abilities.deleteDocument,
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,
          ];
          break;

        case "JEFE/A DE ESTUDIOS ADJUNTO":
          assignedAbilities = [
            abilities.updateCategory,
            abilities.createCategory,
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,
          ];
          break;

        case "JEFE/A TÉCNICO/A":
          assignedAbilities = [
            abilities.getTasks,
            abilities.createTask,
            abilities.getRoles,
            abilities.updateTask,
            abilities.deleteTask,
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,
          ];
          break;

        case "COORDINADOR DE PREVENCIÓN":
          assignedAbilities = [
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,];
          break;

        case "COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL":
          assignedAbilities = [
            abilities.deleteMyTask,
            abilities.getMyTask,
            abilities.updateStateTask,
            abilities.downloadDocument,
            abilities.uploadPicture,
            abilities.updatePassword,
          ];
          break;

        case "DIRECTOR/A":
          assignedAbilities = [
            abilities.getUsers,
            abilities.createUser,
            abilities.updateUser,
            abilities.deleteUser,
            abilities.getRoles,
            abilities.getUsers,
            abilities.deleteRol,
            abilities.updateRol,
            abilities.createRol,
            abilities.addAbilities,
            abilities.createMassiveUser,
            abilities.getAbilitiesByRol,
            abilities.getAbilitiesByUser,
            abilities.sendMessage
          ];
          break;

        case "COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA":
          assignedAbilities = [
            abilities.createDocument,
            abilities.updateDocument,
          ];
          break;

        case "COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO":
          assignedAbilities = [
            abilities.getUsers,
            abilities.createUser,
            abilities.updateUser];
          break;
      }

      const abilitiesToAssign = abilitiesData.filter((ability) =>
        assignedAbilities.includes(ability.description)
      );

      abilitiesToAssign.forEach((ability) => {
        roleAbilities.push({
          id_rol: role.id,
          id_ability: ability.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });

    if (roleAbilities.length > 0) {
      await queryInterface.bulkInsert("abilities_roles", roleAbilities, {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("abilities_roles", null, {});
  },
};
