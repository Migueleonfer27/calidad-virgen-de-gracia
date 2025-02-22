import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { abilitiesController } from "../controllers/ability-role-controller.js";

export const router = Router();

// Gema
router.post(
    "/addAbilities",
    [check("id_rol", "El rol es obligatorio").not().isEmpty(), validarCampos],
    abilitiesController.addAbilities
);

// Miguel
router.get(
    "/:idRole",
    [check("idRole", "El rol es obligatorio").not().isEmpty().isNumeric(), validarCampos],
    abilitiesController.getAbilitiesByRole
);

// Miguel
router.get(
    '/:idUser/:idRole',
    [check("idUser", "Id del usuario requerido y formateado como número").not().isEmpty().isNumeric(), validarCampos],
    [check("idRole", "Id del rol requerido y formateado como número").not().isEmpty().isNumeric(), validarCampos],
    abilitiesController.getAbilitiesByUser
);