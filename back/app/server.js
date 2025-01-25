import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import { router as userRoutes } from "../routes/user-routes.js";

class Server {
  constructor() {
    this.app = express();
    this.usersPath = '/api/users';
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
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
