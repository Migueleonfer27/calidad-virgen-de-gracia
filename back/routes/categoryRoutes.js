import { Router } from 'express';
import {categoryController} from '../controllers/categoryController.js'
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
export const router = Router();

router.post('/insert',[check('name', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
 ],categoryController.insert)
router.delete('/delete/:id',categoryController.delete)
router.put('/update',categoryController.update)
