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
