import { response, request } from 'express';
import { TaskConnection } from '../databases/task-connection/task-connection.js';


const connection = new TaskConnection();

export const taskController = {
    insert: (req = request, res = response) => {
        let result
        connection.insertTask(req.body.task, req.body.id_user)
            .then(data => {
                result = 1
                console.log('Task insertada correctamente!');
                res.status(201).json({
                    cod: result,
                    data: data
                });
            })
            .catch(err => {
                console.log(err);
                result = 0
                res.status(203).json({
                    cod: result,
                    error: err
                });
            });

    },

    getByIdUser:(req = request, res = response) =>{
        let result
        connection.getTaskByIdUser(req.params.id)
            .then(data => {
                result = 1
                console.log('Task insertada correctamente!');
                res.status(201).json({
                    cod: result,
                    data: data
                });
            })
            .catch(err => {
                console.log(err);
                result = 0
                res.status(203).json({
                    cod: result,
                    error: err
                });
            });
    },
    getAll: (req = request, res = response) =>{
        let result
        connection.getAllTask()
            .then(data => {
                result = 1
                console.log('Task insertada correctamente!');
                res.status(201).json({
                    cod: result,
                    data: data
                });
            })
            .catch(err => {
                console.log(err);
                result = 0
                res.status(203).json({
                    cod: result,
                    error: err
                });
            });
    },

    update: (req = request, res = response) =>{

        let result
        console.log(req.body)
        connection.updateTask(req.body)   
        
        .then( data => {
            result=1
            console.log('Tarea actualizada correctamente!');
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
    },

    deleteFromUser: (req = request, res = response) =>{

        let result
        console.log(req.body)
        connection.deleteTaskFromUser(req.body.id_task, req.body.id_user)   
        
        .then( data => {
            result=1
            console.log('Tarea borrada correctamente')
            res.status(201).json({cod:result,
                                    data:data});
        })
        .catch( err => {
            result=0
            console.log('sin resultados!'+err);
            res.status(203).json({cod:result,
                                error:err  
                                });
        });
    },

    delete: (req = request, res = response) =>{

        let result
       
        connection.deleteTask(req.params.id)   
        
        .then( data => {
            result=1
            console.log('Tarea borrada correctamente')
            res.status(201).json({cod:result,
                                    data:data});
        })
        .catch( err => {
            result=0
            console.log('sin resultados!'+err);
            res.status(203).json({cod:result,
                                error:err  
                                });
        });
    }
}