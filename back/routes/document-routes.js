import { Router } from "express";
import { documentController } from "../controllers/document-controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";

export const router = Router();

router.get('/:id',
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], documentController.getById);

router.get('/', documentController.get);