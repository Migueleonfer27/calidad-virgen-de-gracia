const messages = {
  userMiddleware: {
    isInt: "El ID es requerido y debe ser un número entero.",
    dni: "El DNI debe tener al menos 8 caracteres y una letra.",
    firstName: "El nombre debe tener al menos 2 caracteres.",
    lastName: "El apellido debe tener al menos 2 caracteres.",
    email: "El email debe tener un formato válido (ejemplo@ejemplo.com).",
    password:
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.",
    phone: "El teléfono debe tener al menos 9 caracteres.",
    birthDate:
      "La fecha de nacimiento debe tener el formato YYYY-MM-DD (ejemplo: 2000-01-01).",
    gender: "El género debe ser Male, Female o Other.",
  },

  roleMiddleware: {
    isInt: "El ID es requerido y debe ser un número entero.",
    name: "El nombre del rol debe tener al menos 2 caracteres.",
  },

  userRoleMiddleware: {
    error: {
      required: "El user_id y role_id son obligatorios.",
      isInt: "El user_id y role_id deben ser números enteros.",
    },
  },
};

export default messages;
