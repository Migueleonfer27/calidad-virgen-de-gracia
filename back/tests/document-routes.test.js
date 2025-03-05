import express from 'express';
import request from 'supertest';
import { generateJWT_rolesTest } from '../helpers/generate-jwt.js';
import { router } from '../routes/document-routes.js';

const app = express();
app.use(express.json());
app.use('/api/documents', router);

let documentCreated;

const token = generateJWT_rolesTest(1, [{
    id: 1,
    position: 'ADMINISTRADOR'
}]);

describe('Testeo de ruta POST', () => {
    it('POST / debería retornar un código 201', async () => {

        const newDocument = {
            name: "Documento test",
            code: "TEST01",
            url: "https://testdeprueba.pdf",
            id_subcategory: 1,
            autofilled: false
        };

        const response = await request(app)
            .post('/api/documents')
            .set('Authorization', token)
            .send(newDocument);

        expect(response.statusCode).toBe(201);
        expect(response.body.msg).toBe('Documento creado correctamente.');
        expect(response.body.data).toMatchObject({
            id: expect.any(Number),
            name: newDocument.name,
            code: newDocument.code,
            url: newDocument.url,
            autofilled: newDocument.autofilled,
            subcategory: {
                id: newDocument.id_subcategory,
                name: expect.any(String)
            },
            updatedAt: expect.any(String),
            createdAt: expect.any(String),
            deletedAt: null
        });
        
        documentCreated = newDocument;
    });
});

describe('Testeo de rutas GET', () => {
    it('GET / debería retornar un código 200', async () => {
        const response = await request(app)
            .get('/api/documents')
            .set('Authorization', token);
        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Documentos obtenidos correctamente.');
        expect(response.body.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String)
                })
            ])
        )
    });

    it('GET /getBySubcategoryId/:id debería retornar un código 200', async () => {
        const response = await request(app)
            .get('/api/documents/getBySubcategoryId/1')
            .set('Authorization', token);
        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('Documentos obtenidos correctamente.');
        expect(response.body.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String)
                })
            ])
        )
    });
});

describe('Testeo de ruta DELETE', () => {
    it('DELETE /delete/:id debería retornar un código 200', async () => {

        const newDocument = {
            name: "Documento para eliminar",
            code: "DELETE01",
            url: "https://testdelete.pdf",
            id_subcategory: 1,
            autofilled: false
        };

        const createResponse = await request(app)
            .post('/api/documents')
            .set('Authorization', token)
            .send(newDocument);

        const documentId = createResponse.body.data.id;

        const deleteResponse = await request(app)
            .delete(`/api/documents/delete/${documentId}`)
            .set('Authorization', token);

        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.msg).toBe('Documento eliminado correctamente.');
    });
});

describe('Testeo de ruta PUT', () => {
    it('PUT /update debería retornar un código 200', async () => {
        const newDocument = {
            name: "Documento para actualizar",
            code: "UPDATE01",
            url: "https://testupdate.pdf",
            id_subcategory: 1,
            autofilled: false
        };

        const createResponse = await request(app)
            .post('/api/documents')
            .set('Authorization', token)
            .send(newDocument);

        const documentId = createResponse.body.data.id;

        const updatedDocument = {
            id: documentId, 
            name: "Documento actualizado",
            code: "UPDATED01",
            url: "https://updated.pdf",
            autofilled: true
        };

        const response = await request(app)
            .put('/api/documents/update')
            .set('Authorization', token)
            .send(updatedDocument);

            expect(response.statusCode).toBe(200);
            expect(response.body.msg).toBe('Documento actualizado correctamente.');
            expect(response.body.data).toMatchObject({
                id: documentId,
                name: updatedDocument.name,
                code: updatedDocument.code,
                url: updatedDocument.url,
                autofilled: updatedDocument.autofilled
            });
    })
})

