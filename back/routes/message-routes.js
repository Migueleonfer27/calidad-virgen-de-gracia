// Daniel Cruz
import { Router } from "express";
import { messageController } from "../controllers/message-controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { check } from "express-validator";

export const router = Router();

router.delete('/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt(),
        check('id', 'El id es obligatorio').notEmpty(),
        validarCampos
    ], messageController.delete);

router.post('/', 
    [
        check('subject', 'El asunto tiene que ser una cadena de texto.').isString(),
        check('subject', 'El asunto es obligatorio.').notEmpty(),
        check('message', 'El cuerpo del mensaje tiene que ser una cadena de texto.').isString(),
        check('message', 'El cuerpo del mensaje es obligatorio.').notEmpty(),
        check('userId', 'El id del usuario debe ser de tipo numérico.').isInt(),
        check('userId', 'El id del usuario es obligatorio').notEmpty(),
        validarCampos
    ], messageController.insert);

router.get('/user/:id', 
    [
        check('id', 'El id del usuario debe ser de tipo numérico.').isInt(),
        check('id', 'El id del usuario es obligatorio.').notEmpty(),
        validarCampos
    ], messageController.getUserMessages);

router.get('/:id', 
    [
        check('id', 'El id debe ser de tipo numérico.').isInt(),
        check('id', 'El id es obligatorio').notEmpty(),
        validarCampos
    ], messageController.getById);

router.get('/', messageController.get);

