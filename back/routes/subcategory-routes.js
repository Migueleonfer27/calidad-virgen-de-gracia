import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { subcategoryController } from '../controllers/subcategory-controller.js';
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
