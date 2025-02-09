/**
 * @Gema */
import { response, request } from 'express';
import { TaskConnection } from '../databases/task-connection/task-connection.js';
import TaskUser from '../models/task-user.js';


const connection = new TaskConnection();

export const taskController = {
    insert: (req = request, res = response) => {
        let result
        connection.insertTask(req.body.task, req.body.id_user,req.body.id_document)
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
    insertByRole:(req = request, res = response) => {
        let result
        connection.insertTaskByRole(req.body.task,req.body.id_document)
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
                console.log('Task consultada correctamente!');
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
    updateFromUser: (req = request, res = response) =>{

        let result
        
        const taskUser=new TaskUser()
        taskUser.id_user=req.body.id_user
        taskUser.id_task=req.body.id_task
        taskUser.state=req.body.state
        console.log('Tarea: '+taskUser)
        connection.updateTaskFromUser(taskUser)  
        
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