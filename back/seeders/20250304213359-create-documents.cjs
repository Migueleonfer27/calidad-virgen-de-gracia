"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const documents = [
      // subcategory 1
      {
        name: "Acta informe reunión",
        code: "DYC06",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EbSJUR8BXnxIvO6Jdhk8i5oBrQNirRskAokxziSMGd0V_A?e=h1bKy1",
        id_subcategory: 1,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Convocatoria de reunión",
        code: "DYC05",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ESTouQG8LyBMjY7hM5S7KhMBo1_Z4rNLZNCNhoRTeig0UA?e=D9RRuX",
        id_subcategory: 1,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 2
      {
        name: "Aviso previo a pérdida de evaluación continua",
        code: "ACT03",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ES-byNxXDH1FtpX7KsbQOGYBT1jp0Ia-C7GLw1lYcHWbog?e=OCqqcV",
        id_subcategory: 2,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ACT05 Parte disciplinario alumno.pdf", // AUTORELLENAAAAAAAAAAAAAAAAAAAAAR
        code: "ACT05",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FACTIVIDADES%2DAULA%2FACT05%20%20Parte%20disciplinario%20alumno%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FACTIVIDADES%2DAULA&p=true&ga=1",
        id_subcategory: 2,
        autofilled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 3
      {
        name: "Acta de evaluación",
        code: "EVA05",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EUg3h-eoZhlKrwxlZ0tPLSoB-lVAi-z-LoQ1DFiDoDIenw?e=uyoly6",
        id_subcategory: 3,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hoja firmas información a alumnos pendientes",
        code: "EVA03",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWx2V3XrhsxPgWOgV3EhQ-sBu3QmtNkdivtOMLRrSpF0rQ?e=AsHzze",
        id_subcategory: 3,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 4
      {
        name: "Hoja firmas información alumnado",
        code: "FEM04",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/Eeg__7ch3UlAnxozPmCDXmwB1Laxy2yBxgKwtLXau4JSAA?e=1tnRGg",
        id_subcategory: 4,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Protocolo accidentes alumnos",
        code: "FEM12",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ERRpJgPy--pFuF0qnYr4pU0BN7kcDYt5kFEgUl1OI9Ln6g?e=rGIgdg",
        id_subcategory: 4,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 5
      {
        name: "Autorización inclusión bolsa de trabajo",
        code: "ORI04",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWHBVIflbu9BpuKhtZjN0eYBy20uyppmI1DRl95PCx6HqA?e=JGnheJ",
        id_subcategory: 5,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Firma alumnado en Dpto IOP",
        code: "ORI05 ",
        url: "https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EUeqSPuv2F5HhfvwRcc4CtsBDHT4mJNs_w9GW7VW2bpzNw?e=QPQKGs",
        id_subcategory: 5,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 6
      {
        name: "Reservar aulas APE-ATECA",
        code: "PROG13",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EZYaxLmILUdJs0abfvAbQxkBqmuoX5DvPz8TPIGLeDm8Eg?e=Tn1wLM",
        id_subcategory: 6,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Autorización de mayores-menores de edad",
        code: "PROG07",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EfMiek9m1w5Dih8pceFmqEABKRP0J7JuFfzYgYUbGztg4g?e=WoEElM",
        id_subcategory: 6,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 7
      {
        name: "TUT02 Aviso de anulacion matricula.pdf", // AUTORELLENABLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        code: "TUT02",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA%2FTUT02%20Aviso%20de%20anulacion%20matricula%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FENSENANZA%2DAPRENDIZAJE%2FTUTORIA&p=true&ga=1",
        id_subcategory: 7,
        autofilled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Acta elección delegados",
        code: "TUT07",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXf6As9Pg0tLlsaUdZGkC-UBVZ1ESOKsxDNqOZYsRMgChQ?e=wZ5HV9",
        id_subcategory: 7,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 8
      {
        name: "Asignación de tareas de emergencia",
        code: "PRL03",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EWSkRErkNUBEm_z0cQsC8gUBujarDo6C7zB_ps0iE7Ndyw?e=HKDk8Q",
        id_subcategory: 8,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Evaluación simulacro",
        code: "PRL08",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EQ6XQNS0cnhGr8LlQaT9Ao8B-wMc0hxz27YDjn-vi_Hv8Q?e=z7CKzg",
        id_subcategory: 8,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 9
      {
        name: "RRHH02 Ficha datos personales profesorado.pdf", // AUTORELLENABLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        code: "RRHH02",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH02%20Ficha%20datos%20personales%20profesorado%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1",
        id_subcategory: 9,
        autofilled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "RRHH10 Modelo asuntos propios retribuidos.pdf", // AUTORELLENABLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
        code: "RRHH10",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH%2FRRHH10%20Modelo%20asuntos%20propios%20retribuidos%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRRHH&p=true&ga=1",
        id_subcategory: 9,
        autofilled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 10
      {
        name: "Préstamo de equipo informático",
        code: "RMAT07",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES%2FRMAT07%20Prestamo%20de%20Equipo%20Informatico%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FGESTION%2FRECURSOS%20MATERIALES&p=true&ga=1",
        id_subcategory: 10,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Registro de material inventariable dpto",
        code: "RMAT09",
        url: "https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EThqb8G42jtEv7RV3T9ZJwUBknqrIc9CbLieWWiYWLuE6Q?e=f0fsJv",
        id_subcategory: 10,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 11
      {
        name: "Plan de auditoría interna",
        code: "AUD02",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/ETF9vHxs3C5AkmfXVIkwzCEB0PGmphSZQzUgq2R3XQ7PnQ?e=aTRA2A",
        id_subcategory: 11,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Informe de acciones preventivas",
        code: "AUD05",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EXPVL-dk5KpAq0w9shIeS1IBXJurbdCJ4ecm69pJ94K9ag?e=zgpooh",
        id_subcategory: 11,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 12
      {
        name: "Memoria anual de módulo",
        code: "MEM02",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EaFPqlQiIOpNveRk1r40Bc8Bu1pzMK9Wkx6kf9CpBIdjfw?e=yRd3nA",
        id_subcategory: 12,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Memoria anual dpto-fp",
        code: "MEM03",
        url: "https://crfpcastilla.sharepoint.com/:w:/s/EPT13002691E03-SGC/EU1-89z42RpIorttguhZHE0BMPTVBBmk0RtAcSy7ISfZEw?e=Ah3pck",
        id_subcategory: 12,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 13
      {
        name: "ACT registro partes alumnado",
        code: "REG11",
        url: "https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EXL4PIS6YE5BsJ-iUdkiTxcBT5KOqCu26DXuEyu2WPickQ?e=ZXPylb",
        id_subcategory: 13,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ALUMNS registro control asistencia",
        code: "REG18",
        url: "https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EdsaWRkmD91DpuGEKsWEw8oBHzFRhzgMFpsvKgHoGir7nA?e=irakDS",
        id_subcategory: 13,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // subcategory 14
      {
        name: "SQR02 Hoja de SQR.pdf", // AUTORELLENABLEEEEEEEEEEEEEEEEEEEEEEEE
        code: "SQR02",
        url: "https://crfpcastilla.sharepoint.com/sites/EPT13002691E03-SGC/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR%2FSQR02%20Hoja%20de%20SQR%2Epdf&parent=%2Fsites%2FEPT13002691E03%2DSGC%2FDocumentos%20compartidos%2FSGC%2FSGC%2Dweb%2FMEDICION%20y%20MEJORA%2FSQR&p=true&ga=1",
        id_subcategory: 14,
        autofilled: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Listado SQRs",
        code: "SQR03",
        url: "https://crfpcastilla.sharepoint.com/:x:/s/EPT13002691E03-SGC/EeLgFy5FBnNKvst5SoSh4LIBmOmv0_MgJSLwEoGsXqYNfQ?e=Hkce2j",
        id_subcategory: 14,
        autofilled: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    try {
      await queryInterface.bulkInsert("documents", documents, {});
      console.log("Documetos insertados");
    } catch (error) {
      console.log(error.message);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("documents", null, {});
  },
};
