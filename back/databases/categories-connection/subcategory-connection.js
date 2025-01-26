// Gema Rubio y Daniel Cruz
import { Op } from 'sequelize';
import { Category, Subcategory } from '../../models/associations.js';

export class SubcategoryConnection {
    
    getSubcategories = async () => {
        let resultado = [];
        resultado = await Subcategory.findAll();

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    getSubcategoryById = async (id) => {
        let resultado = [];
        resultado = await Subcategory.findByPk(id);

        if (!resultado){
            throw error;
        }
        return resultado;
    }

    getSubcategoryByName = async (name) => {
        let resultado = [];
        resultado = await Subcategory.findAll({
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

    getSubcategoriesFromCategory = async (categoryId) => {
        let resultado = [];
        resultado = await Subcategory.findAll({
            where: {
                id_category: {
                    [Op.eq]: categoryId
                }
            },
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        })

        if (!resultado){
            throw error;
        }
        return resultado;
    }
}

export default SubcategoryConnection;