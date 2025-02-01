import dotenv from 'dotenv';
import { Server } from './server.js';

const server = new Server();

dotenv.config();
server.listen();
console.log(`Datos de conexión: ${process.env.DB_DEV} ${process.env.DB_USER} ${process.env.DB_PASSWORD}`);