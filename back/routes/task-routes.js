import { Router } from 'express';
import { check } from 'express-validator';
import { taskController } from '../controllers/task-controller.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { isRolValid } from '../middlewares/abilities-middleware.js';
import { abilities } from '../helpers/abilities.js';
import { validateJWT } from '../middlewares/auth-middleware.js';
import { isMyTask } from '../middlewares/task-middleware.js';
export const router = Router();

router.put('/updateState',validateJWT,isRolValid(abilities.updateStateTask),isMyTask,taskController.updateFromUser)
router.delete('/deleteFromUser',validateJWT,isRolValid(abilities.deleteMyTask), isMyTask, taskController.deleteFromUser);
router.delete('/delete/:id',validateJWT,isRolValid(abilities.deleteTask), taskController.delete);
router.post('/insert', [
    check('task.description', 'La descripción es obligatorio').not().isEmpty(),
    check('task.end_date', 'La fecha es obligatoria').not().isEmpty(),
    check('id_document[0]', 'Debe ser asignado algún documento').not().isEmpty(),
    validarCampos
],validateJWT,isRolValid(abilities.createTask),taskController.insert);
router.post('/insertByRole', [
    check('task.description', 'La descripción es obligatorio').not().isEmpty(),
    check('task.end_date', 'La fecha es obligatoria').not().isEmpty(),
    check('task.type', 'Debe asignarse un rol').not().isEmpty(),
    check('id_document[0]', 'Debe ser asignado algún documento').not().isEmpty(),
    validarCampos
],validateJWT,isRolValid(abilities.createTask),taskController.insertByRole);
router.get('/getById/:id',validateJWT,isRolValid(abilities.getMyTask),isMyTask, taskController.getByIdUser);
router.get('/',validateJWT,isRolValid(abilities.getTasks), taskController.getAll);
router.put('/', [
    check('description', 'La descripción es obligatorio').not().isEmpty(),
    check('end_date', 'La fecha es obligatoria').not().isEmpty(),
    validarCampos
],validateJWT,isRolValid(abilities.updateTask),taskController.update);
