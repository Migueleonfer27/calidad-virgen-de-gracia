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
            description:
              "Gestiona permisos de usuario, controla la configuración del sistema y supervisa la seguridad de la plataforma.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "SECRETARIO/A",
            description:
              "Administra tareas administrativas como la gestión de documentos, actualización de registros y asistencia en la programación de eventos.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE DEPARTAMENTO",
            description:
              "Gestiona la configuración de los departamentos, asigna tareas y supervisa los informes de progreso dentro de la aplicación.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A DE ESTUDIOS ADJUNTO",
            description:
              "Supervisa y aprueba los programas académicos, realiza ajustes a los contenidos y coordina la distribución de materiales educativos.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "JEFE/A TÉCNICO/A",
            description:
              "Gestiona la configuración de sistemas técnicos, supervisa las operaciones técnicas y resuelve problemas técnicos dentro de la plataforma.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR DE PREVENCIÓN",
            description:
              "Controla las configuraciones de seguridad, monitorea las alertas y asegura el cumplimiento de las normativas de prevención de riesgos.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE FORMACIÓN Y TRANSFORMACIÓN DIGITAL",
            description:
              "Configura y gestiona módulos de capacitación online, organiza seminarios virtuales y promueve la integración de herramientas digitales en el proceso de formación.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "DIRECTOR/A",
            description:
              "Supervisa la gestión de usuarios, ajusta políticas de acceso y toma decisiones clave sobre la evolución y expansión de la plataforma.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE AULA DE TECNOLOGÍA APLICADA",
            description:
              "Gestiona las configuraciones del aula virtual de tecnología, organiza actividades prácticas y supervisa el progreso de los estudiantes.",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            code: faker.number.int({ min: 10000, max: 999999 }),
            year: new Date().getFullYear(),
            position: "COORDINADOR/A DE AULA PROFESIONAL DE EMPRENDIMIENTO",
            description:
              "Gestiona módulos de emprendimiento, crea proyectos interactivos y coordina las mentorías y talleres sobre nuevas empresas dentro de la aplicación.",
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
