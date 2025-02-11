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
            }

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
        resultado = await Document.findAll();

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    getDocumentById = async (id) => {
        let resultado = [];
        resultado = await Document.findByPk(id);

        if (!resultado){
            throw error;
        }
        return resultado;
    }

    getDocumentByName = async (name) => {
        let resultado = [];
        resultado = await Document.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        
        if (!resultado){
            throw error;
        }
        return resultado;
    }

    insertDocument = async(document) => {
        const newDocument = new Document();
        newDocument.name = document.name;
        newDocument.code = document.code;
        newDocument.url = document.url;
        newDocument.id_subcategory = document.id_subcategory;

        let result = 0;

        try {
            result = await newDocument.save();
        } catch (error) {
            result = error.errors[0].message
        }

        return result;
    }

}



export default DocumentConnection;