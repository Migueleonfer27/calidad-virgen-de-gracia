

import mysql from 'mysql2';
import {Category} from '../../models/category.js'
import { Sequelize, QueryTypes, Op } from 'sequelize';


export class CategoryConnect{
   

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
        let result = [];
        
            result = await Category.findByPk(id)
         
            if(result==null){
                throw error
            }
            result=result.destroy()

       
        return result;
    
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
}

export default CategoryConnect