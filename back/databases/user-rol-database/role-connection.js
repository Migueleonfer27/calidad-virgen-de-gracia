/**Miguel */
import { Roles } from "../../models/associations.js";

class RoleConnection {
  async getRoles() {
    try {
      return await Roles.findAll();
    } catch (error) {
      throw error;
    }
  }

  async getRoleById(id) {
    try {
      return await Roles.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  async createRole(role) {
    try {
      return await Roles.create(role);
    } catch (error) {
      throw error;
    }
  }

  async updateRole(id, role) {
    try {
      return await Roles.update(role, { where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async deleteRole(id) {
    try {
      return await Roles.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}

export { RoleConnection };
