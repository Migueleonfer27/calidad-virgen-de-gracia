import { UsersRoles } from "../../models/associations.js";

class UserRoleConnection {
  async getUserRoles() {
    try {
      return await UsersRoles.findAll();
    } catch (error) {
      throw error;
    }
  }

  async createUserRole(userRole) {
    try {
      return await UsersRoles.create(userRole);
    } catch (error) {
      throw error;
    }
  }

  async deleteUserRole(id) {
    try {
      return await UsersRoles.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}

export { UserRoleConnection };
