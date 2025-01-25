import { response } from "express";
import { RoleConnection } from "../databases/user-rol-database/role-connection.js";
import messages from "../helpers/messages.js";

const roleConnection = new RoleConnection();

const RoleController = {
  indexRoles: async (req, res = response) => {
    try {
      const roles = await roleConnection.getRoles();
      res.status(200).json({
        message: messages.role.success.index,
        data: roles,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.role.error.index,
        error: error.message,
      });
    }
  },

  showRole: async (req, res = response) => {
    try {
      const role = await roleConnection.getRoleById(req.params.id);
      res.status(200).json({
        message: messages.role.success.show,
        data: role,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.role.error.show,
        error: error.message,
      });
    }
  },

  storeRole: async (req, res = response) => {
    try {
      const role = await roleConnection.createRole(req.body);
      res.status(201).json({
        message: messages.role.success.store,
        data: role,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.role.error.store,
        error: error.message,
      });
    }
  },

  updateRole: async (req, res = response) => {
    try {
      const role = await roleConnection.updateRole(req.params.id, req.body);
      res.status(200).json({
        message: messages.role.success.update,
        data: role,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.role.error.update,
        error: error.message,
      });
    }
  },

  deleteRole: async (req, res = response) => {
    try {
      const role = await roleConnection.deleteRole(req.params.id);
      res.status(200).json({
        message: messages.role.success.delete,
        data: role,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.role.error.delete,
        error: error.message,
      });
    }
  },
};

export { RoleController };
