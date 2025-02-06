import { Op } from 'sequelize';
import { Task, TaskUser, Users } from '../../models/associations.js';

export class TaskConnection {
    insertTask = async (task, idUser) => {
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
            result = await assignTask(assignedTask)
        } catch (error) {
            resultTask = error
            throw error;

        }
        return resultTask;
    }

    getTaskByIdUser = async (id) => {
        let resultado = [];
        try{
            resultado = await Users.findByPk(id, {
                attributes: [],
                include: [
                    {
                        model: Task,
                        through: {
                            attributes: []
                        },
                        attributes: ['id', 'description', 'end_date']
                    }
                ]
            })

        }catch(err){
            throw err
        }
       
        return resultado;
    }
    getAllTask = async () => {
        let resultado = [];
        resultado = await Task.findAll({
            attributes: ['id', 'description', 'end_date'],
            include: [
                {
                    model: Users,
                    through: {
                        attributes: []
                    },
                    attributes: ['id', 'first_name', 'last_name']
                }
            ]
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

    deleteTaskFromUser  = async (idTask,idUser) => {
        let result = [];
        try{
            const taskUser = await TaskUser.findAll({
                where: {
                    [Op.and]:{
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
           
            result = await taskUser[0].destroy()
        }catch(err){
            throw err
        }
        return result
    }

    deleteTask  = async (idTask) => {
        let result = [];
        try{
            const task = await Task.findByPk(idTask)
            const taskUser=await TaskUser.findAll({
                where: {
                    id_task:{
                        [Op.eq]:idTask
                    }
                }
            })

          
            if(task && taskUser.length>0){
                result=task.destroy()
                taskUser.forEach(element => {
                    element.destroy()
                });
            }
           
           
        }catch(err){
            throw err
        }
        return result
    }



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