// Gema Rubio y Daniel Cruz
import { Op } from 'sequelize';
import { Subcategory } from '../../models/associations.js';

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
}

export default SubcategoryConnection;