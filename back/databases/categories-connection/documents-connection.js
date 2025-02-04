import { Op } from 'sequelize';

import { Category,Subcategory, Document} from '../../models/associations.js';


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
        /*if (!resultado) {
            throw error;
        }*/
        return resultado;
    }

}



export default DocumentConnection;