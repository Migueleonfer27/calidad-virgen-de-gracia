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
import { router as abilityRoleRoutes} from "../routes/ability-role-routes.js";
import { router as messageRoutes } from "../routes/message-routes.js";
import { socketController } from "../controllers/websocket-controller.js";
import { createServer } from 'http';
import { Server } from 'socket.io';

class MiServer {
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
    this.abilitiesPath= "/api/abilities";
    this.messagePath = "/api/message";

    this.serverExpress = createServer(this.app);
    this.serverWebSocket = createServer(this.app);
    this.io = new Server(this.serverWebSocket, {
        cors: {
            origin: 'http://localhost:4200', // En caso de que necesitemos otros dominios
            // origin: '*',    //Permitimos el acceso a todos los dominios.
            methods: ['GET', 'POST'],   //Permitimos los métodos GET y POST.
            allowedHeaders: ['Content-Type'],   //Permitimos el header 'Content-Type
            credentials: true   //Permitimos las credenciales.
        }
    });

    this.middlewares();
    this.routes();
    this.sockets();
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
    this.app.use(this.messagePath, messageRoutes);
  }

  sockets(){
    this.io.on('connection', socketController);
  }

  listen() {
    this.serverExpress.listen(process.env.PORT, () => {
      console.log(`🌍 Servidor Express escuchando en: ${process.env.PORT}`);
    });

    this.serverWebSocket.listen(process.env.WEBSOCKETPORT, () => {
      console.log(`🌐 Servidor de WebSockets escuchando en: ${process.env.WEBSOCKETPORT}`);
    });
  }
}

export { MiServer };
