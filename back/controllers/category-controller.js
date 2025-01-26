// Gema Rubio y Daniel Cruz
import { response, request } from 'express';
import { CategoryConnect } from '../databases/categories-connection/category-connection.js'
import { messages as msg } from '../helpers/messages-controllers.js';

const connection = new CategoryConnect()

export const categoryController = {

    get: (req, res = response) => {
      connection.getCategories()
        .then(data => {
            res.status(200).json({
                'msg': msg.category.success.index,
                'data': data
            });
        }) 
        .catch( err => {
            res.status(500).json({
                'msg': msg.category.error.index
            })
        }); 
    },

    getById: (req = request, res = response) => {
        const id = req.params.id;
        connection.getCategoryById(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.category.success.show,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.category.error.show
                })
            });
    },

    getByName: (req = request, res = response) => {
        const name = req.params.name;
        connection.getCategoryByName(name)
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.category.success.show,
                        'data': data
                    })
                } else {
                    res.status(404).json({
                        'msg': msg.category.error.notMatch,
                        'data': data
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.category.error.show
                })
            })
    },

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