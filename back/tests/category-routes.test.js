import request from 'supertest';
import express from 'express';
import {router} from '../routes/category-routes.js'; 
import jwt from 'jsonwebtoken'
import { generateJWT_rolesTest } from '../helpers/generate-jwt.js';
import Category from '../models/category.js';

//Gema
const app = express();
app.use(express.json());
app.use('/api/categories', router);

let categoryCreated;

describe('Testeo de ruta POST', () => {
    it("POST /insert debería retornar un código 201", async () => {
        
        const token = generateJWT_rolesTest(1, [{ id: 1, position: "ADMINISTRADOR" }]);
        const newCategory = { name: "Categoria Prueba Test" };

        const response = await request(app)
            .post("/api/categories/insert") 
            .set("authorization", token)
            .send(newCategory);
            expect(response.statusCode).toBe(201);
            expect(response.body.cod).toBe(1); 
            expect(response.body.data).toEqual({
              id: expect.any(Number), 
              name: newCategory.name
            });
        
            categoryCreated = response.body.data;
           // categoryCreated.id=response.body.data.id
            //console.log(response.body.data)
        
        
    });
 });
 describe('Testeo de ruta PUT', () => {
    it("POST /update debería retornar un código 201", async () => {
        const categoryUpdated={
            id:categoryCreated.id,
            name:"Categoria modificada para test"}
        const token = generateJWT_rolesTest(1, [{ id: 1, position: "ADMINISTRADOR" }]);
       
        const response = await request(app)
            .put(`/api/categories/update`) 
            .set("authorization", token)
            .send(categoryUpdated);
            expect(response.statusCode).toBe(201);
            expect(response.body.cod).toBe(1); 
        
    });
 });

 describe('Testeo de ruta DELETE', () => {
    it("POST /delete debería retornar un código 201", async () => {
        
        const token = generateJWT_rolesTest(1, [{ id: 1, position: "ADMINISTRADOR" }]);
       
        const response = await request(app)
            .delete(`/api/categories/delete/${categoryCreated.id}`) 
            .set("authorization", token)
            expect(response.statusCode).toBe(201);
            expect(response.body.cod).toBe(1); 
        
    });
 });
 

