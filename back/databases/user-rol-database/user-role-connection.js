/**Miguel */
import { UsersRoles } from "../../models/associations.js";

class UserRoleConnection {
  async addUserRoles(userRoles) {
    try {
      return await UsersRoles.bulkCreate(userRoles);
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
    return await UsersRoles.findAll({
      where: { user_id: idUser, role_id: idRole },
    });
  }
}

export { UserRoleConnection };
