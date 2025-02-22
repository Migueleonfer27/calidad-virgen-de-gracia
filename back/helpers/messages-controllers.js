/**Miguel y Daniel */

export const messages = {
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
      alreadyHave: "El usuario ya tiene este rol.",
    },
  },

  category: {
    success: {
      index: "Categorías obtenidas correctamente.",
      show: "Categoría obtenida correctamente.",
      create: "Categoría creada correctamente.",
      update: "Categoría actualizada correctamente.",
      delete: "Categoría eliminada correctamente.",
    },
    error: {
      index: "Error al obtener las categorías.",
      show: "Error al obtener la categoría.",
      notFound: "No se encontraron categorías disponibles.",
      create: "Error al crear la categoría.",
      update: "Error al actualizar la categoría.",
      delete: "Error al eliminar la categoría.",
    },
  },

  subcategory: {
    success: {
      index: "Subcategorías obtenidas correctamente.",
      show: "Subcategoría obtenida correctamente.",
      create: "Subcategoría creada correctamente.",
      update: "Subcategoría actualizada correctamente.",
      delete: "Subcategoría eliminada correctamente.",
    },
    error: {
      index: "Error al obtener las subcategorías.",
      show: "Error al obtener la subcategoría.",
      notFound: "No se encontraron subcategorías disponibles.",
      create: "Error al crear la subcategoría.",
      update: "Error al actualizar la subcategoría.",
      delete: "Error al eliminar la subcategoría.",
    },
  },

  document: {
    success: {
      index: "Documentos obtenidos correctamente.",
      show: "Documento obtenido correctamente.",
      create: "Documento creado correctamente.",
      update: "Documento actualizado correctamente.",
      delete: "Documento eliminado correctamente.",
    },
    error: {
      index: "Error al obtener los documentos.",
      show: "Error al obtener el documento.",
      notFound: "No se encontraron documentos disponibles.",
      create: "Error al crear el documento.",
      update: "Error al actualizar el documento.",
      delete: "Error al eliminar el documento.",
    },
  },

  download: {
    success: {
      generate: "Pdf autorrellenado correctamente.",
    },
    error: {
      notFound: "Error al intentar autorrellenar el pdf: ",
    },
  },

  abilities: {
    success: {
      indexRol: 'Permisos del rol obtenidos correctamente.',
      indexUser: 'Permisos del usuario obtenidos correctamente.',
    },
    error: {
      indexRol: 'Error al obtener los permisos del rol.',
      indexUser: 'Error al obtener los permisos del usuario.',
      notHaveAbilityRol: 'No hay permisos del asociados al rol.',
      notHaveRolUser: 'El usuario no tiene el rol asociado.',
    },
  }
};

export default messages;
