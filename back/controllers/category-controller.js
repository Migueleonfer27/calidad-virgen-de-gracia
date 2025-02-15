// Gema Rubio y Daniel Cruz
import { response, request } from 'express';
import { CategoryConnection } from '../databases/categories-connection/category-connection.js'
import { messages as msg } from '../helpers/messages-controllers.js';
import { DocumentConnection } from '../databases/documents/documents-connection.js'

const connection = new CategoryConnection();
const docuementConnection = new DocumentConnection()
export const categoryController = {

    get: (req, res = response) => {
      connection.getCategories()
        .then(data => {
            if (data.length > 0) {
                res.status(200).json({
                    'msg': msg.category.success.index,
                    'data': data
                });
            } else {
                res.status(203).json({
                    'msg': msg.category.error.notFound,
                    'data': data
                })
            }
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
                    res.status(203).json({
                        'msg': msg.category.error.notFound,
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

   

    delete: async (req = request, res=response)=>{
        let result
          //result: va todo bien 1, algo ha ido mal 0, si la subcategoria tiene documentos 2
        const documents=await docuementConnection.getDocumentsFromCategory(req.params.id)
        
        if(!documents || !documents.subcategories || documents.subcategories.every(sub => sub.documents.length == 0)){
            
            connection.deleteCategory(req.params.id)    
            .then( data => {
                result=1
                console.log('Categoría borrada correctamente!');
                res.status(201).json({cod:result,
                                    data:data,doc:documents});
            })
            .catch( err => {
                console.log(err);
    
                result=0
                res.status(203).json({cod:result,
                                        error:err  
                                        });
            });
           
        }else{
            result=2
            res.status(203).json({cod:result,
                data:[],doc:documents
                });
          
       
        }
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