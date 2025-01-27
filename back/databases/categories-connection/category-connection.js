
import { Category,Subcategory} from '../../models/associations.js';
import mysql from 'mysql2';
import { Sequelize, QueryTypes, Op } from 'sequelize';
//import Subcategory from '../../models/subcategory.js';


export class CategoryConnection{
   

    insertCategory = async(category) => {
       const newCategory=new Category()
       newCategory.name=category.name
        let result = 0;
        try {
               
               result=await newCategory.save();
              
               } catch (error) {
                   result=error.errors[0].message
                   //throw error;
                  
               }
               return result;
    }
   //Preguntar a Fernando si hacer softdelete o tambien incluir el borrado total

    deleteCategory= async (id)=>{
       
        
            const category=await Category.findByPk(id)
            
            const subCategory=await Subcategory.destroy({
                where: {id_category:{[Op.eq]:id}}
            })
            category.destroy()

       
        return {category,subCategory};
    
    }

    updateCategory= async (body)=>{
      
        let result = [];
        
        result = await Category.findByPk(body.id)
      
        if(result==null){
            throw error
        }
        result=await result.update(body)
       
    return result;
    }

    categoryExist= async (id)=>{
      
        let result = [];
        
        result = await Category.findByPk(id)
      
        if(result==null){
            throw error
        }
       
       
    return result;
    }
}

export default CategoryConnection