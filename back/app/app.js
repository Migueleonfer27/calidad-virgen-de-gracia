import dotenv from 'dotenv';
import { MiServer } from './server.js';

const server = new MiServer();

dotenv.config();
server.listen();
console.log(`📋 Datos de conexión: ${process.env.DB_DEV} ${process.env.DB_USER} ${process.env.DB_PASSWORD}`);