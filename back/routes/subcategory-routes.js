
// Gema Rubio y Daniel Cruz
import { Router } from 'express';
import { check } from 'express-validator';
import { categoryExist } from '../helpers/db-validator.js';
import { validarCampos } from '../middlewares/validar-campos.js';
import { subcategoryController } from '../controllers/subcategory-controller.js';
import { validateJWT } from '../middlewares/auth-middleware.js';
import { isRolValid } from '../middlewares/abilities-middleware.js';
import { abilities } from '../helpers/abilities.js';
export const router = Router();

router.get('/', subcategoryController.get);

router.get('/getById/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(), 
        validarCampos
    ], subcategoryController.getById);

router.get('/getByName/:name', 
    [
        check('name', 'El nombre debe debe ser una cadena de texto.').isString().notEmpty(),
        validarCampos
    ], subcategoryController.getByName);

router.get('/getByCategoryId/:id',
     [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(), 
        validarCampos
     ], subcategoryController.getByCategoryId);
router.post('/insert',[check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('id_category', 'El id_categoria debe tener al menos un valor').isLength({ min: 1 }),
    check('id_category').custom( categoryExist ).withMessage('La categoria asignada no existe en el sistema.'),
    validarCampos
 ], validateJWT,isRolValid(abilities.createSubcategory),subcategoryController.insert)
router.delete('/delete/:id',
    validateJWT,isRolValid(abilities.deleteSubcategory),subcategoryController.delete)
router.put('/update',
    validateJWT,isRolValid(abilities.updateSubcategory),subcategoryController.update)

