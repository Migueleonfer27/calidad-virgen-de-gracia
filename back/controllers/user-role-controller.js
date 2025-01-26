import { response } from "express";
import { UserRoleConnection } from "../databases/user-rol-database/user-role-connection.js";
import messages from "../helpers/messages-controllers.js";

const userRoleConnection = new UserRoleConnection();

const UserRoleController = {
  addUserRole: async (req, res = response) => {
    try {
      const userRole = await userRoleConnection.addUserRole(req.body);
      res.status(201).json({
        message: messages.userRole.success.add,
        data: userRole,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.userRole.error.add,
        error: error.message,
      });
    }
  },

  deleteUserRole: async (req, res = response) => {
    try {
      const userRole = await userRoleConnection.deleteUserRole(
        req.params.user_id,
        req.params.role_id
      );
      res.status(200).json({
        message: messages.userRole.success.delete,
        data: userRole,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.userRole.error.delete,
        error: error.message,
      });
    }
  },
};

export { UserRoleController };
