// Daniel Cruz
import { Router } from "express";
import { documentController } from "../controllers/document-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validateJWT } from "../middlewares/auth-middleware.js";
import { isRolValid } from "../middlewares/abilities-middleware.js";
import { abilities } from "../helpers/abilities.js";

export const router = Router();

router.delete('/delete/:id',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], validateJWT,isRolValid(abilities.deleteDocument), documentController.delete);

router.put('/update',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        check('name', 'El nombre es obligatorio.').isString().notEmpty(),
        check('code', 'El code es obligatorio.').isString().notEmpty(),
        check('url', 'La url es obligatoria.').isString().notEmpty(),
        validarCampos
    ], validateJWT,isRolValid(abilities.updateDocument), documentController.update);

router.post('/', 
    [
        check('name', 'El nombre es obligatorio.').isString().notEmpty(),
        check('code', 'El code es obligatorio.').isString().notEmpty(),
        check('url', 'La url es obligatoria.').isString().notEmpty(),
        check('id_subcategory', 'El id_subcategory es obligatorio').isInt().notEmpty(),
        validarCampos
    ], validateJWT,isRolValid(abilities.createDocument), documentController.insert);

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