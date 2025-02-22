import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middlewares/validar-campos.js';
import { abilitiesController } from '../controllers/ability-role-controller.js';

export const router = Router();
router.post('/addAbilities',[check('id_rol', 'El rol es obligatorio').not().isEmpty(),
    validarCampos

 ],abilitiesController.addAbilities)