import { response } from "express";
import { UserConnection } from "../databases/user-rol-database/user-connection.js";
import messages from "../helpers/messages-controllers.js";

const userConnection = new UserConnection();

const UserController = {
  indexUsers: async (req, res = response) => {
    try {
      const users = await userConnection.getUsers();
      res.status(200).json({
        message: messages.user.success.index,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.user.error.index,
        error: error.message,
      });
    }
  },

  showUser: async (req, res = response) => {
    try {
      let user = await userConnection.getUserById(req.params.id);
      if (!user) return res.status(404).json({ message: messages.user.error.show, data: null });
      user = user.get({ plain: true });
      if (user.birth_date) user.birth_date = new Date(user.birth_date).toISOString().split('T')[0];
      if (user.admission_date) user.admission_date = new Date(user.admission_date).toISOString().split('T')[0];
      if (user.leave_date) user.leave_date = new Date(user.leave_date).toISOString().split('T')[0];
      res.status(200).json({
        message: messages.user.success.show,
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.user.error.show,
        error: error.message,
      });
    }
  },  

  storeUser: async (req, res = response) => {
    try {
      const newUser = await userConnection.createUser(req.body);
      res.status(201).json({
        message: messages.user.success.create,
        data: newUser,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.user.error.create,
        error: error.message,
      });
    }
  },

  updateUser: async (req, res = response) => {
    try {
      const updatedUser = await userConnection.updateUser(
        req.params.id,
        req.body
      );
      res.status(200).json({
        message: messages.user.success.update,
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.user.error.update,
        error: error.message,
      });
    }
  },

  deleteUser: async (req, res = response) => {
    try {
      const deletedUser = await userConnection.deleteUser(req.params.id);
      res.status(200).json({
        message: messages.user.success.delete,
        data: deletedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: messages.user.error.delete,
        error: error.message,
      });
    }
  },
};

export { UserController };
