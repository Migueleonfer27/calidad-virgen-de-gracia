import {response,request} from 'express';
import {SubcategoryConnection} from '../databases/categories-connection/subcategory-connection.js'

const connection= new SubcategoryConnection()

export const subcategoryController = {

    insert:   (req = request, res = response) => {
        let result
        connection.insertSubcategory(req.body)    
            .then( data => {
                result=1
                console.log('Categoría insertada correctamente!');
                res.status(201).json({cod:result,
                                        data:{
                                          id:data.id,
                                          name:req.body.name,
                                          id_category:req.body.id_category}
                                        });
            })
            .catch( err => {
                console.log(err);
                result=0
                res.status(203).json({cod:result,
                                      error:err  
                });
            });
   
    },

   

    delete: (req = request, res=response)=>{
        let result
        connection.deleteSubcategory(req.params.id)    
        .then( data => {
            result=1
            console.log('Categoría borrada correctamente!');
            res.status(201).json({cod:result,
                                data:data});
        })
        .catch( err => {
            console.log(err);
            result=0
            res.status(203).json({cod:result,
                                    error:err  
                                    });
        });
    },
    update: (req = request, res=response)=>{
        let result
        console.log(req.body)
        connection.updateSubcategory(req.body)   
        
        .then( data => {
            result=1
            console.log('Categoría actualizada correctamente!');
            res.status(201).json({cod:result,
                                    data:data});
        })
        .catch( err => {
            result=0
            console.log('sin resultados!');
            res.status(203).json({cod:result,
                                error:err  
                                });
        });
    }
}

export default subcategoryController