import { Router } from "express";
import { documentController } from "../controllers/document-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";

export const router = Router();

router.delete('/delete/:id',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], documentController.delete);

router.post('/', 
    [
        check('name', 'El nombre es obligatorio.').isString().notEmpty(),
        check('code', 'El code es obligatorio.').isString().notEmpty(),
        check('url', 'La url es obligatoria.').isString().notEmpty(),
        check('id_subcategory', 'El id_subcategory es obligatorio').isInt().notEmpty(),
        validarCampos
    ], documentController.insert);

router.get('/getById/:id',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], documentController.getById);

router.get('/getByName/:name',
    [
        check('name', 'El nombre debe debe ser una cadena de texto.').isString().notEmpty(),
        validarCampos
    ], documentController.getByName);

router.get('/getBySubcategoryId/:id',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], documentController.getBySubcategoryId);

router.get('/', documentController.get);