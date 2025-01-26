import express from "express";
import cors from "cors";
import fileUpload from 'express-fileupload';
import {router as categoryRoutes} from '../routes/categoryRoutes.js'
class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.categoriesPath='/api/categories'

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
    this.app.use(this.categoriesPath, categoryRoutes);
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando en: ${process.env.PORT}`);
    });
  }
}

export { Server };
