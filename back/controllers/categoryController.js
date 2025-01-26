import {response,request} from 'express';
import {CategoryConnect} from '../databases/connection-categories/category-connect.js'
import {messages as msg} from '../helpers/messages.js'
const connection= new CategoryConnect()

export const categoryController = {

    insert:   (req = request, res = response) => {
        let result
        connection.insertCategory(req.body)    
            .then( data => {
                result=1
                console.log('Categoría insertada correctamente!');
                res.status(201).json({cod:result,
                                        data:{
                                          id:data.id,
                                          name:req.body.name}
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
        connection.deleteCategory(req.params.id)    
        .then( data => {
            result=1
            console.log('Categoría borrada correctamente!');
            res.status(201).json({cod:result,
                                data:data});
        })
        .catch( err => {
            console.log('sin resultados!');
            result=0
            res.status(203).json({cod:result,
                                    error:err  
                                    });
        });
    },
    update: (req = request, res=response)=>{
        let result
        connection.updateCategory(req.body)   
        
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

export default categoryController