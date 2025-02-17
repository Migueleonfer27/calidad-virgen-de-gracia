import { Router } from 'express';
import { check } from 'express-validator';
import { taskController } from '../controllers/task-controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';

export const router = Router();
router.put('/updateState',taskController.updateFromUser)
router.delete('/deleteFromUser', taskController.deleteFromUser);
router.delete('/delete/:id', taskController.delete);
router.post('/insert', [
    check('task.description', 'La descripción es obligatorio').not().isEmpty(),
    check('task.end_date', 'La fecha es obligatoria').not().isEmpty(),
    check('id_document[0]', 'Debe ser asignado algún documento').not().isEmpty(),
    validarCampos
],taskController.insert);
router.post('/insertByRole', [
    check('task.description', 'La descripción es obligatorio').not().isEmpty(),
    check('task.end_date', 'La fecha es obligatoria').not().isEmpty(),
    check('task.type', 'Debe asignarse un rol').not().isEmpty(),
    check('id_document[0]', 'Debe ser asignado algún documento').not().isEmpty(),
    validarCampos
],taskController.insertByRole);
router.get('/getById/:id', taskController.getByIdUser);
router.get('/', taskController.getAll);
router.put('/', [
    check('description', 'La descripción es obligatorio').not().isEmpty(),
    check('end_date', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
],taskController.update);
