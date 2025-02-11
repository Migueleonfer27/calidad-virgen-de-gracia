import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import { router as userRoutes } from "../routes/user-routes.js";
import { router as roleRoutes } from "../routes/role-routes.js";
import { router as usersRolesRoutes } from "../routes/user-role-routes.js";
import { router as categoryRoutes } from '../routes/category-routes.js'
import { router as subcategoryRoutes } from "../routes/subcategory-routes.js";
import { router as authRoutes } from "../routes/auth-routes.js";
import { router as mailRoutes } from "../routes/mail-routes.js";
import { router as taskRoutes } from "../routes/task-routes.js"
import { router as proxyRoutes } from "../routes/proxy-routes.js"; // Importa la nueva ruta

class Server {
  constructor() {
    this.app = express();
    this.usersPath = '/api/users';
    this.rolesPath = '/api/roles';
    this.usersRolesPath = '/api/users/roles';
    this.categoriesPath = '/api/categories';
    this.subcategoriesPath = '/api/subcategories';
    this.authPath = '/api/auth';
    this.mailPath = '/api/mail';
    this.taskPath = '/api/task';
    this.proxyPath = '/api/proxy'; // Nueva ruta para el proxy
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
      createParentPath: true
    }));
  }

  routes() {
    this.app.use(this.usersPath, userRoutes);
    this.app.use(this.rolesPath, roleRoutes);
    this.app.use(this.usersRolesPath, usersRolesRoutes);
    this.app.use(this.categoriesPath, categoryRoutes);
    this.app.use(this.subcategoriesPath, subcategoryRoutes);
    this.app.use(this.authPath, authRoutes);
    this.app.use(this.mailPath, mailRoutes);
    this.app.use(this.taskPath, taskRoutes);
    this.app.use(this.proxyPath, proxyRoutes); // Agregamos la nueva ruta
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
