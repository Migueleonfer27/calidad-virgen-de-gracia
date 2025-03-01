/**Miguel y Daniel*/
import { request, response } from "express";
import { UserConnection } from "../databases/user-rol-database/user-connection.js";
import messages from "../helpers/messages-controllers.js";
import { importUsersFromCSV } from "../helpers/user-csv.js";
import { messages as msg } from '../helpers/messages-controllers.js';

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
      console.log(error)
      res.status(500).json({
        message: messages.user.error.index,
        error: error.message,
      });
    }
  },

  showUser: async (req, res = response) => {
    try {
      let user = await userConnection.getUserById(req.params.id);
      if (!user)
        return res
          .status(404)
          .json({ message: messages.user.error.show, data: null });
      user = user.get({ plain: true });
      if (user.birth_date)
        user.birth_date = new Date(user.birth_date).toISOString().split("T")[0];
      if (user.admission_date)
        user.admission_date = new Date(user.admission_date)
          .toISOString()
          .split("T")[0];
      if (user.leave_date)
        user.leave_date = new Date(user.leave_date).toISOString().split("T")[0];
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

  storeUsersCsv: async (req, res = response) => {
    try {
      const result = await importUsersFromCSV(req.files.file.tempFilePath);
      res.status(200).json({
        message: "CSV importado correctamente.",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  updatePassword: async (req = request, res = response) => {
    const { id } = req.params;
    const { password } = req.body;

    userConnection.updatePassword(id, password)
      .then(data => {
        res.status(200).json({
          'msg': messages.user.success.update,
          'data': data
        })
      })
      .catch( err => {
        res.status(500).json({
          'msg': messages.user.error.update
        })
      })
  },

  updateProfilePic: async (req = request, res = response) => {
    const { id } = req.params;
    const { img } = req.files;

    try {
      const newImage = await userConnection.updateProfilePic(id, img);

      if (!newImage) {
          return res.status(400).json({
              msg: msg.file.error.upload
          });
      }

      res.status(200).json({
          msg: msg.file.success.upload,
          data: { profile_picture: newImage }
      });

    } catch (error) {
        res.status(500).json({
            msg: msg.file.error.upload
        });
    }
  }
};

export { UserController };
