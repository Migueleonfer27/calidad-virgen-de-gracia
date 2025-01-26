import { Router } from 'express';
import {subcategoryController} from '../controllers/subCategoryController.js'
import { check } from 'express-validator';
import { categoryExist } from '../helpers/db-validator.js';
import { validarCampos } from '../middlewares/validar-campos.js';
export const router = Router();

router.post('/insert',[check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('id_category', 'El id_categoria debe tener al menos un valor').isLength({ min: 1 }),
    check('id_category').custom( categoryExist ).withMessage('La categoria asignada no existe en el sistema.'),
    validarCampos
 ],subcategoryController.insert)
router.delete('/delete/:id',subcategoryController.delete)
router.put('/update',subcategoryController.update)
