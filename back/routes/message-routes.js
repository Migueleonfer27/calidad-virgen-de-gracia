// Daniel Cruz
import { Router } from "express";
import { messageController } from "../controllers/message-controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { check } from "express-validator";

export const router = Router();

router.delete('/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], messageController.delete);

router.post('/', messageController.insert);

router.get('/user/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], messageController.getUserMessages);

router.get('/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt().notEmpty(),
        validarCampos
    ], messageController.getById);

router.get('/', messageController.get);

