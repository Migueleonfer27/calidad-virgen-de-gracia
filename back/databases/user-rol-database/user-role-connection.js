import { UsersRoles } from "../../models/associations.js";

class UserRoleConnection {
  async addUserRole(userRole) {
    try {
      return await UsersRoles.create(userRole);
    } catch (error) {
      throw error;
    }
  }

  async deleteUserRole(idUser, idRole) {
    try {
      return await UsersRoles.destroy({
        where: { user_id: idUser, role_id: idRole },
      });
    } catch (error) {
      throw error;
    }
  }

  async haveRole(idUser, idRole) {
    return await UsersRoles.findOne({
      where: { user_id: idUser, role_id: idRole },
    });
  }
}

export { UserRoleConnection };
