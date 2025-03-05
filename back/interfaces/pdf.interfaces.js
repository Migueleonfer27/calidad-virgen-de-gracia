//Miguel

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

      "RRHH10 Modelo asuntos propios retribuidos.pdf": {
        mappings: {
          APELLIDOS: (user) => `${user.last_name}`,
          NOMBRE: (user) => `${user.first_name}`,
          NIF: (user) => `${user.dni}`,
          "Fecha Nacimiento": (user) => `${user.birth_date}`,
          "CUERPO O ESCALA": (user) => `${user.body}`,
          ESPECIALIDAD: (user) => `${user.specialty}`,
          LOCALIDAD: (user) => `${user.city}`,
          PROVINCIA: (user) => `${user.province}`,
          "C. POSTAL": (user) => `${user.postal_code}`,
          "Teléfono móvil": (user) => `${user.phone}`,
          "Teléfono fijo": (user) => `${user.phone_rp}`,
          Curso: () =>
            `${new Date().getFullYear() - 1}/${new Date().getFullYear()}`,
        },
      },

      "ACT05  Parte disciplinario alumno.pdf": {
        mappings: {
          DOCENTE: (user) => `${user.first_name} ${user.last_name}`,
          Fdo: (user) => `${user.first_name} ${user.last_name}`,
          Fecha: () => `${new Date().toLocaleDateString("es-ES")}`,
        },
      },

      "SQR02 Hoja de SQR.pdf": {
        mappings: {
          "FECHA de Entrada": () => `${new Date().getFullYear()}`,
          "NOMBRE Y APELLIDOS": (user) =>
            `${user.first_name} ${user.last_name}`,
          DIRECCIÓN: (user) => `${user.address}`,
          LOCALIDAD: (user) => `${user.city}`,
          PROVINCIA: (user) => `${user.province}`,
          "CÓDIGO POSTAL": (user) => `${user.postal_code}`,
          TLFNO: (user) => `${user.phone}`,
          email: (user) => `${user.email}`,
        },
      },
    };
  }

  getTemplate(documentName) {
    return this.templates[documentName] || null;
  }
}

export default TemplatesPdf;
