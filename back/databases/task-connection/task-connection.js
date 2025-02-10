/**
 * @Gema */
import { Op } from 'sequelize';
import { Roles, Task, TaskUser, Users, UsersRoles ,TaskDocument, Document} from '../../models/associations.js';


export class TaskConnection {
    //State:1->toDo 2->done

    insertTask = async (task, idUser, idDocument) => {
        const newTask = new Task()
        newTask.description = task.description;
        newTask.end_date = task.end_date
        let result = 0;
        let resultTask;
        try {
            resultTask = await newTask.save();
            const assignedTask = new TaskUser()
            assignedTask.id_user = idUser
            assignedTask.id_task = resultTask.id
            assignedTask.state = 1
            result = await assignTask(assignedTask)
            idDocument.forEach(async (element) => {
                const taskDocument=new TaskDocument()
                taskDocument.id_task=resultTask.id
                taskDocument.id_document=idDocument
                result =await assignDocuments(element)
            });
           
        } catch (error) {
            resultTask = error
            throw error;

        }
        return resultTask;
    }

    insertTaskByRole = async (task, idDocument) => {
        const newTask = new Task()
        
        newTask.description = task.description;
        newTask.end_date = task.end_date
        newTask.type=task.type
        let us = []
        let resultTask;
        let users;
        try {
            resultTask = await newTask.save();
            users = await getUserByRole(newTask.type)
            console.log()
            users[0].dataValues.Users.forEach(async (user) => {

                const assignedTask = new TaskUser()
                assignedTask.id_user = user.dataValues.id
                assignedTask.id_task = resultTask.id
                assignedTask.state = 1
                await assignTask(assignedTask)
               
            })
            idDocument.forEach(async (element) => {
                const taskDocument=new TaskDocument()
                taskDocument.id_task=resultTask.id
                taskDocument.id_document=element
                await assignDocuments(taskDocument)
            });

        } catch (error) {
            resultTask = error
            throw error;

        }
        return resultTask;
    }

    getTaskByIdUser = async (id) => {
        let resultado = [];
        try {
            resultado = await Users.findOne({
                where: { id: id },
                include: [
                    {
                        model: Task,
                        attributes: ['id', 'description', 'end_date'],
                        through: {
                            attributes: ['state', 'id_user'],
                        },
                        include:[
                            {
                                model: Document,
                                attributes: ['id','name','code','url'],
                                through: {
                                    attributes: [],
                                }
                            }
                        ]

                    }
                ],
                attributes: [],
            });


        } catch (err) {
            throw err
        }

        return resultado;
    }
    getAllTask = async () => {
        let resultado = [];
        resultado = await Task.findAll({
            attributes: ['id', 'description', 'type','end_date'],
            include: [
                {
                    model: Users,
                    through: {
                        attributes: ['state']
                    },
                    attributes: ['id', 'first_name', 'last_name'],
                  
                   
                },
                {
                    model: Document,
                    through: {
                        attributes: []
                    },
                    attributes: ['id','name','code','url'],
                  
                }
                
            ],
           
        })

        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    updateTask = async (task) => {
        let result = [];

        result = await Task.findByPk(task.id)
        console.log(result)
        if (result == null) {
            throw error
        }
        result = await result.update(task)

        return result
    }

    updateTaskFromUser = async (taskUser) => {
        //State:1->toDo 2->done
        let result = [];

        const task = await TaskUser.findOne({
            where: {
                [Op.and]: {
                    id_user: {
                        [Op.eq]: taskUser.id_user
                    },
                    id_task: {
                        [Op.eq]: taskUser.id_task
                    }
                }

            }

        })

        if (result == null) {
            throw error
        }
        task.state = taskUser.state
        result = await task.save()

        return result
    }

    deleteTaskFromUser = async (idTask, idUser) => {
        let result = [];
        try {
            const taskUser = await TaskUser.findOne({
                where: {
                    [Op.and]: {
                        id_user: {
                            [Op.eq]: idUser
                        },
                        id_task: {
                            [Op.eq]: idTask
                        }
                    }

                }
            })
            console.log(taskUser)

            result = await taskUser.destroy()
        } catch (err) {
            throw err
        }
        return result
    }

    deleteTask = async (idTask) => {
        let result = [];
        try {
            const task = await Task.findByPk(idTask)
            result = await task.destroy()
            const taskUser = await TaskUser.findAll({
                where: {
                    id_task: {
                        [Op.eq]: idTask
                    }
                }
            })
            const taskDocument= await TaskDocument.findAll({
                where: {
                    id_task: {
                        [Op.eq]: idTask
                    }
                }
            })


            if (task && taskUser.length > 0 && taskDocument.length > 0) {

                taskUser.forEach(element => {
                    element.destroy()
                });
                taskDocument.forEach(element => {
                    element.destroy()
                })
            }


        } catch (err) {
            throw err
        }
        return result
    }




}

const getUserByRole = async (role) => {
    let users = []
    try {
        users = await Roles.findAll({
            where: { id: role },
            attributes: [],
            include: [
                {
                    model: Users,
                    attributes: ['id'],
                    through: {
                        attributes: []
                    }


                }
            ],

        });

    } catch (error) {
        throw error
    }
    return users

}

const assignDocuments = async (assignedDocuments) => {
    let result
    try {

        result = await assignedDocuments.save();

    } catch (error) {
        //resultTask=error.errors[0].message
        throw error;

    }

    return result
}
const assignTask = async (assignedTask) => {
    let result
    try {

        result = await assignedTask.save();

    } catch (error) {
        //resultTask=error.errors[0].message
        throw error;

    }

    return result
}
export default TaskConnection