'use strict';


 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    
    const {abilities} =await import('../helpers/abilities.js');
  
    try {
   
      const abilitiesData = [
        {
          description: abilities.deleteCategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateCategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.createCategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.deleteSubcategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateSubcategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.createSubcategory,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.deleteDocument,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateDocument,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.createDocument,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.downloadDocument,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.deleteTask,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateTask,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.createTask,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          description: abilities.getTasks,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateStateTask,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.getUsers,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.deleteUser,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateUser,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          description: abilities.createUser,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.getRoles,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.deleteRol,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.updateRol,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: abilities.createRol,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      await queryInterface.bulkInsert('abilities', abilitiesData, {});

      console.log("Ability creada con éxito.");
    } catch (error) {
      console.error("Error al crear la Ability:", error);
    }
  },
  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('abilities', null, {});

    }
  };
