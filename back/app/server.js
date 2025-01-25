import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import { router as userRoutes } from "../routes/user-routes.js";
import { router as roleRoutes } from "../routes/role-routes.js";
import { router as usersRolesRoutes } from "../routes/user-role-routes.js";
class Server {
  constructor() {
    this.app = express();
    this.usersPath = '/api/users';
    this.rolesPath = '/api/roles';
    this.usersRolesPath = '/api/users/roles';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use( fileUpload({
        useTempFiles : true,
        tempFileDir : '/tmp/',
        createParentPath: true
    }));
  }

  routes() {
    this.app.use(this.usersPath, userRoutes);
    this.app.use(this.rolesPath, roleRoutes);
    this.app.use(this.usersRolesPath, usersRolesRoutes);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
