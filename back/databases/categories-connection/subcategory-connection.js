

import mysql from 'mysql2';
import { Category, Subcategory } from '../../models/associations.js'
import { Sequelize, QueryTypes, Op } from 'sequelize';


export class SubcategoryConnection{
   

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
   //Preguntar a Fernando si hacer softdelete o tambien incluir el borrado total

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

export default SubcategoryConnection