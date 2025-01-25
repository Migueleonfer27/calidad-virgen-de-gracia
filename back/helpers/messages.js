const messages = {
  user: {
    success: {
      index: "Usuarios obtenidos correctamente.",
      show: "Usuario obtenido correctamente.",
      create: "Usuario creado correctamente.",
      update: "Usuario actualizado correctamente.",
      delete: "Usuario eliminado correctamente.",
    },
    error: {
      index: "Error al obtener los usuarios.",
      show: "Error al obtener el usuario.",
      create: "Error al crear el usuario.",
      update: "Error al actualizar el usuario.",
      delete: "Error al eliminar el usuario.",
    },
  },

  userMiddleware: {
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

  role: {
    success: {
      index: "Roles obtenidos correctamente.",
      show: "Rol obtenido correctamente.",
      create: "Rol creado correctamente.",
      update: "Rol actualizado correctamente.",
      delete: "Rol eliminado correctamente.",
    },
    error: {
      index: "Error al obtener los roles.",
      show: "Error al obtener el rol.",
      create: "Error al crear el rol.",
      update: "Error al actualizar el rol.",
      delete: "Error al eliminar el rol.",
    },
  },

  roleMiddleware: {
    name: "El nombre del rol debe tener al menos 2 caracteres.",
  },

  userRole: {
    success: {
      add: "Rol de usuario agregado correctamente.",
      delete: "Rol de usuario eliminado correctamente.",
    },
    error: {
      add: "Error al agregar el rol de usuario.",
      delete: "Error al eliminar el rol de usuario.",
    },
  },
};

export default messages;
