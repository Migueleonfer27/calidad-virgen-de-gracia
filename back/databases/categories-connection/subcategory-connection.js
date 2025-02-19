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
    
     insertSubcategory = async(subcategory) => {
       const newSubcategory=new Subcategory()
       newSubcategory.name=subcategory.name
       newSubcategory.id_category=subcategory.id_category
        let result = 0;
        try {
               
               result=await newSubcategory.save();
              
               } catch (error) {
                   result=error.errors[0].message
                   //throw error;
                  
               }
               return result;
    }


    deleteSubcategory= async (id)=>{
        let result = [];
        
            result = await Subcategory.findByPk(id)
            
            if(result==null){
                throw error
            }
            result=result.destroy()

       
        return result;
    
    }

    updateSubcategory= async (body)=>{
      
        let result = [];
        
        result = await Subcategory.findByPk(body.id)
      
        if(result==null){
            throw error
        }
        result=await result.update(body)
       
    return result;
    }
}

export default SubcategoryConnection;

