import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { router as userRoutes } from "../routes/user-routes.js";
import { router as roleRoutes } from "../routes/role-routes.js";
import { router as usersRolesRoutes } from "../routes/user-role-routes.js";
import { router as categoryRoutes } from "../routes/category-routes.js";
import { router as subcategoryRoutes } from "../routes/subcategory-routes.js";
import { router as authRoutes } from "../routes/auth-routes.js";
import { router as mailRoutes } from "../routes/mail-routes.js";
import { router as taskRoutes } from "../routes/task-routes.js";
import { router as downloadRoutes } from "../routes/donwload-routes.js"
import { router as documentRoutes } from "../routes/document-routes.js";
import { router as abilityRoleRoutes } from "../routes/ability-role-routes.js"
import { router as surveyRoutes } from '../routes/survey-routes.js'
import { router as surveyResponseRoutes } from '../routes/survey-response-routes.js'
import { router as questionRoutes } from '../routes/question-routes.js'

class Server {
  constructor() {
    this.app = express();
    this.usersPath = "/api/users";
    this.rolesPath = "/api/roles";
    this.usersRolesPath = "/api/users/roles";
    this.categoriesPath = "/api/categories";
    this.subcategoriesPath = "/api/subcategories";
    this.authPath = "/api/auth";
    this.mailPath = "/api/mail";
    this.taskPath = "/api/task";
    this.downloadPath = "/api/download";
    this.documentPath = "/api/documents";
    this.abilitiesPath = "/api/abilities"
    this.surveyPath = '/api/survey'
    this.surveyResponsePath = '/api/survey-response'
    this.questionPath = '/api/question'
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
    this.app.use('/uploads', express.static('uploads'));
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
    this.app.use(this.documentPath, documentRoutes);
    this.app.use(this.downloadPath, downloadRoutes);
    this.app.use(this.abilitiesPath, abilityRoleRoutes);
    this.app.use(this.surveyPath, surveyRoutes);
    this.app.use(this.surveyResponsePath, surveyResponseRoutes);
    this.app.use(this.questionPath, questionRoutes);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
