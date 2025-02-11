import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import { router as authRoutes } from "../routes/auth-routes.js";
import { router as mailRoutes } from "../routes/mail-routes.js";


class Server {
  constructor() {
    this.app = express();
    this.authPath = '/api/auth';
    this.mailPath = '/api/mail';
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
    this.app.use(this.authPath, authRoutes);
    this.app.use(this.mailPath, mailRoutes);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
