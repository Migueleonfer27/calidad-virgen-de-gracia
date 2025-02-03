// Gema Rubio y Daniel Cruz
import { response, request } from 'express';
import { SubcategoryConnection } from '../databases/categories-connection/subcategory-connection.js';
import { messages as msg } from '../helpers/messages-controllers.js';

const connection = new SubcategoryConnection();

export const subcategoryController = {

    get: (req = request, res = response) => {
        connection.getSubcategories()
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.subcategory.success.index,
                        'data': data
                    });
                } else {
                    res.status(203).json({
                        'msg': msg.subcategory.error.notFound
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.subcategory.error.index
                })
            })
    },
    
    getById: (req = request, res = response) => {
        const id = req.params.id;
        connection.getSubcategoryById(id)
            .then(data => {
                res.status(200).json({
                    'msg': msg.subcategory.success.show,
                    'data': data
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.subcategory.error.show
                })
            });
    },

    getByName: (req = request, res = response) => {
        const name = req.params.name;
        connection.getSubcategoryByName(name)
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.subcategory.success.show,
                        'data': data
                    })
                } else {
                    res.status(203).json({
                        'msg': msg.subcategory.error.notFound
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.subcategory.error.show
                })
            })
    },

    getByCategoryId: (req = request, res = response) => {
        const categoryId = req.params.id;
        connection.getSubcategoriesFromCategory(categoryId)
            .then(data => {
                if (data.length > 0) {
                    res.status(200).json({
                        'msg': msg.subcategory.success.index,
                        'data': data
                    })
                } else {
                    res.status(203).json({
                        'msg': msg.subcategory.error.notFound
                    })
                }
            })
            .catch( err => {
                res.status(500).json({
                    'msg': msg.subcategory.error.show
                })
            })

    },
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

