// Daniel Cruz
import { Op } from 'sequelize';
import { Category, Subcategory, Document } from '../../models/associations.js';

export class DocumentConnection {
    getDocumentsFromSubcategory = async (subcategoryId) => {
        let resultado = [];
        resultado = await Document.findAll({
            where: {
                id_subcategory: {
                    [Op.eq]: subcategoryId
                }
            },
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]

        })

        if (!resultado) {
            throw error;
        }
        return resultado;
    }
    getDocumentsFromCategory = async (categoryId) => {
        let resultado = [];
        

           resultado= await Category.findOne({
                where: { id: categoryId }, 
                include: [
                    {
                        model: Subcategory,
                        as: 'subcategories',
                        include: [
                            {
                                model: Document,
                                as: 'documents'
                            }
                        ]
                    }
                ]
            });
        return resultado;
    }

    getDocuments = async () => {
        let resultado = [];
        resultado = await Document.findAll({
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]
        });

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    getDocumentById = async (id) => {
        let resultado = [];
        resultado = await Document.findByPk(id, {
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]
        });

        if (!resultado){
            throw error;
        }
        return resultado;
    }

    getDocumentByName = async (name) => {
        let resultado = [];
        resultado = await Document.findAll({
            where: { name: { [Op.like]: `%${name}%` } },
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]
        });
        
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    insertDocument = async (document) => {
        try {
            const newDocument = await Document.create({
                name: document.name,
                code: document.code,
                url: document.url,
                id_subcategory: document.id_subcategory
            });

            return await Document.findByPk(newDocument.id, {
                attributes: { exclude: ['id_subcategory'] },
                include: [
                    {
                        model: Subcategory,
                        as: 'subcategory',
                        attributes: ['id', 'name']
                    }
                ]
            });

        } catch (error) {
            return { error: error.errors[0].message };
        }
    }

    deleteDocument = async(id) => {
        let result = [];

        result = await Document.findByPk(id, {
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]})

        if (!result) {
            throw error
        }

        result = result.destroy();

        return result;
    }

    updateDocument = async(body) => {
        let result = [];

        result = await Document.findByPk(body.id)

        if (!result) {
            throw error;
        }

        await result.update(body);

        return await Document.findByPk(body.id, {
            attributes: { exclude: ['id_subcategory'] },
            include: [
                {
                    model: Subcategory,
                    as: 'subcategory',
                    attributes: ['id', 'name']
                }
            ]});
    } 

}



export default DocumentConnection;