class TemplatesPdf {
  constructor() {
    this.templates = {
      "RRHH02 Ficha datos personales profesorado.pdf": {
        mappings: {
          "NOMBRE Y APELLIDOS": (user) =>
            `${user.first_name} ${user.last_name}`,
          DNI: (user) => user.dni,
          NRP: (user) => user.nrp,
          CUERPO: (user) => user.body,
          ESPECIALIDAD: (user) => user.specialty,
          DEPARTAMENTO: (user) => user.department,
          TITULACIÓN: (user) => user.title,
          "FECHA DE NACIMIENTO": (user) => user.birth_date?.split(" ")[0] || "",
          "FECHA DE ALTA EN EL CUERPO": (user) =>
            user.admission_date?.split(" ")[0] || "",
          "FECHA DE ALTA EN EL CENTRO": (user) =>
            user.createdAt?.split(" ")[0] || "",
          "FECHA DE BAJA EN EL CENTRO": (user) =>
            user.leave_date?.split(" ")[0] || "",
          CORREO: (user) => user.email,
          TLFNO: (user) => user.phone_rp || "",
          "TLFNO MÓVIL": (user) => user.phone || "",
          LOCALIDAD: (user) => user.city,
          PROVINCIA: (user) => user.province,
          "CÓDIGO POSTAL": (user) => user.postal_code,
          "DOMICILIO PARTICULAR": (user) => user.address,
        },
      },

      "TUT02 Aviso de anulacion matricula.pdf": {
        mappings: {
          "NOMBRE DEL TUTOR": (user) => `${user.first_name} ${user.last_name}`,
          "Curso Académico": () =>
            `${new Date().getFullYear() - 1}/${new Date().getFullYear()}`,
        },
      },
    };
  }

  getTemplate(documentName) {
    return this.templates[documentName] || null;
  }
}

export default TemplatesPdf;
