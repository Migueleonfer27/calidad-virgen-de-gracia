import { Router } from 'express';
import { check } from 'express-validator';
import { taskController } from '../controllers/task-controller.js';


export const router = Router();
router.put('/updateState',taskController.updateFromUser)
router.delete('/deleteFromUser', taskController.deleteFromUser);
router.delete('/delete/:id', taskController.delete);
router.post('/insert', taskController.insert);
router.post('/insertByRole', taskController.insertByRole);
router.get('/getById/:id', taskController.getByIdUser);
router.get('/', taskController.getAll);
router.put('/', taskController.update);
