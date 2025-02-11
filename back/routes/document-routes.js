import { Router } from "express";
import { documentController } from "../controllers/document-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";

export const router = Router();

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